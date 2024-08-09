import React from 'react'
import aboutImg from '../assets/about.png';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl text-neutral-500'> About
         <span className='text-neutral-500'> Me
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-xs lg:max-w-md h-auto relative z-0 rounded-lg transition-all duration-300 cursor-pointer hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium '>
                        {ABOUT_TEXT}
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  