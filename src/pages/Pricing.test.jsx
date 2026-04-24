import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Pricing from './Pricing'
import { renderWithProviders } from '../test/renderWithProviders'

function renderPricing() {
  return renderWithProviders(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>,
  )
}

test('billing toggle communicates the selected period to assistive technology', async () => {
  const user = userEvent.setup()
  renderPricing()

  expect(screen.getByRole('button', { name: /yearly/i })).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByText(/billed \$71\.88\/year/i)).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /^monthly$/i }))

  expect(screen.getByRole('button', { name: /^monthly$/i })).toHaveAttribute('aria-pressed', 'true')
  expect(screen.queryByText(/billed \$71\.88\/year/i)).not.toBeInTheDocument()
})

test('pricing faq uses aria-expanded for accordion state', async () => {
  const user = userEvent.setup()
  renderPricing()

  const question = screen.getByRole('button', { name: /can i cancel anytime/i })
  expect(question).toHaveAttribute('aria-expanded', 'false')

  await user.click(question)

  expect(question).toHaveAttribute('aria-expanded', 'true')
})
