<script setup lang="ts">
import CardHeader from './ui/cardheader.vue'
const categories = [
  { title: 'Coaching Institutes', subtitle: 'Test-prep & centres', icon: 'book', tone: 'indigo' },
  { title: 'Schools', subtitle: 'K-12 programmes', icon: 'school', tone: 'sky' },
  { title: 'Colleges', subtitle: 'Higher education', icon: 'hat', tone: 'amber' },
  { title: 'EdTech Companies', subtitle: 'Product & content teams', icon: 'monitor', tone: 'emerald' },
  { title: 'Corporate Academic Programs', subtitle: 'L&D & upskilling', icon: 'building', tone: 'fuchsia' },
]
</script>

<template>
  <section class="relative mx-auto w-full max-w-[1200px] px-4" aria-label="Institute hiring section">
    <div class="relative overflow-hidden rounded-[28px] border border-[#e8ecf8] bg-[#f6f7fd] px-5 sm:px-7  lg:px-8">
      <div aria-hidden="true" class="pointer-events-none absolute right-6 top-4 h-40 w-40 opacity-35"
        style="background-image: radial-gradient(#cfd6f7 1.2px, transparent 1.2px); background-size: 12px 12px;"></div>

      <div class="grid items-start gap-7 lg:grid-cols-[1.04fr_1fr] lg:gap-4">
        <div class="pt-1">
          <CardHeader variant="variant-1" class="mb-2" badge="Institutional Hiring"
            title="Hire Verified Teachers   <span class='block text-[#4d57dc]'>at Scale</span>" description="From single hires to bulk staffing, Indian Mentors’ institutional division handles verified teacher
            sourcing, interview coordination, and contract management for educational organizations." />
          <p class="mt-5 text-[12px] font-bold uppercase tracking-[0.12em] text-[#394cae]">We Hire For</p>
          <div class="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div v-for="(item, i) in categories" :key="item.title" :class="[
              'flex items-center gap-2.5 rounded-xl border border-[#e8ecf8] bg-[#fafbff] px-3 py-2.5 shadow-[0_5px_16px_-13px_rgba(37,99,235,0.32)]',
              i === categories.length - 1 ? 'sm:col-span-2' : '',
            ]">
              <span :class="[
                'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                item.tone === 'indigo' ? 'bg-indigo-50 text-indigo-600' : '',
                item.tone === 'sky' ? 'bg-sky-50 text-sky-600' : '',
                item.tone === 'amber' ? 'bg-amber-50 text-amber-600' : '',
                item.tone === 'emerald' ? 'bg-emerald-50 text-emerald-600' : '',
                item.tone === 'fuchsia' ? 'bg-fuchsia-50 text-fuchsia-600' : '',
              ]">
                <svg v-if="item.icon === 'book'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 6.6A2.6 2.6 0 0 1 7.6 4H19v15.6H7.6A2.6 2.6 0 0 0 5 22V6.6Zm2-2.6v15.6"
                    stroke="currentColor" stroke-width="1.8" />
                </svg>
                <svg v-else-if="item.icon === 'school'" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  aria-hidden="true">
                  <path d="m3 10 9-6 9 6M5 9.8V20h14V9.8M9 20v-5h6v5" stroke="currentColor" stroke-width="1.8"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else-if="item.icon === 'hat'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m3 9.8 9-4 9 4-9 4-9-4ZM6.8 11.8V16c0 1.7 2.3 3 5.2 3s5.2-1.3 5.2-3v-4.2"
                    stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else-if="item.icon === 'monitor'" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                  aria-hidden="true">
                  <path d="M4 6h16v10H4zM9 20h6M12 16v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 20h16M6 20V8h12v12M9 8V5h6v3M9 12h.01M12 12h.01M15 12h.01" stroke="currentColor"
                    stroke-width="1.8" stroke-linecap="round" />
                </svg>
              </span>
              <div>
                <p class="text-[14px] font-semibold leading-tight text-[#1f2f63]">{{ item.title }}</p>
                <p class="mt-0.5 text-[12px] leading-tight text-[#808aa8]">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>

          <div class="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <a href="#contact"
              class="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#4e59dd] px-7 text-[15px] font-semibold text-white shadow-[0_14px_28px_-16px_rgba(79,70,229,0.95)] transition hover:bg-[#434fd8]">
              Hire Teachers
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none"
                aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </a>
            <a href="#contact"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#dce3f8] bg-white px-6 text-[15px] font-semibold text-[#354579] transition hover:bg-[#f7f9ff]">
              <svg class="h-4 w-4 text-[#4f5de0]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2.8a9.2 9.2 0 1 0 9.2 9.2A9.2 9.2 0 0 0 12 2.8Zm4.1 6.7-5 5a1 1 0 0 1-1.4 0l-2.4-2.4a1 1 0 0 1 1.4-1.4l1.7 1.7 4.3-4.3a1 1 0 1 1 1.4 1.4Z"
                  fill="currentColor" />
              </svg>
              Talk to Recruiter
            </a>
          </div>
        </div>

        <div class="relative min-h-[560px] lg:min-h-[620px]">
          <!-- <div aria-hidden="true"
            class="absolute left-[8%] top-[14%] h-[73%] w-[73%] rounded-full bg-[radial-gradient(circle_at_30%_30%,_#8ea0ff_0%,_#6575f3_45%,_#5a5ad7_75%,_#6c52d7_100%)] opacity-[0.92]">
          </div>
          <div aria-hidden="true"
            class="absolute left-[2.5%] top-[8%] h-[56%] w-[56%] rounded-full border border-dashed border-[#d1d8f6]">
          </div> -->

          <!-- <div class="absolute left-[8%] top-[16%] grid gap-6">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-white shadow-sm ring-1 ring-[#e8edfb]">
              <svg class="h-5 w-5 text-[#5a64e0]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.8" />
                <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </span>
            <span class="grid h-11 w-11 place-items-center rounded-full bg-[#e9f9f4] shadow-sm ring-1 ring-[#d8f1e8]">
              <svg class="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m3 10 9-4 9 4-9 4-9-4ZM6.8 11.8V16c0 1.7 2.3 3 5.2 3s5.2-1.3 5.2-3v-4.2" stroke="currentColor"
                  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="grid h-11 w-11 place-items-center rounded-full bg-[#fff8ea] shadow-sm ring-1 ring-[#f7ebcf]">
              <svg class="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 5h10v14H7zM9.5 9h5M9.5 12h5M9.5 15h3.5" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" />
              </svg>
            </span>
          </div> -->
          <!-- 
          <img src="assets/img/home/hire-institute.png" alt="Professional recruiter with laptop"
            class="absolute z-[2] h-[100%] w-[100%] object-contain object-center mix-blend-multiply contrast-[1.03] saturate-[1.02] "
            loading="lazy" /> -->
          <div aria-hidden="true"
            class="pointer-events-none absolute inset-x-[5%] bottom-0 z-[3] h-28 bg-gradient-to-t from-[#f6f7fd] via-[#f6f7fd]/78 to-transparent">
          </div>
          <div aria-hidden="true"
            class="pointer-events-none absolute inset-y-[7%] left-[3%] z-[3] w-24 bg-gradient-to-r from-[#f6f7fd] via-[#f6f7fd]/65 to-transparent">
          </div>
          <div aria-hidden="true"
            class="pointer-events-none absolute inset-y-[7%] right-[3%] z-[3] w-24 bg-gradient-to-l from-[#f6f7fd] via-[#f6f7fd]/65 to-transparent">
          </div>
          <!-- 
          <div
            class="absolute right-[2%] top-[22%] z-[4] rounded-xl bg-white px-3 py-2.5 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.7)] ring-1 ring-[#ecf0fb]">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M16 10a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM4.5 20a5.5 5.5 0 0 1 11 0M15.5 14.5a3.5 3.5 0 1 0 0 7M14.5 21a4.5 4.5 0 0 1 4.5-4.5"
                    stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
                </svg>
              </span>
              <div>
                <p class="text-[23px] font-extrabold leading-none text-[#1e2f63]">500K+</p>
                <p class="mt-0.5 text-[12px] text-[#7f89a8]">Verified Tutors</p>
              </div>
            </div>
          </div>

          <div
            class="absolute right-[0%] top-[47%] z-[4] rounded-xl bg-white px-3 py-2.5 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.7)] ring-1 ring-[#ecf0fb]">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3 4.5 6.2V12c0 4.4 3.1 8.2 7.5 9 4.4-.8 7.5-4.6 7.5-9V6.2L12 3z" stroke="currentColor"
                    stroke-width="1.8" />
                  <path d="m9.2 12.1 2 2 3.6-3.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
              <div>
                <p class="text-[23px] font-extrabold leading-none text-[#1e2f63]">100%</p>
                <p class="mt-0.5 text-[12px] text-[#7f89a8]">Verified & Safe</p>
              </div>
            </div>
          </div>

          <div
            class="absolute right-[2%] bottom-[16%] z-[4] rounded-xl bg-white px-3 py-2.5 shadow-[0_12px_34px_-20px_rgba(15,23,42,0.7)] ring-1 ring-[#ecf0fb]">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="m12 3.4 2.6 5.3 5.8.8-4.2 4 1 5.7-5.2-2.8-5.2 2.8 1-5.7-4.2-4 5.8-.8L12 3.4z" />
                </svg>
              </span>
              <div>
                <p class="text-[23px] font-extrabold leading-none text-[#1e2f63]">4.8/5</p>
                <p class="mt-0.5 text-[12px] text-[#7f89a8]">Satisfaction</p>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </section>
</template>
