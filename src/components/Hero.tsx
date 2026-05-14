import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

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
    <section id="hero" className="py-20" data-aos="fade-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Doni Agus Setiawan</h1>
          <p className="text-cyan-300 mt-2">Mahasiswa Teknik Informatika | Tech Enthusiast</p>
          <div className="mt-4 text-lg">
            <TypeWriter texts={["Mahasiswa Teknik Informatika ITERA","Pengembang Website & Game","Leader dalam organisasi kampus"]} />
          </div>
          <p className="mt-4 text-gray-300">Mahasiswa Teknik Informatika Institut Teknologi Sumatera yang aktif dalam pengembangan teknologi, kepemimpinan organisasi, dan manajemen proyek. Memiliki pengalaman membangun website desa dan BUMDES saat KKN, mengembangkan project game berbasis Object Oriented Programming, serta memimpin berbagai kegiatan kampus sebagai koordinator dan kepala divisi acara. Berorientasi pada pengembangan solusi digital yang bermanfaat, dengan kombinasi kemampuan teknis, komunikasi, teamwork, dan leadership yang kuat.</p>
          <div className="mt-6 flex gap-3">
            <a href="/CV%20Doni%20Agus%20Setiawan.pdf" className="px-4 py-2 bg-neon text-black rounded-md">Download CV</a>
            <a href="#contact" className="px-4 py-2 border border-white/10 rounded-md">Contact Me</a>
            <a href="#projects" className="px-4 py-2 bg-white/6 rounded-md">View Projects</a>
          </div>
          <div className="mt-6 flex gap-4 text-2xl">
            <a href="https://github.com/gusti06" aria-label="GitHub"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/doni-agus-setiawan-a7a0202b2" aria-label="LinkedIn"><FaLinkedin/></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram/></a>
            <a href="mailto:doni.123140009@student.itera.ac.id" aria-label="Email"><FaEnvelope/></a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 p-1 glass">
            <img src="/FOTO%20PORTO.jpeg" alt="Doni Agus Setiawan" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
