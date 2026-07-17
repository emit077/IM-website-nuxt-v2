<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
const dashboardImage = '/assets/img/home/dashboard.png'

const headerContent = {
  badge: 'Channel Partner Programme',
  title: 'Become an Authorised <br class="hidden sm:inline"/> Regional Channel Partner',
  description: `Launch a premium education business with India's trusted tutoring
              brand. Get verified tutors, proven systems, marketing support and
              technology - while you focus on local growth and relationships.   <br><br>    <b> Simple and Structured Onboarding</b><br>
            Our partnership journey is designed to be simple, transparent, and professionally guided.
            <br>
            <br>
            <b>Register → Collaborate → Earn</b>`,
  classes: 'mb-0 mt-0 sm:mt-[-1.8rem]',
}
</script>

<template>
  <section id="partner-programme" class="relative pb-14 sm:pb-16" aria-label="Partner programme">
    <div class="container-page relative">
      <div
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 px-5 py-6 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px] sm:px-7 sm:py-8 lg:px-8 lg:pr-0 lg:py-0">
        <div class="grid items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10 lg:py-8">
          <div class="min-w-0 lg:col-span-6">
            <CardHeader theme="dark" align="left" :badge="headerContent.badge" :title="headerContent.title"
              :description="headerContent.description" :classes="headerContent.classes" />

            <div class="mt-5 flex flex-col gap-3 pb-1 sm:flex-row sm:flex-wrap sm:pb-5">
              <button
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 sm:w-auto sm:py-3">
                Apply for Partnership
                <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" />
                </svg>
              </button>
              <button
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto sm:py-3">
                Know More About Partnership
              </button>
            </div>
          </div>

          <div class="min-w-0 lg:col-span-6">
            <div
              class="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_50px_-26px_rgba(15,23,42,0.45)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[440px] lg:rounded-l-3xl lg:rounded-r-none">
              <img :src="usePublicAsset(dashboardImage)" alt="Indian Mentors partner dashboard preview"
                class="absolute inset-0 h-full w-full rounded-xl object-cover object-left object-top sm:rounded-2xl lg:left-0 lg:right-auto lg:w-[167%] lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
