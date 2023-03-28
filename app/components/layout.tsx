import React from "react";
import { Link } from "@remix-run/react";
import Navbar from "./navbar";
import Footer from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif h-screen w-full">
    {/* <Navbar /> */}
    {children}
    {/* <Footer /> */}
    </div>
  )
}