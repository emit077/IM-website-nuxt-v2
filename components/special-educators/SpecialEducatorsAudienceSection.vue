<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seAudience } from '~/data/special-educators'
</script>

<template>
  <section
    id="who-can-benefit"
    class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="se-audience-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/45 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-amber-100/35 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="se-audience-heading"
        :badge="seAudience.badge"
        :title="seAudience.title"
        :description="seAudience.description"
        :classes="seAudience.classes"
      />

      <ul class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2" role="list">
        <li
          v-for="(item, i) in seAudience.featured"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 50, duration: 420 } }"
        >
          <article
            class="audience-featured group relative flex h-full overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cream-50 p-6 sm:p-7"
          >
            <div class="relative min-w-0 flex-1">
              <p
                class="inline-flex items-center rounded-full bg-blue-600 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-white"
              >
                {{ item.tag }}
              </p>
              <h3 class="mt-3 font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                {{ item.title }}
              </h3>
              <p class="mt-2 max-w-md text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                {{ item.description }}
              </p>
            </div>
            <span
              class="grid h-14 w-14 shrink-0 place-items-center self-start rounded-2xl bg-white text-blue-600 shadow-soft ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true"
            >
              <Icon :icon="item.iconMdi" class="h-7 w-7" />
            </span>
          </article>
        </li>
      </ul>

      <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li
          v-for="(item, i) in seAudience.items"
          :key="item.title"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 35, duration: 380 } }"
        >
          <article
            class="audience-card group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft sm:p-5"
          >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true"
            >
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <div class="min-w-0 pt-0.5">
              <h3 class="font-display text-[15px] font-bold leading-snug text-slate-900">
                {{ item.title }}
              </h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">
                {{ item.description }}
              </p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.audience-featured,
.audience-card {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.audience-featured:hover,
.audience-card:hover {
  transform: translateY(-3px);
  border-color: rgb(191 219 254);
  box-shadow: 0 20px 40px -22px rgba(37, 99, 235, 0.32);
}

@media (prefers-reduced-motion: reduce) {
  .audience-featured,
  .audience-card {
    transition: none;
  }

  .audience-featured:hover,
  .audience-card:hover {
    transform: none;
  }
}
</style>
