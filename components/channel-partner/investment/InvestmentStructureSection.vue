<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { investmentStructureSection } from '~/data/channel-partner-investment'
</script>

<template>
  <section id="investment-structure" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="investment-structure-heading">
    <div class="container-page">
      <CardHeader heading-id="investment-structure-heading" :badge="investmentStructureSection.kicker"
        :title="investmentStructureSection.title" :description="investmentStructureSection.description"
        :classes="investmentStructureSection.classes" />

      <ul class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2" role="list">
        <li v-for="(item, i) in investmentStructureSection.components" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
          <article
            class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-display text-lg font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <p class="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
        {{ investmentStructureSection.intro }}
      </p>
    </div>
  </section>
</template>
