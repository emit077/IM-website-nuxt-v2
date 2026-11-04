<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorSubjects } from '~/data/tutors'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

const items = tutorSubjects.items
const coverage = tutorSubjects.coverageTile


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

        <li class="sm:col-span-2 lg:col-span-4" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 220, duration: 420 } }">
          <div class="coverage-cta group relative flex min-h-[16.5rem] overflow-hidden rounded-[1.25rem] no-underline sm:min-h-[15.5rem]
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-indigo-700" :aria-label="`Teach any board. Any grade. ${tutorSubjects.cta.label}`">
            <span class="coverage-visual pointer-events-none absolute inset-y-0 right-0 w-[58%] sm:w-[50%] lg:w-[42%]"
              aria-hidden="true">
              <img :src="usePublicAsset(coverage.image)" alt=""
                class="h-full w-full object-cover object-[68%_center] hidden lg:block transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy" decoding="async" />
            </span>
            <span class="coverage-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

            <div class="relative z-[1] flex w-full flex-col justify-center p-5 sm:p-7 lg:px-9 lg:py-8">
              <div class="min-w-0 max-w-md sm:max-w-[58%] lg:max-w-[46%]">
                <h3
                  class="font-display text-[1.85rem] font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.15rem] lg:text-[2.45rem]"
                  v-html="coverage.title" />
                <p class="mt-3 max-w-md text-[13.5px] font-medium leading-snug text-blue-50/90 sm:text-sm">
                  {{ coverage.description }}
                </p>
                <ActionBtn class="mt-6 !w-full sm:!w-auto" variant="theme-secondary" :href="tutorSubjects.cta.href"
                  :label="tutorSubjects.cta.label" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.subject-card,
.coverage-cta {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.subject-card {
  box-shadow: 0 6px 18px -14px rgba(15, 23, 42, 0.2);
}

.coverage-cta {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 42%, #4338ca 100%);
  box-shadow: 0 20px 50px -24px rgba(29, 78, 216, 0.5);
}

.subject-card:hover {
  transform: translateY(-5px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.4);
}

.coverage-cta:hover {
  transform: translateY(-5px);
  box-shadow: 0 28px 56px -22px rgba(29, 78, 216, 0.58);
}

.coverage-visual {
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

.coverage-overlay {
  background: linear-gradient(90deg,
      #1d4ed8 0%,
      #1d4ed8 46%,
      rgba(37, 99, 235, 0.55) 68%,
      rgba(37, 99, 235, 0.16) 84%,
      transparent 100%);
}

@media (max-width: 639px) {
  .coverage-overlay {
    background: linear-gradient(180deg,
        #1d4ed8 0%,
        rgba(29, 78, 216, 0.94) 52%,
        rgba(37, 99, 235, 0.62) 78%,
        rgba(37, 99, 235, 0.28) 100%);
  }
}

.subject-card-img {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.subject-card:hover .subject-card-img {
  transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {

  .subject-card,
  .coverage-cta,
  .subject-card-img {
    transition: none;
  }

  .subject-card:hover,
  .coverage-cta:hover,
  .subject-card:hover .subject-card-img {
    transform: none;
  }
}
</style>
