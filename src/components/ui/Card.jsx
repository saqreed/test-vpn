export function Card({ children, className = '', interactive = false, as: Component = 'div' }) {
  return (
    <Component className={`cv-card ${interactive ? 'cv-hover-lift' : ''} ${className}`}>
      {children}
    </Component>
  )
}
