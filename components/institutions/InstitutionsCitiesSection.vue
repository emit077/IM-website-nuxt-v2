<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { citiesSection, cityGroups } from '~/data/institutions'

const mapImage = usePublicAsset(citiesSection.mapImage)

function cityIconSrc(icon: string | null) {
  return icon ? usePublicAsset(`/assets/img/city-icons/${icon}.png`) : ''
}
</script>

<template>
  <section id="cities" class="relative scroll-mt-24 overflow-hidden bg-white section-py" aria-labelledby="cities-heading">
    <div class="container-page relative">
      <CardHeader heading-id="cities-heading" :badge="citiesSection.badge" :title="citiesSection.title"
        :description="citiesSection.description" :classes="citiesSection.classes" />

      <div class="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <div class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-soft lg:col-span-5"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <img :src="mapImage" :alt="citiesSection.mapAlt" class="h-full w-full object-cover object-center"
            loading="lazy" decoding="async" />
        </div>

        <div class="flex flex-col gap-5 lg:col-span-7">
          <article
            v-for="(group, i) in cityGroups"
            :key="group.id"
            class="rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft sm:p-6"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 400 } }"
          >
            <div class="flex items-start gap-3">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon :icon="group.iconMdi" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-base font-bold text-slate-900">{{ group.title }}</h3>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ group.description }}</p>
              </div>
            </div>

            <ul v-if="group.cities.length" class="mt-4 flex flex-wrap gap-2" role="list">
              <li v-for="city in group.cities" :key="city.label">
                <span
                  class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-[13px] font-semibold text-slate-700"
                >
                  <img
                    v-if="city.icon"
                    :src="cityIconSrc(city.icon)"
                    :alt="''"
                    class="h-5 w-5 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <Icon v-else icon="mdi:map-marker-outline" class="h-4 w-4 text-blue-600" aria-hidden="true" />
                  {{ city.label }}
                </span>
              </li>
            </ul>

            <ul v-else-if="'benefits' in group" class="mt-4 grid gap-2 sm:grid-cols-2" role="list">
              <li
                v-for="item in group.benefits"
                :key="item"
                class="flex items-start gap-2.5 text-[13px] text-slate-700"
              >
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div
        class="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
      >
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">Digital placements</p>
        <h3 class="font-display mt-2 text-xl font-bold sm:text-2xl">{{ citiesSection.online.title }}</h3>
        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-blue-50">{{ citiesSection.online.description }}</p>
        <ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
          <li v-for="item in citiesSection.online.items" :key="item" class="flex items-start gap-2.5 text-[13.5px] font-medium">
            <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
              aria-hidden="true">
              <IconCheck class="h-3 w-3" />
            </span>
            {{ item }}
          </li>
        </ul>
        <p class="mt-6 border-t border-white/15 pt-4 text-sm leading-relaxed text-blue-100">
          {{ citiesSection.closing }}
        </p>
      </div>
    </div>
  </section>
</template>
