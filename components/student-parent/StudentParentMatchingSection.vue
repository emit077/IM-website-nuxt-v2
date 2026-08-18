<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spMatching, spDemo } from '~/data/student-parent'
</script>

<template>
  <section id="matching" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="matching-heading">
    <div class="container-page relative">
      <CardHeader heading-id="matching-heading" :badge="spMatching.badge" :title="spMatching.title"
        :description="spMatching.description" :classes="spMatching.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in spMatching.considerations" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 35, duration: 400 } }">
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

      <div
        class="mt-8 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 py-5 text-center shadow-[0_20px_50px_-24px_rgba(29,78,216,0.5)] sm:px-8 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/80">{{ spMatching.formula.label }}</p>
        <p class="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold text-white sm:text-base">
          <template v-for="(part, i) in spMatching.formula.parts" :key="part">
            <span>{{ part }}</span>
            <span v-if="i < spMatching.formula.parts.length - 1" class="text-amber-300" aria-hidden="true">+</span>
          </template>
          <span class="text-amber-300" aria-hidden="true">→</span>
          <span>{{ spMatching.formula.result }}</span>
        </p>
      </div>
    </div>
  </section>

  <section id="free-demo" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="demo-heading">
    <div class="container-page relative">
      <CardHeader heading-id="demo-heading" :badge="spDemo.badge" :title="spDemo.title"
        :description="spDemo.description" :classes="spDemo.classes" />

      <ul class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" role="list">
        <li v-for="(item, i) in spDemo.checks" :key="item" v-motion :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 360 } }">
          <div
            class="flex h-full items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-cream-50/70 px-3.5 py-3.5">
            <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
              aria-hidden="true">
              <IconCheck class="h-3.5 w-3.5" />
            </span>
            <span class="text-[13.5px] font-semibold text-slate-800">{{ item }}</span>
          </div>
        </li>
      </ul>

      <div class="mt-10">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">After the Demo</p>
        <ul class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3" role="list">
          <li v-for="(item, i) in spDemo.after" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 400 } }">
            <article
              class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft">
              <span class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </article>
          </li>
        </ul>
      </div>

      <div class="mt-10 flex justify-center">
        <ActionBtn variant="theme-secondary" :label="spDemo.cta.label" :href="spDemo.cta.href"
          icon="mdi:calendar-check-outline" />
      </div>
    </div>
  </section>
</template>
