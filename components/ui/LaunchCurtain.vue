<script setup lang="ts">
const { phase, active } = useLaunchCurtain()

const visible = ref(false)
const shut = ref(false)
const slow = ref(false)
const leftEl = ref<HTMLElement | null>(null)
let running = false
let handedOff = false
let openTimer: ReturnType<typeof setTimeout> | undefined
let closeTimer: ReturnType<typeof setTimeout> | undefined

function lockScroll(locked: boolean) {
  document.body.style.overflow = locked ? 'hidden' : ''
}

async function startClose() {
  if (running) return
  running = true
  active.value = true
  slow.value = false
  shut.value = false
  visible.value = true
  lockScroll(true)
  await nextTick()
  void leftEl.value?.offsetWidth
  requestAnimationFrame(() => {
    shut.value = true
  })
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    if (!handedOff) void finishClose()
  }, 2200)
}

function startOpen() {
  slow.value = true
  phase.value = 'opening'
  window.setTimeout(() => {
    shut.value = false
  }, 40)
  window.setTimeout(() => {
    if (visible.value) finishOpen()
  }, 5200)
}

async function finishClose() {
  if (handedOff) return
  handedOff = true
  if (closeTimer) clearTimeout(closeTimer)
  phase.value = 'closed'
  let opened = false
  const nuxtApp = useNuxtApp()
  const route = useRoute()
  const started = Date.now()
  const stop = nuxtApp.hook('page:finish', () => {
    tryOpen()
  })

  function tryOpen() {
    if (opened) return
    if (route.path !== '/') return
    opened = true
    if (openTimer) clearTimeout(openTimer)
    if (typeof stop === 'function') stop()
    window.setTimeout(startOpen, 480)
  }

  function waitForHome() {
    if (opened) return
    tryOpen()
    if (opened) return
    if (Date.now() - started > 8000) {
      opened = true
      if (typeof stop === 'function') stop()
      startOpen()
      return
    }
    openTimer = setTimeout(waitForHome, 150)
  }

  if (openTimer) clearTimeout(openTimer)
  openTimer = setTimeout(waitForHome, 150)

  try {
    await navigateTo('/')
  } catch {
    startOpen()
  }
}

function finishOpen() {
  visible.value = false
  shut.value = false
  slow.value = false
  running = false
  phase.value = 'idle'
  active.value = false
  lockScroll(false)
}

function onPanelEnd(event: TransitionEvent) {
  if (event.target !== leftEl.value) return
  if (event.propertyName !== 'transform') return
  if (shut.value && !slow.value) {
    void finishClose()
    return
  }
  if (!shut.value && slow.value) finishOpen()
}

watch(phase, (value) => {
  if (value === 'closing') void startClose()
})

onMounted(() => {
  if (phase.value === 'closing') void startClose()
})

onBeforeUnmount(() => {
  if (openTimer) clearTimeout(openTimer)
  if (closeTimer) clearTimeout(closeTimer)
  lockScroll(false)
})
</script>

<template>
  <div
    v-show="visible"
    class="curtain"
    :class="{ shut, slow }"
    aria-hidden="true"
  >
    <div class="valance" />
    <div ref="leftEl" class="panel left" @transitionend="onPanelEnd">
      <div class="cloth" />
    </div>
    <div class="panel right">
      <div class="cloth" />
    </div>
  </div>
</template>

<style scoped>
.curtain {
  position: fixed;
  inset: 0;
  z-index: 400;
  overflow: hidden;
  pointer-events: none;
}

.valance {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  height: 4.6rem;
  background:
    radial-gradient(circle at 50% 120%, transparent 18px, #7a1020 19px) 0 100% / 46px 28px repeat-x,
    linear-gradient(180deg, #4a0610 0%, #9b1528 42%, #6e0e1c 100%);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

.panel {
  position: absolute;
  top: 0;
  width: 52%;
  height: 100%;
  overflow: hidden;
  pointer-events: auto;
  transition: transform 1.45s cubic-bezier(0.7, 0, 0.25, 1);
  will-change: transform;
}

.slow .panel {
  pointer-events: none;
  transition-duration: 4.2s;
  transition-timing-function: cubic-bezier(0.45, 0.02, 0.12, 1);
}

.cloth {
  position: absolute;
  top: -2%;
  bottom: -4%;
  width: 118%;
  background:
    linear-gradient(90deg, rgba(255, 220, 180, 0.16), transparent 10%, transparent 90%, rgba(0, 0, 0, 0.35)),
    repeating-linear-gradient(
      90deg,
      #4c0712 0 10px,
      #8d1426 10px 16px,
      #c4233a 16px 24px,
      #9a1730 24px 30px,
      #5a0916 30px 42px,
      #b01d34 42px 48px
    );
  box-shadow:
    inset 0 18px 24px rgba(0, 0, 0, 0.28),
    inset 0 -30px 40px rgba(0, 0, 0, 0.25);
}

.cloth::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 18px;
  background: linear-gradient(90deg, #6b4a12, #f3de98 40%, #fff6cf 50%, #c9a24a 70%, #6b4a12);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.35);
}

.left {
  left: 0;
  transform-origin: left center;
  transform: scaleX(0.07);
}

.right {
  right: 0;
  transform-origin: right center;
  transform: scaleX(0.07);
}

.left .cloth {
  left: 0;
}

.right .cloth {
  right: 0;
}

.left .cloth::before {
  right: 0;
}

.right .cloth::before {
  left: 0;
}

.shut .left,
.shut .right {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .panel,
  .slow .panel {
    transition: none;
  }
}
</style>
