<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
const dashboardImage = '/assets/img/home/dashboard.png'

const stats = [
  { label: 'Verified Tutors', value: '12,500+' },
  { label: 'Cities', value: '50+' },
  { label: 'Student Rating', value: '4.8/5' },
  { label: 'Avg. Partner Growth', value: '3.2X' },
]

const steps = [
  { title: 'Apply', subtitle: 'Submit your application and basic information.' },
  { title: 'Approval', subtitle: 'We review your profile and market potential.' },
  { title: 'Onboard', subtitle: 'Get trained, onboarded and equipped with launch kits.' },
  { title: 'Launch', subtitle: 'Start your tutoring business with full support.' },
  { title: 'Scale', subtitle: 'Grow impact and revenue with regional playbooks.' },
]

const partners = ['Ryan', 'Delhi Public School', 'VIBGYOR', 'ORCHIDS', 'Narayana']
</script>

<template>
  <section id="partner-programme" class="relative mx-auto w-full max-w-[1200px] px-4 py-5 pr-0 sm:py-8"
    aria-label="Partner programme">
    <div
      class="relative overflow-hidden rounded-[28px] border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 px-5  text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] pr-0 sm:pl-7 sm:pt-8 lg:pl-8">
      <div class="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <CardHeader variant="variant-2" class="mb-0 mt-[-1.8rem]" badge="Channel Partner Programme"
            title="Become an Authorised <br/> Regional Channel Partner" description="Launch a premium education business with India's trusted tutoring
              brand. Get verified tutors, proven systems, marketing support and
              technology - while you focus on local growth and relationships.   <br><br>    <b> Simple and Structured Onboarding</b><br>
            Our partnership journey is designed to be simple, transparent, and professionally guided.
            <br>
            <b>Register → Collaborate → Earn</b>" />


          <div class="flex flex-wrap gap-3">
            <button
              class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
              Apply for Partnership
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" />
              </svg>
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              Know More About Partnership
            </button>
          </div>
          <!-- <p class="mt-4 text-xs text-slate-500">
              Limited city partnerships available.
              <span class="font-semibold text-blue-600">Apply now!</span>
            </p> -->
        </div>

        <div class="lg:col-span-6">
          <div
            class="relative overflow-hidden rounded-l-3xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_-26px_rgba(15,23,42,0.45)] lg:min-h-[440px]">
            <img :src="usePublicAsset(dashboardImage)" alt="Indian Mentors partner dashboard preview"
              class="absolute left-0 top-0 h-full w-[167%] max-w-none rounded-2xl object-cover object-left object-top" />
          </div>
        </div>
      </div>
      <!-- <div class="pr-7">
          <div
            class="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-5 sm:px-6 relative">
            <div class="flex items-end justify-between gap-3">
              <p class="text-xs font-semibold tracking-[0.16em] text-slate-500">HOW IT WORKS</p>
              <p class="text-[11px] font-medium text-blue-600">From application to scaling success</p>
            </div>
            <div class="mt-4 grid gap-3 md:grid-cols-5 md:gap-2">
              <div v-for="(step, index) in steps" :key="step.title" class="group relative">
                <div
                  class="h-full rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-md">
                  <div class="flex items-center gap-2">
                    <span
                      class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700">
                      {{ index + 1 }}
                    </span>
                    <p class="text-sm font-semibold text-slate-900">{{ step.title }}</p>
                  </div>
                  <p class="mt-2 text-xs leading-5 text-slate-500">{{ step.subtitle }}</p>
                </div>

                <div v-if="index !== steps.length - 1"
                  class="pointer-events-none absolute -right-1 top-1/2 hidden h-[2px] w-2 -translate-y-1/2 bg-blue-200 md:block">
                </div>
              </div>
            </div>
          </div>
        </div> -->
    </div>
  </section>
</template>
