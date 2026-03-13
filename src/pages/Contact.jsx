import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Headphones, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'

function FU({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.55, delay, ease:[0.25,0.46,0.45,0.94] }}>
      {children}
    </motion.div>
  )
}

const SUPPORT = [
  { Icon: MessageSquare, title:'Live Chat',        desc:'Chat with our team in real time. Average response under 2 min.', cta:'Start Chat' },
  { Icon: Headphones,    title:'Priority Support', desc:'Pro and Business users get dedicated priority support.',          cta:'Open Ticket' },
  { Icon: BookOpen,      title:'Help Center',      desc:'Browse 200+ articles on setup, troubleshooting, and more.',       cta:'Browse Articles' },
]

const INFO = [
  { Icon:Mail,   label:'Email',   value:'support@cloudvpn.io', sub:'We reply within 2 hours' },
  { Icon:Phone,  label:'Phone',   value:'+1 (800) 123-4567',   sub:'Mon-Fri, 9am-6pm PT' },
  { Icon:MapPin, label:'Address', value:'123 Privacy Street',   sub:'San Francisco, CA 94105' },
  { Icon:Clock,  label:'Hours',   value:'24/7 Live Chat',       sub:'Always available' },
]

const W = { maxWidth:1180, margin:'0 auto', padding:'0 28px' }
const INP = { width:'100%', padding:'12px 14px', borderRadius:10, border:'1px solid var(--border)', outline:'none', fontSize:14, color:'var(--text)', background:'var(--bg-2)', fontFamily:'inherit', boxSizing:'border-box' }

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function hc(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function hs(e) {
    e.preventDefault(); setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  return (
    <div style={{ overflowX:'hidden' }}>
      <SEO
        title="Contact CloudVPN — 24/7 Support & Live Chat"
        description="Get in touch with CloudVPN's expert support team. Available 24/7 via live chat, email at support@cloudvpn.io, and phone. Average response time under 2 minutes."
        path="/contact"
        keywords="CloudVPN support, VPN help, contact VPN, VPN customer service, VPN live chat, VPN technical support"
      />

      {/* hero */}
      <section className="bg-mesh" style={{ paddingTop:120, paddingBottom:80, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize:'38px 38px' }} />
        <div style={{ ...W, textAlign:'center', color:'#fff', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            className="glass-dark" style={{ display:'inline-flex', padding:'7px 18px', borderRadius:999, fontSize:13, fontWeight:500, marginBottom:22 }}>
            Contact Us
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
            style={{ fontSize:'clamp(32px,5vw,58px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.2px', marginBottom:18 }}>
            {"We're here to help"}
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}
            style={{ fontSize:17, color:'rgba(255,255,255,0.65)', maxWidth:480, margin:'0 auto' }}>
            Our expert support team is available 24/7 to answer your questions.
          </motion.p>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width:'100%', display:'block' }}>
            <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* support options */}
      <section style={{ background:'var(--bg)', padding:'72px 0' }}>
        <div style={{ ...W }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:18 }}>
            {SUPPORT.map(({ Icon, title, desc, cta }, i) => (
              <FU key={title} delay={i*0.08}>
                <div style={{ background:'var(--bg-stat)', borderRadius:18, padding:'30px 24px', border:'1px solid var(--border)', cursor:'pointer', transition:'box-shadow 0.22s,transform 0.22s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.boxShadow='0 10px 28px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-3px)' }}
                  onMouseLeave={e=>{ e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div className="vpn-gradient" style={{ width:50, height:50, borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18, boxShadow:'0 4px 14px rgba(29,78,216,0.28)' }}>
                    <Icon size={23} color="#fff" />
                  </div>
                  <h3 style={{ fontSize:16, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{title}</h3>
                  <p style={{ fontSize:13, color:'var(--text-3)', lineHeight:1.65, marginBottom:16 }}>{desc}</p>
                  <span style={{ fontSize:13, fontWeight:600, color:'var(--text-2)' }}>{cta} {'\u2192'}</span>
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

      {/* contact form + info */}
      <section style={{ background:'var(--bg-sect)', padding:'72px 0 90px' }}>
        <div style={{ ...W }}>
          <div style={{ display:'flex', gap:40, flexWrap:'wrap' }}>

            {/* left - info */}
            <FU>
              <div style={{ flex:'1 1 300px' }}>
                <h2 style={{ fontSize:'clamp(22px,2.8vw,32px)', fontWeight:900, color:'var(--text)', marginBottom:10 }}>Get in touch</h2>
                <p style={{ fontSize:15, color:'var(--text-3)', lineHeight:1.7, marginBottom:24 }}>Have a question or need help? Send us a message.</p>
                <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                  {INFO.map(({ Icon, label, value, sub }) => (
                    <div key={label} style={{ display:'flex', gap:14, background:'var(--bg-card)', borderRadius:14, padding:'16px 18px', border:'1px solid var(--border)' }}>
                      <div className="vpn-gradient" style={{ width:40, height:40, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:'0 3px 10px rgba(29,78,216,0.25)' }}>
                        <Icon size={18} color="#fff" />
                      </div>
                      <div>
                        <div style={{ fontSize:11, fontWeight:700, color:'var(--text-2)', textTransform:'uppercase', letterSpacing:1.2, marginBottom:2 }}>{label}</div>
                        <div style={{ fontSize:14, fontWeight:600, color:'var(--text)' }}>{value}</div>
                        <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:2 }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FU>

            {/* right - form */}
            <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} style={{ flex:'1 1 400px' }}>
              <div style={{ background:'var(--bg-card)', borderRadius:20, padding:'34px 30px', border:'1px solid var(--border)' }}>
                {sent ? (
                  <div style={{ textAlign:'center', padding:'36px 0' }}>
                    <div className="vpn-gradient" style={{ width:64, height:64, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', boxShadow:'0 8px 24px rgba(29,78,216,0.35)' }}>
                      <CheckCircle size={30} color="#fff" />
                    </div>
                    <h3 style={{ fontSize:20, fontWeight:900, color:'var(--text)', marginBottom:8 }}>Message Sent!</h3>
                    <p style={{ fontSize:14, color:'var(--text-3)', maxWidth:260, margin:'0 auto 20px' }}>Our team will get back to you within 2 hours.</p>
                    <button onClick={()=>{ setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                      style={{ fontSize:13, color:'var(--text-2)', fontWeight:600, background:'none', border:'none', cursor:'pointer' }}>Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={hs} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                      <div>
                        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-2)', marginBottom:5 }}>Full Name</label>
                        <input name="name" value={form.name} onChange={hc} required placeholder="John Doe" style={INP} />
                      </div>
                      <div>
                        <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-2)', marginBottom:5 }}>Email</label>
                        <input name="email" type="email" value={form.email} onChange={hc} required placeholder="john@example.com" style={INP} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-2)', marginBottom:5 }}>Subject</label>
                      <select name="subject" value={form.subject} onChange={hc} required style={INP}>
                        <option value="">Select a subject</option>
                        <option value="billing">Billing</option>
                        <option value="technical">Technical Support</option>
                        <option value="account">Account Issues</option>
                        <option value="sales">Sales</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-2)', marginBottom:5 }}>Message</label>
                      <textarea name="message" value={form.message} onChange={hc} required rows={5} placeholder="How can we help?" style={{ ...INP, resize:'none' }} />
                    </div>
                    <button type="submit" disabled={loading} className="vpn-gradient"
                      style={{ width:'100%', padding:'13px', borderRadius:12, color:'#fff', fontWeight:700, fontSize:15, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8, boxShadow:'0 4px 16px rgba(29,78,216,0.35)', opacity: loading?0.7:1 }}>
                      {loading ? 'Sending...' : <><Send size={17} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}