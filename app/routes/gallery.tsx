import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { Layout } from "~/components/layout";
import { requireAdminUserId } from "~/utils/auth.server";
import { prisma } from "~/utils/prisma.server";
import { uploadImages } from "~/utils/s3.server";


export const action: ActionFunction = async ({ request }) => {
  const userId = await requireAdminUserId(request)

}