<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { spEnrollmentPreview, spProfiles } from '~/data/student-parent'

const freeProfile = spProfiles.items.find((profile) => !profile.featured) ?? spProfiles.items[0]
const premiumProfile = spProfiles.items.find((profile) => profile.featured) ?? spProfiles.items[1]
</script>

<template>
  <section id="enrollment" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="enrollment-preview-heading">
    <div class="container-page relative">
      <CardHeader heading-id="enrollment-preview-heading" :badge="spEnrollmentPreview.badge"
        :title="spEnrollmentPreview.title" :description="spEnrollmentPreview.description"
        :classes="spEnrollmentPreview.classes" />

      <div class="mt-8 grid items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <article
          class="flex h-full flex-col rounded-[1.35rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-6 lg:col-span-5"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40, duration: 420 } }">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
            {{ freeProfile.name }}
          </p>
          <p class="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900">
            {{ freeProfile.price }}
            <span class="line-through opacity-50 text-xl">
              &nbsp; ₹ 1200 &nbsp;
            </span>
          </p>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            {{ freeProfile.description }}
          </p>
          <ul class="mt-5 flex flex-1 flex-col gap-2" role="list">
            <li v-for="item in freeProfile.included" :key="item.title" class="flex items-start gap-2">
              <span class="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"
                aria-hidden="true">
                <IconCheck class="h-2.5 w-2.5" />
              </span>
              <span class="text-[13px] font-medium leading-snug text-slate-800">{{ item.title }}</span>
            </li>
          </ul>
          <div class="mt-6">
            <ActionBtn class="!w-full" variant="primary" :label="freeProfile.cta.label" :href="freeProfile.cta.href" />
          </div>

        </article>

        <article
          class="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-[#2563eb] text-white shadow-soft lg:col-span-7 lg:flex-row"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 110, duration: 420 } }">
          <div class="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100">
              {{ premiumProfile.name }}
            </p>
            <p class="mt-3 font-display text-3xl font-extrabold tracking-tight">


              {{ premiumProfile.price }}
              <span v-if="premiumProfile.priceNote" class="text-base font-semibold opacity-80">{{
                premiumProfile.priceNote }}</span>
            </p>
            <p class="mt-3 text-sm leading-relaxed text-blue-50">
              {{ premiumProfile.description }}
            </p>

            <ul class="mt-5 flex flex-1 flex-col gap-2" role="list">
              <li v-for="item in premiumProfile.included" :key="item.title" class="flex items-start gap-2">
                <span class="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/20 text-white"
                  aria-hidden="true">
                  <IconCheck class="h-2.5 w-2.5" />
                </span>
                <a v-if="item.href" :href="item.href"
                  class="text-[13px] font-medium leading-snug text-blue-50 underline decoration-white/40 underline-offset-2 hover:decoration-white">
                  {{ item.title }}
                </a>
                <span v-else class="text-[13px] font-medium leading-snug">{{ item.title }}</span>
              </li>
            </ul>

            <div class="mt-6">
              <ActionBtn class="!w-full" variant="theme-secondary" :label="premiumProfile.cta.label"
                :href="premiumProfile.cta.href" />
            </div>
          </div>

          <figure class="relative min-h-[18rem] overflow-hidden sm:min-h-[20rem] lg:w-[42%] lg:min-h-0 lg:self-stretch">
            <img :src="usePublicAsset(spEnrollmentPreview.image)" :alt="spEnrollmentPreview.imageAlt"
              class="h-full w-full object-contain object-bottom" loading="lazy" decoding="async" />
          </figure>
        </article>
      </div>
      <div class="mt-6 text-center">
        <a :href="spEnrollmentPreview.cta.href"
          class="mt-2 inline-flex min-w-[16rem] items-center justify-center rounded-xl bg-blue-700 px-10 py-3 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgba(29,78,216,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
          {{ spEnrollmentPreview.cta.label }}
        </a>
      </div>
    </div>
  </section>
</template>
