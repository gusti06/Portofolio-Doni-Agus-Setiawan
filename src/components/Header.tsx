import { useEffect, useState } from 'react'

export default function Header(){
  const [active, setActive] = useState('hero')

  useEffect(()=>{
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

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/55 backdrop-blur-md">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <a href="#hero" className="font-bold text-lg tracking-wide md:text-xl">Doni Agus Setiawan </a>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:justify-end md:text-base">
          <a href="#about" className={`rounded-full px-3 py-1 transition-colors hover:bg-white/8 hover:text-neon ${active==='about' ? 'bg-white/8 text-neon' : ''}`}>About</a>
          <a href="#leadership" className={`rounded-full px-3 py-1 transition-colors hover:bg-white/8 hover:text-neon ${active==='leadership' ? 'bg-white/8 text-neon' : ''}`}>Leadership</a>
          <a href="#projects" className={`rounded-full px-3 py-1 transition-colors hover:bg-white/8 hover:text-neon ${active==='projects' ? 'bg-white/8 text-neon' : ''}`}>Projects</a>
          <a href="#contact" className={`rounded-full px-3 py-1 transition-colors hover:bg-white/8 hover:text-neon ${active==='contact' ? 'bg-white/8 text-neon' : ''}`}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
