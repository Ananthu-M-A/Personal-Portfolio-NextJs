import React from "react"
import { CONTACT } from "../constants/constants"
import { motion } from "framer-motion"

const Contacts = () => {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}
                className="mt-20 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.2 }}
                    className="my-4">{CONTACT.address}</motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.2 }}
                className="my-4">{CONTACT.phoneNo}</motion.p>
                <a href="mailto:ananthumapookkad@gmail.com" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contacts