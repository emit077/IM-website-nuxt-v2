<script setup lang="ts">
import { spModes } from '~/data/student-parent'
import QuickServiceCategoriesSection from '~/components/ui/shared/QuickServiceCategoriesSection.vue'
</script>

<template>
  <section id="learning-modes" class="relative  overflow-hidden section-surface-muted " aria-labelledby="modes-heading">
    <div class="container-page relative">
      <QuickServiceCategoriesSection :badge="spModes.badge" :title="spModes.title" :classes="spModes.classes" />
    </div>
  </section>
</template>
