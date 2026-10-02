<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { externalLinks } from '~/data/external-links'
import { emailSupport, phoneSupport } from '~/data/contact'

const scrolled = ref(false)
const mobileOpen = ref(false)
const openMenuId = ref<string | null>(null)
const navRef = ref<HTMLElement | null>(null)
const { isSecondaryHeroActive } = useSecondaryHeroTheme()

const { data: primaryContact } = await useWebsitePrimaryContact()
const phone = computed(() => primaryContact.value?.phone ?? phoneSupport.number)
const email = computed(() => primaryContact.value?.email ?? emailSupport.address)

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Students & Parents', href: '/student-parent' },
  { label: 'Tutors', href: '/tutors' },
  { label: 'Contact Us', href: '/contact' },

]

const navMenus = [
  {
    id: 'more',
    label: 'More',
    // items: [
    //   { label: 'Academic Coverage', href: '/academic-coverage', description: 'Boards, classes & subjects' },
    //   { label: 'Institutional Partners', href: '/institutions', description: 'Teacher recruitment' },
    //   { label: 'Channel Partners', href: '/channel-partner', description: 'Collaborate and grow with us' },
    //   { label: 'Why Choose', href: '/why-choose', description: 'Why families trust us' },
    //   { label: 'Career', href: '/careers', description: 'Join our team' },
    //   { label: 'Insights Hub', href: '/insights', description: 'Company insights' },
    //   { label: 'FAQ', href: '/faq', description: 'Common questions' },
    // ],
    items: [
      { label: 'Why Choose Us', href: '/why-choose', description: 'Discover what sets us apart' },
      { label: 'Academic Coverage', href: '/academic-coverage', description: 'Explore our learning programs' },
      { label: 'Channel Partners', href: '/channel-partner', description: 'Collaborate and grow with us' },
      { label: 'Institutional Partners', href: '/institutions', description: 'Teacher recruitment services' },
      { label: 'Career Opportunities', href: '/careers', description: 'Build your future with us' },
      { label: 'Insights Hub', href: '/insights', description: 'Explore educational insights' },
    ],
  },
]

const mobileNavGroups = [
  {
    heading: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'What We Offer',
    items: [
      { label: 'Tutors', href: '/tutors' },
      { label: 'Our Services', href: '/services' },
      { label: 'Students & Parents', href: '/student-parent' },
      { label: 'Academic Coverage', href: '/academic-coverage' },
      { label: 'Channel Partners', href: '/channel-partner' },
      { label: 'Institutional Partners', href: '/institutions' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Insights Hub', href: '/insights' },
      { label: 'Why Choose Us', href: '/why-choose' },
      // { label: 'FAQ', href: '/faq' },
    ],
  },

]

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenus() {
  openMenuId.value = null
  mobileOpen.value = false
}

function toggleMenu(id: string) {
  openMenuId.value = openMenuId.value === id ? null : id
}

watch(mobileOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenus()
}

onClickOutside(navRef, () => {
  openMenuId.value = null
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header ref="navRef" class="sticky top-0 z-50 w-full" :class="isSecondaryHeroActive && 'app-navbar--secondary-hero'">
    <div :class="[
      'hidden border-b sm:block',
      isSecondaryHeroActive
        ? 'app-navbar-top--secondary-hero border-slate-200/80 text-slate-700'
        : 'border-blue-800/30 bg-blue-700 text-white',
    ]">
      <div class="container-page flex h-9 items-center justify-between text-xs sm:text-[13px]">
        <div class="flex min-w-0 items-center gap-3">
          <a :href="`tel:${phone.tel}`" :class="[
            'inline-flex items-center gap-1.5 transition',
            isSecondaryHeroActive ? 'hover:text-blue-700' : 'hover:text-blue-100',
          ]">
            <svg class="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.5 3h3l1.5 4-2 1.5c1 2.5 3.5 5 6 6L18 12.5 22 14v3c0 1.5-1 2.5-2.5 2.5C9.5 20 4 14.5 4 6.5 4 5 5 3 6.5 3Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
            </svg>
            {{ phone.display }}
          </a>
          <span class="h-3.5 w-px" :class="isSecondaryHeroActive ? 'bg-slate-300' : 'bg-white/30'" aria-hidden="true" />
          <a :href="`mailto:${email}`" :class="[
            'truncate transition',
            isSecondaryHeroActive ? 'hover:text-blue-700' : 'hover:text-blue-100',
          ]">
            {{ email }}
          </a>
        </div>

        <div class="flex shrink-0 items-center gap-3">
          <a :href="externalLinks.studentSignup" :class="[
            'font-medium transition',
            isSecondaryHeroActive ? 'hover:text-blue-700' : 'hover:text-blue-100',
          ]">Book a Tutor</a>
          <span class="h-3.5 w-px" :class="isSecondaryHeroActive ? 'bg-slate-300' : 'bg-white/30'" aria-hidden="true" />
          <a :href="externalLinks.tutorRegistration" :class="[
            'font-medium transition',
            isSecondaryHeroActive ? 'hover:text-blue-700' : 'hover:text-blue-100',
          ]">Become a Tutor</a>
          <span class="h-3.5 w-px" :class="isSecondaryHeroActive ? 'bg-slate-300' : 'bg-white/30'" aria-hidden="true" />
          <a :href="externalLinks.login" :class="[
            'font-medium transition',
            isSecondaryHeroActive ? 'hover:text-blue-700' : 'hover:text-blue-100',
          ]">Login</a>
        </div>
      </div>
    </div>
    <div :class="[
      'transition-[background-color,box-shadow] duration-300',
      isSecondaryHeroActive
        ? [
          'app-navbar-main--secondary-hero border-0',
          scrolled && 'shadow-[0_10px_28px_-18px_rgba(0,0,0,0.55)]',
        ]
        : [
          'border-b bg-white',
          scrolled ? 'border-slate-200 shadow-sm' : 'border-slate-200/80',
        ],
    ]">
      <nav class="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]" aria-label="Primary">
        <NuxtLink to="/" class="group flex min-w-0 shrink-0 items-center gap-3" aria-label="Indian Mentors home">
          <img
            :src="usePublicAsset(isSecondaryHeroActive ? '/assets/img/logo/IM-logo-white.svg' : '/assets/img/logo/IM-logo-blue.svg')"
            alt="Indian Mentors" class="h-8 w-auto max-w-[150px] sm:h-9 sm:max-w-[180px] lg:max-w-[200px]" width="200"
            height="36" />
        </NuxtLink>
        <ul class="hidden items-center lg:flex">
          <li v-for="link in primaryLinks" :key="link.href">
            <a :href="link.href" :class="[
              'px-3 py-2 text-sm font-medium transition-colors xl:px-3.5',
              isSecondaryHeroActive
                ? 'text-white/90 hover:text-white'
                : 'text-slate-700 hover:text-blue-700',
            ]">
              {{ link.label }}
            </a>
          </li>

          <li v-for="menu in navMenus" :key="menu.id" class="relative">
            <button type="button" :class="[
              'inline-flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors xl:px-3.5',
              isSecondaryHeroActive
                ? 'text-white/90 hover:text-white'
                : 'text-slate-700 hover:text-blue-700',
            ]" :aria-expanded="openMenuId === menu.id" aria-haspopup="true" @click="toggleMenu(menu.id)">
              {{ menu.label }}
              <svg class="h-3.5 w-3.5 transition-transform duration-200" :class="openMenuId === menu.id && 'rotate-180'"
                viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>

            <Transition enter-active-class="transition duration-150 ease-out" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <div v-if="openMenuId === menu.id"
                class="absolute left-0 top-full z-50 mt-2 w-[17.5rem] overflow-hidden rounded-lg border border-slate-100 bg-white py-3 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.45)]"
                role="menu">
                <a v-for="item in menu.items" :key="item.label" :href="item.href" role="menuitem"
                  class="group block px-5 py-1.5 transition-colors hover:bg-slate-50" @click="openMenuId = null">
                  <span class="block text-sm font-semibold leading-snug text-slate-900 group-hover:text-blue-700">
                    {{ item.label }}
                  </span>
                  <span class="mt-0.5 block text-xs leading-snug text-slate-400">
                    {{ item.description }}
                  </span>
                </a>
              </div>
            </Transition>
          </li>
        </ul>
        <div class="hidden shrink-0 lg:block">
          <a :href="externalLinks.studentSignup" :class="[
            'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition',
            isSecondaryHeroActive
              ? 'bg-white text-[var(--theme-blue,#2a2fff)] hover:bg-white/90'
              : 'bg-blue-700 text-white hover:bg-blue-800',
          ]">
            Book Free Consultation
          </a>
        </div>
        <button type="button" :class="[
          'ml-auto rounded-lg p-2 transition lg:hidden',
          isSecondaryHeroActive
            ? 'text-white hover:bg-white/10'
            : 'text-slate-700 hover:bg-slate-100',
        ]" :aria-expanded="mobileOpen" aria-label="Toggle menu" @click="mobileOpen = !mobileOpen">
          <svg v-if="!mobileOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </nav>
    </div>
    <Teleport to="body">
      <div v-if="mobileOpen" class="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true"
        aria-label="Site menu">
        <button type="button" class="absolute inset-0 bg-slate-950/55" aria-label="Close menu" @click="closeMenus" />
        <aside
          class="absolute inset-y-0 right-0 flex w-[min(22.5rem,82vw)] flex-col overflow-y-auto bg-[#f7f6f2] shadow-[-16px_0_40px_rgba(15,23,42,0.18)]">
          <div class="flex items-center justify-end px-3 pt-2">
            <button type="button" class="rounded-lg p-2 text-slate-800 transition hover:bg-black/5"
              aria-label="Close menu" @click="closeMenus">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <nav class="px-8 pb-8 pt-1" aria-label="Mobile">
            <section v-for="group in mobileNavGroups" :key="group.heading" class="mb-7 last:mb-0">
              <h2 class="text-[15px] font-bold tracking-tight text-slate-900">
                {{ group.heading }}
              </h2>
              <ul class="mt-2.5" role="list">
                <li v-for="item in group.items" :key="item.href">
                  <a :href="item.href"
                    class="block py-1.5 pl-4 text-[15px] font-medium text-slate-600 transition hover:text-blue-700"
                    @click="closeMenus">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </section>
          </nav>

          <div class="mt-auto border-t border-slate-200/80 px-6 py-4">
            <a :href="`tel:${phone.tel}`"
              class="mb-2.5 flex items-center gap-2 text-sm font-medium text-slate-700 sm:hidden">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.5 3h3l1.5 4-2 1.5c1 2.5 3.5 5 6 6L18 12.5 22 14v3c0 1.5-1 2.5-2.5 2.5C9.5 20 4 14.5 4 6.5 4 5 5 3 6.5 3Z"
                  stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
              </svg>
              {{ phone.display }}
            </a>
            <div class="flex flex-col gap-1.5">
              <a :href="externalLinks.login"
                class="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
                @click="closeMenus">Login</a>
              <a :href="externalLinks.tutorRegistration"
                class="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
                @click="closeMenus">Become a Tutor</a>
              <a :href="externalLinks.studentSignup"
                class="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white"
                @click="closeMenus">Book Free Demo</a>
            </div>
          </div>
        </aside>
      </div>
    </Teleport>
  </header>
</template>
