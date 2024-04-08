'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { social } from '@/constants/index.js'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


//navbar with social media 

const Navbar = () => {
    return (
        <nav className="flex top-22 p-2 bg-white bg-opacity-60 justify-between ">
            <Link
                href='/'
                className='flex items-center ml-8'>
                <Image src='/assets/logoA.png' alt='logo' width={48} height={48} />
                <p className='text-neutral-700 text-heading3-bold font-bold text-xl  max-xs:hidden p-2'> PIXEL </p>
            </Link>
            <div className="flex gap-x-10  align-middle items-center justify-between max-sm:hidden">
                <Link href='/Categories/Series'>Series</Link>
                <Link href='/Categories/Peliculas'>Movies</Link>
                <Link href='/Categories/AnimesData'>Anime</Link>
                <Link href='/Categories/Animation'>Animation</Link>
            </div>
            <div className='text-slate-600 flex flex-row max-xs:hidden max-sm:hidden p-2 justify-center items-center'>
                <div className="flex ">
                    <div className="px-2 " >
                        <a href='https://www.instagram.com/jasantaolalla/' target="_blank">
                            <motion.div
                                whileHover={{ rotate: [null, 100, 200, 360] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="mt-1"
                            >
                                <FaWhatsapp />
                            </motion.div>
                        </a>
                    </div>
                    <div className="px-2 " >
                        <a href='https://www.instagram.com/jasantaolalla/' target="_blank">
                            <motion.div
                                whileHover={{ rotate: [null, 100, 200, 360] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="mt-1"
                            >
                                <FaInstagram />
                            </motion.div>
                        </a>
                    </div>
                    <div className="px-2 " >
                        <a href='https://www.instagram.com/jasantaolalla/' target="_blank">
                            <motion.div
                                whileHover={{ rotate: [null, 100, 200, 360] }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                className="mt-1"
                            >
                                <FaPinterest />
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar