<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, useId } from 'vue'
import CardHeader from './ui/cardheader.vue'
type Step = {
    no: string
    title: string
    description: string
    iconType: 'register' | 'match' | 'demo' | 'plan' | 'learn'
    accent: 'violet' | 'blue' | 'emerald' | 'orange' | 'purple'
    /** True for the highlighted "Recommended Step" card */
    highlight?: boolean
    /** Card width modifier — first step is intentionally smaller in the reference */
    width?: 'sm' | 'md'
}

const steps: Step[] = [
    {
        no: '01',
        title: 'Register Online',
        description: 'Fill out the quick enrollment form and share your details.',
        iconType: 'register',
        accent: 'violet',
        width: 'sm',
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
        highlight: true,
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

const features = [
    {
        title: '100% Safe',
        copy: 'Background verified tutors',
        iconType: 'shield' as const,
        tone: 'bg-blue-50 text-blue-600',
    },
    {
        title: 'Top Quality',
        copy: 'Experts in 250+ subjects',
        iconType: 'star' as const,
        tone: 'bg-violet-50 text-violet-600',
    },
    {
        title: '24/7 Support',
        copy: "We're here for you always",
        iconType: 'clock' as const,
        tone: 'bg-emerald-50 text-emerald-600',
    },
]

const reviewerAvatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
]

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
        class="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8ff] to-[#eaeefc] py-14 sm:py-20 lg:py-24"
        aria-labelledby="how-it-works-heading">
        <!-- Soft mesh blobs -->
        <div aria-hidden="true"
            class="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl">
        </div>
        <div aria-hidden="true"
            class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl">
        </div>

        <div class="container-page relative">
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                <!-- ============================== LEFT ============================== -->
                <div class="relative lg:col-span-5 xl:col-span-5">
                    <!-- Dot grid (top-left) -->
                    <div aria-hidden="true"
                        class="pointer-events-none absolute -left-2 -top-4 hidden h-20 w-24 opacity-50 sm:block lg:-left-6 lg:-top-6"
                        style="background-image: radial-gradient(#a5b4fc 1px, transparent 1px); background-size: 12px 12px;">
                    </div>

                    <CardHeader class="" variant="variant-1" badge="How it works" title=" <span> Start Learning in </span>
                        <br class='hidden sm:block' />
                        <span class='text-gradient-brand pt-2'>5 Simple Steps</span>" description=" From registration to your first session — simple, transparent,
                        and completely risk-free." />
                    <!-- sign in form -->
                    <form @submit.prevent="onSubmitSignIn" novalidate v-motion :initial="{ opacity: 0, y: 14 }"
                        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 280 } }"
                        class="mt-2 max-w-md rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_44px_-22px_rgba(29,78,216,0.28)] ring-1 ring-slate-200/70 backdrop-blur sm:p-5"
                        aria-label="Quick sign-up to start learning">
                        <div class="space-y-3">
                            <!-- Name -->
                            <div>
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
                                        @blur="onNameInput" type="text" autocomplete="name" required
                                        minlength="2" maxlength="50"
                                        pattern="^[A-Za-z][A-Za-z .'\-]{1,49}$"
                                        placeholder="Your full name"
                                        class="w-full bg-transparent text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                        :aria-invalid="!!formErrors.name" aria-describedby="signin-name-error" />
                                </div>
                                <p v-if="formErrors.name" id="signin-name-error"
                                    class="mt-1.5 text-[12px] font-medium text-rose-600">
                                    {{ formErrors.name }}
                                </p>
                            </div>

                            <!-- Mobile -->
                            <div>
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
                                        @keydown="onMobileKeydown" @paste="onMobilePaste"
                                        @drop="onMobileDrop" type="tel" inputmode="numeric"
                                        autocomplete="tel-national" required maxlength="10"
                                        pattern="[6-9][0-9]{9}" placeholder="9876543210"
                                        class="w-full bg-transparent text-[14px] tracking-wide text-slate-900 placeholder:text-slate-400 focus:outline-none"
                                        :aria-invalid="!!formErrors.mobile"
                                        aria-describedby="signin-mobile-error" />
                                </div>
                                <p v-if="formErrors.mobile" id="signin-mobile-error"
                                    class="mt-1.5 text-[12px] font-medium text-rose-600">
                                    {{ formErrors.mobile }}
                                </p>
                            </div>
                        </div>

                        <!-- Submit (CTA) -->
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

                    <!-- Social proof -->
                    <div class="mt-6 flex items-center gap-3" v-motion :initial="{ opacity: 0, y: 12 }"
                        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                        <div class="flex -space-x-2">
                            <img v-for="(a, i) in reviewerAvatars" :key="`avatar-${i}`" :src="a"
                                :alt="`Student ${i + 1}`"
                                class="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                                loading="lazy" />
                        </div>
                        <p class="text-sm text-slate-600">
                            <span class="font-bold text-slate-900">50,000+ students</span>
                            already learning
                        </p>
                    </div>
                </div>

                <!-- ============================== RIGHT ============================== -->
                <div class="relative lg:col-span-7 xl:col-span-7">
                    <!-- Decorative sparkles around the steps -->
                    <svg aria-hidden="true"
                        class="pointer-events-none absolute -top-3 right-1 hidden h-5 w-5 text-pink-400/80 sm:block"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2zm6.5 12 .8 2.4L21.5 17l-2 .7L18.5 20l-1-2.3-2-.7 2-.6.8-2.4z" />
                    </svg>
                    <svg aria-hidden="true"
                        class="pointer-events-none absolute right-2 top-[42%] hidden h-3 w-3 text-blue-300 sm:block"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
                    </svg>
                    <svg aria-hidden="true"
                        class="pointer-events-none absolute right-6 top-[64%] hidden h-3 w-3 text-orange-300 sm:block"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
                    </svg>
                    <svg aria-hidden="true"
                        class="pointer-events-none absolute -bottom-2 right-12 hidden h-4 w-4 text-pink-300 sm:block"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
                    </svg>

                    <!-- Curly arrow accent (between step 1 and step 2) -->
                    <svg aria-hidden="true"
                        class="pointer-events-none absolute left-[calc(50%-30px)] top-[110px] hidden h-12 w-12 text-violet-400/80 lg:block"
                        viewBox="0 0 60 60" fill="none">
                        <path d="M6 6c8 4 14 12 12 22-1.4 7-7 12-14 14" stroke="currentColor" stroke-width="1.6"
                            stroke-linecap="round" stroke-dasharray="3 4" />
                        <path d="M2 38l4 6 6-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <!-- Steps (GSAP ScrollTrigger timeline story) -->
                    <div ref="timelineStoryEl" class="timeline-story relative">
                        <!-- Single spine connecting badge 01 → 05 (path set in client via GSAP layout) -->
                        <svg ref="spineSvgRef"
                            class="pointer-events-none absolute inset-0 z-[2] block h-full w-full overflow-visible"
                            aria-hidden="true">
                            <defs>
                                <linearGradient :id="spineGradId" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#a78bfa" />
                                    <stop offset="52%" stop-color="#6366f1" />
                                    <stop offset="100%" stop-color="#2563eb" />
                                </linearGradient>
                            </defs>
                            <path ref="spineTrackRef" fill="none" stroke="#e2e8f0" stroke-width="2.75"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path ref="spineDrawRef" fill="none" :stroke="`url(#${spineGradId})`" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <ol class="relative z-[3] space-y-7 sm:space-y-8" role="list">
                            <li v-for="(step, i) in steps" :key="step.no" :class="[
                                'timeline-step relative flex items-stretch gap-3 sm:gap-4',
                                step.width === 'sm' ? 'lg:pr-[14%]' : '',
                                i === 1 ? 'lg:pl-6' : '',
                                i === 3 ? 'lg:pl-4' : '',
                            ]">
                                <!-- Number badge -->
                                <div class="timeline-badge relative z-10 shrink-0 self-start pt-1.5">
                                    <span :class="[
                                        'grid h-9 w-9 place-items-center rounded-full text-[12px] font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(15,23,42,0.25)] ring-[3px] ring-white sm:h-11 sm:w-11 sm:text-[13px]',
                                        accentClasses[step.accent].badge,
                                    ]">
                                        {{ step.no }}
                                    </span>
                                </div>

                                <!-- Card -->
                                <article :class="[
                                    'timeline-card relative z-[1] flex w-full items-start gap-4 rounded-2xl border bg-white p-4 transition-all duration-300 sm:gap-5 sm:p-5',
                                    step.highlight
                                        ? 'border-emerald-300 ring-2 ring-emerald-200/70 shadow-[0_18px_44px_-20px_rgba(16,185,129,0.55)]'
                                        : 'border-slate-200/80 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_36px_-18px_rgba(37,99,235,0.32)]',
                                ]">
                                    <!-- Soft inner highlight when recommended -->
                                    <span v-if="step.highlight" aria-hidden="true"
                                        class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-white"></span>

                                    <!-- Icon tile -->
                                    <span :class="[
                                        'relative grid h-12 w-12 shrink-0 place-items-center rounded-xl sm:h-14 sm:w-14',
                                        accentClasses[step.accent].tile,
                                    ]">
                                        <!-- 01 register: form / clipboard -->
                                        <svg v-if="step.iconType === 'register'"
                                            :class="['h-6 w-6 sm:h-7 sm:w-7', accentClasses[step.accent].icon]"
                                            viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path
                                                d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z"
                                                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                                            <path d="M14 3.5V8h4" stroke="currentColor" stroke-width="1.6"
                                                stroke-linejoin="round" />
                                            <path d="M8.5 12.5h7M8.5 16h5" stroke="currentColor" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                        <!-- 02 match: people -->
                                        <svg v-else-if="step.iconType === 'match'"
                                            :class="['h-6 w-6 sm:h-7 sm:w-7', accentClasses[step.accent].icon]"
                                            viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <circle cx="9" cy="9" r="3.2" stroke="currentColor" stroke-width="1.6" />
                                            <path
                                                d="M3.5 19c.6-3 3-4.5 5.5-4.5s4.9 1.5 5.5 4.5M16.5 14.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2zM20.5 19c-.5-2.4-2.2-3.6-4-3.8"
                                                stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <!-- 03 demo: calendar w/ check -->
                                        <svg v-else-if="step.iconType === 'demo'"
                                            :class="['h-6 w-6 sm:h-7 sm:w-7', accentClasses[step.accent].icon]"
                                            viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <rect x="4" y="5.5" width="16" height="14" rx="2" stroke="currentColor"
                                                stroke-width="1.6" />
                                            <path d="M4 10h16M9 3.5v4M15 3.5v4" stroke="currentColor" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="m9 14.5 2 2 4-4" stroke="currentColor" stroke-width="1.7"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <!-- 04 plan: document -->
                                        <svg v-else-if="step.iconType === 'plan'"
                                            :class="['h-6 w-6 sm:h-7 sm:w-7', accentClasses[step.accent].icon]"
                                            viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path
                                                d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z"
                                                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                                            <path d="M14 3.5V8h4M8.5 12.5h7M8.5 16h7M8.5 9h3" stroke="currentColor"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <!-- 05 learn: open book -->
                                        <svg v-else :class="['h-6 w-6 sm:h-7 sm:w-7', accentClasses[step.accent].icon]"
                                            viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path
                                                d="M3.5 5.5c2.5-.5 5-.5 8.5 1.2 3.5-1.7 6-1.7 8.5-1.2v12c-2.5-.5-5-.5-8.5 1.2-3.5-1.7-6-1.7-8.5-1.2v-12z"
                                                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                                            <path d="M12 6.7v12" stroke="currentColor" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </span>

                                    <!-- Body -->
                                    <div class="relative min-w-0 flex-1">
                                        <h3 class="font-display text-[15.5px] font-bold text-slate-900 sm:text-[17px]">
                                            {{ step.title }}
                                        </h3>
                                        <p class="mt-1 text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                                            {{ step.description }}
                                        </p>

                                        <span v-if="step.highlight"
                                            class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                                            <svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
                                            </svg>
                                            Recommended Step
                                        </span>
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
/* Always visible by default — scroll animation is GSAP-only (safe on S3 if GSAP fails) */
.timeline-story .timeline-card,
.timeline-story .timeline-badge {
    opacity: 1;
}
</style>
