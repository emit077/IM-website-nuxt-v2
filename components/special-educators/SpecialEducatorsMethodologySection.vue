<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seMethodology } from '~/data/special-educators'

const accents = [
  { well: 'from-blue-50 to-indigo-50 text-blue-600 ring-blue-100', bar: 'bg-blue-500' },
  { well: 'from-sky-50 to-blue-50 text-sky-600 ring-sky-100', bar: 'bg-sky-500' },
  { well: 'from-indigo-50 to-violet-50 text-indigo-600 ring-indigo-100', bar: 'bg-indigo-500' },
  { well: 'from-violet-50 to-fuchsia-50 text-violet-600 ring-violet-100', bar: 'bg-violet-500' },
  { well: 'from-amber-50 to-orange-50 text-amber-600 ring-amber-100', bar: 'bg-amber-500' },
] as const
</script>

<template>
  <section id="teaching-methodology" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="se-methodology-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-12 bottom-6 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="se-methodology-heading" :badge="seMethodology.badge" :title="seMethodology.title"
        :description="seMethodology.description" :classes="seMethodology.classes" />

      <div class="relative mt-8 overflow-hidden  sm:mt-9 sm:p-5 lg:p-6">

        <div class="relative mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="flex items-end gap-3">
            <span class="font-display text-5xl font-black leading-none tracking-tight text-blue-600 sm:text-6xl">
              {{ seMethodology.items.length }}
            </span>
            <div class="pb-1">
              <p class="font-display text-[15px] font-bold leading-tight text-slate-900 sm:text-base">
                learner-centred practices
              </p>
              <p class="mt-0.5 text-[12.5px] leading-snug text-slate-500">
                Shaping every personalised learning plan
              </p>
            </div>
          </div>
        </div>

        <ol class="relative grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3" role="list">
          <li v-for="(item, i) in seMethodology.items" :key="item.title" class="min-w-0" v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 32, duration: 360 } }">
            <article
              class="method-tile group relative flex h-full items-center gap-3 overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-3.5 shadow-sm sm:p-4 lg:flex-col lg:items-stretch">
              <div class="relative flex shrink-0 items-center gap-2.5 lg:w-full lg:justify-between">
                <span class="font-display text-[11px] font-extrabold tabular-nums tracking-wide text-blue-600 lg:hidden"
                  aria-hidden="true">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ring-1 transition duration-300 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white group-hover:ring-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/25"
                  :class="accents[i % accents.length].well" aria-hidden="true">
                  <Icon :icon="item.iconMdi" class="h-5 w-5" />
                </span>
              </div>

              <div class="relative min-w-0 lg:mt-3">
                <h3 class="font-display text-[13.5px] font-bold leading-snug text-slate-900 sm:text-[14px]">
                  {{ item.title }}
                </h3>
                <p class="mt-1 line-clamp-2 text-[12px] leading-snug text-slate-500 sm:text-[12.5px]">
                  {{ item.description }}
                </p>
                <span aria-hidden="true"
                  class="mt-3 hidden h-1 w-5 rounded-full transition-all duration-300 group-hover:w-9 lg:block"
                  :class="accents[i % accents.length].bar" />
              </div>
            </article>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.method-tile {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.method-tile:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 32px -20px rgba(37, 99, 235, 0.4);
}

@media (prefers-reduced-motion: reduce) {
  .method-tile {
    transition: none;
  }

  .method-tile:hover {
    transform: none;
  }
}
</style>
