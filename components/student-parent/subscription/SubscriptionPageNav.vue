<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { subNav } from '~/data/subscription'

const route = useRoute()
</script>

<template>
  <div class="sticky top-16 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md sm:top-[6.25rem] lg:top-[6.75rem]">
    <div class="container-page flex items-center gap-3 py-2.5">
      <nav class="min-w-0 flex-1 overflow-x-auto" aria-label="Subscription page sections">
        <ul class="flex items-center gap-1">
          <li v-for="link in subNav.links" :key="link.href">
            <a :href="link.href"
              :class="[
                'inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold transition sm:text-[13px]',
                route.hash === link.href || (!route.hash && link.href === '#overview')
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              ]">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
      <a :href="subNav.cta.href"
        class="hidden shrink-0 rounded-full bg-blue-600 px-4 py-2 text-[12px] font-bold text-white shadow-sm transition hover:bg-blue-700 sm:inline-flex">
        {{ subNav.cta.label }}
      </a>
    </div>
  </div>

  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
    <a :href="subNav.cta.href"
      class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-cta">
      <Icon icon="mdi:clipboard-check-outline" class="h-4 w-4" aria-hidden="true" />
      {{ subNav.cta.label }}
    </a>
  </div>
</template>
