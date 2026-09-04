<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spLearningGoals } from '~/data/student-parent'
</script>

<template>
  <section id="learning-goals" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="learning-goals-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="learning-goals-heading" :badge="spLearningGoals.badge" :title="spLearningGoals.title"
        :description="spLearningGoals.description" :classes="spLearningGoals.classes" />

      <div class="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-7">
        <div class="min-w-0 lg:col-span-5" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <figure
            class="goal-visual relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-blue-200/60 bg-gradient-to-br from-blue-50 via-white to-cream-50 shadow-soft">
            <div aria-hidden="true"
              class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-300/25 blur-2xl" />

            <div class="relative min-h-[17rem] flex-1 overflow-hidden">
              <img :src="usePublicAsset(spLearningGoals.image)" :alt="spLearningGoals.imageAlt"
                class="absolute inset-0 h-full w-full scale-105 object-cover object-center" loading="lazy"
                decoding="async" />
            </div>

            <figcaption
              class="relative m-4 rounded-2xl text-center border border-blue-100 bg-white/85 p-4 backdrop-blur sm:m-5 sm:p-5">
              <p class="font-display text-[18px] font-bold text-slate-900">
                {{ spLearningGoals.imageCaption }}
              </p>
              <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                {{ spLearningGoals.imageNote }}
              </p>
            </figcaption>
          </figure>
        </div>

        <ul class="flex min-w-0 flex-col gap-3 lg:col-span-7" role="list">
          <li v-for="(item, i) in spLearningGoals.items" :key="item.id" v-motion :initial="{ opacity: 0, x: 18 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 60 + i * 70, duration: 420 } }">
            <article
              class="goal-row group flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-cream-50/60 p-4 sm:p-5">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>

              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 class="font-display text-[15px] font-bold text-slate-900 sm:text-base">
                    {{ item.title }}
                  </h3>
                  <p
                    class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] leading-none text-blue-800 ring-1 ring-blue-100">
                    {{ item.goal }}
                  </p>
                </div>
                <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                  {{ item.description }}
                </p>
              </div>

              <Icon icon="mdi:arrow-right"
                class="mt-1 hidden h-4 w-4 shrink-0 text-blue-500 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
                aria-hidden="true" />
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.goal-row {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease,
    background-color 0.35s ease;
}

.goal-row:hover {
  transform: translateX(4px);
  border-color: rgb(191 219 254);
  background-color: #fff;
  box-shadow: 0 18px 38px -22px rgba(37, 99, 235, 0.35);
}

.goal-visual {
  transition: box-shadow 0.5s ease;
}

.goal-visual:hover {
  box-shadow: 0 26px 55px -28px rgba(37, 99, 235, 0.4);
}

@media (prefers-reduced-motion: reduce) {

  .goal-row,
  .goal-visual {
    transition: none;
  }

  .goal-row:hover {
    transform: none;
  }
}
</style>
