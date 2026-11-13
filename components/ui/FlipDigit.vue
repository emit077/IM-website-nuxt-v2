<script setup lang="ts">
const props = defineProps<{
  digit: string
}>()

const shown = ref(props.digit)
const previous = ref(props.digit)
const flipping = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

watch(() => props.digit, (next) => {
  if (next === shown.value && !flipping.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = next
    previous.value = next
    flipping.value = false
    return
  }
  if (timer) clearTimeout(timer)
  previous.value = shown.value
  flipping.value = false
  requestAnimationFrame(() => {
    flipping.value = true
    timer = setTimeout(() => {
      shown.value = next
      flipping.value = false
    }, 640)
  })
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <div class="flip-digit" :class="{ flipping }" aria-hidden="true">
    <div class="face top">
      <span>{{ digit }}</span>
    </div>
    <div class="face bottom">
      <span>{{ shown }}</span>
    </div>
    <div class="face top flap flap-top">
      <span>{{ previous }}</span>
    </div>
    <div class="face bottom flap flap-bottom">
      <span>{{ digit }}</span>
    </div>
  </div>
</template>

<style scoped>
.flip-digit {
  position: relative;
  width: var(--digit-w, 4.8rem);
  height: var(--digit-h, 6.5rem);
  font-family: "Plus Jakarta Sans", Inter, sans-serif;
  font-size: var(--digit-fs, 4.15rem);
  font-weight: 600;
  line-height: 1;
  color: #fff;
  perspective: 900px;
  transition:
    width 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    font-size 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.face {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: #111;
}

.face.top {
  top: 0;
  height: calc(50% - 2px);
  border-radius: 0.42rem 0.42rem 0.1rem 0.1rem;
  background: linear-gradient(180deg, #2a2a2a 0%, #141414 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14);
}

.face.bottom {
  bottom: 0;
  height: calc(50% - 2px);
  border-radius: 0.1rem 0.1rem 0.42rem 0.42rem;
  background: linear-gradient(180deg, #0a0a0a 0%, #1c1c1c 100%);
  box-shadow: 0 10px 18px -12px rgba(0, 0, 0, 0.65);
}

.face span {
  position: absolute;
  left: 0;
  display: flex;
  width: 100%;
  height: var(--digit-h, 6.5rem);
  align-items: center;
  justify-content: center;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.045em;
}

.face.top span {
  top: 0;
}

.face.bottom span {
  bottom: 0;
}

.flap {
  z-index: 2;
  visibility: hidden;
  backface-visibility: hidden;
}

.flap-top {
  transform-origin: center bottom;
}

.flap-bottom {
  transform-origin: center top;
  transform: rotateX(90deg);
}

.flipping .flap {
  visibility: visible;
}

.flipping .flap-top {
  animation: flip-top 0.64s ease-in forwards;
}

.flipping .flap-bottom {
  animation: flip-bottom 0.64s ease-in forwards;
}

@keyframes flip-top {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(-90deg); }
}

@keyframes flip-bottom {
  0%, 46% { transform: rotateX(90deg); }
  100% { transform: rotateX(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .flip-digit {
    transition: none;
  }

  .flipping .flap-top,
  .flipping .flap-bottom {
    animation: none;
  }
}
</style>
