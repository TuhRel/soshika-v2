import { ActionFunction, json } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";
import { uploadImages } from "~/utils/s3.server";
import { prisma } from "~/utils/prisma.server";

export const action: ActionFunction = async ({ request }) => {
  // 1
  const userId = await requireUserId(request);
  // 2
  const imageUrl = await uploadImages(request);

  // 3
  await prisma.galleries.create({
    data: {
      galleryName: imageUrl,
      gallery: {
        imageName: imageUrl
      },
    },
  })

  // 4
  return json({ imageUrl });
};