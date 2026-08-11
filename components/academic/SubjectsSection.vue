<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subjectsSection, type SubjectItem, type SubjectStream } from '~/data/academic-coverage'
import { externalLinks } from '~/data/external-links'

/** Desktop bento: 7-5 / 4-4-4 / 5-7 */
const SPAN_PATTERN = [7, 5, 4, 4, 4, 5, 7] as const

const PREVIEW_COUNT = 4

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

function spanClass(index: number) {
  const span = SPAN_PATTERN[index % SPAN_PATTERN.length] ?? 4
  return `bento-card--span-${span}`
}

function isFeatured(index: number) {
  return SPAN_PATTERN[index % SPAN_PATTERN.length]! >= 5
}

function previewSubjects(subjects: SubjectItem[], expanded: boolean) {
  if (expanded) return subjects
  return subjects.slice(0, PREVIEW_COUNT)
}

function selectCategory(id: SubjectStream['id']) {
  if (selectedCategoryId.value === id) return
  selectedCategoryId.value = id
  selectedSubject.value = null
}

function selectSubject(subject: string, categoryId: SubjectStream['id']) {
  selectedCategoryId.value = categoryId
  selectedSubject.value = selectedSubject.value === subject ? null : subject
}
</script>

<template>
  <section
    id="subjects-offered"
    class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="subjects-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl"
    />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader
          heading-id="subjects-heading"
          :badge="subjectsSection.kicker"
          :title="subjectsSection.title"
          :description="subjectsSection.description"
          :classes="subjectsSection.classes"
        />
      </div>

      <ul class="bento-grid mt-10 sm:mt-12" role="list" aria-label="Subject categories">
        <li
          v-for="(stream, i) in streams"
          :key="stream.id"
          :class="['bento-grid__cell', spanClass(i)]"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 45, duration: 420 } }"
        >
          <article
            class="bento-card group"
            :class="[
              `bento-card--${stream.accent}`,
              selectedCategoryId === stream.id && 'is-active',
              isFeatured(i) && 'bento-card--featured',
            ]"
          >
            <button
              type="button"
              class="bento-card__hit"
              :aria-pressed="selectedCategoryId === stream.id"
              :aria-expanded="selectedCategoryId === stream.id"
              @click="selectCategory(stream.id)"
            >
              <span class="bento-card__deco" aria-hidden="true">
                <span class="bento-card__orb" />
                <Icon :icon="stream.iconMdi" class="bento-card__watermark" />
              </span>

              <div class="bento-card__top">
                <span class="bento-card__icon" aria-hidden="true">
                  <Icon :icon="stream.iconMdi" class="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" />
                </span>
                <span class="bento-card__count">
                  {{ stream.subjects.length }} subjects
                </span>
              </div>

              <h3 class="bento-card__title font-display">
                {{ stream.title }}
              </h3>
              <p class="bento-card__tagline">
                {{ stream.tagline }}
              </p>
            </button>

            <ul class="bento-card__subjects" role="list">
              <li
                v-for="subject in previewSubjects(stream.subjects, selectedCategoryId === stream.id)"
                :key="subject.name"
              >
                <button
                  type="button"
                  class="subject-pill"
                  :class="{ 'is-selected': selectedCategoryId === stream.id && selectedSubject === subject.name }"
                  :aria-pressed="selectedCategoryId === stream.id && selectedSubject === subject.name"
                  @click="selectSubject(subject.name, stream.id)"
                >
                  <Icon :icon="subject.iconMdi" class="subject-pill__icon" aria-hidden="true" />
                  <span>{{ subject.name }}</span>
                </button>
              </li>
              <li
                v-if="selectedCategoryId !== stream.id && stream.subjects.length > PREVIEW_COUNT"
              >
                <button
                  type="button"
                  class="subject-pill subject-pill--more"
                  @click="selectCategory(stream.id)"
                >
                  +{{ stream.subjects.length - PREVIEW_COUNT }} more
                </button>
              </li>
            </ul>
          </article>
        </li>
      </ul>

      <!-- Sticky-feel CTA under the grid -->
      <div
        class="bento-cta mt-8 sm:mt-10"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 440 } }"
      >
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
        </div>
        <a :href="externalLinks.studentSignup" class="theme-btn-lime bento-cta__btn">
          {{ subjectsSection.detailCta }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Grid: mobile-first ── */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}

@media (min-width: 640px) {
  .bento-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.1rem;
  }

  .bento-card--span-4 {
    grid-column: span 4;
  }

  .bento-card--span-5 {
    grid-column: span 5;
  }

  .bento-card--span-7 {
    grid-column: span 7;
  }
}

.bento-grid__cell {
  display: flex;
  min-width: 0;
}

/* ── Card ── */
.bento-card {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.35rem;
  padding: 1.1rem 1.1rem 1.15rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.07);
  box-shadow: 0 10px 28px -20px rgba(15, 23, 42, 0.28);
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

@media (min-width: 640px) {
  .bento-card {
    border-radius: 1.5rem;
    padding: 1.25rem 1.3rem 1.3rem;
  }
}

.bento-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 36px -22px rgba(15, 23, 42, 0.35);
}

.bento-card.is-active {
  border-color: rgba(37, 99, 235, 0.28);
  box-shadow:
    0 0 0 3px rgba(37, 99, 235, 0.1),
    0 18px 36px -20px rgba(37, 99, 235, 0.35);
}

.bento-card__hit {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.bento-card__deco {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bento-card__orb {
  position: absolute;
  right: -18%;
  top: -28%;
  height: 9rem;
  width: 9rem;
  border-radius: 9999px;
  opacity: 0.55;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.bento-card:hover .bento-card__orb {
  transform: scale(1.1) translate(-2%, 4%);
}

.bento-card__watermark {
  position: absolute;
  right: -0.35rem;
  bottom: -0.55rem;
  height: 5.5rem;
  width: 5.5rem;
  opacity: 0.07;
  transition: opacity 0.3s ease, transform 0.45s ease;
}

.bento-card:hover .bento-card__watermark,
.bento-card.is-active .bento-card__watermark {
  opacity: 0.11;
  transform: scale(1.04);
}

.bento-card__top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.65rem;
}

.bento-card__icon {
  display: grid;
  height: 2.5rem;
  width: 2.5rem;
  place-items: center;
  border-radius: 0.85rem;
  transition:
    transform 0.28s ease,
    background-color 0.28s ease,
    color 0.28s ease;
}

.bento-card:hover .bento-card__icon,
.bento-card.is-active .bento-card__icon {
  transform: scale(1.05);
}

.bento-card__count {
  border-radius: 9999px;
  padding: 0.28rem 0.65rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgba(15, 23, 42, 0.04);
  color: #64748b;
  white-space: nowrap;
}

.bento-card.is-active .bento-card__count {
  background: #eff6ff;
  color: #2563eb;
}

.bento-card__title {
  position: relative;
  z-index: 1;
  margin-top: 0.95rem;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: #0f172a;
}

@media (min-width: 640px) {
  .bento-card--featured .bento-card__title {
    font-size: 1.4rem;
  }
}

.bento-card__tagline {
  position: relative;
  z-index: 1;
  margin-top: 0.35rem;
  font-size: 0.84rem;
  line-height: 1.45;
  color: #64748b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bento-card__subjects {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
  padding-top: 0.95rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}

.subject-pill {
  display: inline-flex;
  max-width: 100%;
  align-items: center;
  gap: 0.35rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #f8fafc;
  padding: 0.4rem 0.7rem 0.4rem 0.55rem;
  font-size: 0.75rem;
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

@media (min-width: 640px) {
  .subject-pill {
    gap: 0.4rem;
    font-size: 0.8rem;
    padding: 0.42rem 0.75rem 0.42rem 0.6rem;
  }
}

.subject-pill__icon {
  height: 0.95rem;
  width: 0.95rem;
  flex-shrink: 0;
  opacity: 0.85;
}

@media (min-width: 640px) {
  .subject-pill__icon {
    height: 1rem;
    width: 1rem;
  }
}

.subject-pill:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.22);
  background: #eff6ff;
  color: #1d4ed8;
}

.subject-pill:hover .subject-pill__icon {
  opacity: 1;
}

.subject-pill.is-selected {
  border-color: transparent;
  background: #2563eb;
  color: #ffffff;
}

.subject-pill.is-selected .subject-pill__icon {
  opacity: 1;
}

.subject-pill--more {
  background: transparent;
  border-style: dashed;
  color: #64748b;
  padding-left: 0.7rem;
}

.subject-pill--more:hover {
  background: #ffffff;
}

/* Accent themes */
.bento-card--teal .bento-card__icon {
  background: #e6f7f3;
  color: #0d9488;
}
.bento-card--teal .bento-card__orb {
  background: radial-gradient(circle, rgba(13, 148, 136, 0.18) 0%, transparent 70%);
}
.bento-card--teal .bento-card__watermark {
  color: #0d9488;
}
.bento-card--teal.is-active .bento-card__icon {
  background: #0d9488;
  color: #ffffff;
}

.bento-card--blue .bento-card__icon {
  background: #e8f1ff;
  color: #2563eb;
}
.bento-card--blue .bento-card__orb {
  background: radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, transparent 70%);
}
.bento-card--blue .bento-card__watermark {
  color: #2563eb;
}
.bento-card--blue.is-active .bento-card__icon {
  background: #2563eb;
  color: #ffffff;
}

.bento-card--amber .bento-card__icon {
  background: #fff7e8;
  color: #d97706;
}
.bento-card--amber .bento-card__orb {
  background: radial-gradient(circle, rgba(217, 119, 6, 0.16) 0%, transparent 70%);
}
.bento-card--amber .bento-card__watermark {
  color: #d97706;
}
.bento-card--amber.is-active .bento-card__icon {
  background: #d97706;
  color: #ffffff;
}

.bento-card--sky .bento-card__icon {
  background: #e0f2fe;
  color: #0284c7;
}
.bento-card--sky .bento-card__orb {
  background: radial-gradient(circle, rgba(2, 132, 199, 0.16) 0%, transparent 70%);
}
.bento-card--sky .bento-card__watermark {
  color: #0284c7;
}
.bento-card--sky.is-active .bento-card__icon {
  background: #0284c7;
  color: #ffffff;
}

.bento-card--indigo .bento-card__icon {
  background: #eef2ff;
  color: #4f46e5;
}
.bento-card--indigo .bento-card__orb {
  background: radial-gradient(circle, rgba(79, 70, 229, 0.14) 0%, transparent 70%);
}
.bento-card--indigo .bento-card__watermark {
  color: #4f46e5;
}
.bento-card--indigo.is-active .bento-card__icon {
  background: #4f46e5;
  color: #ffffff;
}

.bento-card--rose .bento-card__icon {
  background: #ffe4e6;
  color: #e11d48;
}
.bento-card--rose .bento-card__orb {
  background: radial-gradient(circle, rgba(225, 29, 72, 0.12) 0%, transparent 70%);
}
.bento-card--rose .bento-card__watermark {
  color: #e11d48;
}
.bento-card--rose.is-active .bento-card__icon {
  background: #e11d48;
  color: #ffffff;
}

.bento-card--slate .bento-card__icon {
  background: #f1f5f9;
  color: #475569;
}
.bento-card--slate .bento-card__orb {
  background: radial-gradient(circle, rgba(71, 85, 105, 0.14) 0%, transparent 70%);
}
.bento-card--slate .bento-card__watermark {
  color: #475569;
}
.bento-card--slate.is-active .bento-card__icon {
  background: #475569;
  color: #ffffff;
}

/* ── CTA strip ── */
.bento-cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  border-radius: 1.35rem;
  border: 1px solid rgba(191, 219, 254, 0.55);
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 48%, #0ea5e9 100%);
  padding: 1.2rem 1.2rem 1.25rem;
  box-shadow: 0 18px 40px -24px rgba(37, 99, 235, 0.55);
}

@media (min-width: 640px) {
  .bento-cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 1.5rem;
    padding: 1.35rem 1.6rem;
    gap: 1.25rem;
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
  margin-top: 0.25rem;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.25;
  color: #ffffff;
}

@media (min-width: 640px) {
  .bento-cta__title {
    font-size: 1.3rem;
  }
}

.bento-cta__note {
  margin-top: 0.3rem;
  font-size: 0.8rem;
  line-height: 1.4;
  color: rgba(219, 234, 254, 0.88);
}

.bento-cta__btn {
  width: 100%;
  justify-content: center;
}

@media (min-width: 640px) {
  .bento-cta__btn {
    width: auto;
    flex-shrink: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bento-card,
  .bento-card:hover,
  .bento-card__orb,
  .bento-card__icon,
  .subject-pill,
  .subject-pill:hover {
    transition: none;
    transform: none;
  }
}
</style>
