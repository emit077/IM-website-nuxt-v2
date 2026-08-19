<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { subBuilder } from '~/data/subscription'

const route = useRoute()

type PlanId = (typeof subBuilder.plans)[number]['id']
type TenureId = (typeof subBuilder.tenures)[number]['id']
type PaymentId = (typeof subBuilder.payments)[number]['id']

const selectedPlan = ref<PlanId>('diamond')
const selectedTenure = ref<TenureId>('annual')
const selectedPayment = ref<PaymentId>('upfront')
const selectedInstallments = ref<2 | 3 | 4>(2)

function isPlanId(value: unknown): value is PlanId {
  return subBuilder.plans.some((plan) => plan.id === value)
}

function isTenureId(value: unknown): value is TenureId {
  return subBuilder.tenures.some((tenure) => tenure.id === value)
}

const plan = computed(() => subBuilder.plans.find((item) => item.id === selectedPlan.value)!)
const tenure = computed(() => subBuilder.tenures.find((item) => item.id === selectedTenure.value)!)
const isAnnual = computed(() => selectedTenure.value === 'annual')

const availablePayments = computed(() =>
  subBuilder.payments.filter((item) => !item.annualOnly || isAnnual.value),
)

watch(selectedTenure, (next) => {
  if (next !== 'annual' && selectedPayment.value !== 'upfront') {
    selectedPayment.value = 'upfront'
  }
})

const discount = computed(() => {
  if (!isAnnual.value) return '—'
  if (selectedPayment.value === 'emi') return 'As Applicable'
  if (selectedPayment.value === 'upfront') return '15% OFF'
  if (selectedInstallments.value === 2) return '10% OFF'
  if (selectedInstallments.value === 3) return '5% OFF'
  return 'No Discount'
})

const paymentLabel = computed(() => {
  if (selectedPayment.value === 'emi') return 'Eligible EMI'
  if (selectedPayment.value === 'upfront') return '1 Upfront Payment'
  return `${selectedInstallments.value} Installments`
})

watch(
  () => [route.query.plan, route.query.tenure] as const,
  ([planQuery, tenureQuery]) => {
    if (isPlanId(planQuery)) selectedPlan.value = planQuery
    if (isTenureId(tenureQuery)) selectedTenure.value = tenureQuery
  },
  { immediate: true },
)
</script>

<template>
  <section id="plan-builder" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-builder-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-builder-heading" :badge="subBuilder.badge" :title="subBuilder.title"
        :description="subBuilder.description" :classes="subBuilder.classes" />

      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] lg:gap-8">
        <div class="space-y-6">
          <fieldset class="rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 sm:p-6">
            <legend class="px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              01 — Learning Plan
            </legend>
            <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button v-for="item in subBuilder.plans" :key="item.id" type="button"
                :aria-pressed="selectedPlan === item.id" :class="[
                  'relative rounded-2xl border px-4 py-4 text-left transition',
                  selectedPlan === item.id
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20'
                    : 'border-slate-200 bg-white hover:border-blue-300',
                ]" @click="selectedPlan = item.id">
                <span v-if="item.popular"
                  class="absolute right-3 top-3 rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-white">
                  Popular
                </span>
                <span class="block font-display text-lg font-bold text-slate-900">{{ item.name }}</span>
                <span class="mt-1 block text-[12px] font-medium text-slate-500">{{ item.subtitle }}</span>
                <span class="mt-2 block text-[13px] font-semibold text-slate-700">{{ item.duration }}</span>
              </button>
            </div>
          </fieldset>

          <fieldset class="rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 sm:p-6">
            <legend class="px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              02 — Tenure
            </legend>
            <div class="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <button v-for="item in subBuilder.tenures" :key="item.id" type="button"
                :aria-pressed="selectedTenure === item.id" :class="[
                  'rounded-2xl border px-3 py-4 text-left transition',
                  selectedTenure === item.id
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20'
                    : 'border-slate-200 bg-white hover:border-blue-300',
                ]" @click="selectedTenure = item.id">
                <span class="block font-display text-base font-bold text-slate-900">{{ item.name }}</span>
                <span class="mt-1 block text-[12px] text-slate-500">{{ item.duration }}</span>
              </button>
            </div>
          </fieldset>

          <fieldset class="rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 sm:p-6">
            <legend class="px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              03 — Payment
            </legend>
            <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button v-for="item in availablePayments" :key="item.id" type="button"
                :aria-pressed="selectedPayment === item.id" :class="[
                  'rounded-2xl border px-4 py-4 text-left transition',
                  selectedPayment === item.id
                    ? 'border-blue-600 bg-white ring-2 ring-blue-600/20'
                    : 'border-slate-200 bg-white hover:border-blue-300',
                ]" @click="selectedPayment = item.id">
                <span class="block font-display text-base font-bold text-slate-900">{{ item.name }}</span>
                <span class="mt-1 block text-[12px] text-slate-500">{{ item.hint }}</span>
              </button>
            </div>

            <div v-if="isAnnual && selectedPayment === 'installment'" class="mt-4 grid grid-cols-3 gap-2">
              <button v-for="choice in subBuilder.installmentChoices" :key="choice.id" type="button"
                :aria-pressed="selectedInstallments === choice.id" :class="[
                  'rounded-xl border px-3 py-3 text-center text-[12px] font-semibold transition',
                  selectedInstallments === choice.id
                    ? 'border-blue-600 bg-blue-50 text-blue-800'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300',
                ]" @click="selectedInstallments = choice.id as 2 | 3 | 4">
                <span class="block">{{ choice.label }}</span>
                <span class="mt-1 block text-[11px] font-medium text-slate-500">{{ choice.discount }}</span>
              </button>
            </div>
          </fieldset>
        </div>

        <aside
          class="h-fit rounded-[1.65rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-6 text-white shadow-[0_22px_50px_-24px_rgba(29,78,216,0.55)] sm:p-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100">Your Selection</p>
          <p class="mt-4 font-display text-3xl font-bold">{{ plan.name }}</p>
          <p class="mt-1 text-sm text-blue-100">{{ plan.duration }}</p>
          <dl class="mt-6 space-y-3 border-t border-white/20 pt-5 text-sm">
            <div class="flex justify-between gap-3">
              <dt class="text-blue-100/80">Tenure</dt>
              <dd class="font-semibold">{{ tenure.name }} Subscription</dd>
            </div>
            <div class="flex justify-between gap-3">
              <dt class="text-blue-100/80">Payment</dt>
              <dd class="text-right font-semibold">{{ paymentLabel }}</dd>
            </div>
            <div class="flex justify-between gap-3">
              <dt class="text-blue-100/80">Applicable Discount</dt>
              <dd class="font-bold text-amber-200">{{ discount }}</dd>
            </div>
          </dl>
          <div class="mt-6">
            <ActionBtn variant="theme-secondary" :label="subBuilder.cta.label" :href="subBuilder.cta.href"
              icon="mdi:arrow-right" />
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
