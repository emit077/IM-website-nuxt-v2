<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
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

      <div class="mt-10">
        <h3 class="text-center font-display text-lg font-bold text-slate-900 sm:text-xl">
          {{ securityDepositSection.featuresTitle }}
        </h3>
        <ul class="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          <li v-for="(item, i) in securityDepositSection.features" :key="item.title" v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 55, duration: 420 } }"
            :class="i === securityDepositSection.features.length - 1 && securityDepositSection.features.length % 3 === 2
              ? 'lg:col-span-2 lg:max-w-none lg:justify-self-center lg:w-[calc(50%-0.45rem)]'
              : i === securityDepositSection.features.length - 1 && securityDepositSection.features.length % 3 === 1
                ? 'sm:col-span-2 sm:max-w-md sm:justify-self-center lg:col-span-1 lg:max-w-none'
                : ''">
            <article
              class="flex h-full gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-card sm:p-5">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <div class="min-w-0">
                <h4 class="font-display text-[15px] font-bold text-slate-900">{{ item.title }}</h4>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-600">{{ item.description }}</p>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <div class="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-12" v-motion :initial="{ opacity: 0, y: 16 }"
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
