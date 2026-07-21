<script setup lang="ts">
const phoneNumber = '+91 7389563564'
const phoneTel = '917389563564'
const email = 'info@indianmentors.in'
const location = 'Bhilai, Chhattisgarh'
const workingHours = {
  label: 'Working hours',
  value: 'Monday – Saturday · 10:00 AM – 7:00 PM',
}

/** In-page anchors match `pages/index.vue` sections; use `/#…` so links work from any route. */
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Students & parents', to: '/student-parent' },
  { label: 'Academic coverage', to: '/academic-coverage' },
  { label: 'About us', to: '/about' },
  { label: 'Contact us', to: '/contact' },
  { label: 'Our services', to: '/#services' },
  { label: 'Learning library', to: '/#learning-library' },
  { label: 'Find tutors', to: '/#tutors' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Success stories', to: '/success-stories' },
  { label: 'Partner programme', to: '/#partner-programme' },
  { label: 'Channel partner program', to: '/channel-partner' },
  { label: 'Partner investment model', to: '/channel-partner/investment' },
  { label: 'Hire for institute', to: '/institutions' },
  { label: 'Join as a tutor', to: '/tutors' },
  { label: 'Careers', to: '/careers' },
  { label: 'FAQs', to: '/faq' },
] as const
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 text-slate-100 [color-scheme:dark]">
    <div class="container-page section-py">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-5">
          <h2 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Contact us
          </h2>

          <p class="mt-5 max-w-md text-sm leading-relaxed text-white-200">
            India's #1 trusted verified tutor platform, delivering personalised tutoring, structured academic support,
            and reliable teacher recruitment solutions to empower every student's learning journey through quality
            education and expert mentorship.
          </p>

          <ul class="mt-10 space-y-5 text-sm" role="list">
            <li>
              <a :href="`tel:${phoneTel}`" class="group flex items-center gap-4 transition hover:opacity-90">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                  <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6.5 3h3l1.5 4-2 1.5c1 2.5 3.5 5 6 6L18 12.5 22 14v3c0 1.5-1 2.5-2.5 2.5C9.5 20 4 14.5 4 6.5 4 5 5 3 6.5 3Z"
                      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="min-w-0">
                  <span class="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Phone</span>
                  <span class="mt-0.5 block font-medium text-slate-200 group-hover:text-white">{{ phoneNumber }}</span>
                </span>
              </a>
            </li>

            <li>
              <a :href="`https://wa.me/${phoneTel}`" target="_blank" rel="noopener noreferrer"
                class="group flex items-center gap-4 transition hover:opacity-90">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                  <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span class="min-w-0">
                  <span class="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">WhatsApp</span>
                  <span class="mt-0.5 block font-medium text-slate-200 group-hover:text-white">{{ phoneNumber }}</span>
                </span>
              </a>
            </li>

            <li>
              <a :href="`mailto:${email}`" class="group flex items-center gap-4 transition hover:opacity-90">
                <span
                  class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                  <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="min-w-0">
                  <span class="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Email</span>
                  <span class="mt-0.5 block font-medium text-slate-200 group-hover:text-white">{{ email }}</span>
                </span>
              </a>
            </li>

            <li class="flex items-center gap-4">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z" stroke="currentColor" stroke-width="1.6"
                    stroke-linejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.6" />
                </svg>
              </span>
              <span class="min-w-0">
                <span class="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Location</span>
                <span class="mt-0.5 block font-medium text-slate-200">{{ location }}</span>
              </span>
            </li>

            <li class="flex items-center gap-4">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6" />
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
                </svg>
              </span>
              <span class="min-w-0">
                <span class="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{{
                  workingHours.label }}</span>
                <span class="mt-0.5 block font-medium text-slate-200">{{ workingHours.value }}</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-7">
          <h2 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Quick links
          </h2>
          <nav class="mt-6" aria-label="Footer">
            <ul class="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              <li v-for="link in navLinks" :key="link.label">
                <NuxtLink :to="link.to" class="text-sm font-semibold text-slate-400 transition hover:text-white">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-8 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} Indian Mentors. All rights reserved.</p>
        <p>Bhilai, Chhattisgarh · India</p>
      </div>
    </div>
  </footer>
</template>
