import { Layout } from "~/components/layout";

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex h-full w-full justify-center items-center bg-slate-50 p-2.5">
        <div className="flex h-4/6 w-96 flex-col justify-center items-center mt-24">
          <div className="grid grid-cols-3 w-full gap-6 justify-cnter items-center">
            Portfolio
          </div>
        </div>
      </div>
    </Layout>
  )
}