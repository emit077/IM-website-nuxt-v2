<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import CardHeader from './ui/cardheader.vue'

type TestimonialItem = {
  category: string
  title: string
  quote: string
  person: string
  role: string
  duration: string
  result: string
  thumb: string
}

const testimonials: TestimonialItem[] = [
  {
    category: 'Student Success',
    title: 'From average scores to class topper',
    quote:
      "The mentor's revision strategy and weekly mock tests helped me improve quickly. I now approach exams with confidence.",
    person: 'Aarushi Verma',
    role: 'Class 10 Student',
    duration: '2:08',
    result: 'Top 5 rank in class',
    thumb: 'https://i.pravatar.cc/800?img=47',
  },
  {
    category: 'Parent Review',
    title: 'Clear progress updates every week',
    quote:
      'We finally had structure at home. The tutor shared practical goals and feedback after each session.',
    person: 'Rohit Sharma',
    role: 'Parent, Grade 8',
    duration: '1:54',
    result: '18% score improvement',
    thumb: 'https://i.pravatar.cc/800?img=15',
  },
  {
    category: 'Tutor Review',
    title: 'Quality students and smoother workflow',
    quote:
      'The platform makes planning and communication easier. Student consistency improved within a few weeks.',
    person: 'Nisha Kapoor',
    role: 'English Tutor',
    duration: '2:25',
    result: 'Higher completion rate',
    thumb: 'https://i.pravatar.cc/800?img=23',
  },
  {
    category: 'School Feedback',
    title: 'Stronger classroom participation',
    quote:
      'Students from this program ask better questions and show stronger fundamentals in regular school sessions.',
    person: 'Academic Coordinator',
    role: 'Partner School',
    duration: '1:46',
    result: 'Better concept retention',
    thumb: 'https://i.pravatar.cc/800?img=12',
  },
  {
    category: 'Placement Success',
    title: 'Interview prep that actually works',
    quote:
      'The mentoring sessions were practical and focused. I landed a strong placement offer in my final semester.',
    person: 'Aniket Singh',
    role: 'B.Tech Student',
    duration: '2:31',
    result: 'Placed at 12 LPA',
    thumb: 'https://i.pravatar.cc/800?img=68',
  },
]

const active = ref(0)
const paused = ref(false)
const touchStartX = ref<number | null>(null)

const total = testimonials.length
const current = computed(() => testimonials[active.value]!)

function goTo(idx: number) {
  active.value = idx
}

function next() {
  active.value = (active.value + 1) % total
}

function prev() {
  active.value = (active.value - 1 + total) % total
}

const { pause, resume } = useIntervalFn(next, 5200, { immediate: false })

onMounted(() => {
  if (!paused.value) resume()
})

watch(paused, (p) => {
  if (p) pause()
  else resume()
})

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
  <section id="testimonials" class="relative overflow-hidden px-4 py-12 md:py-16">
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_45%)]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-[1200px]">
      <CardHeader
        variant="variant-1"
        class="!px-0 !py-0"
        badge="Testimonials"
        title="Stories That Build Trust"
        description="Real student, parent, tutor, and institute voices that reflect measurable outcomes."
      />

      <div
        class="mt-8 overflow-hidden rounded-[2rem] border border-blue-100/80 bg-white/85 p-4 shadow-[0_24px_70px_rgba(37,99,235,0.14)] backdrop-blur-xl sm:p-5 md:p-6"
      >
        <article
          :key="`testimonial-${active}`"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }"
          class="grid gap-4 rounded-[1.5rem] border border-blue-100 bg-white p-3 sm:p-4 lg:grid-cols-12"
          @mouseenter="paused = true"
          @mouseleave="paused = false"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <div class="relative overflow-hidden rounded-2xl lg:col-span-8">
            <img
              :src="current.thumb"
              :alt="`${current.person} testimonial`"
              class="h-60 w-full object-cover sm:h-40 lg:min-h-[400px]"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent"
              aria-hidden="true"
            />
            <button
              type="button"
              class="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white/90 text-slate-900 shadow-xl transition hover:scale-105"
              :aria-label="`Play testimonial by ${current.person}`"
            >
              ▶
            </button>
            <span
              class="absolute left-3 top-3 rounded-full bg-blue-600/95 px-3 py-1 text-xs font-extrabold text-white"
            >
              {{ current.category }}
            </span>
            <span
              class="absolute right-3 top-3 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-extrabold text-white"
            >
              {{ current.duration }}
            </span>
          </div>

          <div class="flex flex-col lg:col-span-4 lg:px-2">
            <div class="flex flex-1 items-center">
              <div>
                <p class="text-base leading-relaxed text-slate-600">
                  <span
                    class="items-center justify-center text-7xl font-extrabold leading-none text-blue-300 sm:text-6xl"
                    aria-hidden="true"
                  >
                    "
                  </span>
                  “{{ current.quote }}”
                </p>
                <div class="text-center">
                  <div class="mt-4 flex items-center justify-center -space-x-1" aria-label="5 out of 5 stars">
                    <span
                      v-for="i in 5"
                      :key="`star-${i}`"
                      class="ml-[-5px] inline-flex h-7 w-7 items-center justify-center leading-none text-blue-500 sm:h-8 sm:w-8 sm:text-xl md:ml-[-10px] md:h-9 md:w-9 md:text-2xl lg:h-10 lg:w-10 lg:text-3xl"
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  </div>
                  <div>
                    <p class="text-sm font-extrabold text-blue-950">{{ current.person }}</p>
                    <p class="text-xs font-semibold text-slate-500">{{ current.role }}</p>
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
            class="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              v-for="(item, idx) in testimonials"
              :key="`${item.person}-${idx}`"
              type="button"
              class="flex min-w-[210px] snap-start items-center gap-3 rounded-2xl border p-2 text-left transition sm:min-w-[240px]"
              :class="
                idx === active
                  ? 'border-blue-300 bg-blue-50 shadow-sm'
                  : 'border-blue-100 bg-white hover:border-blue-200 hover:bg-blue-50/40'
              "
              @click="goTo(idx)"
            >
              <img
                :src="item.thumb"
                :alt="item.category"
                class="h-14 w-16 shrink-0 rounded-xl object-cover"
                width="64"
                height="56"
                loading="lazy"
                decoding="async"
              />
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
          <button
            v-for="(item, idx) in testimonials"
            :key="`dot-${item.person}-${idx}`"
            type="button"
            :aria-label="`Go to story ${idx + 1}`"
            class="h-2.5 rounded-full transition-all"
            :class="idx === active ? 'w-8 bg-blue-600' : 'w-2.5 bg-blue-200 hover:bg-blue-300'"
            @click="goTo(idx)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
