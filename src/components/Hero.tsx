import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { assetPath } from '../lib/assetPath'

export default function Hero(){
  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <div className="hero-copy">
        <p className="eyebrow">PORTFOLIO_2026 <span>///</span> BASED IN INDONESIA</p>
        <div className="hero-title"><span>DONI AGUS</span><strong>SETIAWAN</strong></div>
        <p className="hero-role">INFORMATICS STUDENT <b>+</b> DEVELOPER</p>
        <p className="hero-bio">
            Mahasiswa Teknik Informatika Institut Teknologi Sumatera yang aktif dalam pengembangan teknologi, kepemimpinan organisasi, dan manajemen proyek. Memiliki pengalaman membangun website desa dan BUMDES saat KKN, mengembangkan project game berbasis Object Oriented Programming, serta memimpin berbagai kegiatan kampus sebagai koordinator dan kepala divisi acara. Berorientasi pada pengembangan solusi digital yang bermanfaat, dengan kombinasi kemampuan teknis, komunikasi, teamwork, dan leadership yang kuat.
        </p>
        <div className="button-row"><a href="#projects" className="button button-lime">VIEW PROJECTS <FaArrowDown /></a><a href={assetPath('/CV%20Doni%20Agus%20Setiawan.pdf')} className="button button-dark">DOWNLOAD CV</a></div>
        <div className="social-row"><a href="https://github.com/gusti06" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/doni-agus-setiawan-a7a0202b2" aria-label="LinkedIn"><FaLinkedin /></a><a href="https://instagram.com/__tyqz" aria-label="Instagram"><FaInstagram /></a><a href="mailto:doni.123140009@student.itera.ac.id" aria-label="Email"><FaEnvelope /></a></div>
      </div>
      <div className="hero-visual">
        <div className="photo-frame"><img src={assetPath('/FOTO%20PORTO.jpeg')} alt="Doni Agus Setiawan" /></div>
        <span className="open-badge">OPEN TO<br />COLLABORATION</span>
        <div className="hero-meta"><span>CURRENTLY / OPEN TO COLLABORATION →</span><span>BASED IN INDONESIA · ITERA</span><span>INFORMATICS ENGINEERING · 2023 — PRESENT</span><span>BUILD. LEAD. LEARN. CREATE.</span></div>
      </div>
    </section>
  )
}
