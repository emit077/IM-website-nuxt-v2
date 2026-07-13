<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { territoriesSection } from '~/data/channel-partner'
</script>

<template>
  <section id="available-territories" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="available-territories-heading">
    <div class="container-page">
      <CardHeader heading-id="available-territories-heading" :badge="territoriesSection.kicker"
        :title="territoriesSection.title" :description="territoriesSection.description"
        :classes="territoriesSection.classes" />

      <div class="mx-auto mt-10 max-w-4xl" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div
          class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-5">
            <div class="flex flex-col justify-center p-6 sm:p-8 lg:col-span-2">
              <ul class="space-y-4" role="list">
                <li v-for="feature in territoriesSection.features" :key="feature.label"
                  class="flex items-center gap-3">
                  <span
                    class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm"
                    aria-hidden="true">
                    <Icon :icon="feature.iconMdi" class="h-5 w-5" />
                  </span>
                  <span class="text-sm font-semibold text-slate-800">{{ feature.label }}</span>
                </li>
              </ul>
              <a :href="territoriesSection.cta.href"
                class="btn-primary ripple group mt-8 inline-flex w-fit items-center gap-2">
                <Icon icon="mdi:map-outline" class="h-4 w-4" aria-hidden="true" />
                {{ territoriesSection.cta.label }}
              </a>
            </div>

            <div class="relative min-h-[240px] bg-blue-50/50 lg:col-span-3 lg:min-h-[320px]">
              <div class="absolute inset-0 flex items-center justify-center p-6">
                <div class="text-center">
                  <span
                    class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-blue-100 text-blue-600 ring-1 ring-blue-200"
                    aria-hidden="true">
                    <Icon icon="mdi:map-marker-radius" class="h-8 w-8" />
                  </span>
                  <p class="mt-4 font-display text-lg font-bold text-slate-800">Interactive Territory Map</p>
                  <p class="mt-2 max-w-xs text-sm text-slate-500">
                    Explore available cities and expansion opportunities across India.
                  </p>
                </div>
              </div>
              <div aria-hidden="true" class="absolute inset-0 opacity-20">
                <svg class="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="120" cy="80" r="6" fill="#2563eb" />
                  <circle cx="200" cy="120" r="8" fill="#2563eb" />
                  <circle cx="280" cy="90" r="5" fill="#2563eb" />
                  <circle cx="160" cy="180" r="7" fill="#2563eb" />
                  <circle cx="240" cy="200" r="6" fill="#2563eb" />
                  <circle cx="320" cy="160" r="5" fill="#2563eb" />
                  <circle cx="100" cy="220" r="4" fill="#93c5fd" />
                  <circle cx="300" cy="240" r="4" fill="#93c5fd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
