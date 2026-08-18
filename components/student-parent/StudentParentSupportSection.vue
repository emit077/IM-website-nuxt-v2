<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spSupport } from '~/data/student-parent'
</script>

<template>
  <section id="support-center" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="support-heading">
    <div class="container-page relative">
      <CardHeader heading-id="support-heading" :badge="spSupport.badge" :title="spSupport.title"
        :description="spSupport.description" :classes="spSupport.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(option, i) in spSupport.options" :key="option.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <a :href="option.href" :target="option.href.startsWith('http') ? '_blank' : undefined"
            :rel="option.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="group flex h-full flex-col rounded-[1.15rem] border border-slate-200/80 bg-white p-6 no-underline shadow-[0_10px_30px_-18px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span class="grid h-10 w-10 place-items-center rounded-[0.7rem] bg-blue-50 text-blue-600"
              aria-hidden="true">
              <Icon :icon="option.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-5 font-display text-lg font-bold text-slate-900">{{ option.title }}</h3>
            <p class="mt-2 text-[14px] leading-relaxed text-slate-500">{{ option.description }}</p>
          </a>
        </li>

        <li v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 230, duration: 400 } }">
          <article
            class="flex h-full flex-col justify-between rounded-[1.15rem] bg-[#2563eb] p-6 text-white shadow-[0_16px_36px_-18px_rgba(37,99,235,0.55)] sm:p-7">
            <div>
              <h3 class="font-display text-lg font-bold">{{ spSupport.ctaCard.title }}</h3>
              <p class="mt-2 text-[14px] leading-relaxed text-blue-100">{{ spSupport.ctaCard.description }}</p>
            </div>
            <a :href="spSupport.ctaCard.href"
              class="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5">
              {{ spSupport.ctaCard.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
