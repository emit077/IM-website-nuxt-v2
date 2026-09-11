<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'

const props = defineProps<{
  index: number
  shortTitle: string
  title: string
  description: string
  image: string
  iconMdi: string
  goals: string[]
}>()

const overlayTitle = computed(() =>
  props.title.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim(),
)
</script>

<template>
  <div
    class="need-grid-card group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white">
    <div class="relative aspect-[18/10] overflow-hidden bg-slate-100">
      <img :src="usePublicAsset(image)" :alt="`${shortTitle} educational support — Indian Mentors`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy"
        decoding="async" />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/25 to-transparent"
      />
      <span
        class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-sm">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600" aria-hidden="true">
          <Icon :icon="iconMdi" class="h-3 w-3" />
        </span>
        {{ String(index + 1).padStart(2, '0') }} · {{ shortTitle }}
      </span>
      <h3
        class="absolute inset-x-3 bottom-3 font-display text-[15px] font-bold leading-tight text-white drop-shadow-sm sm:text-base"
      >
        {{ overlayTitle }}
      </h3>
    </div>

    <div class="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
      <p class="text-[13px] leading-relaxed text-slate-500">
        {{ description }}
      </p>
      <ul class="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 mb-1" role="list">
        <li v-for="goal in goals.slice(0, 4)" :key="goal"
          class="flex items-start gap-2 text-[12.5px] leading-snug text-slate-700">
          <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
            aria-hidden="true">
            <IconCheck class="h-3 w-3" />
          </span>
          <span>{{ goal }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.need-grid-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.need-grid-card:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 36px -22px rgba(37, 99, 235, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .need-grid-card {
    transition: none;
  }

  .need-grid-card:hover {
    transform: none;
  }
}
</style>
