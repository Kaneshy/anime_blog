'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Animes = ({ content }) => {

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

    <div id='a' className='max-w-header gap-y-10 p-4 mt-6 flex flex-col text-center items-center'>
      <h1 className="text-body-bold text-purple-4  ">CATEGORIES</h1>
      <h2>All the dental services youll ever need in one modern, patient-friendly practice!</h2>
      <div className='home-sv-a select-none'>
        {content.map((x, index) => {
          return (
            <Link href={`/${x.route}`} dataH={x.linkH} key={index}>
              <motion.div
                className='relative bg-opacity-40 flex flex-col  gap-y-7 text-center items-center shadow bg-white '
                initial='initial'
                variants={fadeInAnimationVariants}
                whileInView='animate'
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                custom={index}
              >
                <div className='flex w-full overflow-hidden'>
                  <img className='flex object-cover ' src={x.img} alt="" />
                </div>
                <div className='p-4'>
                  <h1 className='text-body-bold text-purple-4 '>{x.title}</h1>
                  <p className=''>{x.desc}</p>
                </div>

              </motion.div>
            </Link>

          )
        })}
      </div>
    </div>
  )
}

export default Animes