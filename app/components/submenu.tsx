import TrendingFlat from "@mui/icons-material/TrendingFlat";
import { Box } from "@mui/material";
import { Link } from "@remix-run/react";
import image1 from "~/images/submenu/woods-photoshoot-1.jpg"
import image2 from "~/images/submenu/woods-photoshoot-2.jpg"

export default function Submenu() {
  return (
    <div className="flex flex-col lg:h-screen w-full justify-center items-center bg-slate-50">
      <div className="md:grid md:grid-cols-3 h-full w-full bg-stone-300">
        <Box className="flex object-cover h-full max-md:hidden">
          <img className="object-cover" src={image1} alt="alt" />
        </Box>
        <Box className="grid grid-rows-3 h-full justify-center items-center tracking-wider uppercase py-8 lg:py-24 lg:px-5">
          <Link to='/about' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out py-4">
            <h1 className="text-2xl font-light">
              About Me
            </h1>
            <p className="text-base text-center font-thin">
              Get to know the photographer
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
          <Link to='/portfolio' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out py-4">
            <h1 className="text-2xl font-light">
              Portfolio
            </h1>
            <p className="text-base font-thin">
              View the galleries
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
          <Link to='/information' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out py-4">
            <h1 className="text-2xl font-light">
              Information
            </h1>
            <p className="text-base font-thin">
              Processes and Pricing
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
        </Box>
        <Box className="flex object-cover h-full max-md:hidden">
          <img className="object-cover" src={image2} alt="alt" />
        </Box>
      </div>
    </div>
  )
}