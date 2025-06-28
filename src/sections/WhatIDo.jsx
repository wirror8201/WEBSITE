import React from 'react'
import { motion } from 'framer-motion'

export default function WhatIDo() {
  return (
    <section id="whatido" className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-4">Чем занимаюсь</motion.h2>
        <p>TODO: описать чем я занимаюсь.</p>
      </div>
    </section>
  )
}
