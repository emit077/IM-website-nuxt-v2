<script setup lang="ts">
import type { Component } from 'vue'
import TrustIndicators from '~/components/ui/TrustIndicatorsLayout.vue'
import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

export interface HeroContent {
    badge?: string
    title?: string
    subtitle?: string
    description?: string
    contentClass?: string
    backgroundImage?: string
    caption?: string
    headingId?: string
    actionBtns: HeroActionBtn[]
    trustStats: TrustIndicatorItem[]
}

export interface HeroActionBtn {
    label: string
    variant: 'primary' | 'secondary'
    icon?: Component | string
    link: string
    iconWrapperClass?: string
}

defineProps<{
    heroContent: HeroContent
}>()
</script>

<template>
    <section class="relative overflow-hidden bg-white bg-right bg-no-repeat"
        :aria-labelledby="heroContent.headingId || undefined">

        <div class="absolute top-0 left-0 hidden h-full w-full md:block">
            <div class="grid grid-cols-3 h-full w-full">
                <div v-if="heroContent.backgroundImage"
                    class="col-span-2 col-start-2 h-full w-full bg-cover bg-right bg-no-repeat"
                    :style="{ backgroundImage: heroContent.backgroundImage }" />
            </div>
        </div>

        <div class="container-page pb-12 pt-10 lg:pt-16 ">
            <div class="grid grid-cols-2">
                <div class="col-span-2">
                    <slot name="header">
                        <HeroHeader v-if="heroContent" variant="hero" :heading-id="heroContent.headingId"
                            :badge="heroContent.badge" :title="heroContent.title" :subtitle="heroContent.subtitle"
                            :description="heroContent.description" :content-class="heroContent.contentClass" />
                    </slot>
                    <slot name="actions">
                        <div v-if="heroContent.actionBtns.length" class="my-6 flex flex-col gap-3 sm:flex-row sm:gap-4"
                            v-motion :initial="{ opacity: 0, y: 16 }"
                            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">

                            <div class="block md:hidden text-center">
                                <img :src="heroContent.backgroundImage" alt="Hero Image" class=" mx-auto">
                            </div>
                            <ActionBtn v-for="(btn, index) in heroContent.actionBtns" :key="`${btn.label}-${index}`"
                                :variant="btn.variant" :label="btn.label" :icon="btn.icon" :href="btn.link"
                                :icon-wrapper-class="btn.iconWrapperClass" />
                        </div>
                    </slot>
                    <slot name="caption">
                        <p v-if="heroContent.caption" class="mb-6 ml-2 text-sm text-gray-500"
                            v-html="heroContent.caption" />
                    </slot>
                </div>
            </div>
            <div aria-hidden="true"
                class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
            <slot name="trust-indicators">
                <TrustIndicators v-if="heroContent.trustStats.length" class="pt-1" :items="heroContent.trustStats" />
            </slot>
        </div>
    </section>
</template>
