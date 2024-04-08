'use client'
import Moviesformat from "@/components/shared/Moviesformat";
import { categories } from "@/constants/index.js";
import { useEffect, useState } from "react";

const CategoriesPage = ({params}) => {

  const [dataCatego, setdataCatego] = useState([])
  console.log(params.id)

  useEffect(() => {
    
    const catego = categories.filter(x => x.title === params.id)
    console.log(catego[0].linkH)
    setdataCatego(catego[0].linkH)

  }, [])
  


  return (
    <section className="flex flex-col gap-y-10  text-white mb-48 ">

    <Moviesformat content={dataCatego} para={params.id}  />

    <div className="flex flex-col items-center gap-10 mt-20">
        <h1 className="text-heading1-bold text-purple-4">About</h1>
        <div className="flex max-lg:flex-col gap-10">
          <div className="flex flex-col align-middle justify-center items-center">
            <h1 className="text-body-bold text-purple-3 ">ABOUT</h1>
            <p className="flex max-w-lg text-black  ">anime, series, movies and clips recommendations </p>
          </div>
          <div>
            <img className="rounded-xl drop-shadow-xl" src="https://i.ibb.co/gDc32hX/demon2.gif" alt="" />
          </div>
        </div>
      </div>

  </section>
  )
}

export default CategoriesPage