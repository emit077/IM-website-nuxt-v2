<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { whyChooseSection } from '~/data/services'
</script>

<template>
  <section id="why-choose" class="relative scroll-mt-24 bg-white section-py" aria-labelledby="why-choose-heading">
    <div class="container-page">
      <CardHeader heading-id="why-choose-heading" :badge="whyChooseSection.kicker" :title="whyChooseSection.title"
        :description="whyChooseSection.description" :classes="whyChooseSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(feat, i) in whyChooseSection.features.slice(0, 6)" :key="feat.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-5">
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="feat.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <h3 class="font-display text-[15px] font-bold text-slate-900 sm:text-base">{{ feat.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ feat.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="primary" href="/why-choose" label="Explore Why Choose Indian Mentors"
          icon="mdi:arrow-right" />
      </div>
    </div>
  </section>
</template>
