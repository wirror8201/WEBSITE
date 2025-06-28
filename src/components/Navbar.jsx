import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl">Равшан</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-accent">Кто я</a></li>
          <li><a href="#whatido" className="hover:text-accent">Чем занимаюсь</a></li>
          <li><a href="#projects" className="hover:text-accent">Проекты</a></li>
          <li><a href="#services" className="hover:text-accent">Услуги</a></li>
          <li><a href="#testimonials" className="hover:text-accent">Отзывы</a></li>
          <li><a href="#contact" className="hover:text-accent">Контакты</a></li>
        </ul>
      </div>
    </nav>
  )
}
