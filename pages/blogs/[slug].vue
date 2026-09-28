<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import BlogArticleBody from '~/components/blogs/BlogArticleBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { blogsFinalCta } from '~/data/blogs'
import type { WebsiteBlog } from '~/types/website-api'
import { blogPath, excerptText, useWebsiteBlog, useWebsiteBlogs } from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: blogs, pending: listPending } = await useWebsiteBlogs()
const listed = computed(
  () => (blogs.value ?? []).find((item) => item.slug === slug.value || String(item.id) === slug.value) ?? null,
)
const fallbackId = computed(() => (listed.value ? '' : /^\d+$/.test(slug.value) ? slug.value : ''))
const { data: fetched, pending: itemPending } = await useWebsiteBlog(fallbackId)
const blog = computed(() => listed.value ?? fetched.value)
const pending = computed(() => listPending.value || itemPending.value)

/** Stable shuffle so SSR and client pick the same “random” set. */
function shuffleWithSeed<T>(items: T[], seed: number) {
  const arr = [...items]
  let s = seed || 1
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    const j = s % (i + 1)
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const related = computed(() => {
  const current = blog.value
  const all = blogs.value ?? []
  if (!current) return [] as WebsiteBlog[]

  const others = all.filter((item) => item.id !== current.id)
  const sameCategory = others.filter((item) => item.category === current.category)
  const otherCategory = others.filter((item) => item.category !== current.category)
  const mixed = [
    ...shuffleWithSeed(sameCategory, current.id),
    ...shuffleWithSeed(otherCategory, current.id * 31 + 17),
  ]
  return mixed.slice(0, 3)
})

const relatedHeading = computed(() => {
  if (!blog.value || !related.value.length) return 'More to read'
  const sameCount = related.value.filter((item) => item.category === blog.value?.category).length
  if (sameCount === related.value.length) return `More in ${blog.value.category}`
  return 'You may also like'
})

const ctas = [blogsFinalCta.primaryCta, blogsFinalCta.secondaryCta] as const

function coverSrc(item: WebsiteBlog) {
  return item.image || usePublicAsset('/assets/img/insights/personalised-learning.png')
}

useSeoMeta({
  title: () => (blog.value ? `${blog.value.title} — Blog | Indian Mentors` : 'Blog — Indian Mentors'),
  description: () => (blog.value ? excerptText(blog.value.introduction, 160) : 'Indian Mentors blog'),
  ogTitle: () => blog.value?.title || 'Indian Mentors Blog',
  ogDescription: () => (blog.value ? excerptText(blog.value.introduction, 160) : ''),
  ogType: 'article',
  ogImage: () => blog.value?.image || undefined,
})
</script>

<template>
  <div class="min-h-screen">
    <div v-if="pending" class="container-page section-py" aria-live="polite">
      <div class="mx-auto max-w-3xl space-y-4">
        <div class="h-10 w-2/3 animate-pulse rounded-lg bg-slate-100" />
        <div class="h-40 animate-pulse rounded-2xl bg-slate-100" />
      </div>
      <p class="sr-only">Loading article</p>
    </div>

    <div v-else-if="!blog" class="container-page section-py">
      <div
        class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Article not found</p>
        <p class="mt-2 text-sm text-slate-600">This article may have been moved or unpublished.</p>
        <NuxtLink to="/blogs"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
          Browse articles
        </NuxtLink>
      </div>
    </div>

    <template v-else>
      <BlogArticleBody :blog="blog" />

      <section v-if="related.length" class="section-surface-white section-py">
        <div class="container-page">
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">Keep reading</p>
            <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {{ relatedHeading }}
            </h2>
          </div>

          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="blogPath(item)"
                class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
                <div class="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img :src="coverSrc(item)" :alt="item.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy" />
                </div>
                <div class="flex flex-1 flex-col p-5">
                  <div class="flex items-center justify-between gap-3">
                    <span
                      class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                      <Icon icon="mdi:notebook-edit-outline" class="h-3.5 w-3.5" aria-hidden="true" />
                      {{ item.category }}
                    </span>
                    <span class="text-[12px] font-medium text-slate-400">{{ item.read_time }} min</span>
                  </div>
                  <h3
                    class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-blue-700">
                    {{ item.title }}
                  </h3>
                  <p class="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                    {{ excerptText(item.introduction, 110) }}
                  </p>
                  <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Read Article
                    <Icon icon="mdi:arrow-right"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <UiCTASection heading-id="blog-article-cta-heading" :badge="blogsFinalCta.badge" :title="blogsFinalCta.title"
        :description="blogsFinalCta.description" :supporting="blogsFinalCta.supporting" :ctas="ctas" />
    </template>
  </div>
</template>
