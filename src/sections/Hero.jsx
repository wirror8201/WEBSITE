import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-4">
        Равшан Султонов
      </motion.h1>
      <p className="text-lg md:text-xl mb-6">Продуктовый и проектный менеджер</p>
      <a href="/Resume_Ravshan.pdf" className="bg-accent text-white px-6 py-3 rounded" download>
        Скачать резюме
      </a>
    </section>
  )
}
