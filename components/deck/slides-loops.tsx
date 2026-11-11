import { fast } from '@/lib/deck-content'
import { Mono, SlideBody, step } from './primitives'

const loops = [
  { n: '01', name: 'Customer Loop', verb: 'Listen', orbit: 0 },
  { n: '02', name: 'Product Loop', verb: 'Taste', orbit: 5 },
  { n: '03', name: 'People Loop', verb: 'Align', orbit: 10 },
]

export function LoopsSlide() {
  return (
    <SlideBody>
      <h2
        className="rise max-w-[900px] text-[50px] leading-[1.05] font-bold tracking-tight text-balance"
      >
        Stay in the loop in 3 places AI can&apos;t own alone.
      </h2>

      <div className="mt-auto flex justify-center pb-2">
        {loops.map((loop, i) => (
          <div
            key={loop.name}
            className="rise relative flex h-[330px] w-[330px] items-center justify-center"
            style={{ ...step(i + 1), marginLeft: i === 0 ? 0 : -48 }}
          >
            <div className="border-foreground absolute inset-0 rounded-full border-[3px]" />
            <div className="orbit absolute inset-0" style={{ '--o': loop.orbit } as React.CSSProperties}>
              <span className="bg-primary absolute -top-[15px] left-1/2 size-[27px] -translate-x-1/2 rounded-full" />
            </div>
            <div className="relative flex flex-col items-center text-center">
              <Mono className="text-muted-foreground">{loop.n}</Mono>
              <span className="mt-1 text-[28px] font-semibold">{loop.name}</span>
              <span className="text-primary text-[68px] leading-none font-bold tracking-tight">
                {loop.verb}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="rise text-muted-foreground mt-6 flex items-center justify-center gap-3 text-[22px]" style={step(5)}>
        <span className="bg-primary inline-block size-[16px] rounded-full" aria-hidden="true" />
        That&apos;s you. AI works inside each loop. The PM stays in it.
      </p>
    </SlideBody>
  )
}

export function CustomerSlide() {
  return (
    <SlideBody>
      <div className="grid flex-1 grid-cols-[1fr_470px] items-stretch gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="rise text-[78px] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
            AI doesn&apos;t replace customer research.
          </h2>
          <p className="rise mt-10 max-w-[600px] text-[32px] leading-[1.2] font-medium" style={step(2)}>
            Customers don&apos;t care how you solve it.
            <br />
            <span className="text-primary">They care that their problem is solved.</span>
          </p>
        </div>
        <figure
          className="rise bg-mark text-mark-foreground flex flex-col justify-between rounded-xl p-10"
          style={step(3)}
        >
          <span aria-hidden="true" className="text-[150px] leading-[0.6] font-bold">
            “
          </span>
          <blockquote className="text-[38px] leading-[1.12] font-semibold tracking-tight text-balance">
            When the anecdotes and the data disagree, the anecdotes are usually right.
          </blockquote>
          <figcaption className="mt-8">
            <Mono>Jeff Bezos</Mono>
          </figcaption>
        </figure>
      </div>
    </SlideBody>
  )
}

export function FastSlide() {
  return (
    <SlideBody>
      <h2 className="rise text-[56px] leading-[1.02] font-bold tracking-tight">
        Before you build it, ask: is it <span className="text-primary">FAST?</span>
      </h2>

      <div className="mt-auto grid grid-cols-4 gap-6">
        {fast.map((item, i) => (
          <div
            key={item.letter}
            className="rise border-foreground flex flex-col border-t-[3px] pt-3"
            style={step(i + 1)}
          >
            <span className="text-primary text-[230px] leading-[0.82] font-bold tracking-[-0.05em]">
              {item.letter}
            </span>
            <span className="mt-6 text-[30px] leading-none font-semibold">{item.name}</span>
            <span className="text-muted-foreground mt-2 text-[24px] leading-tight">{item.question}</span>
          </div>
        ))}
      </div>

      <div className="rise mt-12 flex items-center gap-4" style={step(6)}>
        <span className="border-foreground rounded-full border-[2px] px-6 py-2 text-[26px] font-semibold">
          Fail 1 <span className="text-muted-foreground font-medium">→ pause.</span>
        </span>
        <span className="bg-foreground text-background rounded-full px-6 py-2 text-[26px] font-semibold">
          Fail 2 <span className="text-background/70 font-medium">→ don&apos;t build it.</span>
        </span>
      </div>
    </SlideBody>
  )
}

export function ProductSlide() {
  const models = ['GPT', 'Claude', 'Gemini']
  return (
    <SlideBody>
      <h2 className="rise max-w-[1000px] text-[80px] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
        Product sense matters more than ever.
      </h2>
      <p className="rise mt-6 max-w-[780px] text-[32px] leading-[1.2] font-medium" style={step(1)}>
        Models will be commoditized.{' '}
        <span className="text-primary">Meaningful design is the next differentiator.</span>
      </p>

      <div className="rise mt-auto flex items-center" style={step(3)} aria-hidden="true">
        <div className="flex flex-col gap-4">
          {models.map((m) => (
            <span
              key={m}
              className="border-foreground w-[150px] rounded-full border-[2px] py-2 text-center font-mono text-[22px] font-medium"
            >
              {m}
            </span>
          ))}
        </div>

        <svg viewBox="0 0 280 170" className="h-[170px] w-[280px]" fill="none">
          {[18, 85, 152].map((y, i) => (
            <path
              key={y}
              d={`M 0 ${y} C 140 ${y}, 140 85, 270 85`}
              stroke="var(--foreground)"
              strokeWidth="2.5"
              pathLength={1}
              className="draw"
              style={step(5 + i)}
            />
          ))}
        </svg>

        <div className="flex flex-col items-center">
          <span className="text-muted-foreground font-mono text-[14px] tracking-[0.14em] uppercase">
            Commodity
          </span>
          <span className="bg-foreground mt-2 size-[22px] rounded-full" />
        </div>

        <div className="bg-foreground h-[2.5px] w-[150px]" />

        <div className="bg-primary text-primary-foreground rounded-xl px-10 py-8">
          <span className="text-[44px] leading-[1.02] font-bold tracking-tight">
            A product
            <br />
            people love.
          </span>
        </div>
      </div>
    </SlideBody>
  )
}

export function CostSlide() {
  return (
    <SlideBody>
      <div className="grid flex-1 grid-cols-[1fr_540px] gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="rise text-[78px] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
            AI has a cost. Price it like a feature.
          </h2>
          <p className="rise text-muted-foreground mt-8 max-w-[560px] text-[28px] leading-[1.25]" style={step(2)}>
            Don&apos;t shove the latest model at every problem. Pick the cheapest model that does the job well.
          </p>
        </div>

        <div
          className="rise bg-card border-border flex flex-col justify-center rounded-xl border p-9"
          style={step(3)}
        >
          <Mono className="text-muted-foreground">Xero — data extraction</Mono>
          <div className="mt-6 flex flex-col gap-5">
            <div>
              <div className="flex items-baseline justify-between text-[24px] font-semibold">
                <span>Claude 3.5</span>
                <span className="font-mono text-[22px]">1×</span>
              </div>
              <div className="bg-foreground mt-2 h-[44px] w-full rounded-sm" />
            </div>
            <div>
              <div className="flex items-baseline justify-between text-[24px] font-semibold">
                <span>OCR + Gemini 2.5 Flash</span>
                <span className="text-primary font-mono text-[22px]">1/3</span>
              </div>
              <div className="bg-primary grow mt-2 h-[44px] w-1/3 rounded-sm" style={step(4)} />
            </div>
          </div>
          <p className="mt-6 font-mono text-[14px] tracking-wide text-muted-foreground uppercase">
            Relative cost · same job
          </p>
          <div className="border-foreground mt-6 border-t-2 pt-5">
            <span className="text-primary block text-[72px] leading-none font-bold tracking-tight whitespace-nowrap">
              3x cheaper
            </span>
            <p className="mt-3 text-[24px] leading-tight font-medium">Same job done, for a third of the cost.</p>
          </div>
        </div>
      </div>
    </SlideBody>
  )
}

const stakeholders = ['Legal', 'Support', 'Sales', 'Eng', 'Execs', 'Customers']

export function PeopleSlide() {
  const radius = 205
  return (
    <SlideBody>
      <div className="grid flex-1 grid-cols-[1fr_560px] items-center gap-12">
        <div>
          <h2 className="rise text-[78px] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
            Alignment has to be people-led.
          </h2>
          <p className="rise mt-10 text-[34px] leading-[1.2] font-medium" style={step(2)}>
            Great PMs bring people together.
            <br />
            <span className="text-primary">AI doesn&apos;t let you skip stakeholders.</span>
          </p>
        </div>

        <div className="rise relative mx-auto h-[540px] w-[540px]" style={step(2)} role="img" aria-label="The PM at the centre, connected to Legal, Support, Sales, Eng, Execs and Customers">
          <div className="border-border absolute top-1/2 left-1/2 size-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed" />
          <svg viewBox="0 0 540 540" className="absolute inset-0" fill="none" aria-hidden="true">
            {stakeholders.map((s, i) => {
              const a = ((-90 + i * 60) * Math.PI) / 180
              return (
                <line
                  key={s}
                  x1="270"
                  y1="270"
                  x2={270 + Math.cos(a) * radius}
                  y2={270 + Math.sin(a) * radius}
                  stroke="var(--foreground)"
                  strokeWidth="2"
                  pathLength={1}
                  className="draw"
                  style={step(3 + i)}
                />
              )
            })}
          </svg>
          <div className="bg-primary text-primary-foreground absolute top-1/2 left-1/2 flex size-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[44px] font-bold">
            PM
          </div>
          {stakeholders.map((s, i) => {
            const a = ((-90 + i * 60) * Math.PI) / 180
            return (
              <span
                key={s}
                className="bg-background border-foreground absolute rounded-full border-2 px-5 py-2 text-[24px] font-semibold"
                style={{
                  left: 270 + Math.cos(a) * radius,
                  top: 270 + Math.sin(a) * radius,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {s}
              </span>
            )
          })}
        </div>
      </div>
    </SlideBody>
  )
}
