<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

type ContactCta = {
  label: string
  href: string
  iconMdi: string
  primary?: boolean
  target?: string
  rel?: string
}

type CtaVariant = 'dark' | 'light'

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
    variant?: CtaVariant
    /** Section background utility class (override to avoid clashing with adjacent sections) */
    surfaceClass?: string
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
    variant: 'dark',
    surfaceClass: 'bg-cream-50',
  },
)

const isLight = computed(() => props.variant === 'light')

const styles = computed(() =>
  isLight.value
    ? {
      card: 'bg-gradient-to-br from-white via-cream-50 to-blue-50 ring-1 ring-blue-100 shadow-[0_24px_60px_-28px_rgba(29,78,216,0.25)]',
      glowTop: 'bg-blue-200/40',
      glowBottom: 'bg-indigo-200/40',
      badge: 'border-blue-200 bg-blue-50 text-blue-700',
      title: 'text-slate-900',
      description: 'text-slate-600',
      supporting: 'text-slate-500',
      primaryCta: 'ripple group bg-blue-600 text-white shadow-lg hover:bg-blue-700',
      secondaryCta: 'border border-slate-300 text-slate-700 hover:bg-slate-100',
      primaryHoverShadow: 'hover:shadow-[0_16px_40px_-12px_rgba(29,78,216,0.45)]',
    }
    : {
      card: 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)]',
      glowTop: 'bg-white/10',
      glowBottom: 'bg-indigo-400/20',
      badge: 'border-white/25 bg-white/10 text-blue-100',
      title: 'text-white',
      description: 'text-blue-100',
      supporting: 'text-blue-100/90',
      primaryCta: 'ripple group bg-white text-blue-700 shadow-lg hover:bg-blue-50',
      secondaryCta: 'border border-white/40 text-white hover:bg-white/10',
      primaryHoverShadow: 'hover:shadow-[0_16px_40px_-12px_rgba(255,255,255,0.35)]',
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
  <section :id="props.sectionId" :class="['relative scroll-mt-24 py-12 sm:py-16', props.surfaceClass]"
    :aria-labelledby="props.title ? props.headingId : undefined"
    :aria-label="props.title ? undefined : props.ariaLabel">
    <span v-for="anchorId in props.extraAnchorIds" :id="anchorId" :key="anchorId"
      class="absolute -top-24 h-px w-px overflow-hidden" aria-hidden="true" />
    <div class="container-page">
      <div :class="[
        'relative overflow-hidden rounded-[1.75rem] px-6 py-10 text-center sm:px-12 sm:py-10',
        styles.card,
      ]" v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          :class="['pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl', styles.glowTop]" />
        <span aria-hidden="true"
          :class="['pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl', styles.glowBottom]" />

        <div class="relative mx-auto max-w-4xl">
          <CardHeader :theme="props.variant === 'dark' ? 'dark' : 'light'" :heading-id="props.headingId"
            classes="!px-0 !py-0" :badge="props.badge" :title="props.title" :description="props.description" />

          <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            v-if="props.ctas.length > 0">
            <slot name="ctas">
              <a v-for="cta in props.ctas" :key="cta.label" :href="cta.href" :target="cta.target"
                :rel="cta.rel ?? (cta.target === '_blank' ? 'noopener noreferrer' : undefined)" :class="[
                  'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 sm:w-auto',
                  styles.primaryHoverShadow,
                  cta.primary ? styles.primaryCta : styles.secondaryCta,
                ]" @mousemove="onCtaMousemove($event, cta.primary)">
                <Icon :icon="cta.iconMdi" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ cta.label }}
                <IconArrowRight v-if="cta.primary"
                  class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </slot>
          </div>

          <p v-if="props.supporting"
            :class="['mx-auto mt-6 max-w-xl text-[13px] font-medium leading-relaxed sm:text-sm', styles.supporting]">
            {{ props.supporting }}
          </p>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </section>
</template>
