import { Outlet } from "@remix-run/react"
import { Layout } from "~/components/layout"

export default function Gallery() {

  return (
    <Layout>
      <div className="flex flex-col w-full bg-slate-100">
        <div className="flex flex-col w-full mt-20 justify-center items-center p-5">
          <div className="flex flex-row w-full py-10 px-0 tracking-widest justify-center">
            <div className="text-5xl font-thin tracking-widest">
              Branding Photography
            </div>
          </div>
          <div className="grid grid-cols-4 items-center justify-center gap-3">
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  )
}