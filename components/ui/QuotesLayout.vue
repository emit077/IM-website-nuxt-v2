<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref, watch } from 'vue'
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'

type QuoteItem = {
  text: string
  author: string
}

const educationQuotes: QuoteItem[] = [
  {
    text: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.',
    author: 'A. P. J. Abdul Kalam',
  },
  {
    text: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
    author: 'A. P. J. Abdul Kalam',
  },
  {
    text: 'Arise, awake and stop not till the goal is reached.',
    author: 'Swami Vivekananda',
  },
  {
    text: 'Education is the manifestation of the perfection already in man.',
    author: 'Swami Vivekananda',
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'The highest education is that which does not merely give us information but makes our life in harmony with all existence.',
    author: 'Rabindranath Tagore',
  },
  {
    text: 'Learning never exhausts the mind.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'The beautiful thing about learning is that no one can take it away from you.',
    author: 'B. B. King',
  },
  {
    text: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'The roots of education are bitter, but the fruit is sweet.',
    author: 'Aristotle',
  },
  {
    text: 'Develop a passion for learning. If you do, you will never cease to grow.',
    author: "Anthony J. D'Angelo",
  },
  {
    text: 'Education is not preparation for life; education is life itself.',
    author: 'John Dewey',
  },
  {
    text: 'Education is the key to unlock the golden door of freedom.',
    author: 'George Washington Carver',
  },
  {
    text: 'The function of education is to teach one to think intensively and to think critically.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: 'Children must be taught how to think, not what to think.',
    author: 'Margaret Mead',
  },
  {
    text: 'The purpose of education is to replace an empty mind with an open one.',
    author: 'Malcolm Forbes',
  },
  {
    text: 'I have no special talent. I am only passionately curious.',
    author: 'Albert Einstein',
  },
  {
    text: 'Education is simply the soul of a society as it passes from one generation to another.',
    author: 'Gilbert K. Chesterton',
  },
  {
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Commonly attributed to Benjamin Franklin; exact sourcing is uncertain.',
  },
  {
    text: 'The mind is not a vessel to be filled but a fire to be kindled.',
    author: 'Commonly attributed to Plutarch.',
  },
  {
    text: 'The whole purpose of education is to turn mirrors into windows.',
    author: 'Sydney J. Harris',
  },
  {
    text: 'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.',
    author: 'Malcolm X',
  },
  {
    text: 'Knowledge will bring you the opportunity to make a difference.',
    author: 'Claire Fagin',
  },
  {
    text: 'Teachers open the door, but you must enter by yourself.',
    author: 'Often presented as a Chinese proverb.',
  },
  {
    text: 'A teacher affects eternity; he can never tell where his influence stops.',
    author: 'Henry Adams',
  },
  {
    text: 'The art of teaching is the art of assisting discovery.',
    author: 'Mark Van Doren',
  },
  {
    text: 'Teaching is the one profession that creates all other professions.',
    author: 'Widely quoted; no definitive original attribution.',
  },
  {
    text: "The best teachers are those who show you where to look but don't tell you what to see.",
    author: 'Often attributed to Alexandra K. Trenfor.',
  },
  {
    text: 'The influence of a good teacher can never be erased.',
    author: 'Common educational saying; author unknown.',
  },
  {
    text: 'Every child is gifted. They just unwrap their packages at different times.',
    author: 'Often attributed to Max Lucado.',
  },
  {
    text: 'There is no substitute for hard work.',
    author: 'Thomas Edison',
  },
  {
    text: 'Success is where preparation and opportunity meet.',
    author: 'Bobby Unser',
  },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Commonly attributed to Winston Churchill, though the attribution is debated.',
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
]

const props = withDefaults(
  defineProps<{
    /** Indices of quotes to show from the built-in education quotes list */
    quotes: number[]
    interval?: number
    autoplay?: boolean
  }>(),
  {
    interval: 6500,
    autoplay: true,
  },
)

defineOptions({ inheritAttrs: false })

const reduceMotion = usePreferredReducedMotion()
const paused = ref(false)
const activeIndex = ref(0)

const selectedQuotes = computed(() =>
  props.quotes
    .map((index) => educationQuotes[index])
    .filter((quote): quote is QuoteItem => quote !== undefined),
)

const count = computed(() => selectedQuotes.value.length)
const activeQuote = computed(() => selectedQuotes.value[activeIndex.value])

const autoplayEnabled = computed(
  () => props.autoplay && count.value > 1 && reduceMotion.value !== 'reduce',
)

function go(delta: number) {
  if (count.value < 2) return
  activeIndex.value = (activeIndex.value + delta + count.value) % count.value
}

const { pause, resume } = useIntervalFn(
  () => {
    if (!paused.value && autoplayEnabled.value) go(1)
  },
  () => props.interval,
  { immediate: false },
)

watch(
  autoplayEnabled,
  (on) => {
    if (on) resume()
    else pause()
  },
  { immediate: true },
)

function onEnter() {
  paused.value = true
}

function onLeave() {
  paused.value = false
}
</script>

<template>
  <figure v-if="activeQuote" class="text-center" role="region" aria-roledescription="carousel"
    aria-label="Inspirational education quotes" v-bind="$attrs" @mouseenter="onEnter" @mouseleave="onLeave"
    @focusin="onEnter" @focusout="onLeave" v-motion :initial="{ opacity: 0, y: 16 }"
    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
    <Icon icon="mdi:format-quote-open" class="mx-auto h-9 w-9 text-blue-300" aria-hidden="true" />

    <div class="relative mx-auto mt-2 min-h-[5.5rem] max-w-3xl sm:min-h-[4.5rem]">
      <Transition name="quote-fade" mode="out-in">
        <blockquote :key="activeIndex" class="font-display text-balance italic text-xl text-slate-500 sm:text-xl">
          <p>&ldquo;{{ activeQuote.text }}&rdquo;</p>
          <footer class="mt-4 not-italic text-sm font-medium text-slate-400">
            &mdash; {{ activeQuote.author }}
          </footer>
        </blockquote>
      </Transition>
    </div>


    <div v-if="count > 1" class="mt-6 flex items-center justify-center gap-3" role="group"
      aria-label="Quote navigation">

      <p class="sr-only" aria-live="polite" aria-atomic="true">
        Quote {{ activeIndex + 1 }} of {{ count }}: {{ activeQuote.text }} — {{ activeQuote.author }}
      </p>

      <div class="flex items-center gap-1.5" aria-hidden="true">
        <span v-for="(_, i) in selectedQuotes" :key="i" class="h-1.5 rounded-full transition-all duration-300"
          :class="i === activeIndex ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300'" />
      </div>

    </div>
  </figure>
</template>

<style scoped>
.quote-fade-enter-active,
.quote-fade-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.quote-fade-enter-from,
.quote-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {

  .quote-fade-enter-active,
  .quote-fade-leave-active {
    transition: none;
  }

  .quote-fade-enter-from,
  .quote-fade-leave-to {
    transform: none;
  }
}
</style>
