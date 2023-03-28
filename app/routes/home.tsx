import { requireUserId } from "~/utils/auth.server";
import { json, LoaderFunction } from "@remix-run/node";
import { Layout } from "~/components/layout";
import HeroSection from "~/components/hero-section";
import SubmenuBanner from "~/components/submenu-banner";
import Submenu from "~/components/submenu";
import PortfolioBanner from "~/components/portfolio-banner";
import Portfolio from "~/components/portfolio";
import { getOtherUsers } from "~/utils/users.server";
import { useLoaderData } from "@remix-run/react";
import { UserPanel } from "~/components/user-panel";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const users = await getOtherUsers(userId)
  return json({ users })
}

export default function Home() {
  const { users } = useLoaderData()

  return (
    <Layout>
      <UserPanel users={users}/>
      {/* <HeroSection /> */}
      {/* <SubmenuBanner /> */}
      {/* <Submenu /> */}
      {/* <PortfolioBanner /> */}
      {/* <Portfolio /> */}
    </Layout>  )
}