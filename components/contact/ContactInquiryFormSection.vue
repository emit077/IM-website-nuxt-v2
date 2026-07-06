<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { inquiryForm, whatsappSupport } from '~/data/contact'

const toast = useToast()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  interest: '',
  message: '',
})

const errors = reactive<Record<string, boolean>>({})
const submitting = ref(false)

function fieldClass(key: string) {
  return [
    'w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100',
    errors[key] ? 'border-rose-300 focus:border-rose-400' : 'border-slate-200 focus:border-blue-400',
  ]
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidPhone(value: string) {
  return value.replace(/\D/g, '').length >= 10
}

function validate() {
  errors.name = form.name.trim().length < 2
  errors.phone = !isValidPhone(form.phone)
  errors.email = form.email.trim().length > 0 && !isValidEmail(form.email)
  errors.message = form.message.trim().length < 5
  return !errors.name && !errors.phone && !errors.email && !errors.message
}

function buildMessage() {
  return [
    'New enquiry from Indian Mentors website',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email && `Email: ${form.email}`,
    form.interest && `Interested in: ${form.interest}`,
    `Message: ${form.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

function resetForm() {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.interest = ''
  form.message = ''
}

function onSubmit() {
  if (!validate()) {
    toast.error('Please add your name, phone, and a short message.', { title: 'Missing details' })
    return
  }
  submitting.value = true
  window.setTimeout(() => {
    submitting.value = false
    resetForm()
    toast.success('We will get back to you within 24–48 working hours.', { title: 'Enquiry received' })
  }, 500)
}

function onWhatsApp() {
  if (!validate()) {
    toast.error('Please add your name, phone, and a short message.', { title: 'Missing details' })
    return
  }
  const wa = whatsappSupport.numbers[0].wa
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(buildMessage())}`, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="inquiry" class="scroll-mt-24 border-b border-slate-200/70 bg-white py-12 sm:py-14"
    aria-labelledby="inquiry-heading">
    <div class="container-page">
      <div class="mx-auto max-w-xl">
        <CardHeader heading-id="inquiry-heading" content-class="!px-0 !py-0" :badge="inquiryForm.badge"
          title="Quick <span class='text-gradient-brand'>Enquiry Form</span>" :description="inquiryForm.description" />

        <form novalidate class="mt-6 rounded-2xl border border-slate-200/70 bg-cream-50 p-5 shadow-soft sm:p-6"
          @submit.prevent="onSubmit">
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label for="iq-name" class="mb-1 block text-xs font-semibold text-slate-600">Name *</label>
              <input id="iq-name" v-model="form.name" type="text" autocomplete="name" placeholder="Your name"
                :aria-invalid="errors.name" :class="fieldClass('name')" @input="errors.name = false" />
            </div>
            <div>
              <label for="iq-phone" class="mb-1 block text-xs font-semibold text-slate-600">Phone *</label>
              <input id="iq-phone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel"
                placeholder="+91 00000 00000" :aria-invalid="errors.phone" :class="fieldClass('phone')"
                @input="errors.phone = false" />
            </div>
            <div class="sm:col-span-2">
              <label for="iq-email" class="mb-1 block text-xs font-semibold text-slate-600">Email</label>
              <input id="iq-email" v-model="form.email" type="email" autocomplete="email" placeholder="name@email.com"
                :aria-invalid="errors.email" :class="fieldClass('email')" @input="errors.email = false" />
            </div>
            <div class="sm:col-span-2">
              <label for="iq-interest" class="mb-1 block text-xs font-semibold text-slate-600">I need help with</label>
              <select id="iq-interest" v-model="form.interest"
                class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
                <option value="">Select an option</option>
                <option v-for="interest in inquiryForm.interests" :key="interest" :value="interest">{{ interest }}
                </option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label for="iq-message" class="mb-1 block text-xs font-semibold text-slate-600">Message *</label>
              <textarea id="iq-message" v-model="form.message" rows="3"
                placeholder="Grade, subjects, city, or any questions…" :aria-invalid="errors.message"
                :class="[...fieldClass('message'), 'resize-none']" @input="errors.message = false" />
            </div>
          </div>

          <div class="mt-4 flex flex-col gap-2 sm:flex-row">
            <button type="submit" :disabled="submitting"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70">
              <Icon :icon="submitting ? 'mdi:loading' : 'mdi:send-outline'"
                :class="['h-4 w-4', submitting && 'animate-spin']" aria-hidden="true" />
              {{ submitting ? 'Sending…' : 'Submit' }}
            </button>
          </div>

          <p class="mt-3 text-center text-[11px] leading-relaxed text-slate-400">
            {{ inquiryForm.privacyNote }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
