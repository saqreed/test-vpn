import { appRoutes } from '../routes'
import { siteConfig } from './site'

test('site config exposes the canonical public routes used by the router', () => {
  const routePaths = appRoutes.map((route) => route.path).filter((path) => path !== '*')

  expect(siteConfig.indexablePaths).toEqual(routePaths)
  expect(siteConfig.siteUrl).toBe('https://cloudvpn.io')
})

test('site config marks unverified marketing claims as demo content', () => {
  expect(siteConfig.contentMode).toBe('demo')
  expect(siteConfig.claimsDisclaimer).toMatch(/demo marketing copy/i)
})
