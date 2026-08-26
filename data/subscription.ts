import { externalLinks } from './external-links'

export const subConcept = {
  badge: 'How it works',
  title: `Build Your Subscription in <span class="text-gradient-brand">3 Simple Steps</span>`,
  description:
    'Pick a learning plan, choose how long you need it, then decide how to pay — clear, flexible, and fully in your control.',
  classes: '',
  cta: { label: 'Choose  Subscription Plan', href: '#learning-plans' },
  tagline: "You're just a few clicks away from the right plan!",
  socialProof: '50,000+ students',
  steps: [
    {
      no: '01',
      title: 'Select Your Learning Plan',
      summary: 'Gold → Diamond → Platinum',
      description: 'Determines the daily learning duration, academic intensity and level of support.',
      options: ['Gold', 'Diamond', 'Platinum'],
      iconMdi: 'mdi:school-outline',
      accent: 'blue' as const,
    },
    {
      no: '02',
      title: 'Select Your Subscription Tenure',
      summary: 'Monthly → Quarterly → Half-Yearly → Annual',
      description: 'Determines how long the tutoring subscription continues.',
      options: ['Monthly', 'Quarterly', 'Half-Yearly', 'Annual'],
      iconMdi: 'mdi:calendar-month-outline',
      accent: 'sky' as const,
    },
    {
      no: '03',
      title: 'Select Your Payment Option',
      summary: 'Upfront → Installment → Eligible EMI',
      description: 'Determines how the applicable subscription fee is paid.',
      options: ['Upfront', 'Installment', 'Eligible EMI'],
      iconMdi: 'mdi:credit-card-outline',
      accent: 'emerald' as const,
    },
  ],
}

export const subTenures = {
  badge: 'Choose Your Subscription Tenure',
  title: 'How Long Do You Need <span class="text-gradient-brand">Personalised Tutoring?</span>',
  description:
    'Once you select the appropriate learning plan, choose the subscription tenure that fits your academic timeline.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'monthly',
      name: 'Monthly',
      subtitle: '1-Month Paid Trial',
      headline: 'Experience Before Committing',
      duration: '1 Month',
      payment: 'Upfront',
      discount: '—',
      description:
        'Best for first-time families who want to try tutoring before a longer commitment.',
      cta: { label: 'Start Trial', href: '/student-parent/subscription?tenure=monthly#tenures' },
      accent: 'emerald' as const,
      iconMdi: 'mdi:calendar-today',
    },
    {
      id: 'quarterly',
      name: 'Quarterly',
      subtitle: '3-Month Plan',
      headline: 'Short-Term Structured Support',
      duration: '3 Months',
      payment: 'Upfront',
      discount: '—',
      description:
        'Ideal for short-term academic needs with structured support before a longer plan.',
      cta: { label: 'Explore Quarterly', href: '/student-parent/subscription?tenure=quarterly#tenures' },
      accent: 'blue' as const,
      iconMdi: 'mdi:calendar-range',
    },
    {
      id: 'half-yearly',
      name: 'Half-Yearly',
      subtitle: '6-Month Plan',
      headline: 'Defined Academic Learning Cycle',
      duration: '6 Months',
      payment: 'Upfront',
      discount: 'No standard discount',
      description:
        'Best for board prep and defined milestones that need about six months of tutoring.',
      cta: { label: 'Explore Half-Yearly', href: '/student-parent/subscription?tenure=half-yearly#tenures' },
      accent: 'violet' as const,
      iconMdi: 'mdi:calendar-clock',
    },
    {
      id: 'annual',
      name: 'Annual',
      subtitle: '12-Month Plan',
      headline: 'Complete Academic-Year Continuity',
      duration: '12 Months',
      payment: 'Upfront / Installments',
      discount: 'Up to 15%',
      description:
        'Ideal for students who want consistent academic support throughout the school year.',
      cta: { label: 'Choose Annual', href: '/student-parent/subscription?tenure=annual#tenures' },
      accent: 'amber' as const,
      iconMdi: 'mdi:trophy-outline',
      recommended: true,
    },
  ],
}

export const subTrial = {
  badge: 'One-Month Paid Trial',
  title: `Not Ready to Commit? <span class="text-gradient-brand">Start With One Month</span>`,
  description:
    'A paid trial to test the tutor, teaching style, and schedule before choosing a longer tenure.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  hook: {
    duration: '1 Month',
    label: 'Paid Trial',
    points: [
      'Experience the tutor before a longer plan',
      'Evaluate teaching style and schedule fit',
      'Continue, modify, or stop after the month',
    ],
  },
  evaluateLabel: 'What you will evaluate',
  evaluate: [
    { title: 'Tutor Compatibility', description: 'Does your child feel comfortable with the tutor?', iconMdi: 'mdi:account-heart-outline', accent: 'violet' as const },
    { title: 'Teaching Method', description: "Does the teaching approach suit the student's learning style?", iconMdi: 'mdi:human-male-board', accent: 'blue' as const },
    { title: 'Student Engagement', description: 'Is the student participating and responding positively?', iconMdi: 'mdi:lightbulb-on-outline', accent: 'emerald' as const },
    { title: 'Schedule Compatibility', description: 'Does the tutoring schedule fit your family routine?', iconMdi: 'mdi:clock-outline', accent: 'orange' as const },
    { title: 'Academic Support', description: "Is the tutoring addressing the student's requirements?", iconMdi: 'mdi:chart-line', accent: 'fuchsia' as const },
    { title: 'Parent Communication', description: 'Are you receiving clear updates on progress and next steps?', iconMdi: 'mdi:message-text-outline', accent: 'sky' as const },
  ],
  important:
    'The Monthly Plan is a paid one-month trial, not a free trial. Pricing, eligibility, included services, tutor availability and conversion conditions depend on the applicable offer and plan terms.',
  cta: { label: 'Start 1-Month Trial', href: '/student-parent/subscription?tenure=monthly#trial' },
}

export const subSupports = {
  badge: 'What Your Subscription Supports',
  title: 'More Than Tutoring. A Complete <span class="text-gradient-brand">Learning Experience.</span>',
  description: 'Depending on the selected plan and applicable services:',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Personalised Tutoring', description: 'One-to-one academic instruction.', iconMdi: 'mdi:account-school-outline' },
    { title: 'Scheduled Sessions', description: 'Sessions arranged according to the selected requirements.', iconMdi: 'mdi:calendar-clock-outline' },
    { title: 'Attendance Tracking', description: 'Applicable session and attendance records.', iconMdi: 'mdi:clipboard-check-outline' },
    { title: 'Tutor Feedback', description: 'Learning-related observations and feedback.', iconMdi: 'mdi:comment-text-outline' },
    { title: 'Academic Progress', description: 'Applicable progress monitoring and reporting.', iconMdi: 'mdi:chart-box-outline' },
    { title: 'Parent Communication', description: 'Updates according to the selected plan.', iconMdi: 'mdi:account-voice' },
    { title: 'Tutor Coordination', description: 'Tutor-related assistance according to applicable policy.', iconMdi: 'mdi:swap-horizontal' },
    { title: 'Digital Tracking', description: 'Applicable family dashboard functionality.', iconMdi: 'mdi:monitor-dashboard' },
  ],
  flexibility: {
    badge: "Flexible as Your Needs Change",
    title: 'Academic Priorities Can Shift',
    description:
      'Depending on applicable terms, families may discuss adjustments to the areas below. Any modification remains subject to tutor availability, plan eligibility, pricing differences and applicable subscription policies.',
    items: ['Subjects', 'Session Duration', 'Learning Frequency', 'Learning Mode', 'Tutor', 'Learning Plan'],
  },
}

export const subRecommend = {
  badge: 'Plan Recommendation',
  title: 'Not Sure Which Plan Fits Your Child?',
  description:
    'Our academic counselling team can help identify an appropriate combination of Learning Plan + Tenure + Payment Option.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  supporting:
    'Share class, board, subjects, academic goal, schedule, and exam timeline — we will recommend the right combination.',
  cta: { label: 'Talk to an  Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
}

export const subTerms = {
  badge: 'Transparent Plan Information',
  title: "Know What You're Choosing",
  description: 'Before confirming a subscription, parents should be able to review:',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  topics: [
    {
      title: 'Plan Details',
      description: 'Duration, session structure, subjects and learning intensity.',
      iconMdi: 'mdi:clipboard-text-outline',
    },
    {
      title: 'Pricing',
      description: 'See applicable fees, discounts, and the full payment schedule.',
      iconMdi: 'mdi:currency-inr',
    },
    {
      title: 'Tutor Arrangement',
      description: 'Tutor selection, demo, and applicable replacement conditions.',
      iconMdi: 'mdi:account-search-outline',
    },
    {
      title: 'Monitoring',
      description: 'Attendance, session feedback, reports, and parent engagement.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Cancellation & Refund',
      description: 'Cancellation, refund, rescheduling, and unused-session terms.',
      iconMdi: 'mdi:file-document-edit-outline',
    },
    {
      title: 'Support',
      description: 'Available communication channels and service support options.',
      iconMdi: 'mdi:lifebuoy',
    },
  ],
  important: {
    badge: 'Important Subscription Terms',
    title: 'Clear Terms. Transparent Commitment.',
    items: [
      'Subscription duration begins according to the applicable plan activation date.',
      'Selected plan, tutor availability, session frequency and included services are governed by applicable subscription terms.',
      'Monthly is a paid one-month trial, not a free trial.',
      'Quarterly subscriptions may be offered only in limited or approved cases.',
      'Half-Yearly subscriptions are payable upfront and carry no standard tenure discount.',
      'Annual discounts apply only to eligible payment arrangements.',
      'Maximum advertised annual discount is up to 15%, subject to applicable terms.',
      'Installments must be paid according to the prescribed schedule.',
      'Each installment should be cleared within 45 days of the applicable due date to maintain subscription validity.',
      'EMI availability depends on eligibility and the approved payment facility.',
      'Applicable taxes, gateway charges or statutory charges, if any, will be handled according to applicable terms.',
      'Cancellation, refund, suspension, tutor replacement, rescheduling and unused-session provisions are governed by applicable Indian Mentors policies.',
      'Parents should retain payment confirmations and receipts for future reference.',
    ],
  },
  cta: { label: 'Read Subscription Terms', href: '/contact' },
}

