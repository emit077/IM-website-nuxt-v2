<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { requirementsSection, verificationSection } from '~/data/tutor-registration-plans'
</script>

<template>
  <section id="registration-requirements" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="registration-requirements-heading">
    <div class="container-page relative">
      <CardHeader heading-id="registration-requirements-heading" :badge="requirementsSection.badge"
        :title="requirementsSection.title" :classes="requirementsSection.classes" />

      <div class="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article v-for="(group, i) in requirementsSection.groups" :key="group.title"
          class="flex flex-col rounded-[1.75rem] border border-slate-200/80 bg-cream-50/60 p-6 shadow-soft sm:p-8"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 450 } }">
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true">
            <Icon :icon="group.iconMdi" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 font-display text-xl font-bold text-slate-900">{{ group.title }}</h3>
          <ul class="mt-5 grid flex-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" role="list">
            <li v-for="item in group.items" :key="item"
              class="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700">
              <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              <span class="whitespace-nowrap">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>

      <p
        class="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-5 py-4 text-[13.5px] leading-relaxed text-amber-900">
        <Icon icon="mdi:lightbulb-on-outline" class="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <span><span class="font-bold">Pro Tip:</span> {{ requirementsSection.proTip }}</span>
      </p>
    </div>
  </section>
</template>
