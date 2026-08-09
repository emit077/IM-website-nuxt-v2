<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseTrustStrip } from '~/data/why-choose'
</script>

<template>
  <section id="why-indian-mentors" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="trust-strip-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/80 to-transparent" />

    <div class="container-page relative">
      <CardHeader heading-id="trust-strip-heading" :badge="whyChooseTrustStrip.kicker"
        :title="whyChooseTrustStrip.title" :description="whyChooseTrustStrip.description"
        :classes="whyChooseTrustStrip.classes" />

      <ul
        class="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6"
        role="list">
        <li v-for="(item, i) in whyChooseTrustStrip.items" :key="item.title"
          class="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
          <article
            class="group flex h-full flex-col rounded-3xl bg-slate-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-blue-50/60 sm:p-7">
            <span
              class="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-600 shadow-soft transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 font-display text-base font-bold text-slate-900 sm:text-lg">
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
