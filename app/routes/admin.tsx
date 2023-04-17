import { LoaderFunction } from "@remix-run/node"
import { requireAdminUserId } from "~/utils/auth.server"
import { Outlet } from "@remix-run/react"
import { Button } from "@mui/material"
import { useState } from "react"

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUserId(request)
  return null
}

const validFileType = ["image/jpg", "image/jpeg", "image/png"]

export default function Admin() {
  const [error, setError] = useState('')
  const handleUpload = async (file: File) => {
    let form = new FormData()
    form.append('photos', file)

    const response = await fetch('/gallery', {
      method: 'POST',
      body: form
    })
    const { imageUrl } = await response.json()
  }
  return (
    <>
    <Outlet />
    <div className="flex h-screen w-full bg-slate-400">
      <div className="flex flex-col w-full justify-center items-center bg-slate-400">
          <Button variant="contained" component="label">
            Upload
            <input id="imageInput" type="file" multiple hidden onChange={handleUpload} />
          </Button>
          {
            error && 
            <p className="font-light text-red-600">
              {error}
            </p>
          }
      </div>
    </div>
    </>
  )
}