import S3 from 'aws-sdk/clients/s3'
import cuid from 'cuid'
import {
  unstable_parseMultipartFormData,
  type UploadHandler
} from '@remix-run/node'
import { prisma } from './prisma.server'

//Create the s3 environment
const s3 = new S3({
    accessKeyId: process.env.SSP_ACCESS_KEY_ID,
    secretAccessKey: process.env.SSP_SECRET_ACCESS_KEY,
})

// Get presigned URL for item
export const generatePresignedUrl = async (key: string, expirationTimeInSeconds: number): Promise<string> => {
  const params = {
    Bucket: process.env.SSP_BUCKET_NAME || '',
    Key: key,
    Expires: expirationTimeInSeconds,
  };

  return s3.getSignedUrlPromise('getObject', params);
};

// Get presigned URLs for s3 bucket items in folder and display them in the app (future - store them in mongodb)
export const generatePresignedUrlsForFolder = async (folderPath: string, expirationTimeInSeconds: number): Promise<string[]> => {
  const params = {
    Bucket: process.env.SSP_BUCKET_NAME || '',
    Prefix: `${folderPath}/`,
  };

  const data = await s3.listObjectsV2(params).promise();

  const objectKeys = data.Contents?.map((item) => item.Key).filter(Boolean) || [];

  const presignedUrls = await Promise.all(
    objectKeys.map((key) => generatePresignedUrl(key!, expirationTimeInSeconds))
  );
  
  // console.log(presignedUrls);
  return presignedUrls;
};

//Upload profile photo (not used)
// const uploadHandler: UploadHandler = async ({ name, filename, data }) => {
//   if (name !== 'photos') return

//   let image: Uint8Array = new Uint8Array([])

//   for await (const x of data) {
//     image = new Uint8Array([...image, ...x])
//   }

//   const { Location } = await s3.upload({
//     Bucket: process.env.SSP_BUCKET_NAME || '',
//     Key: `${cuid()}.${filename?.split(".").slice(-1)}`,
//     Body: data,
//   }).promise()

//   return Location
// }

// export async function uploadImages(request: Request) {
//   const formData = await unstable_parseMultipartFormData(
//     request,
//     uploadHandler
//   )

//   const file = formData.get('photos')?.toString() || ''

//   return file
// }

// Get existing s3 bucket item(s) URL(s) and store them in MongoDB
// export const getImageUrls = async () => {

//   const bucketName = process.env.SSP_BUCKET_NAME || ''
//   const prefix = 'branding-images/'
//   const listObjectsParams = {
//     Bucket: bucketName,
//     Prefix: prefix
//   }

//   try {
//     const data = await s3.listObjectsV2(listObjectsParams).promise()

//     const urls = data.Contents?.map(obj => {
//       return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`
//     })

//     console.log(urls)

//     await prisma?.brandingGallery?.createMany({
//       data: urls?.map((url) => ({ imageName: url })) || []
//     })

//     console.log('Upload Success')
//   } catch (err) {
//     console.error(err)
//   }
// }