<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { growthSection } from '~/data/careers'

const growthImage = usePublicAsset(growthSection.image)
const lastIndex = growthSection.path.length - 1
</script>

<template>
  <section id="career-growth"
    class="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 section-py"
    aria-labelledby="career-growth-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-indigo-400/25 blur-3xl" />
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.12]"
      style="background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0); background-size: 22px 22px" />

    <div class="container-page relative">
      <CardHeader theme="dark" align="left" heading-id="career-growth-heading" :badge="growthSection.kicker"
        :title="growthSection.title" :description="growthSection.description"
        :classes="`${growthSection.classes} max-w-3xl`" />

      <div class="mt-8 grid grid-cols-1 items-stretch gap-5 lg:mt-10 lg:grid-cols-12 lg:gap-7">
        <div class="md:hidden">
          <ol class="grid grid-cols-3 gap-2" role="list">
            <li v-for="step in growthSection.path.slice(0, 3)" :key="step.no">
              <article class="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.08] p-2.5 text-white">
                <span
                  class="grid h-8 w-8 place-items-center rounded-lg bg-white/15 font-display text-[11px] font-extrabold text-amber-200"
                  aria-hidden="true">
                  {{ step.no }}
                </span>
                <h3 class="mt-2 font-display text-[13px] font-bold leading-tight">{{ step.title }}</h3>
                <p class="mt-1 text-[11px] leading-snug text-blue-100/80">{{ step.description }}</p>
              </article>
            </li>
          </ol>

          <figure class="mt-3 overflow-hidden rounded-2xl bg-white/[0.06] px-3 py-3 ring-1 ring-white/10">
            <figcaption class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">
              {{ growthSection.overlayTitle }}
            </figcaption>
            <img :src="growthImage" :alt="growthSection.imageAlt"
              class="mx-auto mt-2 h-auto w-full max-h-56 object-contain object-center" loading="lazy"
              decoding="async" />
          </figure>

          <ol class="mt-3 grid grid-cols-2 gap-2" role="list">
            <li v-for="(step, i) in growthSection.path.slice(3)" :key="step.no">
              <article :class="[
                'flex h-full flex-col rounded-2xl border p-3',
                i + 3 === lastIndex
                  ? 'border-white/20 bg-white text-slate-900'
                  : 'border-white/10 bg-white/[0.08] text-white',
              ]">
                <div class="flex items-center gap-2">
                  <span :class="[
                    'grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-[11px] font-extrabold',
                    i + 3 === lastIndex ? 'bg-blue-600 text-white' : 'bg-white/15 text-amber-200',
                  ]" aria-hidden="true">
                    {{ step.no }}
                  </span>
                  <h3 class="font-display text-[14px] font-bold leading-tight">{{ step.title }}</h3>
                </div>
                <p :class="[
                  'mt-1.5 text-[12px] leading-snug',
                  i + 3 === lastIndex ? 'text-slate-600' : 'text-blue-100/80',
                ]">
                  {{ step.description }}
                </p>
              </article>
            </li>
          </ol>
        </div>

        <ol class="relative hidden flex-col md:order-2 lg:order-1 md:col-span-6 md:flex" role="list">
          <li v-for="(step, i) in growthSection.path" :key="step.no" v-motion :initial="{ opacity: 0, x: -12 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 55, duration: 360 } }">
            <article :class="[
              'group relative flex items-start gap-3 rounded-2xl p-3 sm:gap-3.5 sm:p-3.5 mt-4',
              i === lastIndex
                ? 'border border-white/20 bg-white text-slate-900 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)]'
                : 'border border-white/10 bg-white/[0.08] backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/[0.14]',
            ]">
              <span :class="[
                'relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-[12px] font-extrabold sm:h-11 sm:w-11',
                i === lastIndex
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/15 text-white ring-1 ring-white/25',
              ]" aria-hidden="true">
                {{ step.no }}
              </span>
              <div class="min-w-0 flex-1 pt-0.5">
                <div class="flex items-center gap-2">
                  <h3 :class="[
                    'font-display text-[15px] font-bold leading-snug',
                    i === lastIndex ? 'text-slate-900' : 'text-white',
                  ]">
                    {{ step.title }}
                  </h3>
                  <Icon :icon="step.iconMdi"
                    :class="['h-4 w-4 shrink-0', i === lastIndex ? 'text-blue-600' : 'text-blue-100/70']"
                    aria-hidden="true" />
                </div>
                <p :class="[
                  'mt-0.5 text-[13px] leading-relaxed',
                  i === lastIndex ? 'text-slate-600' : 'text-blue-100/80',
                ]">
                  {{ step.description }}
                </p>
              </div>
            </article>
          </li>
        </ol>

        <div class="relative hidden h-full justify-center md:order-1 lg:order-1 md:col-span-6 md:flex" v-motion
          :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <figure class="relative w-full max-w-md lg:h-full lg:min-h-[22rem] lg:max-w-none lg:flex-1">
            <img :src="growthImage" :alt="growthSection.imageAlt"
              class="mx-auto h-auto w-full max-h-52 object-contain object-center sm:max-h-64 md:max-h-72 lg:absolute lg:inset-0 lg:h-full lg:max-h-none lg:p-4"
              loading="lazy" decoding="async" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
