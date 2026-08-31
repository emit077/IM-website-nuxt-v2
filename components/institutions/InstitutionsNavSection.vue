<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { institutionsQuickLinks } from '~/data/institutions'
</script>

<template>
  <section class="relative border-y border-slate-200/70 section-surface-muted section-py-compact" aria-label="Quick navigation">
    <div class="container-page">
      <p class="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        Explore recruitment services
      </p>

      <ul class="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-5" role="list">
        <li
          v-for="(link, i) in institutionsQuickLinks"
          :key="link.id"
          :class="i === institutionsQuickLinks.length - 1 ? 'col-span-2 sm:col-span-1' : ''"
          v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }"
        >
          <a
            :href="link.href"
            class="group flex h-full items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-soft"
          >
            <span
              class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
            >
              <Icon :icon="link.iconMdi" class="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span class="text-[13px] font-semibold leading-snug text-slate-800 group-hover:text-blue-700 sm:text-sm">
              {{ link.title }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
