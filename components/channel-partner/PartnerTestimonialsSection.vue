<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { testimonialsSection, partnerTestimonials } from '~/data/channel-partner'
</script>

<template>
  <section id="partner-testimonials" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="partner-testimonials-heading">
    <div class="container-page">
      <CardHeader heading-id="partner-testimonials-heading" :badge="testimonialsSection.kicker"
        :title="testimonialsSection.title" :description="testimonialsSection.description"
        :classes="testimonialsSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3" role="list">
        <li v-for="(testimonial, i) in partnerTestimonials" :key="testimonial.id" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 450 } }">
          <article
            class="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card sm:p-7">
            <Icon icon="mdi:format-quote-open" class="h-8 w-8 text-blue-200" aria-hidden="true" />
            <blockquote class="mt-3 flex-1 text-[13.5px] leading-relaxed text-slate-600 sm:text-sm">
              "{{ testimonial.quote }}"
            </blockquote>
            <footer class="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white"
                aria-hidden="true">
                {{ testimonial.name.charAt(0) }}
              </span>
              <div>
                <p class="text-sm font-bold text-slate-900">{{ testimonial.name }}</p>
                <p class="text-[12px] text-slate-500">{{ testimonial.role }} · {{ testimonial.location }}</p>
              </div>
            </footer>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
