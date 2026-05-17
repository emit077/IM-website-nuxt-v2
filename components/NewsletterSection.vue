<script setup lang="ts">
import { ref } from 'vue'
import CardHeader from './ui/cardheader.vue'

const email = ref('')
const status = ref<'idle' | 'invalid' | 'success'>('idle')

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

function onSubmit() {
  const trimmed = email.value.trim()
  if (!isValidEmail(trimmed)) {
    status.value = 'invalid'
    return
  }
  status.value = 'success'
  email.value = ''
}
</script>

<template>
  <section id="newsletter" class="relative overflow-hidden bg-cream-50" aria-label="Newsletter signup">
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-0 left-1/4 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

    <div class="container-page relative py-10 lg:py-14">
      <div
        class="grid items-center gap-8 rounded-3xl border border-slate-200/80 bg-white/80 px-6 py-8 shadow-soft backdrop-blur-sm sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-10"
        v-motion :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
        <div class="lg:col-span-5">
          <CardHeader variant="variant-1" class="mb-0" badge="NEWSLETTER" title="Stay in the loop"
            description="Get study tips, tutor spotlights and platform updates — no spam, unsubscribe anytime."
            content-class="!px-0 !py-0" />
        </div>

        <div class="lg:col-span-7">
          <form class="flex flex-col gap-3 sm:flex-row sm:items-stretch" novalidate @submit.prevent="onSubmit">
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input id="newsletter-email" v-model="email" type="email" name="email" autocomplete="email"
              inputmode="email" required placeholder="you@example.com"
              class="min-h-[52px] w-full flex-1 rounded-2xl border border-slate-200 bg-white px-4 text-[15px] text-brand-ink shadow-inner outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-200/50"
              :aria-invalid="status === 'invalid'" aria-describedby="newsletter-hint"
              @focus="status === 'invalid' && (status = 'idle')" />
            <button type="submit" class="btn-primary shrink-0 whitespace-nowrap sm:px-8">
              Subscribe
            </button>
          </form>
          <p id="newsletter-hint" class="mt-3 text-xs leading-relaxed text-slate-500">
            We respect your privacy. By subscribing you agree to receive marketing emails from Indian Mentors.
          </p>
          <p v-if="status === 'success'" class="mt-3 text-sm font-medium text-emerald-700" role="status"
            aria-live="polite">
            Thanks — you are on the list. Look out for updates from Indian Mentors.
          </p>
          <p v-if="status === 'invalid'" class="mt-3 text-sm font-medium text-red-600" role="alert">
            Please enter a valid email address.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
