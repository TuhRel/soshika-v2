

export default function HeroSection() {
  return (
    <div className="flex h-screen w-full relative justify-center items-center bg-slate-100">
      <div className="flex items-center justify-center w-full h-full">
        <div className="grid w-5/6 grid-cols-[80%_20%] pt-12 -m-32">
          <div className="flex flex-col">
            Photos
          </div>
          <div className="flex flex-col">
            <div className="text-center items-center justify-center pl-5">
              <h1 className="tracking-wider text-xl font-light pb-1 uppercase">
                Est.
              </h1>
              <h2 className="tracking-wider text-xl font-light uppercase">
                2020
              </h2>
              <p className="tracking-wider pt-12 pb-12 font-light text-xl uppercase">Orlando & <br/> Local Area <br/> Photographer</p>
              <h3 className="text-2xl font-light tracking-wider uppercase">SoShika <br/> Photography</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}