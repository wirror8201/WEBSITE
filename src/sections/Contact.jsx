import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#f2f2f2]">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold mb-4">Контакты</motion.h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Имя" className="w-full border p-2" />
          <input type="email" placeholder="Email" className="w-full border p-2" />
          <textarea placeholder="Сообщение" className="w-full border p-2" rows="5"></textarea>
          <button className="bg-accent text-white px-6 py-2 rounded" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}
