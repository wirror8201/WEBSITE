import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 container mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-4">Кто я</motion.h2>
      <p>TODO: добавить информацию обо мне.</p>
    </section>
  )
}
