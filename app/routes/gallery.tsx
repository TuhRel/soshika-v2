// import { LoaderFunction, json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { Layout } from "~/components/layout";
// import { generatePresignedUrlsForFolder } from "~/utils/s3.server";
// import { ActionFunction } from "@remix-run/node";
// import { requireAdminUserId } from "~/utils/auth.server";


// export const action: ActionFunction = async ({ request }) => {
//   const userId = await requireAdminUserId(request)
//   return userId
// }

// export const loader: LoaderFunction = async ({ request }) => {
//   const images = await generatePresignedUrlsForFolder('wedding-images', 600)
//   return json({ images })
// }

// export default function Gallery() {
//   const { images } = useLoaderData<{images: string[]}>()
//   console.log(images)

//   return (
//     <Layout>
//       <div className="grid grid-cols-4 w-full ">
//         {images?.map((image: string) => {
//           return <img src={image} alt='alt' key={image}/>
//         })}
//       </div>
//     </Layout>
//   )
// }