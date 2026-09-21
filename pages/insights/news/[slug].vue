<script setup lang="ts">
import { computed } from 'vue'
import InsightsEntryBody from '~/components/insights/InsightsEntryBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { insightEntryBySlug, insightsFinalCta } from '~/data/insights'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const item = computed(() => insightEntryBySlug('news', slug.value))
const ctas = [insightsFinalCta.primaryCta, insightsFinalCta.secondaryCta] as const

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: 'News item not found' })
}

useSeoMeta({
  title: () => (item.value ? `${item.value.title} — News | Indian Mentors` : 'News — Indian Mentors'),
  description: () => item.value?.summary || 'Indian Mentors news and updates.',
  ogTitle: () => item.value?.title || 'Indian Mentors News',
  ogDescription: () => item.value?.summary || '',
  ogType: 'article',
})
</script>

<template>
  <div v-if="item" class="min-h-screen">
    <InsightsEntryBody :item="item" />
    <UiCTASection heading-id="insight-news-cta-heading" :badge="insightsFinalCta.badge" :title="insightsFinalCta.title"
      :description="insightsFinalCta.description" :supporting="insightsFinalCta.supporting" :ctas="ctas" />
  </div>
</template>
