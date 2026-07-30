<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseTrustStrip } from '~/data/why-choose'
</script>

<template>
  <section id="why-indian-mentors" class="relative scroll-mt-28 bg-white section-py"
    aria-labelledby="trust-strip-heading">
    <div class="container-page">
      <CardHeader heading-id="trust-strip-heading" :badge="whyChooseTrustStrip.kicker"
        :title="whyChooseTrustStrip.title" :description="whyChooseTrustStrip.description"
        :classes="whyChooseTrustStrip.classes" />

      <ul
        class="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-5"
        role="list">
        <li v-for="(item, i) in whyChooseTrustStrip.items" :key="item.title"
          class="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
          <article
            class="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900 sm:text-lg">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
              {{ item.description }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
