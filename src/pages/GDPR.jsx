import StructuredPage from '../components/StructuredPage'
import { legalPages } from '../data/legalPages'

export default function GDPR() {
  return <StructuredPage page={legalPages.gdpr} />
}
