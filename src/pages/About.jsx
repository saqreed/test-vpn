import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Globe, Heart, Award, ArrowRight } from 'lucide-react'

function FU({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.55, delay, ease:[0.25,0.46,0.45,0.94] }}>
      {children}
    </motion.div>
  )
}

const VALUES = [
  { Icon: Shield, title: 'Privacy First',         desc: 'Privacy is a fundamental right, not a premium feature. Every decision we make is guided by this principle.' },
  { Icon: Globe,  title: 'Global Accessibility',  desc: 'We work to ensure that free and open internet access is available to everyone, everywhere.' },
  { Icon: Heart,  title: 'Radical Transparency',  desc: 'We publish independent security audits and communicate openly about every aspect of our practices.' },
  { Icon: Award,  title: 'Relentless Quality',    desc: 'We never settle for good enough. Our infrastructure is constantly improved for maximum reliability.' },
]

const TEAM = [
  { name:'Sarah Mitchell', role:'CEO & Co-Founder',  initials:'SM', desc:'Former security lead at Google with 15+ years in cybersecurity.' },
  { name:'David Park',     role:'CTO & Co-Founder',  initials:'DP', desc:'Network infrastructure expert, ex-Cloudflare senior engineer.' },
  { name:'Lena Kovacs',    role:'Head of Privacy',   initials:'LK', desc:'Privacy attorney and digital rights advocate.' },
  { name:'Marcus Chen',    role:'Lead Engineer',     initials:'MC', desc:'Distributed systems architect and open-source contributor.' },
  { name:'Aisha Johnson',  role:'Head of Design',    initials:'AJ', desc:'UX designer making security accessible to everyone.' },
  { name:'Tom Reeves',     role:'Head of Support',   initials:'TR', desc:'Customer experience specialist ensuring expert help for all users.' },
]

const MILESTONES = [
  { year:'2018', event:'CloudVPN founded in San Francisco by Sarah Mitchell and David Park.' },
  { year:'2019', event:'Launched first server network across 20 countries. Reached 100,000 users.' },
  { year:'2020', event:'Introduced WireGuard protocol support. First independent security audit passed.' },
  { year:'2021', event:'Expanded to 100+ server locations. Reached 5 million users.' },
  { year:'2023', event:'Launched Business plan. Zero security incidents in 5 years of operation.' },
  { year:'2024', event:'Reached 10 million active users. Second independent audit completed.' },
]

const W = { maxWidth:1180, margin:'0 auto', padding:'0 28px' }

export default function About() {
  return (
    <div style={{ overflowX:'hidden' }}>

      {/* hero */}
      <section className="bg-mesh" style={{ paddingTop:120, paddingBottom:80, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize:'38px 38px' }} />
        <div style={{ ...W, textAlign:'center', color:'#fff', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            className="glass-dark" style={{ display:'inline-flex', padding:'7px 18px', borderRadius:999, fontSize:13, fontWeight:500, marginBottom:22 }}>
            About Us
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
            style={{ fontSize:'clamp(32px,5vw,58px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.2px', marginBottom:18 }}>
            We believe the internet<br /><span style={{ color:'rgba(255,255,255,0.55)' }}>should be free and private</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}
            style={{ fontSize:17, color:'rgba(255,255,255,0.65)', maxWidth:520, margin:'0 auto' }}>
            CloudVPN was founded with a simple mission: make military-grade privacy accessible and easy for everyone.
          </motion.p>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width:'100%', display:'block' }}>
            <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* mission */}
      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ ...W }}>
          <div style={{ display:'flex', alignItems:'center', gap:60, flexWrap:'wrap' }}>
            <FU>
              <div style={{ flex:'1 1 380px' }}>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>Our Mission</span>
                <h2 style={{ fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px', margin:'12px 0 16px' }}>
                  Privacy for everyone, not just the privileged
                </h2>
                <p style={{ fontSize:16, color:'#64748b', lineHeight:1.75, marginBottom:14 }}>
                  In 2018, we watched as governments and corporations began treating internet privacy as an optional extra. We disagreed. Privacy is a right — and we built CloudVPN to defend it.
                </p>
                <p style={{ fontSize:16, color:'#64748b', lineHeight:1.75, marginBottom:28 }}>
                  Today, 10 million+ users across 180 countries trust CloudVPN to keep their browsing private, their data secure, and their internet free from censorship.
                </p>
                <Link to="/features" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'linear-gradient(135deg,#1d4ed8,#3b82f6)', color:'#fff', fontWeight:700, fontSize:15, padding:'13px 26px', borderRadius:12, textDecoration:'none', boxShadow:'0 4px 16px rgba(29,78,216,0.35)', transition:'transform 0.18s' }}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                  Explore our technology <ArrowRight size={16} />
                </Link>
              </div>
            </FU>
            <FU delay={0.1}>
              <div style={{ flex:'1 1 300px' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  {[['10M+','Users Protected'],['180+','Countries Served'],['100+','Server Locations'],['0','Data Breaches']].map(([v,l]) => (
                    <div key={l} style={{ background:'linear-gradient(135deg,#eff6ff,#dbeafe)', borderRadius:16, padding:'24px 16px', textAlign:'center' }}>
                      <div style={{ fontSize:28, fontWeight:900, color:'#1d4ed8', letterSpacing:'-0.8px' }}>{v}</div>
                      <div style={{ fontSize:12, color:'#64748b', fontWeight:500, marginTop:4 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FU>
          </div>
        </div>
      </section>

      {/* values */}
      <section style={{ background:'linear-gradient(135deg,#f0f7ff,#dbeafe 60%,#bfdbfe)', padding:'90px 0' }}>
        <div style={{ ...W }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:50 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>Our Values</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px', marginTop:10 }}>What we stand for</h2>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16 }}>
            {VALUES.map(({ Icon, title, desc }, i) => (
              <FU key={title} delay={i*0.07}>
                <div style={{ background:'#fff', borderRadius:18, padding:'30px 24px', border:'1px solid rgba(219,234,254,0.9)', transition:'box-shadow 0.22s,transform 0.22s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 10px 28px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-3px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:50, height:50, borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18, boxShadow:'0 4px 14px rgba(29,78,216,0.28)' }}>
                    <Icon size={23} color="#fff" />
                  </div>
                  <h3 style={{ fontSize:15, fontWeight:700, color:'#0f172a', marginBottom:8 }}>{title}</h3>
                  <p style={{ fontSize:13, color:'#64748b', lineHeight:1.65 }}>{desc}</p>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:50 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>Our Story</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px', marginTop:10 }}>The CloudVPN journey</h2>
            </div>
          </FU>
          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute', left:20, top:0, bottom:0, width:2, background:'linear-gradient(to bottom,#3b82f6,#dbeafe)' }} />
            {MILESTONES.map(({ year, event }, i) => (
              <FU key={year} delay={i*0.06}>
                <div style={{ display:'flex', gap:28, marginBottom:32, paddingLeft:8 }}>
                  <div className="vpn-gradient" style={{ width:36, height:36, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:800, flexShrink:0, boxShadow:'0 3px 10px rgba(29,78,216,0.3)', zIndex:1 }}>
                    {year.slice(2)}
                  </div>
                  <div style={{ paddingTop:6 }}>
                    <div style={{ fontSize:12, fontWeight:700, color:'#2563eb', marginBottom:4 }}>{year}</div>
                    <p style={{ fontSize:14, color:'#475569', lineHeight:1.65 }}>{event}</p>
                  </div>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section style={{ background:'linear-gradient(135deg,#f0f7ff,#dbeafe 60%,#bfdbfe)', padding:'90px 0' }}>
        <div style={{ ...W }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:50 }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:'uppercase', color:'#2563eb' }}>The Team</span>
              <h2 style={{ fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px', marginTop:10 }}>The people behind CloudVPN</h2>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
            {TEAM.map(({ name, role, initials, desc }, i) => (
              <FU key={name} delay={i*0.06}>
                <div style={{ background:'#fff', borderRadius:18, padding:'28px 22px', border:'1px solid rgba(219,234,254,0.9)', transition:'box-shadow 0.22s,transform 0.22s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 10px 28px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-3px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:52, height:52, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:18, fontWeight:800, marginBottom:16, boxShadow:'0 4px 14px rgba(29,78,216,0.28)' }}>
                    {initials}
                  </div>
                  <div style={{ fontSize:16, fontWeight:700, color:'#0f172a' }}>{name}</div>
                  <div style={{ fontSize:13, color:'#3b82f6', fontWeight:500, margin:'4px 0 10px' }}>{role}</div>
                  <p style={{ fontSize:13, color:'#64748b', lineHeight:1.6 }}>{desc}</p>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ maxWidth:780, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div className="vpn-gradient-anim" style={{ borderRadius:22, padding:'60px 40px', textAlign:'center', boxShadow:'0 20px 60px rgba(29,78,216,0.32)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
              <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:900, color:'#fff', marginBottom:12, letterSpacing:'-0.5px', position:'relative' }}>Join 10 million+ users</h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,0.7)', marginBottom:30, position:'relative' }}>Experience the internet as it was meant to be — free and private.</p>
              <Link to="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#1d4ed8', fontWeight:700, fontSize:15, padding:'13px 28px', borderRadius:12, textDecoration:'none', transition:'transform 0.18s', position:'relative' }}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                Start Free Today <ArrowRight size={16} />
              </Link>
            </div>
          </FU>
        </div>
      </section>

    </div>
  )
}