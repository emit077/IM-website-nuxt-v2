<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { tutorWhoCanJoin } from '~/data/tutors'

type Accent = (typeof tutorWhoCanJoin.groups)[number]['accent']

const accentClasses: Record<Accent, { tile: string; bar: string; label: string }> = {
  blue: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover/row:bg-blue-600 group-hover/row:text-white group-hover/row:ring-blue-600',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    label: 'text-blue-600',
  },
  indigo: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover/row:bg-blue-600 group-hover/row:text-white group-hover/row:ring-blue-600',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    label: 'text-blue-600',
  },
  amber: {
    tile: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover/row:bg-blue-600 group-hover/row:text-white group-hover/row:ring-blue-600',
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    label: 'text-blue-600',
  },
}

const groupedRoles = computed(() =>
  tutorWhoCanJoin.groups.map((group) => ({
    ...group,
    items: tutorWhoCanJoin.items.filter((item) => item.group === group.id),
  })),
)
</script>

<template>
  <section id="who-can-join" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="who-can-join-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="who-can-join-heading" :badge="tutorWhoCanJoin.badge" :title="tutorWhoCanJoin.title"
        :description="tutorWhoCanJoin.description" :classes="tutorWhoCanJoin.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3" role="list">
        <li v-for="(group, i) in groupedRoles" :key="group.id" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 450 } }">
          <article
            class="join-group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6">
            <p :class="['text-[11px] font-bold uppercase tracking-[0.16em]', accentClasses[group.accent].label]">
              {{ group.label }}
            </p>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-500">{{ group.hint }}</p>

            <ul class="mt-5 flex flex-1 flex-col gap-2" role="list">
              <li v-for="item in group.items" :key="item.title">
                <article class="join-row group/row flex items-start gap-3.5 rounded-2xl p-3 sm:p-3.5">
                  <span :class="[
                    'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 transition duration-300',
                    accentClasses[group.accent].tile,
                  ]" aria-hidden="true">
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

            <div aria-hidden="true"
              :class="['mt-5 h-1 w-10 rounded-full transition-all duration-500', accentClasses[group.accent].bar]" />
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.join-group {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease,
    border-color 0.35s ease;
}

.join-group:hover {
  transform: translateY(-4px);
  border-color: rgb(191 219 254);
  box-shadow: 0 22px 44px -22px rgba(37, 99, 235, 0.35);
}

.join-group:hover>div[aria-hidden='true'] {
  width: 100%;
}

.join-row {
  transition:
    background-color 0.3s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.join-row:hover {
  background-color: rgb(248 250 252);
  transform: translateX(2px);
}

@media (prefers-reduced-motion: reduce) {

  .join-group,
  .join-row {
    transition: none;
  }

  .join-group:hover,
  .join-row:hover {
    transform: none;
  }
}
</style>
