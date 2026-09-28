import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "../utils/cn"

type Variant = "primary" | "secondary"

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-accent hover:text-on-accent",
  secondary: "border border-line bg-surface text-ink hover:border-ink",
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
  href?: string
  to?: string
  external?: boolean
  download?: boolean
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  to,
  external,
  download,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200",
    variants[variant],
    disabled && "pointer-events-none opacity-50",
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
