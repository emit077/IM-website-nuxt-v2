<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { hiringSteps } from '~/data/careers'
import type { CareerJob } from '~/data/career-jobs'

defineProps<{ job: CareerJob }>()
</script>

<template>
  <div class="space-y-0">
    <!-- <section id="about" class="bg-white section-py" aria-labelledby="job-about-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">About Indian Mentors</p>
          <h2 id="job-about-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            A structured EdTech organisation built around personalised tutoring
          </h2>
          <p v-for="paragraph in job.about.paragraphs" :key="paragraph" class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {{ paragraph }}
          </p>
          <ul v-if="job.about.bullets?.length" class="mt-5 space-y-2.5" role="list">
            <li v-for="item in job.about.bullets" :key="item" class="flex items-start gap-2.5 text-sm text-slate-700">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600" aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <section id="role-overview" class="section-surface-muted section-py" aria-labelledby="job-overview-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Role Overview</p>
          <h2 id="job-overview-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            What this role contributes
          </h2>
          <p v-for="paragraph in job.overview" :key="paragraph"
            class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section id="responsibilities" class="bg-white section-py-compact" aria-labelledby="job-responsibilities-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Key Responsibilities</p>
          <h2 id="job-responsibilities-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            How you will contribute
          </h2>
          <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-1 " role="list">
            <li v-for="(group, i) in job.responsibilities" :key="group.heading" v-motion :initial="{ opacity: 0, y: 8 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 16 + i * 24, duration: 300 } }">
              <article class="flex h-full items-start gap-3 py-2">
                <span
                  class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 font-display text-[11px] font-extrabold tabular-nums text-blue-700"
                  aria-hidden="true">
                  <Icon icon="mdi:check" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-[14.5px] font-bold leading-snug text-slate-900">{{ group.heading }}</h3>
                  <p v-if="group.items.length === 1" class="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {{ group.items[0] }}
                  </p>
                  <ul v-else class="mt-1.5 space-y-1" role="list">
                    <li v-for="item in group.items" :key="item"
                      class="flex items-start gap-2 text-[13px] leading-relaxed text-slate-600">
                      <span class="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="job.kpis" id="kpis" class="section-surface-muted section-py-compact"
      aria-labelledby="job-kpis-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Key Performance Indicators</p>
          <h2 id="job-kpis-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            How success is measured
          </h2>
          <p v-if="job.kpis.intro" class="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{{ job.kpis.intro }}
          </p>
          <ol class="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="(item, i) in job.kpis.items" :key="item" v-motion :initial="{ opacity: 0, y: 8 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 16 + i * 24, duration: 300 } }">
              <article class="flex h-full items-start gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5">
                <span
                  class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 font-display text-[11px] font-extrabold tabular-nums text-blue-700"
                  aria-hidden="true">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <p class="pt-0.5 text-[13.5px] font-medium leading-snug text-slate-800">{{ item }}</p>
              </article>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section v-if="job.compensation" id="compensation" class="bg-white section-py"
      aria-labelledby="job-compensation-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Compensation &amp; Incentives</p>
          <h2 id="job-compensation-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Salary and performance rewards
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.compensation.intro }}</p>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <article v-for="block in job.compensation.blocks" :key="block.heading"
              class="rounded-2xl border border-slate-200/80 bg-cream-50/60 p-5">
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ block.heading }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ block.body }}</p>
            </article>
          </div>
          <div v-if="job.compensation.slabs?.length"
            class="mt-6 overflow-hidden rounded-2xl border border-slate-200/80">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-slate-50 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th class="px-4 py-3">Target achievement</th>
                  <th class="px-4 py-3">Incentive</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(slab, i) in job.compensation.slabs" :key="slab.range"
                  :class="i % 2 === 0 ? 'bg-white' : 'bg-cream-50/50'">
                  <td class="px-4 py-3 font-medium text-slate-800">{{ slab.range }}</td>
                  <td class="px-4 py-3 text-slate-600">{{ slab.reward }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="job.compensation.note" class="mt-4 text-[13px] leading-relaxed text-slate-500">{{
            job.compensation.note }}</p>
        </div>
      </div>
    </section>

    <section v-if="job.payoutTable" id="payout" class="bg-white section-py" aria-labelledby="job-payout-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Payout &amp; Allowance Structure
          </p>
          <h2 id="job-payout-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Meeting-based payouts
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.payoutTable.intro }}</p>
          <div class="mt-6 overflow-x-auto rounded-2xl border border-slate-200/80">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-slate-50 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th v-for="column in job.payoutTable.columns" :key="column" class="whitespace-nowrap px-4 py-3">{{
                    column }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in job.payoutTable.rows" :key="row[0]"
                  :class="i % 2 === 0 ? 'bg-white' : 'bg-cream-50/50'">
                  <td v-for="(cell, ci) in row" :key="`${row[0]}-${ci}`"
                    :class="['whitespace-nowrap px-4 py-3', ci === 0 ? 'font-medium text-slate-800' : 'text-slate-600']">
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul class="mt-4 space-y-1.5" role="list">
            <li v-for="note in job.payoutTable.notes" :key="note" class="text-[13px] text-slate-500">{{ note }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <section id="eligibility" class="section-surface-muted section-py" aria-labelledby="job-eligibility-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Eligibility &amp; Required Skills
          </p>
          <h2 id="job-eligibility-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Who this role is for
          </h2>
          <ul class="mt-6 space-y-4" role="list">
            <li v-for="group in job.eligibility" :key="group.heading"
              class="rounded-2xl border border-slate-200/80 bg-white p-5">
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ group.heading }}</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-slate-600">{{ group.body }}</p>
            </li>
          </ul>
          <ul v-if="job.skills?.length" class="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
            <li v-for="skill in job.skills" :key="skill" class="flex items-start gap-2.5 text-sm text-slate-700">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <section id="benefits" class="bg-white section-py" aria-labelledby="job-benefits-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Employee Benefits</p>
          <h2 id="job-benefits-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            A supportive professional environment
          </h2>
          <p v-if="job.benefits.intro" class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.benefits.intro }}</p>
          <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="item in job.benefits.items" :key="item"
              class="flex items-start gap-2.5 rounded-xl border border-slate-200/80 bg-cream-50/60 px-4 py-3 text-sm text-slate-700">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <section id="growth" class="section-surface-muted section-py" aria-labelledby="job-growth-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Career Growth Opportunities</p>
          <h2 id="job-growth-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Where this role can lead
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.growth.intro }}</p>
          <ol class="mt-6 space-y-3" role="list">
            <li v-for="(path, i) in job.growth.paths" :key="path"
              class="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5">
              <span
                class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 font-display text-xs font-extrabold text-blue-700">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <p class="pt-1 text-sm font-medium text-slate-800">{{ path }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section> -->
    <!-- 
    <section id="job-hiring" class="bg-white section-py" aria-labelledby="job-hiring-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Our Hiring Process</p>
          <h2 id="job-hiring-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            How our hiring process works
          </h2>
          <ol class="mt-8 space-y-3" role="list">
            <li v-for="step in hiringSteps" :key="step.no"
              class="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-cream-50/50 p-5">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-100 font-display text-sm font-extrabold text-blue-700">
                {{ step.no }}
              </span>
              <div>
                <h3 class="font-display text-[15px] font-bold text-slate-900">{{ step.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ step.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section> -->

    <section v-if="job.ethics" id="expectations" class="section-surface-muted section-py"
      aria-labelledby="job-ethics-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Professional Expectations</p>
          <h2 id="job-ethics-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Work ethics we expect
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.ethics.intro }}</p>
          <ul class="mt-5 space-y-2.5" role="list">
            <li v-for="item in job.ethics.items" :key="item" class="flex items-start gap-2.5 text-sm text-slate-700">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"
                aria-hidden="true">
                <IconCheck class="h-3 w-3" />
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section v-if="job.whyJoin" id="why-join" class="bg-white section-py" aria-labelledby="job-why-heading">
      <div class="container-page">
        <div class="mx-auto max-w-4xl">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Why Join Indian Mentors?</p>
          <h2 id="job-why-heading" class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Meaningful work in a growing EdTech organisation
          </h2>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ job.whyJoin.intro }}</p>
          <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
            <li v-for="item in job.whyJoin.items" :key="item"
              class="rounded-xl border border-slate-200/80 bg-cream-50/60 px-4 py-3 text-sm font-medium text-slate-800">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
