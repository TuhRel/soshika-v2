import { Layout } from "~/components/layout";



export default function Information() {

  return (
    <Layout>
    <div className="flex flex-col md:h-screen w-full justify-center items-center bg-slate-50">
      <div className="flex w-full h-96 mt-20 justify-center items-center bg-[url('~/images/informationPage/heroBackground.jpg')] bg-cover bg-no-repeat bg-fixed shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col w-full items-center justify-center leading-9">
          <h1 className="text-xl uppercase tracking-widest text-[#fafafa]">
            Details
          </h1>
          <p className="text-base uppercase tracking-widest text-[#fafafa]">
            Information & Pricing
          </p>
        </div>
      </div>
        <div className="flex w-full justify-center items-center bg-slate-50">
          <div className="grid md:w-full md:grid-cols-3 mt-24 bg-[#17141f50] gap-px justify-center items-center">
            <div className="flex w-full flex-col justify-center items-center leading-9 bg-slate-50 p-6">
              <p className="text-center text-base uppercase tracking-widest">
                Weddings
              </p>
              <p className="text-center text-xl uppercase tracking-widest pb-2.5">
                Starting at $950
              </p>
              <p className="text-base tracking-widest p-5">
                Details
              </p>
            </div>
            <div className="flex flex-col justify-center items-center leading-9 bg-slate-50 p-6">
              <p className="text-center text-base uppercase tracking-widest">
                Graduation
              </p>
              <p className="text-center text-xl uppercase tracking-widest pb-2.5">
                Starting at $200
              </p>
              <p className="text-base tracking-widest p-5">
                Details
              </p>
            </div>
            <div className="flex flex-col justify-center items-center leading-9 bg-slate-50 p-6">
              <p className="text-center text-base uppercase tracking-widest">
                Portrait
              </p>
              <p className="text-center text-xl uppercase tracking-widest pb-2.5">
                Starting at $280
              </p>
              <p className="text-base tracking-widest p-5">
                Details
              </p>
            </div>
          </div>
      </div>
    </div>
    </Layout>
  )
}