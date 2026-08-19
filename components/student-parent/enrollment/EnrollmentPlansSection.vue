<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import EnrollmentComparisonTable from './EnrollmentComparisonTable.vue'
import { enrollmentPlansSection } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-comparison" class="relative scroll-mt-28 bg-white section-py"
    aria-labelledby="enrollment-plans-heading">
    <div class="container-page">
      <CardHeader heading-id="enrollment-plans-heading" :badge="enrollmentPlansSection.badge"
        :title="enrollmentPlansSection.title" :description="enrollmentPlansSection.description"
        :classes="enrollmentPlansSection.classes" />

      <EnrollmentComparisonTable class="mt-10" />
    </div>
  </section>
</template>
