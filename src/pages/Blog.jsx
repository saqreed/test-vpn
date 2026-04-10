import StructuredPage from '../components/StructuredPage'
import { resourcePages } from '../data/resourcePages'

export default function Blog() {
  return <StructuredPage page={resourcePages.blog} />
}
