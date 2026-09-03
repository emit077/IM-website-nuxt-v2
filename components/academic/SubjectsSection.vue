<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subjectsSection, type SubjectStream } from '~/data/academic-coverage'
import { externalLinks } from '~/data/external-links'

const streams = subjectsSection.streams
const selectedCategoryId = ref<SubjectStream['id'] | null>(streams[0]?.id ?? null)
const selectedSubject = ref<string | null>(null)

const selectedCategory = computed(
  () => streams.find((s) => s.id === selectedCategoryId.value) ?? null,
)

const ctaLabel = computed(() => {
  if (selectedSubject.value) {
    return `${subjectsSection.selectedCtaPrefix} ${selectedSubject.value}`
  }
  if (selectedCategory.value) {
    return `${subjectsSection.selectedCtaPrefix} ${selectedCategory.value.title}`
  }
  return subjectsSection.selectHint
})

const ctaChips = computed(
  () => selectedCategory.value?.subjects.slice(0, 5).map((s) => s.name) ?? [],
)

function subjectPreview(stream: SubjectStream) {
  return stream.subjects.map((s) => s.name).join(' · ')
}

function selectCategory(id: SubjectStream['id']) {
  if (selectedCategoryId.value === id) return
  selectedCategoryId.value = id
  selectedSubject.value = null
}

function selectSubject(subject: string) {
  selectedSubject.value = selectedSubject.value === subject ? null : subject
}
</script>

<template>
  <section id="subjects-offered" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="subjects-heading" :badge="subjectsSection.kicker" :title="subjectsSection.title"
          :description="subjectsSection.description" :classes="subjectsSection.classes" />
      </div>

      <ul class="mt-9 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4" role="list"
        aria-label="Subject categories">
        <li v-for="(stream, i) in streams" :key="stream.id" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + (i % 4) * 60, duration: 420 } }">
          <article
            class="subject-card group flex h-full flex-row overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white sm:flex-col"
            :class="{ 'is-active': selectedCategoryId === stream.id }">
            <button type="button" class="flex h-full w-full flex-row text-left sm:flex-col"
              :aria-pressed="selectedCategoryId === stream.id" :aria-controls="`stream-subjects-${stream.id}`"
              @click="selectCategory(stream.id)">
              <div class="relative w-[38%] shrink-0 overflow-hidden bg-[#eef4ff] sm:w-full">
                <img :src="usePublicAsset(stream.image)" :alt="`${stream.title} subjects`" width="800" height="533"
                  loading="lazy" decoding="async"
                  class="subject-card-img absolute inset-0 h-full w-full object-contain p-1 sm:static sm:aspect-[4/3] sm:h-auto sm:object-cover sm:p-0" />
                <span
                  class="absolute bottom-3 left-3 hidden h-9 w-9 place-items-center rounded-xl bg-white/90 text-blue-600 shadow-sm ring-1 ring-blue-100 backdrop-blur transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 sm:grid"
                  :class="selectedCategoryId === stream.id && '!bg-blue-600 !text-white !ring-blue-600'"
                  aria-hidden="true">
                  <Icon :icon="stream.iconMdi" class="h-[18px] w-[18px]" />
                </span>
                <span
                  class="absolute bottom-3 right-3 hidden rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-slate-500 shadow-sm ring-1 ring-slate-200/80 backdrop-blur sm:block">
                  {{ stream.subjects.length }} subjects
                </span>
              </div>

              <div class="flex flex-1 flex-col p-4 sm:p-5">
                <h3
                  class="font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-blue-700"
                  :class="selectedCategoryId === stream.id && 'text-blue-700'">
                  {{ stream.title }}
                </h3>
                <p class="mt-2 text-[12.5px] leading-relaxed text-slate-500">
                  {{ subjectPreview(stream) }}
                </p>
              </div>
            </button>
          </article>
        </li>
      </ul>

      <!-- <a :href="externalLinks.studentSignup" class="bento-cta group mt-8 sm:mt-10"
        :aria-label="`${ctaLabel}. ${subjectsSection.detailCta}`" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 440 } }">
        <div class="bento-cta__copy">
          <p class="bento-cta__kicker">
            {{ selectedCategory?.title ?? 'Ready to match' }}
          </p>
          <p class="bento-cta__title font-display">
            {{ ctaLabel }}
          </p>
          <p class="bento-cta__note">
            {{ subjectsSection.footerNote }}
          </p>
          <ul v-if="ctaChips.length" class="bento-cta__chips" role="list">
            <li v-for="chip in ctaChips" :key="chip">
              <span class="bento-cta__chip">{{ chip }}</span>
            </li>
          </ul>
          <span class="theme-btn-lime bento-cta__btn">
            {{ subjectsSection.detailCta }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true" />
          </span>
        </div>

        <div class="bento-cta__media" aria-hidden="true">
          <img :src="usePublicAsset(subjectsSection.ctaImage)" alt="" class="bento-cta__img" loading="lazy"
            decoding="async" />
        </div>
      </a> -->
    </div>
  </section>
</template>

<style scoped>
.subject-card {
  box-shadow: 0 6px 18px -14px rgba(15, 23, 42, 0.2);
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.subject-card:hover {
  transform: translateY(-5px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.4);
}

.subject-card.is-active {
  border-color: rgb(147 197 253);
  box-shadow:
    0 0 0 3px rgba(37, 99, 235, 0.12),
    0 22px 44px -22px rgba(37, 99, 235, 0.42);
}

.subject-card-img {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.subject-card:hover .subject-card-img,
.subject-card.is-active .subject-card-img {
  transform: scale(1.05);
}

.stream-panel {
  border-radius: 1.25rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #ffffff;
  padding: 1.15rem 1.2rem 1.25rem;
  box-shadow: 0 10px 28px -20px rgba(15, 23, 42, 0.28);
}

@media (min-width: 640px) {
  .stream-panel {
    padding: 1.35rem 1.5rem 1.45rem;
  }
}

.subject-pill {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #f8fafc;
  padding: 0.42rem 0.75rem 0.42rem 0.6rem;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #334155;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.subject-pill:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.22);
  background: #eff6ff;
  color: #1d4ed8;
}

.subject-pill.is-selected {
  border-color: transparent;
  background: #2563eb;
  color: #ffffff;
}

.bento-cta {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 1.35rem;
  text-decoration: none;
  background: linear-gradient(160deg, #1d4ed8 0%, #2563eb 55%, #1e40af 100%);
  box-shadow: 0 20px 50px -24px rgba(29, 78, 216, 0.5);
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease;
}

.bento-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 28px 56px -22px rgba(29, 78, 216, 0.58);
}

.bento-cta:focus-visible {
  outline: 2px solid #4338ca;
  outline-offset: 4px;
}

@media (min-width: 640px) {
  .bento-cta {
    grid-template-columns: minmax(0, 1.05fr) minmax(16rem, 0.95fr);
    border-radius: 1.5rem;
    min-height: 17.5rem;
  }
}

@media (min-width: 1024px) {
  .bento-cta {
    grid-template-columns: minmax(0, 1.1fr) minmax(20rem, 0.9fr);
    min-height: 18.5rem;
  }
}

.bento-cta__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.35rem 1.25rem 1.45rem;
}

@media (min-width: 640px) {
  .bento-cta__copy {
    padding: 1.7rem 1.85rem 1.8rem 1.9rem;
  }
}

.bento-cta__kicker {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(219, 234, 254, 0.9);
}

.bento-cta__title {
  margin-top: 0.4rem;
  font-size: 1.28rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: #ffffff;
}

@media (min-width: 640px) {
  .bento-cta__title {
    font-size: 1.6rem;
  }
}

.bento-cta__note {
  margin-top: 0.5rem;
  max-width: 28rem;
  font-size: 0.86rem;
  line-height: 1.5;
  color: rgba(239, 246, 255, 0.92);
}

.bento-cta__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.95rem;
}

.bento-cta__chip {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.12);
  padding: 0.22rem 0.65rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #eff6ff;
}

.bento-cta__btn {
  width: fit-content;
  margin-top: 1.15rem;
}

.bento-cta__media {
  position: relative;
  order: -1;
  min-height: 12rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .bento-cta__media {
    order: 0;
    min-height: 100%;
  }
}

.bento-cta__media::after {
  content: '';
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(29, 78, 216, 0.28), transparent 42%);
}

@media (min-width: 640px) {
  .bento-cta__media::after {
    background: linear-gradient(to right, #1d4ed8 0%, rgba(29, 78, 216, 0.35) 18%, transparent 42%);
  }
}

.bento-cta__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 62% center;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.bento-cta:hover .bento-cta__img {
  transform: scale(1.04);
}

@media (min-width: 640px) {
  .bento-cta__img {
    position: absolute;
    inset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {

  .subject-card,
  .subject-card:hover,
  .subject-card-img,
  .subject-pill,
  .subject-pill:hover,
  .bento-cta,
  .bento-cta:hover,
  .bento-cta__img,
  .bento-cta:hover .bento-cta__img {
    transition: none;
    transform: none;
  }
}
</style>
