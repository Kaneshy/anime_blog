'use client'
import React, { useEffect, useState } from 'react'
import { AnimesData } from '@/constants'
import { motion } from 'framer-motion'
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import LinksAnime from '@/components/shared/LinksAnime';
import Gallery from '@/components/shared/Gallery';
import SecondNavbar from '@/components/shared/SecondNavbar';
import { categories } from "@/constants/index.js";



const page = ({ params }) => {

    console.log(params.id)
    const router = useRouter()
    const [firstS, setfirstS] = useState('')
    const [secondS, setsecondS] = useState('')
    const [categorie, setcategorie] = useState([])
    const [namemedia, setnamemedia] = useState({})
    const [containerg, setcontainerg] = useState([])
    const [isActive, setisActive] = useState(false)
    console.log(secondS)
    console.log(containerg)
    console.log(namemedia)



    useEffect(() => {
        const b = params.id;
        const separatedStrings = b.split('signature');
        const resultado = separatedStrings[0].replace('%20', ' ');
        console.log(separatedStrings)
        console.log(resultado)


        setfirstS(resultado); // Primer string antes del '&'
        setsecondS(separatedStrings[1]); // Segundo string después del '&


        const anime = categories.find((x) => x.title == resultado)
        const c = anime.linkH
        setcontainerg(c)




    }, [])

    useEffect(() => {
        console.log('gg', secondS)
        const unique = containerg.find((x) => x.id == secondS)
        console.log(unique)
        setnamemedia(unique)
        setisActive(true)
    }, [containerg])

    return (
        <section>
            {namemedia && (
                <div className='mb-28'>

                    <div className='max-w-header '>
                        <motion.div
                            className='relative bg-opacity-40 flex flex-col p-5 gap-y-7 text-center items-center  bg-white '
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h1 className='f text-heading2-bold text-purple-4'>{namemedia.title}</h1>
                            <div className='flex p-4'>
                                <img className='' src={namemedia.img} width={500} height={500} alt="" />
                                <LinksAnime animes={namemedia} />
                            </div>
                            <p className='font-bold text-lg text-neutral-700'>{namemedia.desc}</p>

                            <div className='absolute -bottom-1 -right-1 rounded-full bg-purple-600 p-2 text-white'>{namemedia.review}</div>
                        </motion.div>
                    </div>

                    <button onClick={() => router.back()} className='fixed top-20 left-4  text-white'>
                        <IoArrowBack size={40} />
                    </button>


                </div>
            )}

        </section>

    )
}

export default page