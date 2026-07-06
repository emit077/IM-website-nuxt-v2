<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import CardHeader from '~/components/ui/cardheader.vue'

const email = ref('')
const status = ref<'idle' | 'invalid' | 'success'>('idle')
const toast = useToast()

const newsletterPeople = [
  { src: '/assets/img/hero/hero-1.png', alt: 'Student attending an online session', position: 'object-right' },
  { src: '/assets/img/hero/hero-2.png', alt: 'Student holding books', position: 'object-right' },
  { src: '/assets/img/hero/hero-4.png', alt: 'Mentor in a classroom', position: 'object-right' },
] as const

const partnerLogos = [
  { src: '/assets/img/partners/google.png', alt: 'Google' },
  { src: '/assets/img/partners/aws.png', alt: 'AWS' },
  { src: '/assets/img/partners/msme.png', alt: 'MSME' },
  { src: '/assets/img/partners/startup-india.png', alt: 'Startup India' },
] as const

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function onSubmit() {
  const trimmed = email.value.trim()
  if (!isValidEmail(trimmed)) {
    status.value = 'invalid'
    toast.error('Please enter a valid email address before subscribing.', {
      title: 'Invalid email',
    })
    return
  }
  status.value = 'success'
  email.value = ''
  toast.success('Thanks, you are on the list. Look out for updates from Indian Mentors.', {
    title: 'Subscribed successfully',
  })
}
</script>

<template>
  <section id="newsletter" class="relative overflow-hidden bg-cream-50 py-10 sm:py-12" aria-label="Newsletter signup">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />

    <div class=" relative">
      <div class="relative mx-auto  overflow-hidden rounded-[2rem]  sm:px-8 sm:pb-10" v-motion
        :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div aria-hidden="true"
          class="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-b-full bg-white/70 blur-2xl" />
        <div class="relative mx-auto ">
          <CardHeader heading-id="newsletter-heading"
            title="Subscribe to Our <span class='text-gradient-brand'>Newsletter</span>"
            description="Get study tips, tutor insights, success stories, and platform updates in one concise monthly email." />
        </div>

        <div class="relative mx-auto mt-6 max-w-2xl">
          <form
            class="flex flex-col gap-2 rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.45)] sm:flex-row sm:items-center"
            novalidate @submit.prevent="onSubmit">
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input id="newsletter-email" v-model="email" type="email" name="email" autocomplete="email"
              inputmode="email" required placeholder="name@email.com"
              class="min-h-[50px] w-full flex-1 rounded-full border-0 bg-transparent px-5 text-[15px] text-brand-ink outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-blue-200/60"
              :aria-invalid="status === 'invalid'" aria-describedby="newsletter-hint"
              @focus="status === 'invalid' && (status = 'idle')" />
            <button type="submit"
              class="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2 rounded-full bg-brand-ink px-6 text-sm font-semibold text-white shadow-[0_16px_34px_-18px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:px-8">
              Subscribe Now
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <p id="newsletter-hint" class="mx-auto mt-2  text-xs leading-relaxed text-slate-500">
            Your information will never be shared with third parties, and you can unsubscribe from our updates anytime.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
