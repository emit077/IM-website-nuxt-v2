<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { seServices } from '~/data/special-educators'
</script>

<template>
  <section id="educational-services" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-services-heading">
    <div class="container-page">
      <CardHeader heading-id="se-services-heading" :badge="seServices.badge" :title="seServices.title"
        :description="seServices.description" :classes="seServices.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" role="list">
        <li v-for="(service, i) in seServices.items" :key="service.id" :id="service.id" class="scroll-mt-28" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 420 } }">
          <article
            class="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="service.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 line-clamp-2  font-display text-base font-bold text-slate-900 sm:text-lg">
              {{ service.title }}
            </h3>
            <p class="mt-3 line-clamp-2  text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
              {{ service.description }}
            </p>
            <ul class="mt-4 space-y-2" role="list">
              <li v-for="point in service.points" :key="point"
                class="flex items-start gap-2 text-[13.5px] leading-snug text-slate-700">
                <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                  aria-hidden="true">
                  <IconCheck class="h-3 w-3" />
                </span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
