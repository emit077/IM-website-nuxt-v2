<script setup lang="ts">
import HeroStats from './HeroStats.vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

const headerContent = {
  badge: 'know more',
  title: 'About <span class="text-gradient-brand">Indian Mentors</span>',
  classes: 'mb-2 !px-0 !py-0',
}
</script>

<template>
  <section id="about" class="relative overflow-hidden section-surface-muted section-py" aria-label="About us">
    <div class="container-page">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
        <div class="flex flex-col gap-7 lg:col-span-7 lg:gap-8 xl:col-span-6">
          <CardHeader :badge="headerContent.badge" :title="headerContent.title" :classes="headerContent.classes"
            align="left" />
          <p class="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg" v-motion
            :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
            <b>Building Futures Through Personalised Education.</b>
            <br><br>
            Indian Mentors is a trusted educational service provider offering highly
            <b>qualified and verified mentors</b> to help students achieve academic excellence.
            <br><br>
            We believe in strong collaboration between <b>students, parents, and mentors</b> to create a meaningful and
            results-driven learning experience.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <ActionBtn variant="primary" href="/about" label="Know More About Us" />
          </div>
        </div>
        <div class="relative flex lg:col-span-5 lg:self-stretch xl:col-span-6">
          <HeroStats />
        </div>
      </div>
    </div>
  </section>
</template>
