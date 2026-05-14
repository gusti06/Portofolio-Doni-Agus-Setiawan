import '../styles/globals.css'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import ScrollProgress from '../src/components/ScrollProgress'
import BackToTop from '../src/components/BackToTop'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <ScrollProgress />
      <Component {...pageProps} />
      <BackToTop />
    </>
  )
}
