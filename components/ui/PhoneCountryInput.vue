<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, watch, watchEffect } from 'vue'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import type { MasterCountry } from '~/types/master-api'
import {
  countryFlagIcon,
  formatDialingCode,
  isIndiaCountry,
  nationalNumberBounds,
  normalizeNationalNumber,
} from '~/utils/phone'

const props = withDefaults(
  defineProps<{
    inputId: string
    invalid?: boolean
    placeholder?: string
    variant?: 'inline' | 'filled'
    tone?: 'violet' | 'blue'
    disabled?: boolean
    required?: boolean
    ariaDescribedby?: string
  }>(),
  {
    invalid: false,
    placeholder: '',
    variant: 'inline',
    tone: 'blue',
    disabled: false,
    required: false,
    ariaDescribedby: undefined,
  },
)

const number = defineModel<string>({ required: true })
const country = defineModel<MasterCountry | null>('country', { default: null })

const { countries, defaultCountry } = useMasterCountries()

const open = ref(false)
const query = ref('')
const activeIndex = ref(0)
const rootRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const searchRef = ref<HTMLInputElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const menuStyle = ref<Record<string, string>>({})
const listId = `${useId()}-countries`

const selected = computed(() => resolveCountry(country.value, countries.value, defaultCountry.value))

watchEffect(() => {
  const next = selected.value
  if (!next) return
  if (!country.value || country.value.id !== next.id) country.value = next
})

watch(
  () => selected.value?.id,
  () => {
    const cleaned = normalizeNationalNumber(number.value ?? '', selected.value)
    if (cleaned !== (number.value ?? '')) number.value = cleaned
  },
)

const dialCode = computed(() => formatDialingCode(selected.value?.dialing_code) || '+91')
const flagIcon = computed(() => countryFlagIcon(selected.value?.abbreviation))
const maxLength = computed(() => nationalNumberBounds(selected.value).max)
const placeholderText = computed(() => {
  if (props.placeholder) return props.placeholder
  return isIndiaCountry(selected.value) ? '9876543210' : 'Mobile number'
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return countries.value
  return countries.value.filter((item) => {
    const dial = formatDialingCode(item.dialing_code).toLowerCase()
    return (
      item.country_name.toLowerCase().includes(q)
      || item.abbreviation.toLowerCase().includes(q)
      || dial.includes(q.replace(/\s/g, ''))
    )
  })
})

const shellClass = computed(() => {
  if (props.variant === 'filled') {
    return [
      'group flex w-full items-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200',
      props.invalid ? 'ring-2 ring-rose-300' : '',
    ]
  }
  const focus = props.tone === 'violet'
    ? 'focus-within:border-violet-400 focus-within:ring-violet-200/70'
    : 'focus-within:border-blue-400 focus-within:ring-blue-200/70'
  return [
    'group flex w-full items-center gap-2 rounded-xl border bg-white px-3.5 py-3 transition focus-within:ring-2',
    focus,
    props.invalid ? 'border-rose-300' : 'border-slate-200',
  ]
})

function resolveCountry(
  current: MasterCountry | null,
  list: MasterCountry[],
  fallback: MasterCountry,
) {
  if (!current) return fallback
  return (
    list.find((item) => item.id !== 0 && item.id === current.id)
    ?? list.find((item) => countriesMatch(item, current))
    ?? fallback
  )
}

function countriesMatch(a: MasterCountry, b: MasterCountry) {
  const abbrA = a.abbreviation.trim().toUpperCase()
  const abbrB = b.abbreviation.trim().toUpperCase()
  if (abbrA && abbrA === abbrB) return true
  return a.country_name.trim().toLowerCase() === b.country_name.trim().toLowerCase()
    && formatDialingCode(a.dialing_code) === formatDialingCode(b.dialing_code)
}

function updateMenuPosition() {
  const root = rootRef.value
  if (!root) return
  const rect = root.getBoundingClientRect()
  const width = Math.min(320, Math.max(240, rect.width))
  const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8))
  const estimated = 280
  const spaceBelow = window.innerHeight - rect.bottom
  const openUp = spaceBelow < estimated && rect.top > spaceBelow
  menuStyle.value = openUp
    ? {
      left: `${left}px`,
      width: `${width}px`,
      bottom: `${window.innerHeight - rect.top + 6}px`,
    }
    : {
      left: `${left}px`,
      width: `${width}px`,
      top: `${rect.bottom + 6}px`,
    }
}

function onReposition() {
  if (open.value) updateMenuPosition()
}

watch(open, (isOpen) => {
  if (!import.meta.client) return
  if (isOpen) {
    const index = filtered.value.findIndex((item) => item.id === selected.value?.id)
    activeIndex.value = index >= 0 ? index : 0
    nextTick(() => {
      updateMenuPosition()
      searchRef.value?.focus()
    })
    window.addEventListener('scroll', onReposition, true)
    window.addEventListener('resize', onReposition)
    return
  }
  window.removeEventListener('scroll', onReposition, true)
  window.removeEventListener('resize', onReposition)
  query.value = ''
})

onUnmounted(() => {
  if (!import.meta.client) return
  window.removeEventListener('scroll', onReposition, true)
  window.removeEventListener('resize', onReposition)
})

onClickOutside(rootRef, () => {
  open.value = false
}, { ignore: [menuRef] })

function toggle() {
  if (props.disabled) return
  open.value = !open.value
}

function selectCountry(option: MasterCountry) {
  country.value = option
  open.value = false
  nextTick(() => inputRef.value?.focus())
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const cleaned = normalizeNationalNumber(target.value, selected.value)
  if (target.value !== cleaned) target.value = cleaned
  number.value = cleaned
}

function onKeydown(event: KeyboardEvent) {
  const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'Home', 'End', 'ArrowLeft', 'ArrowRight']
  if (allowed.includes(event.key)) return
  if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x', 'z', 'y'].includes(event.key.toLowerCase())) return
  if (!/^\d$/.test(event.key)) event.preventDefault()
}

function onMenuKeydown(event: KeyboardEvent) {
  const items = filtered.value
  if (event.key === 'Escape') {
    event.preventDefault()
    open.value = false
    buttonRef.value?.focus()
    return
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    activeIndex.value = items.length ? (activeIndex.value + 1) % items.length : 0
    return
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value = items.length ? (activeIndex.value - 1 + items.length) % items.length : 0
    return
  }
  if (event.key === 'Enter') {
    event.preventDefault()
    const option = items[activeIndex.value]
    if (option) selectCountry(option)
  }
}

function onButtonKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    open.value = true
  }
}
</script>

<template>
  <div ref="rootRef" :class="shellClass">
    <slot name="leading">
      <!-- <Icon v-if="variant === 'inline'" icon="mdi:cellphone" :class="[
        'h-[18px] w-[18px] shrink-0 text-slate-400 transition',
        tone === 'violet' ? 'group-focus-within:text-violet-600' : 'group-focus-within:text-blue-600',
      ]" aria-hidden="true" /> -->
    </slot>

    <button ref="buttonRef" type="button"
      class="inline-flex shrink-0 items-center gap-1 rounded-lg py-0.5 pr-0.5 text-[13px] font-semibold text-slate-600 outline-none transition hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-300"
      :aria-expanded="open" aria-haspopup="listbox" :aria-controls="listId" :disabled="disabled"
      :aria-label="`Country code, ${selected?.country_name ?? 'India'}, ${dialCode}`" @click="toggle"
      @keydown="onButtonKeydown">
      <span class="grid h-3.5 w-5 shrink-0 place-items-center overflow-hidden rounded-[2px] bg-slate-100 ring-1 ring-slate-200/80"
        aria-hidden="true">
        <Icon v-if="flagIcon" :icon="flagIcon" class="h-full w-full" />
        <span v-else class="text-[9px] font-bold uppercase leading-none text-slate-500">
          {{ (selected?.abbreviation || 'IN').slice(0, 2) }}
        </span>
      </span>
      <span class="tabular-nums">{{ dialCode }}</span>
      <Icon icon="mdi:chevron-down" :class="['h-3.5 w-3.5 text-slate-400 transition', open && 'rotate-180']"
        aria-hidden="true" />
    </button>

    <span aria-hidden="true" class="h-5 w-px shrink-0 bg-slate-200" />

    <input :id="inputId" ref="inputRef" :value="number" type="tel" inputmode="numeric" autocomplete="tel-national"
      :required="required" :disabled="disabled" :maxlength="maxLength" :placeholder="placeholderText" :class="[
        'w-full min-w-0 bg-transparent tracking-wide text-slate-900 placeholder:text-slate-400 focus:outline-none',
        variant === 'inline' ? 'text-[14px]' : 'text-sm',
      ]" :aria-invalid="invalid || undefined" :aria-describedby="ariaDescribedby" @input="onInput"
      @keydown="onKeydown" />
  </div>

  <Teleport to="body">
    <div v-if="open" ref="menuRef"
      class="fixed z-[80] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)]"
      :style="menuStyle" @keydown="onMenuKeydown">
      <div class="border-b border-slate-100 p-2">
        <label class="sr-only" :for="`${listId}-search`">Search countries</label>
        <input :id="`${listId}-search`" ref="searchRef" v-model="query" type="text" autocomplete="off"
          placeholder="Search country"
          class="w-full rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:bg-white focus:ring-blue-300" />
      </div>
      <ul :id="listId" role="listbox" aria-label="Enabled countries" class="max-h-56 overflow-y-auto py-1">
        <li v-if="!filtered.length" class="px-3 py-2 text-sm text-slate-500">No countries match.</li>
        <li v-for="(option, index) in filtered" :key="option.id" role="presentation">
          <button type="button" role="option" :aria-selected="option.id === selected?.id" :class="[
            'flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-slate-700',
            index === activeIndex ? 'bg-blue-50' : 'hover:bg-slate-50',
          ]" @mouseenter="activeIndex = index" @click="selectCountry(option)">
            <span class="grid h-3.5 w-5 shrink-0 place-items-center overflow-hidden rounded-[2px] bg-slate-100 ring-1 ring-slate-200/80"
              aria-hidden="true">
              <Icon v-if="countryFlagIcon(option.abbreviation)" :icon="countryFlagIcon(option.abbreviation)!"
                class="h-full w-full" />
              <span v-else class="text-[9px] font-bold uppercase text-slate-500">{{ option.abbreviation.slice(0, 2)
                }}</span>
            </span>
            <span class="min-w-0 flex-1 truncate">{{ option.country_name }}</span>
            <span class="shrink-0 tabular-nums text-xs font-semibold text-slate-500">
              {{ formatDialingCode(option.dialing_code) }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </Teleport>
</template>
