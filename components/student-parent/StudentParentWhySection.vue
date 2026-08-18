<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { spWhyFamilies, spGoals, spFamilyNeeds } from '~/data/student-parent'
</script>

<template>
  <section id="why-families" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-families-heading">
    <div class="container-page relative">
      <CardHeader heading-id="why-families-heading" :badge="spWhyFamilies.badge" :title="spWhyFamilies.title"
        :classes="spWhyFamilies.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(item, i) in spWhyFamilies.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 380 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6">
            <span class="flex items-center gap-2.5">
              <span class="grid h-6 w-6 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3.5 w-3.5" />
              </span>
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
            </span>
            <p class="mt-3 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section id="learning-goals" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="goals-heading">
    <div class="container-page relative">
      <CardHeader heading-id="goals-heading" :badge="spGoals.badge" :title="spGoals.title"
        :classes="spGoals.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(item, i) in spGoals.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card sm:p-6">
            <span
              class="grid h-11 w-11 place-items-center rounded-2xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-600">{{ item.description }}</p>
            <p class="mt-4 text-[12px] font-bold uppercase tracking-[0.08em] text-blue-600">Goal: {{ item.goal }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>

  <section id="family-needs" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="family-needs-heading">
    <div class="container-page relative">
      <CardHeader heading-id="family-needs-heading" :badge="spFamilyNeeds.badge" :title="spFamilyNeeds.title"
        :classes="spFamilyNeeds.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in spFamilyNeeds.items" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
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
    </div>
  </section>
</template>
