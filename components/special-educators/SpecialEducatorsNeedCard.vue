<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'

defineProps<{
  id: string
  index: number
  reversed?: boolean
  shortTitle: string
  title: string
  description: string
  image: string
  iconMdi: string
  support: string[]
  goals: string[]
  note?: string
}>()
</script>

<template>
  <article
    :id="id"
    class="need-card relative scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white lg:grid lg:grid-cols-12 lg:items-stretch"
  >
    <div class="relative lg:col-span-5" :class="reversed ? 'lg:order-2' : 'lg:order-1'">
      <div class="group relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[22rem]">
        <img
          :src="usePublicAsset(image)"
          :alt="`${shortTitle} educational support — Indian Mentors`"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span
          class="absolute bottom-4 z-10 inline-flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-soft backdrop-blur-sm"
          :class="reversed ? 'right-4' : 'left-4'"
        >
          <span
            class="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
            aria-hidden="true"
          >
            <Icon :icon="iconMdi" class="h-4 w-4" />
          </span>
          <span class="pr-1 font-display text-sm font-bold text-slate-900">{{ shortTitle }}</span>
        </span>
      </div>
    </div>

    <div
      class="px-5 py-5 sm:px-6 sm:py-6 lg:col-span-7 lg:px-8 lg:py-7"
      :class="reversed ? 'lg:order-1' : 'lg:order-2'"
    >
      <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
        {{ String(index + 1).padStart(2, '0') }} · {{ shortTitle }}
      </p>
      <h3 class="mt-2 font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-[1.65rem]">
        {{ title }}
      </h3>
      <p class="mt-3 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
        {{ description }}
      </p>

      <div class="mt-5">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
          Educational Support Includes
        </p>
        <ul class="mt-3 grid gap-2 sm:grid-cols-2" role="list">
          <li
            v-for="item in support"
            :key="item"
            class="flex items-start gap-2 text-[13.5px] leading-snug text-slate-700"
          >
            <span
              class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
              aria-hidden="true"
            >
              <IconCheck class="h-3 w-3" />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-5">
        <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Learning Goals</p>
        <ul class="mt-3 flex flex-wrap gap-2" role="list">
          <li
            v-for="goal in goals"
            :key="goal"
            class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12.5px] font-medium text-emerald-800 ring-1 ring-emerald-100"
          >
            <Icon icon="mdi:target" class="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {{ goal }}
          </li>
        </ul>
      </div>

      <p
        v-if="note"
        class="mt-5 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-[13px] leading-relaxed text-amber-900"
      >
        {{ note }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.need-card {
  box-shadow: 0 14px 34px -24px rgba(15, 23, 42, 0.28);
}
</style>
