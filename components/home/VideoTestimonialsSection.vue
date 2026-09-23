<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

withDefaults(
  defineProps<{
    /** Renders only the player, for use inside another hero. */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const { data: apiTestimonials } = await useWebsiteTestimonials()
const testimonials = computed(() => apiTestimonials.value ?? [])

const headerContent = {
  badge: 'Testimonials',
  title: 'Real Stories. Real Growth. Real Trust',
  description: 'Explore real experiences and success stories from students, parents, tutors, institutions, and channel partners who trust Indian Mentors across India.',
  classes: '!px-0 !py-0',
}

const active = ref(0)
const paused = ref(false)
const playing = ref(false)
const touchStartX = ref<number | null>(null)

const total = computed(() => testimonials.value.length)
const current = computed(() => testimonials.value[active.value]!)
const starCount = computed(() => Math.max(1, Math.min(5, Math.round(current.value?.rating || 5))))

function goTo(idx: number) {
  playing.value = false
  active.value = idx
}

function next() {
  if (!total.value) return
  playing.value = false
  active.value = (active.value + 1) % total.value
}

function prev() {
  if (!total.value) return
  playing.value = false
  active.value = (active.value - 1 + total.value) % total.value
}

const { pause, resume } = useIntervalFn(next, 5200, { immediate: false })

onMounted(() => {
  if (!paused.value) resume()
})

watch(paused, (p) => {
  if (p) pause()
  else resume()
})

watch(playing, (isPlaying) => {
  if (isPlaying) {
    paused.value = true
    pause()
  }
})

function playCurrent() {
  if (!current.value?.video) return
  playing.value = true
}

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.changedTouches[0]?.clientX ?? null
}

function onTouchEnd(e: TouchEvent) {
  if (touchStartX.value === null) return
  const endX = e.changedTouches[0]?.clientX
  if (endX === undefined) {
    touchStartX.value = null
    return
  }
  const delta = endX - touchStartX.value
  if (delta > 50) prev()
  if (delta < -50) next()
  touchStartX.value = null
}
</script>

<template>
  <section v-if="testimonials.length" :id="embedded ? undefined : 'testimonials'"
    :class="embedded ? 'mt-10 w-full text-left' : 'relative overflow-hidden section-surface-white section-py'">
    <template v-if="!embedded">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]"
        aria-hidden="true" />
      <div class="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
        aria-hidden="true" />
      <div class="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"
        aria-hidden="true" />
    </template>

    <div :class="embedded ? '' : 'container-page relative'">
      <CardHeader v-if="!embedded" :badge="headerContent.badge" :title="headerContent.title"
        :description="headerContent.description" :classes="headerContent.classes" />

      <div
        class="overflow-hidden rounded-[2rem] border border-blue-100/80 bg-white/85 p-4 shadow-[0_24px_70px_rgba(37,99,235,0.14)] backdrop-blur-xl sm:p-5 md:p-6"
        :class="embedded ? '' : 'mt-8'">
        <article :key="`testimonial-${active}`" v-motion :initial="{ opacity: 0, y: 14 }" :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }" class="grid gap-4 rounded-[1.5rem] border border-blue-100 bg-white p-3 sm:p-4 lg:grid-cols-12"
          @mouseenter="paused = true" @mouseleave="paused = false" @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd">
          <div class="relative overflow-hidden rounded-2xl lg:col-span-8">
            <video
              v-if="playing && current.video"
              :src="current.video"
              class="h-60 w-full object-cover sm:h-40 lg:min-h-[400px]"
              controls
              autoplay
              playsinline
              @ended="playing = false"
            />
            <template v-else>
              <img :src="current.thumb" :alt="`${current.person} testimonial`"
                class="h-60 w-full object-cover sm:h-40 lg:min-h-[400px]" width="800" height="600" loading="lazy"
                decoding="async" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent"
                aria-hidden="true" />
              <button
                v-if="current.video"
                type="button"
                class="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white/90 text-slate-900 shadow-xl transition hover:scale-105"
                :aria-label="`Play testimonial by ${current.person}`"
                @click="playCurrent"
              >
                ▶
              </button>
            </template>
            <span class="absolute left-3 top-3 rounded-full bg-blue-600/95 px-3 py-1 text-xs font-extrabold text-white">
              {{ current.category }}
            </span>
            <span
              v-if="current.duration"
              class="absolute right-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-extrabold text-white">
              {{ current.duration }}
            </span>
          </div>

          <div class="flex flex-col lg:col-span-4 lg:px-2">
            <div class="flex flex-1 items-center">
              <div>
                <p class="text-base leading-relaxed text-slate-600">
                  <span
                    class="items-center justify-center text-7xl font-extrabold leading-none text-blue-300 sm:text-6xl"
                    aria-hidden="true">
                    "
                  </span>
                  “{{ current.quote }}”
                </p>
                <div class="text-center">
                  <div class="mt-4 flex items-center justify-center -space-x-1" :aria-label="`${starCount} out of 5 stars`">
                    <span v-for="i in starCount" :key="`star-${i}`"
                      class="ml-[-5px] inline-flex h-7 w-7 items-center justify-center leading-none text-blue-500 sm:h-8 sm:w-8 sm:text-xl md:ml-[-10px] md:h-9 md:w-9 md:text-2xl lg:h-10 lg:w-10 lg:text-3xl"
                      aria-hidden="true">
                      ★
                    </span>
                  </div>
                  <div>
                    <p class="text-sm font-extrabold text-blue-950">{{ current.person }}</p>
                    <p class="text-xs font-semibold text-slate-500">{{ current.role }}</p>
                    <p v-if="current.result" class="mt-1 text-xs font-semibold text-blue-700">{{ current.result }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div class="mt-5 md:px-5">
          <div class="mb-2 flex items-center justify-between">
            <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">More stories</p>
            <p class="text-xs font-semibold text-slate-400 sm:hidden">Swipe</p>
          </div>

          <div
            class="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button v-for="(item, idx) in testimonials" :key="item.id || `${item.person}-${idx}`" type="button"
              class="flex min-w-[210px] snap-start items-center gap-3 rounded-2xl border p-2 text-left transition sm:min-w-[240px]"
              :class="idx === active
                ? 'border-blue-300 bg-blue-50 shadow-sm'
                : 'border-blue-100 bg-white hover:border-blue-200 hover:bg-blue-50/40'
                " @click="goTo(idx)">
              <img :src="item.thumb" :alt="item.category" class="h-14 w-16 shrink-0 rounded-xl object-cover" width="64"
                height="56" loading="lazy" decoding="async" />
              <div class="min-w-0 flex-1">
                <p class="truncate text-xs font-bold uppercase tracking-wide text-blue-700/80">
                  {{ item.category }}
                </p>
                <p class="truncate text-sm font-bold text-slate-900">{{ item.person }}</p>
                <p class="truncate text-xs text-slate-500">{{ item.role }}</p>
              </div>
            </button>
          </div>
        </div>

        <div class="mt-5 flex justify-center gap-2 md:pb-5">
          <button v-for="(item, idx) in testimonials" :key="`dot-${item.person}-${idx}`" type="button"
            :aria-label="`Go to story ${idx + 1}`" class="h-2.5 rounded-full transition-all"
            :class="idx === active ? 'w-8 bg-blue-600' : 'w-2.5 bg-blue-200 hover:bg-blue-300'" @click="goTo(idx)" />
        </div>
      </div>
    </div>
  </section>
</template>
