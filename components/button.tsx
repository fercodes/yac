interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variantStyles = {
    primary:
      'bg-primary text-primary-foreground hover:opacity-90 active:scale-95 focus:ring-primary focus:ring-offset-2',
    secondary:
      'bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95 focus:ring-secondary focus:ring-offset-2',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95 focus:ring-primary focus:ring-offset-2',
  }

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={buttonClassName}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  )
}
