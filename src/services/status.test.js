import { advanceStatusSnapshot, getStatusSnapshot } from './status'

test('returns deterministic demo status data when no status API is configured', async () => {
  const snapshot = await getStatusSnapshot({ endpoint: '' })

  expect(snapshot.mode).toBe('demo')
  expect(snapshot.regions.map((region) => region.id)).toEqual([
    'us-east',
    'us-west',
    'europe',
    'asia',
    'australia',
    'south-america',
  ])
})

test('advances demo status data without random values', () => {
  const first = advanceStatusSnapshot({
    mode: 'demo',
    tick: 0,
    liveStats: { totalUsers: 100, activeConnections: 50, avgLatency: 12, uptime: 99.97 },
    regions: [{ id: 'us-east', load: 45, latency: 11, connections: 34210 }],
  })
  const second = advanceStatusSnapshot({
    mode: 'demo',
    tick: 0,
    liveStats: { totalUsers: 100, activeConnections: 50, avgLatency: 12, uptime: 99.97 },
    regions: [{ id: 'us-east', load: 45, latency: 11, connections: 34210 }],
  })

  expect(first).toEqual(second)
  expect(first.tick).toBe(1)
})
