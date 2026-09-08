<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { seApproach } from '~/data/special-educators'
</script>

<template>
  <section
    id="our-approach"
    class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-approach-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl"
    />

    <div class="container-page relative">
      <CardHeader
        heading-id="se-approach-heading"
        :badge="seApproach.badge"
        :title="seApproach.title"
        :description="seApproach.description"
        :classes="seApproach.classes"
      />

      <ol class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5" role="list">
        <li
          v-for="(pillar, i) in seApproach.pillars"
          :key="pillar.id"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }"
        >
          <article
            class="approach-pillar group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                  {{ String(i + 1).padStart(2, '0') }} · {{ pillar.label }}
                </p>
                <p class="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                  {{ pillar.hint }}
                </p>
              </div>
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 font-display text-sm font-extrabold text-blue-700 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>

            <ul class="mt-5 flex flex-1 flex-col gap-2" role="list">
              <li v-for="item in pillar.items" :key="item.title">
                <article class="approach-row flex items-start gap-3.5 rounded-2xl p-3 sm:p-3.5">
                  <span
                    class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
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

            <div
              aria-hidden="true"
              class="approach-bar mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
            />
          </article>
        </li>
      </ol>

      <p
        class="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 text-center text-[14px] font-medium leading-relaxed text-slate-600 sm:text-[15px]"
      >
        {{ seApproach.closing }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.approach-pillar {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.approach-pillar:hover {
  transform: translateY(-4px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.35);
}

.approach-pillar:hover .approach-bar {
  width: 100%;
}

.approach-bar {
  transition: width 0.5s ease;
}

.approach-row {
  transition:
    background-color 0.3s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.approach-row:hover {
  background-color: rgb(248 250 252);
  transform: translateX(2px);
}

@media (prefers-reduced-motion: reduce) {
  .approach-pillar,
  .approach-row,
  .approach-bar {
    transition: none;
  }

  .approach-pillar:hover,
  .approach-row:hover {
    transform: none;
  }
}
</style>
