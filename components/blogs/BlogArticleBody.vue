<script setup lang="ts">
import { splitCareerParagraphs } from '~/composables/useCareerContent'
import { usePublicAsset } from '~/composables/usePublicAsset'
import type { WebsiteBlog } from '~/types/website-api'

defineProps<{
  blog: WebsiteBlog
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
              <NuxtLink to="/blogs" class="transition hover:text-slate-700">Blogs</NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ blog.category }}
        </p>

        <h1 class="heading-display text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ blog.title }}
        </h1>

        <p class="mt-4 text-sm font-medium text-slate-500">
          {{ blog.read_time }} min read
          <span v-if="blog.author?.name"> · {{ blog.author.name }}</span>
          <span v-if="blog.author?.designation"> · {{ blog.author.designation }}</span>
        </p>

        <div class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
          <img :src="blog.image || usePublicAsset('/assets/img/insights/personalised-learning.png')"
            :alt="blog.title" class="aspect-[16/9] w-full object-cover" />
        </div>

        <div class="mt-8 space-y-4 text-[15.5px] leading-relaxed text-slate-600">
          <p v-for="(paragraph, i) in splitCareerParagraphs(blog.introduction)" :key="`intro-${i}`">
            {{ paragraph }}
          </p>
        </div>

        <section v-for="section in blog.sections" :key="section.heading" class="mt-12">
          <h2 class="font-display text-2xl font-bold tracking-tight text-slate-900">{{ section.heading }}</h2>
          <ol class="mt-6 space-y-6">
            <li v-for="(item, index) in section.items" :key="item.title" class="flex gap-4">
              <span
                class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-[12px] font-bold text-blue-700 ring-1 ring-blue-100"
                aria-hidden="true">
                {{ index + 1 }}
              </span>
              <div>
                <h3 class="font-display text-base font-bold text-slate-900">{{ item.title }}</h3>
                <p class="mt-1.5 text-[15px] leading-relaxed text-slate-600">{{ item.body }}</p>
              </div>
            </li>
          </ol>
        </section>

        <section v-if="blog.conclusion"
          class="mt-12 rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
          <h2 class="font-display text-xl font-bold text-slate-900">Conclusion</h2>
          <div class="mt-4 space-y-3 text-[15px] leading-relaxed text-slate-600">
            <p v-for="(paragraph, i) in splitCareerParagraphs(blog.conclusion)" :key="`out-${i}`">
              {{ paragraph }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>
