<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { getFaqCategoryMeta } from '~/composables/useWebsiteContent'

const props = withDefaults(
  defineProps<{
    category: string
    limit?: number
    badge?: string
    title?: string
    description?: string
    sectionId?: string
  }>(),
  {
    limit: 4,
    badge: 'FAQs',
    title: undefined,
    description: undefined,
    sectionId: undefined,
  },
)

const meta = computed(() => getFaqCategoryMeta(props.category))
const { data, pending } = await useWebsiteFaqs(props.category)

const items = computed(() => {
  const all = data.value?.flatMap((group) => group.items) ?? []
  return all.slice(0, props.limit)
})

const headingId = computed(() => `${props.sectionId || `${meta.value.id}-faq`}-heading`)
const sectionId = computed(() => props.sectionId || `${meta.value.id}-faq`)
const headingTitle = computed(
  () => props.title || `Common questions about ${meta.value.title}`,
)
const viewAllHref = computed(() => `/faq/${meta.value.id}`)
</script>

<template>
  <section v-if="pending || items.length" :id="sectionId"
    class="relative scroll-mt-20 overflow-hidden bg-white section-py" :aria-labelledby="headingId">
    <div class="container-page">
      <CardHeader :heading-id="headingId" :badge="badge" :title="headingTitle" :description="description"
        classes="!px-0 !py-0" />

      <div v-if="pending && !items.length" class="mt-8 grid gap-2 lg:grid-cols-2" aria-hidden="true">
        <div v-for="n in limit" :key="n" class="h-16 animate-pulse rounded-xl bg-slate-100" />
      </div>

      <div v-else class="mt-8 grid items-start gap-2 lg:grid-cols-2">
        <details v-for="item in items" :key="item.id"
          class="group overflow-hidden rounded-xl border border-slate-200/80 bg-white open:border-blue-200 open:ring-1 open:ring-blue-100">
          <summary
            class="flex cursor-pointer list-none items-start justify-between gap-3 px-3.5 py-3 text-left [&::-webkit-details-marker]:hidden">
            <span class="min-w-0 text-sm font-semibold leading-snug text-slate-900">
              {{ item.question }}
            </span>
            <span
              class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-50 text-slate-500 transition group-open:rotate-45 group-open:bg-blue-600 group-open:text-white"
              aria-hidden="true">
              <Icon icon="mdi:plus" class="h-3.5 w-3.5" />
            </span>
          </summary>
          <div class="border-t border-slate-100 px-3.5 pb-3.5 pt-2.5">
            <p class="text-sm leading-relaxed text-slate-600">{{ item.answer }}</p>
          </div>
        </details>
      </div>

      <div class="mt-8 flex justify-center">
        <ActionBtn variant="secondary" label="View all FAQs" :href="viewAllHref"
          class="border-none shadow-none text-sm text-blue-600 hover:text-blue-700 hover:bg-transparent hover:shadow-none" />
      </div>
    </div>
  </section>
</template>
