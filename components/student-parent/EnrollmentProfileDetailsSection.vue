<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { enrollmentFreeDetail, enrollmentPremiumDetail } from '~/data/student-parent'
</script>

<template>
  <section id="free-profile" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="free-profile-heading">
    <div class="container-page relative">
      <CardHeader heading-id="free-profile-heading" :badge="enrollmentFreeDetail.badge"
        :title="enrollmentFreeDetail.price" :description="enrollmentFreeDetail.description"
        :classes="enrollmentFreeDetail.classes" />

      <p class="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {{ enrollmentFreeDetail.includedLabel }}
      </p>
      <ul class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in enrollmentFreeDetail.included" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-8 rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-5 text-center shadow-soft sm:px-8"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          {{ enrollmentFreeDetail.idealLabel }}
        </p>
        <p class="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold text-slate-800">
          <template v-for="(label, i) in enrollmentFreeDetail.idealFor" :key="label">
            <span>{{ label }}</span>
            <Icon v-if="i < enrollmentFreeDetail.idealFor.length - 1" icon="mdi:arrow-right"
              class="h-4 w-4 text-blue-500" aria-hidden="true" />
          </template>
        </p>
      </div>

      <div class="mt-8 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="enrollmentFreeDetail.cta.label"
          :href="enrollmentFreeDetail.cta.href" icon="mdi:account-plus-outline" />
      </div>
    </div>
  </section>

  <section id="premium-profile" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="premium-profile-heading">
    <div class="container-page relative">
      <CardHeader heading-id="premium-profile-heading" :badge="enrollmentPremiumDetail.badge"
        :title="enrollmentPremiumDetail.title" :description="enrollmentPremiumDetail.description"
        :classes="enrollmentPremiumDetail.classes">
        <template #title>
          <p class="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {{ enrollmentPremiumDetail.price }}
          </p>
          <p class="mt-1 text-sm font-medium text-slate-500">{{ enrollmentPremiumDetail.priceNote }}</p>
          <h2 id="premium-profile-heading"
            class="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {{ enrollmentPremiumDetail.title }}
          </h2>
        </template>
      </CardHeader>

      <p class="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        {{ enrollmentPremiumDetail.plusLabel }}
      </p>
      <ul class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in enrollmentPremiumDetail.features" :key="item.title" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 25, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            <ul v-if="item.points?.length" class="mt-3 flex flex-wrap gap-1.5" role="list">
              <li v-for="point in item.points" :key="point"
                class="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-100">
                {{ point }}
              </li>
            </ul>
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="enrollmentPremiumDetail.cta.label"
          :href="enrollmentPremiumDetail.cta.href" icon="mdi:star-four-points-outline" />
      </div>
    </div>
  </section>
</template>
