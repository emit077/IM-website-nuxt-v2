<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { videoTestimonials, videoTestimonialsSection } from '~/data/success-stories'

const loopItems = [...videoTestimonials, ...videoTestimonials]
</script>

<template>
  <section id="video-testimonials" class="scroll-mt-24 border-y border-slate-200/80 bg-white section-py"
    aria-labelledby="video-testimonials-heading">
    <div class="container-page">
      <CardHeader align="left" heading-id="video-testimonials-heading" :badge="videoTestimonialsSection.kicker"
        :title="videoTestimonialsSection.title" :description="videoTestimonialsSection.description"
        :classes="videoTestimonialsSection.classes" />

      <div class="group relative mt-8 overflow-hidden rounded-2xl">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16"
          aria-hidden="true" />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16"
          aria-hidden="true" />

        <div
          class="flex w-max items-stretch gap-4 animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused] sm:gap-5 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
          role="list" aria-label="Video testimonials">
          <article v-for="(item, i) in loopItems" :key="`${item.id}-${i}`" role="listitem"
            class="flex w-[min(68vw,220px)] shrink-0 flex-col sm:w-[210px]">
            <button type="button" class="group/card flex h-full flex-col text-left"
              :aria-label="`Play testimonial by ${item.person}`">
              <div class="relative overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
                <img :src="item.thumb" :alt="item.person"
                  class="aspect-[4/3] w-full object-cover transition duration-300 group-hover/card:scale-[1.02]"
                  width="210" height="158" loading="lazy" decoding="async" />
                <span
                  class="absolute inset-0 grid place-items-center bg-slate-900/20 transition group-hover/card:bg-slate-900/30"
                  aria-hidden="true">
                  <span
                    class="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow-sm transition group-hover/card:scale-105">
                    <Icon icon="mdi:play" class="h-4 w-4 translate-x-0.5" />
                  </span>
                </span>
                <span
                  class="absolute bottom-2 right-2 rounded-md bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {{ item.duration }}
                </span>
              </div>

              <div class="mt-3 flex flex-1 flex-col">
                <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  {{ item.category }}
                </p>
                <p class="mt-0.5 font-display text-[15px] font-bold leading-snug text-slate-900">{{ item.person }}</p>
                <p class="mt-0.5 text-[12px] leading-snug text-slate-500">{{ item.role }}</p>
                <p class="mt-2 line-clamp-2 min-h-[2.5rem] text-[12.5px] leading-relaxed text-slate-600">
                  &ldquo;{{ item.quote }}&rdquo;
                </p>
              </div>
            </button>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
