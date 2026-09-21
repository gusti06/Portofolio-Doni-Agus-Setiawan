import Head from 'next/head'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Timeline from '../src/components/Timeline'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import Certificates from '../src/components/Certificates'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="site-shell">
      <Head>
        <title>Doni Agus Setiawan — Portfolio</title>
        <meta name="description" content="Portfolio Doni Agus Setiawan — Mahasiswa Teknik Informatika ITERA" />
      </Head>

      <Header />
      <main className="site-main">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
