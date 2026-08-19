<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spEnrollmentPreview, spProfiles } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="enrollment-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="enrollment-preview-heading" :badge="spEnrollmentPreview.badge"
        :title="spEnrollmentPreview.title" :description="spEnrollmentPreview.description"
        :classes="spEnrollmentPreview.classes" />

      <div class="mt-8 grid items-stretch gap-5 lg:grid-cols-12 lg:gap-8">
        <ul class="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:col-span-7" role="list">
          <li v-for="(profile, i) in spProfiles.items" :key="profile.id" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }">
            <article :class="[
              'flex h-full flex-col rounded-[1.35rem] p-5 shadow-soft sm:p-6',
              profile.featured ? 'bg-[#2563eb] text-white' : 'border border-slate-200/80 bg-white',
            ]">
              <p :class="[
                'text-[11px] font-bold uppercase tracking-[0.16em]',
                profile.featured ? 'text-blue-100' : 'text-blue-600',
              ]">
                {{ profile.name }}
              </p>
              <p class="mt-3 font-display text-3xl font-extrabold tracking-tight">
                {{ profile.price }}
                <span v-if="profile.priceNote" class="text-base font-semibold opacity-80">{{ profile.priceNote }}</span>
              </p>
              <p :class="['mt-3 text-sm leading-relaxed', profile.featured ? 'text-blue-50' : 'text-slate-600']">
                {{ profile.description }}
              </p>

              <ul class="mt-5 flex flex-1 flex-col gap-2" role="list">
                <li v-for="item in profile.included" :key="item.title" class="flex items-start gap-2">
                  <span :class="[
                    'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
                    profile.featured ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600',
                  ]" aria-hidden="true">
                    <IconCheck class="h-2.5 w-2.5" />
                  </span>
                  <a v-if="item.href" :href="item.href"
                    :class="['text-[13px] font-medium leading-snug underline decoration-white/40 underline-offset-2 hover:decoration-white', profile.featured ? 'text-blue-50' : 'text-blue-700']">
                    {{ item.title }}
                  </a>
                  <span v-else class="text-[13px] font-medium leading-snug">{{ item.title }}</span>
                </li>
              </ul>

              <div class="mt-6">
                <ActionBtn class="!w-full" :variant="profile.featured ? 'theme-secondary' : 'primary'"
                  :label="profile.cta.label" :href="profile.cta.href" />
              </div>
            </article>
          </li>
        </ul>
        <div class="relative min-h-[18rem] sm:min-h-[22rem] lg:col-span-5 lg:min-h-0" v-motion
          :initial="{ opacity: 0, x: -18 }" :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 520 } }">
          <figure
            class="relative flex h-full items-end justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-sky-50">
            <img :src="usePublicAsset(spEnrollmentPreview.image)" :alt="spEnrollmentPreview.imageAlt"
              class="h-full w-full object-contain object-bottom" loading="lazy" decoding="async" />
            <figcaption
              class="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur-sm sm:right-auto sm:max-w-[90%]">
              <p class="font-display text-[15px] font-extrabold leading-snug text-slate-900">
                {{ spEnrollmentPreview.imageCaption }}
              </p>
              <p class="mt-0.5 text-[13px] font-medium text-slate-500">{{ spEnrollmentPreview.imageNote }}</p>
            </figcaption>
          </figure>
          <span
            class="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-100 sm:left-5 sm:top-5">
            <Icon icon="mdi:account-plus-outline" class="h-4 w-4" aria-hidden="true" />
            Start Free
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
