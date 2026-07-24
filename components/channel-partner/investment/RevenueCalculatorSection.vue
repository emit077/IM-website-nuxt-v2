<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { revenueCalculatorSection } from '~/data/channel-partner-investment'

const {
  students: studentsCfg,
  subscriptionFee: subCfg,
  subscriptionPartnerShare,
  configureTitle,
  note,
  periodTabs,
} = revenueCalculatorSection

type Period = (typeof periodTabs)[number]['id']

const PERIOD_MONTHS: Record<Period, number> = {
  monthly: 1,
  quarterly: 3,
  halfYearly: 6,
  annual: 12,
}

const studentCount = ref(studentsCfg.default)
const subscriptionFee = ref(subCfg.default)
const period = ref<Period>('annual')
const pulseKey = ref(0)

const subShare = subscriptionPartnerShare / 100

const subscriptionMonthlyTotal = computed(() => studentCount.value * subscriptionFee.value)
const subscriptionPartnerMonthly = computed(() => Math.round(subscriptionMonthlyTotal.value * subShare))

const totalAnnual = computed(() => subscriptionMonthlyTotal.value * 12)

const subscriptionPlatformMonthly = computed(
  () => subscriptionMonthlyTotal.value - subscriptionPartnerMonthly.value,
)

const periodMonths = computed(() => PERIOD_MONTHS[period.value])

const partnerShare = { label: 'Channel Partner', percent: subscriptionPartnerShare }
const platformShare = { label: 'Indian Mentors', percent: 100 - subscriptionPartnerShare }

const heroAmount = computed(() => subscriptionPartnerMonthly.value * periodMonths.value)

const displayHero = ref(heroAmount.value)
let rafId = 0

watch(heroAmount, (next) => {
  const from = displayHero.value
  const to = next
  const start = performance.now()
  const duration = 420
  cancelAnimationFrame(rafId)

  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - (1 - t) ** 3
    displayHero.value = Math.round(from + (to - from) * eased)
    if (t < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
  pulseKey.value += 1
})

onUnmounted(() => cancelAnimationFrame(rafId))

const sliders = computed(() => [
  {
    id: 'calc-students',
    label: studentsCfg.label,
    iconMdi: studentsCfg.iconMdi,
    value: studentCount.value,
    display: String(studentCount.value),
    min: studentsCfg.min,
    max: studentsCfg.max,
    step: studentsCfg.step,
    minLabel: String(studentsCfg.min),
    maxLabel: String(studentsCfg.max),
    set: (v: number) => { studentCount.value = v },
  },
  {
    id: 'calc-sub-fee',
    label: subCfg.label,
    iconMdi: subCfg.iconMdi,
    value: subscriptionFee.value,
    display: formatInr(subscriptionFee.value),
    min: subCfg.min,
    max: subCfg.max,
    step: subCfg.step,
    minLabel: formatInr(subCfg.min),
    maxLabel: formatInr(subCfg.max),
    set: (v: number) => { subscriptionFee.value = v },
  },
])

const subscriptionFormula = computed(
  () => `${studentCount.value} × ${formatInr(subscriptionFee.value)}/mo`,
)

const DONUT_RADIUS = 80
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS

const donutSegments = computed(() => {
  const partnerLen = (partnerShare.percent / 100) * DONUT_CIRCUMFERENCE
  const platformLen = (platformShare.percent / 100) * DONUT_CIRCUMFERENCE
  const gap = 3
  return [
    {
      key: 'partner',
      color: '#2563eb',
      dashArray: `${Math.max(partnerLen - gap, 0)} ${DONUT_CIRCUMFERENCE - Math.max(partnerLen - gap, 0)}`,
      dashOffset: 0,
    },
    {
      key: 'platform',
      color: '#bfdbfe',
      dashArray: `${Math.max(platformLen - gap, 0)} ${DONUT_CIRCUMFERENCE - Math.max(platformLen - gap, 0)}`,
      dashOffset: -partnerLen,
    },
  ]
})

const totalRevenue = computed(() => subscriptionMonthlyTotal.value * periodMonths.value)

const legendRows = computed(() => {
  const partnerAmount = subscriptionPartnerMonthly.value * periodMonths.value
  const platformAmount = subscriptionPlatformMonthly.value * periodMonths.value
  return [
    {
      key: 'partner',
      label: partnerShare.label,
      percent: partnerShare.percent,
      amount: formatCompactInr(partnerAmount),
      dotClass: 'bg-blue-600',
      highlight: true,
    },
    {
      key: 'platform',
      label: platformShare.label,
      percent: platformShare.percent,
      amount: formatCompactInr(platformAmount),
      dotClass: 'bg-blue-300',
      highlight: false,
    },
  ]
})

function formatInr(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

/** ₹ with L / Cr once past thousands (₹1L+). */
function formatCompactInr(value: number) {
  const abs = Math.abs(value)
  if (abs >= 1_00_00_000) {
    return `₹${trimAmount(value / 1_00_00_000)}Cr`
  }
  if (abs >= 1_00_000) {
    return `₹${trimAmount(value / 1_00_000)}L`
  }
  return formatInr(value)
}

function trimAmount(n: number) {
  return Number.parseFloat(n.toFixed(2)).toString()
}

function sliderPercent(value: number, min: number, max: number) {
  return `${((value - min) / (max - min)) * 100}%`
}

function onSliderInput(set: (v: number) => void, event: Event) {
  set(Number((event.target as HTMLInputElement).value))
}

function nudge(set: (v: number) => void, value: number, step: number, min: number, max: number, dir: -1 | 1) {
  set(Math.min(max, Math.max(min, value + dir * step)))
}
</script>

<template>
  <section id="revenue-calculator" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="revenue-calculator-heading">
    <div class="container-page">
      <CardHeader heading-id="revenue-calculator-heading" :badge="revenueCalculatorSection.kicker"
        :title="revenueCalculatorSection.title" :description="revenueCalculatorSection.description"
        :classes="revenueCalculatorSection.classes" />

      <div class="relative mt-10 overflow-hidden rounded-[28px] " v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="grid lg:grid-cols-12">
          <!-- Configure -->
          <div
            class="space-y-10 border-b border-slate-100 px-7 py-9 sm:px-10 sm:py-11 lg:col-span-5 lg:border-b-0 lg:border-r lg:border-slate-100">
            <h3 class="font-display text-lg font-bold text-slate-900">{{ configureTitle }}</h3>

            <div class="space-y-9">
              <div v-for="slider in sliders" :key="slider.id" class="space-y-3.5">
                <div class="flex items-end justify-between gap-4">
                  <label :for="slider.id" class="flex min-w-0 items-center gap-2.5 text-sm font-medium text-slate-600">
                    <Icon :icon="slider.iconMdi" class="h-[18px] w-[18px] shrink-0 text-blue-600" aria-hidden="true" />
                    <span class="truncate">{{ slider.label }}</span>
                  </label>
                  <div class="flex items-center gap-2">
                    <button type="button"
                      class="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      :aria-label="`Decrease ${slider.label}`"
                      @click="nudge(slider.set, slider.value, slider.step, slider.min, slider.max, -1)">
                      <Icon icon="mdi:minus" class="h-4 w-4" />
                    </button>
                    <span
                      class="min-w-[5rem] text-center font-display text-lg font-bold tabular-nums text-blue-600 sm:text-xl"
                      :key="`${slider.id}-${slider.value}`">
                      {{ slider.display }}
                    </span>
                    <button type="button"
                      class="grid h-8 w-8 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      :aria-label="`Increase ${slider.label}`"
                      @click="nudge(slider.set, slider.value, slider.step, slider.min, slider.max, 1)">
                      <Icon icon="mdi:plus" class="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <input :id="slider.id" type="range" :min="slider.min" :max="slider.max" :step="slider.step"
                  :value="slider.value" class="calc-range"
                  :style="{ '--fill': sliderPercent(slider.value, slider.min, slider.max) }"
                  @input="onSliderInput(slider.set, $event)" />
                <div class="flex justify-between text-xs font-medium text-slate-400">
                  <span>{{ slider.minLabel }}</span>
                  <span>{{ slider.maxLabel }}</span>
                </div>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-slate-400">
              Total potential {{ formatCompactInr(totalAnnual) }}. {{ note }}
            </p>
          </div>

          <!-- Results -->
          <div class="flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-11 lg:col-span-7">
            <div class="relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-white shadow-md" v-motion
              :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
              <!-- Card header -->
              <div
                class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-5 sm:px-7">
                <div class="flex items-center gap-3">
                  <span class="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600" aria-hidden="true">
                    <Icon icon="mdi:wallet-outline" class="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p class="text-sm font-semibold text-slate-900">Your projected earnings</p>
                    <p class="mt-0.5 text-xs text-slate-400">{{ subscriptionFormula }}</p>
                  </div>
                </div>
                <div class="inline-flex flex-wrap rounded-lg bg-slate-100 p-1" role="tablist" aria-label="Earnings period">
                  <button v-for="tab in periodTabs" :key="tab.id" type="button" role="tab"
                    :aria-selected="period === tab.id" :class="[
                      'rounded-md px-2.5 py-1.5 text-xs font-semibold transition sm:px-3.5 sm:text-sm',
                      period === tab.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700',
                    ]" @click="period = tab.id">
                    {{ tab.label }}
                  </button>
                </div>
              </div>

              <!-- Card body: donut + legend -->
              <div class="flex flex-col items-center gap-8 px-6 py-8 sm:flex-row sm:gap-10 sm:px-7">
                <!-- Donut -->
                <div class="relative shrink-0" aria-hidden="true">
                  <svg viewBox="0 0 200 200" class="h-44 w-44 -rotate-45">
                    <circle cx="100" cy="100" :r="DONUT_RADIUS" fill="none" stroke="#f1f5f9" stroke-width="40" />
                    <circle v-for="seg in donutSegments" :key="seg.key" cx="100" cy="100" :r="DONUT_RADIUS" fill="none"
                      :stroke="seg.color" stroke-width="40" stroke-linecap="butt" :stroke-dasharray="seg.dashArray"
                      :stroke-dashoffset="seg.dashOffset" class="donut-seg" />
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p :key="pulseKey"
                      class="font-display text-xl font-bold leading-none tabular-nums tracking-tight text-slate-900 hero-pulse">
                      90%
                    </p>
                  </div>
                </div>

                <!-- Legend + totals -->
                <div class="w-full min-w-0 flex-1">
                  <ul class="divide-y divide-slate-100">
                    <li v-for="row in legendRows" :key="row.key"
                      class="flex items-center justify-between gap-3 py-3 first:pt-0  px-4">
                      <div class="flex min-w-0 items-center gap-2.5">
                        <span class="h-2.5 w-2.5 shrink-0 rounded-full" :class="row.dotClass" aria-hidden="true" />
                        <span class="truncate text-sm font-medium text-slate-700">{{ row.label }}</span>
                        <span
                          class="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
                          {{ row.percent }}%
                        </span>
                      </div>
                      <p class="shrink-0 whitespace-nowrap text-right font-display text-sm font-bold tabular-nums"
                        :class="row.highlight ? 'text-emerald-600' : 'text-slate-500'">
                        {{ row.amount }}
                      </p>
                    </li>
                  </ul>
                  <div
                    class="flex items-center justify-between gap-4 border-t border-slate-600  bg-slate-50 px-4 py-3 ">
                    <span class="text-xs font-medium text-slate-500">Total revenue pool</span>
                    <span
                      class="whitespace-nowrap text-right font-display text-sm font-bold tabular-nums text-slate-700">
                      {{ formatCompactInr(totalRevenue) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.calc-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 9999px;
  background: linear-gradient(to right, #2563eb var(--fill, 0%), #e2e8f0 var(--fill, 0%));
  outline: none;
  cursor: pointer;
  transition: filter 0.15s ease;
}

.calc-range:hover {
  filter: brightness(1.05);
}

.calc-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: #2563eb;
  border: 3px solid #fff;
  box-shadow: 0 1px 4px rgb(37 99 235 / 35%);
  cursor: pointer;
  transition: transform 0.15s ease;
}

.calc-range:active::-webkit-slider-thumb {
  transform: scale(1.15);
}

.calc-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: #2563eb;
  border: 3px solid #fff;
  box-shadow: 0 1px 4px rgb(37 99 235 / 35%);
  cursor: pointer;
}

.donut-seg {
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
}

.hero-pulse {
  animation: hero-pulse 0.45s ease;
}

@keyframes hero-pulse {
  0% {
    transform: scale(0.98);
    opacity: 0.85;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
