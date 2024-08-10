import React from 'react'
import { motion } from "framer-motion"
const Footer = () => {
    return (
        <footer className='pt-14 pb-14'>
          <motion.div whileInView={{opacity:1 ,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1}} className="container mx-auto text-center">
            <p className="text-white text-xl">
               Made with <span className="text-red-500">❤</span> by Divjot Singh Arora
            </p>
          </motion.div>
        </footer>
      );
}

export default Footer