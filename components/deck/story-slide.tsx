import type { Story } from '@/lib/deck-content'
import { Mono, SlideBody, step } from './primitives'

export function StorySlide({ story, loopName }: { story: Story; loopName: string }) {
  const isPlaceholder = !story.title && story.fields.every((f) => !f.value)

  return (
    <SlideBody>
      <div className="rise flex items-start justify-between gap-8" style={step(0)}>
        <h2 className="text-[60px] leading-[1.02] font-bold tracking-tight">
          {story.title || 'Pick one story.'}
        </h2>
        {isPlaceholder && (
          <span className="bg-mark text-mark-foreground mt-3 shrink-0 rounded-md px-4 py-2">
            <Mono>Placeholder · {loopName}</Mono>
          </span>
        )}
      </div>

      <ol className="mt-4 flex min-h-0 flex-1 flex-col justify-center gap-2">
        {story.fields.map((field, i) => (
          <li
            key={field.label}
            className="rise grid min-h-[56px] grid-cols-[420px_1fr] items-end gap-8"
            style={step(i + 1)}
          >
            <Mono className="text-muted-foreground pb-2">{field.label}</Mono>
            {field.value ? (
              <p className="border-border border-b-2 pb-2 text-[30px] leading-tight font-medium">
                {field.value}
              </p>
            ) : (
              <div className="border-muted-foreground/50 h-[44px] border-b-2 border-dashed" />
            )}
          </li>
        ))}
      </ol>

      <div className="rise mt-6 flex items-end justify-between gap-10" style={step(5)}>
        <div>
          <Mono className="text-muted-foreground">Say out loud</Mono>
          <p className="mt-1 max-w-[820px] text-[32px] leading-[1.12] font-semibold text-balance">
            {story.takeaway}
          </p>
        </div>
        {isPlaceholder && (
          <p className="text-muted-foreground max-w-[300px] text-right font-mono text-[14px] leading-snug">
            Candidates: {story.candidates.join(' · ')}
          </p>
        )}
      </div>
    </SlideBody>
  )
}
