import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'

export function renderWithProviders(ui) {
  return render(<HelmetProvider>{ui}</HelmetProvider>)
}
