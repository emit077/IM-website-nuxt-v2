<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import { planPositioning, subscriptionComparisonRows } from '~/data/student-parent'
</script>

<template>
  <section id="plan-comparison" class="relative bg-[#f8fafc] py-12 sm:py-16" aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader variant="variant-1" badge="📊 Feature Comparison"
        title="Choose the Right Plan for <span class='text-gradient-brand'>Your Academic Goals</span>"
        description="Flexible Learning Plans Designed for Every Student's Needs — Structured Learning, Personalised for You."
        content-class="mx-auto max-w-3xl !text-center [&_[data-slot=card-badge]]:mx-auto [&_[data-slot=card-title]]:text-center [&_[data-slot=card-description]]:mx-auto" />

      <!-- Plan header cards -->
      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div
          class="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white p-4 text-center shadow-soft">
          <span class="text-2xl" aria-hidden="true">🏆</span>
          <p class="font-display mt-2 font-bold text-slate-900">Gold Plan</p>
          <p class="text-xs text-amber-700">Affordable · Smart Start</p>
          <p class="mt-1 text-sm font-semibold text-slate-600">1 Hour / Day</p>
          <a href="#book-demo"
            class="mt-3 inline-flex rounded-xl bg-amber-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-600">
            Book Demo
          </a>
        </div>
        <div
          class="relative rounded-2xl border-2 border-blue-400/60 bg-gradient-to-br from-blue-600 to-indigo-700 p-4 text-center text-white shadow-[0_20px_48px_-16px_rgba(37,99,235,0.4)] sm:scale-105">
          <span
            class="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase text-blue-700">
            ⭐ Most Popular
          </span>
          <span class="text-2xl" aria-hidden="true">💎</span>
          <p class="font-display mt-2 font-bold">Diamond Plan</p>
          <p class="text-xs text-blue-100">Performance Plan</p>
          <p class="mt-1 text-sm font-semibold text-blue-50">1.5 Hours / Day</p>
          <a href="#book-demo"
            class="mt-3 inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50">
            Book Demo
          </a>
        </div>
        <div
          class="rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50 to-white p-4 text-center shadow-soft">
          <span class="text-2xl" aria-hidden="true">👑</span>
          <p class="font-display mt-2 font-bold text-slate-900">Platinum Plan</p>
          <p class="text-xs text-violet-700">Premium Excellence</p>
          <p class="mt-1 text-sm font-semibold text-slate-600">2 Hours / Day</p>
          <a href="#book-demo"
            class="mt-3 inline-flex rounded-xl bg-violet-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-violet-700">
            Book Demo
          </a>
        </div>
      </div>

      <!-- Comparison table -->
      <div id="plan-comparison-heading"
        class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
        <div class="hidden overflow-x-auto lg:block">
          <table class="w-full min-w-[800px] text-left text-sm">
            <thead class="sticky top-0 z-10 bg-white shadow-sm">
              <tr class="border-b border-slate-200">
                <th class="px-5 py-4 font-semibold text-slate-900">📌 Features</th>
                <th class="px-4 py-4 text-center">
                  <span class="font-semibold text-amber-800">🏆 Gold</span>
                  <span class="block text-xs font-normal text-slate-500">Smart Start</span>
                </th>
                <th class="px-4 py-4 text-center bg-blue-50/80">
                  <span class="font-semibold text-blue-700">💎 Diamond</span>
                  <span class="block text-xs font-normal text-blue-600">⭐ Most Popular</span>
                </th>
                <th class="px-4 py-4 text-center">
                  <span class="font-semibold text-violet-800">👑 Platinum</span>
                  <span class="block text-xs font-normal text-slate-500">Premium Excellence</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, ri) in subscriptionComparisonRows" :key="row.feature"
                :class="[ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/40', 'border-b border-slate-100 last:border-0']">
                <td class="px-5 py-3.5 font-medium text-slate-800">{{ row.feature }}</td>
                <td class="px-4 py-3.5 text-center text-slate-600">{{ row.gold }}</td>
                <td class="px-4 py-3.5 text-center font-medium text-blue-700 bg-blue-50/50">{{ row.diamond }}</td>
                <td class="px-4 py-3.5 text-center text-slate-600">{{ row.platinum }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile: stacked per feature -->
        <ul class="divide-y divide-slate-200 lg:hidden" role="list">
          <li v-for="row in subscriptionComparisonRows" :key="row.feature" class="px-4 py-4">
            <p class="font-semibold text-slate-900">{{ row.feature }}</p>
            <div class="mt-2 grid grid-cols-3 gap-2 text-[11px]">
              <div class="rounded-lg bg-amber-50 p-2 text-center">
                <span class="font-semibold text-amber-800">Gold</span>
                <p class="mt-1 text-slate-600">{{ row.gold }}</p>
              </div>
              <div class="rounded-lg bg-blue-50 p-2 text-center ring-1 ring-blue-200">
                <span class="font-semibold text-blue-700">Diamond</span>
                <p class="mt-1 text-slate-600">{{ row.diamond }}</p>
              </div>
              <div class="rounded-lg bg-violet-50 p-2 text-center">
                <span class="font-semibold text-violet-800">Platinum</span>
                <p class="mt-1 text-slate-600">{{ row.platinum }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Positioning strip -->
      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div v-for="pos in planPositioning" :key="pos.name"
          class="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-center shadow-soft">
          <p class="font-display text-sm font-bold text-slate-900">{{ pos.emoji }} {{ pos.name }}</p>
          <p class="mt-1 text-xs text-slate-600">{{ pos.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
