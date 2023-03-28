import { LoaderFunction } from "@remix-run/node"
import { requireAdminUserId } from "~/utils/auth.server"
import { useNavigate } from "@remix-run/react"
import { redirect } from "@remix-run/node"

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUserId(request)
  return null
}

export default function Admin() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen w-full bg-slate-400">
      <div className="flex w-full justify-center items-center bg-slate-400">
        <button
          className="flex justify-center items-center h-20 w-40 bg-indigo-400 uppercase tracking-widest"
          onClick={() => navigate('gallery-images')}>
          Upload
        </button>
      </div>
    </div>
  )
}