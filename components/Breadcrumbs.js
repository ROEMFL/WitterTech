import Link from 'next/link'

// Visible breadcrumb trail + BreadcrumbList JSON-LD, kept in lockstep.
// items: [{ label, href }] from top level to the current page (current is last).
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: `https://wittertech.com${it.href}`,
    })),
  }
  const last = items.length - 1
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="crumbs reveal" aria-label="Breadcrumb">
        <ol>
          {items.map((it, i) => (
            <li key={it.href}>
              {i === last ? <span aria-current="page">{it.label}</span> : <Link href={it.href}>{it.label}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
