'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize, StickyNote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { slides } from './slides'

const W = 1280
const H = 720
const LOOP_LABELS = ['Listen', 'Taste', 'Align'] as const

function LoopTracker({ active, dark }: { active: 1 | 2 | 3; dark?: boolean }) {
  return (
    <ol className="flex items-center gap-6" aria-label="Loop progress">
      {LOOP_LABELS.map((label, i) => {
        const on = active === i + 1
        return (
          <li
            key={label}
            aria-current={on ? 'step' : undefined}
            className={cn(
              'flex items-center gap-2 font-mono text-[14px] font-medium tracking-[0.14em] uppercase',
              on ? 'text-foreground' : dark ? 'text-background/50' : 'text-muted-foreground/70',
            )}
          >
            <span
              className={cn(
                'size-[14px] rounded-full border-2',
                on ? 'bg-primary border-primary' : 'border-current',
              )}
            />
            {label}
          </li>
        )
      })}
    </ol>
  )
}

export function Deck() {
  const [index, setIndex] = useState(0)
  const [ready, setReady] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [scale, setScale] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)

  const last = slides.length - 1
  const go = useCallback((n: number) => setIndex(Math.min(last, Math.max(0, n))), [last])

  useEffect(() => {
    const n = parseInt(window.location.hash.replace('#', ''), 10)
    if (!Number.isNaN(n)) setIndex(Math.min(last, Math.max(0, n - 1)))
    setReady(true)
  }, [last])

  useEffect(() => {
    if (ready) window.history.replaceState(null, '', `#${index + 1}`)
  }, [index, ready])

  useLayoutEffect(() => {
    const el = stageRef.current
    if (!el) return
    const measure = () => setScale(Math.min(el.clientWidth / W, el.clientHeight / H))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === ' ' && target.closest('button')) return
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          go(index + 1)
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          go(index - 1)
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(last)
          break
        case 'n':
        case 'N':
          setShowNotes((v) => !v)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index, last])

  const slide = slides[index]
  const { Component } = slide
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="bg-foreground text-background flex h-dvh w-full flex-col">
      <div ref={stageRef} className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className={cn(
            'absolute top-1/2 left-1/2 overflow-hidden',
            slide.dark ? 'bg-foreground text-background' : 'bg-background text-foreground',
          )}
          style={{
            width: W,
            height: H,
            transform: `translate(-50%, -50%) scale(${scale})`,
            visibility: scale ? 'visible' : 'hidden',
          }}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${slides.length}`}
        >
          {!slide.hideChrome && (
            <>
              <div className="absolute inset-x-0 top-0 flex h-[84px] items-center justify-between px-[72px]">
                <span
                  className={cn(
                    'font-mono text-[14px] font-medium tracking-[0.14em] uppercase',
                    slide.dark ? 'text-background/60' : 'text-muted-foreground',
                  )}
                >
                  {slide.eyebrow}
                </span>
                {slide.loop && <LoopTracker active={slide.loop} dark={slide.dark} />}
              </div>
              <div
                className={cn(
                  'absolute inset-x-0 bottom-0 flex h-[64px] items-center justify-between px-[72px] font-mono text-[14px] font-medium tracking-[0.14em] uppercase',
                  slide.dark ? 'text-background/60' : 'text-muted-foreground',
                )}
              >
                <span>PM-in-the-Loop</span>
                <span>
                  {pad(index + 1)} / {pad(slides.length)}
                </span>
              </div>
            </>
          )}
          <Component key={slide.id} />
        </div>
      </div>

      {showNotes && (
        <section
          aria-label="Speaker notes"
          className="bg-background text-foreground max-h-[28dvh] shrink-0 overflow-y-auto px-6 py-4"
        >
          <p className="text-muted-foreground font-mono text-[14px] font-medium tracking-[0.14em] uppercase">
            Speaker note · slide {index + 1}
          </p>
          <p className="mt-1 max-w-[900px] text-[18px] leading-relaxed">{slide.note}</p>
        </section>
      )}

      <nav
        aria-label="Slide controls"
        className="bg-foreground text-background flex h-14 shrink-0 items-center gap-3 px-4"
      >
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
          className="hover:bg-background/15 flex size-10 items-center justify-center rounded-md disabled:opacity-30"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === last}
          aria-label="Next slide"
          className="hover:bg-background/15 flex size-10 items-center justify-center rounded-md disabled:opacity-30"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="mx-2 hidden flex-1 items-center gap-1 sm:flex" role="presentation">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className="group flex h-10 flex-1 items-center"
            >
              <span
                className={cn(
                  'h-1 w-full rounded-full transition-colors',
                  i === index ? 'bg-mark' : i < index ? 'bg-background/60' : 'bg-background/20 group-hover:bg-background/40',
                )}
              />
            </button>
          ))}
        </div>

        <span className="ml-auto font-mono text-[14px] tabular-nums sm:ml-0">
          {pad(index + 1)} / {pad(slides.length)}
        </span>
        <button
          type="button"
          onClick={() => setShowNotes((v) => !v)}
          aria-pressed={showNotes}
          aria-label="Toggle speaker notes (N)"
          title="Speaker notes (N)"
          className={cn(
            'hover:bg-background/15 flex size-10 items-center justify-center rounded-md',
            showNotes && 'bg-background/20',
          )}
        >
          <StickyNote className="size-5" />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen (F)"
          title="Fullscreen (F)"
          className="hover:bg-background/15 flex size-10 items-center justify-center rounded-md"
        >
          <Maximize className="size-5" />
        </button>
      </nav>
    </div>
  )
}

function toggleFullscreen() {
  if (document.fullscreenElement) void document.exitFullscreen()
  else void document.documentElement.requestFullscreen?.()
}
