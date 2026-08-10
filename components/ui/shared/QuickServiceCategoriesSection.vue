<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { quickServiceCategories } from '~/data/services'

const iconTones = ['blue', 'mint', 'blue', 'mint', 'blue'] as const
</script>

<template>
  <section
    class="relative overflow-hidden section-surface-muted section-py"
    aria-labelledby="quick-service-categories-heading"
  >
    <div class="container-page relative">
      <CardHeader
        heading-id="quick-service-categories-heading"
        :badge="quickServiceCategories.kicker"
        :title="quickServiceCategories.title"
        :description="quickServiceCategories.description"
        classes="mx-auto max-w-2xl !px-0 !py-0"
      />

      <ul
        class="mt-8 grid grid-cols-1 gap-3.5 sm:mt-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-4"
        role="list"
      >
        <li
          v-for="(item, i) in quickServiceCategories.items"
          :key="item.id"
          class="h-full"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }"
        >
          <NuxtLink
            :to="item.href"
            class="service-card group"
            :class="`service-card--${iconTones[i % iconTones.length]}`"
          >
            <span class="service-card__icon" aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-6 w-6" />
            </span>

            <h3 class="service-card__title font-display">
              {{ item.title }}
            </h3>
            <p class="service-card__desc">
              {{ item.description }}
            </p>
          </NuxtLink>
        </li>
      </ul>

      <div
        class="mt-8 flex flex-col items-center gap-2 sm:mt-10"
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 160, duration: 400 } }"
      >
        <ActionBtn
          class="!min-w-[16rem] sm:!min-w-[18rem] !px-10"
          variant="primary"
          :href="quickServiceCategories.cta.href"
          :label="quickServiceCategories.cta.label"
          icon="mdi:view-grid-outline"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 11.5rem;
  padding: 1.25rem 1.2rem 1.35rem;
  border-radius: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.04);
  box-shadow: 0 8px 24px -16px rgba(15, 23, 42, 0.22);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37, 99, 235, 0.14);
  box-shadow: 0 16px 32px -18px rgba(15, 23, 42, 0.28);
}

.service-card__icon {
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

.service-card--blue .service-card__icon {
  background: #e8f1ff;
  color: #2563eb;
}

.service-card--mint .service-card__icon {
  background: #e7f8f2;
  color: #0d9488;
}

.service-card:hover .service-card__icon {
  transform: scale(1.06);
}

.service-card--blue:hover .service-card__icon {
  background: #2563eb;
  color: #ffffff;
}

.service-card--mint:hover .service-card__icon {
  background: #0d9488;
  color: #ffffff;
}

.service-card__title {
  margin-top: 1.15rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #1e293b;
  transition: color 0.25s ease;
}

.service-card:hover .service-card__title {
  color: #0f172a;
}

.service-card__desc {
  margin-top: 0.45rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #64748b;
}

@media (min-width: 1280px) {
  .service-card {
    min-height: 12rem;
    padding: 1.2rem 1.1rem 1.3rem;
  }

  .service-card__title {
    font-size: 1rem;
  }

  .service-card__desc {
    font-size: 0.78rem;
  }
}
</style>
