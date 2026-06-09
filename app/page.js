import Link from 'next/link'

export const metadata = {
  title: 'Witter Tech — Calm, Personal Tech Help in Central Florida',
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="ghost" data-parallax="0.18">Calm.</div>
        <div className="wrap hero-grid">
          <div>
            <h1 className="anim-words">Technology help that feels clear, calm, and <em>personal.</em></h1>
            <p className="sub reveal">Computer and device problems have a way of interrupting your whole day. I&apos;ll get you back to normal — and explain what&apos;s going on, in plain language, along the way.</p>
            <div className="hero-cta reveal">
              <div className="cta">
                <Link href="/contact" className="btn-pill accent">Tell us what&apos;s going on</Link>
                <Link href="/contact" className="btn-circle" aria-label="Get help">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
                </Link>
              </div>
              <a href="tel:14076248459" className="link-quiet">Or call &amp; text Joe</a>
            </div>
          </div>
          <div className="hero-photo" id="heroPhoto">
            <div className="frame"><img src="/assets/hero-tech.jpg" alt="Careful, hands-on device repair" /></div>
            <div className="intro-card">
              <img src="/assets/joe.jpg" alt="Joe Witter" />
              <p><span className="dotline">●</span> Honest, careful work — and you&apos;ll always understand what I&apos;m doing and why.</p>
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
            <div><h4>Who I help</h4><p>Homes &middot; Families &middot; Small businesses &amp; offices</p></div>
            <div><h4>Service area</h4><p>Kissimmee &middot; Orlando &middot; St. Cloud &middot; Celebration &middot; Davenport</p></div>
            <div><h4>How</h4><p>On-site &middot; Remote &middot; Drop-off — whatever&apos;s easiest for you</p></div>
          </div>
          <div>
            <span className="eyebrow green reveal">About</span>
            <p className="statement anim-words" style={{marginTop:'18px'}}>
              From a slow laptop to a whole-office network — I figure out what&apos;s actually wrong and fix it properly. <span>No jargon, no sales pitch, no being talked down to.</span>
            </p>
            <div className="counters reveal">
              <div className="counter"><div className="num"><span data-val="13">0</span><span className="plus">+</span></div><p>Years in IT — enterprise-grade care for neighbors</p></div>
              <div className="counter"><div className="num"><span data-val="2019">2019</span></div><p>Serving Central Florida homes &amp; businesses since</p></div>
              <div className="counter"><div className="num"><span data-val="100">0</span><span className="plus">%</span></div><p>Honest, up-front pricing — every single time</p></div>
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
              <h2 className="anim-words" style={{marginTop:'14px'}}>Everything your tech needs — handled by one person who explains it.</h2>
            </div>
            <Link href="/services" className="btn-pill reveal" style={{alignSelf:'center'}}>See all services →</Link>
          </div>
          <div className="slist">
            <div className="srow reveal"><div><div className="num">01</div><div className="st">Computers &amp; laptops <span className="em">— repairs, tune-ups &amp; cleanups</span></div></div><div className="sd">Slow, frozen, won&apos;t boot, cracked or spilled-on — I diagnose it honestly and fix it right, Windows or Mac.</div></div>
            <div className="srow reveal"><div><div className="num">02</div><div className="st">Wi-Fi &amp; networks <span className="em">— coverage that reaches everywhere</span></div></div><div className="sd">No more dead zones or drop-outs. Networks built to stay up, for the whole house or the whole office.</div></div>
            <div className="srow reveal"><div><div className="num">03</div><div className="st">Smart home <span className="em">— cameras, doorbells &amp; devices, set up right</span></div></div><div className="sd">New devices working together the way they should — installed cleanly and explained simply.</div></div>
            <div className="srow reveal"><div><div className="num">04</div><div className="st">Data recovery <span className="em">— getting your photos &amp; files back</span></div></div><div className="sd">The photos and files that matter most. If there&apos;s a way to recover them, I&apos;ll find it.</div></div>
            <div className="srow reveal"><div><div className="num">05</div><div className="st">Business IT <span className="em">— quiet, dependable support</span></div></div><div className="sd">Microsoft 365, security, backups and the kind of support that lets your team stop thinking about tech.</div></div>
            <div className="srow reveal"><div><div className="num">06</div><div className="st">Custom PC builds <span className="em">— starting at $350 + parts</span></div></div><div className="sd">New build or a performance upgrade — I spec, source, and assemble it right the first time.</div></div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <div className="wrap benefits-grid">
          <div>
            <span className="eyebrow green reveal">Benefits</span>
            <h2 className="anim-words">Why people work with Joe.</h2>
            <p className="reveal" style={{color:'var(--muted)',maxWidth:'38ch',marginBottom:'30px'}}>Enterprise-grade skill, neighbor-level care. Here&apos;s what that actually means for you.</p>
            <div className="cta reveal">
              <Link href="/contact" className="btn-pill dark">Tell us what&apos;s going on</Link>
              <Link href="/contact" className="btn-circle" aria-label="Get help">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </Link>
            </div>
          </div>
          <div className="bento reveal">
            <div className="bcard"><div className="big"><span data-val="13">0</span><span className="plus">+</span></div><div><h3>Years of experience</h3><p>CompTIA A+ &amp; Network+, Microsoft MCSE/MCSA.</p></div></div>
            <div className="bcard"><div><h3>Same-day, often</h3><p>When the schedule and parts allow — and a realistic window when they don&apos;t.</p></div><div className="big">⚡</div></div>
            <div className="bcard feature">
              <div className="txt"><h3>Quiet, dependable IT</h3><p>Networks and support built to stay up — so your team can stop thinking about technology.</p></div>
              <img src="/assets/network2.jpg" alt="Networking work" />
            </div>
            <div className="bcard"><div><h3>Honest on cost</h3><p>An up-front price before any work begins. I&apos;d rather lose a job than surprise you with a bill.</p></div><div className="big" style={{fontSize:'1.5rem',color:'var(--green-deep)'}}>No surprises</div></div>
            <div className="bcard"><div><h3>Plain language</h3><p>You&apos;ll understand what happened and why — never made to feel behind for asking.</p></div><div className="big">💬</div></div>
          </div>
        </div>
      </section>

      {/* MEET JOE */}
      <section className="owner">
        <div className="wrap owner-grid">
          <div className="owner-photo" id="ownerPhoto">
            <img src="/assets/joe-hero.jpg" alt="Joe Witter, owner of Witter Tech" />
          </div>
          <div>
            <span className="eyebrow green reveal">Meet Joe</span>
            <h2 className="anim-words">Hi, I&apos;m Joe — and Witter Tech is just me, doing this the way I&apos;d want it done for my own family.</h2>
            <p className="reveal">Technology has been my thing for over thirteen years. By day I&apos;ve managed IT for organizations where reliability and security really matter; since 2019 I&apos;ve been helping the families and small businesses around Central Florida with the same level of care.</p>
            <p className="reveal">What that means for you: clear communication, fair pricing, and the job done right the first time. No ticket queues, no being talked down to — just a real person who&apos;s genuinely good at this and happy to explain it.</p>
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
            <span className="eyebrow reveal" style={{justifyContent:'center'}}>In plain language</span>
            <h2 className="anim-words">Things people usually reach out about.</h2>
          </div>
          <div className="pgrid">
            <div className="pcard reveal"><div className="ph"><img src="/assets/hero.jpg" alt="Laptop repair" /></div><div className="pb"><div className="pq">&ldquo;It turns on, but nothing really happens.&rdquo;</div><span className="pcat">Laptops</span></div></div>
            <div className="pcard reveal"><div className="ph"><img src="/assets/network.jpg" alt="Networking" /></div><div className="pb"><div className="pq">&ldquo;The Wi-Fi drops in half the house.&rdquo;</div><span className="pcat">Networks</span></div></div>
            <div className="pcard reveal"><div className="ph"><img src="/assets/hands.jpg" alt="Computer tune-up" /></div><div className="pb"><div className="pq">&ldquo;Everything&apos;s gotten slow and I don&apos;t know why.&rdquo;</div><span className="pcat">Tune-ups</span></div></div>
            <div className="pcard reveal"><div className="ph"><img src="/assets/bench.jpg" alt="Data recovery" /></div><div className="pb"><div className="pq">&ldquo;I really need my photos and files back.&rdquo;</div><span className="pcat">Recovery</span></div></div>
            <div className="pcard reveal"><div className="ph"><img src="/assets/living.jpg" alt="Smart home" /></div><div className="pb"><div className="pq">&ldquo;We&apos;re setting up cameras, a doorbell, or a new TV.&rdquo;</div><span className="pcat">Smart home</span></div></div>
            <div className="pcard reveal"><div className="ph"><img src="/assets/network2.jpg" alt="Business IT" /></div><div className="pb"><div className="pq">&ldquo;Our office network just needs to work — reliably.&rdquo;</div><span className="pcat">Business IT</span></div></div>
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
            <h2 className="anim-words">What people say.</h2>
            <p className="reveal">Real help, explained plainly — here&apos;s how that feels.</p>
          </div>
          <div className="rcard reveal">
            <img src="/assets/living.jpg" alt="Happy customer at home" />
            <div className="rb">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;He fixed in an afternoon what two other places couldn&apos;t — and actually explained what went wrong.&rdquo;</blockquote>
              <p className="body">My laptop wouldn&apos;t boot and I was sure I&apos;d lost years of photos. Joe walked me through every step, recovered everything, and the price was exactly what he quoted. I won&apos;t call anyone else.</p>
              <div className="who">Verified Customer<span>Kissimmee, FL</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="faq" id="faq">
        <div className="wrap faq-grid">
          <div>
            <span className="eyebrow green reveal">FAQ</span>
            <h2 className="anim-words">Questions, answered plainly.</h2>
            <p className="lede reveal">Still unsure about something? Ask me directly — I&apos;d rather you understand than guess.</p>
            <div className="cta reveal" style={{marginTop:'28px'}}>
              <Link href="/faq" className="btn-pill">See all questions →</Link>
            </div>
          </div>
          <div className="reveal">
            <div className="faq-item"><button className="faq-q">Do you come to me, or do I bring it to you?<span className="ic"></span></button><div className="faq-a"><p>Whatever&apos;s easiest for you. I work on-site at homes and businesses across Central Florida, I can often help remotely, or you&apos;re welcome to drop a device off. We&apos;ll figure out the simplest option when you reach out.</p></div></div>
            <div className="faq-item"><button className="faq-q">Will my files and photos be safe?<span className="ic"></span></button><div className="faq-a"><p>In most repairs your data stays exactly where it is. If there&apos;s ever a chance something could be lost, I&apos;ll tell you before I start — so you can decide what you&apos;re comfortable with. Nothing happens behind your back.</p></div></div>
            <div className="faq-item"><button className="faq-q">How much is this going to cost?<span className="ic"></span></button><div className="faq-a"><p>You&apos;ll get an honest price up front, before any work begins. If something turns out simpler than expected, that&apos;s reflected in what you pay.</p></div></div>
            <div className="faq-item"><button className="faq-q">How quickly can you help?<span className="ic"></span></button><div className="faq-a"><p>Often the same day, depending on the schedule and the part needed. When you reach out, I&apos;ll give you a realistic window rather than an empty promise.</p></div></div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="ctaband">
        <div className="ghost on-dark" data-parallax="0.14">Let&apos;s fix it.</div>
        <div className="wrap">
          <span className="eyebrow on-dark reveal" style={{justifyContent:'center'}}>Ready when you are</span>
          <h2 className="anim-words">Tell me what&apos;s going on — I&apos;ll take it from there.</h2>
          <div className="cta reveal">
            <Link href="/contact" className="btn-pill accent">Tell us what&apos;s going on</Link>
            <a href="tel:14076248459" className="btn-circle" aria-label="Call Joe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
