<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import FloatingCard from './FloatingCard.vue'
import IconShield from './IconShield.vue'
import IconStar from './IconStar.vue'
import IconUsers from './IconUsers.vue'
import IconHome from './IconHome.vue'

withDefaults(
  defineProps<{
    /** Main hero photo from `public/img/hero/` */
    imageSrc?: string
  }>(),
  {
    imageSrc: '/img/hero/hero1.png',
  },
)

// Subtle pointer-driven parallax for premium feel
const visualRef = ref<HTMLElement | null>(null)
const parallax = ref({ x: 0, y: 0 })

function onPointerMove(e: PointerEvent) {
  const el = visualRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  // normalize to roughly -1..1
  const nx = (e.clientX - cx) / rect.width
  const ny = (e.clientY - cy) / rect.height
  parallax.value = { x: nx * 8, y: ny * 8 }
}
function onPointerLeave() {
  parallax.value = { x: 0, y: 0 }
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
    visualRef.value?.addEventListener('pointermove', onPointerMove)
    visualRef.value?.addEventListener('pointerleave', onPointerLeave)
  }
})
onUnmounted(() => {
  visualRef.value?.removeEventListener('pointermove', onPointerMove)
  visualRef.value?.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<template>
  <div ref="visualRef"
    class="relative w-full h-full min-h-[520px] lg:min-h-[640px] flex items-center justify-center rounded-[2rem] lg:rounded-[2.25rem] bg-gradient-to-b from-transparent via-indigo-50/25 to-cream-100/50 ring-1 ring-slate-200/40">
    <!-- Blobs tuned to cream / mesh (same family as hero section) -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
      <div class="mesh-blob bg-indigo-200/35 w-[420px] h-[420px] -top-20 -right-10 animate-float-slow"></div>
      <div class="mesh-blob bg-emerald-200/25 w-[320px] h-[320px] bottom-0 -left-10 animate-float"
        style="animation-delay: -2s"></div>
      <div class="mesh-blob bg-amber-200/20 w-[260px] h-[260px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      </div>
    </div>

    <!-- Radial wash: ties column to page cream -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 rounded-[inherit]"
      style="background: radial-gradient(ellipse 85% 70% at 50% 45%, rgba(239, 246, 255, 0.55) 0%, rgba(252, 252, 250, 0.35) 45%, transparent 72%);">
    </div>
    <img
      :src="usePublicAsset(imageSrc)"
      alt="Student learning with Indian Mentors — personalised tutoring in India"
      class="h-full w-full object-cover"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />


    <!-- Floating Card: Verified Tutor (top-left) -->
    <FloatingCard variant="success" :delay="600" float="normal" :initial-x="-20" :initial-y="-10"
      class="absolute top-6 left-2 sm:left-0 lg:-left-6 w-[220px]">
      <template #icon-svg>
        <IconShield class="w-5 h-5" />
      </template>
      <template #label>Verified Tutor</template>
      <template #value>Background Cleared</template>
    </FloatingCard>

    <!-- Floating Card: 4.9 Rating (top-right) -->
    <FloatingCard variant="warning" :delay="850" float="slow" :initial-x="20" :initial-y="-10"
      class="absolute top-24 right-2 sm:right-0 lg:-right-4 w-[178px]">
      <template #icon-svg>
        <IconStar class="w-5 h-5" />
      </template>
      <template #label>Parent Rating</template>
      <template #value>4.9 / 5.0</template>
    </FloatingCard>

    <!-- Floating Card: 5000+ Tutors (bottom-left) -->
    <FloatingCard variant="primary" :delay="1100" float="slow" :initial-x="-20" :initial-y="10"
      class="absolute bottom-20 left-2 sm:-left-2 lg:-left-8 w-[210px]">
      <template #icon-svg>
        <IconUsers class="w-5 h-5" />
      </template>
      <template #label>Tutor Network</template>
      <template #value>5,000+ Mentors</template>
    </FloatingCard>

    <!-- Floating Card: Online + Home (bottom-right) -->
    <FloatingCard variant="success" :delay="1300" float="normal" :initial-x="20" :initial-y="10"
      class="absolute bottom-6 right-2 sm:-right-2 lg:-right-2 w-[228px]">
      <template #icon-svg>
        <IconHome class="w-5 h-5" />
      </template>
      <template #label>Modes Available</template>
      <template #value>Online + Home</template>
    </FloatingCard>

    <!-- Tiny pulsing live dot -->
    <div aria-hidden="true" class="absolute top-1/2 -right-1 sm:right-2 lg:right-8 w-3 h-3" v-motion
      :initial="{ opacity: 0, scale: 0 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 1500, duration: 400 } }">
      <span class="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring"></span>
      <span class="absolute inset-0 rounded-full bg-emerald-500 ring-4 ring-white"></span>
    </div>
  </div>
</template>

<style scoped>
/* Bottom fade: subject dissolves into page cream (see partner hero reference) */
.hero-visual-photo {
  -webkit-mask-image: linear-gradient(to bottom,
      #000 0%,
      #000 42%,
      rgba(0, 0, 0, 0.98) 58%,
      rgba(0, 0, 0, 0.45) 78%,
      transparent 100%);
  mask-image: linear-gradient(to bottom,
      #000 0%,
      #000 42%,
      rgba(0, 0, 0, 0.98) 58%,
      rgba(0, 0, 0, 0.45) 78%,
      transparent 100%);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
</style>
