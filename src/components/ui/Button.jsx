import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ActionLink({ action, hero = false }) {
  const className = [
    'cv-action',
    action.primary ? 'cv-action-primary' : 'cv-action-secondary',
    hero ? 'cv-action-hero' : '',
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {action.label}
      {action.showArrow !== false && <ArrowRight size={16} />}
    </>
  )

  if (action.href) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={action.to} className={className}>
      {content}
    </Link>
  )
}
