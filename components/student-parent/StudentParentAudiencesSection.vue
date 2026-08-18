<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { spAudiences } from '~/data/student-parent'
</script>

<template>
  <section id="audiences" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="audiences-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="audiences-heading" :badge="spAudiences.badge" :title="spAudiences.title"
        :classes="spAudiences.classes" />

      <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article :id="spAudiences.students.id"
          class="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-10"
          v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

          <span
            class="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm"
            aria-hidden="true">
            <Icon :icon="spAudiences.students.iconMdi" class="h-5 w-5" />
          </span>
          <p class="relative mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100/80">
            {{ spAudiences.students.label }}
          </p>
          <h3 class="relative mt-3 max-w-md font-display text-2xl font-extrabold leading-[1.2] tracking-tight sm:text-[1.85rem]">
            {{ spAudiences.students.title }}
          </h3>
          <p class="relative mt-4 max-w-md text-[15px] leading-relaxed text-blue-100">
            {{ spAudiences.students.description }}
          </p>
          <p class="relative mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-200">
            {{ spAudiences.students.benefitsLabel }}
          </p>
          <ul class="relative mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="item in spAudiences.students.benefits" :key="item"
              class="flex items-start gap-2 text-[13.5px] font-medium text-white">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="spAudiences.students.cta.href"
            class="relative mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-cream-50">
            {{ spAudiences.students.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </article>

        <article :id="spAudiences.parents.id"
          class="relative flex flex-col overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-white via-cream-50 to-blue-50 p-8 shadow-[0_24px_60px_-28px_rgba(29,78,216,0.22)] sm:p-10"
          v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 90, duration: 480 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-indigo-200/25 blur-3xl" />

          <span
            class="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true">
            <Icon :icon="spAudiences.parents.iconMdi" class="h-5 w-5" />
          </span>
          <p class="relative mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
            {{ spAudiences.parents.label }}
          </p>
          <h3
            class="relative mt-3 max-w-md font-display text-2xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[1.85rem]">
            {{ spAudiences.parents.title }}
          </h3>
          <p class="relative mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
            {{ spAudiences.parents.description }}
          </p>
          <p class="relative mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            {{ spAudiences.parents.benefitsLabel }}
          </p>
          <ul class="relative mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="item in spAudiences.parents.benefits" :key="item"
              class="flex items-start gap-2 text-[13.5px] font-medium text-slate-800">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <a :href="spAudiences.parents.cta.href"
            class="relative mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700">
            {{ spAudiences.parents.cta.label }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
