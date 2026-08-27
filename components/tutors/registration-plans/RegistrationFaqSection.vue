<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import {
  planTermsSection,
  registrationFaqSection,
  registrationFaqs,
} from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="registration-faq" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="registration-faq-heading">
    <div class="container-page">
      <CardHeader heading-id="registration-faq-heading" :badge="registrationFaqSection.badge"
        :title="registrationFaqSection.title" :classes="registrationFaqSection.classes" />

      <div class="mx-auto mt-10 max-w-3xl space-y-3">
        <details v-for="(item, i) in registrationFaqs" :key="item.id"
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

  <section id="plan-terms" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="plan-terms-heading">
    <div class="container-page relative">
      <CardHeader heading-id="plan-terms-heading" :badge="planTermsSection.badge" :title="planTermsSection.title"
        :classes="planTermsSection.classes" />

      <div class="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-slate-200/80 bg-cream-50/60 p-6 shadow-soft sm:p-8"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <p class="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-700">
          <Icon icon="mdi:alert-circle-outline" class="h-4 w-4" aria-hidden="true" />
          {{ planTermsSection.noteLabel }}
        </p>
        <ul class="mt-5 space-y-3" role="list">
          <li v-for="point in planTermsSection.points" :key="point"
            class="flex items-start gap-3 text-[13.5px] leading-relaxed text-slate-700">
            <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
            {{ point }}
          </li>
        </ul>

        <div class="mt-8">
          <ActionBtn variant="secondary" :label="planTermsSection.cta.label" :href="planTermsSection.cta.href"
            icon="mdi:file-document-outline" />
        </div>
      </div>
    </div>
  </section>
</template>
