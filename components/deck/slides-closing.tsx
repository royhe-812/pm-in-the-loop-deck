'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { mondayActions } from '@/lib/deck-content'
import { cn } from '@/lib/utils'
import { Circled, Mono, SlideBody, step } from './primitives'

export function MondaySlide() {
  const [done, setDone] = useState<boolean[]>(() => mondayActions.map(() => false))

  return (
    <SlideBody>
      <h2 className="rise text-[78px] leading-[0.98] font-bold tracking-[-0.03em]">What to do Monday</h2>

      <ul className="mt-auto flex flex-col pt-6">
        {mondayActions.map((action, i) => (
          <li
            key={action.lead}
            className="rise border-border border-t first:border-t-2 first:border-foreground"
            style={step(i + 1)}
          >
            <button
              type="button"
              aria-pressed={done[i]}
              onClick={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
              className="flex w-full items-center gap-8 py-4 text-left"
            >
              <span
                className={cn(
                  'flex size-[52px] shrink-0 items-center justify-center rounded-md border-[3px] transition-colors',
                  done[i] ? 'bg-primary border-primary text-primary-foreground' : 'border-foreground',
                )}
              >
                {done[i] && <Check className="size-8" strokeWidth={3.5} />}
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[42px] leading-[1.05] font-bold tracking-tight">{action.lead}</span>
                <span className="text-muted-foreground text-[26px] leading-tight font-medium">
                  {action.rest}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </SlideBody>
  )
}

export function CloseSlide() {
  return (
    <SlideBody className="justify-center">
      <h2 className="rise text-[190px] leading-[0.9] font-bold tracking-[-0.045em]">
        Stay in the{' '}
        <Circled color="var(--mark)" delay={3}>
          loop.
        </Circled>
      </h2>

      <p className="rise mt-16 flex gap-x-8 text-[44px] leading-tight font-semibold" style={step(3)}>
        <span>Listen.</span>
        <span>Own the taste.</span>
        <span>Bring people with you.</span>
      </p>

      <div className="rise mt-12 flex items-baseline gap-8" style={step(4)}>
        <span className="text-[30px] font-medium">Thank you — questions?</span>
        <Mono className="text-background/60">Roy He · linkedin.com/in/rzyh</Mono>
      </div>
    </SlideBody>
  )
}
