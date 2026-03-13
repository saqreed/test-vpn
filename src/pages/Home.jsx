import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Lock, Zap, Globe, Server, CheckCircle, ArrowRight, Users, Award, TrendingUp, Star } from 'lucide-react'
import SEO from '../components/SEO'

const FEATURES = [
  { Icon: Lock,        title: 'AES-256 Encryption',  desc: 'Military-grade encryption trusted by governments worldwide.' },
  { Icon: Zap,         title: 'Up to 10 Gbps',       desc: 'Optimised servers deliver blazing-fast connections globally.' },
  { Icon: Globe,       title: '100+ Locations',       desc: 'Servers in 50+ countries — always the fastest node near you.' },
  { Icon: Shield,      title: 'Zero-Log Policy',      desc: 'We never store, track or share your browsing activity.' },
  { Icon: Server,      title: 'Multi-Device',         desc: 'Protect up to 10 devices simultaneously on one plan.' },
  { Icon: CheckCircle, title: '24/7 Support',         desc: 'Expert help via live chat, email and phone, around the clock.' },
]
const STATS = [
  { value: '10M+',  label: 'Active Users',     Icon: Users },
  { value: '100+',  label: 'Server Locations', Icon: Globe },
  { value: '99.9%', label: 'Uptime',           Icon: TrendingUp },
  { value: '4.9★',  label: 'User Rating',      Icon: Award },
]
const TESTIMONIALS = [
  { name: 'Alex Chen',       role: 'Software Engineer',   text: 'CloudVPN is blazing fast and incredibly reliable. Best VPN I have ever used.' },
  { name: 'Maria Rodriguez', role: 'Digital Nomad',       text: 'The global server coverage is amazing. I access content from anywhere.' },
  { name: 'James Wilson',    role: 'Security Researcher', text: 'Genuinely impressed by their zero-log policy and AES-256 encryption.' },
]
const STEPS = [
  { n: '01', title: 'Create Account',  desc: 'Sign up in seconds — no credit card required for the free trial.' },
  { n: '02', title: 'Choose a Server', desc: 'Pick from 100+ servers or let us auto-select the fastest one.' },
  { n: '03', title: 'Browse Freely',   desc: 'Your connection is now encrypted. Browse, stream, stay private.' },
]

function FU({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.25,0.46,0.45,0.94] }}
    >{children}</motion.div>
  )
}

function ShieldBtn() {
  const [burst, setBurst] = useState([])
  const [pressed, setPressed] = useState(false)
  function fire() {
    setPressed(true)
    setTimeout(() => setPressed(false), 220)
    const id = Date.now()
    setBurst(b => [...b, id])
    setTimeout(() => setBurst(b => b.filter(x => x !== id)), 850)
  }
  return (
    <div style={{ position:'relative', width:300, height:300, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:'1px dashed rgba(255,255,255,0.18)', animation:'spinSlow 20s linear infinite' }} />
      {[0,0.75,1.5].map((d,i) => (
        <div key={i} className="pulse-ring" style={{ position:'absolute', inset:-(16+i*18), borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.13)', animationDelay:`${d}s` }} />
      ))}
      <motion.button
        onClick={fire}
        animate={{ scale: pressed ? 0.88 : 1 }}
        transition={{ type:'spring', stiffness:500, damping:20 }}
        style={{ width:188, height:188, borderRadius:'50%', border:'none', cursor:'pointer', position:'relative', overflow:'hidden', background:'rgba(255,255,255,0.1)', backdropFilter:'blur(14px)', boxShadow:'0 0 60px rgba(59,130,246,0.5), inset 0 1px 1px rgba(255,255,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}
        aria-label="CloudVPN shield"
      >
        {burst.map(id => (
          <span key={id} style={{ position:'absolute', inset:0, borderRadius:'50%', background:'rgba(255,255,255,0.22)', animation:'pulseRing 0.85s ease-out forwards' }} />
        ))}
        <Shield size={76} color="#fff" strokeWidth={1.4} style={{ filter:'drop-shadow(0 0 18px rgba(255,255,255,0.5))', pointerEvents:'none' }} />
      </motion.button>
      {[
        { label:'🔒 AES-256',     pos:{ top:-8,   right:-14  }, anim:{ y:[0,-9,0] } },
        { label:'⚡ 10 Gbps',     pos:{ bottom:-4, left:-14  }, anim:{ y:[0, 9,0] } },
        { label:'🌍 100+ Servers',pos:{ top:'42%', left:-72  }, anim:{ x:[0,-7,0] } },
      ].map(({ label, pos, anim }) => (
        <motion.div key={label} className="glass-dark"
          style={{ position:'absolute', ...pos, padding:'6px 12px', borderRadius:9, color:'#fff', fontSize:12, fontWeight:600, whiteSpace:'nowrap' }}
          animate={anim} transition={{ duration:3.2, repeat:Infinity, ease:'easeInOut' }}
        >{label}</motion.div>
      ))}
    </div>
  )
}

function ParallaxSect({ children, bg='#fff', py=90 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [38,-38])
  return (
    <section ref={ref} style={{ background:bg, overflow:'hidden', padding:`${py}px 0` }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </section>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target:heroRef, offset:['start start','end start'] })
  const heroY  = useTransform(scrollYProgress, [0,1], [0,90])
  const heroOp = useTransform(scrollYProgress, [0,0.8], [1,0])

  return (
    <div style={{ overflowX:'hidden' }}>
      <SEO
        title="Best VPN Service — Fast, Secure & Private"
        description="CloudVPN delivers military-grade AES-256 encryption, zero-log policy, and blazing-fast speeds across 100+ server locations in 50+ countries. Try free for 30 days."
        path="/"
        keywords="VPN, best VPN, fast VPN, secure VPN, private VPN, AES-256, no-log VPN, unlimited VPN, cheap VPN, VPN service 2024"
      />

      {/* ══ HERO ══ */}
      <section ref={heroRef} className="bg-mesh" style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'38px 38px' }} />
        <motion.div style={{ y:heroY, opacity:heroOp, width:'100%' }}>
          <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px', paddingTop:90, paddingBottom:40 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:40, flexWrap:'wrap' }}>
              {/* left */}
              <div style={{ flex:'1 1 400px', color:'#fff' }}>
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
                  className="glass-dark" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'7px 16px', borderRadius:999, fontSize:13, fontWeight:500, marginBottom:28 }}>
                  <span style={{ width:7, height:7, borderRadius:'50%', background:'#4ade80', boxShadow:'0 0 6px #4ade80', flexShrink:0 }} />
                  Trusted by 10M+ users worldwide
                </motion.div>
                <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
                  style={{ fontSize:'clamp(38px,5.5vw,66px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.5px', marginBottom:22 }}>
                  Your Privacy,<br /><span style={{ color:'rgba(255,255,255,0.6)' }}>Our Priority</span>
                </motion.h1>
                <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.2 }}
                  style={{ fontSize:17, color:'rgba(255,255,255,0.68)', lineHeight:1.75, maxWidth:460, marginBottom:36 }}>
                  CloudVPN delivers blazing-fast, military-grade encrypted connections across 100+ countries. Browse freely, stay anonymous, stay safe.
                </motion.p>
                <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
                  style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                  <Link to="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#1d4ed8', fontWeight:700, fontSize:15, padding:'13px 28px', borderRadius:12, boxShadow:'0 4px 20px rgba(0,0,0,0.22)', textDecoration:'none', transition:'transform 0.18s,box-shadow 0.18s' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,0.28)' }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform='scale(1)';    e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.22)' }}>
                    Start Free Trial <ArrowRight size={16} />
                  </Link>
                  <Link to="/features" className="glass-dark" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'#fff', fontWeight:600, fontSize:15, padding:'13px 26px', borderRadius:12, textDecoration:'none', transition:'background 0.18s' }}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.16)'}
                    onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}>
                    Learn More
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
                  style={{ display:'flex', gap:20, flexWrap:'wrap', marginTop:28, fontSize:13, color:'rgba(255,255,255,0.58)' }}>
                  {['No credit card','30-day free trial','Cancel anytime'].map(t => (
                    <span key={t} style={{ display:'flex', alignItems:'center', gap:6 }}><CheckCircle size={14} color="#4ade80" />{t}</span>
                  ))}
                </motion.div>
              </div>
              {/* right */}
              <motion.div initial={{ opacity:0, scale:0.75 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.25, ease:'easeOut' }}
                style={{ flex:'0 0 auto', display:'flex', justifyContent:'center' }}>
                <ShieldBtn />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', display:'block' }}>
            <path d="M0 70L1440 70L1440 22C1080 70 720 10 360 46L0 22Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background:'var(--bg)', padding:'72px 0' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:20 }}>
            {STATS.map(({ value, label, Icon }, i) => (
              <FU key={label} delay={i*0.08}>
                <div style={{ background:'var(--bg-stat)', borderRadius:18, padding:'28px 20px', textAlign:'center', border:'1px solid var(--border)', transition:'box-shadow 0.2s,transform 0.2s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 8px 28px rgba(59,130,246,0.14)'; e.currentTarget.style.transform='translateY(-3px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:46, height:46, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 14px', boxShadow:'0 4px 12px rgba(29,78,216,0.28)' }}>
                    <Icon size={22} color="#fff" />
                  </div>
                  <div style={{ fontSize:32, fontWeight:900, color:'var(--text)', letterSpacing:'-1px' }}>{value}</div>
                  <div style={{ fontSize:13, color:'var(--text-3)', fontWeight:500, marginTop:4 }}>{label}</div>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES (parallax) ══ */}
      <ParallaxSect bg="var(--bg-sect)">
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>Why CloudVPN</span>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:900, color:'var(--text)', marginTop:10, letterSpacing:'-0.7px' }}>Everything you need to stay safe</h2>
              <p style={{ color:'var(--text-3)', fontSize:16, marginTop:12, maxWidth:500, margin:'12px auto 0' }}>Built for privacy-first people who demand top security without losing speed.</p>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:18 }}>
            {FEATURES.map(({ Icon, title, desc }, i) => (
              <FU key={title} delay={i*0.07}>
                <div style={{ background:'var(--bg-card)', borderRadius:18, padding:'30px 26px', border:'1px solid var(--border)', transition:'box-shadow 0.25s,transform 0.25s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 12px 36px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-4px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:50, height:50, borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18, boxShadow:'0 4px 14px rgba(29,78,216,0.28)' }}>
                    <Icon size={23} color="#fff" />
                  </div>
                  <h3 style={{ fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:7 }}>{title}</h3>
                  <p style={{ fontSize:14, color:'var(--text-3)', lineHeight:1.65 }}>{desc}</p>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </ParallaxSect>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ background:'var(--bg)', padding:'90px 0' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>How It Works</span>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:900, color:'var(--text)', marginTop:10, letterSpacing:'-0.7px' }}>Up and running in 3 steps</h2>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:24 }}>
            {STEPS.map(({ n, title, desc }, i) => (
              <FU key={n} delay={i*0.1}>
                <div style={{ textAlign:'center', padding:'0 16px' }}>
                  <div className="vpn-gradient" style={{ width:72, height:72, borderRadius:18, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:'0 6px 20px rgba(29,78,216,0.3)' }}>
                    <span style={{ fontSize:22, fontWeight:900, color:'#fff' }}>{n}</span>
                  </div>
                  <h3 style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{title}</h3>
                  <p style={{ fontSize:14, color:'var(--text-3)', lineHeight:1.7, maxWidth:260, margin:'0 auto' }}>{desc}</p>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS (parallax) ══ */}
      <ParallaxSect bg="var(--bg-sect)">
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>Testimonials</span>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:900, color:'var(--text)', marginTop:10, letterSpacing:'-0.7px' }}>Loved by millions</h2>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:18 }}>
            {TESTIMONIALS.map(({ name, role, text }, i) => (
              <FU key={name} delay={i*0.08}>
                <div style={{ background:'var(--bg-card)', borderRadius:18, padding:'30px 26px', border:'1px solid var(--border)', transition:'box-shadow 0.25s,transform 0.25s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 12px 36px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-4px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div style={{ display:'flex', gap:3, marginBottom:14 }}>
                    {Array.from({length:5}).map((_,j) => <Star key={j} size={14} fill="#facc15" color="#facc15" />)}
                  </div>
                  <p style={{ fontSize:14, color:'var(--text-2)', lineHeight:1.7, marginBottom:20 }}>"{text}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <div className="vpn-gradient" style={{ width:38, height:38, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:14, flexShrink:0 }}>{name[0]}</div>
                    <div>
                      <div style={{ fontSize:14, fontWeight:700, color:'var(--text)' }}>{name}</div>
                      <div style={{ fontSize:12, color:'var(--text-muted)' }}>{role}</div>
                    </div>
                  </div>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </ParallaxSect>

      {/* ══ CTA BANNER ══ */}
      <section style={{ background:'var(--bg)', padding:'90px 0' }}>
        <div style={{ maxWidth:880, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div className="vpn-gradient-anim" style={{ borderRadius:24, padding:'72px 48px', textAlign:'center', boxShadow:'0 20px 60px rgba(29,78,216,0.35)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
              <div style={{ position:'absolute', bottom:-40, left:-40, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:900, color:'#fff', marginBottom:14, letterSpacing:'-0.7px', position:'relative' }}>
                Start protecting your privacy today
              </h2>
              <p style={{ fontSize:17, color:'rgba(255,255,255,0.72)', marginBottom:36, maxWidth:480, margin:'0 auto 36px', position:'relative' }}>
                Join 10 million+ users who trust CloudVPN to keep their online activity private and secure.
              </p>
              <Link to="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#1d4ed8', fontWeight:700, fontSize:16, padding:'14px 32px', borderRadius:13, boxShadow:'0 4px 20px rgba(0,0,0,0.2)', textDecoration:'none', transition:'transform 0.18s,box-shadow 0.18s', position:'relative' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,0.28)' }}
                onMouseLeave={e=>{ e.currentTarget.style.transform='scale(1)';    e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.2)' }}>
                Get Started Free <ArrowRight size={17} />
              </Link>
            </div>
          </FU>
        </div>
      </section>

    </div>
  )
}