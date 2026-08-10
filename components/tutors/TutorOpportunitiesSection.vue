<script setup lang="ts">
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import { browseStudentsSection } from '~/data/tutors'
</script>

<template>
  <BrowseMentorsSection mode="students" section-id="browse-students" :badge="browseStudentsSection.badge"
    :title="browseStudentsSection.title" :description="browseStudentsSection.description"
    :classes="browseStudentsSection.classes" />
</template>
