<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

/** Brand-aligned tones: primary blue, secondary emerald, accent amber + depth variants */
type CardTone = 'blue' | 'indigo' | 'sky' | 'theme' | 'emerald' | 'teal' | 'amber' | 'navy'

type ServiceCard = {
    title: string
    description: string
    img: string
    features: string[]
    href: string
    tone: CardTone
}

const sectionConfig = {
    badge: 'What We Offer',
    title: 'Modern Learning Solutions for Academic Excellence',
    description:
        'Personalised tutoring formats built around how your child learns — at home, online, or wherever you need support.',
    classes: 'mx-auto max-w-3xl !px-0 !py-0',
}

const services: ServiceCard[] = [
    {
        title: 'Home Tutors',
        description: 'One-on-one personalised learning in the comfort of your home.',
        img: 'assets/img/services/home-tutor.svg',
        features: ['Personalised learning plans', 'Flexible scheduling', 'All subjects & boards'],
        href: '/services#home-tutors',
        tone: 'blue',
    },
    {
        title: 'Online Tutors',
        description: 'Live interactive classes from anywhere, anytime.',
        img: 'assets/img/services/online-tutor.svg',
        features: ['Live video sessions', 'Digital whiteboard', 'Recorded revisions'],
        href: '/services#online-tutors',
        tone: 'indigo',
    },
    {
        title: 'Shadow Tutors',
        description: 'Extra focus and depth beyond regular school curriculum.',
        img: 'assets/img/services/shadow-tutor.svg',
        features: ['Concept reinforcement', 'Homework guidance', 'Exam preparation'],
        href: '/services#shadow-tutors',
        tone: 'sky',
    },
    {
        title: 'Travel Tutors',
        description: 'Verified mentors available at your location while you travel.',
        img: 'assets/img/services/travel-tutor.svg',
        features: ['On-demand support', 'Location flexibility', 'Continuity in learning'],
        href: '/services#travel-tutors',
        tone: 'theme',
    },
    {
        title: 'Live-In Tutors',
        description: 'Full-time residential academic mentorship for consistent learning and holistic development.',
        img: 'assets/img/services/live-in-tutor.svg',
        features: ['Structured daily routine', 'Academic discipline', 'Result-oriented approach'],
        href: '/services#live-in-tutors',
        tone: 'emerald',
    },
    {
        title: 'Home Schooling Support',
        description: 'Home-based learning with board-aligned curriculum and guidance.',
        img: 'assets/img/services/home-schooling.svg',
        features: ['Board-aligned curriculum', 'Dedicated mentor', 'Progress & assessments'],
        href: '/services#home-schooling',
        tone: 'teal',
    },
    {
        title: 'Special Educator',
        description: 'Individualised support for children with diverse learning and developmental needs.',
        img: 'assets/img/services/special-tutor.svg',
        features: ['ADHD & ASD support', 'SLD & dyslexia support', 'Behavioural challenges'],
        href: '/services#special-educators',
        tone: 'amber',
    },
    {
        title: 'Need Something More Specific?',
        description:
            'Tell us your goals, schedule, and learning style — we match you with a mentor and plan built around you.',
        img: 'assets/img/services/custome.svg',
        features: ['Flexible goals & timelines', 'Mixed subjects or boards', 'Dedicated coordinator'],
        href: '/services#custom-tutor',
        tone: 'navy',
    },
]

/** Cards 1, 3, 5, 8 use blue gradient fills */
const blueGradientIndexes = new Set([0, 2, 5, 7])

function isBlueCard(index: number) {
    return blueGradientIndexes.has(index)
}
</script>

<template>
    <section id="services" class="relative overflow-hidden section-surface-white section-py"
        aria-labelledby="services-heading">
        <!-- Abstract atmosphere -->
        <div class="container-page relative z-[1]">
            <CardHeader heading-id="services-heading" :badge="sectionConfig.badge" :title="sectionConfig.title"
                :description="sectionConfig.description" :classes="sectionConfig.classes" />

            <ul class="offer-grid mt-10 sm:mt-12" role="list">
                <li v-for="(service, i) in services" :key="service.title" v-motion :initial="{ opacity: 0, y: 16 }"
                    :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 80 + i * 60, duration: 480, ease: 'easeOut' },
                    }">
                    <a :href="service.href" class="offer-card-wrap" :aria-label="`Learn more about ${service.title}`">
                        <article class="offer-card" :class="[
                            `offer-card--${service.tone}`,
                            isBlueCard(i) ? 'offer-card--gradient' : 'offer-card--plain',
                        ]">
                            <span class="offer-card__deco" aria-hidden="true">
                                <span class="offer-card__deco-orb" />
                                <span class="offer-card__deco-dots" />
                            </span>

                            <div class="offer-card__body">
                                <span class="offer-card__icon" aria-hidden="true">
                                    <img :src="usePublicAsset(service.img)" :alt="`${service.title} icon`" width="28"
                                        height="28" class="offer-card__icon-img" loading="lazy" />
                                </span>

                                <h3 class="offer-card__title font-display">
                                    {{ service.title }}
                                </h3>

                                <p class="offer-card__desc">
                                    {{ service.description }}
                                </p>

                                <ul class="offer-card__features" role="list">
                                    <li v-for="feat in service.features" :key="feat">
                                        <Icon icon="fa6-solid:arrow-right-long" class="offer-card__check"
                                            aria-hidden="true" />
                                        <span>{{ feat }}</span>
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <span class="offer-card__action_wrap" aria-hidden="true">
                            <span class="offer-card__action" aria-hidden="true">
                                <Icon icon="solar:arrow-right-up-linear" class="h-4 w-4" />
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.offer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.9rem;
    align-items: stretch;
}

.offer-grid>li {
    display: flex;
    min-width: 0;
    height: 100%;
}

@media (min-width: 640px) {
    .offer-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
    }
}

@media (min-width: 1024px) {
    .offer-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.1rem;
    }
}

.offer-card-wrap {
    --btn: 2.55rem;
    --inset: 0px;
    --cut: calc(var(--btn) + var(--inset) + var(--gap));
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    isolation: isolate;
    transform: translate3d(0, 0, 0);
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
}

.offer-card-wrap:hover {
    transform: translate3d(0, -5px, 0);
}

.offer-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;
    padding: 1.35rem 1.25rem calc(var(--btn) + 1rem) 1.25rem;
    border-radius: 1.5rem;
    overflow: hidden;
    transition:
        border-color 0.35s ease,
        box-shadow 0.35s ease;
    -webkit-mask-image: radial-gradient(circle at 100% 100%,
            transparent var(--cut),
            #000 calc(var(--cut) + 1px));
    mask-image: radial-gradient(circle at 100% 100%,
            transparent var(--cut),
            #000 calc(var(--cut) + 1px));
}

.offer-card--plain {
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.08);
    box-shadow: 0 8px 24px -16px rgba(15, 23, 42, 0.22);
}

.offer-card--gradient {
    background: linear-gradient(145deg, #3b82f6 0%, #1d4ed8 52%, #1e40af 100%);
    border: 1px solid transparent;
    box-shadow: 0 14px 32px -18px rgba(29, 78, 216, 0.55);
}

.offer-card-wrap:hover .offer-card--plain {
    border-color: rgba(37, 99, 235, 0.18);
    box-shadow: 0 16px 32px -18px rgba(15, 23, 42, 0.28);
}

.offer-card-wrap:hover .offer-card--gradient {
    box-shadow: 0 20px 40px -18px rgba(29, 78, 216, 0.65);
}

/* —— Abstract décor inside cards —— */
.offer-card__deco {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.offer-card__deco-orb {
    position: absolute;
    top: -30%;
    right: -25%;
    width: 70%;
    height: 70%;
    border-radius: 9999px;
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.offer-card--plain .offer-card__deco-orb {
    background: radial-gradient(circle, rgba(29, 78, 216, 0.07) 0%, transparent 68%);
}

.offer-card--gradient .offer-card__deco-orb {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 68%);
}

.offer-card__deco-dots {
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    width: 4.5rem;
    height: 4.5rem;
    background-size: 9px 9px;
    mask-image: radial-gradient(circle at center, #000 20%, transparent 70%);
}

.offer-card--plain .offer-card__deco-dots {
    opacity: 0.35;
    background-image: radial-gradient(rgba(29, 78, 216, 0.28) 1px, transparent 1px);
}

.offer-card--gradient .offer-card__deco-dots {
    opacity: 0.3;
    background-image: radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px);
}

.offer-card-wrap:hover .offer-card__deco-orb {
    transform: scale(1.08);
}

/* Icon accent tones (white cards) */
.offer-card--plain.offer-card--blue .offer-card__icon,
.offer-card--plain.offer-card--indigo .offer-card__icon,
.offer-card--plain.offer-card--sky .offer-card__icon,
.offer-card--plain.offer-card--theme .offer-card__icon,
.offer-card--plain.offer-card--navy .offer-card__icon {
    background: #e8f1ff;
}

.offer-card--plain.offer-card--emerald .offer-card__icon,
.offer-card--plain.offer-card--teal .offer-card__icon {
    background: #e7f8f2;
}

.offer-card--plain.offer-card--amber .offer-card__icon {
    background: #fff7e8;
}

.offer-card--gradient .offer-card__icon {
    background: rgba(255, 255, 255, 0.16);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
}

.offer-card__body {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 0.35rem;
}

.offer-card__icon {
    display: grid;
    height: 2.55rem;
    width: 2.55rem;
    place-items: center;
    border-radius: 0.85rem;
    transition:
        transform 0.3s ease,
        background-color 0.3s ease,
        color 0.3s ease;
}

.offer-card-wrap:hover .offer-card__icon {
    transform: scale(1.05);
}

.offer-card__icon-img {
    height: 1.35rem;
    width: 1.35rem;
    object-fit: contain;
}

.offer-card--plain .offer-card__icon-img {
    filter: brightness(0) saturate(100%);
    opacity: 0.85;
}

.offer-card--gradient .offer-card__icon-img {
    filter: brightness(0) invert(1);
    opacity: 1;
}

.offer-card__title {
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.25;
}

.offer-card--plain .offer-card__title {
    color: #0f172a;
}

.offer-card--gradient .offer-card__title {
    color: #ffffff;
}

.offer-card__desc {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.5;
}

.offer-card--plain .offer-card__desc {
    color: #64748b;
}

.offer-card--gradient .offer-card__desc {
    color: rgba(255, 255, 255, 0.9);
}

.offer-card__features {
    margin-top: 0.9rem;
    display: grid;
    gap: 0.4rem;
}

.offer-card__features li {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
    font-size: 0.72rem;
    line-height: 1.35;
    font-weight: 500;
}

.offer-card--plain .offer-card__features li {
    color: #334155;
}

.offer-card--gradient .offer-card__features li {
    color: rgba(255, 255, 255, 0.95);
}

.offer-card__check {
    margin-top: 0.1rem;
    height: 0.7rem;
    width: 0.7rem;
    flex-shrink: 0;
    opacity: 0.9;
}

.offer-card--plain .offer-card__check {
    color: #1d4ed8;
}

.offer-card--gradient .offer-card__check {
    color: #ffffff;
}

.offer-card__action_wrap {
    position: absolute;
    right: -10px;
    bottom: -10px;
    z-index: 2;
    display: grid;
    height: calc(var(--btn) + 8px);
    width: calc(var(--btn) + 8px);
    place-items: center;
    border-radius: 50%;
    background: #ffffff;
    transform: translate3d(0, 0, 0);
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.offer-card__action {
    z-index: 2;
    display: grid;
    height: var(--btn);
    width: var(--btn);
    place-items: center;
    border-radius: 9999px;
    background: #0f172a;
    border: 1.5px solid #0f172a;
    color: #ffffff;
    box-shadow: 0 2px 8px -4px rgba(15, 23, 42, 0.28);
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
    transition:
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        background-color 0.4s ease,
        color 0.4s ease,
        border-color 0.4s ease,
        box-shadow 0.4s ease;
}

.offer-card-wrap:hover .offer-card__action {
    transform: translate3d(0, 0, 0) scale(1.06) rotate(12deg);
    background: #1d4ed8;
    color: #ffffff;
    border-color: #1d4ed8;
    box-shadow: 0 6px 16px -6px rgba(29, 78, 216, 0.45);
}

@media (prefers-reduced-motion: reduce) {

    .offer-card-wrap,
    .offer-card-wrap:hover,
    .offer-card__action_wrap,
    .offer-card__action,
    .offer-card-wrap:hover .offer-card__action,
    .offer-card__deco-orb,
    .offer-card-wrap:hover .offer-card__deco-orb {
        transition: none;
        transform: none;
        will-change: auto;
    }
}
</style>
