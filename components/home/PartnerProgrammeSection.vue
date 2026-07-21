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
  classes: 'mb-0 mt-0',
}
</script>

<template>
  <section id="partner-programme" class="relative section-py" aria-label="Partner programme">
    <div class="container-page relative">
      <div
        class="relative overflow-hidden rounded-[22px] border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 text-white shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] sm:rounded-[28px]">
        <div
          class="grid items-center gap-6 px-5 py-6 sm:gap-8 sm:px-7 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-0 lg:pl-10 lg:pr-0">
          <div class="min-w-0 lg:col-span-7 lg:py-10 xl:col-span-7">
            <CardHeader theme="dark" align="left" :badge="headerContent.badge" :title="headerContent.title"
              :description="headerContent.description" :classes="headerContent.classes" />

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <NuxtLink to="/channel-partner"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 sm:w-auto sm:py-3">
                Apply for Partnership
                <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/channel-partner"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto sm:py-3">
                Know More About Partnership
              </NuxtLink>
            </div>
          </div>

          <div class="min-w-0 self-stretch lg:col-span-5 lg:pl-2">
            <div
              class="relative aspect-[4/3] h-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_18px_50px_-26px_rgba(15,23,42,0.45)] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] lg:rounded-none lg:rounded-l-3xl lg:border-y-0 lg:border-l lg:border-r-0 lg:border-white/20">
              <img :src="usePublicAsset(dashboardImage)" alt="Indian Mentors partner dashboard preview"
                class="absolute inset-0 h-full w-full object-cover lg:object-left " />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
