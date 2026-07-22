<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { processSection, processSteps } from '~/data/channel-partner'

const activeIndex = ref(0)

function selectStep(index: number) {
  activeIndex.value = index
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  const last = processSteps.length - 1
  let next = index

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    next = index === last ? 0 : index + 1
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    next = index === 0 ? last : index - 1
  } else if (event.key === 'Home') {
    event.preventDefault()
    next = 0
  } else if (event.key === 'End') {
    event.preventDefault()
    next = last
  } else {
    return
  }

  selectStep(next)
  document.getElementById(`process-tab-${processSteps[next]!.no}`)?.focus()
}

function goPrev() {
  if (activeIndex.value > 0) activeIndex.value -= 1
}

function goNext() {
  if (activeIndex.value < processSteps.length - 1) activeIndex.value += 1
}
</script>

<template>
  <section
    id="partnership-process"
    class="relative scroll-mt-20 overflow-hidden bg-slate-50/80 section-py"
    aria-labelledby="partnership-process-heading"
  >
    <div class="container-page relative">
      <CardHeader
        heading-id="partnership-process-heading"
        :badge="processSection.kicker"
        :title="processSection.title"
        :description="processSection.description"
        :classes="processSection.classes"
      />

      <p
        v-if="processSection.journeyLabel"
        id="process-journey-label"
        class="mt-5 text-center text-sm font-semibold text-slate-600"
      >
        {{ processSection.journeyLabel }}
      </p>

      <!-- ========== MOBILE: vertical journey accordion ========== -->
      <ol
        class="relative mx-auto mt-8 max-w-lg space-y-0 lg:hidden"
        role="list"
        :aria-label="processSection.journeyLabel || 'Partnership process steps'"
      >
        <li
          v-for="(step, i) in processSteps"
          :key="`m-${step.no}`"
          class="relative pl-[3.25rem]"
        >
          <!-- Spine -->
          <span
            v-if="i < processSteps.length - 1"
            aria-hidden="true"
            class="absolute left-[22px] top-12 bottom-0 w-0.5"
            :class="i < activeIndex ? 'bg-blue-500' : 'bg-slate-200'"
          />

          <!-- Number node -->
          <button
            type="button"
            class="absolute left-0 top-3 z-10 grid h-11 w-11 place-items-center rounded-full text-sm font-extrabold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            :class="
              activeIndex === i
                ? 'bg-blue-600 text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.8)] ring-4 ring-blue-100'
                : i < activeIndex
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-500 ring-2 ring-slate-200'
            "
            :aria-expanded="activeIndex === i"
            :aria-controls="`process-mobile-panel-${step.no}`"
            :aria-label="`Step ${step.no}: ${step.tabTitle}`"
            @click="selectStep(i)"
          >
            <Icon
              v-if="i < activeIndex"
              icon="mdi:check"
              class="h-5 w-5"
              aria-hidden="true"
            />
            <span v-else>{{ Number(step.no) }}</span>
          </button>

          <div
            class="mb-3 overflow-hidden rounded-2xl border transition duration-200"
            :class="
              activeIndex === i
                ? 'border-blue-200 bg-white shadow-soft'
                : 'border-slate-200/80 bg-white/70'
            "
          >
            <button
              type="button"
              class="flex w-full items-center gap-3 px-4 py-3.5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-300/60"
              :aria-expanded="activeIndex === i"
              :aria-controls="`process-mobile-panel-${step.no}`"
              @click="selectStep(i)"
            >
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                :class="activeIndex === i ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-500'"
                aria-hidden="true"
              >
                <Icon :icon="step.iconMdi" class="h-5 w-5" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Step {{ step.no }}
                </span>
                <span class="mt-0.5 block font-display text-[15px] font-bold leading-snug text-slate-900">
                  {{ step.tabTitle }}
                </span>
              </span>
              <Icon
                :icon="activeIndex === i ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="h-5 w-5 shrink-0 text-slate-400"
                aria-hidden="true"
              />
            </button>

            <div
              :id="`process-mobile-panel-${step.no}`"
              :hidden="activeIndex !== i"
              class="border-t border-slate-100 px-4 pb-5 pt-1"
            >
              <p class="text-[14px] leading-relaxed text-slate-600">
                {{ step.description }}
              </p>
              <ul v-if="step.points" class="mt-4 space-y-2.5" role="list">
                <li
                  v-for="point in step.points"
                  :key="point"
                  class="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700"
                >
                  <span
                    class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                    aria-hidden="true"
                  >
                    <IconCheck class="h-3 w-3" />
                  </span>
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div class="mt-5 flex gap-2">
                <button
                  v-if="i > 0"
                  type="button"
                  class="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
                  @click="goPrev"
                >
                  <Icon icon="mdi:arrow-left" class="h-4 w-4" aria-hidden="true" />
                  Prev
                </button>
                <button
                  v-if="i < processSteps.length - 1"
                  type="button"
                  class="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
                  @click="goNext"
                >
                  Next step
                  <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <!-- ========== DESKTOP: tab navigator ========== -->
      <div class="mx-auto mt-8 hidden max-w-4xl lg:block">
        <div
          role="tablist"
          aria-labelledby="process-journey-label"
          class="grid grid-cols-5 gap-3"
        >
          <button
            v-for="(step, i) in processSteps"
            :id="`process-tab-${step.no}`"
            :key="step.no"
            type="button"
            role="tab"
            :aria-selected="activeIndex === i"
            :aria-controls="`process-panel-${step.no}`"
            :tabindex="activeIndex === i ? 0 : -1"
            class="flex flex-col items-start gap-2 rounded-2xl border px-3.5 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
            :class="
              activeIndex === i
                ? 'border-blue-600 bg-blue-600 text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)]'
                : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/50'
            "
            @click="selectStep(i)"
            @keydown="onTabKeydown($event, i)"
          >
            <span
              class="inline-flex h-7 min-w-7 items-center justify-center rounded-lg px-1.5 text-[11px] font-extrabold tracking-wide"
              :class="activeIndex === i ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'"
            >
              {{ step.no }}
            </span>
            <span
              class="line-clamp-2 text-[13px] font-semibold leading-snug"
              :class="activeIndex === i ? 'text-white' : 'text-slate-800'"
            >
              {{ step.tabTitle }}
            </span>
          </button>
        </div>

        <div class="mt-4" aria-hidden="true">
          <div class="h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div
              class="h-full rounded-full bg-blue-600 transition-[width] duration-300 ease-out"
              :style="{ width: `${((activeIndex + 1) / processSteps.length) * 100}%` }"
            />
          </div>
          <p class="mt-2 text-center text-[12px] font-medium text-slate-500">
            Step {{ activeIndex + 1 }} of {{ processSteps.length }}
          </p>
        </div>

        <div class="mt-6">
          <div
            v-for="(step, i) in processSteps"
            :id="`process-panel-${step.no}`"
            :key="step.no"
            role="tabpanel"
            :aria-labelledby="`process-tab-${step.no}`"
            :hidden="activeIndex !== i"
            class="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-soft"
          >
            <div class="flex items-start gap-6">
              <span
                class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon :icon="step.iconMdi" class="h-7 w-7" />
              </span>
              <div class="min-w-0 flex-1">
                <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                  Step {{ step.no }}
                </p>
                <h3 class="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900">
                  {{ step.title }}
                </h3>
                <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                  {{ step.description }}
                </p>
                <ul
                  v-if="step.points"
                  class="mt-5 space-y-2.5 border-t border-slate-100 pt-5"
                  role="list"
                >
                  <li
                    v-for="point in step.points"
                    :key="point"
                    class="flex items-start gap-3 text-[14px] leading-snug text-slate-700"
                  >
                    <span
                      class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true"
                    >
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="activeIndex === 0"
              :aria-label="`Go to previous step${activeIndex > 0 ? `: ${processSteps[activeIndex - 1]!.title}` : ''}`"
              @click="goPrev"
            >
              <Icon icon="mdi:arrow-left" class="h-4 w-4" aria-hidden="true" />
              Previous
            </button>
            <button
              type="button"
              class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70 disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="activeIndex === processSteps.length - 1"
              :aria-label="`Go to next step${activeIndex < processSteps.length - 1 ? `: ${processSteps[activeIndex + 1]!.title}` : ''}`"
              @click="goNext"
            >
              Next
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <aside
        class="mx-auto mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-white p-6 text-center sm:p-8"
        aria-labelledby="process-cta-heading"
      >
        <h3
          id="process-cta-heading"
          class="font-display text-lg font-bold text-slate-900 sm:text-xl"
        >
          {{ processSection.ctaTitle }}
        </h3>
        <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
          {{ processSection.ctaDescription }}
        </p>
        <div class="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            :href="processSection.primaryCta.href"
            class="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,99,235,0.65)] transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
          >
            <Icon icon="mdi:account-plus-outline" class="h-4 w-4" aria-hidden="true" />
            {{ processSection.primaryCta.label }}
          </a>
          <a
            :href="processSection.secondaryCta.href"
            class="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
          >
            <Icon icon="mdi:phone-in-talk-outline" class="h-4 w-4" aria-hidden="true" />
            {{ processSection.secondaryCta.label }}
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>
