<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { emailSupport, phoneSupport } from '~/data/contact'

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'Coming soon — Indian Mentors',
  description: 'Indian Mentors opens on 15 November 2026 at 1:00 PM IST.',
  robots: 'noindex, nofollow',
})

/** 15 November 2026, 1:00 PM India Standard Time. */
const LAUNCH_AT = new Date('2026-11-15T11:30:00+05:30').getTime()
const LAUNCH_LABEL = '15 November 2026 · 1:00 PM IST'

const logo = usePublicAsset('/assets/img/logo/IM-logo-black.svg')
const { phase, active } = useLaunchCurtain()

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/indianmentors/', icon: 'mdi:instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/indianmentors', icon: 'mdi:facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCwZbfBmijkVQDnsQmKhc_-A', icon: 'mdi:youtube' },
  { label: 'X', href: 'https://x.com/indian_mentors', icon: 'simple-icons:x' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/indianmentors/', icon: 'mdi:linkedin' },
] as const

const route = useRoute()
const previewRaw = Array.isArray(route.query.preview) ? route.query.preview[0] : route.query.preview
const parsedPreview = Number(previewRaw)
const previewSeconds = Number.isFinite(parsedPreview)
  ? Math.min(180, Math.max(0, Math.floor(parsedPreview)))
  : 0
const previewing = ref(false)

const now = ref(Date.now())
const launchAt = ref(
  import.meta.client && previewSeconds >= 5
    ? Date.now() + previewSeconds * 1000
    : LAUNCH_AT,
)
let timer: ReturnType<typeof setInterval> | undefined

const totalSeconds = computed(() => Math.max(0, Math.floor((launchAt.value - now.value) / 1000)))
const done = computed(() => totalSeconds.value === 0 && now.value >= launchAt.value)
const finale = computed(() => totalSeconds.value > 0 && totalSeconds.value <= 9)

const dayCount = computed(() => Math.floor(totalSeconds.value / 86400))
const hourCount = computed(() => Math.floor((totalSeconds.value % 86400) / 3600))
const minuteCount = computed(() => Math.floor((totalSeconds.value % 3600) / 60))
const seconds = computed(() => totalSeconds.value % 60)

function pair(value: number) {
  const text = String(Math.max(0, value)).padStart(2, '0')
  return [text[0] ?? '0', text[1] ?? '0']
}

/** Extra motion begins as each unit reaches zero: last day, then last hour, then last minute. */
const finalDay = computed(() => !done.value && dayCount.value === 0)
const finalHour = computed(() => finalDay.value && hourCount.value === 0)
const finalMinute = computed(() => finalHour.value && minuteCount.value === 0)

const units = computed(() => [
  { label: 'Days', value: dayCount.value, hot: finalDay.value },
  { label: 'Hour', value: hourCount.value, hot: finalHour.value },
  { label: 'Min', value: minuteCount.value, hot: finalMinute.value },
  { label: 'Sec', value: seconds.value, hot: finalMinute.value },
]
  .filter((unit) => unit.value > 0)
  .map((unit) => ({ ...unit, digits: pair(unit.value) })))

const timerLabel = computed(() => {
  if (done.value) return 'Indian Mentors is open'
  return `${dayCount.value} days, ${hourCount.value} hours, ${minuteCount.value} minutes, and ${seconds.value} seconds until ${LAUNCH_LABEL}`
})

const stageLabel = computed(() => {
  if (done.value) return 'It’s time'
  if (finale.value) return 'Final countdown'
  if (finalMinute.value) return 'Final minute'
  if (finalHour.value) return 'Final hour'
  if (finalDay.value) return 'Last day'
  return ''
})

const heading = computed(() => {
  if (done.value) return 'We’re open'
  if (finale.value) return 'Get ready…'
  if (finalMinute.value) return 'We are almost there...'
  if (finalHour.value) return 'The final hour'
  if (finalDay.value) return 'The last day'
  return 'We’re coming soon…'
})

const description = computed(() => {
  if (done.value) return 'The wait is over. Open the curtain and step into Indian Mentors.'
  if (finale.value) return 'The doors open in a few seconds.'
  if (finalMinute.value) return 'Seconds are all that remain.'
  if (finalHour.value) return 'Less than an hour until Indian Mentors opens.'
  if (finalDay.value) return 'This is the final day before we open.'
  return 'Verified tutors, structured learning, and support for families, tutors, and partners.'
})

const liveNote = ref('')
const revealing = ref(false)
const revealBtn = ref<HTMLButtonElement | null>(null)

watch(finalDay, (on) => {
  if (on && !finalHour.value) liveNote.value = 'Last day of the countdown.'
})

watch(finalHour, (on) => {
  if (on && !finalMinute.value) liveNote.value = 'Final hour.'
})

watch(finalMinute, (on) => {
  if (on && !finale.value) liveNote.value = 'Final minute.'
})

watch(finale, (on) => {
  if (on) liveNote.value = 'Final countdown. 9 seconds remaining.'
})

watch(done, async (on) => {
  if (!on) return
  liveNote.value = 'Indian Mentors is open. Use the reveal button to enter the site.'
  await nextTick()
  const current = document.activeElement
  if (!current || current === document.body) revealBtn.value?.focus()
})

function reveal() {
  if (revealing.value || !done.value) return
  revealing.value = true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    navigateTo('/')
    return
  }
  active.value = true
  phase.value = 'closing'
}

onMounted(() => {
  previewing.value = previewSeconds >= 5
  now.value = Date.now()
  timer = setInterval(() => {
    const next = Date.now()
    if (next >= launchAt.value) {
      now.value = launchAt.value
      if (timer) clearInterval(timer)
      timer = undefined
      return
    }
    now.value = next
  }, 200)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <header class="top px-10 py-5">
    <img :src="logo" alt="Indian Mentors" class="logo" />
    <!-- <p class="contact">
      <a :href="`tel:${phoneSupport.number.tel}`">{{ phoneSupport.number.display }}</a>
      <span class="sep" aria-hidden="true">/</span>
      <a class="mail" :href="`mailto:${emailSupport.address}`">{{ emailSupport.address }}</a>
    </p> -->
  </header>
  <div class="page">
    <article class="card">
      <ClientOnly>
        <div class="hero" :class="{
          'is-final-day': finalDay,
          'is-final-hour': finalHour,
          'is-final-minute': finalMinute,
          'is-finale': finale,
          'is-done': done,
        }" role="timer" aria-live="off" :aria-label="timerLabel" :data-seconds="totalSeconds">
          <div v-if="!done" class="wordmark text-center" aria-hidden="true">
            <span class="word">Coming Soon</span>
          </div>
          <p v-if="stageLabel" class="kicker">{{ stageLabel }}</p>
          <div class="mark-stage">
            <div v-if="!done" class="clock-row">
              <template v-for="(unit, index) in units" :key="unit.label">
                <span v-if="index > 0" class="colon" aria-hidden="true">:</span>
                <div class="unit" :class="{ hot: unit.hot }">
                  <span v-if="unit.hot" :key="`${unit.label}-${unit.value}`" class="shock" aria-hidden="true" />
                  <div class="digits">
                    <UiFlipDigit v-for="(digit, digitIndex) in unit.digits" :key="`${unit.label}-${digitIndex}`"
                      :digit="digit" />
                  </div>
                  <span class="unit-label">{{ unit.label }}</span>
                </div>
              </template>
            </div>
            <button v-else ref="revealBtn" type="button" class="reveal" :disabled="revealing" @click="reveal">
              <h3 class="text-center ">Reveal<br />Now</h3>
              <!-- <svg class="reveal-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg> -->
            </button>
          </div>

          <div class="copy">
            <h1>{{ heading }}</h1>
            <p class="lede">{{ description }}</p>
          </div>

          <p class="sr-only" aria-live="polite">{{ liveNote }}</p>
        </div>

        <template #fallback>
          <div class="hero" aria-hidden="true">
            <p class="kicker quiet">Opening soon</p>
            <div class="wordmark">
              <span class="word">Coming</span>
              <div class="seconds-wrap">
                <p class="sec-label">Seconds</p>
              </div>
              <span class="word">Soon</span>
            </div>
          </div>
        </template>
      </ClientOnly>

      <footer class="foot">
        <p class="follow">Follow Indian Mentors</p>
        <nav class="socials" aria-label="Indian Mentors on social media">
          <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
            target="_blank" rel="noopener noreferrer">
            <Icon :icon="social.icon" class="social-icon" aria-hidden="true" />
          </a>
        </nav>
        <p v-if="previewing" class="preview-note">Preview countdown</p>
      </footer>
    </article>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.25rem;
  background: #fff;
  color: #161616;
  font-family: "Plus Jakarta Sans", Inter, sans-serif;
}

.card {
  display: flex;
  width: min(1120px, 100%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
}

.blob {
  position: absolute;
  border-radius: 999px;
  background: #0a0a0a;
  pointer-events: none;
}

.blob-tl {
  top: -7.5rem;
  left: -6.5rem;
  width: 18rem;
  height: 18rem;
}

.blob-mr {
  top: 46%;
  right: -4.5rem;
  width: 11rem;
  height: 11rem;
}

.blob-br {
  right: -7rem;
  bottom: -11rem;
  width: 22rem;
  height: 22rem;
}



.top {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  height: 2rem;
  width: auto;
}

.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.35rem 0.5rem;
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.contact a {
  color: #1a1a1a;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.sep {
  color: #b5b5b5;
}

.hero {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.mark-stage {
  --digit-w: clamp(3.4rem, 6.2vw, 4.8rem);
  --digit-h: clamp(4.6rem, 8.4vw, 6.5rem);
  --digit-fs: clamp(2.8rem, 5.4vw, 4.15rem);
  position: relative;
  display: grid;
  width: 100%;
  place-items: center;
}

.clock-row {
  position: relative;
  z-index: 1;
  display: flex;
  grid-area: 1 / 1;
  align-items: flex-start;
  justify-content: center;
  gap: 0.45rem;
}

.unit {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.unit .digits {
  gap: 0.38rem;
}

.unit.hot .digits {
  animation: awaken 0.7s ease, live 1.05s ease-in-out 0.7s infinite;
}

.slot {
  /* display: grid; */
  height: 1.05em;
  /* overflow: hidden; */
  font-size: clamp(2.15rem, 4.6vw, 3.15rem);
  font-weight: 700;
  /* letter-spacing: -0.05em; */
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.slot-value {
  grid-area: 1 / 1;
}

.tick-enter-active,
.tick-leave-active {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease;
}

.tick-enter-from {
  opacity: 0;
  transform: translateY(-75%);
}

.tick-leave-to {
  opacity: 0;
  transform: translateY(75%);
}

.unit-label {
  margin-top: 0.38rem;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #a3a3a3;
}

.colon {
  display: flex;
  height: var(--digit-h);
  align-items: center;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 500;
  line-height: 1;
  color: #1a1a1a;
}

.kicker {
  margin: 0 0 0.85rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.34em;
  text-indent: 0.34em;
  text-transform: uppercase;
  color: #111;
  animation: rise 0.55s ease both;
}

.kicker.quiet {
  color: #b0b0b0;
  animation: none;
}

.wordmark {
  /* grid-area: 1 / 1; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.35rem 0.7rem;
  pointer-events: none;
  margin-bottom: -2.5rem;
}

.word {
  font-size: clamp(2.7rem, 6.5vw, 8.5rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.84;
  text-transform: uppercase;
  color: #dedede;
  user-select: none;
  transition: color 0.6s ease, letter-spacing 0.6s ease;
}

.is-finale .word {
  letter-spacing: 0.02em;
  color: #ececec;
}

.is-finale .mark-stage,
.is-done .mark-stage {
  --digit-w: clamp(3.8rem, 7vw, 5.4rem);
  --digit-h: clamp(5.1rem, 9.4vw, 7.2rem);
  --digit-fs: clamp(3.1rem, 6vw, 4.6rem);
}

.digits {
  display: flex;
  gap: 0.38rem;
}

.shock {
  position: absolute;
  inset: -8% -6% 22%;
  border: 1.5px solid rgba(17, 17, 17, 0.4);
  border-radius: 0.75rem;
  animation: shock 0.9s ease-out forwards;
  pointer-events: none;
}

.sec-label {
  margin: 0.72rem 0 0;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  text-indent: 0.42em;
  text-transform: uppercase;
  color: #b4b4b4;
}

.is-finale .sec-label {
  color: #111;
}

.copy {
  width: min(100%, 28rem);
  margin-top: 1.7rem;
  text-align: center;
}

.copy h1 {
  margin: 0;
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.lede {
  margin: 0.55rem 0 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8a8a8a;
}

.when {
  margin: 0.7rem 0 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #222;
}

.reveal {
  position: relative;
  z-index: 1;
  display: inline-flex;
  grid-area: 1 / 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  width: 10.5rem;
  height: 10.5rem;
  margin: 0;
  padding: 1.15rem;
  border: 0;
  border-radius: 50%;
  background: #111;
  color: #fff;
  font: inherit;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.35;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  cursor: pointer;
  animation: rise 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: transform 0.25s ease, background 0.25s ease;
}

.reveal-arrow {
  width: 1.35rem;
  height: 1.35rem;
  animation: arrow-slide 1.15s ease-in-out infinite;
}

@keyframes arrow-slide {

  0%,
  100% {
    opacity: 0.45;
    transform: translateX(-4px);
  }

  50% {
    opacity: 1;
    transform: translateX(5px);
  }
}

.reveal:hover:not(:disabled) {
  background: #2a2fff;
  transform: translateY(-2px);
}

.reveal:disabled {
  cursor: progress;
}

.reveal:focus-visible,
.socials a:focus-visible,
.contact a:focus-visible {
  outline: 2px solid #2a2fff;
  outline-offset: 3px;
}

.btn-curtains {
  display: inline-flex;
  width: 1.15rem;
  height: 0.68rem;
  gap: 3px;
  margin-right: 0.7rem;
}

.btn-curtains span {
  flex: 1;
  border-radius: 1px;
  background: #fff;
  animation: part 2.6s ease-in-out infinite;
}

.btn-curtains span:first-child {
  transform-origin: left center;
}

.btn-curtains span:last-child {
  transform-origin: right center;
}

.foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding: 0.4rem 1.25rem 1.6rem;
}

.follow {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a3a3a3;
}

.socials {
  display: flex;
  gap: 0.5rem;
}

.socials a {
  display: grid;
  width: 2.45rem;
  height: 2.45rem;
  place-items: center;
  border: 1px solid #ececec;
  border-radius: 999px;
  color: #161616;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.socials a:hover {
  background: #111;
  color: #fff;
  transform: translateY(-2px);
}

.social-icon {
  width: 1.05rem;
  height: 1.05rem;
}

.preview-note {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c5c5c5;
}

.soon:has(.is-finale) .blob {
  animation: heartbeat 1s ease-in-out infinite;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes shock {
  from {
    opacity: 0.75;
    transform: scale(0.9);
  }

  to {
    opacity: 0;
    transform: scale(1.2);
  }
}

@keyframes part {

  0%,
  18% {
    transform: scaleX(1);
  }

  48%,
  68% {
    transform: scaleX(0.45);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes awaken {
  from {
    transform: scale(0.92);
  }

  to {
    transform: scale(1);
  }
}

@keyframes live {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.045);
  }
}

@keyframes heartbeat {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.04);
  }
}

@media (max-width: 760px) {
  .soon {
    padding: 0.75rem;
  }

  .top {
    align-items: flex-start;
    flex-direction: column;
  }

  .page {
    align-items: stretch;
  }

  .contact {
    justify-content: flex-start;
  }

  .wordmark {
    gap: 0.2rem;
  }

  .mark-stage,
  .is-finale .mark-stage,
  .is-done .mark-stage {
    --digit-w: clamp(2.35rem, 11vw, 3.1rem);
    --digit-h: clamp(3.15rem, 14vw, 4.1rem);
    --digit-fs: clamp(1.9rem, 9vw, 2.6rem);
  }

  .copy {
    text-align: center;
  }

  .blob-tl {
    width: 11rem;
    height: 11rem;
  }

  .blob-br {
    width: 13rem;
    height: 13rem;
  }
}

@media (prefers-reduced-motion: reduce) {

  .clock-row,
  .unit.hot .digits,
  .seconds-wrap.hot .digits,
  .word,
  .seconds-wrap,
  .reveal,
  .reveal-arrow,
  .socials a,
  .btn-curtains span,
  .soon:has(.is-finale) .blob {
    transition: none;
    animation: none;
  }
}
</style>
