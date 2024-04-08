import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SecondNavbar = () => {

    const [scrollB, setscrollB] = useState(0)

    const scrollA = () => {
        window.onscroll = function () {
            const currentScrollPos = window.scrollY;
            setscrollB(currentScrollPos)
        }
    }
    useEffect(() => {
        scrollA()
    }, [scrollB])

    // nt-bold py-2 px-4 rounded transition-transform transform hover:scale-125 duration-2000">

    return (
            <motion.div 
            className={`${scrollB > 50 ? 'fixed' : 'hidden'}  bg-slate-400 bg-opacity-80 rounded-3xl w-1/2 left-1/3 top-4 text-center z-50`}
            >
                <div className=' flex justify-around w-full py-2 '>
                    <div className='hover:text-white hover:scale-125 cursor-pointer user-none duration-2000 transition-transform transform'>ANIMES</div>
                    <div className='hover:text-white hover:scale-125 cursor-pointer user-none duration-2000 transition-transform transform'>MOVIES</div>
                </div>
            </motion.div>

    )
}

export default SecondNavbar