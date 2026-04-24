import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import ServerStatusDashboard from './ServerStatusDashboard'
import { renderWithProviders } from '../test/renderWithProviders'

test('expands a region card when selected', async () => {
  const user = userEvent.setup()

  renderWithProviders(<ServerStatusDashboard />)

  expect(screen.getByText(/demo data/i)).toBeInTheDocument()

  await user.click(screen.getByText(/us east/i))

  expect(screen.getByText(/^Connections$/)).toBeInTheDocument()
  expect(screen.getByText(/just now/i)).toBeInTheDocument()
})
