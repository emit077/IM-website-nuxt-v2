<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { subRecommend } from '~/data/subscription'
</script>

<template>
  <UiCTASection section-id="recommend" heading-id="sub-recommend-heading" layout="split"
    surface-class="section-surface-muted" :badge="subRecommend.badge" :title="subRecommend.title"
    :description="subRecommend.description" :supporting="subRecommend.supporting">
    <template #ctas>
      <ActionBtn variant="theme-secondary" :label="subRecommend.cta.label" :href="subRecommend.cta.href"
        :icon="subRecommend.cta.iconMdi" />
    </template>
  </UiCTASection>
</template>
