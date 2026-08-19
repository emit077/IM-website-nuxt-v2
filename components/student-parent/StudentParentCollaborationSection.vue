<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spCollaboration } from '~/data/student-parent'

const roleTones = [
  {
    icon: 'from-blue-50 to-sky-50 text-blue-600 ring-blue-100 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white',
    chip: 'bg-blue-50 text-blue-700',
  },
  {
    icon: 'from-indigo-50 to-violet-50 text-indigo-600 ring-indigo-100 group-hover:from-indigo-600 group-hover:to-blue-700 group-hover:text-white',
    chip: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: 'from-amber-50 to-orange-50 text-amber-700 ring-amber-100 group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white',
    chip: 'bg-amber-50 text-amber-800',
  },
  {
    icon: 'from-sky-50 to-blue-50 text-sky-700 ring-sky-100 group-hover:from-sky-600 group-hover:to-blue-700 group-hover:text-white',
    chip: 'bg-sky-50 text-sky-800',
  },
] as const

const roles = spCollaboration.roles.map((role, i) => ({
  ...role,
  pos: [
    'lg:col-start-1 lg:row-start-1',
    'lg:col-start-3 lg:row-start-1',
    'lg:col-start-1 lg:row-start-3',
    'lg:col-start-3 lg:row-start-3',
  ][i],
  tone: roleTones[i],
}))

const orbitDots = [45, 135, 225, 315]
</script>

<template>
  <section id="collaboration" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="collaboration-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="collaboration-heading" :badge="spCollaboration.badge" :title="spCollaboration.title"
        :description="spCollaboration.description" :classes="spCollaboration.classes" />

      <div class="relative mx-auto mt-12 max-w-4xl">
        <div aria-hidden="true"
          class="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <span
            class="absolute left-1/2 top-1/2 size-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-xl" />
          <span
            class="collab-pulse absolute left-1/2 top-1/2 size-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/50" />
          <span
            class="absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200/70" />
          <span
            class="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80" />
          <span v-for="deg in orbitDots" :key="deg" class="absolute left-1/2 top-1/2 size-[24rem]"
            :style="{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }">
            <span class="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/80" />
          </span>
        </div>

        <div
          class="relative grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:gap-5">
          <template v-for="(role, i) in roles" :key="role.title">
            <article :class="role.pos"
              class="group flex h-full flex-col items-center rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-5 text-center shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-6"
              v-motion :initial="{ opacity: 0, y: 16 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
              <span
                :class="['grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ring-1 transition duration-300 sm:h-14 sm:w-14', role.tone.icon]"
                aria-hidden="true">
                <Icon :icon="role.iconMdi" class="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <h3 class="mt-3 font-display text-[15px] font-bold text-slate-900 sm:mt-4 sm:text-lg">{{ role.title }}</h3>
              <ul class="mt-3 flex flex-wrap justify-center gap-1.5" role="list">
                <li v-for="action in role.actions" :key="action"
                  :class="['rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide sm:text-[11px]', role.tone.chip]">
                  {{ action }}
                </li>
              </ul>
            </article>

            <div v-if="i === 1"
              class="col-span-2 flex items-center justify-center lg:col-span-1 lg:col-start-2 lg:row-start-2"
              v-motion :initial="{ opacity: 0, scale: 0.92 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 160, duration: 500 } }">
              <div
                class="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 py-4 text-white shadow-[0_20px_50px_-24px_rgba(29,78,216,0.55)] sm:gap-4 sm:px-6 lg:size-[15.5rem] lg:flex-col lg:rounded-full lg:px-7 lg:py-0 lg:text-center lg:shadow-[0_28px_60px_-22px_rgba(29,78,216,0.6)]">
                <span aria-hidden="true"
                  class="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <span aria-hidden="true"
                  class="pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-amber-300/20 blur-2xl" />

                <span
                  class="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-amber-200 ring-1 ring-white/20 lg:h-12 lg:w-12 lg:rounded-2xl"
                  aria-hidden="true">
                  <Icon icon="mdi:chart-timeline-variant" class="h-5 w-5 lg:h-6 lg:w-6" />
                </span>
                <div class="relative min-w-0">
                  <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-100/85 sm:text-[11px]">
                    {{ spCollaboration.objectiveLabel }}
                  </p>
                  <p class="mt-1 font-display text-sm font-extrabold leading-snug sm:text-base lg:text-lg">
                    {{ spCollaboration.objective }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collab-pulse {
  animation: collab-pulse 4.5s ease-in-out infinite;
}

@keyframes collab-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }

  50% {
    transform: translate(-50%, -50%) scale(1.08);
    opacity: 0.25;
  }
}

@media (prefers-reduced-motion: reduce) {
  .collab-pulse {
    animation: none;
  }
}
</style>
