import type { ComponentType } from 'react'
import { notes, stories } from '@/lib/deck-content'
import { CloseSlide, MondaySlide } from './slides-closing'
import {
  CostSlide,
  CustomerSlide,
  FastSlide,
  LoopsSlide,
  PeopleSlide,
  ProductSlide,
} from './slides-loops'
import { HookSlide, MistakeSlide, TitleSlide, WhoSlide } from './slides-opening'
import { StorySlide } from './story-slide'

export type SlideDef = {
  id: string
  eyebrow: string
  /** 1 = Customer, 2 = Product, 3 = People. Lights the loop tracker. */
  loop?: 1 | 2 | 3
  dark?: boolean
  hideChrome?: boolean
  note: string
  Component: ComponentType
}

export const slides: SlideDef[] = [
  { id: 'title', eyebrow: '', hideChrome: true, note: notes.title, Component: TitleSlide },
  { id: 'who', eyebrow: 'Who I am', note: notes.who, Component: WhoSlide },
  { id: 'hook', eyebrow: 'The hook', note: notes.hook, Component: HookSlide },
  { id: 'mistake', eyebrow: 'The mistake', dark: true, note: notes.mistake, Component: MistakeSlide },
  { id: 'loops', eyebrow: 'The framework · The 3 Loops', note: notes.loops, Component: LoopsSlide },
  { id: 'customer', eyebrow: 'Loop 1 · Customer', loop: 1, note: notes.customer, Component: CustomerSlide },
  {
    id: 'customer-story',
    eyebrow: 'Loop 1 · Customer · Story',
    loop: 1,
    note: notes.customerStory,
    Component: () => <StorySlide story={stories.customer} loopName="Loop 1" />,
  },
  { id: 'fast', eyebrow: 'Loop 1 · Customer · The FAST test', loop: 1, note: notes.fast, Component: FastSlide },
  { id: 'product', eyebrow: 'Loop 2 · Product', loop: 2, note: notes.product, Component: ProductSlide },
  { id: 'cost', eyebrow: 'Loop 2 · Product · Cost', loop: 2, note: notes.cost, Component: CostSlide },
  {
    id: 'product-story',
    eyebrow: 'Loop 2 · Product · Story',
    loop: 2,
    note: notes.productStory,
    Component: () => <StorySlide story={stories.product} loopName="Loop 2" />,
  },
  { id: 'people', eyebrow: 'Loop 3 · People', loop: 3, note: notes.people, Component: PeopleSlide },
  {
    id: 'people-story',
    eyebrow: 'Loop 3 · People · Story',
    loop: 3,
    note: notes.peopleStory,
    Component: () => <StorySlide story={stories.people} loopName="Loop 3" />,
  },
  { id: 'monday', eyebrow: 'What to do Monday', note: notes.monday, Component: MondaySlide },
  { id: 'close', eyebrow: 'Close', dark: true, hideChrome: true, note: notes.close, Component: CloseSlide },
]
