<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { seProcess } from '~/data/special-educators'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
const accentClasses: Record<string, { tile: string; text: string; bar: string }> = {
  blue: { tile: 'bg-blue-100', text: 'text-blue-700', bar: 'bg-blue-500' },
  indigo: { tile: 'bg-sky-100', text: 'text-sky-700', bar: 'bg-sky-500' },
  violet: { tile: 'bg-violet-100', text: 'text-violet-700', bar: 'bg-violet-500' },
  emerald: { tile: 'bg-emerald-100', text: 'text-emerald-700', bar: 'bg-emerald-500' },
  amber: { tile: 'bg-amber-100', text: 'text-amber-700', bar: 'bg-amber-500' },
  rose: { tile: 'bg-rose-100', text: 'text-rose-700', bar: 'bg-rose-500' },
}
</script>

<template>
  <section id="special-education-process" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="se-process-heading">
    <div class="container-page relative">
      <CardHeader heading-id="se-process-heading" :badge="seProcess.badge" :title="seProcess.title"
        :description="seProcess.description" :classes="seProcess.classes" />

      <ol class="mx-auto mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
        <li v-for="(step, i) in seProcess.steps" :key="step.no" class="relative min-w-0" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }">
          <article v-if="step.cta"
            class="process-cta-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-5 text-white shadow-[0_22px_48px_-26px_rgba(37,99,235,0.65)] sm:p-6">
            <div aria-hidden="true"
              class="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            <p class="relative mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              Get Started
            </p>
            <h3 class="relative mt-1 font-display text-[15px] font-bold leading-snug text-white sm:text-base">
              {{ step.title }}
            </h3>
            <p
              class="relative mt-1.5 line-clamp-2 min-h-[2.6em] text-[13px] leading-snug text-white/80 sm:text-[13.5px]">
              {{ step.description }}
            </p>
            <div class="relative mt-auto pt-5">
              <a :href="step.cta.href"
                class="inline-flex w-fit items-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-[12.5px] font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
                {{ step.cta.label }}
                <IconArrowRight class="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>
          </article>

          <article v-else
            class="process-card group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <div class="flex items-start justify-between gap-3">
              <span :class="[
                'grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-[13px] font-extrabold sm:h-12 sm:w-12 sm:text-sm',
                accentClasses[step.accent].tile,
                accentClasses[step.accent].text,
              ]" aria-hidden="true">
                {{ step.no }}
              </span>
              <span
                class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>
            </div>

            <p v-if="Number(step.no) != Number(seProcess.steps.length)"
              class="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
              Step {{ Number(step.no) }}
            </p>
            <h3 class="mt-1 font-display text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
              {{ step.title }}
            </h3>
            <p class="mt-1.5 line-clamp-2 min-h-[2.6em] text-[13px] leading-snug text-slate-500 sm:text-[13.5px]">
              {{ step.description }}
            </p>
            <span aria-hidden="true" :class="['mt-5 h-1 w-8 rounded-full', accentClasses[step.accent].bar]" />
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.process-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease,
    border-color 0.3s ease;
}

.process-card:hover,
.process-cta-card:hover {
  transform: translateY(-3px);
}

.process-card:hover {
  border-color: rgb(191 219 254);
  box-shadow: 0 18px 36px -22px rgba(37, 99, 235, 0.3);
}

.process-cta-card {
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;
}

.process-cta-card:hover {
  box-shadow: 0 22px 44px -20px rgba(37, 99, 235, 0.55);
}

@media (prefers-reduced-motion: reduce) {

  .process-card,
  .process-cta-card {
    transition: none;
  }

  .process-card:hover,
  .process-cta-card:hover {
    transform: none;
  }
}
</style>
