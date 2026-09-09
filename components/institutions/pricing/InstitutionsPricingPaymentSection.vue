<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  institutionsPaymentOptions,
  institutionsPaymentSection,
} from '~/data/institutions-pricing'
</script>

<template>
  <section id="payment-structure" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="payment-structure-heading">
    <div class="container-page relative">
      <CardHeader heading-id="payment-structure-heading" :badge="institutionsPaymentSection.badge"
        :title="institutionsPaymentSection.title" :description="institutionsPaymentSection.description"
        :classes="institutionsPaymentSection.classes" />

      <ul class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2 sm:gap-5" role="list">
        <li v-for="(option, i) in institutionsPaymentOptions" :id="option.id" :key="option.id" v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }">
          <article :class="[
            'relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-6 sm:p-7',
            option.preferred
              ? 'bg-blue-700 text-white shadow-[0_24px_50px_-20px_rgba(29,78,216,0.45)]'
              : 'border border-slate-200/80 bg-white shadow-soft',
          ]">
            <span v-if="option.preferred"
              class="absolute right-0 top-5 rounded-l-md bg-amber-300 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-900">
              Preferred
            </span>
            <p :class="['text-[11px] font-bold uppercase tracking-[0.14em]', option.preferred ? 'text-amber-200' : 'text-blue-700']">
              {{ option.option }}
            </p>
            <div class="mt-3 flex items-center gap-3 pr-20">
              <span :class="[
                'grid h-10 w-10 shrink-0 place-items-center rounded-2xl',
                option.preferred ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
              ]" aria-hidden="true">
                <Icon :icon="option.iconMdi" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-lg font-bold leading-snug sm:text-xl">{{ option.title }}</h3>
                <p :class="['text-[12px] font-semibold uppercase tracking-[0.08em]', option.preferred ? 'text-blue-100' : 'text-slate-400']">
                  {{ option.fit }}
                </p>
              </div>
            </div>
            <p :class="['mt-4 text-sm leading-relaxed', option.preferred ? 'text-blue-50' : 'text-slate-600']">
              {{ option.description }}
            </p>
            <ol class="mt-5 flex-1 space-y-2" role="list">
              <li v-for="(step, stepIndex) in option.steps" :key="step" class="flex items-start gap-2.5 text-[13.5px]">
                <span :class="[
                  'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold',
                  option.preferred ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600',
                ]">
                  {{ stepIndex + 1 }}
                </span>
                <span>{{ step }}</span>
              </li>
            </ol>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-sm leading-relaxed text-slate-700">
        {{ institutionsPaymentSection.preference }}
      </p>
    </div>
  </section>
</template>
