<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { hiringSectors, sectorsSection } from '~/data/institutions'
</script>

<template>
  <section id="who-we-help" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="sectors-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="sectors-heading" :badge="sectorsSection.badge" :title="sectorsSection.title"
        :description="sectorsSection.description" :classes="sectorsSection.classes" />

      <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <article v-for="(sector, i) in hiringSectors" :key="sector.id" :id="sector.id" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 4) * 60, duration: 420 } }">
          <div
            class="sector-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
            <div class="relative aspect-[16/10] overflow-hidden bg-[#eef4ff]">
              <img :src="usePublicAsset(sector.image)" :alt="`${sector.title} faculty recruitment`"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy"
                decoding="async" />
              <div
                class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-3.5 pb-3 pt-12">
                <h3 class="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                  {{ sector.title }}
                </h3>
              </div>
            </div>

            <div class="flex flex-1 flex-col p-5">
              <p class="mt-0.5 line-clamp-2 min-h-[2.6em] text-[13px] leading-snug text-slate-600">{{ sector.description }}</p>
              <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{{ sector.extraLabel }}
              </p>
              <p class="mt-2 line-clamp-2 text-[11px] font-semibold leading-relaxed text-slate-600">
                {{ sector.extras.join(' / ') }}
              </p>

              <!-- <a :href="sector.cta.href"
                class="group/cta mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800">
                {{ sector.cta.label }}
                <Icon icon="mdi:arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" aria-hidden="true" />
              </a> -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sector-card {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.sector-card:hover {
  transform: translateY(-4px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .sector-card {
    transition: none;
  }

  .sector-card:hover {
    transform: none;
  }
}
</style>
