<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeader.vue'

const heroContent = {
  title: "We're Always Here for You",
  subtitle: '',
  description: 'At Indian Mentors, your academic success is our priority. Reach out today and let us help you achieve your learning goals with the right guidance and support.',
  classes: 'max-w-3xl mx-auto',
}
</script>

<template>
  <div class="container-page pt-12 sm:pt-12 lg:pt-12">
    <CardHeader heading-id="find-mentor-heading" :title="heroContent.title"
      :subtitle="heroContent.subtitle" :description="heroContent.description" :classes="heroContent.classes" />
  </div>
</template>
