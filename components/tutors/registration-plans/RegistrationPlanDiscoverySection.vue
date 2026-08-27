<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { planDiscoverySection, registrationPlanCards } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="plan-discovery" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="plan-discovery-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="plan-discovery-heading" :badge="planDiscoverySection.badge"
        :title="planDiscoverySection.title" :description="planDiscoverySection.description"
        :classes="planDiscoverySection.classes" />

      <div class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
        <article v-for="(plan, i) in registrationPlanCards" :key="plan.id" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 100, duration: 500 } }">
          <div :class="[
            'relative flex h-full flex-col rounded-[1.75rem] p-6 sm:p-8',
            plan.variant === 'featured'
              ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)]'
              : 'border border-slate-200/80 bg-cream-50/60 shadow-soft',
          ]">
            <span v-if="plan.badge"
              class="absolute -top-3 right-6 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-900">
              {{ plan.badge }}
            </span>

            <span :class="[
              'grid h-12 w-12 place-items-center rounded-2xl',
              plan.variant === 'featured' ? 'bg-white/15 text-white' : 'bg-white text-blue-600 ring-1 ring-blue-100',
            ]" aria-hidden="true">
              <Icon :icon="plan.iconMdi" class="h-6 w-6" />
            </span>

            <h3 class="mt-5 font-display text-xl font-extrabold">{{ plan.name }}</h3>

            <p class="mt-3 font-display text-4xl font-extrabold tracking-tight">
              {{ plan.price }}
              <span v-if="plan.priceNote"
                :class="['ml-1 text-base font-semibold', plan.variant === 'featured' ? 'text-blue-100' : 'text-slate-500']">
                {{ plan.priceNote }}
              </span>
            </p>

            <p
              :class="['mt-4 flex-1 text-[13.5px] leading-relaxed', plan.variant === 'featured' ? 'text-blue-50' : 'text-slate-600']">
              {{ plan.description }}
            </p>

            <p :class="[
              'mt-6 rounded-2xl px-4 py-3 text-[13px] leading-relaxed',
              plan.variant === 'featured' ? 'bg-white/10 text-blue-50' : 'bg-white text-slate-600 ring-1 ring-slate-200/80',
            ]">
              <span
                :class="['font-bold uppercase tracking-[0.08em]', plan.variant === 'featured' ? 'text-amber-200' : 'text-blue-600']">
                {{ plan.bestForLabel }}:
              </span>
              {{ plan.bestFor }}
            </p>

            <a :href="plan.cta.href" :class="[
              'group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              plan.variant === 'featured'
                ? 'bg-white text-blue-700 hover:bg-cream-50'
                : 'bg-blue-600 text-white shadow-cta hover:bg-blue-700',
            ]">
              {{ plan.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
