<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { faqLiveChat } from '~/data/faq'
</script>

<template>
  <section
    class="mt-8 overflow-hidden rounded-xl border border-slate-200/80 bg-white"
    aria-labelledby="faq-live-chat-heading"
  >
    <div class="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
      <div class="min-w-0">
        <span
          class="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true"
        >
          <Icon icon="mdi:chat-processing-outline" class="h-4 w-4" />
        </span>
        <h2 id="faq-live-chat-heading" class="font-display mt-3 text-lg font-bold tracking-tight text-slate-900">
          {{ faqLiveChat.title }}
        </h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          {{ faqLiveChat.intro }}
        </p>
        <p class="mt-3 text-sm leading-relaxed text-slate-500">
          {{ faqLiveChat.closing }}
        </p>
      </div>

      <div class="rounded-xl bg-slate-50 px-4 py-4 sm:px-5">
        <h3 class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
          {{ faqLiveChat.featuresTitle }}
        </h3>
        <ul class="mt-3 space-y-2.5" role="list">
          <li
            v-for="feature in faqLiveChat.features"
            :key="feature"
            class="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
          >
            <Icon icon="mdi:check-circle" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
