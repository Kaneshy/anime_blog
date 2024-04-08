import Animes from "@/components/shared/Animes";
import { categories } from '@/constants/index.js'


export default function Home() {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-10 mt-20">
        <h1 className="text-heading1-bold text-purple-4">About</h1>
        <div className="flex max-lg:flex-col gap-10">
          <div className="flex flex-col align-middle justify-center items-center">
            <h1 className="text-body-bold text-purple-3 ">ABOUT</h1>
            <p className="flex max-w-lg  ">anime, series, movies and clips recommendations </p>
          </div>
          <div>
            <img className="rounded-xl drop-shadow-xl" src="https://i.ibb.co/gDc32hX/demon2.gif" alt="" />
          </div>
        </div>
      </div>
      <Animes content={categories} />
    </section>
  )
}
