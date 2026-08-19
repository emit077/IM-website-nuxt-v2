<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { subTerms } from '~/data/subscription'
</script>

<template>
  <section id="terms" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="sub-terms-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-terms-heading" :badge="subTerms.badge" :title="subTerms.title"
        :description="subTerms.description" :classes="subTerms.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(topic, i) in subTerms.topics" :key="topic.title" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 25 + i * 35, duration: 380 } }">
          <article class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon :icon="topic.iconMdi" class="h-5 w-5" />
            </span>
            <h3 class="mt-3 font-display text-[15px] font-bold text-slate-900">{{ topic.title }}</h3>
            <p class="mt-2 text-[13px] leading-relaxed text-slate-600">{{ topic.description }}</p>
          </article>
        </li>
      </ul>

      <div class="mt-12 rounded-[1.65rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ subTerms.important.badge }}</p>
        <h3 class="mt-2 font-display text-2xl font-bold text-slate-900">{{ subTerms.important.title }}</h3>
        <div class="relative mt-6">
          <ul class="max-h-[11.5rem] space-y-3 overflow-hidden sm:max-h-[12.75rem]" role="list">
            <li v-for="item in subTerms.important.items" :key="item"
              class="flex items-start gap-3 text-[13.5px] leading-relaxed text-slate-600">
              <IconCheck class="mt-1 h-4 w-4 shrink-0 text-blue-600" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden="true">
            <div class="absolute inset-0 bg-gradient-to-t from-white from-20% via-white/80 to-transparent" />
            <div
              class="absolute inset-x-0 bottom-0 h-14 backdrop-blur-[1.5px] [mask-image:linear-gradient(to_top,black,transparent)]" />
            <div class="relative z-10  flex justify-center align-middle items-end flex h-full">
              <ActionBtn :label="subTerms.cta.label" :href="subTerms.cta.href" icon="mdi:file-document-outline" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
