<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  aboutLeadershipSection,
  type LeadershipProfile,
} from '~/data/about'

const placeholderImage = usePublicAsset('assets/img/about/team-placeholder.png')

const { data: team } = await useWebsiteTeam()
const leaders = computed(() => team.value ?? [])

const executivePresets = [
  {
    key: 'ceo' as const,
    test: (person: LeadershipProfile) =>
      person.id === 'founder' || /founder|chief executive|\bceo\b/i.test(person.role),
    bannerClass: 'bg-[linear-gradient(100deg,#f7faff_0%,#e7f0ff_46%,#d4e4ff_100%)]',
    glowClass: 'bg-[#93b4f5]/35',
    patternClass: 'bg-[radial-gradient(circle,rgba(37,99,235,0.28)_1.15px,transparent_1.25px)]',
    accentClass: 'text-blue-700',
  },
  {
    key: 'coo' as const,
    test: (person: LeadershipProfile) =>
      person.id === 'coo' || /\bcoo\b|chief operating/i.test(person.role),
    bannerClass: 'bg-[linear-gradient(100deg,#fcfbff_0%,#f3efff_46%,#e6defe_100%)]',
    glowClass: 'bg-[#c4b5fd]/40',
    patternClass: 'bg-[radial-gradient(circle,rgba(109,40,217,0.22)_1.15px,transparent_1.25px)]',
    accentClass: 'text-violet-700',
  },
]

function displayName(name: string) {
  return name.replace(/^\s*Mr\.?\s+/i, '').trim()
}

const spotlightCards = computed(() =>
  executivePresets.flatMap((preset) => {
    const person = leaders.value.find(preset.test)
    if (!person) return []
    const socials = [
      person.linkedin
        ? {
          label: 'LinkedIn',
          href: person.linkedin,
          icon: 'mdi:linkedin',
          iconClass: 'h-[18px] w-[18px] text-[#0A66C2]',
        }
        : null,
      person.x
        ? {
          label: 'X',
          href: person.x,
          icon: 'simple-icons:x',
          iconClass: 'h-3.5 w-3.5 text-slate-900',
        }
        : null,
    ].filter((item): item is NonNullable<typeof item> => Boolean(item))

    const bio = (person.message?.trim() || person.bio?.trim() || '')
    const apiBio = bio && bio !== person.role?.trim() ? bio : ''

    return [{
      id: person.id,
      name: displayName(person.name),
      role: person.role?.trim() || '',
      quote: person.quote?.trim() || '',
      bio: apiBio,
      roleTags: person.roleTags,
      image: person.image || placeholderImage,
      bannerClass: preset.bannerClass,
      glowClass: preset.glowClass,
      patternClass: preset.patternClass,
      accentClass: preset.accentClass,
      socials,
    }]
  }),
)

const spotlightIds = computed(() => new Set(spotlightCards.value.map((card) => card.id)))
const gridLeaders = computed(() => leaders.value.filter((person) => !spotlightIds.value.has(person.id)))

function portraitSrc(leader?: LeadershipProfile) {
  return leader?.image || placeholderImage
}

function portraitClass(leader?: LeadershipProfile) {
  return leader?.image
    ? 'object-cover object-[center_18%]'
    : 'object-contain object-bottom bg-white'
}

function summary(leader?: LeadershipProfile) {
  if (!leader) return ''
  const text = (leader.message?.trim() || leader.bio || '').trim()
  if (!text || text === leader.role?.trim()) return ''
  return text
}

function onPortraitError(event: Event) {
  const img = event.target as HTMLImageElement
  if (img.src !== placeholderImage) img.src = placeholderImage
}
</script>

<template>
  <section id="leadership" class="relative bg-[#f4f7fb] section-py" aria-labelledby="leadership-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="leadership-heading" :badge="aboutLeadershipSection.badge"
          :title="aboutLeadershipSection.title" :description="aboutLeadershipSection.description"
          :classes="aboutLeadershipSection.classes" />
      </div>

      <div class="mt-10 space-y-4 sm:mt-12">
        <div v-if="spotlightCards.length" class="space-y-16 pt-14 md:space-y-20 md:pt-16" aria-label="Leadership">
          <article v-for="(card, i) in spotlightCards" :key="card.id"
            class="relative rounded-[1.75rem] shadow-[0_22px_48px_-30px_rgba(15,23,42,0.45)]" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 50, duration: 420 } }">
            <div class="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/80">
              <div class="absolute inset-0" :class="card.bannerClass" />
              <div aria-hidden="true"
                class="pointer-events-none absolute top-1/2 h-[150%] w-[58%] -translate-y-1/2 rounded-full blur-2xl"
                :class="[card.glowClass, i % 2 === 0 ? '-left-10' : '-right-10']" />
              <div aria-hidden="true"
                class="pointer-events-none absolute inset-y-0 hidden w-[46%] bg-[length:15px_15px] opacity-70 md:block"
                :class="[card.patternClass, i % 2 === 0 ? 'left-0' : 'right-0']" />
            </div>

            <div class="relative grid md:min-h-[19.5rem]" :class="i % 2 === 0
              ? 'md:grid-cols-[minmax(13.5rem,0.72fr)_minmax(0,1.15fr)]'
              : 'md:grid-cols-[minmax(0,1.15fr)_minmax(13.5rem,0.72fr)]'">
              <div class="order-2 flex flex-col justify-center px-6 py-7 sm:px-8 lg:px-10 lg:py-9"
                :class="i % 2 === 0 ? 'md:order-2' : 'md:order-1'">
                <p class="text-[12px] font-bold uppercase tracking-[0.14em]" :class="card.accentClass">
                  {{ card.role }}
                </p>
                <p v-if="card.quote"
                  class="mt-3 max-w-xl font-display text-[1.55rem] font-extrabold leading-[1.25] tracking-tight text-slate-950 sm:text-[1.85rem]">
                  {{ card.quote }}
                </p>
                <p v-if="card.bio" class="mt-3 max-w-lg text-[14px] leading-relaxed text-slate-600">
                  {{ card.bio }}
                </p>

                <div class="mt-6">
                  <h3 class="font-display text-lg font-extrabold leading-none tracking-tight text-slate-950">
                    {{ card.name }}
                  </h3>
                  <p v-if="card.roleTags" class="mt-2 text-[13px] font-bold text-slate-600">
                    {{ card.roleTags }}
                  </p>
                </div>
              </div>

              <div class="relative order-1 h-72 sm:h-80 md:h-auto" :class="i % 2 === 0 ? 'md:order-1' : 'md:order-2'">
                <img :src="card.image" :alt="card.name"
                  class="absolute bottom-0 left-1/2 z-10 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_22px_rgba(15,23,42,0.16)] md:h-[120%]"
                  :class="i % 2 === 0 ? 'md:left-[4%] md:right-auto md:translate-x-0' : 'md:left-auto md:right-[2%] md:translate-x-0'"
                  loading="lazy" decoding="async" @error="onPortraitError" />
              </div>
            </div>

            <div v-if="card.socials.length"
              class="absolute bottom-4 right-4 z-20 flex items-center gap-2 sm:bottom-5 sm:right-5">
              <a v-for="social in card.socials" :key="social.label" :href="social.href" target="_blank"
                rel="noopener noreferrer"
                class="grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white shadow-[0_8px_16px_-10px_rgba(15,23,42,0.45)] transition hover:bg-slate-50"
                :aria-label="`${card.name} on ${social.label}`">
                <Icon :icon="social.icon" :class="social.iconClass" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
        <div v-if="gridLeaders.length" class="grid gap-4 sm:grid-cols-2 pt-10"
          :class="gridLeaders.length > 3 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'" aria-label="Leadership team">
          <article v-for="(leader, i) in gridLeaders" :key="leader.id"
            class="rounded-[1.6rem] bg-white px-6 py-7 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.22)] mb-2"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 140 + i * 40, duration: 400 } }">
            <div class="mx-auto h-24 w-24 overflow-hidden rounded-full bg-slate-100 ring-4 ring-blue-50">
              <img :src="portraitSrc(leader)" :alt="leader.name" class="h-full w-full" :class="portraitClass(leader)"
                loading="lazy" decoding="async" @error="onPortraitError" />
            </div>
            <h3 class="mt-4 font-display text-xl font-extrabold tracking-tight text-slate-950">
              {{ leader.name }}
            </h3>
            <p class="mt-1 text-[13px] font-bold text-slate-600">{{ leader.role }}</p>
            <p v-if="summary(leader)" class="mt-3 text-[13px] leading-relaxed text-slate-400">
              {{ summary(leader) }}
            </p>
            <a v-if="leader.linkedin" :href="leader.linkedin" target="_blank" rel="noopener noreferrer"
              class="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A66C2] transition hover:gap-2"
              :aria-label="`View ${leader.name} on LinkedIn`">
              <Icon icon="mdi:linkedin" class="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
              <Icon icon="solar:arrow-right-linear" class="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </article>
        </div>
        <div
          class="flex flex-col items-start justify-between gap-4 rounded-[1.6rem] bg-white px-6 py-5 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:flex-row sm:items-center sm:px-7">
          <div class="flex items-start gap-3 sm:items-center">
            <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-50 text-slate-400">
              <Icon icon="solar:users-group-rounded-linear" class="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p class="font-display text-base font-bold text-slate-900">
                Different backgrounds. A shared purpose.
              </p>
              <p class="mt-0.5 text-[13px] text-slate-500">
                Together, we are making quality mentorship accessible to every learner, everywhere.
              </p>
            </div>
          </div>
          <NuxtLink to="/careers"
            class="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0b1b36] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-blue-700">
            Explore Career Opportunities
            <Icon icon="solar:arrow-right-linear" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
