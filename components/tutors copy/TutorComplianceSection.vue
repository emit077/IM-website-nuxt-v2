<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { complianceChecks, complianceSection } from '~/data/tutors'
</script>

<template>
  <section id="compliance"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 section-py"
    aria-labelledby="compliance-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

    <div class="container-page relative">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
          <CardHeader theme="dark" align="left" heading-id="compliance-heading" :badge="complianceSection.badge"
            :title="complianceSection.title" :description="complianceSection.description"
            :classes="complianceSection.classes">
            <p class="mt-3 text-sm font-medium leading-relaxed text-white/70 sm:text-base">
              {{ complianceSection.note }}
            </p>
          </CardHeader>
        </div>
        <div class="lg:col-span-7">
          <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="(check, i) in complianceChecks" :key="check.title"
              :class="i === complianceChecks.length - 1 ? 'sm:col-span-2' : ''" v-motion
              :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 70, duration: 450 } }">
              <article
                class="group flex h-full items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 sm:p-5">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-white group-hover:text-blue-700"
                  aria-hidden="true">
                  <Icon :icon="check.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display truncate text-[15px] font-bold text-white">{{ check.title }}</h3>
                  <p class="mt-1 line-clamp-2 text-[13px] leading-relaxed text-blue-100/75">{{ check.description }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
