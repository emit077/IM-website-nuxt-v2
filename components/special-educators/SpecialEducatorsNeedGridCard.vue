<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  id: string
  index: number
  shortTitle: string
  title: string
  description: string
  image: string
  iconMdi: string
  goals: string[]
}>()

function openDetail(event: MouseEvent) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  document.getElementById(props.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${props.id}`)
}
</script>

<template>
  <a :href="`#${id}`"
    class="need-grid-card group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white"
    @click="openDetail">
    <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
      <img :src="usePublicAsset(image)" :alt="`${shortTitle} educational support — Indian Mentors`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy"
        decoding="async" />
      <span
        class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold tracking-wide text-slate-800 shadow-sm backdrop-blur-sm">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-600" aria-hidden="true">
          <Icon :icon="iconMdi" class="h-3 w-3" />
        </span>
        {{ String(index + 1).padStart(2, '0') }} · {{ shortTitle }}
      </span>
    </div>

    <div class="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
      <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
        {{ title }}
      </h3>
      <p class="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
        {{ description }}
      </p>
      <ul class="mt-3 flex flex-wrap gap-1.5" role="list">
        <li v-for="goal in goals.slice(0, 3)" :key="goal"
          class="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200/80">
          {{ goal }}
        </li>
      </ul>
      <span
        class="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-blue-600 transition group-hover:gap-1.5">
        View support
        <Icon icon="mdi:arrow-down" class="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  </a>
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
