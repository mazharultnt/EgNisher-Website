import Seo from '../components/Seo.jsx';import {PageTitle} from '../components/ui.jsx';import {POLICY_NOTE} from '../data/policies.js'
// Review and customize this policy with legal advice before publishing.
export default function Policy({slug,doc}){return <><Seo title={doc.title} description={doc.desc} path={`/${slug}`}/><PageTitle title={doc.title}/>
<article className="sec max-w-3xl"><p className="mb-6 rounded-lg bg-[#FFF4E5] p-3 text-sm text-[#93370D]"><strong>Editable starter template.</strong> {POLICY_NOTE}</p>{doc.sections.map(([h,t])=><section key={h} className="mb-5"><h2 className="mb-2 text-xl font-semibold">{h}</h2><p className="text-brand-muted">{t}</p></section>)}</article></>}
