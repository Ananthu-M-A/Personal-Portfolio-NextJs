import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaInbox, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from "next/link"

const container = (delay: number) => ({
    hidden: { rotate: 0, opacity: 0 },
    visible: { rotate: 360, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const Contacts = () => {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}
                className="mt-20 text-center text-4xl">Get in Touch</motion.h2>
            <div className='mt-2 flex items-center justify-center gap-4 text-2xl p-2'>
                <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN}`} target='_blank'>
                    <FaLinkedin />
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_GITHUB}`} target='_blank'>
                    <FaGithub />
                </Link>
                <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} target='_blank'>
                    <FaInbox />
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`} target='_blank'>
                    <FaInstagram />
                </Link>
            </div>
        </div>
    )
}

export default Contacts