import { Layout } from "~/components/layout";
import image from '~/images/aboutPage/shika-johnson-photographer-1.jpg'
import { Photographer } from "~/constants/constants";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col w-full justify-center items-center bg-slate-50">
        <div className="flex h-full w-full justify-center items-center">
          <div className="grid lg:grid-cols-2 w-11/12 lg:w-5/6 gap-2.5 lg:mt-28 justify-center items-center">
            <div className="flex flex-col w-full h-full bg-[#556b2f40]">
              <div className="mt-16 text-3xl font-base uppercase text-center font-extralight">
                Meet the Photographer
              </div>
              <div className="flex justify-center h-3/4 p-5 text-sm font-thin tracking-wider">
                {Photographer}
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