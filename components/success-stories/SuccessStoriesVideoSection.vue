<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import type { UiTestimonial } from '~/composables/useWebsiteContent'
import { videoTestimonialsSection } from '~/data/success-stories'

const { data: apiTestimonials } = await useWebsiteTestimonials()
const testimonials = computed(() => apiTestimonials.value ?? [])
const loopItems = computed(() => [...testimonials.value, ...testimonials.value])

const activeVideo = ref<UiTestimonial | null>(null)

function openVideo(item: UiTestimonial) {
  if (!item.video) return
  activeVideo.value = item
}

function closeVideo() {
  activeVideo.value = null
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeVideo()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section v-if="testimonials.length" id="video-testimonials" class="scroll-mt-24 border-y border-slate-200/80 bg-white section-py"
    aria-labelledby="video-testimonials-heading">
    <div class="container-page">
      <CardHeader align="left" heading-id="video-testimonials-heading" :badge="videoTestimonialsSection.kicker"
        :title="videoTestimonialsSection.title" :description="videoTestimonialsSection.description"
        :classes="videoTestimonialsSection.classes" />

      <div class="group marquee-viewport relative mt-8 rounded-2xl">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-16"
          aria-hidden="true" />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-16"
          aria-hidden="true" />

        <div
          class="marquee-track flex w-max items-stretch gap-4 animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused] sm:gap-5"
          role="list" aria-label="Video testimonials">
          <article v-for="(item, i) in loopItems" :key="`${item.id}-${i}`" role="listitem"
            class="flex w-[min(68vw,220px)] shrink-0 flex-col sm:w-[210px]"
            :class="i >= testimonials.length ? 'marquee-clone' : ''">
            <component :is="item.video ? 'button' : 'div'" :type="item.video ? 'button' : undefined"
              class="group/card flex h-full flex-col text-left"
              :aria-label="item.video ? `Play testimonial by ${item.person}` : undefined"
              @click="openVideo(item)">
              <div class="relative overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
                <img :src="item.thumb" :alt="item.person"
                  class="aspect-[4/3] w-full object-cover transition duration-300 group-hover/card:scale-[1.02]"
                  width="210" height="158" loading="lazy" decoding="async" />
                <span v-if="item.video"
                  class="absolute inset-0 grid place-items-center bg-slate-900/20 transition group-hover/card:bg-slate-900/30"
                  aria-hidden="true">
                  <span
                    class="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow-sm transition group-hover/card:scale-105">
                    <Icon icon="mdi:play" class="h-4 w-4 translate-x-0.5" />
                  </span>
                </span>
                <span v-if="item.duration"
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
            </component>
          </article>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="activeVideo?.video"
        class="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-8"
        role="dialog" aria-modal="true" :aria-label="`Testimonial by ${activeVideo.person}`" @click.self="closeVideo">
        <button type="button"
          class="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          aria-label="Close video" @click="closeVideo">
          <Icon icon="mdi:close" class="h-5 w-5" />
        </button>
        <figure class="w-full max-w-4xl">
          <video :src="activeVideo.video" class="max-h-[74vh] w-full rounded-2xl bg-black object-contain" controls
            autoplay playsinline />
          <figcaption class="mt-4 text-center">
            <p class="font-display text-sm font-semibold text-white sm:text-base">{{ activeVideo.person }}</p>
            <p class="mt-1 text-xs text-white/70">{{ activeVideo.role }}</p>
          </figcaption>
        </figure>
      </div>
    </Teleport>
  </section>
</template>
