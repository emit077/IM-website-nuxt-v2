<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  authorisedPhoneNumbers,
  emailSupport,
  contactInquirySection,
  inquiryForm,
  phoneSupport,
  whatsappSupport,
  workingHours,
} from '~/data/contact'

const toast = useToast()
const primaryWa = whatsappSupport.numbers[0]

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
    'w-full rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200',
    errors[key] ? 'ring-2 ring-rose-300' : '',
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

const directContacts = [
  {
    id: 'email',
    icon: 'mdi:email-outline',
    label: 'E-mail',
    value: emailSupport.address,
    href: `mailto:${emailSupport.address}`,
  },
  {
    id: 'call-us-phone',
    icon: 'mdi:phone-outline',
    label: 'Phone number',
    value: phoneSupport.number.display,
    href: `tel:${phoneSupport.number.tel}`,
  },
  {
    id: 'whatsapp',
    icon: 'mdi:whatsapp',
    label: 'WhatsApp',
    value: primaryWa.display,
    href: primaryWa.wa ? `https://wa.me/${primaryWa.wa}` : undefined,
    external: true,
  },
] as const

</script>

<template>
  <section id="call-us" class="scroll-mt-24 border-b border-slate-200/70 section-surface-white section-py"
    aria-labelledby="contact-support-heading">
    <div class="container-page">
      <div class="overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm sm:p-8 lg:p-12" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <div class="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div class="flex flex-col lg:justify-between lg:py-2">
            <CardHeader heading-id="inquiry-heading" :align="'left'" :badge="contactInquirySection.badge"
              :title="contactInquirySection.title" :description="contactInquirySection.description"
              :classes="contactInquirySection.classes" />

            <div class="mt-10 sm:mt-12">
              <ul class="space-y-7 sm:space-y-8">
                <li v-for="contact in directContacts" :key="contact.id">
                  <component :is="contact.href ? 'a' : 'div'" :id="contact.id" :href="contact.href"
                    :target="contact.external ? '_blank' : undefined"
                    :rel="contact.external ? 'noopener noreferrer' : undefined"
                    class="group flex items-center gap-4 transition hover:opacity-80">
                    <span
                      class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white transition group-hover:bg-blue-700"
                      aria-hidden="true">
                      <Icon :icon="contact.icon" class="h-5 w-5" />
                    </span>
                    <span>
                      <span class="block text-xs text-slate-400">{{ contact.label }}</span>
                      <span class="mt-0.5 block text-base font-semibold text-slate-900">{{ contact.value }}</span>
                    </span>
                  </component>
                </li>
              </ul>

              <div
                class="mt-8 flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/90 to-slate-50/80 px-5 py-4 shadow-sm">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm"
                  aria-hidden="true">
                  <Icon icon="mdi:clock-outline" class="h-5 w-5" />
                </span>
                <div>
                  <span class="block text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">Working
                    Hours</span>
                  <span class="mt-1 block text-sm font-semibold text-slate-900 sm:text-base">
                    {{ workingHours.days }} | {{ workingHours.hours }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="inquiry" class="scroll-mt-24 flex flex-col">
            <div
              class="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
              <form novalidate class="flex h-full flex-col" @submit.prevent="onSubmit">
                <div class="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label for="iq-name" class="mb-1.5 block text-xs text-slate-400">Name</label>
                    <input id="iq-name" v-model="form.name" type="text" autocomplete="name" placeholder="Your full name"
                      :aria-invalid="errors.name" :class="fieldClass('name')" @input="errors.name = false" />
                  </div>

                  <div>
                    <label for="iq-phone" class="mb-1.5 block text-xs text-slate-400">Phone</label>
                    <input id="iq-phone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel"
                      placeholder="+91 00000 00000" :aria-invalid="errors.phone" :class="fieldClass('phone')"
                      @input="errors.phone = false" />
                  </div>

                  <div class="sm:col-span-2">
                    <label for="iq-email" class="mb-1.5 block text-xs text-slate-400">Email</label>
                    <input id="iq-email" v-model="form.email" type="email" autocomplete="email"
                      placeholder="name@email.com" :aria-invalid="errors.email" :class="fieldClass('email')"
                      @input="errors.email = false" />
                  </div>

                  <div class="sm:col-span-2">
                    <label for="iq-interest" class="mb-1.5 block text-xs text-slate-400">I need help with</label>
                    <div class="relative">
                      <select id="iq-interest" v-model="form.interest"
                        class="w-full appearance-none rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-200">
                        <option value="">Select…</option>
                        <option v-for="interest in inquiryForm.interests" :key="interest" :value="interest">
                          {{ interest }}
                        </option>
                      </select>
                      <Icon icon="mdi:chevron-down"
                        class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden="true" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="iq-message" class="mb-1.5 block text-xs text-slate-400">Message</label>
                    <textarea id="iq-message" v-model="form.message" rows="3" placeholder="Type your message"
                      :aria-invalid="errors.message" :class="[...fieldClass('message'), 'resize-none']"
                      @input="errors.message = false" />
                  </div>
                </div>

                <div class="mt-5">
                  <button type="submit" :disabled="submitting"
                    class="inline-flex items-center gap-3 rounded-full bg-blue-600 py-1.5 pl-1.5 pr-7 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70">
                    <span class="grid h-10 w-10 place-items-center rounded-full bg-white text-blue-600"
                      aria-hidden="true">
                      <Icon :icon="submitting ? 'mdi:loading' : 'mdi:arrow-right'"
                        :class="['h-5 w-5', submitting && 'animate-spin']" />
                    </span>
                    {{ submitting ? 'Sending…' : 'Send Enquiry' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 120 } }"
        aria-labelledby="authorised-numbers-heading">

        <div class="text-center p-6 sm:p-8  lg:p-10">
          <div class="inline-flex items-center justify-center gap-3">
            <CardHeader heading-id="inquiry-heading" title=" <span class='text-xl'>Our Authorised Phone Numbers</span>"
              description="Call any of our verified support lines during working hours for enrollment, demos, and
              academic guidance." :classes="contactInquirySection.classes" />
          </div>
        </div>

        <ul class="mx-auto  grid max-w-5xl grid-cols-1 gap-3  sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Authorised phone numbers">
          <li v-for="line in authorisedPhoneNumbers" :key="line.tel">
            <a :href="`tel:${line.tel}`"
              class="group flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                aria-hidden="true">
                <Icon icon="mdi:phone-outline" class="h-4 w-4" />
              </span>
              <span
                class="font-display text-sm font-semibold tracking-tight text-slate-800 transition-colors group-hover:text-blue-700 sm:text-[15px]">
                {{ line.display }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
