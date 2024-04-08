import React from 'react'

const Gallery = ({animes}) => {

    console.log(animes.screenshots)
    // const screnshotb = animes.screenshots

    return (
        <section className='mt-10 flex flex-col items-center gap-6'>
            <h1 className='font-bold text-3xl text-white'> GALLERY ART </h1>
            <div className="galery">
                <div id="galery1" >
                    {animes.screenshots.map((x)=>{
                        return(
                            <img src={x} className="galery" alt="" />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Gallery