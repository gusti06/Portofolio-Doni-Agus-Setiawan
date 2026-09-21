import { useEffect, useState } from 'react'

export default function Header(){
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

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

  const links = [['about','About'],['leadership','Leadership'],['projects','Projects'],['skills','Skills'],['certificates','Certificates'],['contact','Contact']]
  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#hero" className="brand">DONI<span>.AS</span></a>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {links.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}
