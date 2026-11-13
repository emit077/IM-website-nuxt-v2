<script setup lang="ts">
import StatusScreen from '~/components/ui/StatusScreen.vue'
import { emailSupport } from '~/data/contact'

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'Coming soon — Indian Mentors',
  description: 'Indian Mentors opens on 15 November 2026 at 1:00 PM IST.',
  robots: 'noindex, nofollow',
})

/** 15 November 2026, 1:00 PM India Standard Time. */
const LAUNCH_AT = new Date('2026-11-15T13:00:00+05:30').getTime()

const now = useState('coming-soon-clock', () => Date.now())
let timer: ReturnType<typeof setInterval> | undefined

function partsFrom(timestamp: number) {
  const diff = Math.max(0, LAUNCH_AT - timestamp)
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    done: diff === 0,
    units: [
      { label: 'Days', value: String(days).padStart(2, '0') },
      { label: 'Hours', value: String(hours).padStart(2, '0') },
      { label: 'Minutes', value: String(minutes).padStart(2, '0') },
      { label: 'Seconds', value: String(seconds).padStart(2, '0') },
    ],
  }
}

const clock = computed(() => partsFrom(now.value))

const timerLabel = computed(() => {
  if (clock.value.done) return 'Indian Mentors is now open'
  const [days, hours, minutes, seconds] = clock.value.units
  return `${Number(days.value)} days, ${Number(hours.value)} hours, ${Number(minutes.value)} minutes, and ${Number(seconds.value)} seconds until 15 November 2026, 1:00 PM IST`
})

const actions = computed(() =>
  clock.value.done
    ? [
        { label: 'Back to home', variant: 'primary' as const, to: '/' },
        { label: 'Email us', variant: 'secondary' as const, href: `mailto:${emailSupport.address}` },
      ]
    : [{ label: 'Email us', variant: 'primary' as const, href: `mailto:${emailSupport.address}` }],
)

onMounted(() => {
  now.value = Date.now()
  timer = setInterval(() => {
    now.value = Date.now()
    if (LAUNCH_AT <= now.value && timer) {
      clearInterval(timer)
      timer = undefined
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <StatusScreen
    variant="maintenance"
    :eyebrow="clock.done ? 'We’re open' : 'Coming soon'"
    :title="clock.done ? 'The wait is over' : 'We’re opening soon'"
    :description="clock.done
      ? 'Indian Mentors is ready for families, tutors, and partners.'
      : 'Indian Mentors opens for families, tutors, and partners.'"
    :actions="actions"
  >
    <div class="countdown" role="timer" :aria-label="timerLabel">
      <div v-for="unit in clock.units" :key="unit.label" class="unit">
        <span class="value">{{ unit.value }}</span>
        <span class="label">{{ unit.label }}</span>
      </div>
    </div>
    <p class="when">15 November 2026 · 1:00 PM IST</p>
  </StatusScreen>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
  width: 100%;
  max-width: 28rem;
  margin-top: 1.75rem;
}

.unit {
  display: flex;
  flex: 1 1 4.25rem;
  min-width: 4.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.85rem 0.35rem 0.7rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 10px 40px -16px rgba(29, 78, 216, 0.35);
}

.value {
  font-family: "Plus Jakarta Sans", Inter, sans-serif;
  font-size: clamp(1.7rem, 4vw, 2.35rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  color: #1d4ed8;
}

.label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
}

.when {
  margin-top: 0.9rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #334155;
}

@media (max-width: 380px) {
  .unit {
    min-width: 3.7rem;
    padding-inline: 0.2rem;
  }
}
</style>
