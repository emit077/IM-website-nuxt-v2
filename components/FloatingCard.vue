<script setup lang="ts">
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'primary'
  delay?: number
  float?: 'normal' | 'slow' | 'none'
  initialX?: number
  initialY?: number
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  delay: 0,
  float: 'normal',
  initialX: 0,
  initialY: 20,
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.85, x: initialX, y: initialY }"
    :enter="{
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 700, delay, ease: [0.22, 1, 0.36, 1] },
    }"
    :class="[
      'glass-card rounded-2xl px-4 py-3 flex items-center gap-3 select-none',
      float === 'normal' && 'animate-float',
      float === 'slow' && 'animate-float-slow',
    ]"
  >
    <slot name="icon">
      <span
        :class="[
          'grid place-items-center w-10 h-10 rounded-xl shrink-0',
          variant === 'success' && 'bg-emerald-500/12 text-emerald-600',
          variant === 'warning' && 'bg-amber-500/14 text-amber-600',
          variant === 'primary' && 'bg-indigo-100 text-indigo-700',
          variant === 'default' && 'bg-slate-100 text-slate-700',
        ]"
      >
        <slot name="icon-svg" />
      </span>
    </slot>

    <div class="flex flex-col leading-tight min-w-0">
      <span class="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
        <slot name="label" />
      </span>
      <span class="text-sm font-semibold text-brand-ink whitespace-nowrap">
        <slot name="value" />
      </span>
    </div>

    <slot name="trailing" />
  </div>
</template>
