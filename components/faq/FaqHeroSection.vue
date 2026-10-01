<script setup lang="ts">
import { Icon } from '@iconify/vue'
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { faqHero } from '~/data/faq'

const query = defineModel<string>('query', { default: '' })

const heroContent: SecondaryHeroContent = {
  badge: faqHero.badge,
  title: faqHero.title,
  subtitle: faqHero.subtitle,
  description: faqHero.description,
  headingId: 'faq-hero-heading',
  patternId: 'faq-hero-waves',
}

</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent">
    <template #title>
      <h1
        id="faq-hero-heading"
        class="faq-hero-title mt-5 max-w-4xl text-balance font-display text-[2.35rem] font-black leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 60 } }"
      >
        {{ faqHero.title }}
      </h1>
    </template>

    <form
      class="mt-8 w-full max-w-2xl"
      role="search"
      @submit.prevent
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 240 } }"
    >
      <label class="sr-only" for="faq-search">Search your question</label>
      <div class="relative">
        <Icon
          icon="mdi:magnify"
          class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          id="faq-search"
          v-model="query"
          type="search"
          :placeholder="faqHero.searchPlaceholder"
          class="w-full rounded-2xl border border-white/70 bg-white py-3.5 pl-12 pr-11 text-sm text-slate-800 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.55)] outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-white/35 [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          v-if="query.trim()"
          type="button"
          class="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Clear search"
          @click="query = ''"
        >
          <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p class="mt-3 text-pretty text-sm font-medium leading-relaxed text-white/70">
        Try
        <template v-for="(suggestion, index) in faqHero.searchSuggestions" :key="suggestion.href">
          <NuxtLink
            :to="suggestion.href"
            class="font-semibold text-white underline decoration-white/40 underline-offset-2 transition hover:decoration-white"
          >
            “{{ suggestion.label }}”
          </NuxtLink>
          <span v-if="index < faqHero.searchSuggestions.length - 1"> or </span>
        </template>
      </p>
    </form>

    <nav
      class="mt-8 w-full"
      aria-label="Quick links"
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 320 } }"
    >
      <p class="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
        {{ faqHero.quickLinksLabel }}
      </p>
      <ul class="mt-3 flex flex-wrap items-center justify-center gap-2" role="list">
        <li v-for="link in faqHero.quickLinks" :key="link.href">
          <NuxtLink
            :to="query.trim() ? { path: link.href, query: { q: query.trim() } } : link.href"
            class="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white transition hover:border-white/45 hover:bg-white/15 sm:text-[13px]"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </SecondaryHeroLayout>
</template>

<style scoped>
.faq-hero-title {
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
}
</style>
