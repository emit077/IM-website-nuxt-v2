<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { spExpect } from '~/data/student-parent'
</script>

<template>
  <section id="what-to-expect" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="expect-heading">
    <div class="container-page relative">
      <CardHeader heading-id="expect-heading" :badge="spExpect.badge" :title="spExpect.title"
        :description="spExpect.description" :classes="spExpect.classes" />

      <div class="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <article :id="spExpect.students.id"
          class="scroll-mt-28 relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8"
          v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />

          <div class="relative flex items-center gap-3">
            <span
              class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm"
              aria-hidden="true">
              <Icon :icon="spExpect.students.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100/80">
                {{ spExpect.students.label }}
              </p>
              <h3 class="mt-1 font-display text-lg font-extrabold leading-snug tracking-tight sm:text-xl">
                {{ spExpect.students.title }}
              </h3>
            </div>
          </div>

          <ul class="relative mt-7 space-y-3" role="list">
            <li v-for="item in spExpect.students.items" :key="item.title"
              class="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 backdrop-blur-sm">
              <span class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/15 text-amber-200"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-4 w-4" />
              </span>
              <div>
                <h4 class="font-display text-[15px] font-bold text-white">{{ item.title }}</h4>
                <p class="mt-1 text-[13px] leading-relaxed text-blue-100">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>

        <article :id="spExpect.parents.id"
          class="scroll-mt-28 relative flex flex-col overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-white via-cream-50 to-blue-50 p-6 shadow-[0_24px_60px_-28px_rgba(29,78,216,0.22)] sm:p-8"
          v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 90, duration: 480 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-indigo-200/25 blur-3xl" />

          <div class="relative flex items-center gap-3">
            <span
              class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="spExpect.parents.iconMdi" class="h-5 w-5" />
            </span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                {{ spExpect.parents.label }}
              </p>
              <h3
                class="mt-1 font-display text-lg font-extrabold leading-snug tracking-tight text-slate-900 sm:text-xl">
                {{ spExpect.parents.title }}
              </h3>
            </div>
          </div>
          <p class="relative mt-4 text-[14px] leading-relaxed text-slate-600">
            {{ spExpect.parents.description }}
          </p>

          <ul class="relative mt-7 space-y-3" role="list">
            <li v-for="item in spExpect.parents.items" :key="item.title"
              class="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-soft">
              <span class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-4 w-4" />
              </span>
              <div>
                <h4 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h4>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
