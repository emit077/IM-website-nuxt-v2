<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { courseMatchingSection } from '~/data/academic-coverage'

type StepTone = 'orange' | 'violet' | 'lime' | 'sky' | 'coral' | 'mint' | 'amber' | 'navy'

const steps = courseMatchingSection.flow
const criteria = courseMatchingSection.criteria
const paramTones = ['purple', 'blue', 'green'] as const
const lightTextTones: StepTone[] = ['orange', 'violet', 'sky', 'coral', 'navy']

function isLightText(tone: StepTone) {
  return lightTextTones.includes(tone)
}
</script>

<template>
  <section id="course-matching" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="course-matching-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="course-matching-heading" :badge="courseMatchingSection.kicker"
          :title="courseMatchingSection.title" :description="courseMatchingSection.description"
          :classes="courseMatchingSection.classes" />
      </div>

      <!-- Match journey: multi-color cards (aligned with home service tones) -->
      <ul class="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4" role="list" aria-label="Matching process steps"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <li v-for="(step, i) in steps" :key="step.step" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 420 } }">
          <article class="match-card group" :class="[
            `match-card--${step.tone}`,
            isLightText(step.tone) ? 'match-card--light-text' : 'match-card--dark-text',
          ]">
            <span class="match-card__deco" aria-hidden="true">
              <span class="match-card__deco-orb" />
              <span class="match-card__deco-dots" />
            </span>

            <span class="match-card__step" aria-hidden="true">{{ step.step }}</span>

            <div class="match-card__body">
              <span class="match-card__icon" aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-6 w-6" />
              </span>
              <p class="match-card__label">Step {{ step.step }}</p>
              <h3 class="match-card__title font-display">{{ step.title }}</h3>
              <p class="match-card__desc">{{ step.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <!-- Matching parameters -->
      <div class="mt-10 lg:mt-12">
        <div class="mx-auto max-w-xl text-center">
          <p class="text-[10.5px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {{ courseMatchingSection.factorsTitle }}
          </p>
          <p class="mt-1.5 text-sm leading-snug text-slate-500">
            {{ courseMatchingSection.factorsDescription }}
          </p>
        </div>

        <ul class="mx-auto mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-4" role="list">
          <li v-for="(item, i) in criteria" :key="item.label" class="param-chip group"
            :class="`param-chip--${paramTones[i % paramTones.length]}`" v-motion :initial="{ opacity: 0, y: 8 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 340 } }">
            <span class="param-chip__icon" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-4 w-4" />
            </span>
            <h3 class="param-chip__label font-display">
              {{ item.label }}
            </h3>
          </li>
        </ul>

        <div
          class="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50/80 via-white to-violet-50/50 px-4 py-3.5 sm:items-center sm:px-5"
          v-motion :initial="{ opacity: 0, y: 8 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 380 } }">
          <span
            class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700 sm:mt-0"
            aria-hidden="true">
            <Icon icon="mdi:check-decagram" class="h-4 w-4" />
          </span>
          <div class="min-w-0">
            <p class="text-[10.5px] font-bold uppercase tracking-[0.14em] text-emerald-700">
              {{ courseMatchingSection.benefitTitle }}
            </p>
            <p class="mt-0.5 text-sm leading-snug text-slate-600">
              {{ courseMatchingSection.benefit }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA strip -->
      <div
        class="mt-10 overflow-hidden rounded-[24px] border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-5 py-6 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:mt-12 sm:px-8 sm:py-7"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div class="min-w-0">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              Ready to get matched?
            </p>
            <p class="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
              Start with a free demo — we’ll handle the matching.
            </p>
            <p class="mt-1.5 text-sm text-blue-100/90">
              {{ courseMatchingSection.supporting }}
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a :href="courseMatchingSection.ctaHref" class="theme-btn-lime">
              {{ courseMatchingSection.ctaLabel }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
            <a :href="courseMatchingSection.secondaryCtaHref"
              class="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
              <Icon icon="mdi:calendar-account-outline" class="h-4 w-4" aria-hidden="true" />
              {{ courseMatchingSection.secondaryCtaLabel }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.match-card {
  position: relative;
  display: flex;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
  padding: 1.35rem 1.35rem 1.5rem;
  isolation: isolate;
  transform: translate3d(0, 0, 0);
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease;
  box-shadow: 0 14px 32px -22px rgba(15, 23, 42, 0.35);
}

.match-card:hover {
  transform: translate3d(0, -4px, 0);
  box-shadow: 0 22px 40px -20px rgba(15, 23, 42, 0.42);
}

.match-card--orange {
  background: #ff7a33;
}

.match-card--violet {
  background: #8b7dff;
}

.match-card--lime {
  background: #c4ff61;
}

.match-card--sky {
  background: #3b9eff;
}

.match-card--coral {
  background: #ff6b6b;
}

.match-card--mint {
  background: #7dffb3;
}

.match-card--amber {
  background: #ffd24a;
}

.match-card--navy {
  background: linear-gradient(145deg, #1e40af 0%, #1d4ed8 48%, #2563eb 100%);
}

.match-card__deco {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.match-card__deco-orb {
  position: absolute;
  right: -18%;
  top: -22%;
  height: 9.5rem;
  width: 9.5rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 68%);
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.match-card:hover .match-card__deco-orb {
  transform: scale(1.12) translate(-4%, 4%);
}

.match-card__deco-dots {
  position: absolute;
  right: 0.75rem;
  bottom: 0.85rem;
  height: 4.5rem;
  width: 4.5rem;
  opacity: 0.35;
  background-image: radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px);
  background-size: 9px 9px;
  mask-image: radial-gradient(circle at center, #000 20%, transparent 70%);
}

.match-card--dark-text .match-card__deco-orb {
  background: radial-gradient(circle, rgba(26, 26, 26, 0.1) 0%, transparent 68%);
}

.match-card--dark-text .match-card__deco-dots {
  background-image: radial-gradient(rgba(26, 26, 26, 0.55) 1px, transparent 1px);
}

.match-card__step {
  pointer-events: none;
  position: absolute;
  right: 0.35rem;
  top: -0.35rem;
  z-index: 0;
  font-family: inherit;
  font-size: 5.25rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  opacity: 0.16;
  user-select: none;
}

.match-card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
}

.match-card__icon {
  display: grid;
  height: 2.75rem;
  width: 2.75rem;
  place-items: center;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(4px);
}

.match-card--dark-text .match-card__icon {
  background: rgba(26, 26, 26, 0.08);
}

.match-card__label {
  margin-top: 1.1rem;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.9;
}

.match-card__title {
  margin-top: 0.35rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
}

.match-card__desc {
  margin-top: 0.55rem;
  font-size: 0.84rem;
  line-height: 1.55;
  opacity: 0.92;
}

.match-card--light-text,
.match-card--light-text .match-card__title,
.match-card--light-text .match-card__label,
.match-card--light-text .match-card__desc,
.match-card--light-text .match-card__icon,
.match-card--light-text .match-card__step {
  color: #ffffff;
}

.match-card--dark-text,
.match-card--dark-text .match-card__title,
.match-card--dark-text .match-card__label,
.match-card--dark-text .match-card__icon,
.match-card--dark-text .match-card__step {
  color: #1a1a1a;
}

.match-card--dark-text .match-card__desc {
  color: rgba(26, 26, 26, 0.8);
}

.param-chip {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 2.85rem;
  padding: 0.55rem 0.8rem;
  border-radius: 0.95rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.07);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.param-chip:hover {
  transform: translateY(-1px);
}

.param-chip__icon {
  display: grid;
  height: 1.9rem;
  width: 1.9rem;
  flex-shrink: 0;
  place-items: center;
  border-radius: 0.55rem;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}

.param-chip__label {
  min-width: 0;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: #1e293b;
}

.param-chip--purple .param-chip__icon {
  background: #efe9ff;
  color: #7c3aed;
}

.param-chip--blue .param-chip__icon {
  background: #e8f1ff;
  color: #2563eb;
}

.param-chip--green .param-chip__icon {
  background: #e7f8f2;
  color: #0d9488;
}

.param-chip--purple:hover {
  border-color: rgba(124, 58, 237, 0.25);
  box-shadow: 0 8px 18px -14px rgba(124, 58, 237, 0.5);
}

.param-chip--blue:hover {
  border-color: rgba(37, 99, 235, 0.25);
  box-shadow: 0 8px 18px -14px rgba(37, 99, 235, 0.5);
}

.param-chip--green:hover {
  border-color: rgba(13, 148, 136, 0.25);
  box-shadow: 0 8px 18px -14px rgba(13, 148, 136, 0.5);
}

.param-chip--purple:hover .param-chip__icon {
  background: #7c3aed;
  color: #ffffff;
}

.param-chip--blue:hover .param-chip__icon {
  background: #2563eb;
  color: #ffffff;
}

.param-chip--green:hover .param-chip__icon {
  background: #0d9488;
  color: #ffffff;
}

@media (prefers-reduced-motion: reduce) {

  .match-card,
  .match-card:hover,
  .match-card__deco-orb,
  .match-card:hover .match-card__deco-orb,
  .param-chip,
  .param-chip:hover {
    transition: none;
    transform: none;
  }
}
</style>
