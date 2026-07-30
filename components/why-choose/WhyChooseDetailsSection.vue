<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { whyChooseDetails } from '~/data/why-choose'
</script>

<template>
  <div>
    <section v-for="(detail, i) in whyChooseDetails" :id="detail.id" :key="detail.id"
      class="relative scroll-mt-28 overflow-hidden section-py"
      :class="i % 2 === 0 ? 'bg-white' : 'section-surface-muted'" :aria-labelledby="`${detail.id}-heading`">
      <div class="container-page">
        <div class="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div class="lg:col-span-5" v-motion :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
            <p class="text-[12px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ String(i + 1).padStart(2, '0') }} · {{ detail.kicker }}
            </p>

            <div class="mt-4 flex items-start gap-4">
              <span
                class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="detail.iconMdi" class="h-7 w-7" />
              </span>
              <h2 :id="`${detail.id}-heading`"
                class="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-[1.2]">
                {{ detail.title }}
              </h2>
            </div>

            <div class="mt-6 space-y-4">
              <p v-for="(para, pi) in detail.description" :key="pi"
                class="text-[15px] leading-relaxed text-slate-600 sm:text-base">
                {{ para }}
              </p>
            </div>

            <div
              class="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-5 sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">Key Benefit</p>
              <p class="mt-2 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                {{ detail.benefit }}
              </p>
            </div>

            <div v-if="detail.cta" class="mt-7">
              <ActionBtn variant="primary" :href="detail.cta.href" :label="detail.cta.label"
                icon="mdi:arrow-right" />
            </div>
          </div>

          <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 16 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 480 } }">
            <div
              class="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8"
              :class="i % 2 === 1 ? 'lg:bg-white' : ''">
              <p class="font-display text-base font-bold text-slate-900 sm:text-lg">
                {{ detail.listLabel }}
              </p>
              <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
                <li v-for="point in detail.points" :key="point"
                  class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3 text-[13.5px] leading-snug text-slate-700 transition hover:border-blue-100 hover:bg-blue-50/40">
                  <span
                    class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                    aria-hidden="true">
                    <IconCheck class="h-3 w-3" />
                  </span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
