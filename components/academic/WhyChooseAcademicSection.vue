<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseAcademicSection } from '~/data/academic-coverage'
</script>

<template>
  <section
    id="why-choose-academic"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-choose-academic-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/35 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-sky-100/30 blur-3xl"
    />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader
          heading-id="why-choose-academic-heading"
          :badge="whyChooseAcademicSection.kicker"
          :title="whyChooseAcademicSection.title"
          :description="whyChooseAcademicSection.description"
          :classes="whyChooseAcademicSection.classes"
        />
      </div>

      <ul
        class="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 xl:grid-cols-4"
        role="list"
      >
        <li
          v-for="(feat, i) in whyChooseAcademicSection.features"
          :key="feat.title"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 380 } }"
        >
          <article
            class="group flex h-full items-start gap-3 rounded-[1.35rem] border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-5"
          >
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
              aria-hidden="true"
            >
              <Icon :icon="feat.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="pt-1.5 font-display text-[15px] font-bold leading-snug tracking-tight text-slate-900">
              {{ feat.title }}
            </h3>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
