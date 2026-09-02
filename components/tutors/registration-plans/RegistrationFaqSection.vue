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
  <section id="plan-terms" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="plan-terms-heading">
    <div class="container-page relative">
      <CardHeader heading-id="plan-terms-heading" :badge="planTermsSection.badge" :title="planTermsSection.title"
        :classes="planTermsSection.classes" />

      <div class="mx-auto mt-10 rounded-2xl border border-slate-200/80 bg-cream-50/60 p-6 shadow-soft sm:p-8" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <p class="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
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

        <div class="mt-8 text-center">
          <ActionBtn variant="primary" :label="planTermsSection.cta.label" :href="planTermsSection.cta.href"
            icon="mdi:file-document-outline" />
        </div>
      </div>
    </div>
  </section>
</template>
