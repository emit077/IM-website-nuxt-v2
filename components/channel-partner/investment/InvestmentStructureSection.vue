<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { investmentStructureSection, platformLicenseSection } from '~/data/channel-partner-investment'

const deposit = investmentStructureSection.components[0]
const license = investmentStructureSection.components[1]
</script>

<template>
  <section id="investment-structure" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="investment-structure-heading">
    <div class="container-page">
      <CardHeader heading-id="investment-structure-heading" :badge="investmentStructureSection.kicker"
        :title="investmentStructureSection.title" :description="investmentStructureSection.description"
        :classes="investmentStructureSection.classes" />

      <!-- Journey timeline -->
      <div class="relative mx-auto mt-14 ">
        <article
          class="mb-5 group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-3 -top-8 select-none font-display text-[8rem] font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-blue-100/70">
            01
          </span>
          <div class="relative flex items-start gap-4">
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 font-bold"
              aria-hidden="true">
              01
            </span>
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="font-display text-lg font-bold text-slate-900">{{ deposit.title }}</h3>
                <span
                  class="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-blue-700">
                  {{ deposit.tag }}
                </span>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ deposit.description }}</p>
            </div>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-3 -top-8 select-none font-display text-[8rem] font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-blue-100/70">
            02
          </span>
          <div class="relative flex items-start gap-4">
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 font-bold"
              aria-hidden="true">
              02
            </span>
            <div class="min-w-0 max-w-3xl">
              <div class="flex flex-wrap items-center gap-2 ">
                <h3 class="font-display text-lg font-bold text-slate-900">{{ license.title }}</h3>
                <span
                  class="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-blue-700">
                  {{ license.tag }}
                </span>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ platformLicenseSection.description }}</p>
            </div>
          </div>

          <!-- Plan options -->
          <p class="mt-6 text-xs font-bold uppercase tracking-wide text-slate-500">
            {{ platformLicenseSection.plansTitle }}
          </p>
          <ul class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
            <li v-for="plan in platformLicenseSection.plans" :key="plan.name">
              <div :class="[
                'relative flex h-full flex-col rounded-2xl p-4 transition duration-300 hover:-translate-y-1',
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-[0_18px_44px_-20px_rgba(37,99,235,0.55)]'
                  : 'border border-slate-200/80 bg-slate-50/50 hover:border-blue-200 hover:bg-white hover:shadow-soft',
              ]">
                <span v-if="plan.popular"
                  class="absolute right-3 top-3 rounded-full bg-green-400 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-blue-900">
                  Popular
                </span>
                <span :class="[
                  'grid h-9 w-9 place-items-center rounded-xl',
                  plan.popular ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
                ]" aria-hidden="true">
                  <Icon :icon="plan.iconMdi" class="h-5 w-5" />
                </span>
                <p
                  :class="['mt-3 font-display text-2xl font-bold leading-none', plan.popular ? 'text-white' : 'text-slate-900']">
                  {{ plan.duration }}
                </p>
                <p :class="['mt-1 text-sm font-semibold', plan.popular ? 'text-blue-100' : 'text-slate-700']">
                  {{ plan.name.replace(' Plan', '') }}
                </p>
                <p :class="['mt-2 text-xs leading-relaxed', plan.popular ? 'text-blue-50/90' : 'text-slate-500']">
                  {{ plan.description }}
                </p>
              </div>
            </li>
          </ul>

          <!-- Access includes -->
          <div class="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
            <h4 class="flex items-center gap-2 font-display text-sm font-bold text-slate-900">
              {{ platformLicenseSection.accessTitle }}
            </h4>
            <div class="mt-4 overflow-hidden rounded-xl ">
              <ul class="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2" role="list">
                <li v-for="(item, i) in platformLicenseSection.accessIncludes" :key="item.label" :class="[
                  'flex items-center gap-3 bg-white px-4 py-3 text-[13px] font-medium text-slate-700 transition hover:bg-blue-50/50',
                  i === platformLicenseSection.accessIncludes.length - 1 && platformLicenseSection.accessIncludes.length % 2 !== 0
                    ? 'sm:col-span-2'
                    : '',
                ]">
                  <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600"
                    aria-hidden="true">
                    <Icon :icon="item.iconMdi" class="h-[18px] w-[18px]" />
                  </span>
                  <span>{{ item.label }}</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <Icon icon="solar:info-circle-bold-duotone" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            {{ platformLicenseSection.note }}
          </p>
        </article>
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
        {{ investmentStructureSection.intro }}
      </p>
    </div>
  </section>
</template>
