<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'About', href: '/about' },
  { label: 'Students & Parents', href: '/student-parent' },
  { label: 'Academic Coverage', href: '/academic-coverage' },
  { label: 'Find Tutors', href: '/#tutors' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'Become a Tutor', href: '/#join' },
]

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header :class="[
    'sticky top-0 z-50 w-full transition-all duration-300',
    scrolled
      ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-soft'
      : 'bg-transparent',
  ]" v-motion :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }">
    <nav class="container-page flex items-center justify-between h-16 lg:h-20" aria-label="Primary">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-1 group" aria-label="Indian Mentors home">
        <span
          class="relative grid place-items-center rounded-xl text-white font-extrabold text-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <img :src="usePublicAsset('/assets/img/logo/favicon.png')" alt="Indian Mentors favicon" class="h-5 w-5">
          <span
            class="absolute -inset-1 rounded-2xl bg-blue-400/30 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </span>
        <span class="font-display font-extrabold text-lg tracking-tight text-brand-ink ">
          Indian<span class="text-blue-700">Mentors</span>
        </span>
      </NuxtLink>

      <!-- Desktop links -->
      <ul class="hidden lg:flex items-center gap-1">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
            class="px-4 py-2 text-sm font-medium text-slate-600 rounded-xl transition-colors duration-200 hover:text-blue-700 hover:bg-blue-50/70">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <a href="#login" class="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors px-3 py-2">
          Sign in
        </a>
        <a href="#book-demo" class="btn-primary !px-5 !py-2.5 text-sm">
          Book Free Demo
          <IconArrowRight class="w-4 h-4" />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button type="button" class="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
        :aria-expanded="mobileOpen" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="mobileOpen" class="lg:hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div class="container-page py-4 flex flex-col gap-1">
          <a v-for="link in links" :key="link.href" :href="link.href"
            class="px-3 py-2.5 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
            @click="mobileOpen = false">
            {{ link.label }}
          </a>
          <div class="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-200/70">
            <a href="#login" class="btn-secondary !w-full text-sm">Sign in</a>
            <a href="#book-demo" class="btn-primary !w-full text-sm">Book Free Demo</a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
