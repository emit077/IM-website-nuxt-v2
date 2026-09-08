<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seMethodology } from '~/data/special-educators'
</script>

<template>
  <section
    id="teaching-methodology"
    class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="se-methodology-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="se-methodology-heading"
        :badge="seMethodology.badge"
        :title="seMethodology.title"
        :description="seMethodology.description"
        :classes="seMethodology.classes"
      />

      <ol class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
        <li
          v-for="(item, i) in seMethodology.items"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 380 } }"
        >
          <article
            class="method-row group flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-cream-50/50 p-4 sm:p-5"
          >
            <span
              class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white font-display text-[13px] font-extrabold text-blue-700 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
              aria-hidden="true"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <div class="min-w-0 flex-1">
              <div class="flex items-start gap-2.5">
                <span class="mt-0.5 text-blue-600" aria-hidden="true">
                  <Icon :icon="item.iconMdi" class="h-5 w-5" />
                </span>
                <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900">
                  {{ item.title }}
                </h3>
              </div>
              <p class="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                {{ item.description }}
              </p>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.method-row {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.method-row:hover {
  transform: translateX(4px);
  border-color: rgb(191 219 254);
  background-color: #fff;
  box-shadow: 0 16px 34px -20px rgba(37, 99, 235, 0.32);
}

@media (prefers-reduced-motion: reduce) {
  .method-row {
    transition: none;
  }

  .method-row:hover {
    transform: none;
  }
}
</style>
