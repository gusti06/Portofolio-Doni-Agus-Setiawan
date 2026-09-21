import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Contact(){
  const email='doni.123140009@student.itera.ac.id', whatsapp='https://wa.me/6285609002347', linkedin='https://www.linkedin.com/in/doni-agus-setiawan-a7a0202b2/', github='https://github.com/gusti06'
  return <section id="contact" className="content-section contact-section" data-aos="fade-up"><div className="contact-copy"><p className="section-kicker">06 / CONTACT</p><h2>LET'S<br /><span>BUILD</span><br />SOMETHING.</h2><p>Kalau Anda ingin berdiskusi tentang project, kolaborasi, organisasi, atau peluang profesional, silakan hubungi saya.</p></div><div className="contact-links"><a className="contact-email" href={`mailto:${email}`}><span>EMAIL</span>{email}<FiMail /></a><a href={whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> WHATSAPP</a><a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LINKEDIN</a><a href={github} target="_blank" rel="noreferrer"><FaGithub /> GITHUB</a></div></section>
}
