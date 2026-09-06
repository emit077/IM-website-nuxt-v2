<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { qualityChecks, qualitySection } from '~/data/institutions'
</script>

<template>
  <section id="quality-assurance" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="quality-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    <div class="container-page relative">
      <CardHeader heading-id="quality-heading" :badge="qualitySection.badge" :title="qualitySection.title"
        :description="qualitySection.description" :classes="qualitySection.classes" />

      <div class="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-7">
        <div class="relative lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <figure
            class="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-100 shadow-soft sm:min-h-[300px] lg:h-full lg:min-h-0">
            <img :src="usePublicAsset(qualitySection.image)" :alt="qualitySection.imageAlt"
              class="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
            <div aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
            <figcaption class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200">
                {{ qualitySection.imageCaption }}
              </p>
              <p class="mt-1.5 font-display text-lg font-bold leading-snug text-white sm:text-xl">
                {{ qualitySection.imageNote }}
              </p>
            </figcaption>
          </figure>
        </div>

        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7" role="list">
          <li v-for="(item, i) in qualityChecks" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 45, duration: 400 } }">
            <article
              class="quality-card group flex h-full items-start gap-3.5 rounded-[1.25rem] border border-slate-200/80 bg-white p-4 shadow-soft sm:p-5">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <div class="min-w-0">
                <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
        {{ qualitySection.disclaimer }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.quality-card {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.quality-card:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 36px -20px rgba(37, 99, 235, 0.35);
}

@media (prefers-reduced-motion: reduce) {
  .quality-card {
    transition: none;
  }

  .quality-card:hover {
    transform: none;
  }
}
</style>
