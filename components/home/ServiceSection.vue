<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

type ServiceCard = {
    title: string
    description: string
    img: string
    features: string[]
}

const services: ServiceCard[] = [
    {
        title: 'Home Tutors',
        description: 'One-on-one personalised learning in the comfort of your home.',
        img: 'assets/img/services/home-tutor.svg',
        features: ['Personalised learning plans', 'Flexible scheduling', 'All subjects & boards'],
    },
    {
        title: 'Online Tutors',
        description: 'Live interactive classes from anywhere, anytime.',
        img: 'assets/img/services/online-tutor.svg',
        features: ['Live video sessions', 'Digital whiteboard', 'Recorded revisions'],
    },
    {
        title: 'Shadow Tutors',
        description: 'Extra focus and depth beyond regular school curriculum.',
        img: 'assets/img/services/shadow-tutor.svg',
        features: ['Concept reinforcement', 'Homework guidance', 'Exam preparation'],
    },
    {
        title: 'Travel Tutors',
        description: 'Verified mentors available at your location while you travel.',
        img: 'assets/img/services/travel-tutor.svg',
        features: ['On-demand support', 'Location flexibility', 'Continuity in learning'],
    },
    {
        title: 'Live-In Tutors',
        description: 'Daily immersive coaching and structured academic support.',
        img: 'assets/img/services/live-in-tutor.svg',
        features: ['Structured daily routine', 'Academic discipline', 'Result-oriented approach'],
    },
    {
        title: 'Home Schooling Support',
        description: 'Home-based learning with board-aligned curriculum and guidance.',
        img: 'assets/img/services/home-schooling.svg',
        features: ['Board-aligned curriculum', 'Dedicated mentor', 'Progress & assessments'],
    },
]

const customService: ServiceCard = {
    title: 'Custom Tutor Service',
    description:
        'Tell us your goals, schedule, and learning style — we match you with a mentor and plan built around your family, not a fixed package.',
    img: 'assets/img/services/custome.svg',
    features: ['Flexible goals & timelines', 'Mixed subjects or boards', 'Dedicated academic coordinator'],
}

const headerContent = {
    badge: 'What We Offer',
    title: 'Modern Learning Solutions for Academic Excellence',
    classes: 'mb-2 text-center',
}
</script>

<template>
    <section id="services" class="relative overflow-hidden" aria-labelledby="services-heading">
        <div aria-hidden="true"
            class="pointer-events-none absolute left-4 top-8 h-40 w-40 opacity-25 sm:left-10 sm:top-12"
            style="background-image: radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px); background-size: 14px 14px;" />

        <div class="relative z-[1] mx-auto w-full max-w-[1200px] px-4">
            <CardHeader heading-id="services-heading" :badge="headerContent.badge" :title="headerContent.title"
                :classes="headerContent.classes" />

            <div class="mt-10 flex flex-wrap gap-4 sm:gap-5">
                <div v-for="(service, i) in services" :key="service.title"
                    class="service-card relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/4)]"
                    v-motion :initial="{ opacity: 0, y: 14 }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 120 + i * 70, duration: 480, ease: 'easeOut' },
                    }">
                    <div class="relative z-10 flex flex-1 flex-col">
                        <div
                            class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100/90">
                            <img :src="usePublicAsset(service.img)" :alt="`${service.title} icon`" width="28"
                                height="28" class="h-7 w-7 object-contain" loading="lazy" />
                        </div>

                        <h3 class="mb-2 font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                            {{ service.title }}
                        </h3>

                        <p class="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                            {{ service.description }}
                        </p>

                        <ul class="mt-4 space-y-2.5 text-left">
                            <li v-for="feat in service.features" :key="feat" class="flex items-start gap-2">
                                <span
                                    class="grid h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white"
                                    aria-hidden="true">
                                    <Icon icon="fa6-solid:check" class="h-3.5 w-3.5 text-white" />
                                </span>
                                <span class="text-[14px] leading-snug text-slate-700">{{ feat }}</span>
                            </li>
                        </ul>

                        <div class="mt-auto flex justify-end pt-5">
                            <a href="#tutors"
                                class="cursor-pointer group/know inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                                Know more
                                <svg class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/know:translate-x-0.5"
                                    viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="service-card-decor" aria-hidden="true">
                        <span class="service-card-decor__ring service-card-decor__ring--outer" />
                        <span class="service-card-decor__ring service-card-decor__ring--inner" />
                    </div>
                </div>

                <div class="service-card service-card--primary relative flex w-full flex-col overflow-hidden rounded-2xl border border-blue-500/30 p-6 text-white shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-3.75rem)/2)]"
                    v-motion :initial="{ opacity: 0, y: 14 }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 120 + services.length * 70, duration: 480, ease: 'easeOut' },
                    }">
                    <div class="relative z-10 flex flex-1 flex-col">
                        <div
                            class="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                            <img :src="usePublicAsset(customService.img)" :alt="`${customService.title} icon`"
                                width="28" height="28" class="h-7 w-7 object-contain" loading="lazy" />
                        </div>

                        <h3 class="mb-2 font-display text-base font-bold tracking-tight text-white sm:text-lg">
                            {{ customService.title }}
                        </h3>

                        <p class="text-sm leading-relaxed text-white/90 sm:text-[15px]">
                            {{ customService.description }}
                        </p>

                        <ul class="mt-4 space-y-2.5 text-left">
                            <li v-for="feat in customService.features" :key="feat" class="flex items-start gap-2">
                                <Icon icon="fa6-solid:check" class="mt-1 h-3.5 w-3.5 shrink-0 text-white"
                                    aria-hidden="true" />
                                <span class="text-[14px] leading-snug text-white/90">{{ feat }}</span>
                            </li>
                        </ul>

                        <div class="mt-auto flex justify-start pt-5">
                            <a href="#tutors"
                                class="group/know inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-blue-100">
                                Know more
                                <svg class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/know:translate-x-0.5"
                                    viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                    <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="service-card-decor service-card-decor--muted" aria-hidden="true">
                        <span class="service-card-decor__ring service-card-decor__ring--outer" />
                        <span class="service-card-decor__ring service-card-decor__ring--inner" />
                    </div>
                </div>
            </div>

            <div class="relative my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:mt-12 sm:px-8 sm:py-6"
                v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 120 + (services.length + 1) * 70, duration: 500, ease: 'easeOut' },
                }">
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
                                All our tutors are verified, experienced, and committed to your child's success.
                            </p>
                        </div>
                    </div>

                    <div class="flex shrink-0 items-center gap-5 sm:gap-6">
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
.service-card {
    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(199, 210, 254, 0.8);
    box-shadow:
        0 4px 12px -2px rgba(15, 23, 42, 0.08),
        0 20px 48px -16px rgba(51, 65, 85, 0.14);
}

.service-card--primary {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 55%, #1e3a8a 100%);
}

.service-card--primary:hover {
    border-color: rgba(147, 197, 253, 0.55);
    box-shadow:
        0 8px 12px -2px rgba(0, 0, 0, 0.08),
        0 24px 56px -14px rgba(37, 99, 235, 0.45);
}

.service-card-decor {
    position: absolute;
    right: -150px;
    bottom: -130px;
    width: 270px;
    height: 270px;
    pointer-events: none;
}

.service-card-decor__ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
}

.service-card-decor__ring--outer {
    width: 250px;
    height: 250px;
    border: 60px solid #f1f5f9;
}

.service-card-decor__ring--inner {
    width: 270px;
    height: 270px;
    border: 2px solid #f1f5f9;
}

.service-card-decor--muted .service-card-decor__ring--outer,
.service-card-decor--muted .service-card-decor__ring--inner {
    border-color: rgba(241, 245, 249, 0.35);
}

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

    .service-card,
    .service-card:hover {
        transition: none;
        transform: none;
    }

    .services-trust-icon,
    .services-trust-shield,
    .services-trust-check {
        animation: none;
    }
}
</style>
