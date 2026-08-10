<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { enrichmentSection } from '~/data/academic-coverage'

/** white-blue-white alternating card surfaces */
function isBlueCard(index: number) {
  return index % 2 === 1
}
</script>

<template>
  <section id="enrichment" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="enrichment-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-8 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sky-100/25 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-2xl text-center">
        <CardHeader heading-id="enrichment-heading" :badge="enrichmentSection.kicker" :title="enrichmentSection.title"
          :description="enrichmentSection.description" :classes="`${enrichmentSection.classes} mx-auto`" />
      </div>

      <ul class="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(cat, i) in enrichmentSection.categories" :key="cat.id" class="flex" v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
          <article class="enrich-card group" :class="isBlueCard(i) ? 'enrich-card--blue' : 'enrich-card--white'">
            <span v-if="isBlueCard(i)" aria-hidden="true" class="enrich-card__glow" />

            <div class="relative z-[1] flex h-full flex-col">
              <span class="enrich-card__icon"
                :class="isBlueCard(i) ? 'enrich-card__icon--on-blue' : 'enrich-card__icon--on-white'"
                aria-hidden="true">
                <Icon :icon="cat.iconMdi" class="h-6 w-6" />
              </span>

              <h3 class="enrich-card__title font-display">
                {{ cat.title }}
              </h3>

              <p class="enrich-card__desc">
                {{ cat.description }}
              </p>

              <ul class="enrich-card__programmes" role="list">
                <li v-for="item in cat.programmes" :key="item">
                  <Icon icon="solar:arrow-right-linear" class="h-4 w-4" aria-hidden="true" />
                  <span>{{ item }}</span>
                </li>
              </ul>


            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.enrich-card {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 18rem;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.6rem;
  padding: 1.55rem 1.45rem 1.5rem;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.enrich-card:hover {
  transform: translateY(-3px);
}

.enrich-card--blue {
  background: linear-gradient(155deg, #2563eb 0%, #3b82f6 48%, #38bdf8 100%);
  border: 1px solid rgba(191, 219, 254, 0.35);
  box-shadow: 0 18px 40px -22px rgba(37, 99, 235, 0.55);
  color: #fff;
}

.enrich-card--blue:hover {
  box-shadow: 0 22px 44px -20px rgba(37, 99, 235, 0.6);
}

.enrich-card--white {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 8px 24px -16px rgba(15, 23, 42, 0.2);
  color: #0f172a;
}

.enrich-card--white:hover {
  border-color: rgba(37, 99, 235, 0.18);
  box-shadow: 0 14px 28px -16px rgba(15, 23, 42, 0.22);
}

.enrich-card__glow {
  pointer-events: none;
  position: absolute;
  right: -3rem;
  bottom: -3rem;
  height: 12rem;
  width: 12rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.16);
  filter: blur(28px);
}

.enrich-card__icon {
  display: grid;
  height: 3rem;
  width: 3rem;
  place-items: center;
  border-radius: 0.95rem;
  transition: transform 0.28s ease;
}

.enrich-card:hover .enrich-card__icon {
  transform: scale(1.05);
}

.enrich-card__icon--on-blue {
  background: #ffffff;
  color: #2563eb;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 18px -10px rgba(15, 23, 42, 0.35);
}

.enrich-card__icon--on-white {
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #dbeafe;
}

.enrich-card__title {
  margin-top: 1.25rem;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.enrich-card--blue .enrich-card__title {
  color: #ffffff;
}

.enrich-card--white .enrich-card__title {
  color: #0f172a;
}

.enrich-card__desc {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.55;
}

.enrich-card--blue .enrich-card__desc {
  color: rgba(239, 246, 255, 0.92);
}

.enrich-card--white .enrich-card__desc {
  color: #64748b;
}

.enrich-card__programmes {
  margin-top: 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.enrich-card__programmes li {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.35;
}

.enrich-card__check {
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
}

.enrich-card--blue .enrich-card__programmes li {
  color: rgba(239, 246, 255, 0.95);
}

.enrich-card--blue .enrich-card__check {
  color: #ffffff;
}

.enrich-card--white .enrich-card__programmes li {
  color: #334155;
}

.enrich-card--white .enrich-card__check {
  color: #2563eb;
}

.enrich-card__cta {
  margin-top: auto;
  padding-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 700;
  transition: gap 0.25s ease;
}

.enrich-card:hover .enrich-card__cta {
  gap: 0.55rem;
}

.enrich-card--blue .enrich-card__cta {
  color: #ffffff;
}

.enrich-card--white .enrich-card__cta {
  color: #2563eb;
}
</style>
