import { Layout } from "~/components/layout";
import image from '~/images/aboutPage/shika-johnson-photographer-1.jpg'

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col w-full max-md:pt-16 justify-center items-center bg-slate-50">
        <div className="flex h-full w-full justify-center items-center">
          <div className="grid md:grid-cols-2 w-5/6 gap-2.5 md:mt-28 justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center h-full pb-5 bg-[#556b2f40]">
              <div className="mt-5 text-3xl font-base uppercase text-center font-extralight">
                Meet the Photographer
              </div>
              <div className="flex justify-center text-center h-3/4 pt-5 text-lg font-thin tracking-wider">
                Text about the photographer...
              </div>
                </div>
            <div className="flex flex-col object-cover justify-center items-center h-full bg-[#556b2f40]">
              <img src={image} alt="Shika Johnson, Photographer" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}