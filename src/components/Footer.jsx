import { Link } from 'react-router-dom'
import { Shield, Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const LINKS = {
  Product:  [['Features','/features'],['Pricing','/pricing'],['Download','/pricing'],['Changelog','/']],
  Company:  [['About Us','/about'],['Blog','/'],['Careers','/'],['Press','/']],
  Support:  [['Help Center','/contact'],['Contact Us','/contact'],['Status','/'],['Community','/']],
  Legal:    [['Privacy Policy','/'],['Terms of Service','/'],['Cookie Policy','/'],['GDPR','/']],
}

const socials = [
  { Icon: Twitter,  href: 'https://twitter.com',  label: 'Twitter' },
  { Icon: Github,   href: 'https://github.com',   label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer style={{ background:'#0a0f1e', color:'#fff' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'64px 28px 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr 1fr', gap:40, flexWrap:'wrap' }}>

          {/* brand */}
          <div>
            <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none', marginBottom:20 }}>
              <div className="vpn-gradient" style={{ width:36, height:36, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 14px rgba(29,78,216,0.4)', flexShrink:0 }}>
                <Shield size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize:18, fontWeight:800, color:'#fff' }}>Cloud<span style={{ color:'#60a5fa' }}>VPN</span></span>
            </Link>
            <p style={{ fontSize:13, color:'#94a3b8', lineHeight:1.7, maxWidth:260, marginBottom:24 }}>
              Protect your digital life with enterprise-grade encryption. Fast, private, and secure VPN for everyone.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:13, color:'#94a3b8' }}>
                <Phone size={14} color="#3b82f6" style={{ flexShrink:0 }} /> +1 (800) 123-4567
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:13, color:'#94a3b8' }}>
                <Mail size={14} color="#3b82f6" style={{ flexShrink:0 }} /> support@cloudvpn.io
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:13, color:'#94a3b8' }}>
                <MapPin size={14} color="#3b82f6" style={{ flexShrink:0 }} /> 123 Privacy St, San Francisco, CA
              </div>
            </div>
          </div>

          {/* link columns */}
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{ fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:1.5, color:'#e2e8f0', marginBottom:18 }}>{cat}</h4>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:11 }}>
                {links.map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ fontSize:13, color:'#94a3b8', textDecoration:'none', transition:'color 0.15s' }}
                      onMouseEnter={e=>e.currentTarget.style.color='#60a5fa'}
                      onMouseLeave={e=>e.currentTarget.style.color='#94a3b8'}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 28px' }}>
        <div style={{ borderTop:'1px solid rgba(148,163,184,0.15)', marginTop:48, padding:'24px 0', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
          <p style={{ fontSize:13, color:'#64748b' }}>{'\u00a9'} {new Date().getFullYear()} CloudVPN Inc. All rights reserved.</p>
          <div style={{ display:'flex', gap:10 }}>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ width:34, height:34, borderRadius:8, background:'rgba(148,163,184,0.1)', display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.18s, color 0.18s', color:'#94a3b8' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#fff' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='rgba(148,163,184,0.1)'; e.currentTarget.style.color='#94a3b8' }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* responsive grid override */}
      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child > div { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          footer > div:first-child > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}