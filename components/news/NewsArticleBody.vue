<script setup lang="ts">
import { computed } from 'vue'
import type { WebsiteNews } from '~/types/website-api'
import { formatContentDate } from '~/composables/useWebsiteContent'
import { useApiMedia, usePublicAsset } from '~/composables/usePublicAsset'

const props = defineProps<{
  article: WebsiteNews
}>()

const coverSrc = computed(
  () => useApiMedia(props.article.image) || usePublicAsset('/assets/img/insights/personalised-learning.png'),
)
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
              <NuxtLink to="/news" class="transition hover:text-slate-700">News &amp; Media</NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ article.category }}
        </p>
        <h1 class="heading-display mt-2 text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ article.title }}
        </h1>
        <p class="mt-4 text-sm font-medium text-slate-500">
          {{ formatContentDate(article.published_on) }}
          <span v-if="article.location"> · {{ article.location }}</span>
          <span v-if="article.author?.name"> · {{ article.author.name }}</span>
        </p>

        <div class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
          <img :src="coverSrc" :alt="article.title" class="aspect-[16/9] w-full object-cover" />
        </div>

        <div class="mt-8 space-y-4 text-[15.5px] leading-relaxed text-slate-600">
          <p v-for="(paragraph, i) in article.body" :key="i">{{ paragraph }}</p>
        </div>

        <blockquote v-if="article.quote"
          class="mt-12 border-l-2 border-violet-600 pl-5">
          <p class="font-display text-xl font-semibold leading-snug text-slate-800">
            &ldquo;{{ article.quote }}&rdquo;
          </p>
          <p v-if="article.quote_attribution" class="mt-3 text-sm font-medium text-slate-500">
            {{ article.quote_attribution }}
          </p>
        </blockquote>
      </div>
    </div>
  </article>
</template>
