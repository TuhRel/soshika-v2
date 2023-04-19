import { Link } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";
import { generatePresignedUrlsForFolder } from "~/utils/s3.server";
import { useLoaderData } from "@remix-run/react";

export default function Portfolio() {
  const { images } = useLoaderData<{images: string[]}>()
  // console.log(images)

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-50 pt-5">
      <div className="grid md:grid-cols-3 w-11/12">
        {images?.slice(1).map((image: string, index) => {
          return (
            <div className="flex relative justify-center items-center object-cover cursor-pointer w-full" key={image}>
              <img src={image} alt='alt' />
              <Link to={index === 0 ? '/portfolio/wedding' : index === 1 ? '/portfolio/portrait' : '/portfolio/graduation'} className="flex flex-col justify-center absolute w-full h-full text-slate-50 text-center uppercase tracking-widest bg-[#00000090] hover:bg-[#00000020] hover:transition-all duration-300 ease-in-out">
                <h6 className="text-base text-slate-50">view</h6>
                <p className="text-3xl text-slate-50">
                  {index === 0 ? 'wedding' : index === 1 ? 'portrait' : 'graduation'}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}