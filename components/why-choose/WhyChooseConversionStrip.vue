<script setup lang="ts">
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { whyChooseConversionStrip } from '~/data/why-choose'
</script>

<template>
  <section id="book-demo" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-choose-conversion-heading">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-10 shadow-[0_24px_60px_-24px_rgba(37,99,235,0.55)] sm:px-10 sm:py-12"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />

        <div class="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div class="max-w-xl lg:max-w-2xl">
            <h2 id="why-choose-conversion-heading"
              class="font-display text-[1.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.18]">
              {{ whyChooseConversionStrip.title }}
            </h2>
            <p class="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75 sm:mt-5 sm:text-base">
              {{ whyChooseConversionStrip.description }}
            </p>
          </div>
          <div class="why-choose-conversion-ctas flex w-full shrink-0 flex-col gap-3 lg:max-w-xs lg:w-80">
            <ActionBtn v-for="cta in whyChooseConversionStrip.ctas" :key="cta.label" :variant="cta.variant"
              :href="cta.href" :label="cta.label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-conversion-ctas :deep(.btn-secondary) {
  width: 100%;
  border-color: #fff;
  background: transparent;
  color: #fff;
  box-shadow: none;
}

.why-choose-conversion-ctas :deep(.btn-secondary:hover) {
  border-color: #fff;
  background: rgb(255 255 255 / 0.1);
  color: #fff;
}
</style>
