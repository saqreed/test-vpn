import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV = [
  { path: '/',          label: 'Home' },
  { path: '/features',  label: 'Features' },
  { path: '/pricing',   label: 'Pricing' },
  { path: '/status',    label: 'Server Status' },
  { path: '/about',     label: 'About' },
  { path: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open,     setOpen]       = useState(false)
  const { pathname }              = useLocation()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  const onHero = pathname === '/' && !scrolled

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px rgba(59,130,246,0.10)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div className="vpn-gradient" style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(29,78,216,0.35)', flexShrink: 0 }}>
            <Shield size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: 19, fontWeight: 800, color: onHero ? '#fff' : 'var(--text)', letterSpacing: '-0.4px' }}>
            Cloud<span style={{ color: onHero ? 'rgba(255,255,255,0.7)' : '#3b82f6' }}>VPN</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
          {NAV.map(({ path, label }) => {
            const active = pathname === path
            return (
              <Link
                key={path}
                to={path}
                style={{
                  padding: '7px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.18s',
                  color: active
                    ? (onHero ? '#fff' : '#2563eb')
                    : (onHero ? 'rgba(255,255,255,0.75)' : 'var(--text-2)'),
                  background: active
                    ? (onHero ? 'rgba(255,255,255,0.15)' : 'rgba(59,130,246,0.08)')
                    : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!active) e.currentTarget.style.background = onHero ? 'rgba(255,255,255,0.12)' : 'rgba(59,130,246,0.07)'
                  if (!active) e.currentTarget.style.color = onHero ? '#fff' : '#2563eb'
                }}
                onMouseLeave={e => {
                  if (!active) e.currentTarget.style.background = 'transparent'
                  if (!active) e.currentTarget.style.color = onHero ? 'rgba(255,255,255,0.75)' : '#475569'
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="hidden-mobile">
          <ThemeToggle />
          <Link to="/contact" style={{ fontSize: 14, fontWeight: 500, color: onHero ? 'rgba(255,255,255,0.8)' : 'var(--text-2)', padding: '7px 14px', textDecoration: 'none', borderRadius: 8 }}>
            Log In
          </Link>
          <Link
            to="/pricing"
            className="vpn-gradient"
            style={{ fontSize: 14, fontWeight: 700, color: '#fff', padding: '9px 22px', borderRadius: 10, boxShadow: '0 4px 14px rgba(29,78,216,0.4)', textDecoration: 'none', transition: 'transform 0.18s, box-shadow 0.18s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(29,78,216,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 4px 14px rgba(29,78,216,0.4)' }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{ display: 'none', padding: 8, borderRadius: 8, color: onHero ? '#fff' : 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
          className="show-mobile"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '12px 24px 20px' }}>
          {NAV.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'block', padding: '12px 14px', borderRadius: 8,
                fontSize: 15, fontWeight: 500, textDecoration: 'none',
                color: pathname === path ? '#2563eb' : 'var(--text-2)',
                background: pathname === path ? 'rgba(59,130,246,0.07)' : 'transparent',
                marginBottom: 2,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/pricing"
            className="vpn-gradient"
            style={{ display: 'block', textAlign: 'center', marginTop: 12, padding: '13px', borderRadius: 10, color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
          >
            Get Started Free
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  )
}
