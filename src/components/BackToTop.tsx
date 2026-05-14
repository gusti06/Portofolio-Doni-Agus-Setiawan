import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop(){
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const goTop = ()=> window.scrollTo({top:0, behavior:'smooth'})

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-neon text-black shadow-xl transform transition-opacity ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <FaArrowUp />
    </button>
  )
}
