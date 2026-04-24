import { submitContact, validateContactForm } from './contact'

const validForm = {
  name: 'Iegor Tester',
  email: 'iegor@example.com',
  subject: 'technical',
  message: 'Please help me verify this contact flow.',
}

test('validates required contact form fields before submitting', () => {
  expect(validateContactForm({ ...validForm, email: 'not-an-email' })).toEqual({
    email: 'Enter a valid email address.',
  })
  expect(validateContactForm({ ...validForm, message: 'short' })).toEqual({
    message: 'Message must be at least 10 characters.',
  })
})

test('returns a demo success result when no contact endpoint is configured', async () => {
  await expect(submitContact(validForm, { endpoint: '' })).resolves.toEqual({
    ok: true,
    mode: 'demo',
  })
})

test('submits to the configured endpoint and reports server failures', async () => {
  const fetcher = vi.fn().mockResolvedValue({
    ok: false,
    status: 500,
  })

  await expect(submitContact(validForm, { endpoint: '/api/contact', fetcher })).rejects.toThrow(
    /contact request failed/i,
  )
  expect(fetcher).toHaveBeenCalledWith(
    '/api/contact',
    expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validForm),
    }),
  )
})
