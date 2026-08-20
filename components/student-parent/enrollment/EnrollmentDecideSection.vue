<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { enrollmentChoose, enrollmentNeeds, enrollmentValue } from '~/data/student-parent'
</script>

<template>
  <section id="student-needs" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="needs-heading">
    <div class="container-page relative">
      <CardHeader heading-id="needs-heading" :badge="enrollmentNeeds.badge" :title="enrollmentNeeds.title"
        :classes="enrollmentNeeds.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(item, i) in enrollmentNeeds.items" :key="item.id" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <article :class="[
            'flex h-full flex-col rounded-[1.5rem] p-6 shadow-soft sm:p-7',
            item.featured
              ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_22px_50px_-24px_rgba(29,78,216,0.5)]'
              : 'border border-slate-200/80 bg-white',
          ]">
            <span :class="[
              'grid h-11 w-11 place-items-center rounded-2xl',
              item.featured ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100',
            ]" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <p :class="[
              'mt-5 text-[11px] font-bold uppercase tracking-[0.16em]',
              item.featured ? 'text-blue-100' : 'text-blue-600',
            ]">
              {{ item.name }}
            </p>
            <h3 class="mt-2 font-display text-xl font-bold">{{ item.plan }}</h3>
            <p
              :class="['mt-3 flex-1 text-[13.5px] leading-relaxed', item.featured ? 'text-blue-50' : 'text-slate-600']">
              {{ item.description }}
            </p>
            <p :class="[
              'mt-5 text-[12px] font-bold uppercase tracking-[0.08em]',
              item.featured ? 'text-amber-200' : 'text-blue-600',
            ]">
              Your Goal: {{ item.goal }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section id="premium-value" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="value-heading">
    <div class="container-page relative">
      <CardHeader heading-id="value-heading" align="left" :badge="enrollmentValue.badge" :title="enrollmentValue.title"
        :description="enrollmentValue.description" :classes="enrollmentValue.classes" />

      <div class="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <aside class="lg:sticky lg:top-32 lg:col-span-4" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {{ enrollmentValue.planLabel }}
          </p>
          <p class="mt-3 font-display text-6xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            {{ enrollmentValue.hookPrice }}
          </p>
          <p class="mt-1 text-lg font-semibold text-slate-500">{{ enrollmentValue.hookPeriod }}</p>
          <p class="mt-2 text-sm font-medium text-slate-400">{{ enrollmentValue.billingNote }}</p>
          <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-slate-600">{{ enrollmentValue.card }}</p>
          <div class="mt-8">
            <ActionBtn variant="primary" :label="enrollmentValue.cta.label" :href="enrollmentValue.cta.href"
              icon="mdi:star-four-points-outline" />
          </div>
        </aside>

        <ol class="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8" role="list">
          <li v-for="(item, i) in enrollmentValue.highlights" :key="item.title" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
            <article
              class="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-cream-50/50 p-5 sm:p-4">
              <span
                class="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-extrabold leading-none text-blue-600/[0.08]"
                aria-hidden="true">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span
                class="relative grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="relative mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
              <p class="relative mt-2 line-clamp-2 min-h-[2.75em] text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <section id="choose-plan" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="choose-heading">
    <div class="container-page relative">
      <CardHeader heading-id="choose-heading" :badge="enrollmentChoose.badge" :title="enrollmentChoose.title"
        :classes="enrollmentChoose.classes" />

      <div class="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article class="flex flex-col rounded-[1.75rem] border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <h3 class="font-display text-2xl font-extrabold text-slate-900">{{ enrollmentChoose.free.title }}</h3>
          <ul class="mt-6 flex-1 space-y-3" role="list">
            <li v-for="item in enrollmentChoose.free.items" :key="item"
              class="flex items-start gap-2.5 text-[14px] font-medium text-slate-800">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="enrollmentChoose.free.cta.href"
            class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-fit">
            {{ enrollmentChoose.free.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article
          class="flex flex-col rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-10"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 450 } }">
          <h3 class="font-display text-2xl font-extrabold">{{ enrollmentChoose.premium.title }}</h3>
          <ul class="mt-6 flex-1 space-y-3" role="list">
            <li v-for="item in enrollmentChoose.premium.items" :key="item"
              class="flex items-start gap-2.5 text-[14px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="enrollmentChoose.premium.cta.href"
            class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-cream-50 sm:w-fit">
            {{ enrollmentChoose.premium.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
