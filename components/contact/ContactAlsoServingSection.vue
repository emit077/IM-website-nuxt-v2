<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { alsoServing } from '~/data/contact'

const zoneAccents: Record<string, string> = {
  north: 'bg-sky-50 text-sky-600 ring-sky-100',
  east: 'bg-amber-50 text-amber-600 ring-amber-100',
  west: 'bg-violet-50 text-violet-600 ring-violet-100',
  south: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  central: 'bg-rose-50 text-rose-600 ring-rose-100',
}
</script>

<template>
  <section
    id="also-serving"
    class="scroll-mt-24 border-b border-slate-200/70 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="also-serving-heading"
  >
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Service Network</span>
        <h2
          id="also-serving-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {{ alsoServing.title }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ alsoServing.intro }}
        </p>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ alsoServing.supporting }}
        </p>
      </div>

      <div class="mt-10 space-y-5">
        <article
          v-for="(zone, i) in alsoServing.zones"
          :key="zone.id"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 60, duration: 450 } }"
        >
          <div
            class="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6 lg:p-7"
          >
            <div class="flex items-center gap-3">
              <span
                :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1',
                  zoneAccents[zone.id],
                ]"
                aria-hidden="true"
              >
                <Icon :icon="zone.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">
                {{ zone.title }}
              </h3>
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="city in zone.cities"
                :key="city"
                class="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-[12px] font-medium text-slate-700 sm:text-[13px]"
              >
                {{ city }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
