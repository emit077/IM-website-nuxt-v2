<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { platformLicenseSection } from '~/data/channel-partner-investment'
</script>

<template>
  <section id="platform-license" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="platform-license-heading">
    <div class="container-page">
      <CardHeader heading-id="platform-license-heading" :badge="platformLicenseSection.kicker"
        :title="platformLicenseSection.title" :description="platformLicenseSection.description"
        :classes="platformLicenseSection.classes" />
      <p class="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
        {{ platformLicenseSection.body }}
      </p>

      <div class="mt-10">
        <p class="text-center text-xs font-bold uppercase tracking-wide text-slate-500">
          {{ platformLicenseSection.plansTitle }}
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3" role="list">
          <li v-for="(plan, i) in platformLicenseSection.plans" :key="plan.name" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
            <article :class="[
              'relative flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1',
              plan.popular
                ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_24px_60px_-20px_rgba(37,99,235,0.5)]'
                : 'border border-slate-200/80 bg-white shadow-soft hover:border-blue-200 hover:shadow-card',
            ]">
              <span v-if="plan.popular"
                class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                Popular
              </span>
              <span :class="[
                'grid h-11 w-11 place-items-center rounded-2xl',
                plan.popular ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
              ]" aria-hidden="true">
                <Icon :icon="plan.iconMdi" class="h-5 w-5" />
              </span>
              <h3 :class="['mt-4 font-display text-lg font-bold', plan.popular ? 'text-white' : 'text-slate-900']">
                {{ plan.name }}
              </h3>
              <p :class="['mt-1 text-sm', plan.popular ? 'text-blue-100' : 'text-slate-500']">
                Duration: <span class="font-semibold">{{ plan.duration }}</span>
              </p>
              <p :class="[
                'mt-3 text-sm leading-relaxed',
                plan.popular ? 'text-blue-50/90' : 'text-slate-500',
              ]">
                {{ plan.description }}
              </p>
            </article>
          </li>
        </ul>
      </div>

      <div class="mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <h3 class="font-display text-lg font-bold text-slate-900">{{ platformLicenseSection.accessTitle }}</h3>
        <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="item in platformLicenseSection.accessIncludes" :key="item"
            class="flex items-start gap-2.5 text-[13.5px] text-slate-700 sm:text-sm">
            <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-600 text-white"
              aria-hidden="true">
              <IconCheck class="h-3 w-3" />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <p class="mt-6 text-sm text-slate-500">{{ platformLicenseSection.note }}</p>
      </div>
    </div>
  </section>
</template>
