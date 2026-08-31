<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { tutorSubjects } from '~/data/tutors'

const items = tutorSubjects.items
const coverage = tutorSubjects.coverageTile
const failedLogos = ref<Record<string, boolean>>({})

function subjectList(subjects: string) {
  return subjects.split(' • ').map((s) => s.trim()).filter(Boolean)
}

function markLogoFailed(id: string) {
  failedLogos.value[id] = true
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

        <li class="sm:col-span-2 lg:col-span-3" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 220, duration: 420 } }">
          <article
            class="coverage-card flex h-full flex-col rounded-[1.25rem] border border-slate-200/80 bg-white p-5 sm:p-6">
            <div class="min-w-0">
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                {{ coverage.badge }}
              </p>
              <h3 class="font-display mt-1.5 text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
                {{ coverage.title }}
              </h3>
              <p class="mt-1.5 max-w-md text-[12.5px] leading-relaxed text-slate-500">
                {{ coverage.description }}
              </p>
            </div>

            <div class="mt-5 border-t border-slate-100 pt-5">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {{ coverage.boardsLabel }}
              </p>
              <ul class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3" role="list">
                <li v-for="board in coverage.boards" :key="board.id">
                  <NuxtLink :to="coverage.boardsHref" class="group/board flex items-center gap-2 no-underline"
                    :aria-label="`${board.name} — view boards covered`">
                    <span class="grid h-8 w-8 place-items-center sm:h-9 sm:w-9">
                      <img v-if="!failedLogos[board.id]" :src="usePublicAsset(board.logo)" alt=""
                        class="h-full w-full object-contain" loading="lazy" decoding="async"
                        @error="markLogoFailed(board.id)" />
                      <span v-else class="text-[10px] font-bold tracking-wide text-slate-500">
                        {{ board.name.slice(0, 2) }}
                      </span>
                    </span>
                    <span class="text-[12.5px] font-semibold text-slate-700 transition group-hover/board:text-blue-700">
                      {{ board.name }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="mt-5">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                {{ coverage.coursesLabel }}
              </p>
              <ul class="mt-3 flex flex-wrap gap-2" role="list">
                <li v-for="course in coverage.courses" :key="course.label">
                  <NuxtLink :to="course.href"
                    class="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-[12px] font-medium text-slate-600 no-underline transition hover:border-blue-300 hover:text-blue-700">
                    {{ course.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="mt-5">
              <ActionBtn variant="primary" :label="tutorSubjects.cta.label" :href="tutorSubjects.cta.href" />
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.subject-card,
.coverage-card {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
  box-shadow: 0 6px 18px -14px rgba(15, 23, 42, 0.2);
}

.subject-card:hover,
.coverage-card:hover {
  transform: translateY(-5px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.4);
}

.subject-card-img {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.subject-card:hover .subject-card-img {
  transform: scale(1.05);
}

@media (prefers-reduced-motion: reduce) {

  .subject-card,
  .coverage-card,
  .subject-card-img {
    transition: none;
  }

  .subject-card:hover,
  .coverage-card:hover,
  .subject-card:hover .subject-card-img {
    transform: none;
  }
}
</style>
