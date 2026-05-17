<script setup lang="ts">
const howItWorks = [
    {
        title: 'Tell us your learning goals',
        copy: 'Share class, board, subject gaps, preferred schedule, and tutor mode in under 2 minutes.',
    },
    {
        title: 'Get matched with verified tutors',
        copy: 'We shortlist background-checked experts based on your child profile and learning style.',
    },
    {
        title: 'Start with a free demo class',
        copy: 'Evaluate teaching quality, communication style, and plan fit before you commit.',
    },
    {
        title: 'Track monthly progress reports',
        copy: 'Receive clear updates on attendance, test scores, and improvement areas.',
    },
]

const learningModes = [
    {
        title: 'One-on-One Online',
        description: 'Live personalised sessions with whiteboard support and recorded class notes.',
        icon: 'A',
        tone: 'bg-blue-100 text-blue-700',
    },
    {
        title: 'At-Home Tutoring',
        description: 'Reliable in-person tutors for focused support, homework, and exam preparation.',
        icon: 'H',
        tone: 'bg-emerald-100 text-emerald-700',
    },
    {
        title: 'Small Group Mentoring',
        description: 'Peer-based batches with capped strength and topic-wise performance tracking.',
        icon: 'G',
        tone: 'bg-violet-100 text-violet-700',
    },
]

const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science',
    'Accounts',
    'Economics',
    'JEE / NEET Prep',
    'Olympiad Foundation',
    'Spoken English',
    'Coding for Kids',
]

const testimonials = [
    {
        quote:
            'In 4 months, my daughter improved from 68% to 87% in Maths. The mentor shared weekly actionable insights.',
        name: 'Priya N.',
        city: 'Bengaluru',
    },
    {
        quote:
            'The tutor quality and consistency are excellent. We finally found a system that tracks real learning progress.',
        name: 'Amit R.',
        city: 'Pune',
    },
]

const faqs = [
    {
        q: 'How quickly can we get a tutor match?',
        a: 'Most families receive curated tutor profiles within 24 hours after submitting requirements.',
    },
    {
        q: 'Are all tutors background verified?',
        a: 'Yes. Every listed tutor goes through identity, qualification, and profile screening before activation.',
    },
    {
        q: 'Can we change tutor if the fit is not right?',
        a: 'Absolutely. You can request a rematch and we prioritize a better fit using your feedback.',
    },
    {
        q: 'Do you support board-specific preparation?',
        a: 'Yes, we support CBSE, ICSE, IB, Cambridge, State Boards, and entrance-focused programs.',
    },
]
</script>

<template>
    <div class="bg-slate-50 text-slate-900">
        <main>
            <HeroSection />
            <PartnersStrip />

            <section id="how-it-works" class="container-page py-14 sm:py-16 lg:py-20">
                <div class="max-w-2xl">
                    <p class="text-xs font-semibold tracking-[0.16em] uppercase text-blue-700">How it works</p>
                    <h2 class="mt-3 text-3xl sm:text-4xl font-display font-extrabold leading-tight">
                        A structured flow that parents can trust
                    </h2>
                    <p class="mt-4 text-slate-600 text-base sm:text-lg">
                        From first match to monthly outcomes, every step is designed to deliver visible academic
                        progress.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
                    <article v-for="(step, i) in howItWorks" :key="step.title"
                        class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                        <div
                            class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">
                            {{ i + 1 }}
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-slate-900">{{ step.title }}</h3>
                        <p class="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{{ step.copy }}</p>
                    </article>
                </div>
            </section>

            <section id="parents" class="container-page pb-14 sm:pb-16 lg:pb-20">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <div
                        class="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                        <p class="text-xs font-semibold tracking-[0.16em] uppercase text-emerald-700">Learning modes</p>
                        <h2 class="mt-3 text-2xl sm:text-3xl font-display font-extrabold">
                            Flexible tutoring built around your family schedule
                        </h2>

                        <div class="mt-6 space-y-4">
                            <article v-for="mode in learningModes" :key="mode.title"
                                class="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <span :class="['grid h-10 w-10 place-items-center rounded-xl font-bold', mode.tone]">
                                    {{ mode.icon }}
                                </span>
                                <div>
                                    <h3 class="font-semibold text-slate-900">{{ mode.title }}</h3>
                                    <p class="mt-1 text-sm sm:text-base text-slate-600">{{ mode.description }}</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                        <p class="text-xs font-semibold tracking-[0.16em] uppercase text-indigo-700">Subjects covered
                        </p>
                        <h3 class="mt-3 text-xl sm:text-2xl font-display font-bold">Comprehensive support for every
                            stage</h3>
                        <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            <li v-for="subject in subjects" :key="subject"
                                class="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700">
                                <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-600 text-white">
                                    <span class="text-[10px] font-bold">✓</span>
                                </span>
                                <span>{{ subject }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="tutors" class="container-page pb-14 sm:pb-16 lg:pb-20">
                <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
                    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                        <div class="max-w-2xl">
                            <p class="text-xs font-semibold tracking-[0.16em] uppercase text-blue-700">Parent outcomes
                            </p>
                            <h2 class="mt-3 text-2xl sm:text-3xl font-display font-extrabold">
                                Families choose Indian Mentors for reliability and results
                            </h2>
                        </div>
                        <a href="#book-demo" class="btn-primary w-full sm:w-auto">
                            Book Free Demo
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    <div class="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                        <blockquote v-for="item in testimonials" :key="item.name"
                            class="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                            <p class="text-slate-700 leading-relaxed">“{{ item.quote }}”</p>
                            <footer class="mt-4 text-sm text-slate-500">
                                <span class="font-semibold text-slate-900">{{ item.name }}</span> · {{ item.city }}
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section id="faq" class="container-page pb-16 lg:pb-24">
                <div class="max-w-4xl">
                    <p class="text-xs font-semibold tracking-[0.16em] uppercase text-blue-700">FAQs</p>
                    <h2 class="mt-3 text-2xl sm:text-3xl font-display font-extrabold">
                        Common questions from parents
                    </h2>
                </div>

                <div class="mt-6 space-y-3">
                    <details v-for="item in faqs" :key="item.q"
                        class="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5 open:shadow-sm">
                        <summary
                            class="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between gap-4">
                            <span>{{ item.q }}</span>
                            <span class="text-slate-400 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p class="mt-3 text-slate-600 leading-relaxed">{{ item.a }}</p>
                    </details>
                </div>
            </section>
        </main>
    </div>
</template>
