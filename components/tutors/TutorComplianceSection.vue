<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { complianceChecks } from '~/data/tutors'
</script>

<template>
  <section id="compliance" class="relative scroll-mt-20 overflow-hidden bg-slate-900 py-14 sm:py-16 lg:py-20"
    aria-labelledby="compliance-heading">
    <!-- Ambient glows -->
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

    <div class="container-page relative">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <!-- Left: copy -->
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
            <Icon icon="mdi:shield-check-outline" class="h-4 w-4" aria-hidden="true" />
            Compliance &amp; Screening
          </span>

          <h2 id="compliance-heading"
            class="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Trust and safety, built into every profile
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            To ensure trust and safety, Indian Mentors follows a strict compliance and screening
            framework before any tutor is matched with a student.
          </p>
          <p class="mt-3 text-sm leading-relaxed text-slate-400">
            Continuous monitoring helps maintain high-quality teaching standards and professional
            accountability — long after onboarding.
          </p>

          <a href="#tutor-register"
            class="mt-7 inline-flex items-center gap-2 rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10">
            View Compliance Standards
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <!-- Right: verification checklist -->
        <div class="lg:col-span-7">
          <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="(check, i) in complianceChecks" :key="check.title"
              :class="i === complianceChecks.length - 1 ? 'sm:col-span-2' : ''" v-motion
              :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 70, duration: 450 } }">
              <article
                class="group flex h-full items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-white/10 sm:p-5">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/25 transition group-hover:bg-emerald-400 group-hover:text-slate-900"
                  aria-hidden="true">
                  <Icon :icon="check.iconMdi" class="h-5 w-5" />
                </span>
                <div>
                  <h3 class="font-display text-[15px] font-bold text-white">{{ check.title }}</h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-400">{{ check.description }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
