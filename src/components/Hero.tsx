import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { assetPath } from '../lib/assetPath'

function TypeWriter({ texts = [], speed = 90 }: { texts?: string[], speed?: number }){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(()=>{
    const timeout = setInterval(()=> setBlink(b => !b), 500)
    return ()=> clearInterval(timeout)
  },[])

  useEffect(()=>{
    if(subIndex === texts[index].length){
      const timeout = setTimeout(()=>{
        setIndex((index+1)%texts.length)
        setSubIndex(0)
      }, 1200)
      return ()=> clearTimeout(timeout)
    }
    const timeout = setTimeout(()=> setSubIndex(subIndex+1), speed)
    return ()=> clearTimeout(timeout)
  },[subIndex, index, texts, speed])

  return (
    <span>{texts[index].substring(0,subIndex)}<span className={`ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span></span>
  )
}

export default function Hero(){
  return (
    <section id="hero" className="relative overflow-hidden py-20" data-aos="fade-up">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_16px_rgba(34,197,94,0.6)]" />
            Portfolio Highlights
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-neon/80">Mahasiswa Teknik Informatika | Tech Enthusiast</p>
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Doni Agus Setiawan
            </h1>
            <div className="text-lg text-white/85 md:text-xl">
              <TypeWriter texts={["Mahasiswa Teknik Informatika ITERA","Pengembang Website & Game","Leader dalam organisasi kampus"]} />
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Mahasiswa Teknik Informatika Institut Teknologi Sumatera yang aktif dalam pengembangan teknologi, kepemimpinan organisasi, dan manajemen proyek. Memiliki pengalaman membangun website desa dan BUMDES saat KKN, mengembangkan project game berbasis Object Oriented Programming, serta memimpin berbagai kegiatan kampus sebagai koordinator dan kepala divisi acara. Berorientasi pada pengembangan solusi digital yang bermanfaat, dengan kombinasi kemampuan teknis, komunikasi, teamwork, dan leadership yang kuat.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={assetPath('/CV%20Doni%20Agus%20Setiawan.pdf')} className="rounded-full bg-neon px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110">
              Download CV
            </a>
            <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-neon/40 hover:text-neon">
              Contact Me
            </a>
            <a href="#projects" className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/5 hover:text-white">
              View Projects
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-2xl text-white/75">
            <a href="https://github.com/gusti06" aria-label="GitHub" className="transition hover:text-neon"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/doni-agus-setiawan-a7a0202b2" aria-label="LinkedIn" className="transition hover:text-neon"><FaLinkedin/></a>
            <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-neon"><FaInstagram/></a>
            <a href="mailto:doni.123140009@student.itera.ac.id" aria-label="Email" className="transition hover:text-neon"><FaEnvelope/></a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="180">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neon/20 via-cyan-300/10 to-transparent blur-2xl" />
            <div className="relative w-72 rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/20 backdrop-blur md:w-[20rem]">
              <img src={assetPath('/FOTO%20PORTO.jpeg')} alt="Doni Agus Setiawan" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur">
              Open to Collaboration
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
