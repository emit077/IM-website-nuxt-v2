<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spFamilyPlans, spPlansPreview } from '~/data/student-parent'

const accentStyles = {
  gold: 'bg-gradient-to-br from-[#c9a227] via-[#b8922a] to-[#9a7420]',
  diamond: 'bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]',
  platinum: 'bg-gradient-to-br from-[#3a4150] via-[#2c3340] to-[#1c212b]',
} as const
</script>

<template>
  <section id="subscription-plans" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="plans-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="plans-preview-heading" :badge="spPlansPreview.badge" :title="spPlansPreview.title"
        :description="spPlansPreview.description" :classes="spPlansPreview.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(plan, i) in spFamilyPlans.items" :key="plan.id" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 450 } }">
          <article
            :class="['relative flex h-full flex-col rounded-[1.5rem] p-6 text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)]', accentStyles[plan.accent]]">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">{{ plan.subtitle }}</p>
              <span
                class="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em]">
                {{ plan.popular ? 'Most Popular' : plan.duration }}
              </span>
            </div>
            <h3 class="mt-3 font-serif text-[2rem] font-semibold leading-none tracking-tight">{{ plan.name }}</h3>
            <p class="mt-3 text-[13.5px] font-medium text-white/90">{{ plan.duration }} · {{ plan.grades }}</p>
            <p class="mt-2 text-[13.5px] leading-relaxed text-white/80">{{ plan.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="spPlansPreview.cta.label" :href="spPlansPreview.cta.href"
          icon="mdi:scale-balance" />
      </div>
    </div>
  </section>
</template>
