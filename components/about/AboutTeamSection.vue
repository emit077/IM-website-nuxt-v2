<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { teamMembers } from '~/data/about'

type DeptRole = { role: string; desc: string }

type Dept = {
  id: string
  title: string
  short: string
  icon: string
  gradient: string
  chip: string
  iconRing: string
  description: string
  roles: DeptRole[]
}

const departments: Dept[] = [
  {
    id: 'academic',
    title: 'Academic & Admission',
    short: 'Academic',
    icon: 'mdi:school',
    gradient: 'from-blue-600 to-indigo-700',
    chip: 'bg-blue-50 text-blue-800 ring-blue-100',
    iconRing: 'ring-blue-200/80',
    description: 'Counselling, onboarding, and academic planning aligned to every board and grade.',
    roles: [
      { role: 'Admission Counsellors', desc: 'Guide families through enrolment and the right program fit.' },
      { role: 'Academic Counsellors', desc: 'Design learning paths and match students with mentors.' },
      { role: 'Admission Coordinators', desc: 'Manage documentation, scheduling, and onboarding workflows.' },
    ],
  },
  {
    id: 'tutors',
    title: 'Tutor Management',
    short: 'Tutors',
    icon: 'mdi:account-tie',
    gradient: 'from-violet-600 to-purple-700',
    chip: 'bg-violet-50 text-violet-900 ring-violet-100',
    iconRing: 'ring-violet-200/80',
    description: 'Recruitment, verification, and quality assurance for every mentor on the platform.',
    roles: [
      { role: 'Tutor Recruiters', desc: 'Source, screen, and onboard subject experts across India.' },
      { role: 'Quality Review Team', desc: 'Monitor sessions, demos, and academic performance standards.' },
    ],
  },
  {
    id: 'ops',
    title: 'Operations & Support',
    short: 'Operations',
    icon: 'mdi:headset',
    gradient: 'from-emerald-600 to-teal-700',
    chip: 'bg-emerald-50 text-emerald-900 ring-emerald-100',
    iconRing: 'ring-emerald-200/80',
    description: 'Day-to-day support for families, tutors, and internal teams.',
    roles: [
      { role: 'Customer Support', desc: 'Resolve queries and keep sessions running smoothly.' },
      { role: 'Human Resources', desc: 'People operations, culture, and team growth.' },
      { role: 'Finance & Accounts', desc: 'Billing, payouts, and financial transparency.' },
    ],
  },
  {
    id: 'tech',
    title: 'Technology & Growth',
    short: 'Technology',
    icon: 'mdi:chip',
    gradient: 'from-indigo-600 to-blue-800',
    chip: 'bg-indigo-50 text-indigo-900 ring-indigo-100',
    iconRing: 'ring-indigo-200/80',
    description: 'ERP, product, and partnerships that scale structured mentorship.',
    roles: [
      { role: 'ERP & Tech Operations', desc: 'Platform reliability, dashboards, and automation.' },
      { role: 'Channel Partners', desc: 'Institutional and B2B growth across regions.' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Admin',
    short: 'Compliance',
    icon: 'mdi:clipboard-check',
    gradient: 'from-amber-500 to-orange-600',
    chip: 'bg-amber-50 text-amber-900 ring-amber-100',
    iconRing: 'ring-amber-200/80',
    description: 'Governance, policies, and administrative excellence behind the scenes.',
    roles: [
      { role: 'Administrative Officers', desc: 'Documentation, contracts, and operational compliance.' },
      { role: 'Compliance Officers', desc: 'Safety, verification standards, and regulatory alignment.' },
    ],
  },
]

const activeDeptId = ref<Dept['id']>('academic')
const activeTeam = teamMembers.filter((m) => m.status === 'Active')

const activeDept = computed(() => departments.find((d) => d.id === activeDeptId.value) ?? departments[0]!)

const totalRoles = computed(() => departments.reduce((sum, d) => sum + d.roles.length, 0))

function selectDept(id: Dept['id']) {
  activeDeptId.value = id
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const a = parts[0]?.[0] ?? ''
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? ''
  return (a + b).toUpperCase() || '?'
}

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const avatarGradients = [
  'from-blue-600 via-blue-500 to-indigo-700',
  'from-violet-600 via-purple-500 to-indigo-700',
  'from-emerald-600 via-teal-500 to-cyan-700',
  'from-amber-500 via-orange-500 to-rose-600',
]
</script>

<template>
  <section
    id="team"
    class="relative overflow-hidden bg-cream-50 py-12 sm:py-14 lg:py-20"
    aria-labelledby="team-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-60"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl"
    />

    <div class="container-page relative z-[1]">
      <CardHeader
        id="team-heading"
        badge="Our team"
        title="A structured team powering academic excellence"
        description="Five specialised departments — one accountable system connecting families, tutors, and institutions across India."
        content-class="mx-auto mb-8 max-w-3xl md:mb-10"
      />

      <!-- Stats -->
      <ul
        class="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        role="list"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <li
          v-for="stat in [
            { icon: 'mdi:domain', value: '5', label: 'Departments' },
            { icon: 'mdi:account-group', value: `${totalRoles}+`, label: 'Specialist roles' },
            { icon: 'mdi:shield-check', value: '100%', label: 'Verified processes' },
            { icon: 'mdi:map-marker-radius', value: 'Pan-India', label: 'Operations' },
          ]"
          :key="stat.label"
          class="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm"
        >
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700">
            <Icon :icon="stat.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span class="block font-display text-lg font-extrabold leading-none text-slate-900">
              {{ stat.value }}
            </span>
            <span class="text-xs font-medium text-slate-500">{{ stat.label }}</span>
          </span>
        </li>
      </ul>

      <!-- Founder + system bento -->
      <div
        class="mb-10 grid gap-4 lg:grid-cols-12 lg:gap-5"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520, delay: 80 } }"
      >
        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white p-6 shadow-soft sm:p-8 lg:col-span-8"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-100/60 blur-2xl"
          />
          <div class="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <span
              class="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 text-3xl shadow-xl shadow-blue-600/30 ring-4 ring-blue-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:crown" class="h-9 w-9 text-amber-300" />
            </span>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">Leadership</p>
              <h3 class="font-display mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[1.65rem]">
                Founder &amp; CEO
              </h3>
              <p class="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Strategy, governance, and long-term growth — keeping mentorship credible, measurable, and
                scalable across every city we serve.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in ['Vision', 'Governance', 'Growth']"
                  :key="tag"
                  class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <a
              href="#become-tutor"
              class="btn-primary ripple group inline-flex shrink-0 items-center gap-2 self-start sm:self-center"
              @mousemove="rippleHandler"
            >
              Join our team
              <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 p-6 text-white shadow-[0_20px_50px_-18px_rgba(37,99,235,0.5)] lg:col-span-4 lg:flex lg:flex-col lg:justify-between"
        >
          <div
            aria-hidden="true"
            class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"
          />
          <div class="relative">
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25"
            >
              <Icon icon="mdi:lightning-bolt" class="h-6 w-6 text-[#FFD600]" aria-hidden="true" />
            </span>
            <h3 class="font-display mt-4 text-lg font-extrabold">System-driven delivery</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/80">
              Every role operates within defined accountability — collaboration and measurable outcomes, not
              ad-hoc tutoring.
            </p>
          </div>
          <ul class="relative mt-5 space-y-2 text-sm font-semibold text-white/90" role="list">
            <li v-for="item in ['ERP-tracked sessions', 'Quality checkpoints', 'Parent transparency']" :key="item" class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="h-4 w-4 shrink-0 text-[#FFD600]" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Department explorer -->
      <div
        class="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520, delay: 120 } }"
      >
        <div class="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
          <h3 class="font-display text-lg font-bold text-slate-900 sm:text-xl">How we're organised</h3>
          <p class="mt-1 text-sm text-slate-500">Select a department to explore roles and responsibilities</p>

          <!-- Dept pills -->
          <div
            class="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Departments"
          >
            <button
              v-for="dept in departments"
              :key="dept.id"
              type="button"
              role="tab"
              :aria-selected="activeDeptId === dept.id"
              :class="[
                'inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
                activeDeptId === dept.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'border border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-200 hover:text-blue-700',
              ]"
              @click="selectDept(dept.id)"
            >
              <Icon :icon="dept.icon" class="h-4 w-4" aria-hidden="true" />
              {{ dept.short }}
            </button>
          </div>
        </div>

        <div class="grid lg:grid-cols-12">
          <!-- Dept cards grid -->
          <div class="grid grid-cols-2 gap-2 border-b border-slate-100 p-4 sm:grid-cols-3 sm:gap-3 sm:p-5 lg:col-span-5 lg:border-b-0 lg:border-r">
            <button
              v-for="dept in departments"
              :key="`card-${dept.id}`"
              type="button"
              :class="[
                'group relative flex flex-col items-center overflow-hidden rounded-2xl border p-4 text-center transition duration-300',
                activeDeptId === dept.id
                  ? 'border-blue-300 bg-blue-50/80 shadow-md ring-2 ring-blue-500/25'
                  : 'border-slate-200/80 bg-slate-50/50 hover:border-blue-200 hover:bg-white',
              ]"
              @click="selectDept(dept.id)"
            >
              <span
                :class="[
                  'flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-2 transition duration-300 group-hover:scale-105',
                  dept.gradient,
                  dept.iconRing,
                  activeDeptId === dept.id ? 'scale-110' : '',
                ]"
              >
                <Icon :icon="dept.icon" class="h-6 w-6" aria-hidden="true" />
              </span>
              <span class="mt-3 font-display text-xs font-bold leading-tight text-slate-900 sm:text-sm">
                {{ dept.title }}
              </span>
              <span class="mt-1 text-[10px] font-semibold text-slate-500">
                {{ dept.roles.length }} roles
              </span>
            </button>
          </div>

          <!-- Role detail panel -->
          <div
            :key="activeDept.id"
            class="bg-gradient-to-br from-slate-50/80 to-white p-5 sm:p-6 lg:col-span-7 lg:p-7"
          >
            <div class="flex items-start gap-4">
              <span
                :class="[
                  'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg',
                  activeDept.gradient,
                ]"
              >
                <Icon :icon="activeDept.icon" class="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h4 class="font-display text-xl font-extrabold text-slate-900">{{ activeDept.title }}</h4>
                <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ activeDept.description }}</p>
              </div>
            </div>

            <ul class="mt-6 space-y-3" role="list">
              <li
                v-for="(item, i) in activeDept.roles"
                :key="item.role"
                class="flex gap-3 rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm transition hover:border-blue-200/80 hover:shadow-md"
                v-motion
                :initial="{ opacity: 0, x: 8 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 50, duration: 400 } }"
              >
                <span
                  class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white"
                  aria-hidden="true"
                >
                  <Icon icon="mdi:check" class="h-3.5 w-3.5" />
                </span>
                <div>
                  <p class="font-display text-sm font-bold text-slate-900">{{ item.role }}</p>
                  <p class="mt-0.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Managing team -->
      <div v-if="activeTeam.length" class="mt-12 sm:mt-14">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Leadership</span>
            <h3 class="font-display mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Managing team</h3>
            <p class="mt-2 max-w-lg text-sm text-slate-600">
              The people guiding academic quality, operations, and mentor excellence.
            </p>
          </div>
        </div>

        <div
          :class="[
            'mt-8 grid gap-5',
            activeTeam.length === 1 ? 'max-w-xl' : 'sm:grid-cols-2 lg:gap-6',
          ]"
        >
          <article
            v-for="(member, i) in activeTeam"
            :key="member.team_id"
            class="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_-20px_rgba(37,99,235,0.22)]"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 90, duration: 480 } }"
          >
            <div
              aria-hidden="true"
              :class="[
                'pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-2xl',
                avatarGradients[i % avatarGradients.length],
              ]"
            />

            <div class="relative p-6 sm:p-7">
              <div class="flex items-start gap-4">
                <div class="relative shrink-0">
                  <span
                    v-if="!member.image"
                    :class="[
                      'flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br text-xl font-extrabold text-white shadow-lg ring-4 ring-white',
                      avatarGradients[i % avatarGradients.length],
                    ]"
                  >
                    {{ initialsFromName(member.name) }}
                  </span>
                  <img
                    v-else
                    :src="member.image"
                    :alt="member.name"
                    class="h-[4.5rem] w-[4.5rem] rounded-2xl object-cover ring-4 ring-white shadow-lg"
                    loading="lazy"
                  />
                  <span
                    class="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white ring-2 ring-white"
                    aria-hidden="true"
                  >
                    <Icon icon="mdi:check-bold" class="h-3.5 w-3.5" />
                  </span>
                </div>

                <div class="min-w-0 flex-1">
                  <h4 class="font-display text-lg font-extrabold text-slate-900">{{ member.name }}</h4>
                  <p class="mt-0.5 text-sm font-bold text-blue-600">{{ member.designation }}</p>
                  <span
                    class="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100"
                  >
                    {{ member.department }}
                  </span>
                </div>
              </div>

              <p
                class="relative mt-5 text-sm leading-relaxed text-slate-600 line-clamp-4 transition-[line-clamp] duration-300 group-hover:line-clamp-none"
              >
                {{ member.bio }}
              </p>

              <div class="relative mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
                <a
                  v-if="member.linkedin_url"
                  :href="member.linkedin_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:text-blue-800"
                >
                  <Icon icon="mdi:linkedin" class="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href="#book-demo"
                  class="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition group-hover:text-blue-600"
                >
                  Connect
                  <Icon
                    icon="mdi:arrow-right"
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
