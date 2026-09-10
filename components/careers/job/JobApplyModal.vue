<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { jobFilterOptions, jobPageCtas } from '~/data/careers'
import { flattenSerializerErrors, useCareerApply } from '~/composables/useCareerContent'
import type { CareerApplicationResult, CareerApplicationType, CareerApplyPayload } from '~/types/career-api'

const props = defineProps<{
  slug: string
  position: string
  applicationType: CareerApplicationType
  isOpen: boolean
}>()

const open = defineModel<boolean>({ default: false })

const toast = useToast()
const { submitApplication } = useCareerApply()

const submitting = ref(false)
const submitted = ref<CareerApplicationResult | null>(null)
const formError = ref('')
const resumeInput = ref<HTMLInputElement | null>(null)

const form = reactive({
  full_name: '',
  email: '',
  mobile: '',
  current_location: '',
  resume: null as File | null,
  cover_note: '',
  preferred_employment_type: '',
  preferred_work_model: '',
  years_of_experience: '',
})

const errors = reactive<Record<string, string>>({})

const heading = computed(() =>
  props.applicationType === 'Submit Resume' ? jobPageCtas.resumeLabel : jobPageCtas.applyLabel,
)

const fieldClass =
  'w-full rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200'

function inputClass(key: string) {
  return [fieldClass, errors[key] ? 'ring-2 ring-rose-300' : '']
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidMobile(value: string) {
  return /^[6-9]\d{9}$/.test(value.replace(/\D/g, ''))
}

function isAllowedResume(file: File) {
  const name = file.name.toLowerCase()
  return name.endsWith('.pdf') || name.endsWith('.doc') || name.endsWith('.docx')
}

function clearFieldError(key: string) {
  errors[key] = ''
}

function resetForm() {
  form.full_name = ''
  form.email = ''
  form.mobile = ''
  form.current_location = ''
  form.resume = null
  form.cover_note = ''
  form.preferred_employment_type = ''
  form.preferred_work_model = ''
  form.years_of_experience = ''
  formError.value = ''
  submitted.value = null
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
  if (resumeInput.value) resumeInput.value.value = ''
}

function onResumeChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] ?? null
  form.resume = file
  errors.resume = ''
}

function validate() {
  errors.full_name = form.full_name.trim().length < 2 ? 'Enter your full name.' : ''
  errors.email = isValidEmail(form.email) ? '' : 'Enter a valid email.'
  errors.mobile = isValidMobile(form.mobile) ? '' : 'Enter a 10-digit Indian mobile number.'
  errors.resume = !form.resume
    ? 'Upload your resume (PDF, DOC, or DOCX).'
    : isAllowedResume(form.resume)
      ? ''
      : 'Resume must be a PDF, DOC, or DOCX file.'

  return !errors.full_name && !errors.email && !errors.mobile && !errors.resume
}

function close() {
  open.value = false
}

async function onSubmit() {
  formError.value = ''

  if (!props.isOpen) {
    formError.value = 'This job opening is no longer accepting applications'
    toast.error(formError.value, { title: 'Applications closed' })
    return
  }

  if (!validate() || !form.resume) {
    toast.error('Please complete the required fields.', { title: 'Missing details' })
    return
  }

  submitting.value = true
  const result = await submitApplication(props.slug, {
    application_type: props.applicationType,
    full_name: form.full_name.trim(),
    email: form.email.trim(),
    mobile: form.mobile.replace(/\D/g, ''),
    current_location: form.current_location.trim(),
    resume: form.resume,
    cover_note: form.cover_note.trim(),
    preferred_employment_type: form.preferred_employment_type as CareerApplyPayload['preferred_employment_type'],
    preferred_work_model: form.preferred_work_model as CareerApplyPayload['preferred_work_model'],
    years_of_experience: form.years_of_experience.trim(),
  })
  submitting.value = false

  if (!result.success) {
    const fieldErrors = flattenSerializerErrors(result.errors)
    Object.keys(errors).forEach((key) => {
      errors[key] = ''
    })
    Object.assign(errors, fieldErrors)
    formError.value = result.message || 'Unable to submit this application.'
    toast.error(formError.value, { title: 'Application not sent' })
    return
  }

  submitted.value = result.data
  toast.success(`Application ${result.data.application_id} submitted.`, { title: 'Application received' })
}

watch(open, (isOpen) => {
  if (isOpen) {
    submitted.value = null
    formError.value = ''
  } else {
    resetForm()
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 p-4 sm:items-center"
        role="presentation"
        @click.self="close"
      >
        <div
          class="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`career-apply-heading-${applicationType}`"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                {{ applicationType }}
              </p>
              <h2
                :id="`career-apply-heading-${applicationType}`"
                class="font-display mt-1 text-xl font-bold text-slate-900"
              >
                {{ heading }}
              </h2>
              <p class="mt-1 text-sm text-slate-600">{{ position }}</p>
            </div>
            <button
              type="button"
              class="grid h-9 w-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close application form"
              @click="close"
            >
              <Icon icon="mdi:close" class="h-5 w-5" />
            </button>
          </div>

          <div v-if="submitted" class="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-6 text-center">
            <p class="font-display text-lg font-bold text-slate-900">Application submitted</p>
            <p class="mt-2 text-sm text-slate-600">
              Your application ID is
              <span class="font-semibold text-slate-900">{{ submitted.application_id }}</span>.
            </p>
            <p class="mt-1 text-sm text-slate-500">Status: {{ submitted.status }}</p>
            <button
              type="button"
              class="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
              @click="close"
            >
              Close
            </button>
          </div>

          <form v-else class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2" novalidate @submit.prevent="onSubmit">
            <p v-if="formError" class="sm:col-span-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {{ formError }}
            </p>

            <div class="sm:col-span-2">
              <label for="career-full-name" class="mb-1.5 block text-xs text-slate-400">Full name</label>
              <input
                id="career-full-name"
                v-model="form.full_name"
                type="text"
                autocomplete="name"
                placeholder="Your full name"
                :class="inputClass('full_name')"
                @input="clearFieldError('full_name')"
              />
              <p v-if="errors.full_name" class="mt-1 text-xs text-rose-600">{{ errors.full_name }}</p>
            </div>

            <div>
              <label for="career-email" class="mb-1.5 block text-xs text-slate-400">Email</label>
              <input
                id="career-email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="name@email.com"
                :class="inputClass('email')"
                @input="clearFieldError('email')"
              />
              <p v-if="errors.email" class="mt-1 text-xs text-rose-600">{{ errors.email }}</p>
            </div>

            <div>
              <label for="career-mobile" class="mb-1.5 block text-xs text-slate-400">Mobile</label>
              <input
                id="career-mobile"
                v-model="form.mobile"
                type="tel"
                inputmode="numeric"
                autocomplete="tel"
                maxlength="10"
                placeholder="10-digit mobile"
                :class="inputClass('mobile')"
                @input="clearFieldError('mobile')"
              />
              <p v-if="errors.mobile" class="mt-1 text-xs text-rose-600">{{ errors.mobile }}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="career-location" class="mb-1.5 block text-xs text-slate-400">Current location</label>
              <input
                id="career-location"
                v-model="form.current_location"
                type="text"
                autocomplete="address-level2"
                placeholder="City, state"
                :class="inputClass('current_location')"
                @input="clearFieldError('current_location')"
              />
              <p v-if="errors.current_location" class="mt-1 text-xs text-rose-600">{{ errors.current_location }}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="career-resume" class="mb-1.5 block text-xs text-slate-400">Resume (PDF, DOC, DOCX)</label>
              <input
                id="career-resume"
                ref="resumeInput"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                class="w-full rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 file:mr-3 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-700"
                :class="errors.resume ? 'ring-2 ring-rose-300' : ''"
                @change="onResumeChange"
              />
              <p v-if="errors.resume" class="mt-1 text-xs text-rose-600">{{ errors.resume }}</p>
            </div>

            <div>
              <label for="career-employment" class="mb-1.5 block text-xs text-slate-400">Preferred employment type</label>
              <select id="career-employment" v-model="form.preferred_employment_type" :class="inputClass('preferred_employment_type')">
                <option value="">Select…</option>
                <option v-for="option in jobFilterOptions.employment.slice(1)" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <p v-if="errors.preferred_employment_type" class="mt-1 text-xs text-rose-600">{{ errors.preferred_employment_type }}</p>
            </div>

            <div>
              <label for="career-work-model" class="mb-1.5 block text-xs text-slate-400">Preferred work model</label>
              <select id="career-work-model" v-model="form.preferred_work_model" :class="inputClass('preferred_work_model')">
                <option value="">Select…</option>
                <option v-for="option in jobFilterOptions.workMode.slice(1)" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <p v-if="errors.preferred_work_model" class="mt-1 text-xs text-rose-600">{{ errors.preferred_work_model }}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="career-experience" class="mb-1.5 block text-xs text-slate-400">Years of experience</label>
              <input
                id="career-experience"
                v-model="form.years_of_experience"
                type="text"
                placeholder="e.g. 2"
                :class="inputClass('years_of_experience')"
                @input="clearFieldError('years_of_experience')"
              />
              <p v-if="errors.years_of_experience" class="mt-1 text-xs text-rose-600">{{ errors.years_of_experience }}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="career-cover" class="mb-1.5 block text-xs text-slate-400">Cover note</label>
              <textarea
                id="career-cover"
                v-model="form.cover_note"
                rows="3"
                placeholder="Optional note for the hiring team"
                :class="[...inputClass('cover_note'), 'resize-none']"
                @input="clearFieldError('cover_note')"
              />
              <p v-if="errors.cover_note" class="mt-1 text-xs text-rose-600">{{ errors.cover_note }}</p>
            </div>

            <div class="sm:col-span-2 flex justify-end gap-2 pt-1">
              <button
                type="button"
                class="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400"
                @click="close"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="submitting || !isOpen"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
              >
                <Icon :icon="submitting ? 'mdi:loading' : 'mdi:send-outline'" :class="['h-4 w-4', submitting && 'animate-spin']" />
                {{ submitting ? 'Submitting…' : heading }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
