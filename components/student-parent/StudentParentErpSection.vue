<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  dashboardModules,
  parentVisibilityPoints,
  secureEcosystemPoints,
} from '~/data/student-parent'

const frameworkSteps = ['Plan', 'Track', 'Review', 'Improve']
</script>

<template>
  <section id="erp-dashboard" class="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20"
    aria-labelledby="erp-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader variant="variant-1" badge="🖥️ ERP SYSTEM &amp; TRANSPARENCY"
        title="Parents &amp; Student <span class='text-gradient-brand'>Learning Dashboard</span>"
        description="Manage Learning. Track Progress. Stay Connected – Anytime, Anywhere. Personalised tutoring supported by a technology-driven ERP system for complete academic transparency."
        content-class="mx-auto max-w-3xl !text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto" />

      <p class="mx-auto mt-4 max-w-2xl text-center text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
        INDIAN MENTORS – Personalised Learning Powered by Smart Technology
      </p>

      <!-- Framework strip -->
      <div class="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 sm:gap-3"
        v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <template v-for="(step, i) in frameworkSteps" :key="step">
          <span
            class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-soft ring-1 ring-slate-200/80">
            {{ step }}
          </span>
          <span v-if="i < frameworkSteps.length - 1" class="text-slate-400" aria-hidden="true">→</span>
        </template>
      </div>

      <div class="mt-4 text-center text-sm font-medium text-slate-500">
        Learning Transparency Framework
      </div>

      <!-- Dashboard modules grid -->
      <div class="mt-10">
        <h3 id="erp-heading" class="sr-only">Smart Learning Dashboard modules</h3>
        <p class="mb-6 text-center font-display text-lg font-bold text-slate-900 sm:text-xl">
          📊 Smart Learning Dashboard — One Platform to Manage the Entire Learning Journey
        </p>

        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="(mod, i) in dashboardModules" :key="mod.id" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 450 } }">
            <article
              class="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.15)]">
              <div class="flex items-start gap-3">
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-xl ring-1 ring-indigo-100"
                  aria-hidden="true">
                  {{ mod.emoji }}
                </span>
                <div>
                  <h4 class="font-display text-[15px] font-bold text-slate-900">{{ mod.title }}</h4>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ mod.description }}</p>
                </div>
              </div>

              <ul class="mt-4 flex-1 space-y-1.5" role="list">
                <li v-for="feat in mod.features" :key="feat" class="flex items-start gap-2 text-[12.5px] text-slate-600">
                  <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                  {{ feat }}
                </li>
              </ul>

              <p class="mt-4 rounded-lg bg-blue-50/80 px-3 py-2 text-[12px] font-medium text-blue-800">
                {{ mod.benefit }}
              </p>
            </article>
          </li>
        </ul>
      </div>

      <!-- Secure ecosystem -->
      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7"
          v-motion :initial="{ opacity: 0, x: -12 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500 } }">
          <h3 class="font-display text-lg font-bold text-slate-900">🔐 Secure Learning Ecosystem</h3>
          <p class="mt-2 text-sm text-slate-600">
            The Indian Mentors ERP System ensures a safe and transparent digital learning environment through:
          </p>
          <ul class="mt-4 space-y-2" role="list">
            <li v-for="point in secureEcosystemPoints" :key="point"
              class="flex items-start gap-2 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 sm:p-7"
          v-motion :initial="{ opacity: 0, x: 12 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 500, delay: 80 } }">
          <h3 class="font-display text-lg font-bold text-slate-900">Parents always know</h3>
          <ul class="mt-4 space-y-2" role="list">
            <li v-for="point in parentVisibilityPoints" :key="point"
              class="flex items-start gap-2 text-[13px] text-slate-700">
              <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-8 text-center text-sm font-medium text-slate-600">
        📌 Smart Learning. Complete Transparency. —
        <span class="text-blue-700">Indian Mentors – Where Personalised Learning Meets Smart Technology.</span>
      </p>
    </div>
  </section>
</template>
