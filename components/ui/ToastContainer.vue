<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { toasts, dismiss } = useToast()

const toastStyles = {
  success: {
    icon: 'mdi:check-circle-outline',
    iconClass: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    borderClass: 'border-emerald-100',
  },
  error: {
    icon: 'mdi:alert-circle-outline',
    iconClass: 'bg-red-50 text-red-600 ring-red-100',
    borderClass: 'border-red-100',
  },
} as const
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="fixed right-4 top-4 z-[100] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6"
        aria-live="polite" aria-atomic="true">
        <TransitionGroup enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-2 opacity-0 scale-95" enter-to-class="translate-y-0 opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in" leave-from-class="translate-y-0 opacity-100 scale-100"
          leave-to-class="translate-y-2 opacity-0 scale-95">
          <article v-for="toast in toasts" :key="toast.id" :role="toast.type === 'error' ? 'alert' : 'status'"
            :class="[
              'pointer-events-auto flex items-start gap-3 rounded-2xl border bg-white/95 p-4 text-left shadow-[0_18px_50px_-24px_rgba(15,23,42,0.55)] ring-1 ring-black/5 backdrop-blur',
              toastStyles[toast.type].borderClass,
            ]">
            <span :class="[
              'grid h-9 w-9 shrink-0 place-items-center rounded-xl ring-1',
              toastStyles[toast.type].iconClass,
            ]">
              <Icon :icon="toastStyles[toast.type].icon" class="h-5 w-5" aria-hidden="true" />
            </span>

            <div class="min-w-0 flex-1">
              <p v-if="toast.title" class="text-sm font-semibold text-slate-900">
                {{ toast.title }}
              </p>
              <p class="text-sm leading-relaxed text-slate-600" :class="toast.title ? 'mt-0.5' : ''">
                {{ toast.message }}
              </p>
            </div>

            <button type="button"
              class="-mr-1 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              :aria-label="`Dismiss ${toast.type} message`" @click="dismiss(toast.id)">
              <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
            </button>
          </article>
        </TransitionGroup>
      </div>
    </Teleport>
  </ClientOnly>
</template>
