import { expect, test } from '@playwright/test'

test('home renders and primary CTA reaches pricing', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: /your privacy, our priority/i })).toBeVisible()
  await page.getByRole('link', { name: /start free trial/i }).first().click()

  await expect(page).toHaveURL(/\/pricing$/)
  await expect(page.getByRole('heading', { name: /simple, transparent pricing/i })).toBeVisible()
})

test('mobile navigation opens, closes, and routes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation is covered by the mobile browser project.')

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/features')

  await page.getByRole('button', { name: /open navigation menu/i }).click()
  const mobileNav = page.getByRole('navigation', { name: /mobile navigation/i })
  await expect(mobileNav).toBeVisible()

  await mobileNav.getByRole('link', { name: /^contact$/i }).click()
  await expect(page).toHaveURL(/\/contact$/)
  await expect(page.getByRole('heading', { name: /we're here to help/i })).toBeVisible()
})

test('pricing toggle and FAQ are interactive', async ({ page }) => {
  await page.goto('/pricing')

  await expect(page.getByRole('button', { name: /yearly/i })).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: /^monthly$/i }).click()
  await expect(page.getByRole('button', { name: /^monthly$/i })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByText(/billed \$71\.88\/year/i)).toHaveCount(0)

  const question = page.getByRole('button', { name: /can i cancel anytime/i })
  await expect(question).toHaveAttribute('aria-expanded', 'false')
  await question.click()
  await expect(question).toHaveAttribute('aria-expanded', 'true')
})

test('contact form reaches success state in demo mode', async ({ page }) => {
  await page.goto('/contact')

  await page.getByLabel(/full name/i).fill('Iegor Tester')
  await page.getByLabel(/email/i).fill('iegor@example.com')
  await page.getByLabel(/subject/i).selectOption('technical')
  await page.getByLabel(/message/i).fill('Please help me verify this production smoke flow.')
  await page.getByRole('button', { name: /send message/i }).click()

  await expect(page.getByRole('heading', { name: /message sent/i })).toBeVisible()
})

test('status and not found routes render expected states', async ({ page }) => {
  await page.goto('/status')

  await expect(page.getByText(/demo data/i)).toBeVisible()
  await page.getByText(/us east/i).click()
  await expect(page.getByText(/^Connections$/)).toBeVisible()

  await page.goto('/definitely-missing')
  await expect(page.getByRole('heading', { name: /this route is off the grid/i })).toBeVisible()
})
