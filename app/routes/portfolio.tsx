import { Outlet } from "@remix-run/react"
import { Layout } from "~/components/layout"
import { LoaderFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

// Get the current path
export const loader: LoaderFunction = async ({ request }) => {
  const { pathname } = new URL(request.url)
  return json({ pathname })
}

export default function Gallery() {
  // Use the current path
  const { pathname } = useLoaderData()

  // Set the portfolio title based on current path
  const galleryTitle = () => {
    switch (pathname) {
      case '/portfolio/wedding':
        return <p>Wedding Portfolio</p>
      case '/portfolio/portrait':
        return <p>Portrait Portfolio</p>
      case '/portfolio/graduation':
        return <p>Graduation Portfolio</p>
      case '/portfolio/couples':
        return <p>Couples Portfolio</p>
      case '/portfolio/maternity':
        return <p>Maternity Portfolio</p>
      case '/portfolio/branding':
        return <p>Branding Portfolio</p>
      default:
        return <p>Portfolio</p>
    }
  }

  return (
    <Layout>
      <div className="flex flex-col w-full bg-slate-50">
        <div className="flex flex-col w-full mt-20 justify-center items-center p-5">
          <div className="flex flex-row w-full py-10 px-0 tracking-widest justify-center">
            <div className="text-5xl font-thin tracking-widest">
              {galleryTitle()}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3">
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  )
}