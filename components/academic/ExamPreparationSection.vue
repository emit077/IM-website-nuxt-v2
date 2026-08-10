<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { examPreparationSection } from '~/data/academic-coverage'

const iconTones = ['blue', 'mint', 'blue'] as const
</script>

<template>
  <section id="exam-preparation" class="relative scroll-mt-20 overflow-hidden section-surface-white section-py"
    aria-labelledby="exam-preparation-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-sky-100/25 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-2xl text-center">
        <CardHeader heading-id="exam-preparation-heading" :badge="examPreparationSection.kicker"
          :title="examPreparationSection.title" :description="examPreparationSection.description"
          :classes="`${examPreparationSection.classes} mx-auto`" />
      </div>

      <ul class="mt-10 grid gap-3.5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4" role="list">
        <li v-for="(prog, i) in examPreparationSection.programmes" :key="prog.id" class="h-full" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 55, duration: 400 } }">
          <article class="exam-card group" :class="`exam-card--${iconTones[i % iconTones.length]}`">
            <span class="exam-card__icon" aria-hidden="true">
              <Icon :icon="prog.iconMdi" class="h-6 w-6" />
            </span>

            <h3 class="exam-card__title font-display">
              {{ prog.title }}
            </h3>
            <p class="exam-card__desc">
              {{ prog.description }}
            </p>

            <ul class="exam-card__tags mb-4" role="list">
              <li v-for="item in prog.programmes" :key="item" class="exam-card__tag">
                {{ item }}
              </li>
            </ul>

            <ul class="exam-card__includes" role="list">
              <li v-for="item in prog.includes" :key="item" class="exam-card__include">
                <Icon icon="mdi:arrow-right" class="exam-card__check" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.exam-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.35rem 1.3rem 1.45rem;
  border-radius: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.04);
  box-shadow: 0 8px 24px -16px rgba(15, 23, 42, 0.22);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.exam-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37, 99, 235, 0.14);
  box-shadow: 0 16px 32px -18px rgba(15, 23, 42, 0.28);
}

.exam-card__icon {
  display: grid;
  height: 2.75rem;
  width: 2.75rem;
  place-items: center;
  border-radius: 0.9rem;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
}

.exam-card--blue .exam-card__icon {
  background: #e8f1ff;
  color: #2563eb;
}

.exam-card--mint .exam-card__icon {
  background: #e7f8f2;
  color: #0d9488;
}

.exam-card:hover .exam-card__icon {
  transform: scale(1.06);
}

.exam-card--blue:hover .exam-card__icon {
  background: #2563eb;
  color: #ffffff;
}

.exam-card--mint:hover .exam-card__icon {
  background: #0d9488;
  color: #ffffff;
}

.exam-card__title {
  margin-top: 1.15rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #1e293b;
  transition: color 0.25s ease;
}

.exam-card:hover .exam-card__title {
  color: #0f172a;
}

.exam-card__desc {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #64748b;
}

.exam-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 1rem;
}

.exam-card__tag {
  border-radius: 9999px;
  padding: 0.2rem 0.65rem;
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1.4;
}

.exam-card--blue .exam-card__tag {
  background: #eff6ff;
  color: #1d4ed8;
  box-shadow: inset 0 0 0 1px #dbeafe;
}

.exam-card--mint .exam-card__tag {
  background: #f0fdfa;
  color: #0f766e;
  box-shadow: inset 0 0 0 1px #ccfbf1;
}

.exam-card__includes {
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
}

.exam-card__include {
  display: flex;
  align-items: flex-start;
  gap: 0.45rem;
  font-size: 0.8rem;
  line-height: 1.4;
  color: #334155;
}

.exam-card__check {
  margin-top: 0.1rem;
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
}

.exam-card--blue .exam-card__check {
  color: #2563eb;
}

.exam-card--mint .exam-card__check {
  color: #0d9488;
}
</style>
