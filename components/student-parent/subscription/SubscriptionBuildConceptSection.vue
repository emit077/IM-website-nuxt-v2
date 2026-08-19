<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import SharedReviewerStrip from '~/components/shared/ReviewerStrip.vue'
import { subConcept } from '~/data/subscription'

type Accent = (typeof subConcept.steps)[number]['accent']

const accentClasses: Record<Accent, { tile: string; text: string }> = {
  blue: { tile: 'bg-blue-100', text: 'text-blue-700' },
  sky: { tile: 'bg-sky-100', text: 'text-sky-700' },
  emerald: { tile: 'bg-emerald-100', text: 'text-emerald-700' },
}

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
    'ArrowUp',
    'ArrowDown',
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
</script>

<template>
  <section id="how-it-works"
    class="relative scroll-mt-36 overflow-hidden bg-gradient-to-b from-slate-50 via-[#f4f7fc] to-[#eef3fb] section-py lg:scroll-mt-44"
    aria-labelledby="sub-concept-heading">
    <div class="container-page relative">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div class="relative lg:col-span-4 xl:col-span-5">
          <div aria-hidden="true"
            class="pointer-events-none absolute -left-2 -top-4 hidden h-20 w-24 opacity-50 sm:block lg:-left-6 lg:-top-6"
            style="background-image: radial-gradient(#a5b4fc 1px, transparent 1px); background-size: 12px 12px;" />

          <CardHeader align="left" heading-id="sub-concept-heading" :badge="subConcept.badge" :title="subConcept.title"
            :description="subConcept.description" :classes="subConcept.classes" />


          <SharedReviewerStrip class="mt-6" variant="avatars" size="md" layout="row" audience="student" v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
            <p class="text-sm text-slate-600">
              <span class="font-bold text-slate-900">{{ subConcept.socialProof }}</span>
              already learning
            </p>
          </SharedReviewerStrip>

          <p class="journey-note mt-6 flex items-center justify-center gap-2 text-center text-[18px] font-semibold text-sky-500 sm:mt-7 sm:justify-start sm:text-left sm:text-[20px]"
            aria-hidden="true">
            <span>{{ subConcept.tagline }}</span>
          </p>
        </div>

        <div class="relative lg:col-span-8 xl:col-span-7">
          <ol class="relative z-[3] space-y-5 sm:space-y-6" role="list">
            <li v-for="(step, i) in subConcept.steps" :key="step.no" class="relative flex items-stretch"
              :class="i % 2 === 1 ? 'justify-end' : 'justify-start'" v-motion :initial="{ opacity: 0, y: 28 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 90, duration: 520 } }">
              <article class="timeline-card relative z-[1] w-[96%] sm:w-[94%] lg:w-[92%]">
                <div :class="[
                  'timeline-card-surface group relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border p-4 sm:gap-4 sm:p-5',
                  i === 0
                    ? 'timeline-card-surface--featured border-blue-500/30 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]'
                    : 'border-slate-200/80 bg-white shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)]',
                ]">
                  <span :class="[
                    'timeline-card-icon relative grid h-12 w-12 shrink-0 place-items-center rounded-xl font-semibold sm:h-14 sm:w-14',
                    i === 0
                      ? 'bg-white/15 text-white ring-1 ring-white/25'
                      : [accentClasses[step.accent].tile, accentClasses[step.accent].text],
                  ]">
                    {{ step.no }}
                  </span>
                  <div class="relative min-w-0 flex-1">
                    <p :class="[
                      'text-[11px] font-bold uppercase tracking-[0.16em]',
                      i === 0 ? 'text-blue-100' : 'text-blue-600',
                    ]">
                      Step {{ step.no }}
                    </p>
                    <h3 :class="[
                      'mt-1 font-display text-[15.5px] font-bold transition-colors duration-300 sm:text-[17px]',
                      i === 0 ? 'text-white' : 'text-slate-900 group-hover:text-blue-700',
                    ]">
                      {{ step.title }}
                    </h3>
                    <p :class="[
                      'mt-1 text-[13px] font-semibold',
                      i === 0 ? 'text-blue-50' : 'text-slate-700',
                    ]">
                      {{ step.summary }}
                    </p>
                    <p :class="[
                      'mt-1.5 text-[13px] leading-snug sm:text-[13.5px] lg:whitespace-nowrap',
                      i === 0 ? 'text-blue-100' : 'text-slate-500',
                    ]">
                      {{ step.description }}
                    </p>
                  </div>
                </div>

                <div v-if="i < subConcept.steps.length - 1" aria-hidden="true" :class="[
                  'pointer-events-none absolute -bottom-5 z-[2] text-sky-500 sm:-bottom-6',
                  i % 2 === 0 ? 'right-3 sm:right-6' : 'left-3 sm:left-6',
                ]">
                  <svg v-if="i % 2 === 0" class="h-6 w-14 sm:h-7 sm:w-16" viewBox="0 0 64 28" fill="none">
                    <path d="M4 4c10 2 22 8 34 14 8 4 16 7 24 8" stroke="currentColor" stroke-width="1.7"
                      stroke-linecap="round" stroke-dasharray="3 3.2" />
                    <path d="M52 18l10 8-9 1.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  <svg v-else class="h-6 w-14 sm:h-7 sm:w-16" viewBox="0 0 64 28" fill="none">
                    <path d="M60 4c-10 2-22 8-34 14-8 4-16 7-24 8" stroke="currentColor" stroke-width="1.7"
                      stroke-linecap="round" stroke-dasharray="3 3.2" />
                    <path d="M12 18L2 26l9 1.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </article>
            </li>
          </ol>
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
