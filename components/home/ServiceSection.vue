<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

type ServiceCard = {
    title: string
    description: string
    img: string
    features: string[]
    href: string
    /** Grid width: `col-span-1`, `col-span-2`, or `col-span-full` */
    columns?: 'col-span-1' | 'col-span-2' | 'col-span-full'
}

/** Set `columns` to 3 or 4 to control desktop cards-per-row for this section */
const sectionConfig = {
    columns: 4 as 3 | 4,
    badge: 'What We Offer',
    title: 'Modern Learning Solutions for Academic Excellence',
    classes: 'mb-2 text-center',
}

const services: ServiceCard[] = [
    {
        title: 'Home Tutors',
        description: 'One-on-one personalised learning in the comfort of your home.',
        img: 'assets/img/services/home-tutor.svg',
        features: ['Personalised learning plans', 'Flexible scheduling', 'All subjects & boards'],
        href: '/services#home-tutors',
        columns: 'col-span-1',
    },
    {
        title: 'Online Tutors',
        description: 'Live interactive classes from anywhere, anytime.',
        img: 'assets/img/services/online-tutor.svg',
        features: ['Live video sessions', 'Digital whiteboard', 'Recorded revisions'],
        href: '/services#online-tutors',
        columns: 'col-span-1',
    },
    {
        title: 'Shadow Tutors',
        description: 'Extra focus and depth beyond regular school curriculum.',
        img: 'assets/img/services/shadow-tutor.svg',
        features: ['Concept reinforcement', 'Homework guidance', 'Exam preparation'],
        href: '/services#shadow-tutors',
        columns: 'col-span-1',
    },
    {
        title: 'Travel Tutors',
        description: 'Verified mentors available at your location while you travel.',
        img: 'assets/img/services/travel-tutor.svg',
        features: ['On-demand support', 'Location flexibility', 'Continuity in learning'],
        href: '/services#travel-tutors',
        columns: 'col-span-1',
    },
    {
        title: 'Live-In Tutors',
        description: 'Full-Time Residential Academic Mentorship for Consistent Learning & Holistic Development',
        img: 'assets/img/services/live-in-tutor.svg',
        features: ['Structured daily routine', 'Academic discipline', 'Result-oriented approach'],
        href: '/services#live-in-tutors',
        columns: 'col-span-1',
    },
    {
        title: 'Home Schooling Support',
        description: 'Home-based learning with board-aligned curriculum and guidance.',
        img: 'assets/img/services/home-schooling.svg',
        features: ['Board-aligned curriculum', 'Dedicated mentor', 'Progress & assessments'],
        href: '/services#home-schooling',
        columns: 'col-span-1',
    },
    {
        title: 'Special Educator',
        description: 'Individualised educational support for children with diverse learning and developmental needs.',
        img: 'assets/img/services/special-tutor.svg',
        features: ['ADHD (Attention Deficit Hyperactivity Disorder)', 'ASD (Autism Spectrum Disorder)', 'SLD (Specific Learning Disorder)', 'Dyslexia, Dysgraphia, Dyscalculia,', 'Behavioural & Learning Challenges'],
        href: '/services#special-educators',
        columns: 'col-span-2',
    },
]

const customService = {
    badge: 'Tailored for your family',
    title: 'Need Something More Specific?',
    description:
        'Tell us your goals, schedule, and learning style — we match you with a mentor and plan built around your family, not a fixed package.',
    features: [
        { label: 'Flexible goals & timelines', detail: 'Plans that adapt as your child progresses' },
        { label: 'Mixed subjects or boards', detail: 'CBSE, ICSE, State & international curricula' },
        { label: 'Dedicated coordinator', detail: 'One point of contact from match to milestones' },
    ],
    primaryCta: { label: 'Know more', href: '/services#custom-tutor', icon: 'mdi:clipboard-edit-outline' },
}

/** Keep wider cards single-column on mobile; expand from sm+ */
function cardSpanClass(columns?: ServiceCard['columns'] | 'col-span-full') {
    if (columns === 'col-span-full') return 'col-span-1 sm:col-span-full'
    if (columns === 'col-span-2') return 'col-span-1 sm:col-span-2'
    return 'col-span-1'
}
</script>

<template>
    <section id="services" class="relative overflow-hidden section-py" aria-labelledby="services-heading">
        <div aria-hidden="true"
            class="pointer-events-none absolute left-4 top-8 h-40 w-40 opacity-25 sm:left-10 sm:top-12"
            style="background-image: radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px); background-size: 14px 14px;" />

        <div class="container-page relative z-[1]">
            <CardHeader heading-id="services-heading" :badge="sectionConfig.badge" :title="sectionConfig.title"
                :classes="sectionConfig.classes" />

            <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                <div v-for="(service, i) in services" :key="service.title" v-motion :initial="{ opacity: 0, y: 14 }"
                    class="service-card group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
                    :class="cardSpanClass(service.columns)" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 120 + i * 70, duration: 480, ease: 'easeOut' },
                    }">
                    <span class="service-card__index" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>

                    <div class="relative z-10 flex flex-1 flex-col">
                        <div
                            class="service-card__icon mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100/90 transition-colors duration-300 group-hover/card:bg-blue-600 group-hover/card:ring-blue-600">
                            <img :src="usePublicAsset(service.img)" :alt="`${service.title} icon`" width="28"
                                height="28"
                                class="h-7 w-7 object-contain transition group-hover/card:brightness-0 group-hover/card:invert"
                                loading="lazy" />
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

                        <div class="mt-auto flex justify-center pt-5">
                            <a :href="service.href"
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

                    <span class="service-card__accent" aria-hidden="true" />
                </div>

                <article
                    class="custom-service relative col-span-1 overflow-hidden rounded-2xl border border-blue-400/25 text-white shadow-[0_20px_50px_-28px_rgba(37,99,235,0.65)] sm:col-span-full"
                    v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 120 + services.length * 70, duration: 520, ease: 'easeOut' },
                    }" aria-label="Custom tutor service">
                    <div aria-hidden="true" class="custom-service__glow custom-service__glow--a" />
                    <div aria-hidden="true" class="custom-service__glow custom-service__glow--b" />
                    <div aria-hidden="true" class="custom-service__grid" />

                    <div
                        class="relative z-10 grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:p-10">
                        <div class="min-w-0">
                            <h3
                                class="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-tight">
                                {{ customService.title }}
                            </h3>

                            <p class="mt-3 max-w-xl text-sm leading-relaxed text-blue-50/90 sm:text-base">
                                {{ customService.description }}
                            </p>

                            <div class="mt-6  gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                                <ActionBtn variant="primary" :href="customService.primaryCta.href"
                                    :label="customService.primaryCta.label" />
                            </div>
                        </div>

                        <ul class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" role="list">
                            <li v-for="(feat, fi) in customService.features" :key="feat.label"
                                class="custom-service__feature flex items-start gap-3 rounded-xl border border-white/15  p-3.5 backdrop-blur-sm sm:p-4"
                                v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 200 + fi * 80, duration: 420, ease: 'easeOut' },
                                }">
                                <span
                                    class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-blue-700 shadow-sm"
                                    aria-hidden="true">
                                    <Icon icon="fa6-solid:check" class="h-4 w-4" />
                                </span>
                                <div class="min-w-0">
                                    <p class="text-[15px] font-semibold leading-snug text-white">{{ feat.label }}</p>
                                    <p class="mt-0.5 text-[12px] leading-snug text-blue-100/80 sm:text-[13px]">
                                        {{ feat.detail }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>

            <!-- <div class="relative my-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:mt-12 sm:px-8 sm:py-6"
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
            </div> -->

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

/* Large faded outlined index number in the top-right corner */
.service-card__index {
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    z-index: 0;
    font-family: var(--font-display, inherit);
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(148, 163, 184, 0.25);
    transition: -webkit-text-stroke-color 0.3s ease, color 0.3s ease;
    pointer-events: none;
}

@media (min-width: 640px) {
    .service-card__index {
        font-size: 4rem;
    }
}

.service-card:hover .service-card__index {
    -webkit-text-stroke-color: rgba(37, 99, 235, 0.3);
}

/* Blue accent bar that reveals along the bottom edge on hover */
.service-card__accent {
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 3px;
    width: 0;
    transform: translateX(-50%);
    border-radius: 9999px;
    background: linear-gradient(90deg, #3b82f6, #2563eb);
    transition: width 0.35s ease;
    pointer-events: none;
}

.service-card:hover .service-card__accent {
    width: 92%;
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

.custom-service {
    background:
        radial-gradient(ellipse 80% 60% at 100% 0%, rgba(125, 211, 252, 0.22), transparent 55%),
        radial-gradient(ellipse 60% 50% at 0% 100%, rgba(37, 99, 235, 0.35), transparent 50%),
        linear-gradient(135deg, #1e40af 0%, #1d4ed8 42%, #1e3a8a 100%);
    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;
}

.custom-service:hover {
    transform: translateY(-3px);
    box-shadow:
        0 12px 28px -10px rgba(30, 64, 175, 0.35),
        0 28px 60px -20px rgba(37, 99, 235, 0.5);
}

.custom-service__glow {
    position: absolute;
    border-radius: 9999px;
    filter: blur(48px);
    pointer-events: none;
}

.custom-service__glow--a {
    top: -20%;
    right: -8%;
    width: 280px;
    height: 280px;
    background: rgba(147, 197, 253, 0.35);
}

.custom-service__glow--b {
    bottom: -25%;
    left: -5%;
    width: 240px;
    height: 240px;
    background: rgba(30, 58, 138, 0.55);
}

.custom-service__grid {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 70% 70% at 70% 40%, black, transparent);
    pointer-events: none;
}

.custom-service__feature {
    transition:
        background-color 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
}

.custom-service__feature:hover {
    background-color: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.28);
    transform: translateY(-2px);
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
    .service-card:hover,
    .service-card__index,
    .service-card__accent,
    .service-card__icon,
    .custom-service,
    .custom-service:hover,
    .custom-service__feature:hover {
        transition: none;
        transform: none;
    }

    .service-card:hover .service-card__accent {
        width: 0;
    }

    .services-trust-icon,
    .services-trust-shield,
    .services-trust-check {
        animation: none;
    }
}
</style>
