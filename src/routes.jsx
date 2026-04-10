import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Features = lazy(() => import('./pages/Features'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Status = lazy(() => import('./pages/Status'))
const Download = lazy(() => import('./pages/Download'))
const Changelog = lazy(() => import('./pages/Changelog'))
const Blog = lazy(() => import('./pages/Blog'))
const Careers = lazy(() => import('./pages/Careers'))
const Press = lazy(() => import('./pages/Press'))
const HelpCenter = lazy(() => import('./pages/HelpCenter'))
const Community = lazy(() => import('./pages/Community'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const GDPR = lazy(() => import('./pages/GDPR'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/features', element: <Features /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/status', element: <Status /> },
  { path: '/download', element: <Download /> },
  { path: '/changelog', element: <Changelog /> },
  { path: '/blog', element: <Blog /> },
  { path: '/careers', element: <Careers /> },
  { path: '/press', element: <Press /> },
  { path: '/help-center', element: <HelpCenter /> },
  { path: '/community', element: <Community /> },
  { path: '/privacy', element: <PrivacyPolicy /> },
  { path: '/terms', element: <TermsOfService /> },
  { path: '/cookies', element: <CookiePolicy /> },
  { path: '/gdpr', element: <GDPR /> },
  { path: '*', element: <NotFound /> },
]
