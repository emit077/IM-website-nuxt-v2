<script setup lang="ts">
const phoneLines = [
  { display: '+91 73895 63564', tel: '+917389563564', wa: '917389563564' },
  { display: '+91 78690 27983', tel: '+917869027983', wa: '917869027983' },
] as const

/** In-page anchors match `pages/index.vue` sections; use `/#…` so links work from any route. */
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/#about' },
  { label: 'Our services', to: '/#services' },
  { label: 'Learning library', to: '/#learning-library' },
  { label: 'Find tutors', to: '/#tutors' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Success stories', to: '/#testimonials' },
  { label: 'Partner programme', to: '/#partner-programme' },
  { label: 'Hire for institute', to: '/#institute-hiring' },
  { label: 'Join us', to: '/#join' },
] as const
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 text-slate-100 [color-scheme:dark]">
    <div class="container-page py-12 sm:py-14 lg:py-16">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <!-- Contact -->
        <div class="lg:col-span-5">
          <h2 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
            Contact us
          </h2>
          <p class="mt-3 font-display text-2xl font-extrabold tracking-tight text-white">
            We&apos;re here to help
          </p>
          <p class="mt-4 text-sm font-semibold text-slate-300">
            Empowering students with personalised mentorship
          </p>

          <div class="mt-8 space-y-5 text-sm">
            <div class="flex gap-3">
              <div class="mt-0.5 shrink-0 text-blue-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.5 3h3l1.5 4-2 1.5c1 2.5 3.5 5 6 6L18 12.5 22 14v3c0 1.5-1 2.5-2.5 2.5C9.5 20 4 14.5 4 6.5 4 5 5 3 6.5 3Z"
                    stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="min-w-0 leading-relaxed text-slate-400">
                <span class="font-semibold text-slate-100">Phone</span>
                <div class="mt-1 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3">
                  <a v-for="{ display, tel } in phoneLines" :key="display" :href="`tel:${tel}`"
                    class="font-medium text-slate-400 underline-offset-2 hover:text-white hover:underline">
                    {{ display }}
                  </a>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="mt-0.5 shrink-0 text-emerald-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div class="min-w-0 leading-relaxed text-slate-400">
                <span class="font-semibold text-slate-100">WhatsApp</span>
                <div class="mt-1 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-3">
                  <a v-for="{ display, wa } in phoneLines" :key="wa" :href="`https://wa.me/${wa}`" target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-slate-400 underline-offset-2 hover:text-white hover:underline">
                    {{ display }}
                  </a>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="mt-0.5 shrink-0 text-blue-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class="min-w-0 leading-relaxed text-slate-400">
                <span class="font-semibold text-slate-100">Email</span>
                <div class="mt-1">
                  <a href="mailto:info@indianmentors.in"
                    class="font-medium text-slate-400 underline-offset-2 hover:text-white hover:underline">
                    info@indianmentors.in
                  </a>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="mt-0.5 shrink-0 text-blue-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z" stroke="currentColor" stroke-width="1.6"
                    stroke-linejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.6" />
                </svg>
              </div>
              <div class="min-w-0 leading-relaxed text-slate-400">
                <span class="font-semibold text-slate-100">Office address</span>
                <p class="mt-1 text-slate-300">
                  Bhilai, Chhattisgarh
                </p>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="mt-0.5 shrink-0 text-blue-400">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6" />
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
                </svg>
              </div>
              <div class="min-w-0 leading-relaxed text-slate-400">
                <span class="font-semibold text-slate-100">Working hours</span>
                <p class="mt-1 text-slate-300">
                  Monday – Saturday · 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Quick links -->
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
