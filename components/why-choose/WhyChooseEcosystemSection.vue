<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { whyChooseEcosystem } from '~/data/why-choose'

const ecosystemImage = usePublicAsset(whyChooseEcosystem.image)
</script>

<template>
  <section id="ecosystem" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="ecosystem-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="ecosystem-heading" :badge="whyChooseEcosystem.kicker"
        :title="whyChooseEcosystem.title" :description="whyChooseEcosystem.description"
        :classes="`${whyChooseEcosystem.classes} mx-auto max-w-3xl`" />

      <figure class="relative mx-auto mt-6 max-w-5xl sm:mt-8" v-motion :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 560 } }">
        <div class="ecosystem-blend relative">
          <img :src="ecosystemImage" :alt="whyChooseEcosystem.imageAlt"
            class="relative z-[1] h-auto w-full object-contain mix-blend-multiply"
            loading="lazy" decoding="async" width="1536" height="1024" />
        </div>
        <figcaption class="sr-only">
          Academic ecosystem flow with ten connected steps.
        </figcaption>
      </figure>

      <!-- Accessible step list for screen readers (visual content is in the image) -->
      <ol class="sr-only" role="list">
        <li v-for="(step, i) in whyChooseEcosystem.steps" :key="step.title">
          {{ String(i + 1).padStart(2, '0') }}. {{ step.title }} — {{ step.subtitle }}
        </li>
      </ol>

      <p
        class="mx-auto mt-6 max-w-2xl text-center text-sm font-medium leading-relaxed text-slate-600 sm:mt-8 sm:text-base">
        {{ whyChooseEcosystem.keyMessage }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.ecosystem-blend {
  /* Soft edge fade so the white plate dissolves into the section */
  -webkit-mask-image: radial-gradient(
    ellipse 92% 88% at 50% 50%,
    #000 55%,
    rgba(0, 0, 0, 0.85) 75%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 92% 88% at 50% 50%,
    #000 55%,
    rgba(0, 0, 0, 0.85) 75%,
    transparent 100%
  );
}
</style>
