import { requireUserId } from "~/utils/auth.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  // await requireUserId(request)
  return redirect('/home')
}