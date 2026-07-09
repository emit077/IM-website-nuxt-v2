<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeader.vue'
const dashboardImage = '/assets/img/home/dashboard.png'
</script>

<template>
  <section id="partner-programme" class="relative mx-auto w-full max-w-[1200px] pb-14 " aria-label="Partner programme">
    <div
      class="relative overflow-hidden  rounded-[28px] border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 px-5  text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] pr-0 sm:pl-7 sm:pt-8 lg:pl-8">
      <div class="grid items-start gap-8 py-8 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-6">
          <CardHeader theme="dark" classes="mb-0 mt-[-1.8rem]" badge="Channel Partner Programme" align="left"
            title="Become an Authorised <br/> Regional Channel Partner" description="Launch a premium education business with India's trusted tutoring
              brand. Get verified tutors, proven systems, marketing support and
              technology - while you focus on local growth and relationships.   <br><br>    <b> Simple and Structured Onboarding</b><br>
            Our partnership journey is designed to be simple, transparent, and professionally guided.
            <br>
            <br>
            <b>Register → Collaborate → Earn</b>" />


          <div class="flex flex-wrap gap-3 pb-5 mt-5">
            <button
              class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700">
              Apply for Partnership
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" />
              </svg>
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3  text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              Know More About Partnership
            </button>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div
            class="relative overflow-hidden rounded-l-3xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_-26px_rgba(15,23,42,0.45)] lg:min-h-[440px]">
            <img :src="usePublicAsset(dashboardImage)" alt="Indian Mentors partner dashboard preview"
              class="absolute left-0 top-0 h-full w-[167%] max-w-none rounded-2xl object-cover object-left object-top" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
