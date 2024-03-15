type ButtonProps = {
  ownStyles?: boolean
  variant?: Variant
  color?: Color
  className?: string
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variants = ['Primary', 'Secondary', 'Tertiary'] as const
type Variant = (typeof variants)[number]
const colors = ['Default', 'Red'] as const
type Color = (typeof colors)[number]

export function Button({
  variant = 'Primary',
  color = 'Default',
  className,
  children,
  ownStyles = false,
  ...props
}: ButtonProps) {
  let variant_style =
    variant === 'Secondary'
      ? `border ${color === 'Red' ? 'border-primary-lm text-primary-lm' : ''}`
      : variant === 'Tertiary'
      ? `${color === 'Red' ? 'text-primary-lm' : ''}`
      : `${
          color === 'Red'
            ? 'bg-primary-lm text-white hover:bg-[#B02E0C]'
            : 'bg-none hover:text-primary-lm hover:bg-primary-dm/20'
        }`

  return (
    <button
      className={`px-3 py-1 text-base font-medium rounded transition-all ease-in-out ${ ownStyles || variant_style} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
