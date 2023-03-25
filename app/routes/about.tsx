import { Layout } from "~/components/layout";

export default function About() {
  return (
    <Layout>
    <div className="flex h-screen flex-col w-full justify-center items-center bg-slate-100">
      <div className="grid grid-cols-2 w-80 gap-2.5 mt-28 justify-center items-center">
        <div className="flex flex-col justify-center items-center h-full bg-teal-600">
          <div className="font-lg uppercase text-center tracking-wider mt-5 font-light">
            About
          </div>
          <div className="font-base uppercase text-center pt-2.5 font-extralight">
            Meet the Photographer
          </div>
          <div className="flex justify-center items-center h-3/4 font-thin tracking-wider">
            Text about the photographer...
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full bg-teal-600">

        </div>
      </div>
    </div>
    </Layout>
  )
}