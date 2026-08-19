<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import EnrollmentComparisonTable from '~/components/student-parent/enrollment/EnrollmentComparisonTable.vue'
import { enrollmentPlansSection, spEnrollmentPreview } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="enrollment-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="enrollment-preview-heading" :badge="enrollmentPlansSection.badge"
        :title="enrollmentPlansSection.title" :description="spEnrollmentPreview.description"
        :classes="enrollmentPlansSection.classes" />

      <EnrollmentComparisonTable class="mt-10" />
    </div>
  </section>
</template>
