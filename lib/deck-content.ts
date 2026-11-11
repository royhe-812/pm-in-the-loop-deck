export type Story = {
  /** Short headline for the story. Leave empty while the story is a placeholder. */
  title: string
  /** The four lines from the outline. Fill `value` to replace the blank on the slide. */
  fields: { label: string; value: string }[]
  /** Takeaway to say out loud. */
  takeaway: string
  /** Suggested stories from the outline, shown only while the slide is a placeholder. */
  candidates: string[]
}

/*
  Roy: the three story slides are placeholders. Pick ONE story per loop and fill in
  `title` and the four `value`s. Once any value is filled, the slide stops showing the
  placeholder styling and the candidate list.
*/
export const stories: Record<'customer' | 'product' | 'people', Story> = {
  customer: {
    title: '',
    fields: [
      { label: 'Company / Product', value: '' },
      { label: 'What the data / model said', value: '' },
      { label: 'What customers actually said / needed', value: '' },
      { label: 'What happened', value: '' },
    ],
    takeaway: 'Trust the feedback, not just the dashboard.',
    candidates: ['Zillow iBuying', 'Air Canada chatbot', 'Google AI Overviews'],
  },
  product: {
    title: '',
    fields: [
      { label: 'Company / Product', value: '' },
      { label: 'Same model, different product sense', value: '' },
      { label: 'What made the experience win — or fail', value: '' },
      { label: 'What happened', value: '' },
    ],
    takeaway: 'Taste is in the defaults, onboarding, and error states — not the demo.',
    candidates: ['Perplexity vs Google', 'Notion AI / Linear', 'Humane AI Pin'],
  },
  people: {
    title: '',
    fields: [
      { label: 'Company / Product', value: '' },
      { label: 'Who was left out of the loop', value: '' },
      { label: 'What went wrong when it shipped', value: '' },
      { label: 'What happened', value: '' },
    ],
    takeaway: 'If you can’t name who owns the failure, you’re not ready to ship.',
    candidates: ['IBM Watson Health', 'Amazon Just Walk Out', 'Microsoft Tay / Google Bard launch'],
  },
}

export const fast = [
  { letter: 'F', name: 'Fit', question: 'Repetitive, pattern-rich?' },
  { letter: 'A', name: 'Apparent failure', question: 'Obvious and low-risk?' },
  { letter: 'S', name: 'Seamless', question: 'No detour?' },
  { letter: 'T', name: 'Time saved', question: 'Net of cleanup?' },
] as const

export const mondayActions = [
  { lead: 'Kill one AI feature', rest: 'that fails the FAST test' },
  { lead: 'Talk to 3 customers', rest: 'before your next AI roadmap item' },
  { lead: 'Price it', rest: '— cheapest model that works, not the latest' },
  { lead: 'Name a human owner', rest: 'for every AI failure mode' },
] as const

export const notes: Record<string, string> = {
  title: 'Open on the line under the title: AI can do the work. It can’t do the judgment. Everything that follows is about where the judgment lives.',
  who: 'Keep this to 30 seconds. Why you’re talking about this — you’ve shipped AI features, you’ve seen the hype cycle up close.',
  hook: 'Ask the room — how many roadmaps have “AI” on them this quarter?',
  mistake: 'Pause on this one. Let it sit. The risk isn’t speed, it’s aiming the technology at the wrong problem.',
  loops: 'This is the whole talk. Everything else is proof. AI works inside each loop; the PM stays in the loop.',
  customer:
    'Customers don’t care how you solve it — they care that the problem is solved. AI can summarise research, but it can’t replace sitting with a customer. Bezos quote: when the anecdotes and the data disagree, the anecdotes are usually right.',
  customerStory:
    'Pick ONE story. Suggested options: Zillow iBuying, Air Canada chatbot, Google AI Overviews. Say the takeaway out loud: trust the feedback, not just the dashboard.',
  fast:
    'F — repetitive tasks with big training sets are great for AI; highly variant, person-dependent problems are harder. A — failure must be easy to spot and low-risk. S — AI shouldn’t change the workflow for the worse or make users go out of their way, e.g. a help bot gatekeeping info already on the web. T — count cleanup time, not just generation time, e.g. an AI slide that looks nice but has 100 text boxes and mismatched formatting takes longer to fix than starting from a template. Cost is also part of the decision — see the next loop.',
  product: 'The model is the commodity. The experience is the product.',
  cost: 'This is product sense in practice — right-sizing the model, not maxing it out. Add your per-document / per-1,000-docs numbers here if you have them.',
  productStory:
    'Pick ONE story. Suggested: Perplexity vs Google, Notion AI / Linear, Humane AI Pin. Your Xero cost example is already on the previous slide, so don’t repeat it. Takeaway: taste is in the defaults, onboarding, and error states — not the demo.',
  people: 'Great PMs bring people together. AI doesn’t let you skip stakeholders — Legal, Support, Sales, Eng, Execs and Customers all still need to be in the room.',
  peopleStory:
    'Pick ONE story. Suggested: IBM Watson Health, Amazon Just Walk Out, Microsoft Tay / Google Bard launch. Takeaway: if you can’t name who owns the failure, you’re not ready to ship.',
  monday: 'Four items only. Ask the room to pick the one they will do this week.',
  close: 'End on the 3 Loops. Invite questions, don’t add a new idea here.',
}
