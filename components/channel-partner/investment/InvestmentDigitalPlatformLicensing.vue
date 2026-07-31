<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { platformLicenseSection } from '~/data/channel-partner-investment'

const { plans, vision } = platformLicenseSection
</script>

<template>
  <section id="platform-license-duration" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="platform-license-duration-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="platform-license-duration-heading" :badge="platformLicenseSection.kicker"
          :title="platformLicenseSection.title" :description="platformLicenseSection.description"
          :classes="platformLicenseSection.classes" />
      </div>

      <!-- 3-card compare UI -->
      <ul class="mx-auto mt-12 grid grid-cols-1 items-stretch gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-5 xl:gap-6"
        role="list">
        <li v-for="(plan, i) in plans" :id="`license-plan-${plan.id}`" :key="plan.id" class="flex scroll-mt-24" v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 90, duration: 500 } }">
          <article :class="[
            'group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] transition duration-300',
            plan.popular
              ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_28px_60px_-28px_rgba(37,99,235,0.65)] lg:scale-[1.03] lg:-my-2 ring-1 ring-blue-500/30'
              : 'border border-slate-200/80 bg-white shadow-soft hover:-translate-y-1 hover:border-blue-200 hover:shadow-card',
          ]">
            <!-- Header (matches License Duration Options reference) -->
            <div :class="[
              'relative border-b px-5 py-6 sm:px-6',
              plan.popular ? 'border-white/15' : 'border-slate-100',
            ]">
              <span v-if="plan.popular"
                class="absolute right-4 top-4 rounded-full bg-green-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-950">
                Popular
              </span>

              <div class="flex items-start gap-3">
                <span :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-2xl',
                  plan.popular
                    ? 'bg-white/15 text-white'
                    : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
                ]" aria-hidden="true">
                  <Icon :icon="plan.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0">
                  <h3 :class="[
                    'font-display text-3xl font-bold leading-none tracking-tight',
                    plan.popular ? 'text-white' : 'text-slate-900',
                  ]">
                    {{ plan.duration }}
                  </h3>
                  <p :class="[
                    'mt-1.5 text-sm font-semibold',
                    plan.popular ? 'text-blue-100' : 'text-slate-700',
                  ]">
                    {{ plan.name.replace(' Plan', '') }}
                  </p>
                </div>
              </div>
              <p :class="[
                'mt-3 text-sm leading-relaxed',
                plan.popular ? 'text-blue-50/90' : 'text-slate-500',
              ]">
                {{ plan.tagline }}
              </p>
            </div>

            <!-- Features -->
            <div class="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
              <p :class="[
                'text-[11px] font-bold  tracking-wide',
                plan.popular ? 'text-blue-100' : 'text-slate-500',
              ]">
                {{ plan.benefitsTitle }}
              </p>

              <ul class="mt-3 flex flex-1 flex-col gap-2.5" role="list">
                <li v-for="benefit in plan.benefits" :key="benefit.title" class="flex gap-2.5">
                  <span :class="[
                    'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full',
                    plan.popular
                      ? 'bg-white/15 text-white-300'
                      : 'bg-blue-50 text-blue-600',
                  ]" aria-hidden="true">
                    <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5" />
                  </span>
                  <div class="min-w-0">
                    <p :class="[
                      'text-[13px] font-semibold leading-snug',
                      plan.popular ? 'text-white' : 'text-slate-800',
                    ]">
                      {{ benefit.title }}
                    </p>
                    <p :class="[
                      'mt-0.5 text-xs leading-relaxed',
                      plan.popular ? 'text-blue-100/85' : 'text-slate-500',
                    ]">
                      {{ benefit.description }}
                    </p>
                  </div>
                </li>
              </ul>

              <!-- Ideal for -->
              <div :class="[
                'mt-5 rounded-2xl px-3.5 py-3',
                plan.popular
                  ? 'bg-white/10 ring-1 ring-white/15'
                  : 'border border-blue-100 bg-blue-50/50',
              ]">
                <p :class="[
                  'text-xs leading-relaxed',
                  plan.popular ? 'text-blue-50' : 'text-slate-700',
                ]">
                  <span :class="['font-semibold', plan.popular ? 'text-white' : 'text-slate-900']">
                    Ideal for:
                  </span>
                  {{ plan.idealFor }}
                </p>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <p
        class="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-2 text-center text-sm leading-relaxed text-slate-500">
        <Icon icon="solar:info-circle-bold-duotone" class="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
        {{ platformLicenseSection.note }}
      </p>
    </div>
  </section>
</template>
