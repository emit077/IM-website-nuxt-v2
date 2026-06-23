<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

type ContactCta = {
  label: string
  href: string
  iconMdi: string
  primary?: boolean
  target?: string
  rel?: string
}

const props = withDefaults(
  defineProps<{
    sectionId?: string
    headingId?: string
    ariaLabel?: string
    badge?: string
    badgeIconMdi?: string
    title?: string
    description?: string
    supporting?: string
    extraAnchorIds?: readonly string[]
    ctas?: readonly ContactCta[]
  }>(),
  {
    sectionId: 'book-demo',
    headingId: 'shared-cta-heading',
    ariaLabel: 'Get started',
    badge: '',
    badgeIconMdi: 'mdi:rocket-launch-outline',
    title: '',
    description: '',
    supporting: '',
    extraAnchorIds: () => [] as readonly string[],
    ctas: () => [] as readonly ContactCta[],
  },
)

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

function onCtaMousemove(e: MouseEvent, isPrimary?: boolean) {
  if (isPrimary) {
    rippleHandler(e)
  }
}
</script>

<template>
  <section :id="props.sectionId" class="relative scroll-mt-24 bg-cream-50 py-12 sm:py-16"
    :aria-labelledby="props.title ? props.headingId : undefined" :aria-label="props.title ? undefined : props.ariaLabel">
    <span v-for="anchorId in props.extraAnchorIds" :id="anchorId" :key="anchorId"
      class="absolute -top-24 h-px w-px overflow-hidden" aria-hidden="true" />
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-10 text-center shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:px-12 sm:py-12"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <span aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

        <div class="relative mx-auto max-w-2xl">
          <span v-if="props.badge"
            class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
            <Icon :icon="props.badgeIconMdi" class="h-4 w-4" aria-hidden="true" />
            {{ props.badge }}
          </span>

          <h2 v-if="props.title" :id="props.headingId"
            class="font-display mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {{ props.title }}
          </h2>
          <p v-if="props.description" class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
            {{ props.description }}
          </p>

          <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            v-if="props.ctas.length > 0">
            <slot name="ctas">
              <a v-for="cta in props.ctas" :key="cta.label" :href="cta.href" :target="cta.target"
                :rel="cta.rel ?? (cta.target === '_blank' ? 'noopener noreferrer' : undefined)" :class="[
                'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.35)] sm:w-auto',
                cta.primary
                  ? 'ripple group bg-white text-blue-700 shadow-lg hover:bg-blue-50'
                  : 'border border-white/40 text-white hover:bg-white/10',
              ]" @mousemove="onCtaMousemove($event, cta.primary)">
                <Icon :icon="cta.iconMdi" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ cta.label }}
                <IconArrowRight v-if="cta.primary"
                  class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </slot>
          </div>

          <p v-if="props.supporting" class="mx-auto mt-6 max-w-xl text-[13px] font-medium leading-relaxed text-blue-100/90 sm:text-sm">
            {{ props.supporting }}
          </p>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </section>
</template>
