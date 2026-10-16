import {useEffect,useState} from 'react';import {Link,NavLink,Outlet,useLocation} from 'react-router-dom';import {NAV,SITE} from '../data/site.js';import {SERVICES} from '../data/services.js';import {POLICIES} from '../data/policies.js'
function Brand({light}){return <Link to="/" aria-label="EgNisher home" className="flex items-center gap-2"><img src="/images/logo.png" alt="" width="40" height="40" className="h-10 w-10 object-contain"/><span className={`font-display text-xl font-bold ${light?'text-white':'text-brand-dark'}`}>EgNisher</span></Link>}
function Navbar(){const [open,setOpen]=useState(false);const {pathname}=useLocation();useEffect(()=>{setOpen(false)},[pathname])
const cls=({isActive})=>`font-medium hover:text-brand ${isActive?'text-brand':''}`
return <header className="glass sticky top-0 z-30 border-b border-brand-line"><nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"><Brand/>
<div className="hidden items-center gap-7 md:flex">{NAV.map(([l,h])=><NavLink key={l} to={h} end={h==='/'} className={cls}>{l}</NavLink>)}</div>
<Link to="/contact" className="btn btn-p hidden !py-2 md:inline-block">Contact Us</Link>
<button type="button" className="rounded-lg border-2 border-brand-line px-3 py-2 text-sm font-semibold md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></nav>
{open&&<div id="mobile-menu" className="flex flex-col gap-4 border-t border-brand-line bg-white p-5 md:hidden">{NAV.map(([l,h])=><NavLink key={l} to={h} end={h==='/'} className={cls}>{l}</NavLink>)}<Link to="/contact" className="btn btn-p">Contact Us</Link></div>}</header>}
function Footer(){const L=({to,children})=><li><Link to={to} className="block py-1 hover:text-white">{children}</Link></li>
return <footer className="bg-brand-dark py-12 text-[#cfd3e4]"><div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4">
<div><Brand light/><p className="mt-3 text-sm text-[#b4bad2]">A collaborative web development and digital solutions agency based in Bangladesh, serving clients worldwide.</p><a href={`mailto:${SITE.email}`} className="mt-3 block text-sm hover:text-white">{SITE.email}</a>
<ul className="mt-3 flex flex-wrap gap-3 text-sm">{SITE.social.map(([n,u])=><li key={n}><a href={u} aria-label={`EgNisher on ${n}`} className="hover:text-white">{n}</a></li>)}</ul></div>
<nav aria-label="Quick links"><h2 className="mb-2 font-semibold text-white">Quick Links</h2><ul>{[['/','Home'],['/about','About'],['/portfolio','Portfolio'],['/gallery','Gallery'],['/blog','Blog'],['/process','Process'],['/faq','FAQ'],['/careers','Careers'],['/contact','Contact']].map(([t,n])=><L key={t} to={t}>{n}</L>)}</ul></nav>
<nav aria-label="Services"><h2 className="mb-2 font-semibold text-white">Services</h2><ul>{SERVICES.map(s=><L key={s.slug} to={`/services/${s.slug}`}>{s.title}</L>)}</ul></nav>
<nav aria-label="Policies"><h2 className="mb-2 font-semibold text-white">Policies</h2><ul>{Object.entries(POLICIES).map(([k,p])=><L key={k} to={`/${k}`}>{p.title}</L>)}</ul></nav></div>
<p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-[#b4bad2]">© 2026 EgNisher. Web Development & Digital Solutions.</p></footer>}
export default function Layout(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname])
return <><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-2">Skip to content</a><Navbar/><main id="main"><Outlet/></main><Footer/></>}
