import { useEffect, useState } from 'react'

export default function ScrollProgress(){
  const [perc, setPerc] = useState(0)

  useEffect(()=>{
    const onScroll = () =>{
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const sc = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setPerc(Math.min(100, Math.max(0, sc)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return ()=>{
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  },[])

  return (
    <div className="fixed left-0 top-0 w-full z-50">
      <div className="h-1 bg-white/10">
        <div className="h-1 bg-neon" style={{width: `${perc}%`, transition: 'width 120ms linear'}} />
      </div>
    </div>
  )
}
