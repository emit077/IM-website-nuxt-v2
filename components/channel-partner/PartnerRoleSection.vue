<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { partnerRoleSection } from '~/data/channel-partner'
</script>

<template>
  <section id="partner-role" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="partner-role-heading">
    <div class="container-page">
      <CardHeader heading-id="partner-role-heading" :badge="partnerRoleSection.kicker"
        :title="partnerRoleSection.title" :description="partnerRoleSection.description"
        :classes="partnerRoleSection.classes" />

      <div class="mt-10 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          class="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 shadow-soft sm:p-8 lg:col-span-6"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <h3 class="font-display text-lg font-bold text-blue-700 sm:text-xl">
            {{ partnerRoleSection.responsibilitiesTitle }}
          </h3>
          <ul class="mt-5 space-y-3.5" role="list">
            <li v-for="(item, i) in partnerRoleSection.responsibilities" :key="item"
              class="flex items-start gap-3 text-[13.5px] leading-relaxed text-slate-700 sm:text-sm"
              v-motion :initial="{ opacity: 0, x: -8 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 45, duration: 400 } }">
              <span
                class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-600 text-white"
                aria-hidden="true">
                <IconCheck class="h-3.5 w-3.5" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>

        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:gap-5" role="list">
          <li v-for="(highlight, i) in partnerRoleSection.highlights" :key="highlight.title"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 60, duration: 450 } }">
            <article
              class="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
              <span
                class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="highlight.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ highlight.title }}</h3>
              <p class="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                {{ highlight.description }}
              </p>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
