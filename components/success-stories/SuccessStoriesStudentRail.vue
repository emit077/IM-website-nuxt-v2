<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { studentStories, type StoryAccent } from '~/data/success-stories'

const loopItems = [...studentStories, ...studentStories]

const cardGradients: Record<StoryAccent, string> = {
  blue: 'from-blue-600 to-indigo-700',
  emerald: 'from-emerald-600 to-teal-700',
  amber: 'from-amber-500 to-orange-600',
  violet: 'from-violet-600 to-purple-700',
  rose: 'from-rose-500 to-pink-600',
}

const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1']
</script>

<template>
  <section id="student-stories" class="scroll-mt-20 overflow-hidden bg-cream-50 py-14 sm:py-16"
    aria-labelledby="student-rail-heading">
    <div class="container-page">
      <CardHeader align="left" heading-id="student-rail-heading" classes="!px-0 !py-0 max-w-lg"
        badge="Student journeys" title="Scroll the <span class='text-gradient-brand'>transformation reel</span>"
        description="Real before-and-after academic outcomes from students across India." accent="blue" />

      <div class="group relative mt-8 overflow-hidden rounded-2xl">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream-50 to-transparent sm:w-16"
          aria-hidden="true" />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream-50 to-transparent sm:w-16"
          aria-hidden="true" />

        <div
          class="flex w-max items-stretch gap-5 animate-marquee [animation-duration:55s] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
          role="list" aria-label="Student journey stories">
          <article v-for="(story, i) in loopItems" :key="`${story.id}-${i}`" role="listitem" :class="[
            'flex w-[min(85vw,300px)] shrink-0 flex-col transition duration-500 hover:-translate-y-1 hover:rotate-0 sm:w-[280px]',
            rotations[i % studentStories.length],
          ]">
            <div
              class="flex h-full flex-col rounded-sm bg-white p-3 pb-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80">
              <div
                :class="['relative overflow-hidden rounded-sm bg-gradient-to-br p-5 text-white', cardGradients[story.accent]]">
                <span class="font-display text-5xl font-black text-white/20">
                  {{ String((i % studentStories.length) + 1).padStart(2, '0') }}
                </span>

                <div class="mt-4 flex items-center gap-3">
                  <span
                    class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20 text-sm font-bold backdrop-blur-sm">
                    {{ story.initials }}
                  </span>
                  <div class="min-w-0">
                    <h3 class="font-display text-base font-bold">{{ story.name }}</h3>
                    <p class="text-[12px] text-white/80">{{ story.subtitle }}</p>
                  </div>
                </div>

                <div
                  class="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 rounded-xl bg-black/20 px-3 py-3 backdrop-blur-sm">
                  <p class="col-start-1 row-start-1 text-[9px] font-bold uppercase tracking-wider text-white/60">
                    Before
                  </p>
                  <p
                    class="col-start-3 row-start-1 text-right text-[9px] font-bold uppercase tracking-wider text-emerald-200">
                    After
                  </p>
                  <p class="col-start-1 row-start-2 font-display text-base font-extrabold leading-tight">
                    {{ story.beforeLabel }}
                  </p>
                  <div class="col-start-2 row-start-1 row-span-2 flex items-center justify-center px-1">
                    <Icon icon="mdi:arrow-right-bold" class="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                  </div>
                  <p
                    class="col-start-3 row-start-2 text-right font-display text-base font-extrabold leading-tight text-emerald-100">
                    {{ story.afterLabel }}
                  </p>
                </div>
              </div>

              <div class="mt-4 flex flex-1 flex-col">
                <p
                  class="min-h-[2.75rem] text-center font-display text-[13px] font-semibold leading-snug text-slate-800">
                  {{ story.result }}
                </p>
                <p class="mt-2 min-h-[3.25rem] text-center text-[12px] italic leading-relaxed text-slate-500">
                  &ldquo;{{ story.feedback }}&rdquo;
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
