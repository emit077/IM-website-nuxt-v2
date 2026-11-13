<script setup lang="ts">
import type { NuxtError } from '#app'
import StatusScreen from '~/components/ui/StatusScreen.vue'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => Number(props.error?.statusCode) === 404)

useHead({
  title: computed(() =>
    isNotFound.value
      ? 'Page not found — Indian Mentors'
      : 'Something went wrong — Indian Mentors',
  ),
})

function go(path: string) {
  clearError({ redirect: path })
}

const notFoundActions = [
  { label: 'Back to home', variant: 'primary' as const, onClick: () => go('/') },
  { label: 'Contact us', variant: 'secondary' as const, onClick: () => go('/contact') },
]

const notFoundLinks = [
  { label: 'Our services', to: '/services', onClick: () => go('/services') },
  { label: 'Students & parents', to: '/student-parent', onClick: () => go('/student-parent') },
  { label: 'FAQ', to: '/faq', onClick: () => go('/faq') },
]

const errorActions = computed(() => [
  { label: 'Back to home', variant: 'primary' as const, onClick: () => go('/') },
  { label: 'Try again', variant: 'secondary' as const, onClick: () => clearError() },
])

const errorDescription = computed(() => {
  const message = props.error?.statusMessage || props.error?.message
  if (message && !/not found/i.test(message)) return message
  return 'Please try again in a moment. If it keeps happening, our team can help.'
})
</script>

<template>
  <StatusScreen
    v-if="isNotFound"
    variant="missing"
    code="404"
    eyebrow="Page not found"
    title="We couldn’t find that page"
    description="The address may be mistyped, or the page may have moved. You can return home, browse our services, or reach the team."
    :actions="notFoundActions"
    :links="notFoundLinks"
    :on-home="() => go('/')"
  />
  <StatusScreen
    v-else
    variant="error"
    :code="String(error.statusCode || 500)"
    eyebrow="Something went wrong"
    title="We hit a snag loading this page"
    :description="errorDescription"
    :actions="errorActions"
    :on-home="() => go('/')"
  />
</template>
