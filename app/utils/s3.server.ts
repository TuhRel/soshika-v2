import S3 from 'aws-sdk/clients/s3'
import { prisma } from './prisma.server'


const s3 = new S3({
  region: process.env.SSP_BUCKET_REGION,
  accessKeyId: process.env.SSP_ACCESS_KEY_ID,
  secretAccessKey: process.env.SSP_SECRET_ACCESS_KEY
})