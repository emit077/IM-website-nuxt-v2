<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { whyChooseAdvantage } from '~/data/why-choose'

type WhyChooseItem = {
  title: string
  meaning?: string
  description?: string
  iconMdi: string
  badge?: string
}

const props = withDefaults(
  defineProps<{
    showHeader?: boolean
    showCtas?: boolean
    badge?: string
    title?: string
    description?: string
    headingId?: string
    sectionId?: string
    headerClasses?: string
    classes?: string
    layout?: 'split' | 'grid'
    items?: WhyChooseItem[]
    surfaceClass?: string
  }>(),
  {
    showHeader: true,
    showCtas: true,
    badge: whyChooseAdvantage.kicker,
    title: whyChooseAdvantage.title,
    description: whyChooseAdvantage.description,
    headingId: 'advantage-heading',
    sectionId: 'advantage',
    headerClasses: whyChooseAdvantage.classes,
    layout: 'split',
    items: () => [],
    surfaceClass: 'section-surface-muted',
  },
)

const headerClass = computed(() => props.classes ?? props.headerClasses)
const isGrid = computed(() => props.layout === 'grid')
const isWhiteSurface = computed(() => props.surfaceClass.includes('white'))
const cardSurfaceClass = computed(() =>
  isWhiteSurface.value
    ? 'bg-cream-50/70 hover:bg-white'
    : 'bg-white',
)

const advantageItems = computed(() => {
  const source: WhyChooseItem[] = props.items.length ? props.items : whyChooseAdvantage.advantages
  return source.map((item) => ({
    title: item.title,
    meaning: item.meaning ?? item.description ?? '',
    iconMdi: item.iconMdi,
    badge: item.badge,
  }))
})

const advantageImage = usePublicAsset(whyChooseAdvantage.image)
</script>

<template>
  <section :id="props.sectionId"
    :class="['relative scroll-mt-28 overflow-hidden section-py-compact', props.surfaceClass]"
    :aria-labelledby="props.showHeader ? props.headingId : undefined"
    :aria-label="props.showHeader ? undefined : 'Why choose Indian Mentors'">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />

    <div class="container-page relative">
      <div v-if="isGrid">
        <CardHeader v-if="props.showHeader" :heading-id="props.headingId" :badge="props.badge" :title="props.title"
          :description="props.description" :classes="headerClass" />

        <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-5" role="list">
          <li v-for="(adv, i) in advantageItems" :key="adv.title" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
            <article
              :class="['group flex h-full flex-col rounded-[1.25rem] border border-slate-200/80 p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-5', cardSurfaceClass]">
              <span
                class="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true">
                <Icon :icon="adv.iconMdi" class="h-5 w-5" />
              </span>
              <!-- <span
                v-if="adv.badge"
                class="mt-4 inline-flex w-fit items-center rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                {{ adv.badge }}
              </span> -->
              <h3 class="font-display text-base font-bold text-slate-900" :class="adv.badge ? 'mt-2' : 'mt-4'">
                <span class="text-gradient-brand">{{ adv.title.charAt(0) }}</span>{{ adv.title.slice(1) }}
              </h3>
              <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ adv.meaning }}</p>
            </article>
          </li>
        </ul>

        <div v-if="props.showCtas" class="mt-6 flex flex-wrap justify-center gap-3">
          <ActionBtn v-for="cta in whyChooseAdvantage.ctas" :key="cta.label" :variant="cta.variant" :href="cta.href"
            :label="cta.label" :icon="cta.icon" />
        </div>
      </div>

      <div v-else class="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
        <div class="lg:col-span-4 lg:h-full" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
          <div class="group relative mx-auto max-w-md overflow-hidden lg:mx-0 lg:h-full lg:max-w-none rounded-4xl ">
            <img :src="advantageImage" :alt="whyChooseAdvantage.imageAlt"
              class="w-full object-cover object-center object-top transition duration-700 group-hover:scale-[1.03] lg:absolute lg:inset-0 lg:h-full lg:w-full"
              loading="lazy" decoding="async" />
            <span
              class="absolute bottom-4 left-4 right-4 inline-flex items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2.5 shadow-soft backdrop-blur-sm sm:right-auto sm:max-w-[85%]">
              <span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/30"
                aria-hidden="true">
                <Icon icon="mdi:shield-star-outline" class="h-4 w-4" />
              </span>
              <span class="pr-1 font-display text-[13px] font-bold leading-snug text-slate-900">
                {{ whyChooseAdvantage.imageBadge }}
              </span>
            </span>
          </div>
        </div>

        <div class="lg:col-span-8" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 70, duration: 520 } }">
          <CardHeader v-if="props.showHeader" :heading-id="props.headingId" align="left" :badge="props.badge"
            :title="props.title" :description="props.description" :classes="headerClass" />

          <ul class="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3" role="list">
            <li v-for="(adv, i) in advantageItems" :key="adv.title" v-motion :initial="{ opacity: 0, y: 12 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 45, duration: 400 } }">
              <article
                :class="['group flex h-full items-start gap-3 rounded-xl border border-slate-200/80 p-3 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-3.5', cardSurfaceClass]">
                <span
                  class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                  aria-hidden="true">
                  <Icon :icon="adv.iconMdi" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-sm font-bold text-slate-900">
                    {{ adv.title }}
                  </h3>
                  <p class="mt-0.5 text-[12.5px] leading-snug text-slate-500">{{ adv.meaning }}</p>
                </div>
              </article>
            </li>
          </ul>

          <div class="mt-5 grid grid-cols-2 gap-2.5 text-left">
            <ActionBtn v-for="cta in whyChooseAdvantage.ctas" :key="cta.label" class="!w-full !justify-start sm:!w-full"
              :variant="cta.variant" :href="cta.href" :label="cta.label" :icon="cta.icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
