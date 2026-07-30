<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { specialisedSupportCategories, specialisedSupportSection } from '~/data/services'
</script>

<template>
  <section id="specialised-support" class="relative scroll-mt-24 section-surface-muted section-py"
    aria-labelledby="specialised-support-heading">
    <div class="container-page">
      <CardHeader heading-id="specialised-support-heading" :badge="specialisedSupportSection.kicker"
        :title="specialisedSupportSection.title" :description="specialisedSupportSection.description"
        :classes="specialisedSupportSection.classes" />

      <div class="mx-auto mt-10 max-w-4xl space-y-3">
        <details v-for="(cat, i) in specialisedSupportCategories" :key="cat.id"
          class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 open:border-blue-200 open:shadow-[0_16px_44px_-20px_rgba(37,99,235,0.2)] open:ring-1 open:ring-blue-100"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <summary
            class="flex cursor-pointer list-none items-center gap-3.5 px-4 py-4 text-left transition-colors hover:bg-cream-50/80 sm:px-5 sm:py-[1.125rem] [&::-webkit-details-marker]:hidden">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-open:bg-blue-600 group-open:text-white">
              <Icon :icon="cat.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-display text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
                {{ cat.title }}
              </span>
              <span class="mt-0.5 block text-[12.5px] text-slate-500 sm:text-[13px]">{{ cat.description }}</span>
            </span>
            <span
              class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-500 ring-1 ring-slate-200 transition duration-300 group-open:rotate-45 group-open:bg-blue-600 group-open:text-white group-open:ring-blue-600"
              aria-hidden="true">
              <Icon icon="mdi:plus" class="h-4 w-4" />
            </span>
          </summary>
          <div class="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
            <p class="text-[12px] font-bold uppercase tracking-[0.14em] text-slate-500">Support may include</p>
            <ul class="mt-3 grid gap-2 sm:grid-cols-2" role="list">
              <li v-for="item in cat.supportMayInclude" :key="item"
                class="flex items-start gap-2 text-[13.5px] leading-snug text-slate-700">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </details>
      </div>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-200/80 bg-amber-50/80 px-5 py-4 text-center text-[13px] leading-relaxed text-amber-900 sm:text-sm">
        {{ specialisedSupportSection.note }}
      </p>
    </div>
  </section>
</template>
