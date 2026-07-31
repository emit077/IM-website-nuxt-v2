<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import PlatformAccessFeaturesSection from '../platform-access/PlatformAccessFeaturesSection.vue'
import {
  investmentStructureSection,
  platformLicenseSection,
  securityDepositSection,
} from '~/data/channel-partner-investment'

const deposit = investmentStructureSection.components[0]
const license = investmentStructureSection.components[1]
const maxScope = Math.max(...securityDepositSection.territoryLevels.map((t) => t.scope))
</script>

<template>
  <section id="investment-structure" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="investment-structure-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-emerald-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-36 -left-28 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="investment-structure-heading" :badge="investmentStructureSection.kicker"
          :title="investmentStructureSection.title" :description="investmentStructureSection.description"
          :classes="investmentStructureSection.classes" />
      </div>


      <div class="mx-auto mt-12 space-y-8 lg:mt-14 lg:space-y-10">
        <!-- ── Section 3: Security Deposit ── -->
        <article id="security-deposit"
          class="scroll-mt-24 overflow-hidden rounded-[28px] border border-emerald-200/60 bg-white shadow-soft" v-motion
          :initial="{ opacity: 0, y: 20 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 560 } }">
          <div
            class="relative border-b border-emerald-100/80 bg-gradient-to-br from-emerald-50 via-white to-white px-6 py-7 sm:px-8 sm:py-8">
            <span aria-hidden="true"
              class="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7.5rem] font-black leading-none text-emerald-100/80">
              01
            </span>

            <div class="relative flex flex-wrap items-start gap-4">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-600 text-white shadow-[0_12px_28px_-12px_rgba(5,150,105,0.55)]"
                aria-hidden="true">
                <Icon :icon="deposit.iconMdi" class="h-6 w-6" />
              </span>
              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700">
                    {{ securityDepositSection.kicker }}
                  </p>
                  <span
                    class="rounded-full bg-emerald-100/80 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-emerald-800">
                    {{ deposit.tag }}
                  </span>
                </div>
                <h3 class="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
                  v-html="securityDepositSection.title" />
                <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                  {{ securityDepositSection.description }}
                </p>
                <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  {{ securityDepositSection.body }}
                </p>
              </div>
            </div>
          </div>

          <div class="px-6 py-7 sm:px-8 sm:py-8">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">
              {{ securityDepositSection.featuresTitle }}
            </p>
            <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
              <li v-for="(feature, i) in securityDepositSection.features" :key="feature.title" v-motion
                :initial="{ opacity: 0, y: 12 }" :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 40 + i * 50, duration: 420 },
                }">
                <div
                  class="flex h-full gap-3 rounded-2xl border border-slate-100 bg-slate-50/40 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-soft">
                  <span
                    class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100"
                    aria-hidden="true">
                    <Icon :icon="feature.iconMdi" class="h-5 w-5" />
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-slate-800">{{ feature.title }}</p>
                    <p class="mt-1 text-xs leading-relaxed text-slate-500">
                      {{ feature.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>


          </div>
        </article>

        <!-- ── Section 4: Digital Platform Licensing ── -->
        <article id="platform-licensing"
          class="scroll-mt-24 overflow-hidden rounded-[28px] border border-blue-200/60 bg-white shadow-soft" v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80, duration: 560 } }">
          <div
            class="relative border-b border-blue-100/80 bg-gradient-to-br from-blue-50 via-white to-white px-6 py-7 sm:px-8 sm:py-8">
            <span aria-hidden="true"
              class="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7.5rem] font-black leading-none text-blue-100/80">
              02
            </span>

            <div class="relative flex flex-wrap items-start gap-4">
              <span
                class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_12px_28px_-12px_rgba(37,99,235,0.55)]"
                aria-hidden="true">
                <Icon :icon="license.iconMdi" class="h-6 w-6" />
              </span>
              <div class="min-w-0 flex-1">
                <div class="flex flex-wrap items-center gap-2">
                  <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                    {{ platformLicenseSection.feeKicker }}
                  </p>
                  <span
                    class="rounded-full bg-blue-100/80 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-blue-800">
                    {{ license.tag }}
                  </span>
                </div>
                <h3 class="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
                  v-html="platformLicenseSection.feeTitle" />
                <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                  {{ platformLicenseSection.feeDescription }}
                </p>
                <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  {{ platformLicenseSection.feeBody }}
                </p>
              </div>
            </div>
          </div>

          <div class="px-6 py-7 sm:px-8 sm:py-8">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">
              {{ platformLicenseSection.feeFeaturesTitle }}
            </p>
            <PlatformAccessFeaturesSection embedded />
            <!-- <ul class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
              <li v-for="(feature, i) in platformLicenseSection.feeFeatures" :key="feature.title" v-motion
                :initial="{ opacity: 0, y: 12 }" :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 40 + i * 45, duration: 420 },
                }">
                <div
                  class="flex h-full gap-3 rounded-2xl border border-slate-100 bg-slate-50/40 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-soft">
                  <span
                    class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    aria-hidden="true">
                    <Icon :icon="feature.iconMdi" class="h-5 w-5" />
                  </span>
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-slate-800">{{ feature.title }}</p>
                    <p class="mt-1 text-xs leading-relaxed text-slate-500">
                      {{ feature.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul> -->

            <div
              class="mt-7 overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-5 py-5 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:px-6 sm:py-6">
              <div class="flex items-start gap-3">
                <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 text-white"
                  aria-hidden="true">
                  <Icon icon="mdi:information-outline" class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-blue-100">
                    {{ platformLicenseSection.feeNoteTitle }}
                  </p>
                  <p class="mt-1.5 text-sm leading-relaxed text-white/95">
                    {{ platformLicenseSection.feeNote }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <p class="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600" v-motion
        :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        {{ investmentStructureSection.intro }}
      </p>
    </div>
  </section>
</template>
