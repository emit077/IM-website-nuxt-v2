<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

type CardTone = 'orange' | 'violet' | 'lime' | 'sky' | 'coral' | 'mint' | 'amber' | 'navy'

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
        tone: 'orange',
    },
    {
        title: 'Online Tutors',
        description: 'Live interactive classes from anywhere, anytime.',
        img: 'assets/img/services/online-tutor.svg',
        features: ['Live video sessions', 'Digital whiteboard', 'Recorded revisions'],
        href: '/services#online-tutors',
        tone: 'violet',
    },
    {
        title: 'Shadow Tutors',
        description: 'Extra focus and depth beyond regular school curriculum.',
        img: 'assets/img/services/shadow-tutor.svg',
        features: ['Concept reinforcement', 'Homework guidance', 'Exam preparation'],
        href: '/services#shadow-tutors',
        tone: 'lime',
    },
    {
        title: 'Travel Tutors',
        description: 'Verified mentors available at your location while you travel.',
        img: 'assets/img/services/travel-tutor.svg',
        features: ['On-demand support', 'Location flexibility', 'Continuity in learning'],
        href: '/services#travel-tutors',
        tone: 'sky',
    },
    {
        title: 'Live-In Tutors',
        description: 'Full-time residential academic mentorship for consistent learning and holistic development.',
        img: 'assets/img/services/live-in-tutor.svg',
        features: ['Structured daily routine', 'Academic discipline', 'Result-oriented approach'],
        href: '/services#live-in-tutors',
        tone: 'coral',
    },
    {
        title: 'Home Schooling Support',
        description: 'Home-based learning with board-aligned curriculum and guidance.',
        img: 'assets/img/services/home-schooling.svg',
        features: ['Board-aligned curriculum', 'Dedicated mentor', 'Progress & assessments'],
        href: '/services#home-schooling',
        tone: 'mint',
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

const lightTextTones: CardTone[] = ['orange', 'violet', 'sky', 'coral', 'navy']

function isLightText(tone: CardTone) {
    return lightTextTones.includes(tone)
}
</script>

<template>
    <section id="services" class="relative overflow-hidden section-surface-muted section-py"
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
                            isLightText(service.tone) ? 'offer-card--light-text' : 'offer-card--dark-text',
                        ]">
                            <!-- Card abstract décor -->
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
                                        <Icon icon="fa6-solid:check" class="offer-card__check" aria-hidden="true" />
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
    --gap: 0.4rem;
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
    -webkit-mask-image: radial-gradient(circle at 100% 100%,
            transparent var(--cut),
            #000 calc(var(--cut) + 1px));
    mask-image: radial-gradient(circle at 100% 100%,
            transparent var(--cut),
            #000 calc(var(--cut) + 1px));
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
    background: radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 68%);
    transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.offer-card__deco-ring {
    position: absolute;
    bottom: -18%;
    right: -22%;
    width: 9rem;
    height: 9rem;
    border-radius: 9999px;
    border: 1.5px solid #ffffff;
    opacity: 0.22;
}

.offer-card__deco-dots {
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    width: 4.5rem;
    height: 4.5rem;
    opacity: 0.28;
    background-image: radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px);
    background-size: 9px 9px;
    mask-image: radial-gradient(circle at center, #000 20%, transparent 70%);
}

.offer-card__deco-art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;
}

.offer-card--dark-text .offer-card__deco-orb {
    background: radial-gradient(circle, rgba(26, 26, 26, 0.1) 0%, transparent 68%);
}

.offer-card--dark-text .offer-card__deco-ring {
    border-color: rgba(26, 26, 26, 0.14);
}

.offer-card--dark-text .offer-card__deco-dots {
    opacity: 0.22;
    background-image: radial-gradient(rgba(26, 26, 26, 0.55) 1px, transparent 1px);
}

.offer-card--dark-text .offer-card__deco-art {
    color: #1a1a1a;
}

.offer-card-wrap:hover .offer-card__deco-orb {
    transform: scale(1.08);
}

.offer-card--orange {
    background: #ff7a33;
}

.offer-card--violet {
    background: #8b7dff;
}

.offer-card--lime {
    background: #c4ff61;
}

.offer-card--sky {
    background: #3b9eff;
}

.offer-card--coral {
    background: #ff6b6b;
}

.offer-card--mint {
    background: #7dffb3;
}

.offer-card--amber {
    background: #ffd24a;
}

.offer-card--navy {
    background: linear-gradient(145deg, #1e40af 0%, #1d4ed8 48%, #2563eb 100%);
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
    height: 2.35rem;
    width: 2.35rem;
    place-items: center;
}

.offer-card__icon-img {
    height: 1.55rem;
    width: 1.55rem;
    object-fit: contain;
}

.offer-card--light-text .offer-card__icon-img {
    filter: brightness(0) invert(1);
}

.offer-card--dark-text .offer-card__icon-img {
    filter: brightness(0) saturate(100%) invert(12%) sepia(18%) saturate(700%) hue-rotate(180deg);
}

.offer-card__title {
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.25;
}

.offer-card__desc {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.5;
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

.offer-card__check {
    margin-top: 0.1rem;
    height: 0.7rem;
    width: 0.7rem;
    flex-shrink: 0;
    opacity: 0.9;
}

.offer-card--light-text .offer-card__title,
.offer-card--light-text .offer-card__desc,
.offer-card--light-text .offer-card__features li {
    color: #ffffff;
}

.offer-card--light-text .offer-card__desc {
    color: rgba(255, 255, 255, 0.92);
}

.offer-card--light-text .offer-card__features li {
    color: rgba(255, 255, 255, 0.95);
}

.offer-card--dark-text .offer-card__title {
    color: #1a1a1a;
}

.offer-card--dark-text .offer-card__desc,
.offer-card--dark-text .offer-card__features li {
    color: rgba(26, 26, 26, 0.8);
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
    background: #ffffff;
    border: 1.5px solid #1a1a1a;
    color: #1a1a1a;
    box-shadow: 0 2px 8px -4px rgba(15, 23, 42, 0.18);
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
    background: #1a1a1a;
    color: #ffffff;
    border-color: #1a1a1a;
    box-shadow: 0 6px 16px -6px rgba(15, 23, 42, 0.35);
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
