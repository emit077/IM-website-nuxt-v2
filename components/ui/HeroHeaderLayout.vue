<script setup lang="ts">
import IconCheck from '~/components/icons/IconCheck.vue'

/** Hero headline block: badge, title, tagline, description (HTML allowed) + default slot for CTAs. */
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    badge?: string
    title?: string
    subtitle?: string
    description?: string
    contentClass?: string
    headingId?: string
    variant?: string
  }>(),
  {
    badge: '',
    title: '',
    subtitle: '',
    description: '',
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    headingId: '',
    variant: '',
  },
)
</script>

<template>
  <div v-if="variant == 'variant2'">
    <div class="relative text-center px-0 py-0">
      <div class=" text-center  items-center">
        <slot name="badge">
          <span v-if="badge" class="badge-pill w-fit hidden md:flex">
            <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white hidden md:grid">
              <IconCheck class="h-3 w-3" />
            </span>
            <span class=" text-xs md:text-base" v-html="badge" />
          </span>
        </slot>
        <slot name="title">
          <h1 v-if="title" :id="headingId || undefined"
            class="heading-display text-balance text-[2.4rem] leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]"
            v-html="title" />
        </slot>
        <slot name="subtitle">
          <p v-if="subtitle" class="text-pretty text-base font-bold leading-relaxed text-slate-500 sm:text-lg" v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }" v-html="subtitle" />
        </slot>
        <slot name="description">
          <p v-if="description" class=" text-pretty text-base leading-relaxed text-slate-600 sm:text-lg mt-10 " v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }" v-html="description" />
        </slot>
        <slot />
      </div>
    </div>
  </div>
  <div v-else class="container-page">
    <div class="relative text-left px-0 py-0" :class="contentClass">
      <div class="flex flex-col gap-7 lg:gap-8 md:text-left text-center  items-center md:items-start">
        <slot name="badge">
          <span v-if="badge" class="badge-pill w-fit hidden md:flex">
            <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white hidden md:grid">
              <IconCheck class="h-3 w-3" />
            </span>
            <span class=" text-xs md:text-base" v-html="badge" />
          </span>
        </slot>
        <slot name="title">
          <h1 v-if="title" :id="headingId || undefined"
            class="heading-display text-balance text-[2.4rem] leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]"
            v-html="title" />
        </slot>
        <slot name="subtitle">
          <p v-if="subtitle" class="text-pretty text-base font-bold leading-relaxed text-slate-500 sm:text-lg" v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }" v-html="subtitle" />
        </slot>
        <slot name="description">
          <p v-if="description" class=" text-pretty text-base leading-relaxed text-slate-600 sm:text-lg max-w-2xl"
            v-motion :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }" v-html="description" />
        </slot>
        <slot />
      </div>
    </div>
  </div>

</template>
