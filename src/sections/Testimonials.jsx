import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 container mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-8">Отзывы</motion.h2>
      <p>TODO: добавить отзывы.</p>
    </section>
  )
}
