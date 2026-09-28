<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { jobPageCtas } from '~/data/careers'
import { formatCareerLocation, splitCareerParagraphs } from '~/composables/useCareerContent'
import type { CareerApplicationType, CareerJobDetail } from '~/types/career-api'

const props = defineProps<{ job: CareerJobDetail }>()
const emit = defineEmits<{
  apply: [type: CareerApplicationType]
}>()

const toast = useToast()
const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

const overviewImage = usePublicAsset('/assets/img/institutions/institutions-teacher-training-workshop.png')

const overviewHeading = computed(() => props.job.position || props.job.headline)
const overviewTagline = computed(() => {
  const headline = props.job.headline?.trim() || ''
  if (!headline || headline === overviewHeading.value) return ''
  return headline
})
const overviewParagraphs = computed(() => {
  const overview = splitCareerParagraphs(props.job.role_overview)
  return overview
})

const responsibilities = computed(() =>
  [...(props.job.responsibilities ?? [])].sort((a, b) => a.sequence_number - b.sequence_number),
)

const requirements = computed(() =>
  [...(props.job.requirements ?? [])].sort((a, b) => a.display_order - b.display_order),
)

const benefits = computed(() =>
  [...(props.job.benefits ?? [])].sort((a, b) => a.display_order - b.display_order),
)

const location = computed(() => formatCareerLocation(props.job.city))

function formatFactValue(value?: string | null) {
  const text = String(value || '').trim()
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const jobFacts = computed(() =>
  [
    // { label: 'Role', value: props.job.position, icon: 'mdi:briefcase-outline' },
    { label: 'Industry Type', value: props.job.industry, icon: 'mdi:domain' },
    { label: 'Department', value: props.job.department, icon: 'mdi:sitemap-outline' },
    { label: 'Employment Type', value: props.job.primary_employment_type, icon: 'mdi:clock-outline' },
    { label: 'Work Model', value: props.job.work_model, icon: 'mdi:office-building-outline' },
    { label: 'Experience', value: formatFactValue(props.job.experience), icon: 'mdi:account-star-outline' },
    { label: 'Location', value: location.value, icon: 'mdi:map-marker-outline' },
  ].filter((row) => Boolean(row.value)),
)

function markCopied() {
  copied.value = true
  if (copiedTimer) window.clearTimeout(copiedTimer)
  copiedTimer = window.setTimeout(() => {
    copied.value = false
  }, 2500)
}

async function shareJob() {
  const title = overviewHeading.value
  const text = overviewTagline.value || `Join Indian Mentors as ${title}`
  const url = import.meta.client ? window.location.href : ''
  const isPhone = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  try {
    await copyJobLink(url)
    markCopied()
    toast.success('Job link copied to clipboard', { title: 'Copied' })

    if (isPhone && typeof navigator.share === 'function') {
      await navigator.share({ title, text, url })
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') return
    toast.error('Unable to share this job right now')
  }
}

async function copyJobLink(url: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url)
      return
    } catch {
      // Fall through to the input-based copy for unfocused or restricted documents.
    }
  }

  const input = document.createElement('input')
  input.value = url
  input.setAttribute('readonly', '')
  input.style.position = 'fixed'
  input.style.opacity = '0'
  document.body.appendChild(input)
  input.select()
  const copied = document.execCommand('copy')
  input.remove()
  if (!copied) throw new Error('Copy failed')
}
</script>

<template>
  <div class="space-y-0">
    <section id="role-overview" class="section-surface-muted section-py-compact" aria-labelledby="job-overview-heading">
      <div class="container-page">
        <div class="">
          <figure
            class="relative overflow-hidden rounded-xl  border-blue-900/10 bg-blue-950 shadow-[0_22px_48px_-26px_rgba(15,23,42,0.28)]"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
            <img :src="overviewImage" alt="Indian Mentors team collaborating in a professional training session"
              class="h-56 w-full object-cover object-center sm:h-80 lg:h-[16rem]" width="1600" height="600" />
            <div aria-hidden="true"
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/100 via-blue-800/85 to-blue-700/80" />
            <figcaption
              class="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-7 lg:p-8">
              <div class="min-w-0">
                <h2 id="job-overview-heading" class="font-display mt-2 text-2xl font-bold text-white sm:text-4xl">
                  {{ overviewHeading }}
                </h2>
                <p v-if="overviewTagline" class="mt-1.5 text-base font-medium text-blue-100 sm:text-md">
                  {{ overviewTagline }}
                </p>
              </div>
              <div class="flex shrink-0 items-center gap-2.5">
                <button type="button"
                  class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-2.5 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  @click="shareJob">
                  {{ copied ? 'Copied' : jobPageCtas.shareLabel }}
                  <Icon :icon="copied ? 'mdi:check' : 'mdi:share-variant-outline'" class="h-4 w-4" aria-hidden="true" />
                </button>
                <button v-if="job.is_open" type="button"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-blue-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
                  @click="emit('apply', 'Apply Now')">
                  {{ jobPageCtas.applyLabel }}
                  <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
                </button>
                <span v-else
                  class="inline-flex items-center justify-center rounded-xl bg-white/15 px-4 py-2.5 text-[13px] font-semibold text-white/80">
                  Applications closed
                </span>
              </div>
            </figcaption>
          </figure>
          <div class="mt-10">
            <dl class="mt-5 grid grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2">
              <div v-for="item in jobFacts" :key="item.label"
                class="flex items-center gap-2.5 text-[14.5px] leading-relaxed">
                <span class="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700"
                  aria-hidden="true">
                  <Icon :icon="item.icon" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <dt class="inline font-bold text-slate-800">{{ item.label }}:</dt>
                  <dd class="ml-1 inline text-slate-600">{{ item.value }}</dd>
                </div>
              </div>
            </dl>
          </div>
          <div class="mt-10">
            <p class="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Role Overview</p>
            <p v-for="paragraph in overviewParagraphs" :key="paragraph"
              class="mt-4  leading-relaxed text-slate-600 first:mt-6 text-sm sm:text-base" v-html="paragraph">
            </p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="responsibilities.length" id="responsibilities" class="bg-white section-py-compact"
      aria-labelledby="job-responsibilities-heading">
      <div class="container-page">
        <div class="mx-auto ">
          <p class="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            Key Responsibilities
          </p>
          <ul class="mt-4 grid grid-cols-1 gap-3" role="list">
            <li v-for="(item, i) in responsibilities" :key="item.id" v-motion :initial="{ opacity: 0, y: 8 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 16 + i * 24, duration: 300 } }">
              <article class="flex h-full items-start gap-3 py-2">
                <span
                  class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-[11px] font-extrabold tabular-nums text-blue-700"
                  aria-hidden="true">
                  <Icon icon="mdi:arrow-right" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-sm font-bold leading-snug text-slate-600" v-if="item.title"
                    v-html="item.title"></h3>
                  <p v-if="item.description" class="mt-1 text-sm sm:text-base leading-relaxed text-slate-600"
                    v-html="item.description"></p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section v-if="requirements.length" id="requirements" class="section-surface-muted section-py-compact"
      aria-labelledby="job-requirements-heading">
      <div class="container-page">
        <div class="mx-auto ">
          <p class="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            Requirements
          </p>
          <ul class="mt-4 grid grid-cols-1 gap-3" role="list">
            <li v-for="(item, i) in requirements" :key="item.id" v-motion :initial="{ opacity: 0, y: 8 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 16 + i * 24, duration: 300 } }">
              <article class="flex h-full items-start gap-3 py-2">
                <span
                  class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-[11px] font-extrabold tabular-nums text-blue-700"
                  aria-hidden="true">
                  <Icon icon="mdi:arrow-right" class="h-4 w-4" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-sm font-bold leading-snug text-slate-600" v-if="item.category"
                    v-html="item.category"></h3>
                  <p v-if="item.description" class="mt-1 text-sm sm:text-base leading-relaxed text-slate-600"
                    v-html="item.description"></p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section v-if="benefits.length" id="benefits" class="bg-white section-py-compact"
      aria-labelledby="job-benefits-heading">
      <div class="container-page">
        <p class="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
          Employee Benefits
        </p>
        <ul class="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-10" role="list">
          <li v-for="(item, i) in benefits" :key="item.id" v-motion :initial="{ opacity: 0, y: 8 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 16 + i * 24, duration: 300 } }">
            <article class="flex items-start gap-3 py-1.5">
              <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center text-blue-700" aria-hidden="true">
                <Icon icon="mdi:arrow-right" class="h-4 w-4" />
              </span>
              <p class="pt-1 text-sm font-medium leading-snug text-slate-700">
                {{ item.title }}
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
