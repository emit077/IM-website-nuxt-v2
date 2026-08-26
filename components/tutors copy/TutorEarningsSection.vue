<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { earningsSection, payoutFeatures } from '~/data/tutors'

type CycleId = (typeof earningsSection.cycles)[number]['id']

const activeCycle = ref<CycleId>('monthly')
const activeFeature = ref(0)

const cycle = computed(
  () => earningsSection.cycles.find((c) => c.id === activeCycle.value) ?? earningsSection.cycles[2]!,
)

const accentMap = {
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white',
    bar: 'bg-blue-500',
    glow: 'group-hover:border-blue-200',
    active: 'border-blue-300 ring-2 ring-blue-100 shadow-[0_18px_36px_-20px_rgba(37,99,235,0.28)]',
  },
  emerald: {
    tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
    bar: 'bg-emerald-500',
    glow: 'group-hover:border-emerald-200',
    active: 'border-emerald-300 ring-2 ring-emerald-100 shadow-[0_18px_36px_-20px_rgba(16,185,129,0.28)]',
  },
  orange: {
    tile: 'bg-orange-50 text-orange-600 ring-orange-100 group-hover:bg-orange-500 group-hover:text-white',
    bar: 'bg-orange-500',
    glow: 'group-hover:border-orange-200',
    active: 'border-orange-300 ring-2 ring-orange-100 shadow-[0_18px_36px_-20px_rgba(249,115,22,0.28)]',
  },
  indigo: {
    tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
    bar: 'bg-indigo-500',
    glow: 'group-hover:border-indigo-200',
    active: 'border-indigo-300 ring-2 ring-indigo-100 shadow-[0_18px_36px_-20px_rgba(79,70,229,0.28)]',
  },
} as const

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

function setCycle(id: CycleId) {
  activeCycle.value = id
}

function setFeature(index: number) {
  activeFeature.value = index
}
</script>

<template>
  <section id="tutor-earnings" class="relative scroll-mt-20 overflow-hidden section-surface-white section-py"
    aria-labelledby="tutor-earnings-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50/80 to-transparent" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />

    <div class="container-page relative">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <!-- Copy + drivers + CTA -->
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
          <CardHeader align="left" heading-id="tutor-earnings-heading" :badge="earningsSection.badge"
            :title="earningsSection.title" :description="earningsSection.description"
            :classes="earningsSection.classes" />

          <div class="mt-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              {{ earningsSection.driversLabel }}
            </p>
            <ul class="mt-3 flex flex-wrap gap-2" role="list">
              <li v-for="(driver, i) in earningsSection.drivers" :key="driver.label" v-motion
                :initial="{ opacity: 0, y: 8 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 60, duration: 380 } }">
                <span
                  class="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-[13px] font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft">
                  <Icon :icon="driver.iconMdi" class="h-4 w-4 text-blue-600" aria-hidden="true" />
                  {{ driver.label }}
                </span>
              </li>
            </ul>
          </div>

          <a :href="earningsSection.cta.href"
            class="btn-primary ripple group mt-7 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            @mousemove="rippleHandler">
            {{ earningsSection.cta.label }}
            <IconArrowRight class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <!-- Interactive earnings preview -->
        <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 560, delay: 80 } }">
          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-blue-400/20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-5 text-white shadow-[0_28px_60px_-28px_rgba(37,99,235,0.65)] sm:p-6 lg:p-7">
            <div aria-hidden="true"
              class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true"
              class="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
            <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.12]"
              style="background-image: radial-gradient(#fff 0.6px, transparent 0.6px); background-size: 18px 18px;" />

            <!-- Floating toast -->
            <div
              class="earnings-toast absolute right-4 top-4 z-20 hidden max-w-[220px] rounded-2xl border border-white/20 bg-white/95 p-3 text-slate-900 shadow-lg backdrop-blur-sm sm:right-5 sm:top-5 sm:block"
              aria-hidden="true">
              <div class="flex items-start gap-2.5">
                <span
                  class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Icon icon="mdi:check-bold" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <p class="text-[12px] font-bold leading-snug">{{ earningsSection.toast.title }}</p>
                  <p class="mt-0.5 truncate text-[11px] text-slate-500">{{ earningsSection.toast.detail }}</p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="flex flex-wrap items-center justify-between gap-3 pr-0 sm:pr-48">
                <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/80">
                  {{ earningsSection.preview.label }}
                </p>
                <div class="inline-flex rounded-xl bg-white/10 p-1 ring-1 ring-white/15" role="tablist"
                  aria-label="Payout cycle">
                  <button v-for="item in earningsSection.cycles" :key="item.id" type="button" role="tab"
                    :aria-selected="activeCycle === item.id" :class="[
                      'rounded-lg px-2.5 py-1.5 text-[11.5px] font-bold transition sm:px-3',
                      activeCycle === item.id
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-blue-100/80 hover:bg-white/10 hover:text-white',
                    ]" @click="setCycle(item.id)">
                    {{ item.label }}
                  </button>
                </div>
              </div>

              <div class="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-medium text-blue-100/90">{{ cycle.balanceLabel }}</p>
                  <Transition name="balance-swap" mode="out-in">
                    <p :key="cycle.id"
                      class="mt-1 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      {{ cycle.balance }}
                    </p>
                  </Transition>
                  <Transition name="balance-swap" mode="out-in">
                    <p :key="`${cycle.id}-trend`"
                      class="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-400/20 px-2.5 py-1 text-[12px] font-semibold text-emerald-100 ring-1 ring-emerald-300/30">
                      <Icon icon="mdi:trending-up" class="h-3.5 w-3.5" aria-hidden="true" />
                      {{ cycle.trend }}
                    </p>
                  </Transition>
                </div>
                <span
                  class="earnings-wallet grid h-12 w-12 place-items-center rounded-2xl bg-amber-300 text-amber-950 shadow-lg ring-1 ring-amber-200/80"
                  aria-hidden="true">
                  <Icon icon="mdi:wallet-outline" class="h-6 w-6" />
                </span>
              </div>

              <div class="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div
                  class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm transition hover:bg-white/15">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-blue-100/70">
                    {{ earningsSection.preview.nextPayoutLabel }}
                  </p>
                  <Transition name="balance-swap" mode="out-in">
                    <p :key="`${cycle.id}-payout`" class="mt-1 font-display text-lg font-bold text-white">
                      {{ cycle.nextPayout }}
                    </p>
                  </Transition>
                </div>
                <div
                  class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm transition hover:bg-white/15">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-blue-100/70">
                    {{ earningsSection.preview.sessionsLabel }}
                  </p>
                  <Transition name="balance-swap" mode="out-in">
                    <p :key="`${cycle.id}-sessions`" class="mt-1 font-display text-lg font-bold text-white">
                      {{ cycle.sessions }}
                    </p>
                  </Transition>
                </div>
                <div
                  class="rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm transition hover:bg-white/15">
                  <p class="text-[11px] font-semibold uppercase tracking-wide text-blue-100/70">
                    {{ earningsSection.preview.statusLabel }}
                  </p>
                  <p class="mt-1 inline-flex items-center gap-1.5 font-display text-lg font-bold text-white">
                    <span class="earnings-pulse h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    {{ earningsSection.preview.status }}
                  </p>
                </div>
              </div>

              <div class="relative mt-5 grid grid-cols-1 gap-4 lg:grid-cols-12">
                <!-- Chart -->
                <div class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm lg:col-span-7"
                  aria-hidden="true">
                  <div class="flex items-end justify-between gap-2 sm:gap-3">
                    <span v-for="(h, i) in cycle.bars" :key="`${cycle.id}-${i}`"
                      class="earnings-bar block w-full rounded-t-md bg-gradient-to-t from-white/25 to-white/85"
                      :style="{ height: `${h}px`, animationDelay: `${i * 60}ms` }" />
                  </div>
                  <p class="mt-3 text-[12px] font-medium text-blue-100/85">{{ cycle.chartNote }}</p>
                </div>

                <!-- Recent activity -->
                <div class="rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-sm lg:col-span-5">
                  <p class="px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-100/70">
                    Recent sessions
                  </p>
                  <ul class="mt-2.5 space-y-2" role="list">
                    <li v-for="(item, i) in earningsSection.activity" :key="item.subject"
                      class="flex items-center justify-between gap-2 rounded-xl bg-white/10 px-2.5 py-2 ring-1 ring-white/10 transition hover:bg-white/15"
                      v-motion :initial="{ opacity: 0, x: 10 }"
                      :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 160 + i * 70, duration: 380 } }">
                      <div class="min-w-0">
                        <p class="truncate text-[12.5px] font-semibold text-white">{{ item.subject }}</p>
                        <p class="truncate text-[11px] text-blue-100/70">{{ item.grade }} · {{ item.time }}</p>
                      </div>
                      <span class="shrink-0 font-display text-[13px] font-bold text-emerald-200">
                        {{ item.amount }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Payout features -->
      <div class="mt-10 lg:mt-12">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
          <div class="flex items-center gap-3">
            <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">
              {{ earningsSection.payoutTitle }}
            </h3>
          </div>
        </div>

        <ul class="grid grid-cols-1 gap-3.5 sm:grid-cols-4 lg:gap-4" role="list" aria-label="Payout features">
          <li v-for="(feature, i) in payoutFeatures" :key="feature.no" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 70, duration: 420 } }"
            @mouseenter="setFeature(i)" @focusin="setFeature(i)">
            <article :class="[
              'group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border bg-white p-5 transition duration-300 hover:-translate-y-1 sm:p-6',
              activeFeature === i
                ? accentMap[feature.accent].active
                : 'border-slate-200/80 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.2)]',
              accentMap[feature.accent].glow,
            ]">
              <div aria-hidden="true"
                class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-100/80 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div class="relative flex items-start justify-between gap-3">
                <span :class="[
                  'grid h-11 w-11 place-items-center rounded-xl ring-1 transition duration-300',
                  accentMap[feature.accent].tile,
                ]" aria-hidden="true">
                  <Icon :icon="feature.iconMdi" class="h-5 w-5" />
                </span>
              </div>

              <h4 class="relative mt-4 font-display text-[15.5px] font-bold leading-snug text-slate-900 sm:text-base">
                {{ feature.title }}
              </h4>
              <p
                class="relative mt-1.5 inline-flex w-fit rounded-lg bg-slate-50 px-2 py-1 text-[11.5px] font-bold uppercase tracking-wide text-slate-600 ring-1 ring-slate-100 transition group-hover:bg-white">
                {{ feature.highlight }}
              </p>
              <p class="relative mt-2.5 flex-1 text-[13px] leading-relaxed text-slate-500">
                {{ feature.description }}
              </p>
              <span aria-hidden="true" :class="[
                'relative mt-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16',
                accentMap[feature.accent].bar,
              ]" />
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.earnings-bar {
  animation: earnings-rise 650ms ease-out both;
  transform-origin: bottom;
}

.earnings-wallet {
  animation: wallet-bob 2.8s ease-in-out infinite;
}

.earnings-pulse {
  animation: status-pulse 1.6s ease-in-out infinite;
}

.earnings-toast {
  animation: toast-in 700ms cubic-bezier(0.22, 1, 0.36, 1) both 450ms,
    toast-float 3.2s ease-in-out infinite 1.2s;
}

@keyframes earnings-rise {
  from {
    transform: scaleY(0.3);
    opacity: 0.25;
  }

  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes wallet-bob {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-4px);
  }
}

@keyframes status-pulse {

  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(110, 231, 183, 0.55);
  }

  50% {
    opacity: 0.75;
    box-shadow: 0 0 0 6px rgba(110, 231, 183, 0);
  }
}

@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes toast-float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

.balance-swap-enter-active,
.balance-swap-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.balance-swap-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.balance-swap-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {

  .earnings-bar,
  .earnings-wallet,
  .earnings-pulse,
  .earnings-toast {
    animation: none !important;
  }
}
</style>
