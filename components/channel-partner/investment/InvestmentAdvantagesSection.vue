<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyModelWorksSection } from '~/data/channel-partner-investment'

const { advantages } = whyModelWorksSection

type Accent = 'blue' | 'emerald' | 'violet' | 'sky' | 'amber' | 'rose'

const accentClasses: Record<Accent, { icon: string; glow: string; bar: string; num: string }> = {
  blue: { icon: 'bg-blue-50 text-blue-600 ring-blue-100', glow: 'from-blue-500/15', bar: 'from-blue-500 to-blue-600', num: 'text-blue-200' },
  emerald: { icon: 'bg-emerald-50 text-emerald-600 ring-emerald-100', glow: 'from-emerald-500/15', bar: 'from-emerald-500 to-emerald-600', num: 'text-emerald-200' },
  violet: { icon: 'bg-violet-50 text-violet-600 ring-violet-100', glow: 'from-violet-500/15', bar: 'from-violet-500 to-violet-600', num: 'text-violet-200' },
  sky: { icon: 'bg-sky-50 text-sky-600 ring-sky-100', glow: 'from-sky-500/15', bar: 'from-sky-500 to-sky-600', num: 'text-sky-200' },
  amber: { icon: 'bg-amber-50 text-amber-600 ring-amber-100', glow: 'from-amber-500/15', bar: 'from-amber-500 to-amber-600', num: 'text-amber-200' },
  rose: { icon: 'bg-rose-50 text-rose-600 ring-rose-100', glow: 'from-rose-500/15', bar: 'from-rose-500 to-rose-600', num: 'text-rose-200' },
}

const accentOf = (a?: string) => accentClasses[(a as Accent) ?? 'blue'] ?? accentClasses.blue

const floatingStats = [
  {
    iconMdi: 'mdi:cash-multiple',
    value: '90%',
    label: 'Revenue kept by partner',
    wrap: 'left-0 top-10 sm:-left-4',
    icon: 'bg-blue-600 text-white',
  },
  {
    iconMdi: 'mdi:sync',
    value: 'Recurring',
    label: 'Predictable monthly income',
    wrap: 'right-0 bottom-12 sm:-right-4',
    icon: 'bg-emerald-500 text-white',
  },
]
</script>

<template>
  <section id="why-model-works" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-model-works-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="why-model-works-heading" :badge="whyModelWorksSection.kicker"
          :title="whyModelWorksSection.title" :description="whyModelWorksSection.description"
          :classes="whyModelWorksSection.classes" />
      </div>

      <div class="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
        <!-- Win-Win image -->
        <div class="order-2 lg:order-2" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="relative mx-auto w-full max-w-md">
            <div aria-hidden="true"
              class="pointer-events-none absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-blue-200/50 via-indigo-100/40 to-transparent blur-2xl" />
            <div aria-hidden="true"
              class="pointer-events-none absolute inset-x-8 bottom-2 -z-10 h-10 rounded-full bg-slate-900/10 blur-xl" />

            <img src="/assets/img/channel-partner/win-win.png"
              alt="Win-win partnership between Channel Partner and Indian Mentors" class="relative w-full"
              loading="lazy" decoding="async" />

            <div v-for="(stat, i) in floatingStats" :key="stat.value" :class="[
              'win-chip absolute z-10 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(30,58,138,0.35)] backdrop-blur-sm',
              stat.wrap,
            ]" v-motion :initial="{ opacity: 0, scale: 0.85 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 400 + i * 160, duration: 450 } }">
              <span :class="['grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-sm', stat.icon]"
                aria-hidden="true">
                <Icon :icon="stat.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <div class="leading-tight">
                <p class="font-display text-sm font-bold text-slate-900">{{ stat.value }}</p>
                <p class="text-[11px] font-medium text-slate-500">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive advantage cards -->
        <ul class="order-1 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:order-1" role="list">
          <li v-for="(item, i) in advantages" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 60, duration: 400 } }">
            <div
              class="adv-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft sm:p-5">
              <span aria-hidden="true"
                :class="['pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100', accentOf(item.accent).glow]" />
              <span aria-hidden="true"
                :class="['pointer-events-none absolute right-3 top-1 select-none font-display text-4xl font-black tabular-nums opacity-70 transition-opacity duration-300 group-hover:opacity-100', accentOf(item.accent).num]">
                <Icon :icon="item.iconMdi" class="h-10 w-10" />
              </span>
              <div class="relative flex items-center gap-3">
                <span aria-hidden="true"
                  :class="['pointer-events-none  right-3 top-1 select-none font-display text-4xl font-black tabular-nums opacity-70 transition-opacity duration-300 group-hover:opacity-100', accentOf(item.accent).num]">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>

                <h3 class="font-display text-[13px] font-bold leading-tight text-slate-900 sm:text-sm"
                  v-html="item.title">
                </h3>
              </div>
              <p class="relative mt-3 text-[12.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
              <span aria-hidden="true"
                :class="['adv-card__bar mt-auto h-[3px] w-0 rounded-full bg-gradient-to-r transition-all duration-300 group-hover:w-full', accentOf(item.accent).bar]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adv-card {
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.adv-card:hover {
  transform: translateY(-4px);
  border-color: rgba(199, 210, 254, 0.9);
  box-shadow: 0 18px 40px -20px rgba(51, 65, 85, 0.28);
}

.adv-card__bar {
  margin-top: 0.85rem;
}

.win-chip {
  animation: win-float 4.5s ease-in-out infinite;
}

.win-chip:nth-of-type(2) {
  animation-delay: 1.4s;
}

@keyframes win-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {

  .adv-card,
  .adv-card:hover,
  .win-chip {
    animation: none;
    transition: none;
    transform: none;
  }
}
</style>
