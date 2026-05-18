<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { aboutMission, aboutVision } from '~/data/about'

type TabId = 'mission' | 'vision'

const activeTab = ref<TabId>('mission')

const tabs: { id: TabId; label: string; icon: string; emoji: string }[] = [
  { id: 'mission', label: 'Mission', icon: 'mdi:target', emoji: '🎯' },
  { id: 'vision', label: 'Vision', icon: 'mdi:telescope', emoji: '🌍' },
]

const panelContent = {
  mission: aboutMission,
  vision: aboutVision,
} as const

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
</script>

<template>
  <section
    id="mission"
    class="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-14 lg:py-16"
    aria-labelledby="mission-section-heading"
  >
    <motion.div
      aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"
    />

    <div class="container-page relative z-[1]">
      <CardHeader
        id="mission-section-heading"
        badge="Mission &amp; vision"
        title="Why we exist and where we're going"
        content-class="mx-auto mb-8 max-w-2xl md:mb-10"
      />

      <!-- Tabs -->
      <motion.div
        class="mx-auto flex max-w-sm justify-center rounded-2xl border border-slate-200/80 bg-white p-1 shadow-sm"
        role="tablist"
        aria-label="Mission and vision"
        v-motion
        :initial="{ opacity: 0, y: 8 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400 } }"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :class="[
            'flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition duration-300',
            activeTab === tab.id
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
              : 'text-slate-600 hover:bg-slate-50',
          ]"
          @click="activeTab = tab.id"
        >
          <span aria-hidden="true">{{ tab.emoji }}</span>
          {{ tab.label }}
        </button>
      </motion.div>

      <!-- Panel -->
      <motion.div
        :key="activeTab"
        role="tabpanel"
        class="mt-6"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 350 } }"
      >
        <article
          :class="[
            'overflow-hidden rounded-[1.75rem] p-6 sm:p-8',
            activeTab === 'mission'
              ? 'bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 text-white shadow-[0_24px_60px_-18px_rgba(37,99,235,0.45)]'
              : 'border border-slate-200/80 bg-white shadow-soft',
          ]"
        >
          <span
            :class="[
              'inline-flex rounded-2xl px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em]',
              activeTab === 'mission'
                ? 'bg-white/15 text-white'
                : 'bg-blue-50 text-blue-700',
            ]"
          >
            {{ tabs.find((t) => t.id === activeTab)?.emoji }}
            {{ panelContent[activeTab].badge }}
          </span>

          <h3
            :class="[
              'font-display mt-4 text-xl font-extrabold leading-snug sm:text-2xl',
              activeTab === 'mission' ? 'text-[#FFD600]' : 'text-slate-900',
            ]"
          >
            {{ panelContent[activeTab].title }}
          </h3>

          <p
            :class="[
              'mt-3 max-w-2xl text-sm leading-relaxed sm:text-[15px]',
              activeTab === 'mission' ? 'text-white/85' : 'text-slate-600',
            ]"
          >
            {{ panelContent[activeTab].summary }}
          </p>

          <div
            :class="[
              'mt-6 grid gap-3',
              activeTab === 'mission'
                ? 'sm:grid-cols-2 lg:grid-cols-3'
                : 'sm:grid-cols-2',
            ]"
          >
            <div
              v-for="(p, i) in panelContent[activeTab].pillars"
              :key="p.title"
              :class="[
                'flex gap-3 rounded-2xl p-4 transition duration-300',
                activeTab === 'mission'
                  ? 'border border-white/10 bg-white/10 hover:bg-white/15'
                  : 'border border-slate-100 bg-slate-50/80 hover:border-blue-200 hover:bg-blue-50/50',
              ]"
              v-motion
              :initial="{ opacity: 0, y: 8 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: i * 45, duration: 380 } }"
            >
              <span
                :class="[
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                  activeTab === 'mission'
                    ? 'bg-white/15 ring-1 ring-white/20'
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/20',
                ]"
              >
                <Icon
                  :icon="p.icon"
                  :class="[
                    'h-5 w-5',
                    activeTab === 'mission' ? 'text-[#FFD600]' : 'text-white',
                  ]"
                  aria-hidden="true"
                />
              </span>
              <div class="min-w-0">
                <h4
                  :class="[
                    'font-display text-sm font-bold sm:text-[15px]',
                    activeTab === 'mission' ? 'text-white' : 'text-slate-900',
                  ]"
                >
                  {{ p.title }}
                </h4>
                <p
                  :class="[
                    'mt-0.5 text-sm leading-snug',
                    activeTab === 'mission' ? 'text-white/70' : 'text-slate-600',
                  ]"
                >
                  {{ p.short }}
                </p>
              </div>
            </div>
          </div>

          <div
            v-if="activeTab === 'vision'"
            class="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6"
          >
            <a
              href="#book-demo"
              class="btn-primary ripple group inline-flex items-center gap-2"
              @mousemove="rippleHandler"
            >
              Book free demo
              <IconArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <NuxtLink to="/academic-coverage" class="btn-secondary inline-flex items-center gap-2">
              Explore coverage
            </NuxtLink>
          </div>
        </article>
      </motion.div>
    </div>
  </section>
</template>

