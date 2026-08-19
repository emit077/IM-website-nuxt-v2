<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { subRecommend } from '~/data/subscription'
</script>

<template>
  <section id="recommend" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="sub-recommend-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-recommend-heading" :badge="subRecommend.badge" :title="subRecommend.title"
        :description="subRecommend.description" :classes="subRecommend.classes" />

      <div class="mt-10 rounded-[1.65rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
        <p class="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">Tell Us About</p>
        <ul class="mt-5 flex flex-wrap justify-center gap-2.5" role="list">
          <li v-for="item in subRecommend.tellUs" :key="item"
            class="rounded-full border border-slate-200 bg-cream-50 px-3.5 py-1.5 text-[13px] font-medium text-slate-700">
            {{ item }}
          </li>
        </ul>

        <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ActionBtn variant="theme-secondary" :label="subRecommend.cta.label" :href="subRecommend.cta.href"
            :icon="subRecommend.cta.iconMdi" />
          <a :href="subRecommend.secondary.href"
            class="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700">
            <Icon :icon="subRecommend.secondary.iconMdi" class="h-4 w-4" aria-hidden="true" />
            {{ subRecommend.secondary.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
