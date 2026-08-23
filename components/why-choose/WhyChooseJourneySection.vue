<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseJourney } from '~/data/why-choose'

type Accent = (typeof whyChooseJourney.steps)[number]['accent']

const accentClasses: Record<Accent, { tile: string; text: string }> = {
  blue: { tile: 'bg-blue-100', text: 'text-blue-700' },
  sky: { tile: 'bg-sky-100', text: 'text-sky-700' },
  emerald: { tile: 'bg-emerald-100', text: 'text-emerald-700' },
}

const gridRef = ref<HTMLElement | null>(null)
const arrowPaths = ref<string[]>([])

function point(el: Element, edge: 'right' | 'left' | 'bottom' | 'top', origin: DOMRect) {
  const r = el.getBoundingClientRect()
  const x =
    edge === 'right' ? r.right
      : edge === 'left' ? r.left
        : r.left + r.width * 0.35
  const y =
    edge === 'bottom' ? r.bottom
      : edge === 'top' ? r.top
        : r.top + r.height * 0.48
  return { x: x - origin.left, y: y - origin.top }
}

function drawArrows() {
  const grid = gridRef.value
  if (!grid || window.matchMedia('(max-width: 639px)').matches) {
    arrowPaths.value = []
    return
  }

  const cards = [...grid.querySelectorAll('[data-journey-card]')]
  const origin = grid.getBoundingClientRect()
  const links: Array<[number, number, 'across' | 'wrap']> = [
    [0, 1, 'across'],
    [1, 2, 'wrap'],
    [2, 3, 'across'],
    [3, 4, 'wrap'],
    [4, 5, 'across'],
  ]

  arrowPaths.value = links.flatMap(([startIdx, endIdx, kind]) => {
    const a = cards[startIdx]
    const b = cards[endIdx]
    if (!a || !b) return []

    if (kind === 'across') {
      const s = point(a, 'right', origin)
      const e = point(b, 'left', origin)
      const mid = (s.x + e.x) / 2
      return [`M ${s.x} ${s.y} C ${mid} ${s.y}, ${mid} ${e.y}, ${e.x - 6} ${e.y}`]
    }

    const startBox = a.getBoundingClientRect()
    const endBox = b.getBoundingClientRect()
    const s = { x: startBox.left - origin.left + 28, y: startBox.bottom - origin.top }
    const e = { x: endBox.right - origin.left - 28, y: endBox.top - origin.top }
    const midY = s.y + (e.y - s.y) / 2
    return [`M ${s.x} ${s.y} C ${s.x} ${midY + 8}, ${e.x} ${midY - 8}, ${e.x} ${e.y - 6}`]
  })
}

let resizeObserver: ResizeObserver | null = null
let drawTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  nextTick(() => drawArrows())
  drawTimer = setTimeout(drawArrows, 850)
  window.addEventListener('resize', drawArrows)
  if (gridRef.value) {
    resizeObserver = new ResizeObserver(() => drawArrows())
    resizeObserver.observe(gridRef.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', drawArrows)
  resizeObserver?.disconnect()
  if (drawTimer) clearTimeout(drawTimer)
})
</script>

<template>
  <section id="tutoring-journey" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="tutoring-journey-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-6 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="tutoring-journey-heading" :badge="whyChooseJourney.badge" :title="whyChooseJourney.title"
        :classes="whyChooseJourney.classes" />

      <div ref="gridRef" class="relative z-[3] mx-auto mt-10 max-w-5xl sm:mt-12">
        <svg class="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible text-sky-500 sm:block"
          aria-hidden="true">
          <defs>
            <marker id="journey-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="currentColor" stroke-width="0.9" stroke-linecap="round"
                stroke-linejoin="round" />
            </marker>
          </defs>
          <path v-for="(d, i) in arrowPaths" :key="i" :d="d" fill="none" stroke="currentColor" stroke-width="1.7"
            stroke-linecap="round" stroke-dasharray="3 3.2" marker-end="url(#journey-arrowhead)" />
        </svg>

        <ol class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12 lg:gap-x-16 lg:gap-y-14" role="list">
          <li v-for="(step, i) in whyChooseJourney.steps" :key="step.no" class="relative min-w-0"
            :class="i % 2 === 1 ? 'sm:mt-10' : ''">
            <article data-journey-card class="timeline-card h-full">
              <div :class="[
                'timeline-card-surface group relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border p-4 sm:gap-4 sm:p-5',
                i === 0
                  ? 'timeline-card-surface--featured border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                  : 'border-slate-200/80 bg-white shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)]',
              ]">
                <span :class="[
                  'timeline-card-icon relative grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold sm:h-14 sm:w-14 sm:text-base',
                  i === 0
                    ? 'bg-white/15 text-white ring-1 ring-white/25'
                    : [accentClasses[step.accent].tile, accentClasses[step.accent].text],
                ]">
                  {{ step.no }}
                </span>
                <div class="relative min-w-0 flex-1">
                  <p :class="[
                    'text-[11px] font-bold uppercase tracking-[0.16em]',
                    i === 0 ? 'text-blue-100' : 'text-blue-600',
                  ]">
                    Step {{ step.no }}
                  </p>
                  <h3 :class="[
                    'mt-1 font-display text-[15.5px] font-bold transition-colors duration-300 sm:text-[17px]',
                    i === 0 ? 'text-white' : 'text-slate-900 group-hover:text-blue-700',
                  ]">
                    {{ step.title }}
                  </h3>
                  <p :class="[
                    'mt-1.5 line-clamp-2 text-[13px] leading-snug sm:text-[13.5px]',
                    i === 0 ? 'text-blue-100' : 'text-slate-500',
                  ]">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </article>

            <div v-if="i < whyChooseJourney.steps.length - 1" class="flex justify-center pt-2 text-sky-500 sm:hidden"
              aria-hidden="true">
              <svg class="h-7 w-5" viewBox="0 0 20 28" fill="none">
                <path d="M10 2v18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                  stroke-dasharray="3 3.2" />
                <path d="M4 16l6 8 6-8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </li>
        </ol>

      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-card-surface {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
}

.timeline-card-surface::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.15) 42%,
      transparent 70%);
  opacity: 0;
  transition: opacity 0.45s ease;
  pointer-events: none;
}

.timeline-card-surface::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  border-radius: 1rem 1rem 0 0;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.45), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.timeline-card-surface:hover {
  transform: translateY(-6px);
  border-color: rgb(191 219 254);
  box-shadow:
    0 4px 12px -2px rgba(15, 23, 42, 0.08),
    0 22px 48px -16px rgba(37, 99, 235, 0.28);
}

.timeline-card-surface:hover::before,
.timeline-card-surface:hover::after {
  opacity: 1;
}

.timeline-card-surface--featured:hover {
  border-color: rgba(147, 197, 253, 0.55);
  box-shadow:
    0 4px 12px -2px rgba(15, 23, 42, 0.12),
    0 24px 48px -14px rgba(37, 99, 235, 0.5);
}

.timeline-card-surface--featured::before {
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.06) 42%,
      transparent 70%);
}

.timeline-card-surface--featured::after {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
}

.timeline-card-icon {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-card-surface:hover .timeline-card-icon {
  transform: scale(1.08);
}

@media (prefers-reduced-motion: reduce) {

  .timeline-card-surface,
  .timeline-card-icon {
    transition: none;
  }

  .timeline-card-surface:hover {
    transform: none;
  }

  .timeline-card-surface:hover .timeline-card-icon {
    transform: none;
  }
}
</style>
