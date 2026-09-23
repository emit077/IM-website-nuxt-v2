<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { aboutLeadership, aboutLeadershipSection, type LeadershipProfile } from '~/data/about'

const placeholderImage = usePublicAsset('assets/img/about/team-placeholder.png')
const purposeImage = usePublicAsset('assets/img/about/better-mentorship-card.jpg')

const founderHighlights = [
  { icon: 'solar:graph-up-linear', label: 'Strategy & Vision' },
  { icon: 'solar:settings-linear', label: 'Operations & Governance' },
  { icon: 'solar:flag-2-linear', label: 'Growth & Impact' },
  { icon: 'solar:users-group-rounded-linear', label: 'People & Culture' },
] as const

const { data: team } = await useWebsiteTeam(aboutLeadership)
const leaders = computed(() => (team.value?.length ? team.value : aboutLeadership))

const founderProfile = aboutLeadership.find((person) => person.id === 'founder')
const featured = computed(() => leaders.value.find((person) => person.id === 'founder') ?? leaders.value[0])
const isFounderCard = computed(() => featured.value?.id === 'founder')
const featuredName = computed(() =>
  isFounderCard.value ? founderProfile?.name || featured.value?.name : featured.value?.name,
)
const featuredRoleLine = computed(() =>
  isFounderCard.value ? founderProfile?.role || featured.value?.role : featured.value?.role,
)
const featuredCredentials = computed(() =>
  isFounderCard.value ? founderProfile?.credentials : undefined,
)
const gridLeaders = computed(() => leaders.value.filter((person) => person.id !== featured.value?.id))

const featuredBio = computed(() => summary(featured.value))
const featuredPullQuote = computed(() => {
  const line = featured.value?.inTheirWords?.find(
    (item) => item && item !== featured.value?.role && item !== featuredBio.value,
  )
  return line || 'Building a trusted ecosystem where every student can find the right mentor.'
})

function portraitSrc(leader?: LeadershipProfile) {
  return leader?.image || placeholderImage
}

function portraitClass(leader?: LeadershipProfile) {
  return leader?.image
    ? 'object-cover object-[center_20%]'
    : 'object-contain object-bottom bg-white'
}

function featuredPortraitClass(leader?: LeadershipProfile) {
  const src = portraitSrc(leader)
  return src.includes('founder-afroj')
    ? 'object-contain object-bottom'
    : portraitClass(leader)
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
  <section id="leadership" class="relative overflow-hidden bg-[#f7f9fc] section-py"
    aria-labelledby="leadership-heading">
    <p aria-hidden="true"
      class="pointer-events-none absolute right-6 top-16 hidden max-w-[7rem] text-right font-display text-[13px] leading-5 text-slate-300 lg:block">
      People<br />Purpose<br />Progress
    </p>

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="leadership-heading" :badge="aboutLeadershipSection.badge"
          :title="aboutLeadershipSection.title" :description="aboutLeadershipSection.description"
          :classes="aboutLeadershipSection.classes" />
      </div>

      <div v-if="featured" class="mt-10 space-y-4 sm:mt-12">
        <div class="grid gap-4 md:grid-cols-12" aria-label="Founder spotlight">
          <article
            class="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-[#0F174A] via-brand-primary to-[#60A5FA] md:col-span-6 lg:col-span-4"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40, duration: 420 } }">
            <img :src="portraitSrc(featured)" :alt="featured.name"
              class="absolute inset-0 h-full w-full transition duration-700" :class="featuredPortraitClass(featured)"
              loading="lazy" decoding="async" @error="onPortraitError" />
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07122b] via-[#07122b]/75 to-transparent px-5 pb-5 pt-20 text-center">
              <h3 class="font-display text-2xl font-bold tracking-tight text-white">
                {{ featuredName }}
              </h3>
              <p class="mt-1 text-[13px] font-semibold leading-snug text-white/90">
                {{ featuredRoleLine }}
              </p>
              <p v-if="featuredCredentials" class="mt-1 text-[11px] font-medium leading-snug text-white/75">
                {{ featuredCredentials }}
              </p>
            </div>
          </article>

          <article
            class="relative overflow-hidden rounded-[1.6rem] bg-white px-6 py-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)] sm:px-8 sm:py-12 lg:col-span-5 md:col-span-6"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 420 } }">
            <Icon icon="mdi:format-quote-close"
              class="absolute right-6 top-5 h-12 w-12 text-slate-100 sm:right-8 sm:h-14 sm:w-14" aria-hidden="true" />

            <p class="font-display text-lg font-medium leading-snug text-slate-800">
              “{{ featuredPullQuote }}”
            </p>
            <p v-if="featuredBio" class="mt-3 text-[14px] leading-relaxed text-slate-500">
              {{ featuredBio }}
            </p>

            <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-100 pt-5" role="list">
              <li v-for="item in founderHighlights" :key="item.label"
                class="flex items-center gap-2 text-[12px] font-semibold text-slate-500">
                <span class="grid h-7 w-7 place-items-center rounded-full bg-slate-50 text-slate-400">
                  <Icon :icon="item.icon" class="h-4 w-4" aria-hidden="true" />
                </span>
                {{ item.label }}
              </li>
            </ul>

            <a v-if="featured.linkedin" :href="featured.linkedin" target="_blank" rel="noopener noreferrer"
              class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0b1b36] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-blue-700"
              :aria-label="`View ${featured.name} on LinkedIn`">
              <Icon icon="mdi:linkedin" class="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
              <Icon icon="solar:arrow-right-linear" class="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <aside
            class="relative min-h-[22rem] overflow-hidden rounded-[1.6rem] bg-[#eef5ff] lg:col-span-3  hidden lg:block"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 120, duration: 420 } }">
            <img :src="purposeImage" alt="Better Mentorship. Brighter Futures."
              class="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
          </aside>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Leadership team">
          <article v-for="(leader, i) in gridLeaders" :key="leader.id"
            class="rounded-[1.6rem] bg-white px-6 py-7 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.22)]"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 140 + i * 40, duration: 400 } }">
            <div class="mx-auto h-20 w-20 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-50">
              <img :src="portraitSrc(leader)" :alt="leader.name" class="h-full w-full" :class="portraitClass(leader)"
                loading="lazy" decoding="async" @error="onPortraitError" />
            </div>
            <h3 class="mt-4 font-display text-lg font-bold tracking-tight text-slate-900">
              {{ leader.name }}
            </h3>
            <p class="mt-1 text-[13px] font-medium text-slate-500">{{ leader.role }}</p>
            <p v-if="summary(leader)" class="mt-3 line-clamp-3 text-[13px] leading-relaxed text-slate-400">
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
