import { motion } from 'framer-motion'
import ServerStatusDashboard from '../components/ServerStatusDashboard'
import SEO from '../components/SEO'

export default function Status() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 96, paddingBottom: 48 }}>
      <SEO
        title="VPN Server Status — Real-time Network Uptime"
        description="Check CloudVPN's real-time server status across 100+ locations worldwide. Monitor uptime, latency, load and active connections for US, Europe, Asia, and more."
        path="/status"
        keywords="VPN server status, VPN uptime, VPN network status, server latency, VPN connection speed, CloudVPN status page"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServerStatusDashboard />
      </motion.div>
    </div>
  )
}
