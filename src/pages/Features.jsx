import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Lock, Zap, Globe, Server, Eye, Wifi, Smartphone, RefreshCw, Clock, CheckCircle, ArrowRight } from 'lucide-react'

function FU({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.55, delay, ease:[0.25,0.46,0.45,0.94] }}>
      {children}
    </motion.div>
  )
}

function ParallaxSect({ children, bg='#fff' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [36,-36])
  return (
    <section ref={ref} style={{ background:bg, overflow:'hidden', padding:'90px 0' }}>
      <motion.div style={{ y }}>{children}</motion.div>
    </section>
  )
}

const MAIN = [
  { Icon: Lock, title: 'AES-256 Encryption',    desc: 'The same encryption standard trusted by governments worldwide. Your data is completely unreadable to anyone who intercepts it.', points: ['256-bit AES encryption','Perfect Forward Secrecy','RSA-4096 key exchange','SHA-512 authentication'] },
  { Icon: Eye,  title: 'Strict Zero-Log Policy', desc: 'We never log your browsing activity, IP addresses, timestamps, or bandwidth. Your privacy is guaranteed by design.',              points: ['No IP address logs','No activity logs','No bandwidth logs','Independently audited'] },
  { Icon: Zap,  title: 'WireGuard Protocol',     desc: 'The latest and fastest VPN protocol delivers incredible speeds while maintaining top-tier security. Up to 3x faster.',            points: ['WireGuard protocol','OpenVPN support','IKEv2/IPSec fallback','Stealth mode'] },
]

const GRID = [
  { Icon: Globe,       title: '100+ Locations',     desc: 'Servers in 50+ countries across 6 continents.' },
  { Icon: Server,      title: 'Dedicated IPs',       desc: 'Get a static IP for consistent, reliable access.' },
  { Icon: Wifi,        title: 'Split Tunneling',     desc: 'Choose which apps route through the VPN tunnel.' },
  { Icon: Smartphone,  title: 'All Devices',         desc: 'iOS, Android, Windows, macOS, Linux, routers.' },
  { Icon: RefreshCw,   title: 'Auto-Connect',        desc: 'Connects automatically on untrusted networks.' },
  { Icon: Clock,       title: 'Kill Switch',         desc: 'Instantly cuts internet if VPN connection drops.' },
  { Icon: Shield,      title: 'DNS Leak Protection', desc: 'Prevents your real DNS from ever being exposed.' },
  { Icon: CheckCircle, title: 'Ad Blocker',          desc: 'Block ads, trackers and malware at DNS level.' },
]

const W = { maxWidth:1180, margin:'0 auto', padding:'0 28px' }

export default function Features() {
  return (
    <div style={{ overflowX:'hidden' }}>

      <section className="bg-mesh" style={{ paddingTop:120, paddingBottom:80, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize:'38px 38px' }} />
        <div style={{ ...W, textAlign:'center', color:'#fff', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            className="glass-dark" style={{ display:'inline-flex', padding:'7px 18px', borderRadius:999, fontSize:13, fontWeight:500, marginBottom:22 }}>
            Features
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
            style={{ fontSize:'clamp(32px,5vw,58px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.2px', marginBottom:18 }}>
            Everything you need,<br /><span style={{ color:'rgba(255,255,255,0.55)' }}>nothing you don't</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}
            style={{ fontSize:17, color:'rgba(255,255,255,0.65)', maxWidth:500, margin:'0 auto' }}>
            Enterprise-grade features to give you the ultimate privacy and performance.
          </motion.p>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width:'100%', display:'block' }}>
            <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ ...W }}>
          {MAIN.map(({ Icon, title, desc, points }, i) => (
            <FU key={title}>
              <div style={{ display:'flex', alignItems:'center', gap:60, flexWrap:'wrap', marginBottom: i < MAIN.length-1 ? 80 : 0, flexDirection: i%2===1 ? 'row-reverse' : 'row' }}>
                <div style={{ flex:'1 1 340px' }}>
                  <div className="vpn-gradient" style={{ width:54, height:54, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, boxShadow:'0 6px 18px rgba(29,78,216,0.3)' }}>
                    <Icon size={25} color="#fff" />
                  </div>
                  <h2 style={{ fontSize:'clamp(20px,2.6vw,32px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.5px', marginBottom:12 }}>{title}</h2>
                  <p style={{ fontSize:16, color:'#64748b', lineHeight:1.75, marginBottom:20 }}>{desc}</p>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
                    {points.map(pt => (
                      <li key={pt} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, fontWeight:500, color:'#334155' }}>
                        <CheckCircle size={15} color="#2563eb" style={{ flexShrink:0 }} />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex:'1 1 260px', display:'flex', justifyContent:'center' }}>
                  <div style={{ width:230, height:230, background:'linear-gradient(135deg,#eff6ff,#dbeafe)', borderRadius:22, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Icon size={95} color="#93c5fd" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </FU>
          ))}
        </div>
      </section>

      <ParallaxSect bg="linear-gradient(135deg,#f0f7ff,#dbeafe 60%,#bfdbfe)">
        <div style={{ ...W }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <h2 style={{ fontSize:'clamp(24px,3vw,40px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px' }}>And much more</h2>
              <p style={{ color:'#64748b', fontSize:16, marginTop:10, maxWidth:420, margin:'10px auto 0' }}>Every detail designed with your privacy in mind.</p>
            </div>
          </FU>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:14 }}>
            {GRID.map(({ Icon, title, desc }, i) => (
              <FU key={title} delay={i*0.05}>
                <div style={{ background:'#fff', borderRadius:15, padding:'24px 20px', border:'1px solid rgba(219,234,254,0.9)', transition:'box-shadow 0.22s,transform 0.22s', cursor:'default' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 10px 28px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-3px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:42, height:42, borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:13, boxShadow:'0 3px 10px rgba(29,78,216,0.25)' }}>
                    <Icon size={19} color="#fff" />
                  </div>
                  <h3 style={{ fontSize:14, fontWeight:700, color:'#0f172a', marginBottom:5 }}>{title}</h3>
                  <p style={{ fontSize:13, color:'#64748b', lineHeight:1.6 }}>{desc}</p>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </ParallaxSect>

      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ maxWidth:780, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div className="vpn-gradient-anim" style={{ borderRadius:22, padding:'60px 40px', textAlign:'center', boxShadow:'0 20px 60px rgba(29,78,216,0.32)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.07)', pointerEvents:'none' }} />
              <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:900, color:'#fff', marginBottom:12, letterSpacing:'-0.5px', position:'relative' }}>Ready to get protected?</h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,0.7)', marginBottom:30, position:'relative' }}>Start your free 30-day trial. No credit card required.</p>
              <Link to="/pricing" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#1d4ed8', fontWeight:700, fontSize:15, padding:'13px 28px', borderRadius:12, textDecoration:'none', transition:'transform 0.18s', position:'relative' }}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                See Pricing <ArrowRight size={16} />
              </Link>
            </div>
          </FU>
        </div>
      </section>

    </div>
  )
}