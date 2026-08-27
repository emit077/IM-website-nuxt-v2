<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { earningsSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="registration-earnings" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="registration-earnings-heading">
    <div class="container-page relative">
      <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5">
          <CardHeader align="left" heading-id="registration-earnings-heading" :badge="earningsSection.badge"
            :title="earningsSection.title" :description="earningsSection.description"
            :classes="earningsSection.classes" />

          <div class="mt-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
              {{ earningsSection.benefitsLabel }}
            </p>
            <ul class="mt-3 space-y-2.5" role="list">
              <li v-for="item in earningsSection.benefits" :key="item"
                class="flex items-start gap-2.5 text-[13.5px] font-medium text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="mt-7" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }">
            <ActionBtn variant="primary" :label="earningsSection.cta.label" :href="earningsSection.cta.href"
              icon="mdi:cash-multiple" />
          </div>

          <p class="mt-5 flex items-start gap-2.5 max-w-md text-[12.5px] leading-relaxed text-slate-500">
            <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {{ earningsSection.note }}
          </p>
        </div>

        <div class="lg:col-span-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{{ earningsSection.flowLabel }}</p>
          <ol class="mt-5 space-y-3" role="list" :aria-label="earningsSection.flowLabel">
            <li v-for="(step, i) in earningsSection.flow" :key="step.label" v-motion :initial="{ opacity: 0, y: 16 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 420 } }">
              <div :class="[
                'group flex items-center gap-4 rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5 sm:p-5',
                i === earningsSection.flow.length - 1
                  ? 'border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                  : 'border-slate-200/80 bg-cream-50/60 hover:border-blue-200 hover:bg-white',
              ]">
                <span :class="[
                  'grid h-12 w-12 shrink-0 place-items-center rounded-xl',
                  i === earningsSection.flow.length - 1
                    ? 'bg-white/15 text-white ring-1 ring-white/25'
                    : 'bg-white text-blue-600 ring-1 ring-blue-100',
                ]" aria-hidden="true">
                  <Icon :icon="step.iconMdi" class="h-6 w-6" />
                </span>
                <div class="min-w-0 flex-1">
                  <p :class="[
                    'text-[11px] font-bold uppercase tracking-[0.16em]',
                    i === earningsSection.flow.length - 1 ? 'text-blue-100' : 'text-blue-600',
                  ]">
                    Step {{ String(i + 1).padStart(2, '0') }}
                  </p>
                  <h3 :class="[
                    'mt-1 font-display text-[15.5px] font-bold leading-snug sm:text-[17px]',
                    i === earningsSection.flow.length - 1 ? 'text-white' : 'text-slate-900',
                  ]">
                    {{ step.label }}
                  </h3>
                </div>
                <Icon v-if="i < earningsSection.flow.length - 1" icon="mdi:arrow-down"
                  class="h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
