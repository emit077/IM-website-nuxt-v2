<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { cultureSection } from '~/data/careers'

const featuredSrc = usePublicAsset(cultureSection.featured.src)

const gallery = computed(() =>
  cultureSection.gallery.map((item) => ({
    ...item,
    src: usePublicAsset(item.src),
  })),
)

const lightboxItems = computed(() => [
  { src: featuredSrc, alt: cultureSection.featured.alt, caption: cultureSection.featured.caption },
  ...gallery.value,
])

const activeIndex = ref<number | null>(null)
const activeItem = computed(() => (activeIndex.value === null ? null : lightboxItems.value[activeIndex.value] ?? null))

const valueAccent: Record<(typeof cultureSection.values)[number]['accent'], string> = {
  blue: 'bg-blue-50 text-blue-600 ring-blue-100',
  violet: 'bg-violet-50 text-violet-600 ring-violet-100',
  emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
}

function openAt(index: number) {
  activeIndex.value = index
}

function closeLightbox() {
  activeIndex.value = null
}

function showPrev() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + lightboxItems.value.length) % lightboxItems.value.length
}

function showNext() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % lightboxItems.value.length
}

function onKeydown(event: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowLeft') showPrev()
  if (event.key === 'ArrowRight') showNext()
}

watch(activeIndex, (index) => {
  if (!import.meta.client) return
  document.body.style.overflow = index === null ? '' : 'hidden'
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <section id="work-culture" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="work-culture-heading">
    <div class="container-page relative">
      <CardHeader heading-id="work-culture-heading" align="left" :badge="cultureSection.kicker"
        :title="cultureSection.title" :description="cultureSection.subtitle" :classes="cultureSection.classes" />

      <div class="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-12">
        <div class="lg:col-span-6" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
          <button type="button"
            class="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 text-left shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:aspect-[16/9] sm:min-h-[280px] lg:min-h-[340px]"
            :aria-label="`View ${cultureSection.featured.caption}`" @click="openAt(0)">
            <img :src="featuredSrc" :alt="cultureSection.featured.alt"
              class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy" decoding="async" />
            <div aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <span class="absolute inset-x-0 bottom-0 p-4 font-display text-sm font-bold text-white sm:p-5 sm:text-base">
              {{ cultureSection.featured.caption }}
            </span>
          </button>
        </div>

        <div class="lg:col-span-6" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 420 } }">
          <h3 class="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            {{ cultureSection.storyTitle }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            {{ cultureSection.storyBody }}
          </p>
          <ul class="mt-6 space-y-3.5" role="list">
            <li v-for="item in cultureSection.highlights" :key="item.text"
              class="flex items-start gap-3 text-[14px] font-medium text-slate-700">
              <Icon :icon="item.iconMdi" class="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div id="life-at-indian-mentors" class="mt-14 lg:mt-16">
        <div class="mx-auto max-w-2xl text-center">
          <h3 class="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {{ cultureSection.galleryTitle }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
            {{ cultureSection.galleryDescription }}
          </p>
        </div>

        <ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5" role="list"
          aria-label="Workplace photo gallery">
          <li v-for="(item, i) in gallery" :key="item.src" v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 380 } }">
            <button type="button"
              class="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 text-left shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              :aria-label="`View ${item.caption}`" @click="openAt(i + 1)">
              <img :src="item.src" :alt="item.alt"
                class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy" decoding="async" />
              <div aria-hidden="true"
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
              <span class="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <span class="block font-display text-[15px] font-bold text-white">{{ item.caption }}</span>
                <span class="mt-0.5 block text-[12.5px] leading-snug text-white/80">{{ item.description }}</span>
              </span>
            </button>
          </li>
        </ul>
      </div>

      <ul class="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:gap-10" role="list">
        <li v-for="(item, i) in cultureSection.values" :key="item.title" class="text-center" v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 380 } }">
          <span :class="['mx-auto grid h-12 w-12 place-items-center rounded-2xl ring-1', valueAccent[item.accent]]"
            aria-hidden="true">
            <Icon :icon="item.iconMdi" class="h-6 w-6" />
          </span>
          <h3 class="font-display mt-4 text-base font-bold text-slate-900">{{ item.title }}</h3>
          <p class="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{{ item.description }}</p>
        </li>
      </ul>
    </div>

    <Teleport to="body">
      <div v-if="activeItem"
        class="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-8"
        role="dialog" aria-modal="true" :aria-label="activeItem.caption" @click.self="closeLightbox">
        <button type="button"
          class="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          aria-label="Close gallery" @click="closeLightbox">
          <Icon icon="mdi:close" class="h-5 w-5" />
        </button>
        <button type="button"
          class="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          aria-label="Previous photo" @click="showPrev">
          <Icon icon="mdi:chevron-left" class="h-6 w-6" />
        </button>
        <figure class="relative max-h-[82vh] w-full max-w-5xl">
          <img :src="activeItem.src" :alt="activeItem.alt"
            class="mx-auto max-h-[74vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)]" />
          <figcaption class="mt-4 text-center font-display text-sm font-semibold text-white sm:text-base">
            {{ activeItem.caption }}
          </figcaption>
        </figure>
        <button type="button"
          class="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          aria-label="Next photo" @click="showNext">
          <Icon icon="mdi:chevron-right" class="h-6 w-6" />
        </button>
      </div>
    </Teleport>
  </section>
</template>
