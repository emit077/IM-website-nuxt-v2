<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import GradesStageSection from '~/components/grades/GradesStageSection.vue'
import { gradesExplorer, gradesStages } from '~/data/grades'
</script>

<template>
  <div>
    <section
      id="grades-covered"
      class="relative scroll-mt-28 bg-white pt-14 sm:pt-16 lg:pt-20"
      aria-labelledby="grades-explorer-heading"
    >
      <div class="container-page">
        <CardHeader
          heading-id="grades-explorer-heading"
          :badge="gradesExplorer.badge"
          :title="gradesExplorer.title"
          :description="gradesExplorer.description"
          :classes="gradesExplorer.classes"
        />
      </div>
    </section>

    <GradesStageSection
      v-for="(stage, i) in gradesStages"
      :key="stage.id"
      :stage="stage"
      :index="i"
      :next-stage="gradesStages[i + 1] ?? null"
    />
  </div>
</template>
