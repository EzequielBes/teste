import React from 'react'
import {motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div class='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Ola! eu sou <span className='text-[#915eff]'>Ezequiel</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Eu desenvolvo, interfaces <br className='sm:block hidden'/> de usuario e web sites 
          </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero