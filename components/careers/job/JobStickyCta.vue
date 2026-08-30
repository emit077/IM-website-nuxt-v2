<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { jobPageCtas } from '~/data/careers'
import { jobApplyHref, jobResumeHref, type CareerJob } from '~/data/career-jobs'

const props = defineProps<{ job: CareerJob }>()

const { y } = useWindowScroll()
const { height: viewportHeight } = useWindowSize()
const dismissed = ref(false)

const visible = computed(() => {
  if (dismissed.value || !import.meta.client || y.value < 720) return false
  return y.value + viewportHeight.value < document.documentElement.scrollHeight - 140
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-show="visible"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 shadow-[0_-12px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur"
      role="region"
      aria-label="Job application actions"
    >
      <div class="container-page flex items-center gap-3 py-3 sm:gap-5 sm:py-3.5">
        <p class="hidden min-w-0 flex-1 text-[13px] font-semibold text-slate-700 sm:block">
          {{ job.title }} · {{ job.locationShort }}
        </p>
        <div class="flex flex-1 items-center gap-2.5 sm:flex-none">
          <a
            :href="jobResumeHref(job)"
            class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 sm:flex-none sm:px-5"
          >
            <Icon icon="mdi:file-upload-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
            {{ jobPageCtas.resumeLabel }}
          </a>
          <a
            :href="jobApplyHref(job)"
            class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 sm:flex-none sm:px-5"
          >
            <Icon icon="mdi:send-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
            {{ jobPageCtas.applyLabel }}
          </a>
        </div>
        <button
          type="button"
          class="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Dismiss application actions"
          @click="dismissed = true"
        >
          <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  </Transition>
</template>
