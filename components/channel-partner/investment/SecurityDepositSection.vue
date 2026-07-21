<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { securityDepositSection } from '~/data/channel-partner-investment'
</script>

<template>
  <section id="security-deposit" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="security-deposit-heading">
    <div class="container-page">
      <CardHeader heading-id="security-deposit-heading" :badge="securityDepositSection.kicker"
        :title="securityDepositSection.title" :description="securityDepositSection.description"
        :classes="securityDepositSection.classes" />
      <p class="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
        {{ securityDepositSection.body }}
      </p>

      <div class="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <article
          class="rounded-3xl border border-blue-100 bg-blue-50/70 p-6 shadow-soft sm:p-8 lg:col-span-5"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <h3 class="font-display text-lg font-bold text-blue-700">{{ securityDepositSection.featuresTitle }}</h3>
          <ul class="mt-5 space-y-3.5" role="list">
            <li v-for="(item, i) in securityDepositSection.features" :key="item"
              class="flex items-start gap-3 text-[13.5px] leading-relaxed text-slate-700 sm:text-sm"
              v-motion :initial="{ opacity: 0, x: -8 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 40 + i * 45, duration: 400 } }">
              <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-600 text-white"
                aria-hidden="true">
                <IconCheck class="h-3.5 w-3.5" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>

        <div class="lg:col-span-7" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
          <div class="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft">
            <div class="border-b border-slate-200/80 px-5 py-4 section-surface-muted sm:px-6">
              <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">
                {{ securityDepositSection.tableTitle }}
              </h3>
              <p class="mt-1 text-sm text-slate-500">{{ securityDepositSection.tableDescription }}</p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[360px] text-left text-sm">
                <thead>
                  <tr class="border-b border-slate-200/80">
                    <th class="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                      Territory Level
                    </th>
                    <th class="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                      Operational Coverage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in securityDepositSection.territoryLevels" :key="row.level"
                    class="border-b border-slate-100 last:border-0">
                    <td class="px-5 py-3.5 font-medium text-slate-800 sm:px-6">{{ row.level }}</td>
                    <td class="px-5 py-3.5 text-slate-600 sm:px-6">{{ row.coverage }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p class="mt-4 flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-500">
            <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            {{ securityDepositSection.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
