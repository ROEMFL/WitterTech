import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TIPS, getTip } from '@/lib/tips'
import { SITE } from '@/lib/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export function generateStaticParams() {
  return TIPS.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const tip = getTip(slug)
  if (!tip) return {}
  return {
    title: tip.title,
    description: tip.description,
    alternates: { canonical: `/tech-tips/${tip.slug}` },
    openGraph: {
      title: `${tip.title} | Witter Tech`,
      description: tip.description,
      type: 'article',
      siteName: 'Witter Tech',
      images: [{ url: '/assets/og.png', width: 1200, height: 630, alt: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida' }],
    },
  }
}

export default async function TipArticle({ params }) {
  const { slug } = await params
  const tip = getTip(slug)
  if (!tip) notFound()

  const others = TIPS.filter(t => t.slug !== tip.slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: tip.title,
    description: tip.description,
    image: `${SITE.url}/assets/og.png`,
    author: { '@type': 'Person', name: SITE.founder },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/assets/favicon.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/tech-tips/${tip.slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="ghost on-dark" style={{fontSize:'14vw',bottom:'-1vw'}}>Tech Tips</div>
        <div className="inner">
          <span className="eyebrow on-dark reveal">{tip.tag}</span>
          <h1 className="anim-words">{tip.title}</h1>
          <p className="sub reveal">{tip.intro}</p>
        </div>
      </div>

      {/* ARTICLE */}
      <section className="article-section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tech Tips', href: '/tech-tips' }, { label: tip.title, href: `/tech-tips/${tip.slug}` }]} />
          <article className="article">
            {tip.sections.map((s, i) => (
              <div key={i} className="article-block reveal">
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}

            {/* RELATED SERVICE */}
            <div className="article-cta reveal">
              <p>{tip.cta}</p>
              <div className="article-cta-row">
                <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
                <Link href={tip.related.href} className="btn-pill">{tip.related.label} →</Link>
              </div>
            </div>
          </article>

          {/* MORE TIPS */}
          <div className="article-more">
            <p className="article-more-label">More tech tips</p>
            <div className="article-more-grid">
              {others.map(t => (
                <Link key={t.slug} href={`/tech-tips/${t.slug}`} className="article-more-card reveal">
                  <span className="tc-tag">{t.tag}</span>
                  <h3>{t.title}</h3>
                </Link>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'36px'}}>
              <Link href="/tech-tips" className="link-quiet">← All tech tips</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
