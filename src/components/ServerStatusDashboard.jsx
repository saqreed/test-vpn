import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Server, Activity, Users, Zap, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { advanceStatusSnapshot, demoStatusSnapshot, getStatusSnapshot } from '../services/status'

const STATUS_COLOR = { optimal: '#22c55e', good: '#eab308', high: '#f97316', critical: '#ef4444' }
const LOAD_COLOR   = (l) => l < 40 ? '#22c55e' : l < 70 ? '#eab308' : l < 85 ? '#f97316' : '#ef4444'

const STAT_CARD = { background: 'var(--bg-card)', borderRadius: 14, padding: '18px 20px', border: '1px solid var(--border)' }

export default function ServerStatusDashboard() {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [snapshot, setSnapshot] = useState(demoStatusSnapshot)
  const { liveStats, regions } = snapshot

  useEffect(() => {
    let active = true

    getStatusSnapshot()
      .then((nextSnapshot) => {
        if (active) {
          setSnapshot(nextSnapshot)
        }
      })
      .catch(() => {
        if (active) {
          setSnapshot(demoStatusSnapshot)
        }
      })

    const interval = setInterval(() => {
      setSnapshot((current) => (
        current.mode === 'demo'
          ? advanceStatusSnapshot(current)
          : current
      ))
    }, 3000)

    return () => {
      active = false
      clearInterval(interval)
    }
  }, [])

  const LIVE = { fontSize: 11, fontWeight: 700, color: '#22c55e', background: 'rgba(34,197,94,0.12)', padding: '2px 7px', borderRadius: 999 }

  return (
    <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '0 24px 48px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: '#2563eb' }}>Network</span>
        <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 900, color: 'var(--text)', marginTop: 8, letterSpacing: '-0.6px' }}>
          Real-time Server Status
        </h2>
        <p style={{ color: 'var(--text-3)', fontSize: 15, marginTop: 8 }}>
          Monitor our global VPN server network performance
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700, color: snapshot.mode === 'demo' ? '#92400e' : '#166534', background: snapshot.mode === 'demo' ? 'rgba(245,158,11,0.15)' : 'rgba(34,197,94,0.14)' }}>
          {snapshot.mode === 'demo' ? 'Demo data' : 'Live data'}
        </div>
      </div>

      {/* Live Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Total Users',        value: `${(liveStats.totalUsers / 1000000).toFixed(1)}M`, icon: <Users size={20} color="#3b82f6" /> },
          { label: 'Active Connections', value: `${(liveStats.activeConnections / 1000).toFixed(0)}K`, icon: <Activity size={20} color="#22c55e" /> },
          { label: 'Avg Latency',        value: `${liveStats.avgLatency.toFixed(0)}ms`, icon: <Zap size={20} color="#eab308" /> },
          { label: 'Uptime',             value: `${liveStats.uptime.toFixed(2)}%`, icon: <Server size={20} color="#a855f7" /> },
        ].map(({ label, value, icon }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} style={STAT_CARD}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              {icon}
              <span style={LIVE}>LIVE</span>
            </div>
            <div style={{ fontSize: 26, fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.5px' }}>{value}</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 3 }}>{label}</div>
          </motion.div>
        ))}
      </div>

      {/* Server Regions */}
      <div style={{ background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Server Regions</h3>
          <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Click any region to see detailed performance metrics</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14, padding: 18 }}>
          {regions.map((region, index) => {
            const selected = selectedRegion === region.id
            const statusColor = STATUS_COLOR[region.status] || '#94a3b8'
            return (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedRegion(selected ? null : region.id)}
                style={{
                  padding: 16, borderRadius: 12, cursor: 'pointer',
                  border: `1px solid ${selected ? '#3b82f6' : 'var(--border)'}`,
                  background: selected ? 'rgba(59,130,246,0.08)' : 'var(--bg)',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                {/* Region header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 26 }}>{region.flag}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{region.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{region.city}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: statusColor }}>
                    {region.status === 'high' || region.status === 'critical'
                      ? <AlertCircle size={15} />
                      : <CheckCircle size={15} />}
                    <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'capitalize' }}>{region.status}</span>
                  </div>
                </div>

                {/* Load bar */}
                <div style={{ marginBottom: 4, display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ color: 'var(--text-3)' }}>Server Load</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{region.load}%</span>
                </div>
                <div style={{ width: '100%', height: 6, borderRadius: 999, background: 'var(--bg-2)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', borderRadius: 999, background: LOAD_COLOR(region.load) }}
                    initial={{ width: 0 }}
                    animate={{ width: `${region.load}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Expanded details */}
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                      {[
                        { label: 'Latency',     value: `${region.latency}ms` },
                        { label: 'Connections', value: region.connections.toLocaleString() },
                        { label: 'Bandwidth',   value: `${region.bandwidth.toFixed(1)} Gbps` },
                        { label: 'Updated',     value: 'just now' },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 2 }}>{label}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 4 }}>
                            {label === 'Updated' && <Clock size={11} color="var(--text-3)" />}
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
        {[['Optimal', '#22c55e'], ['Good', '#eab308'], ['High Load', '#f97316'], ['Critical', '#ef4444']].map(([label, color]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-3)' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
