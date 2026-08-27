<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { tutorWhoCanJoin } from '~/data/tutors'
</script>

<template>
  <section id="who-can-join" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="who-can-join-heading">
    <div class="container-page relative">
      <div class="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        <div class="flex h-full flex-col lg:col-span-5">
          <CardHeader align="left" heading-id="who-can-join-heading" :badge="tutorWhoCanJoin.badge"
            :title="tutorWhoCanJoin.title" :description="tutorWhoCanJoin.description"
            :classes="`${tutorWhoCanJoin.classes} !max-w-none`" />
          <div class="mt-7 hidden lg:block">
            <a :href="tutorWhoCanJoin.cta.href"
              class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-blue-700">
              {{ tutorWhoCanJoin.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div class="mt-8 hidden lg:block lg:mt-auto lg:pt-10" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 120 } }">
            <article class="overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
              <ul role="list">
                <li v-for="(item, i) in tutorWhoCanJoin.highlights" :key="item.label"
                  class="flex items-start gap-3.5 px-5 py-4"
                  :class="i < tutorWhoCanJoin.highlights.length - 1 ? 'border-b border-slate-100' : ''">
                  <span
                    class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    aria-hidden="true">
                    <Icon :icon="item.iconMdi" class="h-5 w-5" />
                  </span>
                  <div class="min-w-0">
                    <p class="font-display text-[14.5px] font-bold text-slate-900">{{ item.label }}</p>
                    <p class="mt-0.5 text-[13px] leading-snug text-slate-500">{{ item.hint }}</p>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div class="lg:col-span-7">
          <ul class="grid overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-soft sm:grid-cols-2"
            role="list">
            <li v-for="(item, i) in tutorWhoCanJoin.items" :key="item.title"
              class="border-slate-100 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              :class="i < tutorWhoCanJoin.items.length - 1 ? 'border-b' : ''" v-motion :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 30, duration: 360 } }">
              <article class="flex h-full items-start gap-3.5 px-5 py-5 sm:px-6">
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                  aria-hidden="true">
                  <Icon :icon="item.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 flex justify-center lg:hidden">
        <a :href="tutorWhoCanJoin.cta.href"
          class="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-blue-700">
          {{ tutorWhoCanJoin.cta.label }}
          <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
