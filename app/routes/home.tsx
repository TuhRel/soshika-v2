import { requireUserId } from "~/utils/auth.server";
import { LoaderFunction } from "@remix-run/node";
import { Layout } from "~/components/layout";
import HeroSection from "~/components/hero-section";
import SubmenuBanner from "~/components/submenu-banner";
import Submenu from "~/components/submenu";
import PortfolioBanner from "~/components/portfolio-banner";
import Portfolio from "~/components/portfolio";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  return null
}

export default function Home() {

  return (
    <Layout>
      <HeroSection />
      <SubmenuBanner />
      <Submenu />
      <PortfolioBanner />
      <Portfolio />
    </Layout>  )
}