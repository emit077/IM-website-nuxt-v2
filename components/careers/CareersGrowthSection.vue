<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { growthSection } from '~/data/careers'

const growthImage = usePublicAsset(growthSection.image)

const accentClasses: Record<(typeof growthSection.path)[number]['accent'], { tile: string; number: string }> = {
  blue: { tile: 'bg-blue-100', number: 'text-blue-700' },
  indigo: { tile: 'bg-indigo-100', number: 'text-indigo-700' },
  violet: { tile: 'bg-violet-100', number: 'text-violet-700' },
  emerald: { tile: 'bg-emerald-100', number: 'text-emerald-700' },
  amber: { tile: 'bg-amber-100', number: 'text-amber-700' },
}
</script>

<template>
  <section
    id="career-growth"
    class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="career-growth-heading"
  >
    <div aria-hidden="true" class="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    <div aria-hidden="true" class="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader
        heading-id="career-growth-heading"
        :badge="growthSection.kicker"
        :title="growthSection.title"
        :description="growthSection.description"
        :classes="growthSection.classes"
      />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        <ol class="relative order-2 flex flex-col justify-center lg:order-1 lg:col-span-7" role="list">
          <span
            aria-hidden="true"
            class="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-amber-200 sm:block"
          />

          <li
            v-for="(step, i) in growthSection.path"
            :key="step.no"
            v-motion
            :initial="{ opacity: 0, x: -12 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 70, duration: 380 } }"
          >
            <article
              :class="[
                'group relative flex items-start gap-3.5 rounded-2xl p-3.5 sm:gap-4 sm:p-4',
                i === growthSection.path.length - 1
                  ? 'border border-blue-400/20 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.5)]'
                  : 'border border-transparent hover:border-slate-200/80 hover:bg-cream-50/70',
              ]"
            >
              <span
                :class="[
                  'relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-[12px] font-extrabold sm:h-11 sm:w-11',
                  i === growthSection.path.length - 1
                    ? 'bg-white/15 text-white ring-1 ring-white/25'
                    : [accentClasses[step.accent].tile, accentClasses[step.accent].number],
                ]"
                aria-hidden="true"
              >
                {{ step.no }}
              </span>
              <div class="min-w-0 flex-1 pt-0.5">
                <div class="flex items-center gap-2">
                  <h3
                    :class="[
                      'font-display text-[15px] font-bold leading-snug sm:text-base',
                      i === growthSection.path.length - 1 ? 'text-white' : 'text-slate-900',
                    ]"
                  >
                    {{ step.title }}
                  </h3>
                  <Icon
                    :icon="step.iconMdi"
                    :class="['h-4 w-4 shrink-0', i === growthSection.path.length - 1 ? 'text-white/70' : 'text-slate-300']"
                    aria-hidden="true"
                  />
                </div>
                <p
                  :class="[
                    'mt-1 text-[13px] leading-relaxed sm:text-[13.5px]',
                    i === growthSection.path.length - 1 ? 'text-white/80' : 'text-slate-500',
                  ]"
                >
                  {{ step.description }}
                </p>
              </div>
            </article>
          </li>
        </ol>

        <div
          class="relative order-1 flex lg:order-2 lg:col-span-5"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }"
        >
          <figure
            class="relative aspect-[4/5] w-full flex-1 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 shadow-[0_22px_48px_-26px_rgba(15,23,42,0.28)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-0"
          >
            <img
              :src="growthImage"
              :alt="growthSection.imageAlt"
              class="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              loading="lazy"
              decoding="async"
            />
            <figcaption class="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                {{ growthSection.overlayKicker }}
              </p>
              <p class="mt-1.5 font-display text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
                {{ growthSection.overlayTitle }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-6 lg:gap-4" role="list">
        <li
          v-for="(item, i) in growthSection.items"
          :key="item.title"
          :class="i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 360 } }"
        >
          <article
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-cream-50/50 p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-5"
          >
            <span
              class="grid h-10 w-10 place-items-center rounded-xl bg-white text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
              aria-hidden="true"
            >
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3.5 font-display text-[14.5px] font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500 sm:text-[13px]">{{ item.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
