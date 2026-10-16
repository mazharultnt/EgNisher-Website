import {useState} from 'react'
// Shows /images/<file>; falls back to a tidy placeholder until the file exists. Fixed aspect ratio prevents layout shift.
export default function Img({file,alt,ratio='4/3',eager=false,className='',fallback=null}){const [ok,setOk]=useState(true)
return <div style={{aspectRatio:ratio}} className={`overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#F3EEFF] to-[#E4F8F5] ${className}`}>
{ok?<img src={`/images/${file}`} alt={alt} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setOk(false)} className="h-full w-full object-cover"/>:
(fallback||<div role="img" aria-label={alt} className="flex h-full items-center justify-center p-4 text-center text-xs text-brand-muted">Image coming soon</div>)}</div>}
