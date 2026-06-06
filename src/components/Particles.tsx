import { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef<HTMLCanvasElement|null>(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const particles = Array.from({length: 60}).map(()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*2+0.5,
      vx: (Math.random()-0.5)*0.5,
      vy: (Math.random()-0.5)*0.5
    }))

    function onResize(){
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    let raf = 0
    function draw(){
      ctx.clearRect(0,0,w,h)
      for(const p of particles){
        p.x += p.vx
        p.y += p.vy
        if(p.x<0) p.x = w
        if(p.x> w) p.x = 0
        if(p.y<0) p.y = h
        if(p.y> h) p.y = 0
        ctx.beginPath()
        ctx.fillStyle = 'rgba(0,229,255,0.08)'
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return ()=>{
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  },[])

  return <canvas ref={ref} className="fixed inset-0 -z-10 h-full w-full pointer-events-none" />
}
