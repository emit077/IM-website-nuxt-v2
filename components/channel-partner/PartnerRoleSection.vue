<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { roleSection, responsibilities } from '~/data/channel-partner'
</script>

<template>
  <section id="partner-role" class="relative scroll-mt-20 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="partner-role-heading">
    <div class="container-page">
      <CardHeader heading-id="partner-role-heading" content-class="!px-0 !py-0" :badge="roleSection.kicker"
        title='Your role in the <span class="text-gradient-brand">Indian Mentors ecosystem</span>'
        :description="roleSection.description" />

      <!-- Responsibilities grid -->
      <ul class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in responsibilities" :key="item.title" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 6) * 40, duration: 400 } }"
          :class="i === responsibilities.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''">
          <article
            class="group flex h-full items-start gap-3.5 rounded-2xl border border-slate-200/70 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
              aria-hidden="true">
              <Icon :icon="item.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <h3 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ item.description }}</p>
            </div>
          </article>
        </li>
      </ul>

      <!-- Note -->
      <div class="mx-auto mt-8 max-w-2xl" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p
          class="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3.5 text-[13px] leading-relaxed text-blue-900 sm:text-sm">
          <Icon icon="mdi:link-variant" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          {{ roleSection.note }}
        </p>
      </div>
    </div>
  </section>
</template>
