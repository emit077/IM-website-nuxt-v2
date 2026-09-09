<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seAudience } from '~/data/special-educators'
</script>

<template>
  <section
    id="who-can-benefit"
    class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="se-audience-heading"
  >
    <div class="container-page">
      <CardHeader
        heading-id="se-audience-heading"
        :badge="seAudience.badge"
        :title="seAudience.title"
        :description="seAudience.description"
        :classes="seAudience.classes"
      />

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li
          v-for="(item, i) in seAudience.items"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 30, duration: 360 } }"
        >
          <article
            class="flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card"
          >
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true"
            >
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="font-display text-[13.5px] font-semibold leading-snug text-slate-900 sm:text-[14px]">
              {{ item.title }}
            </h3>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
