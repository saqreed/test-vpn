const http = require('node:http')
const path = require('node:path')
const { spawn } = require('node:child_process')

const rootDir = path.resolve(__dirname, '..')
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js')
const previewUrl = 'http://127.0.0.1:4173/'

const child = spawn(
  process.execPath,
  [viteBin, 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'],
  {
    cwd: rootDir,
    env: process.env,
    stdio: ['ignore', 'inherit', 'inherit'],
  },
)

let ready = false

const stop = (signal) => {
  if (child.exitCode === null && !child.killed) {
    child.kill(signal)
  }
}

process.on('SIGINT', () => stop('SIGINT'))
process.on('SIGTERM', () => stop('SIGTERM'))

child.on('exit', (code, signal) => {
  if (!ready) {
    process.exit(code ?? (signal ? 1 : 0))
  }
})

const probe = () => {
  const request = http.get(previewUrl, (response) => {
    response.resume()
    ready = true
    clearInterval(interval)
    clearTimeout(timeout)
    console.log('LHCI_READY')
  })

  request.on('error', () => {})
  request.setTimeout(1000, () => request.destroy())
}

const interval = setInterval(probe, 250)
const timeout = setTimeout(() => {
  clearInterval(interval)
  stop('SIGTERM')
  console.error(`Timed out waiting for ${previewUrl}`)
  process.exit(1)
}, 30000)

probe()
