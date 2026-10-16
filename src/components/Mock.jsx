// CSS-made UI concept visual used when a real image file is not available yet.
const V={site:['from-brand to-brand-bright',3],hotel:['from-brand-teal to-brand-bright',3],landing:['from-brand-bright to-brand-light',2],redesign:['from-brand to-brand-teal',4],mobile:['from-brand-light to-brand',2],app:['from-brand-dark to-brand',4]}
export default function Mock({v='site'}){const [g,n]=V[v]||V.site
return <div aria-hidden="true" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#F3EEFF] to-[#E4F8F5] p-5"><div className={`${v==='mobile'?'w-2/5':'w-4/5'} rounded-xl border border-brand-line bg-white p-2.5 shadow-soft`}>
<div className="mb-2 flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-brand-light"/><i className="h-1.5 w-1.5 rounded-full bg-brand-teal"/><i className="h-1.5 w-1.5 rounded-full bg-brand-line"/></div>
<div className={`h-14 rounded-lg bg-gradient-to-r ${g}`}/><div className="mt-2 grid gap-2" style={{gridTemplateColumns:`repeat(${n},1fr)`}}>{Array.from({length:n}).map((_,i)=><div key={i} className="h-8 rounded bg-[#F3EEFF]"/>)}</div><div className="mt-2 h-2 w-2/3 rounded bg-brand-line"/></div></div>}
