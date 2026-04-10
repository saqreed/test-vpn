import { screen } from '@testing-library/react'
import App from './App'
import { renderWithProviders } from './test/renderWithProviders'

function renderAtRoute(pathname) {
  window.history.pushState({}, 'Test page', pathname)
  return renderWithProviders(<App />)
}

test('renders the new blog route', async () => {
  renderAtRoute('/blog')

  expect(
    await screen.findByRole('heading', {
      name: /clear writing for people who care how privacy tools really work/i,
    }),
  ).toBeInTheDocument()
})

test('shows a fallback page for unknown routes', async () => {
  renderAtRoute('/definitely-missing')

  expect(await screen.findByRole('heading', { name: /this route is off the grid/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /return home/i })).toBeInTheDocument()
})
