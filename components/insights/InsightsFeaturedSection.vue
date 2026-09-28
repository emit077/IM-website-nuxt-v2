<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { insightsFeaturedSection } from '~/data/insights'
import {
  blogPath,
  caseStudyPath,
  eventPath,
  excerptText,
  formatContentDate,
  newsPath,
  useWebsiteBlogs,
  useWebsiteCaseStudies,
  useWebsiteEvents,
  useWebsiteNews,
} from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const { data: blogs } = await useWebsiteBlogs()
const { data: studies } = await useWebsiteCaseStudies()
const { data: articles } = await useWebsiteNews()
const { data: events } = await useWebsiteEvents()

const fallbackCover = () => usePublicAsset('/assets/img/insights/personalised-learning.png')

const featuredItems = computed(() => {
  const blog = blogs.value?.[0]
  const study = studies.value?.[0]
  const article = articles.value?.[0]
  const liveEvent = events.value?.[0]
  const items = []

  if (blog) {
    items.push({
      id: `blog-${blog.id}`,
      typeLabel: blog.category || 'Article',
      meta: `${blog.read_time} min`,
      title: blog.title,
      description: excerptText(blog.introduction, 120),
      href: blogPath(blog),
      image: blog.image || fallbackCover(),
      iconMdi: 'mdi:notebook-edit-outline',
      accent: 'blue' as const,
      cta: 'Read Article',
    })
  }

  if (study) {
    items.push({
      id: `study-${study.id}`,
      typeLabel: study.category || 'Case Study',
      meta: `${study.read_time} min`,
      title: study.title,
      description: excerptText(study.challenge, 120),
      href: caseStudyPath(study),
      image: study.image || fallbackCover(),
      iconMdi: 'mdi:chart-line',
      accent: 'emerald' as const,
      cta: 'View story',
    })
  }

  if (article) {
    items.push({
      id: `news-${article.id}`,
      typeLabel: article.category || 'News',
      meta: formatContentDate(article.published_on),
      title: article.title,
      description: excerptText(article.body?.[0], 120),
      href: newsPath(article),
      image: article.image || fallbackCover(),
      iconMdi: 'mdi:newspaper-variant-outline',
      accent: 'violet' as const,
      cta: 'Read update',
    })
  }

  if (liveEvent) {
    items.push({
      id: `event-${liveEvent.id}`,
      typeLabel: liveEvent.mode_display || liveEvent.mode || 'Event',
      meta: formatContentDate(liveEvent.event_date),
      title: liveEvent.title,
      description: excerptText(liveEvent.overview, 120),
      href: eventPath(liveEvent),
      image: liveEvent.image || fallbackCover(),
      iconMdi: 'mdi:microphone-outline',
      accent: 'indigo' as const,
      cta: 'View session',
    })
  }

  return items
})

const accentClasses = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 ring-blue-100',
    hover: 'hover:border-blue-200',
    cta: 'text-blue-600',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    hover: 'hover:border-emerald-200',
    cta: 'text-emerald-700',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700 ring-violet-100',
    hover: 'hover:border-violet-200',
    cta: 'text-violet-700',
  },
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    hover: 'hover:border-indigo-200',
    cta: 'text-indigo-700',
  },
} as const
</script>

<template>
  <section id="featured" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="insights-featured-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="insights-featured-heading" :badge="insightsFeaturedSection.kicker"
        :title="insightsFeaturedSection.title" :description="insightsFeaturedSection.description"
        :classes="`${insightsFeaturedSection.classes} mx-auto max-w-3xl`" />

      <ul v-if="featuredItems.length" class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="item in featuredItems" :key="item.id">
          <NuxtLink :to="item.href" :class="[
            'group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card',
            accentClasses[item.accent].hover,
          ]">
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img :src="item.image" :alt="item.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-5">
              <div class="flex items-center justify-between gap-3">
                <span :class="[
                  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] ring-1',
                  accentClasses[item.accent].badge,
                ]">
                  <Icon :icon="item.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ item.typeLabel }}
                </span>
                <span v-if="item.meta" class="shrink-0 text-[12px] font-medium text-slate-400">{{ item.meta }}</span>
              </div>
              <h3
                class="mt-3 font-display text-base font-bold leading-snug text-slate-900 transition group-hover:opacity-90">
                {{ item.title }}
              </h3>
              <p class="mt-2 line-clamp-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                {{ item.description }}
              </p>
              <span
                :class="['mt-4 inline-flex items-center gap-1 text-sm font-semibold capitalize', accentClasses[item.accent].cta]">
                {{ item.cta }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
