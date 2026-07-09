<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeader.vue'
import ServiceOfferingCard from './ServiceOfferingCard.vue'

type ServiceCard = {
    title: string
    description: string
    iconMdi: string
    features: string[]
    accent: {
        checkCircle: string
        link: string
        iconTint: string
        headingBar?: string
        iconMdiClass?: string
    }
    span?: 2
    /** Brand blue gradient card (Custom Tutor) */
    variant?: 'surface' | 'primary'
}

function cardWidthClass(service: ServiceCard) {
    if (service.span === 2) {
        return 'w-full sm:w-full lg:w-[calc((200%-1.25rem)/3)] xl:w-[calc((100%-1.25rem)/2)]'
    }
    return 'w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]'
}

const services: ServiceCard[] = [
    {
        title: 'Home Tutor',
        description: '1-on-1 personalized learning in the comfort of your home.',
        iconMdi: 'fa6-solid:house',
        features: ['Personalised learning', 'Flexible scheduling', 'All subjects & boards'],
        accent: {
            checkCircle: 'bg-blue-600 text-white',
            link: 'text-blue-600 group-hover:text-blue-700',
            iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
            iconMdiClass: 'text-blue-600',
        },
    },

    {
        title: 'Online Tutor',
        description: 'Live interactive classes from anywhere, anytime.',
        iconMdi: 'fa6-solid:desktop',
        features: ['Live sessions', 'Digital whiteboard', 'Recorded sessions'],
        accent: {
            checkCircle: 'bg-blue-600 text-white',
            link: 'text-blue-600 group-hover:text-blue-700',
            iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
            iconMdiClass: 'text-blue-600',
        },
    },
    {
        title: 'Shadow Tutor',
        description: 'Extra focus and depth beyond regular school.',
        iconMdi: 'fa6-solid:user-group',
        features: ['Concept reinforcement', 'Homework guidance', 'Exam preparation'],
        accent: {
            checkCircle: 'bg-blue-600 text-white',
            link: 'text-blue-600 group-hover:text-blue-700',
            iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
            iconMdiClass: 'text-blue-600',
        },
    },
    {
        title: 'Travel Tutor',
        description: 'Mentors available at your location while you travel.',
        iconMdi: 'fa6-solid:plane-up',
        features: ['On-demand support', 'Location flexibility', 'Continuity in learning'],
        accent: {
            checkCircle: 'bg-blue-600 text-white',
            link: 'text-blue-600 group-hover:text-blue-700',
            iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
            iconMdiClass: 'text-blue-600 rotate-45',
        },
    },
    {
        title: 'Live-In Tutor',
        description: 'Daily immersive coaching and academic support.',
        iconMdi: 'fa6-solid:bed',
        features: ['Structured routine', 'Academic discipline', 'Result-oriented approach'],
        accent: {
            checkCircle: 'bg-blue-600 text-white',
            link: 'text-blue-600 group-hover:text-blue-700',
            iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
            iconMdiClass: 'text-blue-600',
        },
    },
    {
        title: 'Home schooling',
        description: 'Home-based learning with structured guidance.',
        iconMdi: 'fa6-solid:book-open',
        features: ['Board-aligned curriculum', 'Dedicated homeschool mentor', 'Progress & assessments'],
        accent: {
            checkCircle: 'bg-indigo-600 text-white',
            link: 'text-indigo-600 group-hover:text-indigo-700',
            iconTint: 'bg-indigo-50 ring-1 ring-indigo-100/90',
            headingBar: 'bg-indigo-600',
            iconMdiClass: 'text-indigo-600',
        },
    },
    {
        title: 'Custom Tutor Service',
        description:
            'Tell us your goals, schedule, and learning style — we match you with a mentor and plan built around your family, not a fixed package.',
        iconMdi: 'fa6-solid:wand-magic-sparkles',
        features: ['Flexible goals & timelines', 'Mixed subjects or boards', 'Dedicated academic coordinator'],
        accent: {
            checkCircle: 'bg-white text-blue-700',
            link: 'text-white group-hover:text-amber-200',
            iconTint: 'bg-white/20 ring-1 ring-white/30',
            headingBar: 'bg-amber-400',
            iconMdiClass: 'text-white',
        },
        span: 2,
        variant: 'primary',
    },
]
</script>

<template>
    <section id="services"
        class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-8 sm:py-10"
        aria-labelledby="services-heading">
        <div aria-hidden="true"
            class="pointer-events-none absolute left-4 top-8 h-40 w-40 opacity-25 sm:left-10 sm:top-12"
            style="background-image: radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px); background-size: 14px 14px;">
        </div>
        <svg aria-hidden="true"
            class="pointer-events-none absolute -right-4 top-10 h-28 w-36 text-white/25 sm:right-6 sm:top-14 sm:h-32 sm:w-44"
            viewBox="0 0 160 120" fill="none">
            <path d="M12 95 Q 55 72, 88 48 T 148 8" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6"
                stroke-linecap="round" opacity="0.55" />
            <path d="M132 4 L148 20 L124 22 L118 38 L108 24 L84 28 L132 4Z" fill="currentColor" opacity="0.85" />
        </svg>

        <div class="relative z-[1] mx-auto w-full max-w-[1200px] px-4">
            <CardHeader classes="mb-2 text-center" theme="dark" badge="What We Offer"
                title="Modern Learning Solutions for Academic Excellence" />

            <div class="flex flex-wrap justify-center gap-4 sm:gap-5 mt-10">
                <ServiceOfferingCard v-for="(service, i) in services" :key="service.title"
                    :class="cardWidthClass(service)" :title="service.title" :description="service.description"
                    :features="service.features" :icon-mdi="service.iconMdi" :animation-index="i" :span="service.span"
                    :variant="service.variant ?? 'surface'" :accent="service.accent" href="#tutors" v-motion
                    :initial="{ opacity: 0, y: 14 }"
                    :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120 + i * 70, duration: 480, ease: 'easeOut' } }" />
            </div>

            <div class="relative mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:mt-12 sm:px-8 sm:py-6"
                v-motion :initial="{ opacity: 0, y: 12 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }">
                <svg aria-hidden="true"
                    class="pointer-events-none absolute -right-2 bottom-0 h-24 w-28 text-blue-100/80 sm:right-8 sm:h-28 sm:w-32"
                    viewBox="0 0 120 100" fill="none">
                    <path d="M20 78h80v6H20v-6zm8-12h64v6H28v-6zm12-18h40v6H40v-6z" fill="currentColor" opacity="0.5" />
                    <path d="M48 22 L72 22 L68 42 L52 42 Z" stroke="currentColor" stroke-width="1.2" fill="currentColor"
                        opacity="0.35" />
                    <ellipse cx="60" cy="18" rx="22" ry="6" stroke="currentColor" stroke-width="1.2" fill="none"
                        opacity="0.4" />
                </svg>

                <div class="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div class="flex flex-1 items-start gap-4">
                        <span
                            class="services-trust-icon grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path class="services-trust-shield"
                                    d="M12 3L5 7v5c0 4.55 2.84 8.82 7 10 4.16-1.18 7-5.45 7-10V7l-7-4z"
                                    stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                                <path class="services-trust-check" d="M9 12l2 2 4-4" stroke="currentColor"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <div>
                            <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">Quality You Can Trust
                            </h3>
                            <p class="mt-1 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                                All our tutors are verified, experienced, and committed to your child’s success.
                            </p>
                        </div>
                    </div>

                    <div class="flex shrink-0 items-center gap-5 sm:gap-6">
                        <div class="hidden h-12 w-px bg-slate-200 sm:block" aria-hidden="true" />
                        <a href="#how-it-works"
                            class="group/process inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                            Learn about our process
                            <svg class="h-4 w-4 transition-transform duration-200 group-hover/process:translate-x-0.5"
                                viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-trust-icon {
    animation: services-trust-pulse 3s ease-in-out infinite;
}

.services-trust-shield {
    transform-origin: center;
    animation: services-trust-shield 2.5s ease-in-out infinite;
}

.services-trust-check {
    stroke-dasharray: 12;
    stroke-dashoffset: 12;
    animation: services-trust-check 2.5s ease-in-out infinite;
}

@keyframes services-trust-pulse {

    0%,
    100% {
        transform: scale(1);
        box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.25);
    }

    50% {
        transform: scale(1.06);
        box-shadow: 0 8px 22px -4px rgba(37, 99, 235, 0.4);
    }
}

@keyframes services-trust-shield {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

@keyframes services-trust-check {

    0%,
    35% {
        stroke-dashoffset: 12;
        opacity: 0.4;
    }

    55%,
    100% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {

    .services-trust-icon,
    .services-trust-shield,
    .services-trust-check {
        animation: none;
    }
}
</style>
