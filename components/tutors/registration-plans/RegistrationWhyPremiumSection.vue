<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { premiumValueSection, whyPremiumSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="why-premium" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-premium-heading">
    <div class="container-page relative">
      <CardHeader heading-id="why-premium-heading" :badge="whyPremiumSection.badge" :title="whyPremiumSection.title"
        :description="whyPremiumSection.description" :classes="whyPremiumSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list">
        <li v-for="(item, i) in whyPremiumSection.advantages" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-extrabold leading-none text-blue-600/[0.07]"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span
              class="relative grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="relative mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="relative mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-[14px] font-semibold leading-relaxed text-blue-900">
        {{ whyPremiumSection.keyMessage }}
      </p>
    </div>
  </section>

  <section id="premium-value" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="premium-value-heading">
    <div class="container-page relative">
      <article
        class="value-banner relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8 lg:p-10"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <!-- <span aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" /> -->

        <div class="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            <CardHeader theme="dark" align="left" heading-id="premium-value-heading" :badge="premiumValueSection.badge"
              :title="premiumValueSection.title" :description="premiumValueSection.description"
              :classes="premiumValueSection.classes" />

            <div class="mt-8 flex items-baseline gap-3">
              <p class="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                {{ premiumValueSection.price }}
              </p>
              <p class="text-lg font-semibold text-blue-100">{{ premiumValueSection.pricePeriod }}</p>
            </div>

            <ul class="mt-4 flex flex-wrap gap-2" role="list">
              <li v-for="item in premiumValueSection.breakdown" :key="item.label" :class="[
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold',
                item.featured
                  ? 'bg-white text-blue-700'
                  : 'bg-white/10 text-blue-50 ring-1 ring-white/15',
              ]">
                {{ item.value }}
                <span class="text-[10px] font-bold uppercase tracking-[0.12em] opacity-80">{{ item.label }}</span>
              </li>
            </ul>

            <div class="mt-7">
              <a :href="premiumValueSection.cta.href"
                class="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-cream-50 sm:w-auto">
                <Icon icon="mdi:star-four-points-outline" class="h-4 w-4" aria-hidden="true" />
                {{ premiumValueSection.cta.label }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </a>
            </div>
          </div>

          <div class="lg:col-span-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/80">
              {{ premiumValueSection.valueChainLabel }}
            </p>
            <ol class="relative mt-4 space-y-3" role="list">
              <span aria-hidden="true" class="pointer-events-none absolute left-6 top-6 bottom-6 w-px bg-white/20" />
              <li v-for="(step, i) in premiumValueSection.valueChain" :key="step.label" v-motion
                :initial="{ opacity: 0, x: 12 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 80 + i * 70, duration: 400 } }">
                <article :class="[
                  'value-step group relative flex items-center gap-3.5 rounded-2xl p-3.5 sm:gap-4 sm:p-4',
                  i === 0
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'bg-white/10 ring-1 ring-white/15',
                ]">
                  <span :class="[
                    'relative z-[1] grid h-11 w-11 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12',
                    i === 0
                      ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                      : 'bg-white/15 text-white ring-1 ring-white/20',
                  ]" aria-hidden="true">
                    <Icon :icon="step.iconMdi" class="h-5 w-5" />
                  </span>
                  <div class="min-w-0 flex-1">
                    <p :class="[
                      'text-[10.5px] font-bold uppercase tracking-[0.14em]',
                      i === 0 ? 'text-blue-600' : 'text-blue-100/80',
                    ]">
                      Step {{ String(i + 1).padStart(2, '0') }}
                    </p>
                    <p :class="[
                      'mt-0.5 font-display text-[15px] font-bold leading-snug sm:text-base  text-title',
                      i === 0 ? 'text-slate-900' : 'text-white',
                    ]">
                      {{ step.label }}
                    </p>
                  </div>
                </article>
              </li>
            </ol>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.value-banner {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.value-step {
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.3s ease;
}

.value-step:hover {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {

  .value-banner,
  .value-step {
    transition: none;
  }

  .value-step:hover {
    transform: none;
  }
}
</style>
