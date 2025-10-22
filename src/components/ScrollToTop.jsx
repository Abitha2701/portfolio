import React, { useEffect, useState } from 'react'

export default function ScrollToTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  if(!show) return null
  return (
    <button className="scroll-top" onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} aria-label="Scroll to top" title="Scroll to top">↑</button>
  )
}
