import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://cloudvpn.io'
const SITE_NAME = 'CloudVPN'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = '',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Your Privacy, Our Priority`
  const url = `${SITE_URL}${path}`
  const robots = noIndex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="CloudVPN Inc." />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${SITE_NAME} preview`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cloudvpn" />
      <meta name="twitter:creator" content="@cloudvpn" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} preview`} />

      {/* Extra */}
      <meta name="theme-color" content="#1d4ed8" />
      <meta name="application-name" content={SITE_NAME} />
    </Helmet>
  )
}
