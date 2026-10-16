import {useEffect,useState} from 'react';import Img from './Img.jsx';import Mock from './Mock.jsx'
const SLIDES=[['Concept visual: a clear, modern business website','site'],['Concept visual: a mobile-first layout','mobile'],['Concept visual: a focused landing page','landing']]
export default function HeroSlider(){const [i,setI]=useState(0);const [pause,setPause]=useState(false)
useEffect(()=>{if(pause||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
const t=window.setInterval(()=>setI(x=>(x+1)%SLIDES.length),5000)
return()=>{window.clearInterval(t)}},[pause])
return <div onMouseEnter={()=>setPause(true)} onMouseLeave={()=>setPause(false)} onFocus={()=>setPause(true)} onBlur={()=>setPause(false)} role="group" aria-roledescription="carousel" aria-label="Featured concept visuals">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-line shadow-soft">{SLIDES.map(([cap,v],n)=><div key={v} aria-hidden={n!==i} className={`absolute inset-0 transition-opacity duration-700 ${n===i?'opacity-100':'opacity-0'}`}>
{n===0?<Img eager file="egnisher-hero-web-development.webp" ratio="4/3" alt="Abstract web development interface with purple and teal accents" fallback={<Mock v="site"/>} className="!rounded-none !border-0"/>:<Mock v={v}/>}</div>)}</div>
<div className="mt-3 flex items-center justify-between gap-3"><p className="text-sm text-brand-muted" aria-live="polite">{SLIDES[i][0]}</p><div className="flex gap-2">{SLIDES.map((s,n)=><button key={n} type="button" aria-label={`Show slide ${n+1}: ${s[0]}`} aria-current={n===i} onClick={()=>setI(n)} className={`h-2.5 rounded-full transition-all ${n===i?'w-6 bg-brand':'w-2.5 bg-brand-light'}`}/>)}</div></div></div>}
