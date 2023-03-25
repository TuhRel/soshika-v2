import TrendingFlat from "@mui/icons-material/TrendingFlat";
import { Box } from "@mui/material";
import { Link } from "@remix-run/react";

export default function Submenu() {
  return (
    <div className="flex flex-col h-screen -h-20 w-full justify-center items-center bg-slate-100">
      <div className="grid grid-cols-3 h-full w-full bg-stone-300">
        <Box className="flex object-cover h-full">
          Photo
        </Box>
        <Box className="grid grid-rows-3 justify-center items-center tracking-wider uppercase py-24 px-5">
          <Link to='/' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out">
            <h1 className="text-xl font-light">
              About Me
            </h1>
            <p className="text-base font-thin">
              Get to know the photographer
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
          <Link to='/' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out">
            <h1 className="text-xl font-light">
              Portfolio
            </h1>
            <p className="text-base font-thin">
              View the galleries
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
          <Link to='/' className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out">
            <h1 className="text-xl font-light">
              Information
            </h1>
            <p className="text-base font-thin">
              Processes and Pricing
            </p>
            <TrendingFlat className="text-2xl font-thin scale-x-150 scale-y-50" />
          </Link>
        </Box>
        <Box className="flex object-cover h-full">
          Photo
        </Box>
      </div>
    </div>
  )
}