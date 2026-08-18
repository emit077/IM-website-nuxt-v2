<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spEnrollmentPreview, spJourney, spProfiles } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="enrollment-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="enrollment-preview-heading" :badge="spEnrollmentPreview.badge"
        :title="spEnrollmentPreview.title" :description="spEnrollmentPreview.description"
        :classes="spEnrollmentPreview.classes" />

      <div
        class="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 px-4 py-4 shadow-soft sm:px-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <template v-for="(label, i) in spJourney.flow" :key="label">
          <span class="text-[13px] font-semibold text-slate-800 sm:text-sm">{{ label }}</span>
          <Icon v-if="i < spJourney.flow.length - 1" icon="mdi:arrow-right" class="h-4 w-4 text-blue-500"
            aria-hidden="true" />
        </template>
      </div>

      <ul class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2" role="list">
        <li v-for="(profile, i) in spProfiles.items" :key="profile.id" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }">
          <article :class="[
            'flex h-full flex-col rounded-[1.35rem] p-6 shadow-soft',
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
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="spEnrollmentPreview.cta.label"
          :href="spEnrollmentPreview.cta.href" icon="mdi:clipboard-list-outline" />
      </div>
    </div>
  </section>
</template>
