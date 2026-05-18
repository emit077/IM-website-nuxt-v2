<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

type SubjectStream = {
  id: string
  emoji: string
  title: string
  subjects: string[]
  iconMdi: string
  gradient: string
  span?: string
}

const streams: SubjectStream[] = [
  {
    id: 'sciences',
    emoji: '🔬',
    title: 'Sciences',
    subjects: ['Maths', 'Physics', 'Chemistry', 'Biology', 'EVS'],
    iconMdi: 'mdi:flask',
    gradient: 'from-teal-500 via-emerald-500 to-cyan-600',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    id: 'languages',
    emoji: '📖',
    title: 'Languages',
    subjects: ['English', 'Hindi', 'Sanskrit', 'French', 'German'],
    iconMdi: 'mdi:translate',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'social',
    emoji: '🌍',
    title: 'Social',
    subjects: ['History', 'Geography', 'Civics', 'Economics'],
    iconMdi: 'mdi:earth',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'commerce',
    emoji: '💼',
    title: 'Commerce',
    subjects: ['Accounts', 'Business', 'Economics'],
    iconMdi: 'mdi:chart-bar',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'school-entrance',
    emoji: '🏫',
    title: 'School Exams',
    subjects: ['Navodaya', 'Sainik', 'RIMC', 'RMS'],
    iconMdi: 'mdi:school',
    gradient: 'from-indigo-600 to-blue-700',
  },
  {
    id: 'college-entrance',
    emoji: '🎯',
    title: 'Entrance',
    subjects: ['JEE', 'NEET', 'CA', 'CS', 'CMA'],
    iconMdi: 'mdi:medal',
    gradient: 'from-rose-500 to-pink-600',
    span: 'sm:col-span-2',
  },
  {
    id: 'additional',
    emoji: '🚀',
    title: 'Extras',
    subjects: ['Coding', 'Olympiad', 'NTSE', 'KVPY'],
    iconMdi: 'mdi:rocket-launch',
    gradient: 'from-fuchsia-500 to-violet-600',
  },
]

const active = ref(streams[0]!.id)
const activeStream = computed(() => streams.find((s) => s.id === active.value) ?? streams[0]!)
</script>

<template>
  <section
    id="subjects-offered"
    class="relative bg-cream-50 py-12 sm:py-14 lg:py-16"
    aria-labelledby="subjects-heading"
  >
    <div class="container-page">
      <div class="text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Subjects offered</span>
        <h2 id="subjects-heading" class="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          Pick a stream — <span class="text-gradient-brand">see what we teach</span>
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 auto-rows-[120px] sm:auto-rows-[130px]">
        <button
          v-for="(stream, i) in streams"
          :key="stream.id"
          type="button"
          :class="[
            'group relative overflow-hidden rounded-2xl border-2 text-left shadow-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
            stream.span ?? '',
            active === stream.id
              ? 'border-white scale-[1.02] shadow-xl ring-4 ring-blue-400/50'
              : 'border-transparent hover:scale-[1.02]',
          ]"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 40 + i * 40, duration: 400 } }"
          @click="active = stream.id"
        >
          <div
            :class="[
              'absolute inset-0 bg-gradient-to-br transition duration-500',
              stream.gradient,
              active === stream.id ? 'opacity-100' : 'opacity-90 group-hover:opacity-100',
            ]"
            aria-hidden="true"
          />
          <div
            class="pointer-events-none absolute -bottom-6 -right-6 text-7xl opacity-20 transition group-hover:scale-110 sm:text-8xl"
            aria-hidden="true"
          >
            {{ stream.emoji }}
          </div>

          <div class="relative flex h-full flex-col justify-between p-4">
            <Icon :icon="stream.iconMdi" class="h-5 w-5 text-white/90" aria-hidden="true" />
            <div>
              <p class="font-display text-lg font-bold text-white sm:text-xl">{{ stream.title }}</p>
              <p class="mt-0.5 text-[11px] font-semibold text-white/80">
                {{ stream.subjects.length }}+ areas
              </p>
            </div>
          </div>
        </button>
      </div>

      <!-- Floating subject cloud for active stream -->
      <div
        class="relative mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8"
        :key="active"
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 350 } }"
      >
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="list">
          <span
            v-for="(sub, j) in activeStream.subjects"
            :key="sub"
            :class="[
              'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-md transition bg-gradient-to-r',
              activeStream.gradient,
            ]"
            :style="{ transform: 'rotate(' + ((j % 3) - 1) * 2 + 'deg)' }"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: j * 50, duration: 300 } }"
          >
            <span class="text-base" aria-hidden="true">{{ activeStream.emoji }}</span>
            {{ sub }}
          </span>
        </div>
        <p class="mt-4 text-center text-sm text-slate-500">
          + more subjects on request · All major boards
        </p>
      </div>
    </div>
  </section>
</template>
