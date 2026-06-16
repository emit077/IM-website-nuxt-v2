<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { continuousExpansion } from '~/data/contact'
</script>

<template>
  <section class="border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="expansion-heading">
    <div class="container-page">
      <div
        class="overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-soft sm:p-8 lg:p-10"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="mx-auto max-w-3xl text-center">
          <span
            class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-[0_12px_28px_-12px_rgba(37,99,235,0.55)]"
            aria-hidden="true"
          >
            <Icon icon="mdi:earth" class="h-6 w-6" />
          </span>
          <h2
            id="expansion-heading"
            class="font-display mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            {{ continuousExpansion.title }}
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {{ continuousExpansion.intro }}
          </p>
        </div>

        <div class="mx-auto mt-8 max-w-2xl">
          <p class="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
            {{ continuousExpansion.standardsLabel }}
          </p>
          <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li
              v-for="standard in continuousExpansion.standards"
              :key="standard"
              class="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3.5"
            >
              <IconCheck class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <span class="text-sm font-medium text-slate-700">{{ standard }}</span>
            </li>
          </ul>
        </div>

        <p class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ continuousExpansion.closing }}
        </p>
      </div>
    </div>
  </section>
</template>
