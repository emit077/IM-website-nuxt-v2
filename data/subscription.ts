import { externalLinks } from './external-links'

export const subNav = {
  links: [
    { label: 'Overview', href: '#overview' },
    { label: 'Learning Plans', href: '#learning-plans' },
    { label: 'Tenures', href: '#tenures' },
    { label: 'Savings', href: '#savings' },
    { label: 'Monitoring', href: '#monitoring' },
    { label: 'FAQs', href: '#faqs' },
  ],
  cta: { label: 'Choose Your Plan', href: '#plan-builder' },
}

export const subConcept = {
  badge: 'How it works',
  title: `Build Your Subscription in <span class="text-gradient-brand">3 Simple Steps</span>`,
  description:
    'Pick a learning plan, choose how long you need it, then decide how to pay — clear, flexible, and fully in your control.',
  classes: '',
  cta: { label: 'Choose Your Plan', href: '#learning-plans' },
  tagline: "You're just a few clicks away from the right plan!",
  socialProof: '50,000+ students',
  formNote: 'By continuing, you agree to receive a call from our counsellor about your learning plan.',
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
  layers: [
    { label: 'Learning Plan', options: ['Gold', 'Diamond', 'Platinum'] },
    { label: 'Subscription Tenure', options: ['Monthly', 'Quarterly', 'Half-Yearly', 'Annual'] },
    { label: 'Payment Option', options: ['Upfront', 'Installment', 'Eligible EMI'] },
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
      availability: 'According to applicable plan terms',
      discount: '—',
      description:
        'Best for first-time families who want to try tutoring before a longer commitment.',
      suited: 'Want to experience the service?',
      cta: { label: 'Start Trial', href: '/student-parent/subscription?tenure=monthly#plan-builder' },
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
      availability: 'Limited / Case-to-Case',
      discount: '—',
      description:
        'Ideal for short-term academic needs with structured support before a longer plan.',
      suited: 'Need short-term support?',
      cta: { label: 'Explore Quarterly', href: '/student-parent/subscription?tenure=quarterly#plan-builder' },
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
      availability: 'Standard',
      discount: 'No standard discount',
      description:
        'Best for board prep and defined milestones that need about six months of tutoring.',
      suited: 'Preparing for a defined milestone?',
      cta: { label: 'Explore Half-Yearly', href: '/student-parent/subscription?tenure=half-yearly#plan-builder' },
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
      availability: 'Recommended',
      discount: 'Up to 15%',
      description:
        'Ideal for students who want consistent academic support throughout the school year.',
      suited: 'Want year-long continuity?',
      cta: { label: 'Choose Annual', href: '/student-parent/subscription?tenure=annual#plan-builder' },
      accent: 'amber' as const,
      iconMdi: 'mdi:trophy-outline',
      recommended: true,
    },
  ],
  comparison: {
    badge: 'Tenure Comparison',
    title: 'Plan Duration at a Glance',
    rows: [
      { tenure: 'Monthly Trial', duration: '1 Month', payment: 'Upfront', discount: '—', suited: 'First-time users' },
      { tenure: 'Quarterly', duration: '3 Months', payment: 'Upfront', discount: '—', suited: 'Short-term requirements' },
      { tenure: 'Half-Yearly', duration: '6 Months', payment: 'Upfront', discount: 'No standard discount', suited: 'Board / milestone preparation' },
      { tenure: 'Annual – 1 Payment', duration: '12 Months', payment: 'Upfront', discount: '15% OFF', suited: 'Maximum applicable savings' },
      { tenure: 'Annual – 2 Payments', duration: '12 Months', payment: '2 Installments', discount: '10% OFF', suited: 'Balanced payment' },
      { tenure: 'Annual – 3 Payments', duration: '12 Months', payment: '3 Installments', discount: '5% OFF', suited: 'Flexible annual payment' },
      { tenure: 'Annual – 4 Payments', duration: '12 Months', payment: '4 Installments', discount: 'No discount', suited: 'Extended payment flexibility' },
      { tenure: 'Eligible EMI', duration: 'As Applicable', payment: 'Auto-Debit', discount: 'As Applicable', suited: 'Convenient payment arrangement' },
    ],
  },
  guide: {
    badge: 'Which Tenure Should You Choose?',
    title: 'Choose According to Your Academic Timeline',
  },
}

export const subTrial = {
  badge: 'One-Month Paid Trial',
  title: `Not Ready to Commit? <span class="text-gradient-brand">Start With One Month</span>`,
  subtitle: 'Experience Personalised Tutoring First.',
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
  after: {
    label: 'After the Trial',
    note: 'According to applicable subscription and trial terms.',
    options: [
      { label: 'Continue', description: 'Move to a longer tenure.', iconMdi: 'mdi:check-circle-outline' },
      { label: 'Modify', description: 'Adjust tutor, plan, or timing.', iconMdi: 'mdi:tune-variant' },
      { label: 'Discontinue', description: 'End if it is not the right fit.', iconMdi: 'mdi:close-circle-outline' },
    ],
  },
  important:
    'The Monthly Plan is a paid one-month trial, not a free trial. Pricing, eligibility, included services, tutor availability and conversion conditions depend on the applicable offer and plan terms.',
  cta: { label: 'Start 1-Month Trial', href: '/student-parent/subscription?tenure=monthly#plan-builder' },
  journey: {
    badge: 'From Trial to Long-Term Learning',
    title: 'Experience First. Continue With Confidence.',
    steps: [
      { no: '01', title: 'Profile', description: "Create the student's profile." },
      { no: '02', title: 'Requirement', description: 'Share class, subjects, goals and schedule.' },
      { no: '03', title: 'Match', description: 'Explore or receive suitable tutor options.' },
      { no: '04', title: 'Demo', description: "Experience the tutor's teaching approach." },
      { no: '05', title: 'Trial', description: 'Start the One-Month Paid Trial.' },
      { no: '06', title: 'Review', description: 'Evaluate the learning experience.' },
      { no: '07', title: 'Subscribe', description: 'Choose a longer-term tenure.' },
    ],
    flow: ['Profile', 'Match', 'Demo', 'Trial', 'Review', 'Subscribe'],
  },
}

export const subSavings = {
  badge: 'Annual Payment & Savings',
  title: 'Save More With Eligible <span class="text-gradient-brand">Annual Payment Options</span>',
  description:
    'For families choosing annual continuity, applicable payment arrangements provide different discount levels.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  highlight: 'Up to 15% OFF',
  highlightNote: 'Choose annual + eligible payment option',
  disclaimer:
    'Discounts apply only to eligible annual subscription arrangements and are subject to applicable plan, payment and commercial terms.',
  options: [
    { payments: '1 Installment', discount: '15% OFF', structure: 'Full annual payment upfront', featured: true },
    { payments: '2 Installments', discount: '10% OFF', structure: 'Two payments', featured: false },
    { payments: '3 Installments', discount: '5% OFF', structure: 'Three payments', featured: false },
    { payments: '4 Installments', discount: 'Not Applicable', structure: 'No standard discount', featured: false },
    { payments: 'Eligible Monthly EMI', discount: 'Not Applicable', structure: 'Approved auto-debit arrangement', featured: false },
  ],
  whyAnnual: {
    badge: 'Why Choose an Annual Subscription?',
    title: 'Build Academic Continuity Throughout the Year',
    items: [
      { title: 'Continuous Learning', description: 'Maintain a consistent learning routine.', iconMdi: 'mdi:book-open-page-variant-outline' },
      { title: 'Tutor Continuity', description: 'Support a more stable tutoring relationship.', iconMdi: 'mdi:account-tie-outline' },
      { title: 'Ongoing Monitoring', description: 'Maintain structured academic tracking.', iconMdi: 'mdi:chart-timeline-variant' },
      { title: 'Better Planning', description: 'Align tutoring with school calendars, examinations and academic milestones.', iconMdi: 'mdi:calendar-check-outline' },
      { title: 'Applicable Savings', description: 'Eligible payment arrangements can provide up to 15% OFF.', iconMdi: 'mdi:tag-outline' },
      { title: 'Flexible Payment', description: 'Choose applicable upfront or installment arrangements.', iconMdi: 'mdi:credit-card-outline' },
    ],
  },
  validity: {
    badge: 'Installment Validity',
    title: 'Keep Your Subscription Active',
    description:
      'For annual installment arrangements, each applicable installment should be cleared within 45 days of the applicable payment due date to maintain subscription validity and continuity.',
    warning:
      'Failure to clear an installment within the applicable period may result in suspension or interruption of subscription benefits, subject to the applicable terms.',
    factorsLabel: 'Payment eligibility, discounts, installment schedules and EMI availability may vary based on:',
    factors: [
      'Selected subscription plan',
      'Service category',
      'Location',
      'Payment arrangement',
      'Active offer',
      'Applicable commercial terms',
    ],
  },
  methods: {
    badge: 'Payment Methods',
    title: 'Simple. Convenient. Transparent.',
    digital: {
      title: 'Digital Payments',
      items: ['UPI', 'QR Code', 'Payment Link', 'Net Banking', 'Credit Card', 'Debit Card'],
    },
    other: {
      title: 'Other Payment Options',
      items: ['Bank / Account Transfer', 'Cheque', 'Cash'],
    },
    note: 'Payment confirmation and applicable receipts will be provided according to the payment method and internal payment-processing procedure.',
  },
}

export const subBuilder = {
  badge: 'Plan + Tenure Builder',
  title: 'Build the Right Subscription for <span class="text-gradient-brand">Your Child</span>',
  description: 'Create your combination in three steps — learning plan, tenure, then payment.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  plans: [
    { id: 'gold', name: 'Gold', duration: '1 Hour / Day', subtitle: 'Smart Start' },
    { id: 'diamond', name: 'Diamond', duration: '1.5 Hours / Day', subtitle: 'Performance Plan', popular: true },
    { id: 'platinum', name: 'Platinum', duration: '2 Hours / Day', subtitle: 'Premium Excellence' },
  ],
  tenures: [
    { id: 'monthly', name: 'Monthly', duration: '1 Month', paymentLocked: 'upfront' as const },
    { id: 'quarterly', name: 'Quarterly', duration: '3 Months', paymentLocked: 'upfront' as const },
    { id: 'half-yearly', name: 'Half-Yearly', duration: '6 Months', paymentLocked: 'upfront' as const },
    { id: 'annual', name: 'Annual', duration: '12 Months', recommended: true },
  ],
  payments: [
    { id: 'upfront', name: 'Upfront', hint: '1 payment' },
    { id: 'installment', name: 'Installment', hint: '2–4 payments', annualOnly: true },
    { id: 'emi', name: 'Eligible EMI', hint: 'Auto-debit', annualOnly: true },
  ],
  installmentChoices: [
    { id: 2, label: '2 Payments', discount: '10% OFF' },
    { id: 3, label: '3 Payments', discount: '5% OFF' },
    { id: 4, label: '4 Payments', discount: 'No discount' },
  ],
  cta: { label: 'Continue to Enrolment', href: externalLinks.studentSignup },
}

export const subMonitoring = {
  badge: 'Academic Monitoring',
  title: "Keep Your Child's Learning Journey <span class=\"text-gradient-brand\">Visible</span>",
  description:
    'Indian Mentors combines personalised teaching with structured monitoring to provide parents with greater visibility into the learning journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    { title: 'Attendance', description: 'Track scheduled and completed sessions.', iconMdi: 'mdi:calendar-check-outline' },
    { title: 'Tutor Feedback', description: 'Understand learning participation and observations.', iconMdi: 'mdi:comment-quote-outline' },
    { title: 'Progress', description: 'Review available academic development information.', iconMdi: 'mdi:chart-line' },
    { title: 'Performance', description: 'Identify strengths and areas requiring additional attention.', iconMdi: 'mdi:target' },
    { title: 'Parent Review', description: 'Maintain structured communication according to the selected plan.', iconMdi: 'mdi:account-group-outline' },
  ],
  levels: [
    { plan: 'Gold', cadence: 'Monthly', detail: 'Attendance & basic feedback' },
    { plan: 'Diamond', cadence: 'Bi-Weekly', detail: 'Subject feedback & progress' },
    { plan: 'Platinum', cadence: 'Weekly Detailed', detail: 'Detailed reporting & performance insights' },
  ],
  engagement: {
    badge: 'Parent Engagement',
    title: 'Parents Stay Connected. Students Stay Accountable.',
    items: [
      { plan: 'Gold', cadence: 'Monthly Updates', description: 'Concise attendance and available academic feedback.', accent: 'gold' as const },
      { plan: 'Diamond', cadence: 'Fortnightly Review', description: 'Regular communication around learning progress.', accent: 'diamond' as const },
      { plan: 'Platinum', cadence: 'Weekly Review', description: 'More frequent monitoring and academic coordination for intensive requirements.', accent: 'platinum' as const },
    ],
  },
  discovery: {
    badge: 'Tutor Discovery & Demo',
    title: 'Find. Experience. Choose.',
    description:
      'The right tutor depends on more than qualifications. Student comfort, communication, teaching style, schedule and academic requirements also matter.',
    plans: [
      { plan: 'Gold', access: 'Focused tutor selection' },
      { plan: 'Diamond', access: 'Expanded / priority access' },
      { plan: 'Platinum', access: 'Expanded access + smart recommendation' },
    ],
    evaluateLabel: 'Parents and students can assess:',
    evaluate: [
      'Teaching approach',
      'Subject explanation',
      'Communication',
      'Student interaction',
      'Learning comfort',
      'Schedule compatibility',
    ],
    cta: { label: 'Book a Demo', href: externalLinks.studentSignup },
  },
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
    badge: "Flexible as Your Child's Needs Change",
    title: 'Academic Requirements Can Evolve',
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
  tellUsLabel: 'Tell us about',
  supporting:
    'Share class, board, subjects, academic goal, schedule, and exam timeline — we will recommend the right combination.',
  tellUs: [
    { label: 'Class / Grade', iconMdi: 'mdi:school-outline' },
    { label: 'Board', iconMdi: 'mdi:bookshelf' },
    { label: 'Subjects', iconMdi: 'mdi:book-open-page-variant-outline' },
    { label: 'Academic Goal', iconMdi: 'mdi:flag-outline' },
    { label: 'Days Required', iconMdi: 'mdi:calendar-week-outline' },
    { label: 'Learning Mode', iconMdi: 'mdi:laptop' },
    { label: 'Preferred Schedule', iconMdi: 'mdi:clock-outline' },
    { label: 'Exam Timeline', iconMdi: 'mdi:calendar-clock' },
  ],
  cta: { label: 'Talk to an  Counsellor', href: '/contact', iconMdi: 'mdi:account-voice' },
}

export const subFaqs = {
  badge: 'Frequently Asked Questions',
  title: 'Subscription Plans — <span class="text-gradient-brand">FAQs</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  items: [
    {
      id: 'monthly-free',
      question: 'Is the Monthly Plan free?',
      answer:
        'No. The Monthly Plan is a paid one-month trial subscription subject to applicable terms.',
    },
    {
      id: 'quarterly-everyone',
      question: 'Is the Quarterly Plan available to everyone?',
      answer: 'Quarterly subscriptions may have limited / case-to-case availability.',
    },
    {
      id: 'half-yearly-discount',
      question: 'Does Half-Yearly receive a discount?',
      answer: 'The current structure provides no standard tenure discount for Half-Yearly subscriptions.',
    },
    {
      id: 'highest-discount',
      question: 'Which annual payment gives the highest discount?',
      answer: 'Eligible annual upfront payment provides the highest stated discount of 15% OFF.',
    },
    {
      id: 'annual-installments',
      question: 'Can I pay annually in installments?',
      answer: 'Yes. Eligible annual subscriptions may offer two-, three- or four-payment arrangements.',
    },
    {
      id: 'annual-discounts',
      question: 'What are the annual discounts?',
      answer:
        '1 payment: 15% OFF. 2 payments: 10% OFF. 3 payments: 5% OFF. 4 payments: no standard discount.',
    },
    {
      id: 'delayed-installment',
      question: 'What happens if an installment is delayed?',
      answer:
        'Each installment should be cleared within the applicable 45-day period to maintain subscription continuity. Delayed payment may result in suspension or interruption according to applicable terms.',
    },
    {
      id: 'emi',
      question: 'Is EMI available?',
      answer:
        'Eligible EMI arrangements may be available through approved auto-debit facilities such as e-NACH / ECS, subject to eligibility.',
    },
    {
      id: 'plan-vs-tenure',
      question: 'Can I select the learning plan separately from tenure?',
      answer: 'Yes. Learning Plan and Subscription Tenure are separate choices.',
    },
    {
      id: 'trial-to-annual',
      question: 'Can I start with a trial and later choose Annual?',
      answer:
        'Yes. The One-Month Trial is designed to let families experience the service before making a longer-term commitment.',
    },
    {
      id: 'plan-change',
      question: 'Can the plan change later?',
      answer:
        'Plan changes may be requested based on changing academic requirements and applicable subscription terms.',
    },
  ],
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

export const subClosing = {
  badge: 'Indian Mentors',
  title: 'Choose the Learning Journey That Matches Your Child',
  tagline: 'Personalised Education. Trusted Tutors.',
  services:
    'Home Tutors • Online Tutors • Shadow Tutors • Travel Tutors • Live-In Tutors • Special Educators • Home Schooling Support',
  pillars: [
    'Personalised Tutoring',
    'Flexible Plans',
    'Academic Monitoring',
    'Transparent Systems',
    'Dedicated Support',
  ],
  strip: 'Explore. Experience. Learn. Grow.',
}
