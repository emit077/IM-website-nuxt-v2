<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'

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
</script>

<template>
  <section id="subjects-offered" class="relative bg-cream-50 py-14 sm:py-16 lg:py-24"
    aria-labelledby="subjects-heading">
    <div class="container-page">
      <CardHeader heading-id="subjects-heading" classes="!px-0 !py-0 max-w-3xl mx-auto" badge="Subjects offered"
        title='Pick a stream — <span class="text-gradient-brand">see what we teach</span>'
        description="250+ subjects across sciences, languages, commerce, humanities and competitive tracks — taught by mentors matched to your board and goals." />

      <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 auto-rows-[120px] sm:auto-rows-[130px]">
        <button v-for="(stream, i) in streams" :key="stream.id" type="button" :class="[
          'group relative overflow-hidden rounded-2xl border-2 text-left shadow-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
          stream.span ?? '',
          active === stream.id
            ? 'border-white scale-[1.02] shadow-xl ring-4 ring-blue-400/50'
            : 'border-transparent hover:scale-[1.02]',
        ]" v-motion :initial="{ opacity: 0, scale: 0.95 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 40 + i * 40, duration: 400 } }"
          @click="active = stream.id">
          <div :class="[
            'absolute inset-0 bg-gradient-to-br transition duration-500',
            stream.gradient,
            active === stream.id ? 'opacity-100' : 'opacity-90 group-hover:opacity-100',
          ]" aria-hidden="true" />
          <div
            class="pointer-events-none absolute -bottom-6 -right-6 text-7xl opacity-20 transition group-hover:scale-110 sm:text-8xl"
            aria-hidden="true">
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

    </div>
  </section>
</template>
