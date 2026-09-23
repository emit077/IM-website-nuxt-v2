<script setup lang="ts">
import NewsListSection from '~/components/news/NewsListSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { newsFinalCta } from '~/data/news'

const ctas = [newsFinalCta.primaryCta, newsFinalCta.secondaryCta] as const

useSeoMeta({
  title: 'News & Media — Indian Mentors',
  description:
    'Press coverage, partnerships, announcements, and academic milestones from Indian Mentors.',
  ogTitle: 'News & Media — Indian Mentors',
  ogDescription: 'Stay updated with announcements, press coverage, and institutional collaborations.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <NewsListSection />
    <FaqSectionMini category="insights" />
    <UiCTASection heading-id="news-cta-heading" badge-icon-mdi="mdi:newspaper-variant-outline"
      :badge="newsFinalCta.badge" :title="newsFinalCta.title" :description="newsFinalCta.description"
      :supporting="newsFinalCta.supporting" :ctas="ctas" />
  </div>
</template>
