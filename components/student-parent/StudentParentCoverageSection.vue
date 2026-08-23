<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spCoverage } from '~/data/student-parent'
</script>

<template>
  <section id="academic-coverage" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="coverage-heading">
    <div class="container-page relative">
      <CardHeader heading-id="coverage-heading" :badge="spCoverage.badge" :title="spCoverage.title"
        :classes="spCoverage.classes" />

      <p class="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
        {{ spCoverage.school.label }}
      </p>
      <ol class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(stage, i) in spCoverage.school.stages" :key="stage.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 shadow-soft">
            <div class="relative aspect-[5/4] overflow-hidden">
              <img :src="usePublicAsset(stage.image)" :alt="`${stage.title} — Indian Mentors`"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy"
                decoding="async" />
              <span class="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/5 to-transparent"
                aria-hidden="true" />
              <span
                class="absolute left-4 top-3 font-display text-2xl font-black tabular-nums text-white/90 [text-shadow:0_2px_10px_rgba(15,23,42,0.4)]">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-5">
              <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900">{{ stage.title }}</h3>
              <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ stage.description }}</p>
            </div>
          </article>
        </li>
      </ol>

      <NuxtLink :to="spCoverage.exploreHref"
        class="group relative mt-8 block overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white no-underline shadow-[0_20px_50px_-24px_rgba(29,78,216,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_56px_-22px_rgba(29,78,216,0.58)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
        :aria-label="`${spCoverage.beyond.title}. ${spCoverage.beyond.ctaLabel}`" v-motion
        :initial="{ opacity: 0, y: 14 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <span class="beyond-visual pointer-events-none absolute inset-y-0 right-0 w-[68%] sm:w-[58%] lg:w-[50%]"
          aria-hidden="true">
          <img :src="usePublicAsset(spCoverage.beyond.image)" alt=""
            class="h-full w-full object-cover object-[72%_center]  transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading="lazy" decoding="async" />
        </span>
        <span class="beyond-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

        <div
          class="relative z-[1] flex min-h-[14.5rem] flex-col justify-center p-6 sm:min-h-[15.5rem] sm:p-8 lg:max-w-[52%]">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/85">{{ spCoverage.beyond.label }}
          </p>
          <h3 class="mt-2 font-display text-xl font-extrabold sm:text-2xl">{{ spCoverage.beyond.title }}</h3>
          <p class="mt-3 max-w-xl text-[14px] leading-relaxed text-blue-50/95 sm:text-[15px]">
            {{ spCoverage.beyond.description }}
          </p>
          <span
            class="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition duration-300 group-hover:gap-2.5 group-hover:bg-cream-50">
            {{ spCoverage.beyond.ctaLabel }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.beyond-visual {
  overflow: hidden;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-image: linear-gradient(to right,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 16%,
      #000 36%,
      #000 100%);
  mask-image: linear-gradient(to right,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 16%,
      #000 36%,
      #000 100%);
}

.beyond-overlay {
  background: linear-gradient(90deg,
      #1d4ed8 0%,
      #1d4ed8 38%,
      rgba(37, 99, 235, 0.55) 58%,
      rgba(37, 99, 235, 0.16) 78%,
      transparent 100%);
}
</style>
