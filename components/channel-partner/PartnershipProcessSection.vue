<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { processSection, processSteps } from '~/data/channel-partner'
</script>

<template>
  <section id="partnership-process" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="partnership-process-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-slate-100/80 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="partnership-process-heading" :badge="processSection.kicker" :title="processSection.title"
        :description="processSection.description" :classes="processSection.classes" />

      <div
        class="relative mx-auto mt-10 max-w-5xl overflow-hidden rounded-[28px] border border-slate-200/90 bg-gradient-to-b from-slate-50/90 via-white to-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.2]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;" />

        <!-- Step details -->
        <ol class="relative divide-y divide-slate-100" role="list">
          <li v-for="(step, i) in processSteps" :key="step.no"
            class="group relative grid gap-4 px-5 py-6 transition-colors duration-300 hover:bg-blue-50/40 sm:px-8 sm:py-7 lg:grid-cols-[auto_1fr] lg:gap-8 xl:px-12"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 60, duration: 450 } }">
            <div class="flex items-start gap-4 lg:w-56 lg:shrink-0">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 lg:hidden"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>
              <div class="min-w-0">
                <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                  Step {{ step.no.replace(/^0/, '') }}
                </p>
                <h3 class="mt-1 font-display text-base font-bold text-slate-900 sm:text-lg">
                  {{ step.title }}
                </h3>
              </div>
            </div>

            <div class="min-w-0 pl-16 sm:pl-[4.25rem] lg:flex lg:items-start lg:gap-6 lg:pl-0">
              <span
                class="mt-0.5 hidden h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 lg:grid"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>

              <div class="min-w-0 flex-1">
                <p class="text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
                  {{ step.description }}
                </p>

                <ul v-if="step.points" class="mt-4 flex flex-wrap gap-2" role="list">
                  <li v-for="point in step.points" :key="point"
                    class="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700 shadow-sm">
                    <IconCheck class="h-3 w-3 shrink-0 text-blue-600" />
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>

        <div class="relative border-t border-slate-100 bg-[#f6f8fd]/70 px-5 py-6 text-center sm:px-8">
          <a href="#partner-register"
            class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
            <Icon icon="mdi:account-plus-outline" class="h-4 w-4" aria-hidden="true" />
            Start Your Partnership Application
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
