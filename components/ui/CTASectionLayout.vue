<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
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
type CtaLayout = 'center' | 'split'

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
    layout?: CtaLayout
    compact?: boolean
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
    layout: 'center',
    compact: false,
    surfaceClass: 'section-surface-muted',
  },
)

const isLight = computed(() => props.variant === 'light')
const isSplit = computed(() => props.layout === 'split')
const isCompact = computed(() => props.compact)

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
  <section :id="props.sectionId"
    :class="['relative scroll-mt-24', isCompact ? 'section-py-compact' : 'section-py', props.surfaceClass]"
    :aria-labelledby="props.title ? props.headingId : undefined"
    :aria-label="props.title ? undefined : props.ariaLabel">
    <span v-for="anchorId in props.extraAnchorIds" :id="anchorId" :key="anchorId"
      class="absolute -top-24 h-px w-px overflow-hidden" aria-hidden="true" />
    <div class="container-page">
      <div :class="[
        'relative overflow-hidden',
        isCompact ? 'rounded-[1.25rem] px-5 py-6 sm:px-8 sm:py-7' : 'rounded-[1.75rem] px-6 py-10 sm:px-12 sm:py-10',
        isSplit ? 'text-left' : 'text-center',
        styles.card,
      ]" v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <span aria-hidden="true"
          :class="['pointer-events-none absolute -right-20 -top-20 rounded-full blur-3xl', isCompact ? 'h-48 w-48' : 'h-64 w-64', styles.glowTop]" />
        <span aria-hidden="true"
          :class="['pointer-events-none absolute -bottom-24 -left-16 rounded-full blur-3xl', isCompact ? 'h-40 w-40' : 'h-64 w-64', styles.glowBottom]" />

        <div :class="isSplit
          ? 'relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12'
          : 'relative mx-auto max-w-4xl'">
          <div :class="isSplit ? 'max-w-xl lg:max-w-2xl' : undefined">
            <CardHeader :theme="props.variant === 'dark' ? 'dark' : 'light'" :heading-id="props.headingId"
              :align="isSplit ? 'left' : 'center'" :badge="props.badge" :title="props.title"
              :description="props.description" :classes="isCompact
                ? '!px-0 !py-0 [&_h1]:text-[1.35rem] sm:[&_h1]:text-2xl [&_p]:mt-2'
                : '!px-0 !py-0'" />

            <p v-if="props.supporting" :class="[
              'text-[13px] font-medium leading-relaxed sm:text-sm',
              isCompact ? 'mt-2.5' : 'mt-6',
              isSplit ? 'max-w-lg' : 'mx-auto max-w-xl',
              styles.supporting,
            ]" v-html="props.supporting" />
          </div>

          <div v-if="props.ctas.length > 0 || $slots.ctas" :class="isSplit
            ? 'flex w-full shrink-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:max-w-xs lg:w-80 lg:flex-col'
            : 'mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center'">
            <slot name="ctas">
              <a v-for="cta in props.ctas" :key="cta.label" :href="cta.href" :target="cta.target"
                :rel="cta.rel ?? (cta.target === '_blank' ? 'noopener noreferrer' : undefined)" :class="[
                  'inline-flex w-full items-center justify-center gap-2 font-semibold transition duration-300 hover:-translate-y-1',
                  isCompact
                    ? 'rounded-xl px-5 py-2.5 text-[13px]'
                    : 'rounded-2xl px-7 py-3.5 text-sm sm:w-auto',
                  isSplit ? 'lg:w-full' : 'sm:w-auto',
                  styles.primaryHoverShadow,
                  cta.primary ? styles.primaryCta : styles.secondaryCta,
                ]" @mousemove="onCtaMousemove($event, cta.primary)">
                <Icon :icon="cta.iconMdi" class="h-4 w-4 shrink-0" aria-hidden="true" />
                <span v-html="cta.label" />
                <IconArrowRight v-if="cta.primary"
                  class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </slot>
          </div>

          <slot name="footer" />
        </div>
      </div>
    </div>
  </section>
</template>
