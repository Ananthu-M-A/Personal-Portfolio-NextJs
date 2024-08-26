import React from 'react'
import aboutImg from '../assets/about.png';
import { ABOUT_TEXT } from '../constants/constants'
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-neutral-800 pb-4 mb-4 border-b">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap pb-10">
                <motion.div className="w-full lg:w-1/2 lg:p-8" whileInView={{ opacity: 1, x: 0, y: 0 }} initial={{ opacity: 0, x: -100, y: -100 }} transition={{ duration: 1 }}>
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' width={250} src={aboutImg} alt="about image" />
                    </div>
                </motion.div>
                <motion.div className='w-full lg:w-1/2' whileInView={{ opacity: 1, x: 0, y: 0 }} initial={{ opacity: 0, x: 100, y: -100 }} transition={{ duration: 1 }}>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-5 max-w-xl p-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About