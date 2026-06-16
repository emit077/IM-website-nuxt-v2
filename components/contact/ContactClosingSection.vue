<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { contactClosing } from '~/data/contact'
</script>

<template>
  <section class="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="contact-closing-heading">
    <div class="container-page">
      <div
        class="mx-auto max-w-2xl text-center"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true"
        >
          <Icon icon="mdi:handshake-outline" class="h-6 w-6" />
        </span>
        <h2
          id="contact-closing-heading"
          class="font-display mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {{ contactClosing.title }}
        </h2>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ contactClosing.text }}
        </p>
      </div>
    </div>
  </section>
</template>
