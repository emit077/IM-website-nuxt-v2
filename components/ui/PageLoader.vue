<script setup lang="ts">
const MIN_VISIBLE_MS = 2000
const visible = ref(true)
const pending = ref(1)
let shownAt = Date.now()
let hideTimer: ReturnType<typeof setTimeout> | undefined

function show() {
  pending.value += 1
  if (hideTimer) clearTimeout(hideTimer)
  if (!visible.value) shownAt = Date.now()
  visible.value = true
}

function hide() {
  pending.value = Math.max(0, pending.value - 1)
  if (pending.value > 0) return
  if (hideTimer) clearTimeout(hideTimer)
  const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt))
  hideTimer = setTimeout(() => {
    if (pending.value === 0) visible.value = false
  }, wait)
}

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', show)
nuxtApp.hook('page:finish', hide)
nuxtApp.hook('app:error', () => {
  pending.value = 0
  visible.value = false
})

onMounted(hide)

const messages = [
  'Preparing your learning space',
  'Finding the right mentor',
  'Almost ready',
]
const messageIndex = ref(0)
const message = computed(() => messages[messageIndex.value] ?? messages[0])
let messageTimer: ReturnType<typeof setInterval> | undefined

watch(visible, (isVisible) => {
  document.body.style.overflow = isVisible ? 'hidden' : ''
  if (messageTimer) clearInterval(messageTimer)
  if (!isVisible) return
  messageIndex.value = 0
  messageTimer = setInterval(() => {
    messageIndex.value = (messageIndex.value + 1) % messages.length
  }, 1600)
}, { immediate: true })

onBeforeUnmount(() => {
  if (hideTimer) clearTimeout(hideTimer)
  if (messageTimer) clearInterval(messageTimer)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="page-loader">
    <div v-if="visible" class="loader" role="status" aria-live="polite" aria-busy="true">
      <!-- <span class="orb orb-blue" aria-hidden="true" />
      <span class="orb orb-violet" aria-hidden="true" /> -->

      <div class="stage">
        <div class="pulse-mark" aria-hidden="true">
          <span class="pulse pulse-inner" />
          <span class="pulse pulse-outer" />
          <img :src="usePublicAsset('/assets/img/logo/IM-mark-blue.svg')" alt="" class="mark" />
        </div>
        <p class="message" :key="message">{{ message }}</p>
        <span class="sr-only">Loading page</span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 1), rgba(247, 249, 255, 0.9) 42%, #eef3ff 100%);
}

.orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(36px);
  pointer-events: none;
}

.orb-blue {
  width: 18rem;
  height: 18rem;
  background: rgba(59, 130, 246, 0.28);
  animation: drift 7s ease-in-out infinite;
}

.orb-violet {
  width: 14rem;
  height: 14rem;
  background: rgba(139, 92, 246, 0.22);
  animation: drift 8.5s ease-in-out infinite reverse;
}

.stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pulse-mark {
  position: relative;
  display: grid;
  width: 4rem;
  height: 4rem;
  place-items: center;
}

.pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(42, 47, 255, 0.35);
  animation: pulse-animation 2s infinite;
}

.pulse-outer {
  animation-delay: 1s;
}

.mark {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 0 1px 1px #0000001a;
}

.message {
  margin-top: 2.4rem;
  min-height: 1.25rem;
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #334155;
  animation: rise 0.45s ease;
}

.page-loader-enter-active,
.page-loader-leave-active {
  transition: opacity 0.88s ease;
}

.page-loader-enter-from,
.page-loader-leave-to {
  opacity: 0;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(42, 47, 255, 0.4);
  }

  100% {
    box-shadow: 0 0 0 28px rgba(42, 47, 255, 0);
  }
}

@keyframes drift {

  0%,
  100% {
    transform: translate(-8rem, -2rem);
  }

  50% {
    transform: translate(7rem, 3rem);
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {

  .pulse,
  .orb,
  .message {
    animation: none;
  }
}
</style>
