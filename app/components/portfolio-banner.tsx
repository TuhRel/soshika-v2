import { PortfolioB } from "~/constants/constants";

export default function PortfolioBanner() {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-slate-50">
      <div className="flex flex-col items-center justify-center tracking-widest pt-10 pb-5 text-center gap-5">
        <p className="text-base font-light italic w-3/4 p-2.5">"{PortfolioB}"</p>
        <h2 className="text-4xl font-light p-2.5 uppercase">
          Browse the Portfolio
        </h2>
      </div>
    </div>
  )
}