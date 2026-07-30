<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { whyChooseNav } from '~/data/why-choose'

const activeHref = ref(whyChooseNav[0]?.href ?? '')
const navEl = ref<HTMLElement | null>(null)

function onScroll() {
  const offset = 120
  let current = whyChooseNav[0]?.href ?? ''
  for (const item of whyChooseNav) {
    const el = document.querySelector(item.href)
    if (!(el instanceof HTMLElement)) continue
    if (el.getBoundingClientRect().top - offset <= 0) current = item.href
  }
  activeHref.value = current
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <nav ref="navEl"
    class="sticky top-[4.25rem] z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
    aria-label="Why Choose page sections">
    <div class="container-page">
      <ul class="flex gap-1 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list">
        <li v-for="item in whyChooseNav" :key="item.href" class="shrink-0">
          <a :href="item.href" :class="[
            'inline-flex whitespace-nowrap rounded-xl px-3 py-1.5 text-[12px] font-semibold transition sm:text-[13px]',
            activeHref === item.href
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
          ]">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
