<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { emailSupport } from '~/data/contact'
</script>

<template>
  <section
    id="email"
    class="scroll-mt-24 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="email-heading"
  >
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <div
          class="rounded-3xl border border-slate-200/80 bg-white p-7 text-center shadow-soft sm:p-10"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        >
          <span
            class="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true"
          >
            <Icon icon="mdi:email-outline" class="h-6 w-6" />
          </span>
          <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            Email Support
          </p>
          <h2
            id="email-heading"
            class="font-display mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            {{ emailSupport.title }}
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {{ emailSupport.intro }}
          </p>

          <a
            :href="`mailto:${emailSupport.address}`"
            class="mt-6 inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-3.5 text-base font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 hover:shadow-soft"
          >
            <Icon icon="mdi:email-fast-outline" class="h-5 w-5 shrink-0" aria-hidden="true" />
            {{ emailSupport.address }}
          </a>

          <p class="mt-5 flex items-center justify-center gap-2 text-[13px] text-slate-500">
            <Icon icon="mdi:clock-check-outline" class="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
            {{ emailSupport.responseTime }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
