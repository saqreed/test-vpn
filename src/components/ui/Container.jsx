export function Container({ children, className = '', narrow = false }) {
  return (
    <div className={`mx-auto w-full ${narrow ? 'max-w-[820px]' : 'max-w-[1180px]'} px-7 ${className}`}>
      {children}
    </div>
  )
}
