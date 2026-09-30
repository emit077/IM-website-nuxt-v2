<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import PhoneCountryInput from '~/components/ui/PhoneCountryInput.vue'
import {
  emailSupport,
  contactInquirySection,
  inquiryForm,
  type InquiryStakeholder,
  phoneSupport,
  whatsappSupport,
  workingHours,
} from '~/data/contact'
import type { MasterCountry } from '~/types/master-api'
import { validateNationalMobile } from '~/utils/phone'

const toast = useToast()

const { data: primaryContact } = await useWebsitePrimaryContact()
const { data: authorisedLines } = await useWebsiteAuthorisedContacts()

const phone = computed(() => primaryContact.value?.phone ?? phoneSupport.number)
const email = computed(() => primaryContact.value?.email ?? emailSupport.address)
const primaryWa = computed(
  () => primaryContact.value?.whatsapp ?? whatsappSupport.numbers[0]!,
)
const hoursLabel = computed(() => {
  if (primaryContact.value?.workingHours) return primaryContact.value.workingHours
  return `${workingHours.days} | ${workingHours.hours}`
})

const whatsappHref = computed(() =>
  primaryWa.value.wa ? `https://wa.me/${primaryWa.value.wa}` : undefined,
)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  stakeholder: '' as '' | InquiryStakeholder,
  helpWith: '',
  message: '',
})
const country = ref<MasterCountry | null>(null)

const errors = reactive<Record<string, boolean>>({})
const submitting = ref(false)

const helpOptions = computed(() => {
  if (!form.stakeholder) return []
  return inquiryForm.helpByStakeholder[form.stakeholder] ?? []
})

watch(
  () => form.stakeholder,
  () => {
    form.helpWith = ''
    errors.helpWith = false
  },
)

function fieldClass(key: string) {
  return [
    'w-full rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-200',
    errors[key] ? 'ring-2 ring-rose-300' : '',
  ]
}

function selectClass(key: string) {
  return [
    'w-full appearance-none rounded-xl border-0 bg-slate-100 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-200',
    errors[key] ? 'ring-2 ring-rose-300' : '',
    !form[key as 'stakeholder' | 'helpWith'] ? 'text-slate-400' : '',
  ]
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function isValidPhone(value: string) {
  return !validateNationalMobile(value, country.value)
}

function validate() {
  errors.name = form.name.trim().length < 2
  errors.phone = !isValidPhone(form.phone)
  errors.email = form.email.trim().length > 0 && !isValidEmail(form.email)
  errors.stakeholder = !form.stakeholder
  errors.helpWith = !form.helpWith
  errors.message = form.message.trim().length > 0 && form.message.trim().length < 5
  return !errors.name && !errors.phone && !errors.email && !errors.stakeholder && !errors.helpWith && !errors.message
}

function resetForm() {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.stakeholder = ''
  form.helpWith = ''
  form.message = ''
  country.value = null
}

function onSubmit() {
  if (!validate()) {
    toast.error('Please add your name, phone, stakeholder, and requirement.', {
      title: 'Missing details',
    })
    return
  }
  submitting.value = true
  window.setTimeout(() => {
    submitting.value = false
    resetForm()
    toast.success('We will get back to you within 24–48 working hours.', { title: 'Enquiry received' })
  }, 500)
}

const directContacts = computed(() => [
  {
    id: 'call-us-phone',
    icon: 'mdi:phone-outline',
    label: 'Phone number',
    value: phone.value.display,
    href: `tel:${phone.value.tel}`,
  },
  {
    id: 'whatsapp',
    icon: 'mdi:whatsapp',
    label: 'WhatsApp',
    value: primaryWa.value.display,
    href: whatsappHref.value,
    external: true,
  },
  {
    id: 'email',
    icon: 'mdi:email-outline',
    label: 'E-mail',
    value: email.value,
    href: `mailto:${email.value}`,
  },
])

</script>

<template>
  <section id="call-us" class="scroll-mt-24 border-b border-slate-200/70 section-surface-white section-py"
    aria-labelledby="contact-support-heading">
    <div class="container-page">
      <div class="overflow-hidden rounded-[2rem] bg-white shadow-sm sm:p-8 lg:p-12" v-motion
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
                    {{ hoursLabel }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="inquiry" class="scroll-mt-24 flex flex-col">
            <div
              class="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_40px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
              <form novalidate class="flex h-full flex-col" @submit.prevent="onSubmit">
                <div class="mb-5">
                  <h3 class="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {{ inquiryForm.title }}
                  </h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {{ inquiryForm.description }}
                  </p>
                </div>

                <div class="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label for="iq-name" class="mb-1.5 block text-xs text-slate-400">
                      Full Name <span class="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input id="iq-name" v-model="form.name" type="text" autocomplete="name" placeholder="Your full name"
                      required :aria-invalid="errors.name" :class="fieldClass('name')" @input="errors.name = false" />
                  </div>

                  <div>
                    <label for="iq-phone" class="mb-1.5 block text-xs text-slate-400">
                      Mobile Number <span class="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <PhoneCountryInput v-model="form.phone" v-model:country="country" input-id="iq-phone"
                      variant="filled" required :invalid="errors.phone" @update:model-value="errors.phone = false"
                      @update:country="errors.phone = false" />
                    <p v-if="errors.phone" class="mt-1 text-xs text-rose-600">
                      {{ validateNationalMobile(form.phone, country) }}
                    </p>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="iq-email" class="mb-1.5 block text-xs text-slate-400">Email Address</label>
                    <input id="iq-email" v-model="form.email" type="email" autocomplete="email"
                      placeholder="name@email.com" :aria-invalid="errors.email" :class="fieldClass('email')"
                      @input="errors.email = false" />
                  </div>

                  <div>
                    <label for="iq-stakeholder" class="mb-1.5 block text-xs text-slate-400">
                      I am a <span class="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <div class="relative">
                      <select id="iq-stakeholder" v-model="form.stakeholder" required :aria-invalid="errors.stakeholder"
                        :class="selectClass('stakeholder')" @change="errors.stakeholder = false">
                        <option value="" disabled>{{ inquiryForm.stakeholderPlaceholder }}</option>
                        <option v-for="stakeholder in inquiryForm.stakeholders" :key="stakeholder" :value="stakeholder">
                          {{ stakeholder }}
                        </option>
                      </select>
                      <Icon icon="mdi:chevron-down"
                        class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <label for="iq-help" class="mb-1.5 block text-xs text-slate-400">
                      I need help with <span class="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <div class="relative">
                      <select id="iq-help" v-model="form.helpWith" required :disabled="!form.stakeholder"
                        :aria-invalid="errors.helpWith" :class="[
                          ...selectClass('helpWith'),
                          !form.stakeholder ? 'cursor-not-allowed opacity-60' : '',
                        ]" @change="errors.helpWith = false">
                        <option value="" disabled>{{ inquiryForm.helpPlaceholder }}</option>
                        <option v-for="option in helpOptions" :key="option" :value="option">
                          {{ option }}
                        </option>
                      </select>
                      <Icon icon="mdi:chevron-down"
                        class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                        aria-hidden="true" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="iq-message" class="mb-1.5 block text-xs text-slate-400">
                      {{ inquiryForm.messageLabel }}
                    </label>
                    <textarea id="iq-message" v-model="form.message" rows="3"
                      :placeholder="inquiryForm.messagePlaceholder" :aria-invalid="errors.message"
                      :class="[...fieldClass('message'), 'resize-none']" @input="errors.message = false" />
                  </div>
                </div>

                <div class="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p v-if="whatsappHref" class="text-sm text-slate-500 flex">
                    {{ inquiryForm.whatsappPrefLabel }}
                    <a :href="whatsappHref" target="_blank" rel="noopener noreferrer"
                      class="ml-1  inline-flex items-center gap-1 font-semibold text-emerald-600 transition hover:text-emerald-700">
                      <Icon icon="mdi:whatsapp" class="h-4 w-4" aria-hidden="true" />
                      {{ inquiryForm.whatsappCtaLabel }}
                    </a>
                  </p>
                  <span v-else />

                  <button type="submit" :disabled="submitting"
                    class="inline-flex items-center gap-3 self-end rounded-full bg-blue-600 py-1.5 pl-1.5 pr-7 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70">
                    <span class="grid h-10 w-10 place-items-center rounded-full bg-white text-blue-600"
                      aria-hidden="true">
                      <Icon :icon="submitting ? 'mdi:loading' : 'mdi:arrow-right'"
                        :class="['h-5 w-5', submitting && 'animate-spin']" />
                    </span>
                    {{ submitting ? 'Sending…' : inquiryForm.submitLabel }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-if="authorisedLines?.length" v-motion :initial="{ opacity: 0, y: 16 }"
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
          <li v-for="line in authorisedLines" :key="line.tel">
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
