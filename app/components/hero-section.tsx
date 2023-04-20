import image1 from '~/images/heroSection/bijou-wedding-1.jpg'
import image2 from '~/images/heroSection/bijou-wedding-2.jpg'
import image3 from '~/images/heroSection/bijou-wedding-3.jpg'


export default function HeroSection() {
  return (
    <div className="flex pt-14 md:h-screen h-60 w-full relative justify-center items-center bg-slate-50">
      <div className="flex items-center justify-center w-full h-full md:bg-[url('~/images/heroSection/lincoln-memorial-engagement.jpg')] bg-cover bg-fixed">
        <div className="flex h-full w-screen items-center justify-center bg-cover backdrop-blur-sm">
        <div className="grid md:z-10 w-5/6 md:grid-cols-[80%_20%] pt-12 -m-32">
          <div className="flex flex-row gap-6">
            <div className="flex md:h-96 scale-105">
              <img className="object-cover" src={image3} alt='alt' />
            </div>
            <div className="flex md:h-96 scale-105">
              <img className="object-cover" src={image1} alt='alt' />
            </div>
            <div className="flex md:h-96 scale-105">
              <img className="object-cover" src={image2} alt='alt' />
            </div>
          </div>
          <div className="flex md:flex-col justify-center items-center max-md:hidden">
            <div className="text-center items-center justify-center pl-5">
              <h1 className="tracking-wider text-xl font-light pt-4 md:pb-1 uppercase">
                Est.
              </h1>
              <h2 className="tracking-wider text-xl font-light uppercase">
                2020
              </h2>
              <p className="tracking-wider pt-3 pb-3 md:pt-12 md:pb-12 font-light text-xl uppercase">Orlando & <br/> Local Area <br/> Photographer</p>
              <h3 className="text-2xl tracking-wider uppercase">SoShika <br/> Photography</h3>
            </div>
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}