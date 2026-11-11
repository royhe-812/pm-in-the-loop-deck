import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Stagger index for the entrance animation. */
export const step = (n: number) => ({ '--i': n }) as CSSProperties

export function SlideBody({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex flex-col px-[72px] pt-[104px] pb-[84px]', className)}>
      {children}
    </div>
  )
}

export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('font-mono text-[14px] font-medium tracking-[0.14em] uppercase', className)}>
      {children}
    </span>
  )
}

/** A hand-drawn loop that draws itself around whatever it wraps. */
export function Circled({
  children,
  className,
  color = 'var(--primary)',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  color?: string
  delay?: number
}) {
  return (
    <span className={cn('relative inline-block', className)}>
      {children}
      <svg
        viewBox="0 0 520 220"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -top-[26px] -left-[44px] h-[calc(100%+52px)] w-[calc(100%+88px)] overflow-visible"
      >
        <path
          d="M 78 46 C 170 6, 440 6, 492 78 C 536 146, 380 210, 250 208 C 104 206, 6 158, 22 98 C 36 46, 170 12, 322 20"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          className="draw"
          style={step(delay)}
        />
      </svg>
    </span>
  )
}

/** Yellow highlighter swipe behind a word: the human judgment call. */
export function Marked({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className="grow bg-mark absolute inset-x-[-6px] top-[12%] bottom-[2%] -z-0 -skew-x-3"
        style={step(4)}
      />
      <span className="relative text-mark-foreground">{children}</span>
    </span>
  )
}
