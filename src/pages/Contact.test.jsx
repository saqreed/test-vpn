import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import Contact from './Contact'
import { renderWithProviders } from '../test/renderWithProviders'

test('submits the contact form and shows the success state', async () => {
  const user = userEvent.setup()

  renderWithProviders(<Contact />)

  await user.type(screen.getByLabelText(/full name/i), 'Iegor Tester')
  await user.type(screen.getByLabelText(/email/i), 'iegor@example.com')
  await user.selectOptions(screen.getByLabelText(/subject/i), 'technical')
  await user.type(screen.getByLabelText(/message/i), 'Please help me verify this contact flow.')
  await user.click(screen.getByRole('button', { name: /send message/i }))

  expect(await screen.findByRole('heading', { name: /message sent/i }, { timeout: 2500 })).toBeInTheDocument()
})
