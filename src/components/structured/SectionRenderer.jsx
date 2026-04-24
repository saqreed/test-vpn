import { CardsSection, DocumentSection, SplitSection, TimelineSection } from './PageSections'
import { FaqAccordion, StatGrid } from '../ui'

export default function SectionRenderer({ section }) {
  switch (section.type) {
    case 'cards':
      return <CardsSection section={section} />
    case 'timeline':
      return <TimelineSection section={section} />
    case 'split':
      return <SplitSection section={section} />
    case 'stats':
      return <StatGrid items={section.items} />
    case 'faq':
      return <FaqAccordion items={section.items} idPrefix="structured-faq" />
    case 'document':
      return <DocumentSection section={section} />
    default:
      return null
  }
}
