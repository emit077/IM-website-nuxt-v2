<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import { websiteInfo } from '~/data/contact'
</script>

<template>
  <section
    id="website"
    class="scroll-mt-24 border-t border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="website-heading"
  >
    <div class="container-page">
      <div
        class="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="border-b border-slate-100 p-7 sm:p-8 md:border-b-0 md:border-r">
            <span
              class="grid h-11 w-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100"
              aria-hidden="true"
            >
              <Icon icon="mdi:web" class="h-5 w-5" />
            </span>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600">
              Visit Our Website
            </p>
            <h2
              id="website-heading"
              class="font-display mt-2 text-xl font-bold leading-snug text-slate-900 sm:text-2xl"
            >
              {{ websiteInfo.title }}
            </h2>
            <p class="mt-3 text-sm text-slate-600">
              {{ websiteInfo.intro }}
            </p>
          </div>

          <div class="flex flex-col justify-between p-7 sm:p-8">
            <ul class="space-y-3" role="list">
              <li
                v-for="topic in websiteInfo.topics"
                :key="topic"
                class="flex items-start gap-3 text-sm text-slate-700"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                {{ topic }}
              </li>
            </ul>

            <a
              :href="websiteInfo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-6 inline-flex items-center gap-2 text-base font-semibold text-blue-700 underline-offset-4 transition hover:text-blue-800 hover:underline"
            >
              <Icon icon="mdi:link-variant" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ websiteInfo.displayUrl }}
              <IconArrowRight
                class="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
