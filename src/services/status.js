export const demoStatusSnapshot = {
  mode: 'demo',
  tick: 0,
  liveStats: {
    totalUsers: 10428357,
    activeConnections: 894732,
    avgLatency: 12,
    uptime: 99.97,
  },
  regions: [
    { id: 'us-east', name: 'US East', flag: '🇺🇸', city: 'New York', load: 45, status: 'optimal', latency: 11, connections: 34210, bandwidth: 3.2 },
    { id: 'us-west', name: 'US West', flag: '🇺🇸', city: 'Los Angeles', load: 72, status: 'good', latency: 18, connections: 51800, bandwidth: 2.8 },
    { id: 'europe', name: 'Europe', flag: '🇪🇺', city: 'Frankfurt', load: 38, status: 'optimal', latency: 9, connections: 28400, bandwidth: 4.1 },
    { id: 'asia', name: 'Asia', flag: '🇯🇵', city: 'Tokyo', load: 61, status: 'good', latency: 22, connections: 43700, bandwidth: 2.4 },
    { id: 'australia', name: 'Australia', flag: '🇦🇺', city: 'Sydney', load: 25, status: 'optimal', latency: 14, connections: 12900, bandwidth: 1.9 },
    { id: 'south-america', name: 'South America', flag: '🇧🇷', city: 'São Paulo', load: 84, status: 'high', latency: 27, connections: 61300, bandwidth: 1.5 },
  ],
}

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

function wave(tick, index, size) {
  return ((tick + 1) * (index + 3)) % size
}

export function advanceStatusSnapshot(snapshot) {
  const tick = (snapshot.tick ?? 0) + 1

  return {
    ...snapshot,
    tick,
    liveStats: {
      totalUsers: snapshot.liveStats.totalUsers + wave(tick, 0, 31) - 15,
      activeConnections: Math.max(0, snapshot.liveStats.activeConnections + wave(tick, 1, 401) - 200),
      avgLatency: clamp(snapshot.liveStats.avgLatency + (wave(tick, 2, 5) - 2) * 0.4, 8, 25),
      uptime: clamp(snapshot.liveStats.uptime + (wave(tick, 3, 3) - 1) * 0.001, 99.9, 100),
    },
    regions: snapshot.regions.map((region, index) => ({
      ...region,
      load: clamp(region.load + wave(tick, index, 5) - 2, 5, 99),
      latency: clamp(region.latency + wave(tick, index, 3) - 1, 5, 50),
      connections: Math.max(100, region.connections + wave(tick, index, 301) - 150),
    })),
  }
}

export async function getStatusSnapshot(options = {}) {
  const endpoint = options.endpoint ?? import.meta.env.VITE_STATUS_API_URL ?? ''
  const fetcher = options.fetcher ?? fetch

  if (!endpoint) {
    return demoStatusSnapshot
  }

  const response = await fetcher(endpoint)
  if (!response.ok) {
    throw new Error(`Status request failed with status ${response.status}.`)
  }

  const snapshot = await response.json()
  return { ...snapshot, mode: 'live', tick: snapshot.tick ?? 0 }
}
