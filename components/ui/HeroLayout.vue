<script setup lang="ts">
import type { Component } from 'vue'
import type { TrustIndicatorItem } from '~/components/ui/TrustIndicatorsLayout.vue'
import HeroHeader from '~/components/ui/HeroHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import TrustIndicatorsLayout from '~/components/ui/TrustIndicatorsLayout.vue'

export interface HeroContent {
    badge?: string
    title?: string
    subtitle?: string
    description?: string
    contentClass?: string
    backgroundImage?: string
    mobileBackgroundImage?: string
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

        <div v-if="heroContent.backgroundImage"
            class="absolute top-0 right-0 hidden h-full w-1/2 max-w-[50%] bg-cover bg-left bg-no-repeat xl:block"
            :style="{ backgroundImage: heroContent.backgroundImage }" />

        <div class="container-page pb-12 pt-10 lg:pt-16 ">
            <div class="grid grid-cols-2">
                <div class="col-span-2">
                    <slot name="header">
                        <HeroHeader v-if="heroContent" variant="hero" :heading-id="heroContent.headingId"
                            :badge="heroContent.badge" :title="heroContent.title" :subtitle="heroContent.subtitle"
                            :description="heroContent.description" :content-class="heroContent.contentClass" />
                    </slot>
                    <slot name="caption">
                        <p v-if="heroContent.caption" class="mt-4 text-sm text-gray-500" v-html="heroContent.caption" />
                    </slot>
                    <img v-if="heroContent.mobileBackgroundImage" :src="heroContent.mobileBackgroundImage"
                        alt="Hero Image"
                        class="mx-auto mt-4 w-full max-w-md object-contain sm:max-w-lg xl:hidden" />
                    <slot name="actions">
                        <div v-if="heroContent.actionBtns.length"
                            class="my-6 flex w-full flex-col items-stretch gap-3 xl:flex-row xl:gap-4" v-motion
                            :initial="{ opacity: 0, y: 16 }"
                            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
                            <ActionBtn v-for="(btn, index) in heroContent.actionBtns" :key="`${btn.label}-${index}`"
                                class="!w-full xl:!w-auto" :variant="btn.variant" :label="btn.label" :icon="btn.icon"
                                :href="btn.link" :icon-wrapper-class="btn.iconWrapperClass" />
                        </div>
                    </slot>
                </div>
            </div>
            <div aria-hidden="true"
                class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
        </div>
    </section>
    <div class=" container-page">
        <TrustIndicatorsLayout :items="heroContent.trustStats" />
    </div>
</template>
