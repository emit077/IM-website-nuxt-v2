<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { resourceLinks } from '~/data/student-parent'

const { data: studentBrochures } = await useWebsiteBrochures('student')

const links = computed(() => {
  const brochureUrl = studentBrochures.value?.[0]?.brochure
  return resourceLinks.map((link) =>
    link.id === 'student-brochure' && brochureUrl
      ? { ...link, href: brochureUrl }
      : link,
  )
})
</script>

<template>
  <section id="student-brochure"
    class="relative z-[1] border-b border-slate-200/60 bg-white pt-14 section-py-compact sm:pt-16"
    aria-label="Quick navigation">
    <div class="container-page">
      <p class="text-center font-display text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
        Explore
      </p>

      <ul class="mt-6 grid grid-cols-2 gap-3 sm:gap-3.5 lg:grid-cols-5" role="list">
        <li v-for="(link, i) in links" :key="link.id"
          :class="i === links.length - 1 ? 'col-span-2 sm:col-span-1' : ''" v-motion
          :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }">
          <a :href="link.href"
            class="group flex h-full flex-col gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/50 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-soft sm:px-5">
            <span
              class="grid h-9 w-9 place-items-center rounded-xl bg-white text-[var(--theme-blue,#2a2fff)] shadow-sm ring-1 ring-slate-200/80 transition group-hover:bg-[var(--theme-blue,#2a2fff)] group-hover:text-white group-hover:ring-transparent">
              <Icon :icon="link.iconMdi" class="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span class="text-[13px] font-semibold leading-snug text-slate-800 sm:text-sm">
              {{ link.title }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
