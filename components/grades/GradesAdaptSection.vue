<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { gradesAdapt } from '~/data/grades'
</script>

<template>
  <section
    id="how-mentoring-changes"
    class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="grades-adapt-heading"
  >
    <div class="container-page">
      <CardHeader
        heading-id="grades-adapt-heading"
        :badge="gradesAdapt.badge"
        :title="gradesAdapt.title"
        :description="gradesAdapt.description"
        :classes="gradesAdapt.classes"
      />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" role="list">
        <li
          v-for="(phase, i) in gradesAdapt.phases"
          :key="phase.id"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 400 } }"
        >
          <a
            :href="phase.href"
            class="adapt-card group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-cream-50/70 p-5 no-underline shadow-sm sm:p-6"
          >
            <div class="flex items-start justify-between gap-3">
              <span
                class="grid h-11 w-11 place-items-center rounded-2xl bg-white font-display text-[13px] font-extrabold text-blue-700 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span
                class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                aria-hidden="true"
              >
                <Icon :icon="phase.iconMdi" class="h-5 w-5" />
              </span>
            </div>

            <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              {{ phase.label }}
            </p>
            <h3 class="mt-1 font-display text-base font-bold text-slate-900 sm:text-lg">
              {{ phase.title }}
            </h3>
            <p class="mt-1 text-[12px] font-semibold text-slate-500">{{ phase.stages }}</p>
            <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-600">
              {{ phase.description }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-700">
              View this stage
              <Icon
                icon="mdi:arrow-right"
                class="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.adapt-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.adapt-card:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  background-color: #fff;
  box-shadow: 0 18px 36px -22px rgba(37, 99, 235, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .adapt-card {
    transition: none;
  }

  .adapt-card:hover {
    transform: none;
  }
}
</style>
