<script setup lang="ts">
import { computed } from 'vue'

export type BarChartTheme = 'light' | 'dark'
export type BarChartLayout = 'absolute' | 'fill'

export interface BarChartDataItem {
  label: string
  data: number | string
  bgColor: string
  detail?: string
  labelSuffix?: string
  valueLabel?: string
  valueLabelShort?: string
  highlight?: boolean
}

export interface BarChartDataset {
  theme?: BarChartTheme
  data: BarChartDataItem[]
}

const HEIGHT_SCALE = 2.6
const MIN_HEIGHT_PX = 36
const MIN_HEIGHT_PERCENT = 18

const props = withDefaults(
  defineProps<{
    dataset: BarChartDataset
    ariaLabel?: string
    layout?: BarChartLayout
    showBaseline?: boolean
    chartKey?: string | number
  }>(),
  {
    layout: 'absolute',
    showBaseline: true,
  },
)


const items = computed(() => props.dataset.data ?? [])
const isDark = computed(() => (props.dataset.theme ?? 'light') === 'dark')
const isFill = computed(() => props.layout === 'fill')
const colCount = computed(() => Math.max(items.value.length, 1))

const themeClasses = computed(() =>
  isDark.value
    ? {
      baseline: 'bg-white/20',
      label: 'text-white',
      detail: 'text-white/80',
      suffix: 'text-white/70',
      highlight: 'text-orange-300',
    }
    : {
      baseline: 'bg-slate-200',
      label: 'text-slate-900',
      detail: 'text-slate-500',
      suffix: 'text-slate-500',
      highlight: 'text-blue-600',
    },
)

function toNumber(data: number | string) {
  if (typeof data === 'number') return data
  const parsed = Number.parseFloat(String(data).replace(/[^\d.-]/g, ''))
  return Number.isFinite(parsed) ? parsed : 0
}

function displayValue(item: BarChartDataItem) {
  if (item.valueLabel) return item.valueLabel
  if (typeof item.data === 'string') return item.data
  return `${item.data}%`
}

function barHeight(item: BarChartDataItem) {
  const value = toNumber(item.data)
  return isFill.value
    ? Math.max(value, MIN_HEIGHT_PERCENT)
    : Math.max(Math.round(value * HEIGHT_SCALE), MIN_HEIGHT_PX)
}

function labelClass(item: BarChartDataItem) {
  return item.highlight ? themeClasses.value.highlight : themeClasses.value.label
}

function valueClass(index: number) {
  const palette = isDark.value ? 'text-white' : "text-slate-700"
  return palette;
}
</script>

<template>
  <div class="w-full" role="img" :aria-label="ariaLabel">
    <div :key="chartKey ?? 'bar-chart'" :class="isFill ? 'mx-auto w-full max-w-md' : 'mx-auto w-fit'">
      <!-- Absolute layout -->
      <template v-if="!isFill">
        <div class="flex items-end justify-center">
          <div v-for="(item, i) in items" :key="`${item.label}-${i}`" class="flex w-36 flex-col items-center sm:w-40">
            <span class="mb-2 font-display text-xl font-bold" :class="valueClass(i)" v-motion
              :initial="{ opacity: 0, scale: 0.85 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 380 + i * 80, duration: 450 } }">
              <span v-if="item.valueLabelShort" class="sm:hidden">{{ item.valueLabelShort }}</span>
              <span :class="item.valueLabelShort ? 'hidden sm:inline' : undefined">{{ displayValue(item) }}</span>
            </span>
            <div class="w-16 origin-bottom rounded-xl rounded-b-none sm:w-[4.5rem]" :class="item.bgColor" v-motion
              :initial="{ scaleY: 0 }"
              :visibleOnce="{ scaleY: 1, transition: { delay: 300 + i * 100, duration: 1000, ease: 'easeOut' } }"
              :style="{ height: `${barHeight(item)}px` }" aria-hidden="true" />
          </div>
        </div>

        <div v-if="showBaseline" class="h-px w-full" :class="themeClasses.baseline" aria-hidden="true" />

        <div class="flex justify-center">
          <div v-for="(item, i) in items" :key="`${item.label}-${i}-caption`"
            class="w-36 px-2 pt-4 text-center sm:w-40 sm:px-3">
            <p class="font-display text-sm font-bold" :class="labelClass(item)">
              {{ item.label }}
              <span v-if="item.labelSuffix" class="text-xs font-medium" :class="themeClasses.suffix">
                {{ item.labelSuffix }}
              </span>
            </p>
            <p v-if="item.detail" class="mt-1 text-xs" :class="themeClasses.detail">{{ item.detail }}</p>
          </div>
        </div>
      </template>

      <!-- Fill layout -->
      <template v-else>
        <div class="grid h-44 items-end gap-2 pt-8 sm:h-56 sm:gap-4 sm:pt-9"
          :style="{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }">
          <div v-for="(item, i) in items" :key="`${item.label}-${i}`" class="flex h-full items-end justify-center">
            <div class="relative w-16 sm:w-20 md:w-24" aria-hidden="true" :style="{ height: `${barHeight(item)}%` }">
              <div class="absolute bottom-full left-0 right-0 mb-1.5 flex justify-center sm:mb-2" v-motion
                :initial="{ opacity: 0 }"
                :visibleOnce="{ opacity: 1, transition: { delay: 80 + i * 60, duration: 400 } }">
                <span class="whitespace-nowrap text-center font-display text-xs font-bold tabular-nums sm:text-sm"
                  :class="valueClass(i)">
                  <span v-if="item.valueLabelShort" class="sm:hidden">{{ item.valueLabelShort }}</span>
                  <span :class="item.valueLabelShort ? 'hidden sm:inline' : undefined">{{ displayValue(item) }}</span>
                </span>
              </div>
              <div class="h-full w-full origin-bottom rounded-t-xl" :class="item.bgColor" v-motion
                :initial="{ scaleY: 0 }" :visibleOnce="{
                  scaleY: 1,
                  transition: { delay: 60 + i * 80, duration: 700, ease: 'easeOut' },
                }" />
            </div>
          </div>
        </div>

        <div v-if="showBaseline" class="h-px" :class="themeClasses.baseline" aria-hidden="true" />

        <div class="grid gap-2 pt-3 sm:gap-4" :style="{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }">
          <div v-for="(item, i) in items" :key="`${item.label}-${i}-caption`"
            class="flex flex-col items-center text-center">
            <p class="font-display text-sm font-bold sm:text-base" :class="labelClass(item)">
              {{ item.label }}
              <span v-if="item.labelSuffix" class="text-xs font-medium" :class="themeClasses.suffix">
                {{ item.labelSuffix }}
              </span>
            </p>
            <p v-if="item.detail" class="mt-1 text-xs" :class="themeClasses.detail">{{ item.detail }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
