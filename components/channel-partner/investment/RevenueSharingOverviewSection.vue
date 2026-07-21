<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { revenueSharingOverview } from '~/data/channel-partner-investment'
</script>

<template>
  <section id="revenue-sharing" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="revenue-sharing-heading">
    <div class="container-page">
      <CardHeader heading-id="revenue-sharing-heading" :badge="revenueSharingOverview.kicker"
        :title="revenueSharingOverview.title" :description="revenueSharingOverview.description"
        :classes="revenueSharingOverview.classes" />

      <p class="mt-8 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
        {{ revenueSharingOverview.sourcesTitle }}
      </p>
      <ul class="mx-auto mt-4 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2" role="list">
        <li v-for="(source, i) in revenueSharingOverview.sources" :key="source.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
          <article
            class="group flex h-full gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="source.iconMdi" class="h-6 w-6" />
            </span>
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-blue-600">{{ source.no }}</p>
              <h3 class="mt-1 font-display text-base font-bold text-slate-900 sm:text-lg">{{ source.title }}</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-slate-600">{{ source.description }}</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
