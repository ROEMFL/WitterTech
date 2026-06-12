import Link from 'next/link'
import Image from 'next/image'
import { COMING_SOON } from '@/lib/config'
import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Witter Tech: Reliable Tech Repair & IT Support in Central Florida',
  alternates: { canonical: '/' },
}

export default function Home() {
  if (COMING_SOON) return <ComingSoon />
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="ghost" data-parallax="0.18">Fix it.</div>
        <div className="wrap hero-grid">
          <div>
            <h1 className="anim-words">Reliable tech repair and IT support: done right, priced <em>fairly.</em></h1>
            <p className="sub reveal">When your computer stops working or your Wi-Fi gives out, it throws off your whole day. I diagnose the problem, give you a price before anything starts, and fix it right, then walk you through exactly what happened, in plain English.</p>
            <div className="hero-cta reveal">
              <div className="cta">
                <Link href="/contact" className="btn-pill accent">Get a free estimate</Link>
                <Link href="/contact" className="btn-circle" aria-label="Get a free estimate">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
                </Link>
              </div>
              <a href="tel:14076248459" className="link-quiet">Or call &amp; text Joe directly</a>
            </div>
          </div>
          <div className="hero-photo" id="heroPhoto">
            <div className="frame">
              <Image src="/assets/hero-tech.jpg" alt="Careful, hands-on device repair" fill style={{objectFit:'cover'}} priority sizes="(max-width:980px) 100vw, 50vw" />
            </div>
            <div className="intro-card">
              <Image src="/assets/joe-polo.jpg" alt="Joe Witter" width={60} height={60} />
              <p><span className="dotline">●</span> Price quoted before anything starts. No surprises!</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Computers &amp; laptops</span><span>Wi-Fi &amp; networks</span><span>Smart home</span><span>Data recovery</span><span>Business IT</span><span>Tune-ups</span><span>Cameras &amp; doorbells</span><span>Microsoft 365</span>
          <span>Computers &amp; laptops</span><span>Wi-Fi &amp; networks</span><span>Smart home</span><span>Data recovery</span><span>Business IT</span><span>Tune-ups</span><span>Cameras &amp; doorbells</span><span>Microsoft 365</span>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="labels reveal">
            <div><div className="lbl">Who I help</div><p>Homes &middot; Families &middot; Small businesses &amp; offices</p></div>
            <div><div className="lbl">Service area</div><p>Kissimmee &middot; Orlando &middot; St. Cloud &middot; Celebration &middot; Davenport</p></div>
            <div><div className="lbl">How</div><p>On-site &middot; Remote &middot; Drop-off, whatever&apos;s easiest for you</p></div>
          </div>
          <div>
            <span className="eyebrow green reveal">About</span>
            <p className="statement anim-words" style={{marginTop:'18px'}}>
              From a frozen laptop to a full office network, I find what&apos;s actually wrong and fix it right, the first time. <span>Straight answers, fair pricing, always.</span>
            </p>
            <div className="counters reveal">
              <div className="counter"><div className="num"><span data-val="13">0</span><span className="plus">+</span></div><p>Years in IT, enterprise-grade care for neighbors</p></div>
              <div className="counter"><div className="num"><span data-val="2019">2019</span></div><p>Serving Central Florida homes &amp; businesses since</p></div>
              <div className="counter"><div className="num"><span data-val="100">0</span><span className="plus">%</span></div><p>Honest, up-front pricing, every single time</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="ghost on-dark" data-parallax="0.12">Services</div>
        <div className="wrap">
          <div className="head">
            <div>
              <span className="eyebrow on-dark reveal">Services</span>
              <h2 className="anim-words" style={{marginTop:'14px'}}>Everything your tech needs, one certified technician, no outsourcing, no runaround.</h2>
            </div>
            <Link href="/services" className="btn-pill reveal" style={{alignSelf:'center'}}>See all services →</Link>
          </div>
          <div className="slist">
            <div className="srow reveal"><div><div className="num">01</div><div className="st">Computers &amp; laptops: <span className="em">repairs, tune-ups &amp; cleanups</span></div></div><div className="sd">Slow, frozen, won&apos;t boot, cracked or spilled-on, I diagnose it honestly and fix it right, Windows or Mac.</div></div>
            <div className="srow reveal"><div><div className="num">02</div><div className="st">Wi-Fi &amp; networks: <span className="em">coverage that reaches everywhere</span></div></div><div className="sd">No more dead zones or drop-outs. Networks built to stay up, for the whole house or the whole office.</div></div>
            <div className="srow reveal"><div><div className="num">03</div><div className="st">Smart home: <span className="em">cameras, doorbells &amp; devices, set up right</span></div></div><div className="sd">New devices working together the way they should, installed cleanly and explained simply.</div></div>
            <div className="srow reveal"><div><div className="num">04</div><div className="st">Data recovery: <span className="em">getting your photos &amp; files back</span></div></div><div className="sd">The photos and files that matter most. If there&apos;s a way to recover them, I&apos;ll find it.</div></div>
            <div className="srow reveal"><div><div className="num">05</div><div className="st">Business IT: <span className="em">quiet, dependable support</span></div></div><div className="sd">Microsoft 365, security, backups and the kind of support that lets your team stop thinking about tech.</div></div>
            <div className="srow reveal"><div><div className="num">06</div><div className="st">Custom PC builds: <span className="em">starting at $350 + parts</span></div></div><div className="sd">New build or a performance upgrade, I spec, source, and assemble it right the first time.</div></div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <div className="wrap benefits-grid">
          <div>
            <span className="eyebrow green reveal">Benefits</span>
            <h2 className="anim-words">What you actually get when you call.</h2>
            <p className="reveal" style={{color:'var(--muted)',maxWidth:'38ch',marginBottom:'30px'}}>13 years of enterprise IT experience, brought to your home or office at a fair price.</p>
            <div className="cta reveal">
              <Link href="/contact" className="btn-pill dark">Book a same-day visit</Link>
              <Link href="/contact" className="btn-circle" aria-label="Get help">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </Link>
            </div>
          </div>
          <div className="bento reveal">
            <div className="bcard"><div className="big"><span data-val="13">0</span><span className="plus">+</span></div><div><h3>Years of experience</h3><p>CompTIA A+ &amp; Network+, Microsoft MCSE/MCSA.</p></div></div>
            <div className="bcard"><div><h3>Same-day, often</h3><p>When the schedule and parts allow, and a realistic window when they don&apos;t.</p></div><div className="big">⚡</div></div>
            <div className="bcard feature">
              <div className="txt"><h3>Quiet, dependable IT</h3><p>Networks and support built to stay up, so your team can stop thinking about technology.</p></div>
              <div className="bimg"><Image src="/assets/network2.jpg" alt="Business network installation" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 25vw" /></div>
            </div>
            <div className="bcard"><div><h3>Honest on cost</h3><p>An up-front price before any work begins. I&apos;d rather lose a job than surprise you with a bill.</p></div><div className="big" style={{fontSize:'1.5rem',color:'var(--green-deep)'}}>No surprises</div></div>
            <div className="bcard"><div><h3>Plain language</h3><p>You&apos;ll understand what happened and why, never made to feel behind for asking.</p></div><div className="big">💬</div></div>
          </div>
        </div>
      </section>

      {/* MEET JOE */}
      <section className="owner">
        <div className="wrap owner-grid">
          <div className="owner-photo" id="ownerPhoto">
            <Image src="/assets/joe-hero.jpg" alt="Joe Witter, owner of Witter Tech" fill style={{objectFit:'cover',objectPosition:'center top'}} sizes="(max-width:980px) 100vw, 42vw" />
          </div>
          <div>
            <span className="eyebrow green reveal">Meet Joe</span>
            <h2 className="anim-words">Hi, I&apos;m Joe, and Witter Tech is just me, doing this the way I&apos;d want it done for my own family.</h2>
            <p className="reveal">I&apos;ve been in IT for over 13 years, managing infrastructure and security for organizations where uptime really matters. Since 2019, I&apos;ve brought that same level of care to the families and small businesses of Central Florida.</p>
            <p className="reveal">What that means for you: straight answers, fair pricing, and the job done right the first time. No ticket queues, no being talked down to, just a real person who&apos;s genuinely good at this and happy to explain it.</p>
            <div className="creds reveal">
              <span>13+ years in IT</span><span>CompTIA A+ &amp; Network+</span><span>Microsoft MCSE / MCSA</span><span>Family-owned</span>
            </div>
            <div className="owner-sign reveal">Joe Witter<small>Owner, Witter Tech</small></div>
            <div className="cta reveal" style={{marginTop:'28px'}}>
              <Link href="/about" className="btn-pill">Learn more about Joe →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="problems" id="problems">
        <div className="ghost" data-parallax="0.1">Problems</div>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal" style={{justifyContent:'center'}}>Sound familiar?</span>
            <h2 className="anim-words">Calls I get every week.</h2>
          </div>
          <div className="pgrid">
            <div className="pcard reveal"><div className="ph"><Image src="/assets/hero.jpg" alt="Laptop repair in Central Florida" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;It turns on, but nothing really happens.&rdquo;</div><span className="pcat">Laptops</span></div></div>
            <div className="pcard reveal"><div className="ph"><Image src="/assets/network.jpg" alt="Home Wi-Fi and network setup in the Kissimmee, Orlando area" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;The Wi-Fi drops in half the house.&rdquo;</div><span className="pcat">Networks</span></div></div>
            <div className="pcard reveal"><div className="ph"><Image src="/assets/hands.jpg" alt="Computer tune-up and cleanup" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;Everything&apos;s gotten slow and I don&apos;t know why.&rdquo;</div><span className="pcat">Tune-ups</span></div></div>
            <div className="pcard reveal"><div className="ph"><Image src="/assets/bench.jpg" alt="Data recovery from failed drives" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;I really need my photos and files back.&rdquo;</div><span className="pcat">Recovery</span></div></div>
            <div className="pcard reveal"><div className="ph"><Image src="/assets/living.jpg" alt="Smart home and camera installation" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;We&apos;re setting up cameras, a doorbell, or a new TV.&rdquo;</div><span className="pcat">Smart home</span></div></div>
            <div className="pcard reveal"><div className="ph"><Image src="/assets/network2.jpg" alt="Small business office network support" fill style={{objectFit:'cover'}} sizes="(max-width:680px) 100vw, 33vw" /></div><div className="pb"><div className="pq">&ldquo;Our office network just needs to work, reliably.&rdquo;</div><span className="pcat">Business IT</span></div></div>
          </div>
          <p className="pfoot reveal">If yours isn&apos;t on the list, that&apos;s fine. <Link href="/contact">Just describe it in your own words.</Link></p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="ghost" data-parallax="0.1">Reviews</div>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow reveal" style={{justifyContent:'center'}}>Reviews</span>
            <h2 className="anim-words">Rated 5.0 on Google: 36 reviews, all five stars.</h2>
            <p className="reveal">Real reviews from real neighbors, posted to Google under Witt-Tech Solutions, Witter Tech&apos;s legal name. Same Joe.</p>
          </div>
          <div className="rcard reveal">
            <div className="rph"><Image src="/assets/living.jpg" alt="Happy customer at home" fill style={{objectFit:'cover'}} sizes="(max-width:980px) 100vw, 40vw" /></div>
            <div className="rb">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;I assumed it would take days and most of my bank account&hellip; within only a couple hours it was fixed.&rdquo;</blockquote>
              <p className="body">&ldquo;He met me, took my computer to his lab, and within only a couple hours it was fixed, and for way less money than I expected. I&apos;m currently writing this review from that computer. His 5-star status is well deserved.&rdquo;</p>
              <div className="who">Mark Bynes<span>Google review</span></div>
            </div>
          </div>
          <div className="rev-grid">
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;My gaming PC just crashed on me while playing and I couldn&apos;t get it back up and running. He fixed the problem within a couple hours and for a reasonable price. Very professional.&rdquo;</p>
              <div className="who">Haylis Perez<span>Google review</span></div>
            </div>
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;Needed my computer fixed quick for work &amp; he set me up in one day! Went to dinner, came back &amp; everything was running smoothly. Definitely worth the money.&rdquo;</p>
              <div className="who">Blayze<span>Google review</span></div>
            </div>
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;Quick to respond to my request, gave me an accurate quote and had the job done so fast! I will definitely reach out to him for all my future tech needs!&rdquo;</p>
              <div className="who">Naomi Simmons<span>Google review</span></div>
            </div>
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;We had an issue with the tower for our alignment machine. Joseph was able to get to us the same day! He even spoke directly to the company that makes the alignment machine.&rdquo;</p>
              <div className="who">Silvera and Sons Automotive Repair<span>Google review · business client</span></div>
            </div>
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;He takes the time to explain and search for solutions, super trustful and efficient, highly recommended!&rdquo;</p>
              <div className="who">Jose M<span>Google review</span></div>
            </div>
            <div className="rev-card reveal">
              <div className="stars">★★★★★</div>
              <p>&ldquo;I had a messed up computer screen. Joseph got the part and fixed it up in a day, good as new. Great work at a good price.&rdquo;</p>
              <div className="who">Ryan<span>Google review</span></div>
            </div>
          </div>
          <div className="reveal" style={{textAlign:'center',marginTop:'44px',position:'relative',zIndex:2}}>
            <a href="https://www.google.com/search?q=Witt-Tech+Solutions+Kissimmee+FL+reviews" target="_blank" rel="noopener noreferrer" className="btn-pill">Read all 36 reviews on Google →</a>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="faq" id="faq">
        <div className="wrap faq-grid">
          <div>
            <span className="eyebrow green reveal">FAQ</span>
            <h2 className="anim-words">Questions, answered plainly.</h2>
            <p className="lede reveal">Still unsure about something? Ask me directly, I&apos;d rather you understand than guess.</p>
            <div className="cta reveal" style={{marginTop:'28px'}}>
              <Link href="/faq" className="btn-pill">See all questions →</Link>
            </div>
          </div>
          <div className="reveal">
            <div className="faq-item"><button className="faq-q">Do you come to me, or do I bring it to you?<span className="ic"></span></button><div className="faq-a"><p>Whatever&apos;s easiest for you. I work on-site at homes and businesses across Central Florida, I can often help remotely, or you&apos;re welcome to drop a device off. We&apos;ll figure out the simplest option when you reach out.</p></div></div>
            <div className="faq-item"><button className="faq-q">Will my files and photos be safe?<span className="ic"></span></button><div className="faq-a"><p>In most repairs your data stays exactly where it is. If there&apos;s ever a chance something could be lost, I&apos;ll tell you before I start, so you can decide what you&apos;re comfortable with. Nothing happens behind your back.</p></div></div>
            <div className="faq-item"><button className="faq-q">How much is this going to cost?<span className="ic"></span></button><div className="faq-a"><p>You&apos;ll get an honest price up front, before any work begins. If something turns out simpler than expected, that&apos;s reflected in what you pay.</p></div></div>
            <div className="faq-item"><button className="faq-q">How quickly can you help?<span className="ic"></span></button><div className="faq-a"><p>Often the same day, depending on the schedule and the part needed. When you reach out, I&apos;ll give you a realistic window rather than an empty promise.</p></div></div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="ctaband">
        <div className="ghost on-dark" data-parallax="0.14">Let&apos;s fix it.</div>
        <div className="wrap">
          <span className="eyebrow on-dark reveal" style={{justifyContent:'center'}}>One call or text is all it takes</span>
          <h2 className="anim-words">Describe the problem, I&apos;ll handle everything else.</h2>
          <div className="cta reveal">
            <Link href="/contact" className="btn-pill accent">Send Joe a message</Link>
            <a href="tel:14076248459" className="btn-circle" aria-label="Call Joe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
