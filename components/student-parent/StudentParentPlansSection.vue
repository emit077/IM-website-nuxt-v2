<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spFamilyPlans } from '~/data/student-parent'

const accentStyles = {
  gold: 'bg-gradient-to-br from-[#c9a227] via-[#b8922a] to-[#9a7420]',
  diamond: 'bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]',
  platinum: 'bg-gradient-to-br from-[#3a4150] via-[#2c3340] to-[#1c212b]',
} as const
</script>

<template>
  <section id="learning-plans" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="family-plans-heading">
    <div class="container-page relative">
      <CardHeader heading-id="family-plans-heading" :badge="spFamilyPlans.badge" :title="spFamilyPlans.title"
        :description="spFamilyPlans.description" :classes="spFamilyPlans.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6" role="list">
        <li v-for="(plan, i) in spFamilyPlans.items" :key="plan.id" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 80, duration: 480 } }">
          <article
            :class="['relative flex h-full flex-col overflow-hidden rounded-[1.65rem] p-6 text-white shadow-[0_22px_50px_-24px_rgba(15,23,42,0.45)] sm:p-7', accentStyles[plan.accent]]">
            <div class="flex items-start justify-between gap-3">
              <span
                class="grid h-9 w-11 place-items-center rounded-md bg-gradient-to-b from-[#f3d27a] to-[#c9a227] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                aria-hidden="true">
                <span class="flex w-6 flex-col gap-[3px]">
                  <span class="h-px w-full bg-[#8a6a18]/70" />
                  <span class="h-px w-full bg-[#8a6a18]/70" />
                  <span class="h-px w-full bg-[#8a6a18]/70" />
                </span>
              </span>
              <span
                class="inline-flex items-center rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-slate-900">
                <span v-if="plan.popular" class="mr-1" aria-hidden="true">★</span>
                {{ plan.popular ? 'Most Popular' : plan.duration }}
              </span>
            </div>

            <p class="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
              {{ plan.subtitle }}
            </p>
            <h3 class="mt-1 font-serif text-[2.35rem] font-semibold leading-none tracking-tight text-white sm:text-[2.6rem]">
              {{ plan.name }}
            </h3>

            <p class="mt-4 text-[13.5px] font-medium text-white/90">
              <template v-if="plan.popular">{{ plan.duration }} · </template>{{ plan.grades }}
            </p>
            <p class="text-[13px] text-white/75">{{ plan.subjects }}</p>
            <p class="mt-3 text-[13.5px] leading-relaxed text-white/85">{{ plan.description }}</p>

            <dl class="mt-5 grid grid-cols-2 gap-3 border-t border-dashed border-white/25 pt-4 text-[12px]">
              <div>
                <dt class="font-bold uppercase tracking-[0.08em] text-white/55">Primary Focus</dt>
                <dd class="mt-1 leading-snug text-white/90">{{ plan.focus }}</dd>
              </div>
              <div>
                <dt class="font-bold uppercase tracking-[0.08em] text-white/55">Progress</dt>
                <dd class="mt-1 leading-snug text-white/90">{{ plan.progress }}</dd>
              </div>
              <div class="col-span-2">
                <dt class="font-bold uppercase tracking-[0.08em] text-white/55">Learning Journey</dt>
                <dd class="mt-1 leading-snug text-white/90">{{ plan.journey }}</dd>
              </div>
              <div>
                <dt class="font-bold uppercase tracking-[0.08em] text-white/55">Support</dt>
                <dd class="mt-1 leading-snug text-white/90">{{ plan.support }}</dd>
              </div>
            </dl>

            <ul class="mt-5 flex-1 space-y-2.5" role="list">
              <li v-for="feature in plan.features" :key="feature"
                class="flex items-start gap-2.5 text-[13px] leading-snug text-white/90">
                <span class="mt-[7px] h-px w-4 shrink-0 bg-white/70" aria-hidden="true" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="mt-6 flex items-center justify-between gap-3 border-t border-dashed border-white/30 pt-4">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">{{ plan.code }}</p>
              <a :href="plan.cta.href"
                class="inline-flex items-center justify-center rounded-full bg-white/20 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
                {{ plan.cta.label }}
              </a>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="spFamilyPlans.cta.label" :href="spFamilyPlans.cta.href"
          icon="mdi:scale-balance" />
      </div>
    </div>
  </section>
</template>
