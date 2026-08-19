<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, useId } from 'vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

type Step = {
    no: string
    title: string
    description: string
    iconType: 'register' | 'match' | 'demo' | 'plan' | 'learn'
    accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'purple'
    /** True for the highlighted "Recommended Step" card */
    highlight?: boolean
}

const steps: Step[] = [
    {
        no: '01',
        title: 'Register Online',
        description: 'Fill out the quick enrollment form and share your details.',
        iconType: 'register',
        accent: 'violet',
    },
    {
        no: '02',
        title: 'Get Tutor Matched',
        description: 'Our experts match you with the right tutor based on your needs.',
        iconType: 'match',
        accent: 'blue',
    },
    {
        no: '03',
        title: 'Attend Free Demo',
        description: "Experience the tutor's teaching style in a free demo session.",
        iconType: 'demo',
        accent: 'emerald',
    },
    {
        no: '04',
        title: 'Choose Your Plan',
        description: 'Select from Gold, Diamond, or Platinum — flexible & affordable.',
        iconType: 'plan',
        accent: 'orange',
    },
    {
        no: '05',
        title: 'Start Learning',
        description: 'Begin your learning journey with structured sessions & support.',
        iconType: 'learn',
        accent: 'purple',
    },
]

const headerContent = {
    badge: 'How it works',
    title: `<span> Start Learning in </span>
                        <span class='text-gradient-brand pt-2'>5 Simple Steps</span>`,
    description: ' From registration to your first session — simple, transparent, and completely risk-free.',
    classes: '',
}

const accentClasses: Record<Step['accent'], { badge: string; tile: string; icon: string }> = {
    violet: {
        badge: 'bg-violet-600',
        tile: 'bg-violet-100',
        icon: 'text-violet-600',
    },
    blue: {
        badge: 'bg-blue-600',
        tile: 'bg-blue-100',
        icon: 'text-blue-600',
    },
    emerald: {
        badge: 'bg-emerald-500',
        tile: 'bg-emerald-100',
        icon: 'text-emerald-600',
    },
    orange: {
        badge: 'bg-orange-500',
        tile: 'bg-orange-100',
        icon: 'text-orange-600',
    },
    purple: {
        badge: 'bg-fuchsia-500',
        tile: 'bg-fuchsia-100',
        icon: 'text-fuchsia-600',
    },
}

/** Resize / spine tween cleanup (set in onMounted). */
let disposeTimelineSpine: (() => void) | null = null

/** Sign-in form state (name + 10-digit Indian mobile) */
const form = ref({ name: '', mobile: '' })
const formErrors = ref<{ name?: string; mobile?: string }>({})
const formSubmitting = ref(false)
const formSuccess = ref(false)

const NAME_RE = /^[A-Za-z][A-Za-z .'-]{1,49}$/
const MOBILE_RE = /^[6-9]\d{9}$/

function validateName(value: string | null | undefined): string | undefined {
    const v = (value ?? '').trim()
    if (v.length === 0) return 'Name is required.'
    if (v.length < 2) return 'Name must be at least 2 characters.'
    if (!NAME_RE.test(v)) return 'Use letters, spaces and . \' - only.'
    return undefined
}

function validateMobile(value: string | null | undefined): string | undefined {
    const v = (value ?? '').trim()
    if (v.length === 0) return 'Mobile number is required.'
    if (!/^\d+$/.test(v)) return 'Mobile number must contain digits only.'
    if (v.length !== 10) return 'Mobile number must be exactly 10 digits.'
    if (!MOBILE_RE.test(v)) return 'Enter a valid Indian mobile (starts with 6–9).'
    return undefined
}

function validateForm(): boolean {
    const errs: { name?: string; mobile?: string } = {}
    const nameErr = validateName(form.value.name)
    const mobileErr = validateMobile(form.value.mobile)
    if (nameErr) errs.name = nameErr
    if (mobileErr) errs.mobile = mobileErr
    formErrors.value = errs
    return Object.keys(errs).length === 0
}

/** Re-validate a single field (clears the error as the user types valid input). */
function onNameInput() {
    if (formErrors.value.name) {
        formErrors.value = { ...formErrors.value, name: validateName(form.value.name) }
    }
}

/** Block any non-digit keystroke before it reaches the mobile field. */
function onMobileKeydown(e: KeyboardEvent) {
    const allowed = [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'Home',
        'End',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
    ]
    if (allowed.includes(e.key)) return
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'z', 'y'].includes(e.key.toLowerCase()))
        return
    if (!/^\d$/.test(e.key)) {
        e.preventDefault()
    }
}

/** Strip any non-digits that slipped through (paste, autofill, IME, etc.) */
function onMobileInput(e: Event) {
    const target = e.target as HTMLInputElement
    const cleaned = target.value.replace(/\D/g, '').slice(0, 10)
    if (target.value !== cleaned) target.value = cleaned
    form.value.mobile = cleaned
    if (formErrors.value.mobile) {
        formErrors.value = { ...formErrors.value, mobile: validateMobile(cleaned) }
    }
}

function onMobilePaste(e: ClipboardEvent) {
    const txt = e.clipboardData?.getData('text') ?? ''
    if (/\D/.test(txt)) {
        e.preventDefault()
        const cleaned = (form.value.mobile + txt.replace(/\D/g, '')).slice(0, 10)
        form.value.mobile = cleaned
        if (formErrors.value.mobile) {
            formErrors.value = { ...formErrors.value, mobile: validateMobile(cleaned) }
        }
    }
}

function onMobileDrop(e: DragEvent) {
    const txt = e.dataTransfer?.getData('text') ?? ''
    if (/\D/.test(txt)) e.preventDefault()
}

async function onSubmitSignIn() {
    if (formSubmitting.value) return
    if (!validateForm()) return
    formSubmitting.value = true
    formSuccess.value = false

    await new Promise((r) => setTimeout(r, 650))

    formSubmitting.value = false
    formSuccess.value = true
    form.value = { name: '', mobile: '' }
    formErrors.value = {}

    setTimeout(() => {
        formSuccess.value = false
    }, 4000)
}

/** GSAP ScrollTrigger instances created for this section (killed on unmount). */
const timelineTriggers = ref<unknown[]>([])

const timelineStoryEl = ref<HTMLElement | null>(null)

/** Ensure step cards are visible when GSAP is unavailable (e.g. S3 chunk load failure). */
function revealAllTimelineItems(root: HTMLElement) {
    root.querySelectorAll<HTMLElement>('.timeline-card, .timeline-badge').forEach((el) => {
        el.style.opacity = '1'
        el.style.visibility = 'visible'
        el.style.transform = 'none'
    })
    root.classList.add('timeline-story--static')
}
const spineSvgRef = ref<SVGSVGElement | null>(null)
const spineTrackRef = ref<SVGPathElement | null>(null)
const spineDrawRef = ref<SVGPathElement | null>(null)
const spineGradId = useId()

/** Builds one continuous path through the vertical centers of badges 01 … 05 */
function buildSpinePathD(root: HTMLElement): string | null {
    const badges = root.querySelectorAll<HTMLElement>('.timeline-badge')
    if (badges.length < 2) return null

    const rr = root.getBoundingClientRect()
    const pts = Array.from(badges).map((el) => {
        const r = el.getBoundingClientRect()
        return {
            x: r.left + r.width / 2 - rr.left,
            y: r.top + r.height / 2 - rr.top,
        }
    })

    let d = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i]
        const b = pts[i + 1]
        const dy = b.y - a.y
        const bulge = i % 2 === 0 ? 44 : -44
        d += ` C ${a.x + bulge} ${a.y + dy * 0.28}, ${b.x + bulge} ${a.y + dy * 0.72}, ${b.x} ${b.y}`
    }
    return d
}

function layoutSpineSvg(root: HTMLElement, svg: SVGSVGElement): boolean {
    const w = root.clientWidth
    const h = root.clientHeight
    if (w < 8 || h < 8) return false
    svg.setAttribute('width', String(w))
    svg.setAttribute('height', String(h))
    return true
}

onMounted(async () => {
    if (!import.meta.client) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = timelineStoryEl.value
    const svg = spineSvgRef.value
    const trackPath = spineTrackRef.value
    const drawPath = spineDrawRef.value
    if (!root || !svg || !trackPath || !drawPath) return

    let gsap: typeof import('gsap').default
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger

    try {
        const [gsapMod, stMod] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
        gsap = gsapMod.default
        ScrollTrigger = stMod.ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)
    } catch (err) {
        console.warn('[LearningStepsSection] GSAP failed to load; showing static timeline.', err)
        revealAllTimelineItems(root)
        return
    }

    const registered: unknown[] = []
    let spineTween: { kill: () => void; scrollTrigger?: { kill: () => void } } | null = null

    await nextTick()
    await nextTick()

    const applySpine = () => {
        if (!layoutSpineSvg(root, svg)) return

        const d = buildSpinePathD(root)
        if (!d) return

        trackPath.setAttribute('d', d)
        drawPath.setAttribute('d', d)

        spineTween?.scrollTrigger?.kill()
        spineTween?.kill()

        let len = 0
        try {
            len = drawPath.getTotalLength()
        } catch {
            len = 0
        }
        if (len <= 0) return

        drawPath.style.strokeDasharray = `${len}`

        if (prefersReduced) {
            drawPath.style.strokeDashoffset = '0'
            drawPath.style.strokeDasharray = 'none'
            return
        }

        gsap.set(drawPath, { strokeDashoffset: len })
        spineTween = gsap.to(drawPath, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: root,
                start: 'top 72%',
                end: 'bottom 36%',
                scrub: 0.65,
            },
        })
    }

    applySpine()
    requestAnimationFrame(() => {
        applySpine()
        ScrollTrigger.refresh()
    })

    let resizeT: ReturnType<typeof setTimeout> | undefined
    const onResize = () => {
        clearTimeout(resizeT)
        resizeT = setTimeout(() => {
            applySpine()
            ScrollTrigger.refresh()
        }, 120)
    }
    window.addEventListener('resize', onResize)

    if (!prefersReduced) {
        const items = root.querySelectorAll<HTMLElement>('.timeline-step')

        items.forEach((item) => {
            const card = item.querySelector<HTMLElement>('.timeline-card')
            const badge = item.querySelector<HTMLElement>('.timeline-badge')
            if (!card) return

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse',
                },
            })

            tl.fromTo(
                card,
                { autoAlpha: 0, y: 48 },
                { autoAlpha: 1, y: 0, duration: 0.72, ease: 'power3.out', immediateRender: false },
            )

            if (badge) {
                tl.fromTo(
                    badge,
                    { autoAlpha: 0, scale: 0.45 },
                    { autoAlpha: 1, scale: 1, duration: 0.42, ease: 'back.out(1.65)', immediateRender: false },
                    '-=0.52',
                )
            }

            const trig = tl.scrollTrigger
            if (trig) registered.push(trig)
        })

        // Reveal steps already in view (common on static hosts / short viewports)
        requestAnimationFrame(() => {
            ScrollTrigger.refresh()
            items.forEach((item) => {
                const rect = item.getBoundingClientRect()
                if (rect.top < window.innerHeight * 0.92) {
                    const card = item.querySelector<HTMLElement>('.timeline-card')
                    const badge = item.querySelector<HTMLElement>('.timeline-badge')
                    if (card) gsap.set(card, { autoAlpha: 1, y: 0 })
                    if (badge) gsap.set(badge, { autoAlpha: 1, scale: 1 })
                }
            })
        })
    } else {
        revealAllTimelineItems(root)
    }

    disposeTimelineSpine = () => {
        window.removeEventListener('resize', onResize)
        clearTimeout(resizeT)
        spineTween?.scrollTrigger?.kill()
        spineTween?.kill()
    }

    timelineTriggers.value = registered
})

onUnmounted(() => {
    if (!import.meta.client) return
    disposeTimelineSpine?.()
    disposeTimelineSpine = null
    timelineTriggers.value.forEach((t) => {
        if (t && typeof (t as { kill?: () => void }).kill === 'function') {
            ; (t as { kill: () => void }).kill()
        }
    })
    timelineTriggers.value = []
})
</script>

<template>
    <section id="how-it-works"
        class="relative overflow-hidden bg-gradient-to-b from-slate-50 via-[#f4f7fc] to-[#eef3fb] section-py"
        aria-labelledby="how-it-works-heading">

        <div class="container-page relative">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                <div class="relative lg:col-span-4 xl:col-span-5 justify-center align-center">
                    <div aria-hidden="true"
                        class="pointer-events-none absolute -left-2 -top-4 hidden h-20 w-24 opacity-50 sm:block lg:-left-6 lg:-top-6"
                        style="background-image: radial-gradient(#a5b4fc 1px, transparent 1px); background-size: 12px 12px;">
                    </div>

                    <CardHeader align="left" :badge="headerContent.badge" :title="headerContent.title"
                        :description="headerContent.description" :classes="headerContent.classes" />
                    <form @submit.prevent="onSubmitSignIn" novalidate v-motion :initial="{ opacity: 0, y: 14 }"
                        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 280 } }"
                        class="mt-8 max-w-md rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_44px_-22px_rgba(29,78,216,0.28)] ring-1 ring-slate-200/70 backdrop-blur sm:p-5"
                        aria-label="Quick sign-up to start learning">
                        <div class="space-y-3">
                            <div class="pt-4">
                                <label for="signin-name" class="sr-only">Full name</label>
                                <div :class="[
                                    'group flex items-center gap-3 rounded-xl border bg-white px-3.5 py-3 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200/70',
                                    formErrors.name ? 'border-rose-300' : 'border-slate-200',
                                ]">
                                    <svg class="h-4.5 w-4.5 shrink-0 text-slate-400 transition group-focus-within:text-blue-600"
                                        viewBox="0 0 24 24" fill="none" aria-hidden="true"
                                        style="width:18px;height:18px;">
                                        <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" stroke-width="1.6" />
                                        <path d="M4.5 19.5c1.2-3.6 4.2-5 7.5-5s6.3 1.4 7.5 5" stroke="currentColor"
                                            stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                    <input id="signin-name" v-model.trim="form.name" @input="onNameInput"
                                        @blur="onNameInput" type="text" autocomplete="name" required minlength="2"
                                        maxlength="50" pattern="^[A-Za-z][A-Za-z .'\-]{1,49}$"
                                        placeholder="Student's full name "
                                        class="w-full bg-transparent text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                        :aria-invalid="!!formErrors.name" aria-describedby="signin-name-error" />
                                </div>
                                <p v-if="formErrors.name" id="signin-name-error"
                                    class="mt-1.5 text-[12px] font-medium text-rose-600">
                                    {{ formErrors.name }}
                                </p>
                            </div>
                            <div class="pt-4">
                                <label for="signin-mobile" class="sr-only">Mobile number</label>
                                <div :class="[
                                    'group flex items-center gap-2 rounded-xl border bg-white pl-3.5 pr-3.5 py-3 transition focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200/70',
                                    formErrors.mobile ? 'border-rose-300' : 'border-slate-200',
                                ]">
                                    <svg class="h-4.5 w-4.5 shrink-0 text-slate-400 transition group-focus-within:text-blue-600"
                                        viewBox="0 0 24 24" fill="none" aria-hidden="true"
                                        style="width:18px;height:18px;">
                                        <rect x="7" y="3" width="10" height="18" rx="2.4" stroke="currentColor"
                                            stroke-width="1.6" />
                                        <path d="M10.5 18h3" stroke="currentColor" stroke-width="1.6"
                                            stroke-linecap="round" />
                                    </svg>
                                    <span class="select-none text-[13.5px] font-semibold text-slate-500">
                                        +91
                                    </span>
                                    <span aria-hidden="true" class="h-5 w-px bg-slate-200"></span>
                                    <input id="signin-mobile" :value="form.mobile" @input="onMobileInput"
                                        @keydown="onMobileKeydown" @paste="onMobilePaste" @drop="onMobileDrop"
                                        type="tel" inputmode="numeric" autocomplete="tel-national" required
                                        maxlength="10" pattern="[6-9][0-9]{9}" placeholder="9876543210"
                                        class="w-full bg-transparent text-[14px] tracking-wide text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                        :aria-invalid="!!formErrors.mobile" aria-describedby="signin-mobile-error" />
                                </div>
                                <p v-if="formErrors.mobile" id="signin-mobile-error"
                                    class="mt-1.5 text-[12px] font-medium text-rose-600">
                                    {{ formErrors.mobile }}
                                </p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button type="submit" :disabled="formSubmitting"
                                class="group inline-flex w-full items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-700 bg-[length:200%_100%] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_18px_40px_-14px_rgba(29,78,216,0.55)] ring-1 ring-white/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_50%] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:translate-y-0">
                                <span class="inline-flex items-center gap-2">
                                    <svg v-if="formSubmitting" class="h-4 w-4 animate-spin text-white/90"
                                        viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity="0.35"
                                            stroke-width="3" />
                                        <path d="M21 12a9 9 0 0 1-9 9" stroke="currentColor" stroke-width="3"
                                            stroke-linecap="round" />
                                    </svg>
                                    <span>{{ formSubmitting ? 'Submitting…' : "Let's get started" }}</span>
                                </span>
                                <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <p class="mt-2.5 text-[11.5px] leading-relaxed text-slate-500">
                                By continuing, you agree to receive a call from our counsellor about your
                                free demo class.
                            </p>
                            <p v-if="formSuccess" role="status"
                                class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                                <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Thanks! Our team will reach out shortly.
                            </p>
                        </div>
                    </form>
                    <SharedReviewerStrip class="mt-6" v-motion :initial="{ opacity: 0, y: 12 }"
                        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }" variant="avatars"
                        size="md" layout="row" audience="student">
                        <p class="text-sm text-slate-600">
                            <span class="font-bold text-slate-900">50,000+ students</span>
                            already learning
                        </p>
                    </SharedReviewerStrip>
                    <p class="journey-note mt-6 flex items-center justify-center gap-2 text-center text-[18px] font-semibold text-sky-500 sm:mt-7 sm:text-[20px]"
                        aria-hidden="true">
                        <span>You're just a few clicks away from your goals!</span>
                    </p>
                </div>
                <div class="relative lg:col-span-8 xl:col-span-7">
                    <div ref="timelineStoryEl" class="timeline-story relative">
                        <ol class="relative z-[3] space-y-5 sm:space-y-6" role="list">
                            <li v-for="(step, i) in steps" :key="step.no"
                                class="timeline-step relative flex items-stretch"
                                :class="i % 2 === 1 ? 'justify-end' : 'justify-start'">
                                <article class="timeline-card relative z-[1] w-[88%] sm:w-[86%] lg:w-[84%]">
                                    <div :class="[
                                        'timeline-card-surface group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-4 sm:gap-5 sm:p-5',
                                        i === 0
                                            ? 'timeline-card-surface--featured border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                                            : 'border-slate-200/80 bg-white shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)]',
                                    ]">
                                        <span v-if="step.highlight" aria-hidden="true"
                                            class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-white"></span>
                                        <span :class="[
                                            'timeline-card-icon relative grid h-12 w-12 shrink-0 place-items-center rounded-xl font-semibold sm:h-14 sm:w-14',
                                            i === 0
                                                ? 'bg-white/15 text-white ring-1 ring-white/25'
                                                : [accentClasses[step.accent].tile, accentClasses[step.accent].tile.replace('bg-', 'text-').replace('100', '700')],
                                        ]">
                                            {{ step.no }}
                                        </span>
                                        <div class="relative min-w-0 flex-1">
                                            <h3 :class="[
                                                'font-display text-[15.5px] font-bold transition-colors duration-300 sm:text-[17px]',
                                                i === 0
                                                    ? 'text-white'
                                                    : step.highlight
                                                        ? 'text-slate-900 group-hover:text-emerald-700'
                                                        : 'text-slate-900 group-hover:text-blue-700',
                                            ]">
                                                {{ step.title }}
                                            </h3>
                                            <p :class="[
                                                'mt-1 text-[13px] leading-relaxed sm:text-[13.5px]',
                                                i === 0 ? 'text-blue-100' : 'text-slate-500',
                                            ]">
                                                {{ step.description }}
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Hand-drawn dashed connector toward the next zigzag step -->
                                    <div v-if="i < steps.length - 1" aria-hidden="true" :class="[
                                        'pointer-events-none absolute -bottom-5 z-[2] text-sky-500 sm:-bottom-6',
                                        i % 2 === 0 ? 'right-3 sm:right-6' : 'left-3 sm:left-6',
                                    ]">
                                        <svg v-if="i % 2 === 0" class="h-6 w-14 sm:h-7 sm:w-16" viewBox="0 0 64 28"
                                            fill="none">
                                            <path d="M4 4c10 2 22 8 34 14 8 4 16 7 24 8" stroke="currentColor"
                                                stroke-width="1.7" stroke-linecap="round" stroke-dasharray="3 3.2" />
                                            <path d="M52 18l10 8-9 1.5" stroke="currentColor" stroke-width="1.7"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <svg v-else class="h-6 w-14 sm:h-7 sm:w-16" viewBox="0 0 64 28" fill="none">
                                            <path d="M60 4c-10 2-22 8-34 14-8 4-16 7-24 8" stroke="currentColor"
                                                stroke-width="1.7" stroke-linecap="round" stroke-dasharray="3 3.2" />
                                            <path d="M12 18L2 26l9 1.5" stroke="currentColor" stroke-width="1.7"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </article>
                            </li>
                        </ol>


                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.journey-note {
    font-family: 'Caveat', 'Plus Jakarta Sans', cursive;
    letter-spacing: 0.01em;
}

/* Always visible by default — scroll animation is GSAP-only (safe on S3 if GSAP fails) */
.timeline-story .timeline-card,
.timeline-story .timeline-badge {
    opacity: 1;
}

/* Buttery hover on step cards (inner surface — GSAP animates outer .timeline-card) */
.timeline-card-surface {
    transition:
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.35s ease;
}

.timeline-card-surface::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.85) 0%,
            rgba(255, 255, 255, 0.15) 42%,
            transparent 70%);
    opacity: 0;
    transition: opacity 0.45s ease;
    pointer-events: none;
}

.timeline-card-surface::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    border-radius: 1rem 1rem 0 0;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.45), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.timeline-card-surface:hover {
    transform: translateY(-6px);
    border-color: rgb(191 219 254);
    box-shadow:
        0 4px 12px -2px rgba(15, 23, 42, 0.08),
        0 22px 48px -16px rgba(37, 99, 235, 0.28);
}

.timeline-card-surface:hover::before,
.timeline-card-surface:hover::after {
    opacity: 1;
}

.timeline-card-surface--highlight:hover {
    border-color: rgb(110 231 183);
    box-shadow:
        0 4px 12px -2px rgba(15, 23, 42, 0.06),
        0 22px 48px -16px rgba(16, 185, 129, 0.35);
}

.timeline-card-surface--highlight:hover::after {
    background: linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.55), transparent);
}

.timeline-card-surface--featured:hover {
    border-color: rgba(147, 197, 253, 0.55);
    box-shadow:
        0 4px 12px -2px rgba(15, 23, 42, 0.12),
        0 24px 48px -14px rgba(37, 99, 235, 0.5);
}

.timeline-card-surface--featured::before {
    background: linear-gradient(135deg,
            rgba(255, 255, 255, 0.22) 0%,
            rgba(255, 255, 255, 0.06) 42%,
            transparent 70%);
}

.timeline-card-surface--featured::after {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
}

.timeline-card-icon {
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-card-surface:hover .timeline-card-icon {
    transform: scale(1.08);
}

@media (prefers-reduced-motion: reduce) {

    .timeline-card-surface,
    .timeline-card-icon {
        transition: none;
    }

    .timeline-card-surface:hover {
        transform: none;
    }

    .timeline-card-surface:hover .timeline-card-icon {
        transform: none;
    }
}
</style>
