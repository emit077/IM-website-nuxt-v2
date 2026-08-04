<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'

export type ActionBtnVariant = 'primary' | 'secondary' | 'theme-secondary'

const props = withDefaults(
    defineProps<{
        variant: ActionBtnVariant
        label: string
        icon?: Component | string
        href: string
        showArrow?: boolean
        iconClass?: string
        iconWrapperClass?: string
    }>(),
    {
        showArrow: true,
    },
)

const isIconifyIcon = computed(() => typeof props.icon === 'string')

const iconComponent = computed(() =>
    props.icon && !isIconifyIcon.value ? (props.icon as Component) : null,
)

const resolvedIconClass = computed(() => {
    if (props.iconClass) return props.iconClass

    if (props.variant === 'primary' || props.variant === 'theme-secondary') {
        return 'h-4 w-4 shrink-0 opacity-95'
    }

    return props.iconWrapperClass
        ? 'h-3.5 w-3.5'
        : 'h-4 w-4 shrink-0 text-blue-700 opacity-95'
})

const rootClass = computed(() => {
    if (props.variant === 'primary') return 'btn-primary ripple group w-full sm:w-auto'
    if (props.variant === 'theme-secondary') return 'theme-btn-secondary ripple group w-full sm:w-auto'
    return 'btn-secondary group w-full sm:w-auto'
})

const shouldShowArrow = computed(() => {
    if (props.variant === 'secondary') return false
    return props.showArrow
})

function rippleHandler(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    target.style.setProperty('--x', `${e.clientX - rect.left}px`)
    target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
    <a :href="href" :class="rootClass" @mousemove="variant !== 'secondary' ? rippleHandler($event) : undefined">
        <slot name="icon">
            <span v-if="icon && iconWrapperClass" :class="iconWrapperClass">
                <Icon v-if="isIconifyIcon" :icon="icon as string" :class="resolvedIconClass" aria-hidden="true" />
                <component :is="iconComponent" v-else :class="resolvedIconClass" />
            </span>
            <template v-else-if="icon">
                <Icon v-if="isIconifyIcon" :icon="icon as string" :class="resolvedIconClass" aria-hidden="true" />
                <component :is="iconComponent" v-else :class="resolvedIconClass" />
            </template>
        </slot>
        <span v-html="label" />
        <span
            v-if="variant === 'theme-secondary' && shouldShowArrow"
            class="hero-cta-arrow theme-btn-secondary-icon transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true">
            <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5" />
        </span>
        <IconArrowRight
            v-else-if="shouldShowArrow"
            class="hero-cta-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
</template>

<style scoped>
.hero-cta-arrow {
    animation: hero-arrow-loop 0.95s ease-in-out infinite;
}

@keyframes hero-arrow-loop {

    0%,
    100% {
        transform: translateX(0);
        opacity: 1;
    }

    50% {
        transform: translateX(4px);
        opacity: 0.7;
    }
}
</style>
