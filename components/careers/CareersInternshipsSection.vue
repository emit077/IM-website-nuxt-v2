<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { internshipsSection } from '~/data/careers'
</script>

<template>
  <section
    id="internship-opportunities"
    class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="internships-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-indigo-100/30 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="internships-heading"
        :badge="internshipsSection.kicker"
        :title="internshipsSection.title"
        :classes="internshipsSection.classes"
      />

      <div class="mx-auto mt-8 max-w-3xl space-y-4">
        <p
          v-for="(paragraph, i) in internshipsSection.paragraphs"
          :key="i"
          class="text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 420 } }"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="mt-12 sm:mt-14">
        <CardHeader
          heading-id="internship-who-can-apply-heading"
          :badge="internshipsSection.whoCanApply.kicker"
          :title="internshipsSection.whoCanApply.title"
          :classes="internshipsSection.classes"
        />

        <ul class="mt-8 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li
            v-for="(item, i) in internshipsSection.whoCanApply.items"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }"
          >
            <article
              class="flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card"
            >
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="font-display text-[14.5px] font-semibold leading-snug text-slate-900 sm:text-[15px]">
                {{ item.title }}
              </h3>
            </article>
          </li>
        </ul>

        <p
          class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-center text-[13px] leading-relaxed text-slate-700 sm:text-sm"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: 80 } }"
        >
          {{ internshipsSection.whoCanApply.note }}
        </p>
      </div>

      <div class="mt-8 flex justify-center sm:mt-10">
        <a
          :href="internshipsSection.cta.href"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900"
        >
          <Icon icon="mdi:briefcase-plus-outline" class="h-5 w-5" aria-hidden="true" />
          {{ internshipsSection.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
