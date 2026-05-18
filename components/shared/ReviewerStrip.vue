<script setup lang="ts">
import {
  DEFAULT_REVIEWER_AVATARS,
  REVIEWER_AUDIENCE_LABELS,
  type ReviewerAudience,
} from '~/data/reviewers'

const props = withDefaults(
  defineProps<{
    avatars?: readonly string[]
    audience?: ReviewerAudience
    audienceLabel?: string
    rating?: string
    count?: string
    variant?: 'rating' | 'avatars'
    size?: 'sm' | 'md'
    layout?: 'split' | 'row'
  }>(),
  {
    avatars: () => DEFAULT_REVIEWER_AVATARS,
    audience: 'parent',
    rating: '4.9',
    count: '14k+',
    variant: 'rating',
    size: 'sm',
    layout: 'split',
  },
)

const audiencePlural = computed(
  () => props.audienceLabel ?? REVIEWER_AUDIENCE_LABELS[props.audience],
)

const audienceSingular = computed(() => {
  const label = audiencePlural.value
  if (label.endsWith('s')) return label.slice(0, -1)
  return label
})

const rootClass = computed(() => {
  if (props.layout === 'row') {
    return 'items-center gap-3'
  }
  return 'w-full flex-wrap items-center justify-between gap-4'
})

const avatarClass = computed(() =>
  props.size === 'md'
    ? 'h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm'
    : 'h-8 w-8 rounded-full border-2 border-white object-cover',
)
</script>

<template>
  <div :class="rootClass">
    <div class="flex -space-x-2">
      <img v-for="(avatar, i) in avatars" :key="`reviewer-${i}`" :src="avatar"
        :alt="`${audienceSingular} reviewer ${i + 1}`" :class="avatarClass" loading="lazy" />
    </div>

    <div v-if="variant === 'rating'" class="text-sm ">
      <div class="tracking-[1px] text-amber-500">★★★★★</div>
      <p class="text-slate-700">
        Rated <span class="font-semibold text-slate-900">{{ rating }}</span> by
        <span class="font-semibold text-slate-900">{{ count }}</span>
        {{ audiencePlural }}
      </p>
    </div>

    <slot v-else />
  </div>
</template>
