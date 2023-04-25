import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { generatePresignedUrlsForFolder } from "~/utils/s3.server";
import { useRouteLoaderData } from "@remix-run/react";


// export const action: ActionFunction = async ({ request }) => {
//   const userId = await requireAdminUserId(request)

// }

export const loader: LoaderFunction = async ({ request }) => {
  const images = await generatePresignedUrlsForFolder('branding-images', 600)
  return json({ images })
}

export default function Gallery() {
  const { images } = useLoaderData<{ images: string[] }>()
  // console.log(images)

  return (
    <>
    {images?.slice(1).map((image: string) => {
      return (
        <div className="flex flex-col object-cover justify-center items-center max-h-96 w-full overflow-hidden" key={image}>
          <img src={image} alt='alt' />
        </div>
      )
    })}
    </>
  )
}