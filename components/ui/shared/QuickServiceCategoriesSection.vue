<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { quickServiceCategories } from '~/data/services'
import ActionBtn from '../btns/ActionBtn.vue'

const props = withDefaults(
  defineProps<{
    showHeader?: boolean
    badge?: string
    title?: string
    description?: string
    headingId?: string
    headerClasses?: string
  }>(),
  {
    showHeader: true,
    badge: quickServiceCategories.kicker,
    title: quickServiceCategories.title,
    description: quickServiceCategories.description,
    headingId: 'quick-service-categories-heading',
    headerClasses: 'mx-auto !px-0 !py-0',
  },
)

const iconTones = ['blue', 'mint', 'blue', 'mint', 'blue'] as const
</script>

<template>
  <section class="relative overflow-hidden section-surface-muted section-py"
    :aria-labelledby="props.showHeader ? props.headingId : undefined"
    :aria-label="props.showHeader ? undefined : 'Service categories'">
    <div class="container-page relative">
      <CardHeader v-if="props.showHeader" :heading-id="props.headingId" :badge="props.badge" :title="props.title"
        :description="props.description" :classes="props.headerClasses" />

      <ul :class="[
        'grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-4',
        props.showHeader ? 'mt-8 sm:mt-9' : '',
      ]" role="list">
        <li v-for="(item, i) in quickServiceCategories.items" :key="item.id" class="h-full" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
          <NuxtLink :to="item.href" class="service-card group"
            :class="`service-card--${iconTones[i % iconTones.length]}`">
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

        <li class="h-full" v-motion :initial="{ opacity: 0, y: 14 }" :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { delay: 40 + quickServiceCategories.items.length * 40, duration: 400 },
        }">
          <NuxtLink :to="quickServiceCategories.cta.href"
            class="service-card service-card--cta no-underline hover:no-underline"
            :aria-label="quickServiceCategories.cta.label">
            <span class="service-card__icon" aria-hidden="true">
              <Icon icon="solar:compass-linear" class="h-6 w-6" />
            </span>

            <h3 class="service-card__title font-display">
              {{ quickServiceCategories.cta.label }}
            </h3>
            <p class="service-card__desc">
              {{ quickServiceCategories.cta.supporting }}
            </p>
          </NuxtLink>
        </li>
      </ul>
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

.service-card--cta {
  background: linear-gradient(165deg, #2563eb 0%, #1d4ed8 100%);
  border-color: transparent;
  box-shadow: 0 12px 28px -14px rgba(37, 99, 235, 0.55);
}

.service-card--cta:hover {
  border-color: transparent;
  box-shadow: 0 18px 36px -16px rgba(37, 99, 235, 0.65);
}

.service-card--cta .service-card__icon {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.service-card--cta:hover .service-card__icon {
  background: #ffffff;
  color: #2563eb;
}

.service-card--cta .service-card__title,
.service-card--cta:hover .service-card__title {
  color: #ffffff;
  text-decoration: none;
  transition: none;
}

.service-card--cta .service-card__desc {
  color: rgba(255, 255, 255, 0.82);
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

.service-card:not(.service-card--cta):hover .service-card__title {
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
