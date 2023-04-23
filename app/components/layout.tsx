import React from "react";
import { Link } from "@remix-run/react";
import Navbar from "./navbar";
import Footer from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full font-thin">
    <Navbar />
    {children}
    <Footer />
    </div>
  )
}