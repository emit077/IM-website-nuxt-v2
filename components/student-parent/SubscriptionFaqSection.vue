<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subFaqs } from '~/data/subscription'
</script>

<template>
  <section id="faqs" class="relative scroll-mt-36 overflow-hidden bg-white section-py lg:scroll-mt-44"
    aria-labelledby="sub-faq-heading">
    <div class="container-page">
      <CardHeader heading-id="sub-faq-heading" :badge="subFaqs.badge" :title="subFaqs.title"
        :classes="subFaqs.classes" />

      <div class="mx-auto mt-10 max-w-3xl space-y-3">
        <details v-for="(item, i) in subFaqs.items" :key="item.id"
          class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 open:border-blue-200 open:shadow-[0_16px_44px_-20px_rgba(37,99,235,0.2)] open:ring-1 open:ring-blue-100"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 380 } }">
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
