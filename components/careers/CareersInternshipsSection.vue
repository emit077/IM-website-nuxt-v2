<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { internshipsSection } from '~/data/careers'

const video = internshipsSection.video
const embedSrc = `${video.permalink.replace(/\/$/, '')}/embed`
const playerActive = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)

function hideOverlay() {
  playerActive.value = true
}

function onWindowBlur() {
  requestAnimationFrame(() => {
    if (document.activeElement === iframeRef.value) hideOverlay()
  })
}

onMounted(() => window.addEventListener('blur', onWindowBlur))
onBeforeUnmount(() => window.removeEventListener('blur', onWindowBlur))
</script>

<template>
  <section id="internship-opportunities" class="relative scroll-mt-20 overflow-hidden section-surface-white section-py"
    aria-labelledby="internships-heading">
    <div class="container-page relative">

      <div v-motion :initial="{ opacity: 0, y: 24 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div
          class="internship-showcase relative mt-10 overflow-hidden rounded-[22px] border border-indigo-300/30 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 sm:rounded-[28px]">

          <!--  -->
          <div class="relative z-[1] min-w-0 px-5 py-7 sm:px-7 sm:py-9 lg:w-7/12 lg:px-9">
            <CardHeader heading-id="internships-heading" :badge="internshipsSection.kicker"
              :title="internshipsSection.title" :description="internshipsSection.description"
              :classes="internshipsSection.classes" align="left" theme="dark" />


            <ul class="mt-5 space-y-2.5" role="list">
              <li v-for="item in internshipsSection.checklist" :key="item"
                class="flex items-start gap-2.5 text-[13.5px] font-medium leading-relaxed text-indigo-50">
                <span
                  class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-white/15 text-white ring-1 ring-white/25">
                  <IconCheck class="h-3 w-3" />
                </span>
                {{ item }}
              </li>
            </ul>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a :href="internshipsSection.cta.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-indigo-800 shadow-lg shadow-indigo-950/25 transition hover:-translate-y-0.5 hover:bg-indigo-50 sm:w-auto sm:py-3">
                {{ internshipsSection.cta.label }}
                <Icon icon="mdi:arrow-right" class="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a :href="internshipsSection.secondaryCta.href"
                class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto sm:py-3">
                <Icon icon="mdi:briefcase-search-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ internshipsSection.secondaryCta.label }}
              </a>
            </div>
          </div>
          <!--  -->

          <div
            class="internship-phone-crop relative h-[22rem] overflow-hidden sm:h-[24rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-5/12">
            <figure
              class="phone-shell absolute left-1/2 top-0 w-[272px] max-w-[calc(100%-0.5rem)] -translate-x-1/2 sm:w-[286px] lg:top-8"
              :aria-label="video.title">
              <div
                class="relative overflow-hidden rounded-[2.15rem] bg-slate-950 p-[9px] shadow-[0_28px_60px_-18px_rgba(2,6,23,0.75)] ring-1 ring-white/20">
                <span
                  class="pointer-events-none absolute left-1/2 top-3 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-slate-950"
                  aria-hidden="true" />

                <div class="ig-clean relative h-[540px] overflow-hidden rounded-[1.7rem] bg-black">
                  <ClientOnly>
                    <iframe ref="iframeRef" :src="embedSrc" :title="video.title" class="ig-clean-frame"
                      allowtransparency="true" allow="encrypted-media; clipboard-write; picture-in-picture; autoplay"
                      scrolling="no" />
                    <template #fallback>
                      <a :href="video.permalink" target="_blank" rel="noopener noreferrer"
                        class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900 px-6 text-center">
                        <span class="play-btn" aria-hidden="true">
                          <Icon icon="mdi:play" class="h-7 w-7 translate-x-0.5" />
                        </span>
                        <span class="text-sm font-semibold text-white">Watch this reel on Instagram</span>
                      </a>
                    </template>
                  </ClientOnly>

                  <!-- <a
                    v-if="!playerActive"
                    class="play-overlay"
                    :href="video.permalink"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Play ${video.title} on Instagram`"
                  >
                    <span class="play-overlay-shade" aria-hidden="true" />
                    <span class="play-cluster" aria-hidden="true">
                      <span class="play-ring play-ring-a" />
                      <span class="play-ring play-ring-b" />
                      <span class="play-btn">
                        <Icon icon="mdi:play" class="h-7 w-7 translate-x-0.5" />
                      </span>
                    </span>
                    <span class="play-label">Watch reel</span>
                  </a> -->
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.phone-shell {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.ig-clean {
  aspect-ratio: auto;
}

.ig-clean-frame {
  position: absolute;
  top: -54px;
  left: 50%;
  width: 430px;
  height: 1100px;
  margin-left: -215px;
  border: 0;
  background: #000;
}

.play-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  border: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: none;
}

.play-overlay-shade {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(2, 6, 23, 0.2) 0%, rgba(2, 6, 23, 0.38) 45%, rgba(2, 6, 23, 0.5) 100%);
  backdrop-filter: blur(3px);
  transition: opacity 0.35s ease;
}

.play-cluster {
  position: relative;
  display: grid;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
}

.play-cluster::before {
  content: '';
  position: absolute;
  inset: -3.25rem;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(15, 23, 42, 0.62) 0%, rgba(15, 23, 42, 0.28) 52%, transparent 74%);
}

.play-ring {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  border: 1.5px solid rgba(255, 255, 255, 0.38);
  animation: play-pulse 2.4s ease-out infinite;
}

.play-ring-b {
  animation-delay: 1.2s;
}

.play-btn {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 9999px;
  color: #1e3a8a;
  background: linear-gradient(180deg, #ffffff 0%, #eef2ff 100%);
  box-shadow:
    0 0 0 6px rgba(255, 255, 255, 0.14),
    0 16px 34px -12px rgba(15, 23, 42, 0.55);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;
}

.play-label {
  position: relative;
  z-index: 1;
  border-radius: 9999px;
  padding: 0.35rem 0.75rem;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(15, 23, 42, 0.42);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
}

.ig-clean:hover .play-btn,
.play-overlay:focus-visible .play-btn {
  transform: scale(1.08);
  box-shadow:
    0 0 0 8px rgba(255, 255, 255, 0.2),
    0 20px 40px -12px rgba(37, 99, 235, 0.55);
}

.ig-clean:hover .play-ring,
.play-overlay:focus-visible .play-ring {
  border-color: rgba(255, 255, 255, 0.7);
}

.play-overlay:active .play-btn {
  transform: scale(0.94);
}

.ig-clean:focus-within .play-overlay {
  opacity: 0;
  visibility: hidden;
}

@keyframes play-pulse {
  0% {
    transform: scale(0.86);
    opacity: 0.7;
  }

  70% {
    transform: scale(1.28);
    opacity: 0;
  }

  100% {
    transform: scale(1.28);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {

  .phone-shell,
  .play-btn {
    transition: none;
  }

  .play-ring {
    animation: none;
  }

  .play-overlay:hover .play-btn,
  .play-overlay:focus-visible .play-btn,
  .play-overlay:active .play-btn {
    transform: none;
  }
}
</style>
