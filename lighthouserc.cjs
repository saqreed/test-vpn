const fs = require('node:fs')

const chromeCandidates = [
  process.env.CHROME_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const chromePath = chromeCandidates.find((candidate) => {
  try {
    return fs.existsSync(candidate)
  } catch {
    return false
  }
})

module.exports = {
  ci: {
    collect: {
      ...(chromePath ? { chromePath } : {}),
      startServerCommand: 'node scripts/lhci-preview.cjs',
      startServerReadyPattern: 'LHCI_READY',
      startServerReadyTimeout: 30000,
      url: ['http://127.0.0.1:4173/', 'http://127.0.0.1:4173/pricing', 'http://127.0.0.1:4173/contact'],
      numberOfRuns: 1,
      puppeteerScript: './lhci.puppeteer.cjs',
      puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.75 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
}
