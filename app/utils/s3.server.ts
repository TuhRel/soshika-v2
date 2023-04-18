import S3 from 'aws-sdk/clients/s3'
import cuid from 'cuid'
import {
  unstable_parseMultipartFormData,
  type UploadHandler
} from '@remix-run/node'
import { prisma } from './prisma.server'


const s3 = new S3({
    accessKeyId: process.env.SSP_ACCESS_KEY_ID,
    secretAccessKey: process.env.SSP_SECRET_ACCESS_KEY,
})

const uploadHandler: UploadHandler = async ({ name, filename, data }) => {
  if (name !== 'photos') return

  let image: Uint8Array = new Uint8Array([])

  for await (const x of data) {
    image = new Uint8Array([...image, ...x])
  }

  const { Location } = await s3.upload({
    Bucket: process.env.SSP_BUCKET_NAME || '',
    Key: `${cuid()}.${filename?.split(".").slice(-1)}`,
    Body: data,
  }).promise()

  return Location
}

export async function uploadImages(request: Request) {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  )

  const file = formData.get('photos')?.toString() || ''

  return file
}

// Get existing s3 bucket item(s) URL(s)
export const getImageUrls = async () => {

  const bucketName = process.env.SSP_BUCKET_NAME || ''
  const prefix = 'branding-images/'
  const listObjectsParams = {
    Bucket: bucketName,
    Prefix: prefix
  }

  try {
    const data = await s3.listObjectsV2(listObjectsParams).promise()

    const urls = data.Contents?.map(obj => {
      return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`
    })

    console.log(urls)

    await prisma?.brandingGallery?.createMany({
      data: {
        imageName: urls?.map((url) => ({ url })).toString() || ''
      }
    })

    console.log('Upload Success')
  } catch (err) {
    console.error(err)
  }
  // s3.listObjectsV2(listObjectsParams, (err, data) => {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  
    // const urls = data.Contents?.map(obj => {
    //   return `https://${bucketName}.s3.amazonaws.com/${obj.Key}`
    // })
  
    // console.log(urls)

    // prisma?.brandingGallery?.create({
    //   data: {
    //     imageName: urls?.map((url) => ({ url })).toString() || ''
    //   }
    // })
  // })
}

// Store existing s3 bucket item(s) URL(s) in MongoDB
