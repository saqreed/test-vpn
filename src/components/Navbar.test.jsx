import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { ThemeProvider } from '../contexts/ThemeContext'
import { renderWithProviders } from '../test/renderWithProviders'

function renderNavbar(path = '/') {
  return renderWithProviders(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </MemoryRouter>,
  )
}

test('mobile menu exposes expanded state and closes with Escape', async () => {
  const user = userEvent.setup()
  renderNavbar('/features')

  const trigger = document.querySelector('button[aria-controls="mobile-navigation"]')
  expect(trigger).toHaveAttribute('aria-label', 'Open navigation menu')
  expect(trigger).toHaveAttribute('aria-expanded', 'false')

  await user.click(trigger)
  expect(document.querySelector('button[aria-controls="mobile-navigation"]')).toHaveAttribute('aria-label', 'Close navigation menu')
  expect(document.querySelector('button[aria-controls="mobile-navigation"]')).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

  await user.keyboard('{Escape}')
  expect(document.querySelector('button[aria-controls="mobile-navigation"]')).toHaveAttribute('aria-label', 'Open navigation menu')
  expect(document.querySelector('button[aria-controls="mobile-navigation"]')).toHaveAttribute('aria-expanded', 'false')
})
