import { ActionFunction, LoaderFunction, redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { Layout } from "~/components/layout";
import { requireAdminUserId } from "~/utils/auth.server";
import { prisma } from "~/utils/prisma.server";
import { getImageUrls, uploadImages } from "~/utils/s3.server";


// export const action: ActionFunction = async ({ request }) => {
//   const userId = await requireAdminUserId(request)

// }

export const loader: LoaderFunction = async ({ request }) => {
  const images = await getImageUrls()
  return json({ images })
}

export default function Gallery() {
  const images = useLoaderData()
  console.log(images)

  return (
    <div>
    </div>
  )
}