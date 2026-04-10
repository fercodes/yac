interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

export default function Card({
  children,
  className = '',
  hoverable = true,
}: CardProps) {
  const hoverClass = hoverable
    ? 'hover:shadow-xl hover:-translate-y-2 transition-all duration-300'
    : ''

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  )
}
