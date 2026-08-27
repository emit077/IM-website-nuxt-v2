<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorSubjects } from '~/data/tutors'

const items = tutorSubjects.items

function subjectList(subjects: string) {
  return subjects.split(' • ').map((s) => s.trim()).filter(Boolean)
}
</script>

<template>
  <section id="subjects" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="subjects-heading" :badge="tutorSubjects.badge" :title="tutorSubjects.title"
        :description="tutorSubjects.description" :classes="tutorSubjects.classes" />

      <ul class="mt-9 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4" role="list"
        aria-label="Teaching subject areas">
        <li v-for="(item, i) in items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 4) * 60, duration: 420 } }">
          <article
            class="subject-card group flex h-full flex-row overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white sm:flex-col">
            <div class="relative w-[38%] shrink-0 overflow-hidden bg-[#eef4ff] sm:w-full">
              <img :src="usePublicAsset(item.image)" :alt="`${item.title} tutoring illustration`" width="800"
                height="533" loading="lazy" decoding="async"
                class="subject-card-img absolute inset-0 h-full w-full object-contain p-1 sm:static sm:aspect-[4/3] sm:h-auto sm:object-cover sm:p-0" />
              <span
                class="absolute bottom-3 left-3 hidden h-9 w-9 place-items-center rounded-xl bg-white/90 text-blue-600 shadow-sm ring-1 ring-blue-100 backdrop-blur transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 sm:grid"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <span
                class="absolute bottom-3 right-3 hidden rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-slate-500 shadow-sm ring-1 ring-slate-200/80 backdrop-blur sm:block">
                {{ subjectList(item.subjects).length }} subjects
              </span>
            </div>

            <div class="flex flex-1 flex-col p-4 sm:p-5">
              <h3
                class="font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-blue-700">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-[12.5px] leading-relaxed text-slate-500">
                {{ subjectList(item.subjects).join(' · ') }}
              </p>
            </div>
          </article>
        </li>

        <li v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 220, duration: 420 } }">
          <NuxtLink :to="tutorSubjects.cta.href"
            class="cta-tile group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 p-5 text-white">
            <span aria-hidden="true"
              class="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
            <span class="relative">
              <span class="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25"
                aria-hidden="true">
                <Icon icon="mdi:compass-outline" class="h-5 w-5" />
              </span>
              <span class="mt-4 block font-display text-[15px] font-bold leading-snug">
                {{ tutorSubjects.ctaTile.title }}
              </span>
              <span class="mt-2 block text-[12.5px] leading-relaxed text-blue-50/90">
                {{ tutorSubjects.ctaTile.description }}
              </span>
            </span>
            <span class="relative mt-5 inline-flex items-center gap-2 text-[13px] font-semibold">
              {{ tutorSubjects.cta.label }}
              <Icon icon="mdi:arrow-right"
                class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.subject-card,
.cta-tile {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
  box-shadow: 0 6px 18px -14px rgba(15, 23, 42, 0.2);
}

.subject-card:hover {
  transform: translateY(-5px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.4);
}

.cta-tile {
  box-shadow: 0 14px 34px -18px rgba(37, 99, 235, 0.65);
}

.cta-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px -20px rgba(37, 99, 235, 0.7);
}

.subject-card-img {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.subject-card:hover .subject-card-img {
  transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {

  .subject-card,
  .cta-tile,
  .subject-card-img {
    transition: none;
  }

  .subject-card:hover,
  .cta-tile:hover,
  .subject-card:hover .subject-card-img {
    transform: none;
  }
}
</style>
