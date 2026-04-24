import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import ThemeToggle from '../components/ThemeToggle'
import { ThemeProvider } from './ThemeContext'
import { renderWithProviders } from '../test/renderWithProviders'

test('toggles the dark theme and persists it', async () => {
  const user = userEvent.setup()

  renderWithProviders(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  )

  await user.click(screen.getByRole('button', { name: /switch to dark theme/i }))

  expect(document.documentElement).toHaveClass('dark')
  expect(localStorage.getItem('theme')).toBe('dark')
})

test('uses the system dark preference when no saved theme exists', () => {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))

  renderWithProviders(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>,
  )

  expect(document.documentElement).toHaveClass('dark')
  expect(screen.getByRole('button', { name: /switch to light theme/i })).toBeInTheDocument()
})
