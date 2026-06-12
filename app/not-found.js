import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div className="page-hero" style={{minHeight:'70vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="ghost on-dark" style={{fontSize:'18vw',bottom:'-1vw'}}>404</div>
      <div className="inner">
        <span className="eyebrow on-dark">Page not found</span>
        <h1 style={{fontSize:'clamp(2.6rem,5vw,4.2rem)',fontWeight:'600',color:'#fff',margin:'18px 0 20px'}}>That page doesn&apos;t exist, but the help does.</h1>
        <p className="sub" style={{margin:'0 auto 36px'}}>The link may be old or mistyped. Here&apos;s where you probably want to go:</p>
        <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/" className="btn-pill">Home</Link>
          <Link href="/services" className="btn-pill">Services</Link>
          <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
        </div>
      </div>
    </div>
  )
}
