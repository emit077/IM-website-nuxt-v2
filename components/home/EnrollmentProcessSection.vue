<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SharedReviewerStrip from '~/components/shared/ReviewerStrip.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import {
  enrollmentProcessSection,
  enrollmentSteps,
  enrollmentTrustPoints,
} from '~/data/student-parent'

type Accent = (typeof enrollmentSteps)[number]['accent']

const accentMap: Record<
  Accent,
  { badge: string; iconWrap: string; icon: string; bar: string; glow: string }
> = {
  violet: {
    badge: 'bg-violet-600',
    iconWrap: 'bg-violet-100',
    icon: 'text-violet-600',
    bar: 'bg-violet-500',
    glow: '',
  },
  blue: {
    badge: 'bg-blue-600',
    iconWrap: 'bg-blue-100',
    icon: 'text-blue-600',
    bar: 'bg-blue-500',
    glow: '',
  },
  emerald: {
    badge: 'bg-emerald-500',
    iconWrap: 'bg-emerald-100',
    icon: 'text-emerald-600',
    bar: 'bg-emerald-500',
    glow: 'shadow-[0_18px_44px_-18px_rgba(16,185,129,0.55)] ring-2 ring-emerald-200/80',
  },
  orange: {
    badge: 'bg-orange-500',
    iconWrap: 'bg-orange-100',
    icon: 'text-orange-600',
    bar: 'bg-orange-500',
    glow: '',
  },
  fuchsia: {
    badge: 'bg-fuchsia-500',
    iconWrap: 'bg-fuchsia-100',
    icon: 'text-fuchsia-600',
    bar: 'bg-fuchsia-500',
    glow: '',
  },
}

const stepOne = computed(() => enrollmentSteps[0]!)
const remainingSteps = computed(() => enrollmentSteps.slice(1))

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
  if (!NAME_RE.test(v)) return "Use letters, spaces and . ' - only."
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

function onNameInput() {
  if (formErrors.value.name) {
    formErrors.value = { ...formErrors.value, name: validateName(form.value.name) }
  }
}

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
  ]
  if (allowed.includes(e.key)) return
  if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'z', 'y'].includes(e.key.toLowerCase())) return
  if (!/^\d$/.test(e.key)) e.preventDefault()
}

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
</script>

<template>
  <section id="how-it-works"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-[#f7f8ff] to-[#eef1fc] section-py"
    aria-labelledby="how-it-works-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="how-it-works-heading" :badge="enrollmentProcessSection.badge"
        :title="enrollmentProcessSection.title" :description="enrollmentProcessSection.description"
        :classes="`${enrollmentProcessSection.classes} mx-auto max-w-3xl`" />

      <div class="mt-10 space-y-4 sm:mt-12" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 560 } }">
        <!-- Step 01 + remaining steps -->
        <div class="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5">
          <article
            class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-200/80 bg-white p-5 shadow-[0_18px_44px_-22px_rgba(124,58,237,0.28)] sm:p-6 lg:col-span-5"
            aria-labelledby="enroll-step-one-title">
            <div class="flex items-start justify-between gap-3">
              <span :class="[
                'grid h-11 w-11 place-items-center rounded-xl',
                accentMap[stepOne.accent].iconWrap,
              ]">
                <Icon :icon="stepOne.iconMdi" :class="['h-5 w-5', accentMap[stepOne.accent].icon]" aria-hidden="true" />
              </span>
              <span :class="[
                'font-extrabold text-blue-200 text-6xl absolute top-0 right-0 p-2',
              ]">
                {{ stepOne.no }}
              </span>
            </div>

            <h3 id="enroll-step-one-title"
              class="font-display mt-3.5 text-xl font-extrabold tracking-tight text-slate-900">
              {{ stepOne.title }}
            </h3>
            <p class="mt-1.5 text-[13px] leading-relaxed text-slate-500">
              {{ stepOne.summary }}
            </p>

            <form class="mt-4 flex flex-1 flex-col rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4" novalidate
              aria-label="Quick sign-up to start learning" @submit.prevent="onSubmitSignIn">
              <h4 class="font-display text-[15px] font-bold text-slate-900">
                {{ enrollmentProcessSection.formTitle }}
              </h4>

              <div class="mt-3 space-y-3">
                <div>
                  <label for="enroll-name" class="sr-only">Student's full name</label>
                  <div :class="[
                    'group flex items-center gap-3 rounded-xl border bg-white px-3.5 py-3 transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-200/70',
                    formErrors.name ? 'border-rose-300' : 'border-slate-200',
                  ]">
                    <Icon icon="mdi:account-outline"
                      class="h-[18px] w-[18px] shrink-0 text-slate-400 transition group-focus-within:text-violet-600"
                      aria-hidden="true" />
                    <input id="enroll-name" v-model.trim="form.name" type="text" autocomplete="name" required
                      minlength="2" maxlength="50" placeholder="Student's full name"
                      class="w-full bg-transparent text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      :aria-invalid="!!formErrors.name" aria-describedby="enroll-name-error" @input="onNameInput"
                      @blur="onNameInput" />
                  </div>
                  <p v-if="formErrors.name" id="enroll-name-error" class="mt-1.5 text-[12px] font-medium text-rose-600">
                    {{ formErrors.name }}
                  </p>
                </div>

                <div>
                  <label for="enroll-mobile" class="sr-only">Mobile number</label>
                  <div :class="[
                    'group flex items-center gap-2 rounded-xl border bg-white px-3.5 py-3 transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-200/70',
                    formErrors.mobile ? 'border-rose-300' : 'border-slate-200',
                  ]">
                    <Icon icon="mdi:cellphone"
                      class="h-[18px] w-[18px] shrink-0 text-slate-400 transition group-focus-within:text-violet-600"
                      aria-hidden="true" />
                    <span class="select-none text-[13.5px] font-semibold text-slate-500">+91</span>
                    <span aria-hidden="true" class="h-5 w-px bg-slate-200" />
                    <input id="enroll-mobile" :value="form.mobile" type="tel" inputmode="numeric"
                      autocomplete="tel-national" required maxlength="10" placeholder="9876543210"
                      class="w-full bg-transparent text-[14px] tracking-wide text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      :aria-invalid="!!formErrors.mobile" aria-describedby="enroll-mobile-error" @input="onMobileInput"
                      @keydown="onMobileKeydown" @paste="onMobilePaste" />
                  </div>
                  <p v-if="formErrors.mobile" id="enroll-mobile-error"
                    class="mt-1.5 text-[12px] font-medium text-rose-600">
                    {{ formErrors.mobile }}
                  </p>
                </div>
              </div>


              <ActionBtn class="mt-4 !w-full" :class="formSubmitting ? 'pointer-events-none opacity-80' : ''"
                variant="primary" href="#how-it-works"
                :label="formSubmitting ? 'Submitting…' : enrollmentProcessSection.formCta" :show-arrow="!formSubmitting"
                @click.prevent="onSubmitSignIn" />

              <p class="mt-2.5 flex items-start gap-1.5 text-[11px] leading-relaxed text-slate-500">
                <Icon icon="mdi:check-circle" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
                {{ enrollmentProcessSection.formNote }}
              </p>

              <p v-if="formSuccess" role="status"
                class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <Icon icon="mdi:check" class="h-3.5 w-3.5" aria-hidden="true" />
                Thanks! Our team will reach out shortly.
              </p>
            </form>

            <SharedReviewerStrip class="mt-4" variant="avatars" size="md" layout="row" audience="student">
              <p class="text-sm text-slate-600">
                <span class="font-bold text-slate-900">{{ enrollmentProcessSection.socialProof }}</span>
              </p>
            </SharedReviewerStrip>
          </article>

          <ol class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:content-stretch" role="list"
            aria-label="Next steps">
            <li v-for="step in remainingSteps" :key="step.id" class="min-w-0">
              <article :class="[
                'flex h-full flex-col rounded-2xl',
                `border-slate-200/80 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.22)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(15,23,42,0.28)] ${accentMap[step.accent].bar}`,
              ]">
                <p class="text-white text-center text-xs font-bold uppercase p-1">Step-{{
                  step.no.toString().replace('0',
                    '') }}
                </p>
                <div
                  class="bg-white relative flex h-full flex-col rounded-2xl border bg-white p-4 transition duration-300 sm:p-5">
                  <div class="flex items-start justify-between gap-2">
                    <span :class="[
                      'grid h-11 w-11 place-items-center rounded-xl',
                      accentMap[step.accent].iconWrap,
                    ]">
                      <Icon :icon="step.iconMdi" :class="['h-5 w-5', accentMap[step.accent].icon]" aria-hidden="true" />
                    </span>

                  </div>

                  <h3 class="font-display mt-3.5 text-[15px] font-bold leading-snug text-slate-900">
                    {{ step.title }}
                  </h3>
                  <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                    {{ step.summary }}
                  </p>

                  <div v-if="step.highlight"
                    class="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/80 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-700">
                    <Icon icon="mdi:star-four-points" class="h-3.5 w-3.5" aria-hidden="true" />
                    Recommended Step
                  </div>
                  <span v-else aria-hidden="true" :class="['mt-4 h-1 w-8 rounded-full', accentMap[step.accent].bar]" />
                </div>
              </article>
            </li>
          </ol>
        </div>
      </div>

      <p class="journey-note mt-5 text-center text-[17px] font-semibold text-sky-600" aria-hidden="true">
        <svg class="mr-1 inline-block h-5 w-8 rotate-12 text-sky-500" viewBox="0 0 40 20" fill="none">
          <path d="M34 6c-8 8-18 10-30 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-dasharray="2.5 2.5" />
          <path d="M8 16L2 14l3-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        {{ enrollmentProcessSection.annotationBottom }}
      </p>

      <!-- Trust bar -->
      <div
        class="mt-10 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-5 shadow-soft backdrop-blur-sm sm:mt-12 sm:px-6"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 160 } }">
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2" role="list">
          <li v-for="point in enrollmentTrustPoints" :key="point.id" class="flex items-start gap-3 px-1 sm:px-2">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-100">
              <Icon :icon="point.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <div class="min-w-0">
              <p class="font-display text-[14px] font-bold text-slate-900">{{ point.title }}</p>
              <p class="mt-0.5 text-[12.5px] leading-snug text-slate-500">{{ point.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey-note {
  font-family: 'Caveat', 'Plus Jakarta Sans', cursive;
  letter-spacing: 0.01em;
}
</style>
