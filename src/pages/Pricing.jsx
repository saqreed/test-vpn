import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, X, ArrowRight, Shield, Zap, Crown } from 'lucide-react'

function FU({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-40px' }} transition={{ duration:0.55, delay, ease:[0.25,0.46,0.45,0.94] }}>
      {children}
    </motion.div>
  )
}

const PLANS = [
  {
    name:'Free', Icon:Shield, monthly:0, yearly:0, desc:'Perfect for trying out CloudVPN.',
    gradient:'linear-gradient(135deg,#64748b,#475569)',
    features:[
      {t:'5 GB monthly data',ok:true},{t:'3 server locations',ok:true},{t:'Basic encryption',ok:true},
      {t:'1 device',ok:true},{t:'No-log policy',ok:true},{t:'WireGuard protocol',ok:false},
      {t:'Kill switch',ok:false},{t:'Priority support',ok:false},{t:'Dedicated IP',ok:false},
    ],
    cta:'Get Started Free', popular:false,
  },
  {
    name:'Pro', Icon:Zap, monthly:9.99, yearly:5.99, desc:'Full protection for individuals.',
    gradient:'linear-gradient(135deg,#1d4ed8,#3b82f6)',
    features:[
      {t:'Unlimited data',ok:true},{t:'100+ server locations',ok:true},{t:'AES-256 encryption',ok:true},
      {t:'Up to 5 devices',ok:true},{t:'No-log policy',ok:true},{t:'WireGuard protocol',ok:true},
      {t:'Kill switch',ok:true},{t:'Priority support',ok:true},{t:'Dedicated IP',ok:false},
    ],
    cta:'Start Free Trial', popular:true,
  },
  {
    name:'Business', Icon:Crown, monthly:19.99, yearly:12.99, desc:'For teams and power users.',
    gradient:'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
    features:[
      {t:'Unlimited data',ok:true},{t:'100+ server locations',ok:true},{t:'AES-256 encryption',ok:true},
      {t:'Up to 10 devices',ok:true},{t:'No-log policy',ok:true},{t:'WireGuard protocol',ok:true},
      {t:'Kill switch',ok:true},{t:'24/7 priority support',ok:true},{t:'Dedicated IP included',ok:true},
    ],
    cta:'Contact Sales', popular:false,
  },
]

const FAQ = [
  { q:'Can I cancel anytime?',           a:'Yes, cancel at any time with no fees. Your plan stays active until end of billing period.' },
  { q:'Is there a free trial?',           a:'Yes — the Pro plan includes a 30-day free trial. No credit card required to start.' },
  { q:'How many devices can I connect?',  a:'Pro supports 5 simultaneous connections; Business supports up to 10.' },
  { q:'Do you offer refunds?',            a:'We offer a 30-day money-back guarantee on all paid plans, no questions asked.' },
]

const W = { maxWidth:1180, margin:'0 auto', padding:'0 28px' }

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const [open, setOpen]     = useState(null)

  return (
    <div style={{ overflowX:'hidden' }}>

      {/* hero */}
      <section className="bg-mesh" style={{ paddingTop:120, paddingBottom:80, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize:'38px 38px' }} />
        <div style={{ ...W, textAlign:'center', color:'#fff', position:'relative' }}>
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            className="glass-dark" style={{ display:'inline-flex', padding:'7px 18px', borderRadius:999, fontSize:13, fontWeight:500, marginBottom:22 }}>
            Pricing
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.1 }}
            style={{ fontSize:'clamp(32px,5vw,58px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-1.2px', marginBottom:14 }}>
            Simple, transparent pricing
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}
            style={{ fontSize:17, color:'rgba(255,255,255,0.65)', maxWidth:440, margin:'0 auto 32px' }}>
            No hidden fees. No surprises. Cancel anytime.
          </motion.p>
          {/* toggle */}
          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
            className="glass-dark" style={{ display:'inline-flex', padding:5, borderRadius:14, gap:4 }}>
            <button onClick={()=>setYearly(false)} style={{ padding:'9px 22px', borderRadius:10, fontSize:14, fontWeight:600, cursor:'pointer', border:'none', transition:'all 0.18s', background: !yearly ? '#fff' : 'transparent', color: !yearly ? '#1d4ed8' : 'rgba(255,255,255,0.75)' }}>
              Monthly
            </button>
            <button onClick={()=>setYearly(true)} style={{ padding:'9px 22px', borderRadius:10, fontSize:14, fontWeight:600, cursor:'pointer', border:'none', transition:'all 0.18s', display:'flex', alignItems:'center', gap:8, background: yearly ? '#fff' : 'transparent', color: yearly ? '#1d4ed8' : 'rgba(255,255,255,0.75)' }}>
              Yearly
              <span style={{ background:'#4ade80', color:'#14532d', fontSize:11, fontWeight:700, padding:'2px 7px', borderRadius:999 }}>-40%</span>
            </button>
          </motion.div>
        </div>
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width:'100%', display:'block' }}>
            <path d="M0 60L1440 60L1440 18C1080 60 720 8 360 44L0 18Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* plans */}
      <section style={{ background:'#fff', padding:'72px 0 90px' }}>
        <div style={{ ...W }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, alignItems:'start' }}>
            {PLANS.map((plan, i) => {
              const price = yearly ? plan.yearly : plan.monthly
              const PIcon = plan.Icon
              return (
                <FU key={plan.name} delay={i*0.1}>
                  <div style={{
                    borderRadius:20, overflow:'hidden', border: plan.popular ? '2px solid #3b82f6' : '1px solid rgba(219,234,254,0.9)',
                    boxShadow: plan.popular ? '0 16px 48px rgba(59,130,246,0.18)' : '0 2px 12px rgba(0,0,0,0.05)',
                    transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
                    transition:'box-shadow 0.25s,transform 0.25s',
                    background:'#fff',
                  }}
                    onMouseEnter={e=>{ if(!plan.popular){ e.currentTarget.style.boxShadow='0 12px 36px rgba(59,130,246,0.12)'; e.currentTarget.style.transform='translateY(-4px)' }}}
                    onMouseLeave={e=>{ if(!plan.popular){ e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.05)'; e.currentTarget.style.transform='translateY(0)' }}}>
                    {plan.popular && <div style={{ height:4, background:'linear-gradient(90deg,#1d4ed8,#3b82f6)' }} />}
                    <div style={{ padding:'28px 26px' }}>
                      {plan.popular && (
                        <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:8 }}>
                          <span className="vpn-gradient" style={{ fontSize:11, fontWeight:700, color:'#fff', padding:'4px 10px', borderRadius:999 }}>Most Popular</span>
                        </div>
                      )}
                      <div style={{ width:46, height:46, borderRadius:12, background:plan.gradient, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14, boxShadow:'0 4px 12px rgba(29,78,216,0.25)' }}>
                        <PIcon size={22} color="#fff" />
                      </div>
                      <div style={{ fontSize:20, fontWeight:900, color:'#0f172a', marginBottom:4 }}>{plan.name}</div>
                      <div style={{ fontSize:13, color:'#64748b', marginBottom:18 }}>{plan.desc}</div>
                      <div style={{ marginBottom:20 }}>
                        <span style={{ fontSize:42, fontWeight:900, color:'#0f172a', letterSpacing:'-1px' }}>
                          {price === 0 ? 'Free' : `$${price}`}
                        </span>
                        {price > 0 && <span style={{ fontSize:14, color:'#94a3b8', marginLeft:4 }}>/mo</span>}
                        {yearly && price > 0 && (
                          <div style={{ fontSize:12, color:'#22c55e', fontWeight:600, marginTop:4 }}>Billed ${(price*12).toFixed(2)}/year</div>
                        )}
                      </div>
                      <Link to="/contact" style={{
                        display:'block', textAlign:'center', padding:'12px', borderRadius:12, fontWeight:700, fontSize:14,
                        textDecoration:'none', marginBottom:22, transition:'transform 0.18s,box-shadow 0.18s',
                        background: plan.popular ? 'linear-gradient(135deg,#1d4ed8,#3b82f6)' : 'rgba(59,130,246,0.07)',
                        color: plan.popular ? '#fff' : '#2563eb',
                        boxShadow: plan.popular ? '0 4px 16px rgba(29,78,216,0.35)' : 'none',
                      }}
                        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.02)'}
                        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                        {plan.cta}
                      </Link>
                      <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
                        {plan.features.map(f => (
                          <li key={f.t} style={{ display:'flex', alignItems:'center', gap:9, fontSize:13 }}>
                            {f.ok
                              ? <CheckCircle size={15} color="#3b82f6" style={{ flexShrink:0 }} />
                              : <X size={15} color="#cbd5e1" style={{ flexShrink:0 }} />}
                            <span style={{ color: f.ok ? '#334155' : '#94a3b8' }}>{f.t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FU>
              )
            })}
          </div>
        </div>
      </section>

      {/* guarantee */}
      <section style={{ background:'linear-gradient(135deg,#f0f7ff,#dbeafe 60%,#bfdbfe)', padding:'72px 0' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ background:'#fff', borderRadius:20, padding:'44px 36px', textAlign:'center', border:'1px solid rgba(219,234,254,0.9)', boxShadow:'0 4px 20px rgba(59,130,246,0.08)' }}>
              <div className="vpn-gradient" style={{ width:60, height:60, borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', boxShadow:'0 6px 18px rgba(29,78,216,0.3)' }}>
                <Shield size={28} color="#fff" />
              </div>
              <h3 style={{ fontSize:22, fontWeight:900, color:'#0f172a', marginBottom:10 }}>30-Day Money-Back Guarantee</h3>
              <p style={{ fontSize:15, color:'#64748b', lineHeight:1.7, maxWidth:440, margin:'0 auto' }}>
                Not satisfied? Get a full refund within 30 days — no questions asked. We are confident you will love CloudVPN.
              </p>
            </div>
          </FU>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:'#fff', padding:'90px 0' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 28px' }}>
          <FU>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <h2 style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:900, color:'#0f172a', letterSpacing:'-0.6px' }}>Frequently Asked Questions</h2>
              <p style={{ color:'#64748b', fontSize:15, marginTop:10 }}>Everything you need to know about our pricing.</p>
            </div>
          </FU>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {FAQ.map((item, i) => (
              <FU key={i} delay={i*0.05}>
                <div style={{ border:'1px solid rgba(219,234,254,0.9)', borderRadius:14, overflow:'hidden' }}>
                  <button onClick={()=>setOpen(open===i?null:i)}
                    style={{ width:'100%', textAlign:'left', padding:'18px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', background: open===i ? '#f0f7ff' : '#fff', border:'none', cursor:'pointer', fontSize:15, fontWeight:600, color:'#0f172a', transition:'background 0.15s' }}>
                    {item.q}
                    <ArrowRight size={17} color="#3b82f6" style={{ flexShrink:0, transform: open===i ? 'rotate(90deg)' : 'none', transition:'transform 0.2s' }} />
                  </button>
                  {open===i && (
                    <div style={{ padding:'0 20px 18px', fontSize:14, color:'#64748b', lineHeight:1.7 }}>{item.a}</div>
                  )}
                </div>
              </FU>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}