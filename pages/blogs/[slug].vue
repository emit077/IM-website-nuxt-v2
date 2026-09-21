<script setup lang="ts">
import { computed } from 'vue'
import BlogArticleBody from '~/components/blogs/BlogArticleBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { blogsFinalCta } from '~/data/blogs'
import { blogPath, excerptText, useWebsiteBlog, useWebsiteBlogs } from '~/composables/useWebsiteContent'

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
const related = computed(() =>
  (blogs.value ?? [])
    .filter((item) => item.id !== blog.value?.id && item.category === blog.value?.category)
    .slice(0, 3),
)

const ctas = [blogsFinalCta.primaryCta, blogsFinalCta.secondaryCta] as const

useSeoMeta({
  title: () => (blog.value ? `${blog.value.title} — Blog | Indian Mentors` : 'Blog — Indian Mentors'),
  description: () => (blog.value ? excerptText(blog.value.introduction, 160) : 'Indian Mentors blog'),
  ogTitle: () => blog.value?.title || 'Indian Mentors Blog',
  ogDescription: () => (blog.value ? excerptText(blog.value.introduction, 160) : ''),
  ogType: 'article',
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
      <div class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
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
          <h2 class="text-center font-display text-2xl font-bold tracking-tight text-slate-900">
            More in {{ blog.category }}
          </h2>
          <ul class="mt-8 grid gap-4 sm:grid-cols-3">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="blogPath(item)"
                class="group block h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
                <p class="font-display text-[15px] font-bold text-slate-900 group-hover:text-blue-700">{{ item.title }}</p>
                <p class="mt-2 text-[13px] leading-relaxed text-slate-500">{{ excerptText(item.introduction, 110) }}</p>
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
