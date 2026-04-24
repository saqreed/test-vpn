const envSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')

export const siteConfig = {
  brand: {
    name: 'CloudVPN',
    legalName: 'CloudVPN Inc.',
    tagline: 'Your Privacy, Our Priority',
  },
  siteUrl: envSiteUrl || 'https://cloudvpn.io',
  contentMode: 'demo',
  claimsDisclaimer: 'Demo marketing copy: verify all privacy, legal, company, and usage claims before production launch.',
  contacts: {
    phone: '+1 (800) 123-4567',
    email: 'support@cloudvpn.io',
    address: '123 Privacy Street, San Francisco, CA',
  },
  socialLinks: [
    { label: 'Twitter', href: 'https://twitter.com/cloudvpn' },
    { label: 'GitHub', href: 'https://github.com/cloudvpn' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/cloudvpn' },
  ],
  primaryNav: [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/status', label: 'Server Status' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
  footerGroups: {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Download', path: '/download' },
      { label: 'Changelog', path: '/changelog' },
    ],
    Resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Help Center', path: '/help-center' },
      { label: 'Community', path: '/community' },
      { label: 'Status', path: '/status' },
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
      { label: 'Contact', path: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'GDPR', path: '/gdpr' },
    ],
  },
  indexablePaths: [
    '/',
    '/features',
    '/pricing',
    '/about',
    '/contact',
    '/status',
    '/download',
    '/changelog',
    '/blog',
    '/careers',
    '/press',
    '/help-center',
    '/community',
    '/privacy',
    '/terms',
    '/cookies',
    '/gdpr',
  ],
}

export const getCanonicalUrl = (path = '/') => `${siteConfig.siteUrl}${path}`
