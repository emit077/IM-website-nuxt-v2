<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { revenueCalculatorSection } from '~/data/channel-partner-investment'

const {
  students: studentsCfg,
  subscriptionFee: subCfg,
  registrationFee: regCfg,
  subscriptionPartnerShare,
  registrationPartnerShare,
  configureTitle,
  note,
} = revenueCalculatorSection

type Period = 'monthly' | 'annual'

const studentCount = ref(studentsCfg.default)
const subscriptionFee = ref(subCfg.default)
const registrationFee = ref(regCfg.default)
const period = ref<Period>('annual')
const pulseKey = ref(0)

const subShare = subscriptionPartnerShare / 100
const regShare = registrationPartnerShare / 100

const subscriptionMonthlyTotal = computed(() => studentCount.value * subscriptionFee.value)
const subscriptionPartnerMonthly = computed(() => Math.round(subscriptionMonthlyTotal.value * subShare))

const registrationTotal = computed(() => studentCount.value * registrationFee.value)
const registrationPartner = computed(() => Math.round(registrationTotal.value * regShare))

const subscriptionPartnerAnnual = computed(() => subscriptionPartnerMonthly.value * 12)
const partnerCombinedAnnual = computed(() => subscriptionPartnerAnnual.value + registrationPartner.value)
const partnerCombinedMonthly = computed(
  () => subscriptionPartnerMonthly.value + Math.round(registrationPartner.value / 12),
)
const totalAnnual = computed(() => subscriptionMonthlyTotal.value * 12 + registrationTotal.value)

const heroAmount = computed(() =>
  period.value === 'annual' ? partnerCombinedAnnual.value : partnerCombinedMonthly.value,
)

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

const mixTotal = computed(() => Math.max(partnerCombinedAnnual.value, 1))
const subMixPercent = computed(() =>
  Math.round((subscriptionPartnerAnnual.value / mixTotal.value) * 100),
)
const regMixPercent = computed(() => 100 - subMixPercent.value)

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
  {
    id: 'calc-reg-fee',
    label: regCfg.label,
    iconMdi: regCfg.iconMdi,
    value: registrationFee.value,
    display: formatInr(registrationFee.value),
    min: regCfg.min,
    max: regCfg.max,
    step: regCfg.step,
    minLabel: formatInr(regCfg.min),
    maxLabel: formatInr(regCfg.max),
    set: (v: number) => { registrationFee.value = v },
  },
])

const resultRows = computed(() => [
  {
    key: 'sub',
    title: 'Subscription',
    badge: 'Recurring',
    badgeClass: 'bg-blue-50 text-blue-700',
    iconMdi: 'mdi:calendar-month-outline',
    formula: `${studentCount.value} × ${formatInr(subscriptionFee.value)}/mo`,
    amount: formatInr(subscriptionPartnerMonthly.value),
    ofTotal: formatInr(subscriptionMonthlyTotal.value),
    share: subscriptionPartnerShare,
    barClass: 'bg-blue-500',
    barWidth: subscriptionPartnerShare,
  },
  {
    key: 'reg',
    title: 'Registration',
    badge: 'One-time',
    badgeClass: 'bg-amber-50 text-amber-700',
    iconMdi: 'mdi:clipboard-account-outline',
    formula: `${studentCount.value} × ${formatInr(registrationFee.value)}`,
    amount: formatInr(registrationPartner.value),
    ofTotal: formatInr(registrationTotal.value),
    share: registrationPartnerShare,
    barClass: 'bg-blue-500',
    barWidth: registrationPartnerShare,
  },
])

function formatInr(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatLakhs(value: number) {
  const lakhs = value / 100000
  if (lakhs >= 100) return `₹${(lakhs / 100).toFixed(1)}Cr`
  if (lakhs >= 1) return `₹${lakhs.toFixed(1)}L`
  return formatInr(value)
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
              Total potential {{ formatLakhs(totalAnnual) }}. {{ note }}
            </p>
          </div>

          <!-- Results -->
          <div class="flex flex-col justify-center gap-7 px-7 py-9 sm:px-10 sm:py-11 lg:col-span-7">
            <!-- Hero earnings -->
            <div
              class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-blue-700 to-indigo-800 px-6 py-8 text-white sm:px-8 sm:py-9">
              <div aria-hidden="true"
                class="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div aria-hidden="true"
                class="pointer-events-none absolute -bottom-12 left-10 h-32 w-32 rounded-full bg-emerald-300/15 blur-2xl" />

              <div class="relative flex flex-wrap items-center justify-between gap-4">
                <p class="text-sm font-semibold text-blue-100 sm:text-base">Your projected earnings</p>
                <div class="inline-flex rounded-full border border-white/15 bg-white/10 p-1" role="tablist"
                  aria-label="Earnings period">
                  <button v-for="tab in [
                    { id: 'monthly' as const, label: 'Monthly' },
                    { id: 'annual' as const, label: 'Annual' },
                  ]" :key="tab.id" type="button" role="tab" :aria-selected="period === tab.id" :class="[
                    'rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm',
                    period === tab.id ? 'bg-white text-[#1e3a8a] shadow-sm' : 'text-blue-100 hover:text-white',
                  ]" @click="period = tab.id">
                    {{ tab.label }}
                  </button>
                </div>
              </div>

              <p :key="pulseKey"
                class="relative mt-5 font-display text-4xl font-bold tabular-nums tracking-tight sm:text-5xl hero-pulse">
                {{ formatLakhs(displayHero) }}
              </p>
              <p class="relative mt-3 text-sm leading-relaxed text-blue-100/85">
                <template v-if="period === 'annual'">
                  Sub {{ formatLakhs(subscriptionPartnerAnnual) }}/yr + Reg {{ formatInr(registrationPartner) }}
                </template>
                <template v-else>
                  Sub {{ formatInr(subscriptionPartnerMonthly) }}/mo + Reg avg
                  {{ formatInr(Math.round(registrationPartner / 12)) }}/mo
                </template>
              </p>

              <div class="relative mt-7">
                <div class="mb-2.5 flex items-center justify-between text-xs font-semibold text-blue-100/90">
                  <span>Earnings mix</span>
                  <span>{{ subMixPercent }}% sub · {{ regMixPercent }}% reg</span>
                </div>
                <div class="flex h-3 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
                  <div class="h-full bg-sky-300 transition-all duration-500 ease-out"
                    :style="{ width: `${subMixPercent}%` }" />
                  <div class="h-full bg-emerald-300 transition-all duration-500 ease-out"
                    :style="{ width: `${regMixPercent}%` }" />
                </div>
              </div>
            </div>

            <!-- Stream cards -->
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div v-for="(row, i) in resultRows" :key="row.key"
                class="rounded-3xl border border-slate-200/80 bg-slate-50/40 p-5 transition duration-300 hover:border-blue-200 hover:bg-white hover:shadow-soft sm:p-6"
                v-motion :initial="{ opacity: 0, y: 10 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 60, duration: 400 } }">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div>
                      <p class="text-sm font-semibold text-slate-800 sm:text-base">{{ row.title }}</p>
                      <p class="mt-0.5 text-xs text-slate-400">{{ row.formula }}</p>
                    </div>
                  </div>
                  <span class="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    :class="row.badgeClass">
                    {{ row.badge }}
                  </span>
                </div>

                <p class="mt-5 font-display text-2xl font-bold tabular-nums text-emerald-600">
                  {{ row.amount }}
                </p>
                <p class="mt-1 text-xs text-slate-400 sm:text-sm">
                  your <b> {{ row.share }}% </b>of <b>{{ row.ofTotal }}</b>
                </p>

                <div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-200/80" aria-hidden="true">
                  <div class="h-full rounded-full transition-all duration-500 ease-out" :class="row.barClass"
                    :style="{ width: `${Math.max(row.barWidth, 8)}%` }" />
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
