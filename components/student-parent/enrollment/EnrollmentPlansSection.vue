<script setup lang="ts">
import { computed, ref } from 'vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import EnrollmentComparisonTable from './EnrollmentComparisonTable.vue'
import { enrollmentPlansSection } from '~/data/student-parent'

const activeTab = ref<'overview' | 'detailed'>('overview')

const heading = computed(() =>
  activeTab.value === 'overview'
    ? enrollmentPlansSection.title
    : enrollmentPlansSection.detailedTitle,
)
</script>

<template>
  <section id="enrollment-comparison" class="relative scroll-mt-28 bg-white section-py"
    aria-labelledby="enrollment-plans-heading">
    <div class="container-page">
      <CardHeader heading-id="enrollment-plans-heading" :badge="enrollmentPlansSection.badge"
        :title="heading" :description="enrollmentPlansSection.description"
        :classes="enrollmentPlansSection.classes" />

      <div class="mt-8 flex justify-center" role="tablist" aria-label="Enrollment comparison views">
        <div class="inline-flex rounded-2xl border border-slate-200/80 bg-cream-50/80 p-1">
          <button v-for="tab in enrollmentPlansSection.tabs" :key="tab.id" type="button" role="tab"
            :aria-selected="activeTab === tab.id" :class="[
              'rounded-xl px-4 py-2 text-[13px] font-semibold transition duration-300 sm:px-5 sm:text-sm',
              activeTab === tab.id
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-blue-700',
            ]" @click="activeTab = tab.id as 'overview' | 'detailed'">
            {{ tab.label }}
          </button>
        </div>
      </div>

      <EnrollmentComparisonTable class="mt-8" :view="activeTab" />
    </div>
  </section>
</template>
