import React from 'react'
import logo from '../../public/logo.png'
import { FaGithub, FaInbox, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { motion } from "framer-motion"
import { StaticImageData } from "next/legacy/image"

const container = (delay: number) => ({
  hidden: { rotate: 0, opacity: 0 },
  visible: { rotate: 360, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img variants={container(0.3)} initial="hidden" animate="visible"
          className='mx-2 w-10 border-b' src={(logo as StaticImageData).src} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl border-b p-2'>
        <motion.a variants={container(0.5)} initial="hidden" animate="visible"
          href="https://www.linkedin.com/in/ananthuma/" target='_blank'>
          <FaLinkedin />
        </motion.a>
        <motion.a variants={container(0.7)} initial="hidden" animate="visible"
          href="https://github.com/Ananthu-M-A/" target='_blank'>
          <FaGithub />
        </motion.a>
        <motion.a variants={container(0.9)} initial="hidden" animate="visible"
          href="mailto:ananthumapookad@gmail.com" target='_blank'>
          <FaInbox />
        </motion.a>
        <motion.a variants={container(1.1)} initial="hidden" animate="visible"
          href="https://wa.me/9539272385/" target='_blank'>
          <FaWhatsapp />
        </motion.a>
        <motion.a variants={container(1.3)} initial="hidden" animate="visible"
          href="https://www.instagram.com/ananthu__m_a/" target='_blank'>
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar