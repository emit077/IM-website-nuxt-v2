<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    badge?: string
    title?: string
    description?: string
    theme?: 'light' | 'dark' | string
    classes?: string
    align?: 'left' | 'center' | string
    headingId?: string
  }>(),
  {
    badge: undefined,
    title: undefined,
    description: undefined,
    theme: 'light',
    align: 'center',
    classes: '',
    headingId: '',
  },
)

const dynamicClass = computed(() => {
  const isDark = props.theme === 'dark'
  const isLeft = props.align === 'left'
  const align = isLeft ? 'text-left' : 'text-center '
  const badgeAlign = isLeft ? '' : 'badge-ui-right'

  if (isDark) {
    return {
      root: align,
      badge: `${align} ${badgeAlign} text-white before:bg-white after:bg-white`,
      title: `${align} text-white`,
      description: `${align} text-white/90`,
    }
  }

  return {
    root: align,
    badge: `${align} ${badgeAlign} text-slate-600 before:bg-slate-600 after:bg-slate-600`,
    title: `${align} text-slate-900`,
    description: `${align} text-slate-500`,
  }
})
</script>

<template>
  <div class="relative px-0 py-0" :class="[classes, dynamicClass.root]">
    <slot name="badge">
      <div v-if="badge" class="badge-ui-left capitalize mb-2" :class="dynamicClass.badge">
        <span v-html="badge" />
      </div>
    </slot>
    <slot name="title">
      <h1 v-if="title" :id="headingId || undefined" class=" font-display text-2xl font-bold tracking-tight sm:text-3xl"
        :class="dynamicClass.title" v-html="title" />
    </slot>
    <slot name="description">
      <p v-if="description" class="mt-5 text-sm font-medium leading-relaxed  sm:text-base"
        :class="dynamicClass.description" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }" v-html="description" />
    </slot>

    <slot />
  </div>
</template>

<style scoped>
.badge-ui-right::after {
  display: inline-block;
  content: "";
  width: 20px;
  height: 2px;
  position: relative;
  bottom: 4px;
  margin-left: 10px;
  border-radius: 3px;
}

.badge-ui-left::before {
  display: inline-block;
  content: "";
  width: 20px;
  height: 2px;
  position: relative;
  bottom: 4px;
  margin-right: 10px;
  border-radius: 3px;
}
</style>
