<script setup lang="ts">
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import { servicesHero } from '~/data/services'
</script>

<template>
  <section class="relative overflow-hidden section-surface-white" aria-labelledby="services-hero-heading">
    <div class="container-page pb-14 pt-10 text-center sm:pb-16 lg:pt-16">
      <HeroHeader heading-id="services-hero-heading" :title="servicesHero.title"
        :description="servicesHero.description" variant="variant2" />
    </div>
  </section>
</template>
