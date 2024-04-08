'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Moviesformat = ({content, para}) => {
  console.log(content, para)

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index
        }
      }
    }
  }

  return (

    <div id='a' className='text-black  max-w-header gap-y-10 p-4 mt-6 flex flex-col text-center items-center'>
      <h1 className="text-heading1-bold text-purple-4 ">Series</h1>
      <h2>All the dental services youll ever need in one modern, patient-friendly practice!</h2>
      <div className='movie-sv-a select-none'>
        {content.map((x, index) => {
          return (
            <Link href={`/Animes/${para}signature${x.id}`} key={index}>
              <motion.div
                className='relative  flex flex-col gap-y-2 text-center items-center shadow  '
                initial='initial'
                variants={fadeInAnimationVariants}
                whileInView='animate'
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                custom={index}
              >
                
                <div className='flex w-full items-center  justify-center  rounded-2xl  '>
                  <img className='object-contain rounded-t-2xl  w-full' src={x.img} alt="" />
                </div>
                <p className='text-body-bold text-purple-4'>{x.title}</p>
              </motion.div>
            </Link>

          )
        })}
      </div>
    </div>
  )
}

export default Moviesformat