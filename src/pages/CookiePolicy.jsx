import StructuredPage from '../components/StructuredPage'
import { legalPages } from '../data/legalPages'

export default function CookiePolicy() {
  return <StructuredPage page={legalPages.cookies} />
}
