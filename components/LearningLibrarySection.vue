<script setup lang="ts">
import { computed, ref } from 'vue'

type GradeId =
  | '12pass'
  | '12'
  | '11'
  | '10'
  | '9'
  | '8'
  | '7'
  | '6'
  | '1-5'
  | 'lkg'

type GridCard = {
  id: string
  title: string
  description: string
  iconTone: string
}

type GradeLibrary = {
  /** Core subjects offered / covered for this stage */
  subjects: string[]
  featured: {
    tag: string
    title: string
    description: string
  }
  cards: GridCard[]
}

const grades: { id: GradeId; label: string; isNew?: boolean }[] = [
  { id: '12pass', label: 'Class 12 pass' },
  { id: '12', label: 'Class 12' },
  { id: '11', label: 'Class 11' },
  { id: '10', label: 'Class 10' },
  { id: '9', label: 'Class 9' },
  { id: '8', label: 'Class 8' },
  { id: '7', label: 'Class 7' },
  { id: '6', label: 'Class 6' },
  { id: '1-5', label: 'Class 1 – 5' },
  { id: 'lkg', label: 'LKG – UKG', isNew: true },
]

/** Per-grade subjects and resource blurbs (Indian boards: CBSE-style science split where relevant). */
const libraryByGrade: Record<GradeId, GradeLibrary> = {
  lkg: {
    subjects: ['English (listening & speaking)', 'Hindi (rhymes & sounds)', 'Early Mathematics', 'EVS themes', 'Story & rhyme bank'],
    featured: {
      tag: 'EARLY YEARS',
      title: 'Play-based literacy & numeracy',
      description: 'Gentle English and Hindi exposure, counting and shapes, and short thematic EVS units — all in bite-sized activities.',
    },
    cards: [
      {
        id: 'hi-en',
        title: 'Hindi & English',
        description: 'Letter awareness, rhymes, picture vocabulary, and simple listening-speaking games.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Early Mathematics',
        description: 'Numbers 1–20, patterns, sorting, and introductory measurement through play.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'evs',
        title: 'EVS & themes',
        description: 'Myself, family, plants, animals, and safety — short stories and picture banks.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'stories',
        title: 'Rhymes & stories',
        description: 'Audio–visual rhymes, moral tales, and motor-skill linked follow-up sheets.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '1-5': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Environmental Studies (EVS)', 'Computer basics'],
    featured: {
      tag: 'PRIMARY (CLASSES 1–5)',
      title: 'Hindi, English & Maths foundations',
      description: 'NCERT-aligned reading, writing, and arithmetic with EVS projects — one place for primary homework help.',
    },
    cards: [
      {
        id: 'hindi',
        title: 'Hindi',
        description: 'Grammar, comprehension, unseen passages, and creative writing for junior classes.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'english',
        title: 'English',
        description: 'Phonics to paragraphs: literature extracts, grammar drills, and speaking prompts.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Number operations, fractions intro, geometry basics, and mental-maths routines.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'evs',
        title: 'EVS & computers',
        description: 'Environmental studies themes plus safe computer literacy and logical puzzles.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '6': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Science'],
    featured: {
      tag: 'CLASS 6',
      title: 'NCERT core — all subjects',
      description: 'Structured notes and worksheets for Hindi, English, Maths, Science, and SST as you enter middle school.',
    },
    cards: [
      {
        id: 'hindi-en',
        title: 'Hindi & English',
        description: 'Balanced coverage of literature, grammar, and writing for first year middle school.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Knowing our numbers to basic geometry — solved examples and practice sets.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'science',
        title: 'Science',
        description: 'Physics, chemistry, and biology topics in one integrated Science stream.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'sst',
        title: 'Social Science',
        description: 'History, geography, civics — maps, timelines, and short-answer banks.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '7': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science'],
    featured: {
      tag: 'CLASS 7',
      title: 'Science + Maths depth pack',
      description: 'Heat, motion, nutrition, and integers — chapter-wise NCERT solutions and concept cards.',
    },
    cards: [
      {
        id: 'hindi-en',
        title: 'Hindi & English',
        description: 'Deeper literature units, formal letter and dialogue writing, and comprehension packs.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Integers, fractions, simple equations, and symmetry with board-style sums.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'science',
        title: 'Science',
        description: 'Chemistry in everyday life, nutrition in plants and animals, motion and time.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'sst',
        title: 'Social Science',
        description: 'Medieval history, environment, and democracy modules with map practice.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '8': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Science', 'Social Science'],
    featured: {
      tag: 'CLASS 8',
      title: 'Board-ready Class 8 stack',
      description: 'Rational numbers to light, crops to constitution — aligned notes for every NCERT chapter.',
    },
    cards: [
      {
        id: 'hindi-en',
        title: 'Hindi & English',
        description: 'Essays, speeches, grammar exceptions, and unseen poetry practice.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Linear equations, quadrilaterals, mensuration, and data handling with HOTS.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'science',
        title: 'Science',
        description: 'Force, friction, metals, cell structure, and reproduction in animals — integrated kit.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'sst',
        title: 'Social Science',
        description: 'Rise of nationalism, resources, and law — structured answers and case studies.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '9': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science'],
    featured: {
      tag: 'CLASS 9',
      title: 'Science & Maths — full NCERT map',
      description: 'Motion, atoms, tissues, and number systems: solved back exercises and important-question sets.',
    },
    cards: [
      {
        id: 'hindi-en',
        title: 'Hindi & English',
        description: 'Beehive & moments-style prose, grammar, and formal letter writing for annual exams.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Polynomials, coordinate geometry, triangles, and statistics with step solutions.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'science',
        title: 'Science — Physics, Chemistry, Biology',
        description: 'Mechanics, matter, sound, and life processes — lab-style explanations and MCQs.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'sst',
        title: 'Social Science',
        description: 'French revolution to climate — maps, dates, and 3-mark / 5-mark answer frames.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '10': {
    subjects: ['Hindi', 'English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science'],
    featured: {
      tag: 'FEATURED FOR CLASS 10',
      title: 'NCERT solutions — all subjects',
      description: 'Board-ready working for Hindi, English, Mathematics, Science (including Chemistry labs and Biology diagrams), and Social Science.',
    },
    cards: [
      {
        id: 'hindi-en',
        title: 'Hindi & English',
        description: 'First Flight, Footprints, Kshitij, Sparsh — grammar, writing formats, and unseen practice.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'math',
        title: 'Mathematics',
        description: 'Real numbers to probability — theorem proofs, construction steps, and board papers.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'science',
        title: 'Science — Physics, Chemistry, Biology',
        description: 'Electricity, carbon compounds, life processes, heredity, and our environment — integrated Science.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'sst',
        title: 'Social Science',
        description: 'History, geography, political science, economics — case studies and map-based drills.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '11': {
    subjects: ['Hindi / English (core)', 'Mathematics', 'Physics', 'Chemistry', 'Biology (Botany & Zoology)', 'Computer Science / IP (optional)'],
    featured: {
      tag: 'CLASS 11 — SCIENCE STREAM',
      title: 'PCM / PCB depth modules',
      description: 'Physics, Chemistry, Mathematics or Biology (including Zoology units) with derivations, mechanisms, and NEET-style MCQs.',
    },
    cards: [
      {
        id: 'physics',
        title: 'Physics',
        description: 'Mechanics, waves, thermodynamics, and properties of matter — numerical + theory packs.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'chemistry',
        title: 'Chemistry',
        description: 'Atomic structure, bonding, equilibrium, and organic introduction with reaction maps.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'math-bio',
        title: 'Mathematics / Biology',
        description: 'Calculus foundations or cell biology, plant & animal physiology, and diversity of life.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'lang-cs',
        title: 'English, Hindi & Computer Science',
        description: 'Core language syllabi plus Python / IP logic, SQL basics, and project templates.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '12': {
    subjects: ['Hindi / English (core)', 'Mathematics', 'Physics', 'Chemistry', 'Biology (Botany & Zoology)', 'Computer Science / IP (optional)'],
    featured: {
      tag: 'CLASS 12',
      title: 'Board + entrance sync',
      description: 'Electromagnetism, d- & f-block, genetics, calculus, and languages — revision ladders for boards and JEE/NEET.',
    },
    cards: [
      {
        id: 'physics',
        title: 'Physics',
        description: 'Electrostatics, magnetism, optics, modern physics — derivations and previous-year alignment.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'chemistry',
        title: 'Chemistry',
        description: 'Solutions, electrochemistry, biomolecules, and revision of organic name reactions.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'math-bio',
        title: 'Mathematics / Biology',
        description: 'Vectors, 3-D, probability, or ecology, biotechnology, and human health & disease.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'lang-cs',
        title: 'English, Hindi & Computer Science',
        description: 'Writing skills, reading comprehension, and CS / IP boards with solved past papers.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
  '12pass': {
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology (Botany & Zoology)', 'English', 'Aptitude & mock tests'],
    featured: {
      tag: 'CLASS 12 PASS / DROP YEAR',
      title: 'JEE & NEET revision vault',
      description: 'PCM and PCB intensive: full-length mocks, chapter-wise Chemistry and Physics drills, and Biology (including Zoology) recap sheets.',
    },
    cards: [
      {
        id: 'physics',
        title: 'Physics',
        description: 'Problem ladders from mechanics to modern physics with timed sectional tests.',
        iconTone: 'bg-violet-100 text-violet-600 ring-violet-200/80',
      },
      {
        id: 'chemistry',
        title: 'Chemistry',
        description: 'Organic mechanisms, inorganic trends, and physical chemistry formula sheets.',
        iconTone: 'bg-amber-100 text-amber-600 ring-amber-200/80',
      },
      {
        id: 'math-bio',
        title: 'Mathematics / Biology',
        description: 'Advanced calculus and algebra, or human physiology, genetics, and evolution for NEET.',
        iconTone: 'bg-teal-100 text-teal-600 ring-teal-200/80',
      },
      {
        id: 'english-mock',
        title: 'English & mock tests',
        description: 'Language drills plus weekly full-syllabus papers and error log templates.',
        iconTone: 'bg-pink-100 text-pink-600 ring-pink-200/80',
      },
    ],
  },
}

const selected = ref<GradeId>('10')

const gradeLabel = computed(() => grades.find((g) => g.id === selected.value)?.label ?? 'Class 10')

const current = computed(() => libraryByGrade[selected.value])

const featured = computed(() => current.value.featured)

const gridCards = computed(() => current.value.cards)
</script>

<template>
  <section id="learning-library"
    class="relative bg-gradient-to-b from-indigo-50/80 via-slate-50/40 to-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="learning-library-heading">
    <div class="container-page">
      <div
        class="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-soft sm:p-8 lg:p-10 lg:shadow-[0_8px_40px_-12px_rgba(15,23,42,0.08)]"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550, ease: 'easeOut' } }">
        <!-- Header -->
        <header class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Learning library
          </p>
          <h2 id="learning-library-heading"
            class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem] lg:leading-snug">
            Resources built for your grade
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Pick your class to see which subjects we cover — Hindi, English, Mathematics, Sciences (Physics, Chemistry,
            Biology & Zoology topics where relevant), and more — with kits that match that stage.
          </p>
        </header>

        <!-- Grade tabs -->
        <div class="mt-8 -mx-1 overflow-x-auto pb-1 [scrollbar-width:thin]" role="tablist" aria-label="Select class">
          <div class="flex min-w-min gap-2 px-1">
            <button v-for="g in grades" :key="g.id" type="button" role="tab" :aria-selected="selected === g.id"
              class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              :class="selected === g.id
                ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'"
              @click="selected = g.id">
              <span class="inline-flex items-center gap-1.5">
                {{ g.label }}
                <span v-if="g.isNew"
                  class="rounded-md bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  New
                </span>
              </span>
            </button>
          </div>
        </div>

        <!-- Featured + grid -->
        <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <!-- Featured -->
          <a href="#book-demo"
            class="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-6 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20 transition hover:brightness-[1.03] hover:shadow-xl sm:col-span-2 sm:min-h-[260px] lg:col-span-1 lg:row-span-2 lg:min-h-0"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
            <div aria-hidden="true"
              class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div>
              <span
                class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30 backdrop-blur-sm">
                <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </span>
              <p class="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100">
                {{ featured.tag }}
              </p>
              <h3 class="mt-2 font-display text-2xl font-bold leading-tight sm:text-[1.65rem]">
                {{ featured.title }}
              </h3>
              <p class="mt-3 max-w-sm text-sm leading-relaxed text-blue-50/95">
                {{ featured.description }}
              </p>
            </div>
            <span
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:gap-2">
              Open in library
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </a>

          <!-- Small cards -->
          <a v-for="(card, i) in gridCards" :key="`${selected}-${card.id}`" href="#book-demo"
            class="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_16px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            v-motion :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 120 + i * 70 } }">
            <span :class="['inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1', card.iconTone]">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </span>
            <h3 class="mt-4 font-display text-base font-bold text-slate-900">
              {{ card.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {{ card.description }}
            </p>
            <span
              class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:gap-1.5">
              View
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
