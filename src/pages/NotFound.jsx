import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 120, paddingBottom: 80 }}>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
        path="/404"
        noIndex
      />
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 28px', textAlign: 'center' }}>
        <div
          className="vpn-gradient"
          style={{
            width: 76,
            height: 76,
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 28px',
            boxShadow: '0 12px 30px rgba(29,78,216,0.28)',
          }}
        >
          <Shield size={34} color="#fff" />
        </div>
        <div
          style={{
            display: 'inline-flex',
            padding: '7px 14px',
            borderRadius: 999,
            background: 'rgba(59,130,246,0.08)',
            color: '#2563eb',
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 18,
          }}
        >
          Error 404
        </div>
        <h1 style={{ fontSize: 'clamp(34px,5vw,56px)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-1px' }}>
          This route is off the grid
        </h1>
        <p
          style={{
            maxWidth: 520,
            margin: '18px auto 30px',
            fontSize: 16,
            color: 'var(--text-3)',
            lineHeight: 1.8,
          }}
        >
          The page may have moved, the link may be stale, or the route never existed in the first place. The core product pages are still available.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 26px',
              borderRadius: 12,
              background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
              color: '#fff',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(29,78,216,0.25)',
            }}
          >
            Return Home
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/help-center"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '13px 26px',
              borderRadius: 12,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Open Help Center
          </Link>
        </div>
      </div>
    </div>
  )
}
