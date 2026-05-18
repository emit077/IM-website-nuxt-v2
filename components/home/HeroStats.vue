<script setup lang="ts">
const stats = [
  { value: '50K', suffix: '+', label: 'active students learning every month' },
  { value: '5', suffix: '+ lakh', label: 'verified tutors across every subject' },
  { value: '50', suffix: '+ lakh', label: 'sessions delivered since 2018' },
  { value: '98', suffix: '%', label: 'satisfaction rate from verified reviews' },
]
</script>

<template>
  <div class="relative w-full h-full min-h-[420px] rounded-[2rem]  p-6 sm:p-8 lg:p-10 " role="region"
    aria-label="Platform statistics">
    <div aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 w-40 opacity-30"
      style="background-image: radial-gradient(#94a3b8 0.8px, transparent 0.8px); background-size: 10px 10px;"></div>
    <div class="grid h-full grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10 content-center" role="list">
      <SharedReviewerStrip class="sm:col-span-2 px-4 py-3" audience="parent" />
      <div v-for="(stat, i) in stats" :key="stat.label" role="listitem"
        class="relative border-l-[3px] border-blue-600 pl-6" v-motion :initial="{ opacity: 0, y: 14 }" :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 900 + i * 110, ease: 'easeOut' },
        }">
        <div
          class="font-display font-extrabold text-[2.35rem] sm:text-[2.6rem] leading-none tracking-tight text-slate-900">
          {{ stat.value }}<span class="text-blue-600">{{ stat.suffix }}</span>
        </div>
        <p class="mt-3 text-[1.1rem] leading-snug text-slate-600 max-w-[18ch]">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </div>
</template>
