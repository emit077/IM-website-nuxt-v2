<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { internshipsSection } from '~/data/careers'
</script>

<template>
  <section
    id="internship-opportunities"
    class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="internships-heading"
  >
    <div class="container-page relative">
      <CardHeader
        heading-id="internships-heading"
        :badge="internshipsSection.kicker"
        :title="internshipsSection.title"
        :description="internshipsSection.description"
        :classes="internshipsSection.classes"
      />

      <div class="mt-8 sm:mt-10">
        <CardHeader
          :badge="internshipsSection.whoCanApply.kicker"
          classes="!px-0 !py-0 mb-5"
        />

        <ol class="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li
            v-for="(item, i) in internshipsSection.whoCanApply.items"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 30, duration: 360 } }"
          >
            <article
              class="internship-row group flex h-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 sm:px-4"
            >
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white font-display text-[12px] font-extrabold text-blue-700 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="shrink-0 text-blue-600" aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="min-w-0 font-display text-[14.5px] font-bold leading-snug text-slate-900 sm:text-[15px]">
                {{ item.title }}
              </h3>
            </article>
          </li>
        </ol>
      </div>

      <p class="mx-auto mt-6 max-w-3xl text-center text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
        {{ internshipsSection.whoCanApply.note }}
      </p>

      <div class="mt-6 flex justify-center">
        <a
          :href="internshipsSection.cta.href"
          class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900"
        >
          <Icon icon="mdi:briefcase-plus-outline" class="h-4 w-4" aria-hidden="true" />
          {{ internshipsSection.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.internship-row {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.internship-row:hover {
  transform: translateX(4px);
  border-color: rgb(191 219 254);
  box-shadow: 0 16px 34px -20px rgba(37, 99, 235, 0.32);
}

@media (prefers-reduced-motion: reduce) {
  .internship-row {
    transition: none;
  }

  .internship-row:hover {
    transform: none;
  }
}
</style>
