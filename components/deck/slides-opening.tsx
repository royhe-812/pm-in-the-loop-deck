import { Circled, Marked, Mono, SlideBody, step } from './primitives'

export function TitleSlide() {
  return (
    <SlideBody className="justify-center pt-[72px]">
      <Mono className="rise text-muted-foreground" >A survival guide for thinking PMs in an AI-first world</Mono>
      <h1
        className="rise mt-8 text-[168px] leading-[0.9] font-bold tracking-[-0.04em]"
        style={step(1)}
      >
        PM-in-the-
        <br />
        <Circled delay={3}>Loop</Circled>
      </h1>
      <p className="rise mt-16 text-[36px] leading-tight font-medium" style={step(3)}>
        AI can do the work. It can&apos;t do the <Marked>judgment.</Marked>
      </p>
    </SlideBody>
  )
}

export function WhoSlide() {
  const facts = [
    ['Now', 'Group Product Manager, eBay Live'],
    ['Building', 'eBay’s Live shopping platform'],
    ['Track record', '10+ years scaling AI, SaaS, and platform products'],
    ['Before', 'Sr. Group PM, AI at Xero'],
  ]
  return (
    <SlideBody>
      <div className="grid flex-1 grid-cols-[480px_1fr] gap-20">
        <div className="flex flex-col justify-between">
          <h2 className="rise text-[120px] leading-[0.92] font-bold tracking-[-0.035em]">
            Roy
            <br />
            He
          </h2>
          <div className="rise flex flex-col gap-1" style={step(1)}>
            <Mono className="text-muted-foreground">Toronto</Mono>
            <span className="text-primary text-[26px] font-semibold">linkedin.com/in/rzyh</span>
          </div>
        </div>
        <dl className="flex flex-col justify-center">
          {facts.map(([label, value], i) => (
            <div
              key={label}
              className="rise border-border grid grid-cols-[190px_1fr] items-baseline gap-6 border-t py-7 first:border-t-2 first:border-foreground"
              style={step(i + 1)}
            >
              <dt>
                <Mono className="text-muted-foreground">{label}</Mono>
              </dt>
              <dd className="text-[38px] leading-[1.1] font-semibold text-balance">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SlideBody>
  )
}

const roadmap = [
  { quarter: 'Q1', items: ['Search', 'Onboarding', 'Reporting'] },
  { quarter: 'Q2', items: ['Notifications', 'Support inbox', 'Checkout'] },
  { quarter: 'Q3', items: ['Dashboards', 'Settings', 'Listings'] },
  { quarter: 'Q4', items: ['Help center', 'Recommendations', 'Profile'] },
]

export function HookSlide() {
  return (
    <SlideBody>
      <h2 className="rise text-[66px] leading-[1] font-bold tracking-tight">
        Every roadmap has <span className="text-primary">AI</span> in it now.
      </h2>
      <p className="rise mt-4 text-[30px] font-medium" style={step(1)}>
        Adding AI to every feature doesn&apos;t make a better product.
      </p>

      <div className="mt-auto grid grid-cols-4 gap-4" aria-hidden="true">
        {roadmap.map((col, c) => (
          <div key={col.quarter} className="flex flex-col gap-3">
            <Mono className="text-muted-foreground">{col.quarter}</Mono>
            {col.items.map((item, r) => (
              <div
                key={item}
                className="rise bg-card border-border flex h-[84px] flex-col justify-between rounded-lg border px-4 py-3"
                style={step(2 + c + r)}
              >
                <span className="text-[22px] leading-none font-semibold">{item}</span>
                <span className="bg-primary text-primary-foreground w-fit rounded px-2 py-[3px] font-mono text-[14px] leading-none font-medium">
                  AI-powered
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </SlideBody>
  )
}

export function MistakeSlide() {
  return (
    <SlideBody className="justify-center">
      <p className="rise text-background/60 text-[56px] leading-[1.05] font-medium tracking-tight">
        The biggest mistake isn&apos;t moving too slowly.
      </p>
      <p
        className="rise mt-10 max-w-[1000px] text-[100px] leading-[0.98] font-bold tracking-[-0.03em] text-balance"
        style={step(2)}
      >
        It&apos;s solving the <span className="text-mark">wrong problems</span> with the{' '}
        <span className="text-mark">wrong technology.</span>
      </p>
    </SlideBody>
  )
}
