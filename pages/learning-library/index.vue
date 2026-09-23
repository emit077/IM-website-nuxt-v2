<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import GradesHeroSection from '~/components/grades/GradesHeroSection.vue'
import GradesExplorerSection from '~/components/grades/GradesExplorerSection.vue'
import GradesPromiseSection from '~/components/grades/GradesPromiseSection.vue'
import GradesAdaptSection from '~/components/grades/GradesAdaptSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { gradesFinalCta } from '~/data/grades'

const route = useRoute()

function scrollToHash(behavior: ScrollBehavior = 'smooth') {
  const id = route.hash.replace(/^#/, '')
  if (!id || !import.meta.client) return
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior, block: 'start' })
}

onMounted(() => {
  nextTick(() => scrollToHash('auto'))
})

watch(() => route.hash, () => {
  nextTick(() => scrollToHash())
})

useSeoMeta({
  title: 'Learning Library — Indian Mentors',
  description:
    'Curriculum-aligned notes, worksheets, NCERT solutions, and practice packs organised by grade — from Nursery to Class 12.',
  ogTitle: 'Learning Library — Indian Mentors',
  ogDescription:
    'Browse grade-wise study resources — notes, worksheets, and practice packs aligned to each class, board, and exam goal.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <GradesHeroSection />
    <GradesExplorerSection />
    <GradesAdaptSection />
    <GradesPromiseSection />
    <FaqSectionMini category="academic-coverage" />
    <UiCTASection section-id="book-demo" heading-id="learning-library-cta-heading" :extra-anchor-ids="['counsellor']"
      badge-icon-mdi="mdi:book-education-outline" :badge="gradesFinalCta.badge" :title="gradesFinalCta.title"
      :description="gradesFinalCta.description" :supporting="gradesFinalCta.supporting" :ctas="gradesFinalCta.ctas" />
  </div>
</template>
