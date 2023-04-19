import { requireUserId } from "~/utils/auth.server";
import { json, LoaderFunction } from "@remix-run/node";
import { Layout } from "~/components/layout";
import HeroSection from "~/components/hero-section";
import SubmenuBanner from "~/components/submenu-banner";
import Submenu from "~/components/submenu";
import PortfolioBanner from "~/components/portfolio-banner";
import Portfolio from "~/components/portfolio-section";
import { getOtherUsers } from "~/utils/users.server";
import { useLoaderData } from "@remix-run/react";
import { generatePresignedUrlsForFolder } from "~/utils/s3.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const users = await getOtherUsers(userId)
  const images = await generatePresignedUrlsForFolder('home-page-images', 600)
  return json({ users, images })
}

export default function Home() {
  const { users } = useLoaderData()

  return (
    <Layout>
      <HeroSection />
      <SubmenuBanner />
      <Submenu />
      <PortfolioBanner />
      <Portfolio />
    </Layout>  )
}