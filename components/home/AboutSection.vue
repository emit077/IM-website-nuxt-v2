<script setup lang="ts">
import HeroStats from './HeroStats.vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'

const headerContent = {
  badge: 'know more',
  title: 'About <span class="text-gradient-brand">Indian Mentors</span>',
  description: '',
  classes: 'mb-2 !px-0 !py-0',
}
</script>

<template>
  <section id="about" class="relative overflow-hidden section-surface-muted section-py" aria-label="About us">
    <div class="container-page ">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-stretch">
        <div class="lg:col-span-7 xl:col-span-6 flex flex-col gap-7 lg:gap-8">
          <CardHeader :badge="headerContent.badge" :title="headerContent.title" :description="headerContent.description"
            :classes="headerContent.classes" align="left" />
          <p class="text-pretty text-base sm:text-lg text-slate-600 leading-relaxed" v-motion
            :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
            <b>Building Futures Through Personalised Education.</b> <br><br>
            Indian Mentors is a trusted educational service provider offering highly <b>qualified and verified mentors
            </b> to
            help students achieve academic excellence.
            <br />
            <br />
            We believe in strong collaboration between <b>students, parents, and mentors</b> to create a meaningful and
            results-driven learning experience.

          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
            <ActionBtn variant="primary" href="/about" label="Know More About Us" />
          </div>
          <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-2" v-motion
            :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"></div>
        </div>
        <div class="lg:col-span-5 xl:col-span-6 relative flex lg:self-stretch">
          <HeroStats />
        </div>
      </div>
    </div>
    <div aria-hidden="true"
      class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50 pointer-events-none">
    </div>
  </section>
</template>
