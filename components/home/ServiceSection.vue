<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

type CardSize = 'hero' | 'compact' | 'cta'

type ServiceCard = {
    title: string
    hook: string
    chip: string
    visual: string
    href: string
    size: CardSize
    popular?: boolean
    icon?: string
}

const sectionConfig = {
    badge: 'Pick your learning style',
    title: 'Our Personalised <span class="text-blue-500">Tutoring Services</span> ',
    description:
        'Home, online, in school, or on the move — choose a format first. We’ll match a verified mentor around it.',
    classes: 'mx-auto max-w-4xl !px-0 !py-0',
}

const services: ServiceCard[] = [
    {
        title: 'Home &nbsp; Tutors',
        hook: 'Personalised learning at home.',
        chip: '1-on-1 at home',
        visual: 'assets/img/services/home-tutors.webp',
        href: '/services#home-tutors',
        size: 'hero',
        popular: true,
    },
    {
        title: 'Online &nbsp;Tutors',
        hook: 'Live learning, wherever you are.',
        chip: 'Learn from anywhere',
        visual: 'assets/img/services/online-tutor.webp',
        href: '/services#online-tutors',
        size: 'hero',
    },
    {
        title: 'Hybrid &nbsp;Tutors',
        hook: 'The flexibility of both formats.',
        chip: 'Home + online',
        visual: 'assets/img/services/hybrid-tutor.webp',
        href: '/services#hybrid-tutors',
        size: 'hero',
    },
    {
        title: 'Shadow &nbsp;Tutors',
        hook: 'A dedicated mentor by their side.',
        chip: 'In-school support',
        visual: 'assets/img/services/shadow-tutors.webp',
        href: '/services#shadow-tutors',
        size: 'compact',
    },
    {
        title: 'Travel &nbsp;Tutors',
        hook: 'Education that travels with you.',
        chip: 'Learn on the road',
        visual: 'assets/img/services/travel-tutor.webp',
        href: '/services#travel-tutors',
        size: 'compact',
    },
    {
        title: 'Live-In &nbsp;Tutors',
        hook: 'A mentor available every day.',
        chip: 'Full-time mentor',
        visual: 'assets/img/services/live-In-tutors.webp',
        href: '/services#live-in-tutors',
        size: 'compact',
    },
    {
        title: 'Special &nbsp;Educators',
        hook: 'Learning designed around the child.',
        chip: 'Diverse needs',
        visual: 'assets/img/services/special-educators.webp',
        href: '/services#special-educators',
        size: 'compact',
    },
    {
        title: 'Homeschooling &nbsp;Support',
        hook: 'Structured education at home.',
        chip: 'Board-aligned',
        visual: 'assets/img/services/home-schooling-support.webp',
        href: '/services#home-schooling',
        size: 'compact',
    },

    {
        title: 'Something more specific?',
        hook: 'Tell us the subject, schedule, location, and learning needs—we’ll create the right tutor match.',
        chip: 'Made for you',
        visual: 'assets/img/hero/hero-1.png',
        icon: 'assets/img/services/custome.svg',
        href: '/services#custom-tutor',
        size: 'cta',
    },
]
</script>

<template>
    <section id="services-v2" class="relative overflow-hidden section-surface-muted section-py"
        aria-labelledby="services-v2-heading">
        <div aria-hidden="true"
            class="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
        <div aria-hidden="true"
            class="pointer-events-none absolute -right-20 bottom-4 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

        <div class="container-page relative z-[1]">
            <CardHeader heading-id="services-v2-heading" :badge="sectionConfig.badge" :title="sectionConfig.title"
                :description="sectionConfig.description" :classes="sectionConfig.classes" />

            <ul class="mt-10 grid grid-cols-1 gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-[1.1rem]"
                role="list">
                <li v-for="(service, i) in services" :key="service.title" class="flex h-full min-w-0"
                    :class="service.size === 'cta' ? 'sm:col-span-2 lg:col-span-4' : ''" v-motion
                    :initial="{ opacity: 0, y: 18 }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 60 + i * 50, duration: 480, ease: 'easeOut' },
                    }">
                    <NuxtLink :to="service.href" :aria-label="`Explore ${service.title}`"
                        class="group relative isolate flex h-full w-full flex-col overflow-hidden rounded-[1.6rem] bg-slate-900 no-underline shadow-[0_16px_36px_-22px_rgba(15,23,42,0.45)] transition duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-18px_rgba(29,78,216,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        :class="service.size === 'cta'
                            ? 'min-h-[16rem] justify-end bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6] shadow-[0_18px_36px_-18px_rgba(29,78,216,0.55)] hover:shadow-[0_24px_44px_-16px_rgba(29,78,216,0.62)] sm:min-h-[11.5rem] sm:justify-center'
                            : 'min-h-[18rem] justify-end sm:min-h-[20rem]'
                            ">
                        <span class="absolute inset-0 z-0" aria-hidden="true">
                            <img v-if="service.size !== 'cta'" :src="usePublicAsset(service.visual)"
                                :alt="`${service.title} — Indian Mentors`"
                                class="h-full w-full scale-[1.02] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-[1.02]"
                                :loading="i < 2 ? 'eager' : 'lazy'" decoding="async" />
                            <span class="absolute inset-0" :class="service.size === 'cta'
                                ? 'bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.28)_0%,transparent_42%),radial-gradient(circle_at_8%_92%,rgba(30,64,175,0.45)_0%,transparent_48%)]'
                                : 'bg-[linear-gradient(180deg,rgba(15,23,42,0.06)_8%,rgba(15,23,42,0.42)_42%,rgba(15,23,42,0.92)_74%,rgba(15,23,42,0.98)_100%)]'
                                " />
                        </span>

                        <!-- <span v-if="service.popular"
                            class="absolute left-4 top-4 z-[2] inline-flex items-center rounded-full bg-amber-500 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.08em] text-gray-900 shadow-[0_8px_18px_-8px_rgba(245,158,11,0.7)]">
                            Most chosen
                        </span> -->
                        <span
                            class=" absolute left-4 top-4 inline-flex items-center rounded-full border border-black/20 bg-black/50 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-white backdrop-blur-md">
                            {{ service.chip }}
                        </span>

                        <span v-if="service.icon"
                            class="absolute left-4 top-4 z-[2] grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-inset ring-white/25 backdrop-blur-sm sm:left-6 sm:top-1/2 sm:-translate-y-1/2">
                            <img :src="usePublicAsset(service.icon)" alt="" class="h-6 w-6" width="24" height="24" />
                        </span>

                        <div class="relative z-[1] flex flex-col items-start px-5 pb-5 pt-5"
                            :class="service.size === 'cta' ? 'sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7 sm:pl-24 sm:pr-8' : ''">
                            <div class="flex min-w-0 flex-col items-start">
                                <!-- <span
                                    class="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-white backdrop-blur-md">
                                    {{ service.chip }}
                                </span> -->
                                <h3 class="mt-2.5 font-display uppercase text-[1rem] font-bold leading-snug  text-white [text-shadow:0_8px_18px_rgba(15,23,42,0.35)]"
                                    :class="service.size === 'cta' ? 'sm:text-[1.35rem]' : ''" v-html="service.title">
                                </h3>
                                <p class="mt-1.5 text-sm font-semibold leading-relaxed text-white/80"
                                    :class="service.size === 'cta' ? 'sm:max-w-xl sm:text-sm' : ''">
                                    {{ service.hook }}
                                </p>
                            </div>
                            <span
                                class="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[0.8rem] font-bold tracking-tight text-indigo-700 shadow-[0_10px_22px_-10px_rgba(15,23,42,0.55)] transition group-hover:-translate-y-px group-hover:gap-2.5 motion-reduce:transition-none"
                                :class="service.size === 'cta'
                                    ? 'group-hover:bg-indigo-50 group-hover:text-indigo-800 sm:mt-0 sm:shrink-0 sm:px-5 sm:py-3'
                                    : 'group-hover:bg-indigo-700 group-hover:text-white  w-full text-right justify-center'
                                    ">
                                {{ service.size === 'cta' ? 'Tell us what you need' : 'Know More' }}
                                <!-- <Icon icon="solar:arrow-right-linear" class="h-4 w-4" aria-hidden="true" /> -->
                            </span>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>
