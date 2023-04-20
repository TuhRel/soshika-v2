import { Layout } from "~/components/layout";
import { LoaderFunction, json } from "@remix-run/node";
import { generatePresignedUrlsForFolder } from "~/utils/s3.server";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const images = await generatePresignedUrlsForFolder('gallery-cover-images', 600)
  return json({ images })
}

export default function Portfolio() {
  const { images } = useLoaderData<{images: string[]}>()
  // console.log(images)

  return (
    <Layout>
      <div className="flex w-full justify-center items-center bg-slate-50 p-2.5">
        <div className="flex md:w-11/12 flex-col justify-center items-center mt-24">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full gap-6 justify-center items-center">
            {images.slice(1).map((image: string, index) => {
              return (
                <div className="w-full h-full" key={image}>
                  <Link
                    to={index === 0 ? '/portfolio/wedding' : index === 1 ? '/portfolio/portrait' : index === 2 ? '/portfolio/graduation': index === 3 ? '/portfolio/couples' : index === 4 ? '/portfolio/maternity' : '/portfolio/branding'}
                    className="flex flex-col object-cover justify-center items-center w-full p-10 hover:scale-110 duration-200 ease-in-out transition-all">
                    <img src={image} alt='image' />
                  </Link>
                  <div className="uppercase p-2.5 tracking-widest w-full text-center">
                  {index === 0 ? 'wedding' : index === 1 ? 'portrait' : index === 2 ? 'graduation': index === 3 ? 'couples' : index === 4 ? 'maternity' : 'branding'}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}