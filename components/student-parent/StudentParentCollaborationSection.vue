<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spCollaboration } from '~/data/student-parent'
</script>

<template>
  <section id="collaboration" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="collaboration-heading">
    <div class="container-page relative">
      <CardHeader heading-id="collaboration-heading" :badge="spCollaboration.badge" :title="spCollaboration.title"
        :description="spCollaboration.description" :classes="spCollaboration.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <li v-for="(role, i) in spCollaboration.roles" :key="role.title" class="relative" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 420 } }">
          <article
            class="flex h-full flex-col items-center rounded-[1.5rem] border border-slate-200/80 bg-cream-50/60 p-6 text-center shadow-soft">
            <span
              class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="role.iconMdi" class="h-7 w-7" />
            </span>
            <h3 class="mt-4 font-display text-lg font-bold text-slate-900">{{ role.title }}</h3>
            <p class="mt-2 text-[13.5px] leading-relaxed text-slate-600">{{ role.description }}</p>
          </article>
          <Icon v-if="i < spCollaboration.roles.length - 1" icon="mdi:arrow-right"
            class="pointer-events-none absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-blue-400 lg:block"
            aria-hidden="true" />
        </li>
      </ol>

      <p
        class="mx-auto mt-8 max-w-xl rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 py-4 text-center text-sm font-semibold text-white sm:text-base">
        Shared Objective — {{ spCollaboration.objective }}
      </p>
    </div>
  </section>
</template>
