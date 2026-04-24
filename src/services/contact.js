const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(form) {
  const errors = {}
  const name = form.name?.trim() ?? ''
  const email = form.email?.trim() ?? ''
  const subject = form.subject?.trim() ?? ''
  const message = form.message?.trim() ?? ''

  if (!name) {
    errors.name = 'Full name is required.'
  }
  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!subject) {
    errors.subject = 'Select a subject.'
  }
  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

export async function submitContact(form, options = {}) {
  const errors = validateContactForm(form)
  if (Object.keys(errors).length > 0) {
    const error = new Error('Contact form validation failed.')
    error.errors = errors
    throw error
  }

  const endpoint = options.endpoint ?? import.meta.env.VITE_CONTACT_ENDPOINT ?? ''
  const fetcher = options.fetcher ?? fetch

  if (!endpoint) {
    return { ok: true, mode: 'demo' }
  }

  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}.`)
  }

  return { ok: true, mode: 'live' }
}
