<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { spDemo } from '~/data/student-parent'

const afterTones = [
  'bg-emerald-50 text-emerald-600 ring-emerald-100',
  'bg-blue-50 text-blue-600 ring-blue-100',
  'bg-sky-50 text-sky-600 ring-sky-100',
] as const
</script>

<template>
  <section id="free-demo" class="relative scroll-mt-28 overflow-hidden section-surface-white section-py"
    aria-labelledby="demo-heading">
    <div class="container-page relative">
      <CardHeader heading-id="demo-heading" :badge="spDemo.badge" :title="spDemo.title"
        :description="spDemo.description" :classes="spDemo.classes" />

      <div class="mt-6 grid items-stretch gap-3 lg:grid-cols-2 lg:gap-4">
        <div class="relative min-h-[16rem] sm:min-h-[18rem] lg:min-h-0" v-motion :initial="{ opacity: 0, x: -18 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 520 } }">
          <figure
            class="relative h-full overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-slate-100 shadow-soft lg:absolute lg:inset-0">
            <img :src="usePublicAsset(spDemo.image)" :alt="spDemo.imageAlt"
              class="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
            <span class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"
              aria-hidden="true" />
            <figcaption class="absolute inset-x-0 bottom-0 p-4">
              <p class="font-display text-base font-extrabold text-white uppercase">{{ spDemo.imageCaption }}</p>
              <!-- <p class="mt-0.5 text-[13px] font-medium text-white/80">{{ spDemo.imageNote }}</p> -->
            </figcaption>
          </figure>
          <span
            class="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 shadow-sm ring-1 ring-blue-100 sm:left-4 sm:top-4">
            <Icon icon="mdi:play-circle-outline" class="h-3.5 w-3.5" aria-hidden="true" />
            Free Demo
          </span>
        </div>

        <div class="flex h-full min-w-0 flex-col gap-2.5">
          <ul class="flex flex-col gap-2.5" role="list">
            <li v-for="(item, i) in spDemo.after" :key="item.title" v-motion :initial="{ opacity: 0, y: 14 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 50, duration: 400 } }">
              <article
                class="flex w-full items-center gap-3 rounded-[1.15rem] border border-slate-200/80 bg-white px-3.5 py-3 shadow-soft">
                <span :class="['grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1', afterTones[i]]"
                  aria-hidden="true">
                  <Icon :icon="item.iconMdi" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <h4 class="font-display text-sm font-bold text-slate-900">{{ item.title }}</h4>
                  <p class="mt-0.5 text-[12.5px] leading-snug text-slate-600">{{ item.description }}</p>
                </div>
              </article>
            </li>
          </ul>

          <div
            class="relative mt-auto overflow-hidden rounded-[1.25rem] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 px-4 py-4 shadow-[0_20px_48px_-24px_rgba(29,78,216,0.5)] sm:px-5"
            v-motion :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
            <span aria-hidden="true"
              class="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:28px_28px]" />

            <div
              class="relative flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <div class="min-w-0">
                <h3 class="font-display text-lg font-extrabold tracking-tight text-white">
                  {{ spDemo.banner.title }}
                </h3>
                <p class="mt-1 text-[13px] leading-snug text-blue-50" v-html="spDemo.banner.description">
                </p>
              </div>
              <a :href="spDemo.cta.href"
                class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
                <span class="grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-white" aria-hidden="true">
                  <Icon icon="mdi:play" class="h-3.5 w-3.5 translate-x-px" />
                </span>

                {{ spDemo.cta.label }}
                <IconArrowRight class="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
