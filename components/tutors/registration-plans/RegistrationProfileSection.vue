<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { profileStrengthSection, upgradePathSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="profile-strength" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="profile-strength-heading">
    <div class="container-page relative">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5">
          <CardHeader align="left" heading-id="profile-strength-heading" :badge="profileStrengthSection.badge"
            :title="profileStrengthSection.title" :description="profileStrengthSection.description"
            :classes="profileStrengthSection.classes" />

          <p
            class="mt-7 rounded-2xl border border-blue-100 bg-white px-5 py-4 text-[14px] font-semibold leading-relaxed text-blue-900">
            {{ profileStrengthSection.keyMessage }}
          </p>
        </div>

        <div class="lg:col-span-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {{ profileStrengthSection.checklistLabel }}
          </p>
          <ul class="mt-5 grid gap-3 sm:grid-cols-2" role="list">
            <li v-for="(item, i) in profileStrengthSection.checklist" :key="item" v-motion
              :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 380 } }">
              <span
                class="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 text-[13.5px] font-semibold text-slate-800 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
                <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                  aria-hidden="true">
                  <IconCheck class="h-3.5 w-3.5" />
                </span>
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="upgrade-path" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="upgrade-path-heading">
    <div class="container-page relative">
      <CardHeader heading-id="upgrade-path-heading" :badge="upgradePathSection.badge" :title="upgradePathSection.title"
        :description="upgradePathSection.description" classes="!px-0 !py-0 mx-auto max-w-3xl" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list"
        :aria-label="upgradePathSection.pathLabel">
        <li v-for="(step, i) in upgradePathSection.steps" :key="step" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 400 } }">
          <div :class="[
            'flex h-full items-center gap-4 rounded-[1.35rem] border p-5',
            i === upgradePathSection.steps.length - 2
              ? 'border-blue-600 bg-blue-50/70'
              : 'border-slate-200/80 bg-cream-50/60',
          ]">
            <span :class="[
              'grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-[13px] font-extrabold',
              i === upgradePathSection.steps.length - 2
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 ring-1 ring-blue-100',
            ]">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <p class="font-display text-[15px] font-bold text-slate-900">{{ step }}</p>
          </div>
        </li>
      </ol>

      <div class="mt-9 flex justify-center" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 460 } }">
        <ActionBtn variant="primary" :label="upgradePathSection.cta.label" :href="upgradePathSection.cta.href"
          icon="mdi:star-four-points-outline" />
      </div>
    </div>
  </section>
</template>
