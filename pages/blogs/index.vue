<script setup lang="ts">
import BlogsListSection from '~/components/blogs/BlogsListSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { blogsFinalCta } from '~/data/blogs'

const ctas = [blogsFinalCta.primaryCta, blogsFinalCta.secondaryCta] as const

useSeoMeta({
  title: 'Blogs — Indian Mentors',
  description:
    'Expert articles on study techniques, board exams, personalised tutoring, and how parents can support academic success.',
  ogTitle: 'Indian Mentors Blog — Learning Insights That Drive Results',
  ogDescription:
    'Practical academic guidance for students and parents, written by the Indian Mentors academic team.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <BlogsListSection />
    <FaqSectionMini category="insights" />
    <UiCTASection heading-id="blogs-cta-heading" badge-icon-mdi="mdi:notebook-edit-outline"
      :badge="blogsFinalCta.badge" :title="blogsFinalCta.title" :description="blogsFinalCta.description"
      :supporting="blogsFinalCta.supporting" :ctas="ctas" />
  </div>
</template>
