<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { enrollmentFaqs, enrollmentTerms } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-terms" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="terms-heading">
    <div class="container-page relative">
      <CardHeader heading-id="terms-heading" :badge="enrollmentTerms.badge" :title="enrollmentTerms.title"
        :classes="enrollmentTerms.classes" />

      <ul class="mx-auto mt-10 max-w-3xl space-y-4" role="list">
        <li v-for="(item, i) in enrollmentTerms.items" :key="i" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article class="flex gap-4 rounded-[1.35rem] border border-slate-200/80 bg-cream-50/60 p-5 shadow-soft sm:p-6">
            <span
              class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 font-display text-sm font-bold text-blue-700 ring-1 ring-blue-100"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <p class="text-[14px] leading-relaxed text-slate-600">{{ item }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section id="enrollment-faqs" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="enrollment-faq-heading">
    <div class="container-page">
      <CardHeader heading-id="enrollment-faq-heading" :badge="enrollmentFaqs.badge" :title="enrollmentFaqs.title"
        :classes="enrollmentFaqs.classes" />

      <div class="mx-auto mt-10 max-w-3xl space-y-3">
        <details v-for="(item, i) in enrollmentFaqs.items" :key="item.id"
          class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 open:border-blue-200 open:shadow-[0_16px_44px_-20px_rgba(37,99,235,0.2)] open:ring-1 open:ring-blue-100"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-cream-50/80 sm:px-5 sm:py-[1.125rem] [&::-webkit-details-marker]:hidden">
            <span class="font-display text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
              {{ item.question }}
            </span>
            <span
              class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-open:rotate-45 group-open:bg-blue-600 group-open:text-white"
              aria-hidden="true">
              <Icon icon="mdi:plus" class="h-4 w-4" />
            </span>
          </summary>
          <div class="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
            <p class="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {{ item.answer }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>
