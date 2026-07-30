<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { whyChooseCommitments } from '~/data/why-choose'
</script>

<template>
  <section id="commitments" class="relative scroll-mt-28 bg-white section-py" aria-labelledby="commitments-heading">
    <div class="container-page">
      <CardHeader heading-id="commitments-heading" :badge="whyChooseCommitments.kicker"
        :title="whyChooseCommitments.title" :description="whyChooseCommitments.description"
        :classes="whyChooseCommitments.classes" />

      <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <!-- For Families — brand blue gradient -->
        <article
          class="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-10"
          v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/[0.06]" />

          <span
            class="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm"
            aria-hidden="true">
            <Icon :icon="whyChooseCommitments.parents.iconMdi" class="h-5 w-5" />
          </span>

          <p class="relative mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100/80">
            {{ whyChooseCommitments.parents.label }}
          </p>

          <h3
            class="relative mt-3 max-w-sm font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.15rem]"
            v-html="whyChooseCommitments.parents.titleHtml" />

          <p class="relative mt-4 max-w-md text-[15px] leading-relaxed text-blue-100">
            {{ whyChooseCommitments.parents.description }}
          </p>

          <ul class="relative mt-8 space-y-3.5" role="list">
            <li v-for="item in whyChooseCommitments.parents.items" :key="item"
              class="flex items-center gap-3 text-[15px] font-medium text-white">
              <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>

        <!-- For Students — brand light surface -->
        <article
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
            <Icon :icon="whyChooseCommitments.students.iconMdi" class="h-5 w-5" />
          </span>

          <p class="relative mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
            {{ whyChooseCommitments.students.label }}
          </p>

          <h3
            class="relative mt-3 max-w-sm font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-[2.15rem]"
            v-html="whyChooseCommitments.students.titleHtml" />

          <p class="relative mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
            {{ whyChooseCommitments.students.description }}
          </p>

          <ul class="relative mt-8 space-y-3.5" role="list">
            <li v-for="item in whyChooseCommitments.students.items" :key="item"
              class="flex items-center gap-3 text-[15px] font-medium text-slate-800">
              <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
