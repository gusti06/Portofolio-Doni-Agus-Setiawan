import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header(){
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(()=>{
    const stored = localStorage.getItem('theme')
    if(stored === 'dark'){
      setDark(true)
      document.documentElement.classList.add('dark')
    }
    const sections = ['hero','about','leadership','projects','skills','certificates','contact']
    const onScroll = ()=>{
      const scrollPos = window.scrollY + 120
      let current = 'hero'
      for(const id of sections){
        const el = document.getElementById(id)
        if(el){
          if(el.offsetTop <= scrollPos) current = id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const toggle = ()=>{
    const next = !dark
    setDark(next)
    if(next) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="py-4 sticky top-0 z-40 backdrop-blur bg-black/30">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#" className="font-bold text-xl">Doni Agus</Link>
        <nav className="flex items-center gap-4">
          <a href="#about" className={`hover:text-neon ${active==='about' ? 'text-neon' : ''}`}>About</a>
          <a href="#leadership" className={`hover:text-neon ${active==='leadership' ? 'text-neon' : ''}`}>Leadership</a>
          <a href="#projects" className={`hover:text-neon ${active==='projects' ? 'text-neon' : ''}`}>Projects</a>
          <a href="#contact" className={`hover:text-neon ${active==='contact' ? 'text-neon' : ''}`}>Contact</a>
          <button onClick={toggle} className="p-2 rounded-md bg-white/6">
            {dark ? <FiSun/> : <FiMoon/>}
          </button>
        </nav>
      </div>
    </header>
  )
}
