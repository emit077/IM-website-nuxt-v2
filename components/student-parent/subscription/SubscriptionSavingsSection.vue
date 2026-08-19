<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subSavings } from '~/data/subscription'
</script>

<template>
  <section id="savings" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="sub-savings-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-savings-heading" :badge="subSavings.badge" :title="subSavings.title"
        :description="subSavings.description" :classes="subSavings.classes" />

      <div
        class="mx-auto mt-8 max-w-xl rounded-[1.5rem] bg-slate-900 px-6 py-8 text-center text-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <p class="font-display text-4xl font-black tracking-tight sm:text-5xl">{{ subSavings.highlight }}</p>
        <p class="mt-2 text-sm font-medium text-blue-100">{{ subSavings.highlightNote }}</p>
      </div>

      <ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
        <li v-for="(option, i) in subSavings.options" :key="option.payments" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 380 } }">
          <article :class="[
            'flex h-full flex-col rounded-[1.5rem] border p-5 shadow-soft',
            option.featured
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-slate-200/80 bg-white',
          ]">
            <p :class="['text-[11px] font-bold uppercase tracking-[0.14em]', option.featured ? 'text-blue-100' : 'text-slate-500']">
              {{ option.payments }}
            </p>
            <p class="mt-2 font-display text-xl font-bold">{{ option.discount }}</p>
            <p :class="['mt-2 text-[13px] leading-relaxed', option.featured ? 'text-blue-50' : 'text-slate-600']">
              {{ option.structure }}
            </p>
          </article>
        </li>
      </ul>
      <p class="mx-auto mt-5 max-w-3xl text-center text-[13px] leading-relaxed text-slate-500">
        {{ subSavings.disclaimer }}
      </p>

      <div class="mt-16">
        <CardHeader heading-id="why-annual-heading" :badge="subSavings.whyAnnual.badge"
          :title="subSavings.whyAnnual.title" :classes="subSavings.classes" />
        <ul class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="(item, i) in subSavings.whyAnnual.items" :key="item.title" v-motion
            :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
            <article
              class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
              <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="mt-3 font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h3>
              <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
            </article>
          </li>
        </ul>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article class="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ subSavings.validity.badge }}</p>
          <h3 class="mt-2 font-display text-xl font-bold text-slate-900">{{ subSavings.validity.title }}</h3>
          <p class="mt-3 text-[13.5px] leading-relaxed text-slate-600">{{ subSavings.validity.description }}</p>
          <p class="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-950">
            {{ subSavings.validity.warning }}
          </p>
          <p class="mt-4 text-[13px] font-semibold text-slate-800">{{ subSavings.validity.factorsLabel }}</p>
          <ul class="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2" role="list">
            <li v-for="factor in subSavings.validity.factors" :key="factor"
              class="text-[13px] text-slate-600">
              {{ factor }}
            </li>
          </ul>
        </article>

        <article class="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ subSavings.methods.badge }}</p>
          <h3 class="mt-2 font-display text-xl font-bold text-slate-900">{{ subSavings.methods.title }}</h3>
          <div class="mt-5">
            <p class="text-[13px] font-bold text-slate-800">{{ subSavings.methods.digital.title }}</p>
            <p class="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              {{ subSavings.methods.digital.items.join(' · ') }}
            </p>
          </div>
          <div class="mt-4">
            <p class="text-[13px] font-bold text-slate-800">{{ subSavings.methods.other.title }}</p>
            <p class="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              {{ subSavings.methods.other.items.join(' · ') }}
            </p>
          </div>
          <p class="mt-5 border-t border-slate-100 pt-4 text-[13px] leading-relaxed text-slate-500">
            {{ subSavings.methods.note }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
