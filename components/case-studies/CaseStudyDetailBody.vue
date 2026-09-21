<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { WebsiteCaseStudy } from '~/types/website-api'

defineProps<{
  study: WebsiteCaseStudy
}>()
</script>

<template>
  <article class="relative overflow-hidden section-surface-muted section-py">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb">
          <ol
            class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            <li>
              <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/case-studies" class="transition hover:text-slate-700">Case Studies</NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ study.category }}
        </p>

        <h1 class="heading-display text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ study.title }}
        </h1>

        <p class="mt-4 text-sm font-medium text-slate-500">
          {{ study.read_time }} min read
          <span v-if="study.author?.name"> · {{ study.author.name }}</span>
        </p>

        <dl v-if="study.student_profile"
          class="mt-8 grid gap-4 rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-5 shadow-soft sm:grid-cols-4 sm:px-6">
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Grade</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">{{ study.student_profile.grade }}</dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Board</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">{{ study.student_profile.board }}</dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Subject</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">{{ study.student_profile.subject }}</dd>
          </div>
          <div>
            <dt class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Starting score</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">
              {{ study.student_profile.initial_score || '—' }}
            </dd>
          </div>
        </dl>

        <section class="mt-12">
          <h2 class="font-display text-2xl font-bold tracking-tight text-slate-900">The challenge</h2>
          <p class="mt-4 text-[15.5px] leading-relaxed text-slate-600">{{ study.challenge }}</p>
        </section>

        <div class="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 class="font-display text-xl font-bold tracking-tight text-slate-900">The approach</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in study.approach" :key="item"
                class="flex gap-2.5 text-[15px] leading-relaxed text-slate-600">
                <Icon icon="mdi:check-circle-outline" class="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="font-display text-xl font-bold tracking-tight text-slate-900">The outcome</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in study.outcome" :key="item"
                class="flex gap-2.5 text-[15px] leading-relaxed text-slate-600">
                <Icon icon="mdi:trending-up" class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <blockquote v-if="study.testimonial" class="mt-12 border-l-2 border-blue-600 pl-5">
          <p class="font-display text-xl font-semibold leading-snug text-slate-800">
            &ldquo;{{ study.testimonial }}&rdquo;
          </p>
        </blockquote>
      </div>
    </div>
  </article>
</template>
