<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { partnershipOpportunitiesSection, partnershipTiers } from '~/data/channel-partner'
</script>

<template>
  <section id="partnership-opportunities" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="partnership-opportunities-heading">
    <div class="container-page">
      <CardHeader heading-id="partnership-opportunities-heading" :badge="partnershipOpportunitiesSection.kicker"
        :title="partnershipOpportunitiesSection.title" :description="partnershipOpportunitiesSection.description"
        :classes="partnershipOpportunitiesSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-5 pt-5 lg:grid-cols-3 lg:gap-6 lg:pt-6">
        <article v-for="(tier, i) in partnershipTiers" :key="tier.id" :class="[
          'relative flex flex-col rounded-3xl transition duration-300 hover:-translate-y-1',
          tier.popular
            ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_24px_60px_-20px_rgba(37,99,235,0.5)] lg:-mt-2 lg:mb-2 lg:pt-0'
            : 'border border-slate-200/80 bg-white shadow-soft hover:border-blue-200 hover:shadow-card',
        ]" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 500 } }">
          <span v-if="tier.popular"
            class="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-md ring-4 ring-[#f8fafc]">
            Most Popular
          </span>

          <div class="flex flex-1 flex-col p-6 sm:p-7" :class="tier.popular ? 'pt-8' : ''">
            <span :class="[
              'grid h-12 w-12 place-items-center rounded-2xl',
              tier.popular ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
            ]" aria-hidden="true">
              <Icon :icon="tier.iconMdi" class="h-6 w-6" />
            </span>

            <h3 :class="[
              'mt-5 font-display text-xl font-bold',
              tier.popular ? 'text-white' : 'text-slate-900',
            ]">
              {{ tier.title }}
            </h3>
            <p :class="[
              'mt-2 text-sm leading-relaxed',
              tier.popular ? 'text-blue-100' : 'text-slate-600',
            ]">
              {{ tier.description }}
            </p>

            <div class="mt-6 flex-1">
              <p :class="[
                'text-xs font-bold uppercase tracking-wide',
                tier.popular ? 'text-blue-200' : 'text-slate-500',
              ]">
                Responsibilities include:
              </p>
              <ul class="mt-3 space-y-2.5" role="list">
                <li v-for="item in tier.responsibilities" :key="item" class="flex items-start gap-2.5 text-[13px]">
                  <IconCheck :class="[
                    'mt-0.5 h-4 w-4 shrink-0',
                    tier.popular ? 'text-white' : 'text-blue-600',
                  ]" />
                  <span :class="tier.popular ? 'text-blue-50' : 'text-slate-700'">{{ item }}</span>
                </li>
              </ul>
            </div>

            <a :href="tier.cta.href" :class="[
              'mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              tier.popular
                ? 'bg-white text-blue-700 shadow-lg hover:bg-blue-50'
                : 'bg-blue-600 text-white shadow-cta hover:bg-blue-700',
            ]">
              {{ tier.cta.label }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
