<script setup lang="ts">
import { resourceLinks } from '~/data/student-parent'
</script>

<template>
  <section id="student-brochure" class="relative bg-cream-50 py-10 sm:py-12" aria-label="Quick navigation">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Explore</span>
        <h2 class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Everything for <span class="text-gradient-brand">Students & Parents</span>
        </h2>
        <p class="mt-3 text-sm text-slate-600 sm:text-base">
          Jump to brochures, enrollment steps, tutor browsing, and plan details.
        </p>
      </div>

      <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4" role="list">
        <li v-for="(link, i) in resourceLinks" :key="link.id" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 40, duration: 450 } }">
          <a :href="link.href"
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_-16px_rgba(37,99,235,0.2)] sm:p-5">
            <span class="text-2xl" aria-hidden="true">{{ link.emoji }}</span>
            <h3 class="font-display mt-3 text-[15px] font-bold text-slate-900 sm:text-base">{{ link.title }}</h3>
            <p class="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-500">{{ link.description }}</p>
            <span
              class="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-blue-600 transition group-hover:gap-2">
              Learn more
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
