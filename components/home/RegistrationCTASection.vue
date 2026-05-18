<script setup lang="ts">
type CTACard = {
    id: 'student' | 'tutor'
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleTail: string
    description: string
    cta: { label: string; href: string }
    /** Background photo (decorative, masked) */
    /** 'dark' = navy/indigo card, 'warm' = brighter blue card */
    tone: 'dark' | 'warm'
    iconType: 'spark' | 'shield'
}

const cards: CTACard[] = [
    {
        id: 'student',
        eyebrow: 'For students & parents',
        titleLead: 'Looking for a',
        titleAccent: 'tutor',
        titleTail: '?',
        description: 'Book a free demo with a background-verified mentor today.',
        cta: { label: 'Book Free Demo', href: '#book-demo' },
        tone: 'dark',
        iconType: 'spark',
    },
    {
        id: 'tutor',
        eyebrow: 'For tutors & educators',
        titleLead: 'Want to',
        titleAccent: 'teach',
        titleTail: ' with us?',
        description:
            "Join India's trusted tutor network. Earn from home or in-person.",
        cta: { label: 'Become a Tutor', href: '#become-tutor' },
        tone: 'warm',
        iconType: 'shield',
    },
]
</script>

<template>
    <section id="join" class="relative mx-auto w-full max-w-[1200px] px-4 py-8 sm:py-10 lg:py-12"
        aria-label="Join Indian Mentors as a student or tutor">
        <!-- soft top tint to separate from previous section -->
        <div aria-hidden="true"
            class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#eef1ff] to-transparent">
        </div>

        <div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <article v-for="(c, i) in cards" :key="c.id" :class="[
                'group relative isolate overflow-hidden rounded-3xl shadow-[0_20px_60px_-22px_rgba(15,23,42,0.45)] ring-1 transition-all duration-500',
                c.tone === 'dark'
                    ? 'bg-gradient-to-br from-[#0b1220] via-[#101a35] to-[#0a142f] text-white ring-white/10 hover:shadow-[0_28px_80px_-22px_rgba(29,78,216,0.55)]'
                    : 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white ring-blue-300/35 hover:shadow-[0_28px_80px_-22px_rgba(37,99,235,0.55)]',
            ]" v-motion :initial="{ opacity: 0, y: 22 }"
                :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 120 + i * 110 } }">
                <!-- ambient blobs -->
                <span aria-hidden="true" :class="[
                    'pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl',
                    c.tone === 'dark' ? 'bg-blue-600/30' : 'bg-blue-200/30',
                ]"></span>
                <span aria-hidden="true" :class="[
                    'pointer-events-none absolute -left-10 -bottom-12 h-44 w-44 rounded-full blur-3xl',
                    c.tone === 'dark' ? 'bg-indigo-500/25' : 'bg-indigo-300/35',
                ]"></span>

                <!-- Decorative photo (masked into right side) -->
                <div aria-hidden="true"
                    class="w-full h-full pointer-events-none absolute inset-y-0 right-0 hidden  sm:block">
                    <img :src="c.photo" :alt="c.photoAlt"
                        class="h-full w-full object-cover opacity-90 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy" />
                    <!-- left-edge fade so photo blends into the card color -->
                    <div :class="[
                        'absolute inset-0',
                        c.tone === 'dark'
                            ? 'bg-[linear-gradient(90deg,rgba(11,18,32,1)_0%,rgba(11,18,32,0.94)_52%,rgba(11,18,32,0.72)_72%,rgba(11,18,32,0.22)_88%,rgba(11,18,32,0)_100%)]'
                            : 'bg-[linear-gradient(90deg,rgba(37,99,235,1)_0%,rgba(37,99,235,0.94)_52%,rgba(37,99,235,0.72)_72%,rgba(37,99,235,0.22)_88%,rgba(37,99,235,0)_100%)]',
                    ]"></div>
                    <!-- bottom slight darken for legibility -->
                    <div :class="[
                        'absolute inset-x-0 bottom-0 h-1/3',
                        c.tone === 'dark'
                            ? 'bg-gradient-to-t from-black/40 to-transparent'
                            : 'bg-gradient-to-t from-indigo-900/35 to-transparent',
                    ]"></div>
                </div>

                <div class="relative z-[1] flex  flex-col gap-3 px-6 py-7  sm:px-8 sm:py-8 lg:py-9">
                    <!-- Top icon -->
                    <span :class="[
                        'inline-grid h-11 w-11 place-items-center rounded-xl ring-1 sm:h-12 sm:w-12',
                        c.tone === 'dark'
                            ? 'bg-blue-400/20 text-blue-200 ring-blue-300/35'
                            : 'bg-white/15 text-white ring-white/30',
                    ]">
                        <svg v-if="c.iconType === 'spark'" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true">
                            <path
                                d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2zm7 12 .9 2.6L22 17.5l-2.1.9L19 21l-.9-2.6L16 17.5l2.1-.9L19 14z" />
                        </svg>
                        <svg v-else class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 3 4 6v6c0 4.6 3.4 8.5 8 9 4.6-.5 8-4.4 8-9V6l-8-3z" stroke="currentColor"
                                stroke-width="1.7" stroke-linejoin="round" />
                            <path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>

                    <!-- Eyebrow -->
                    <span :class="[
                        'inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] ring-1',
                        c.tone === 'dark'
                            ? 'bg-white/8 text-blue-100/90 ring-white/15'
                            : 'bg-white/12 text-blue-50 ring-white/25',
                    ]">
                        {{ c.eyebrow }}
                    </span>

                    <!-- Title -->
                    <h3 :class="[
                        'font-display text-[1.7rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2.05rem] lg:text-[2.15rem]',
                        c.tone === 'dark' ? 'text-white' : 'text-white',
                    ]">
                        {{ c.titleLead }}
                        <em :class="[
                            'not-italic font-display',
                            c.tone === 'dark' ? 'text-blue-300 italic' : 'text-yellow-400 italic',
                        ]">{{ c.titleAccent }}</em>{{ c.titleTail }}
                    </h3>

                    <!-- Description -->
                    <p :class="[
                        'max-w-md text-[13.5px] leading-relaxed sm:text-[14.5px]',
                        c.tone === 'dark' ? 'text-blue-100/80' : 'text-blue-100/90',
                    ]">
                        {{ c.description }}
                    </p>

                    <!-- CTA -->
                    <div class="mt-2">
                        <a :href="c.cta.href" :class="[
                            'group/cta inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[13.5px] font-semibold transition-all duration-300',
                            c.tone === 'dark'
                                ? 'bg-blue-500 text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 hover:bg-blue-400'
                                : 'bg-white text-blue-700 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.45)] hover:-translate-y-0.5 hover:bg-blue-50',
                        ]">
                            <span>{{ c.cta.label }}</span>
                            <span :class="[
                                'grid h-6 w-6 place-items-center rounded-full transform-gpu transition-all duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-1 group-hover/cta:scale-110',
                                c.tone === 'dark' ? 'bg-white/15' : 'bg-blue-700/10',
                            ]">
                                <svg class="h-3 w-3 -rotate-45 transition-transform duration-300 ease-out group-hover/cta:translate-x-0.5 group-hover/cta:rotate-0"
                                    viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <!-- Trust footnote -->
                    <p :class="[
                        'mt-1 inline-flex items-center gap-1.5 text-[11.5px]',
                        c.tone === 'dark' ? 'text-blue-100/65' : 'text-blue-100/85',
                    ]">
                        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span v-if="c.id === 'student'">No card. No commitment. 100% verified tutors.</span>
                        <span v-else>Free onboarding · Earn from day one · Background-verified profile.</span>
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>
