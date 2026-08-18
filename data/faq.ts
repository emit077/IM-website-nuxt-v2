import { externalLinks } from './external-links'
export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type FaqCategory = {
  id: string
  title: string
  description: string
  iconMdi: string
  items: FaqItem[]
}

export const faqHero = {
  badge: 'FAQs',
  title: 'Answers to Your',
  titleHighlight: 'Common Questions',
  description:
    'Find clear answers about tutoring services, enrollment, tutor registration, fees, and partnerships at Indian Mentors.',
  supporting:
    'Browse by topic below or reach out to our support team if you need personalised guidance for your situation.',
} as const

export const faqCategoryLinks = [
  { id: 'students-parents', title: 'Students & Parents', href: '#students-parents', iconMdi: 'mdi:account-school-outline' },
  { id: 'tutors', title: 'Tutors', href: '#tutors', iconMdi: 'mdi:human-male-board' },
  { id: 'services', title: 'Services', href: '#services', iconMdi: 'mdi:book-open-variant' },
  { id: 'fees', title: 'Fees & Plans', href: '#fees', iconMdi: 'mdi:credit-card-outline' },
  { id: 'enrollment', title: 'Enrollment', href: '#enrollment', iconMdi: 'mdi:clipboard-check-outline' },
  { id: 'partnerships', title: 'Partnerships', href: '#partnerships', iconMdi: 'mdi:handshake-outline' },
] as const

export const faqCategories: FaqCategory[] = [
  {
    id: 'students-parents',
    title: 'Students & Parents',
    description: 'Tutor matching, learning modes, and support for families.',
    iconMdi: 'mdi:account-school-outline',
    items: [
      {
        id: 'tutor-match-speed',
        question: 'How quickly can we get a tutor match?',
        answer:
          'Most families receive curated tutor profiles within 24 hours after submitting requirements. Our academic team reviews your grade, board, subjects, and location preferences before sharing verified mentor options.',
      },
      {
        id: 'tutor-verification',
        question: 'Are all tutors background verified?',
        answer:
          'Yes. Every listed tutor goes through identity verification, qualification screening, and profile review before activation on the Indian Mentors platform.',
      },
      {
        id: 'tutor-rematch',
        question: 'Can we change tutor if the fit is not right?',
        answer:
          'Absolutely. You can request a rematch at any time and we prioritise a better fit using your feedback on teaching style, communication, and learning outcomes.',
      },
      {
        id: 'learning-modes',
        question: 'What learning modes do you offer?',
        answer:
          'Indian Mentors supports home tutoring, online classes, and hybrid arrangements. You can choose the mode that best fits your family schedule and academic goals.',
      },
      {
        id: 'progress-tracking',
        question: 'How do parents track student progress?',
        answer:
          'Parents receive structured updates through our learning dashboard — including attendance, session summaries, assessment insights, and periodic progress reports shared by the assigned mentor.',
      },
    ],
  },
  {
    id: 'tutors',
    title: 'Tutors & Educators',
    description: 'Registration, screening, payouts, and teaching opportunities.',
    iconMdi: 'mdi:human-male-board',
    items: [
      {
        id: 'who-can-join',
        question: 'Who can register as a tutor with Indian Mentors?',
        answer:
          'School teachers, subject experts, home tutors, and academic professionals with relevant qualifications and teaching experience can apply. We welcome educators across school, college, and competitive exam domains.',
      },
      {
        id: 'tutor-screening',
        question: 'What is the tutor screening process?',
        answer:
          'Applicants complete profile registration, document verification, qualification checks, and compliance screening. Approved tutors are listed based on subject expertise, location, and teaching mode availability.',
      },
      {
        id: 'student-leads',
        question: 'How do tutors receive student opportunities?',
        answer:
          'Verified tutors receive matched student enquiries based on subject, grade, board, location, and availability. Our coordination team supports demo scheduling, enrollment, and ongoing session management.',
      },
      {
        id: 'tutor-payouts',
        question: 'How are tutor payouts handled?',
        answer:
          'Indian Mentors follows a transparent payout structure with clear earning terms. Tutors receive payments through structured settlement cycles after confirmed sessions, as per the agreed partnership plan.',
      },
      {
        id: 'tutor-plans',
        question: 'Are there registration plans for tutors?',
        answer:
          'Yes. Tutors can choose from free and premium registration plans with different visibility levels, lead access, and platform benefits. Visit our Tutors page for full plan details.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services & Academic Coverage',
    description: 'Boards, subjects, grades, and programme scope.',
    iconMdi: 'mdi:book-open-variant',
    items: [
      {
        id: 'boards-supported',
        question: 'Do you support board-specific preparation?',
        answer:
          'Yes. We support CBSE, ICSE, IB, Cambridge, State Boards, NIOS, and entrance-focused programmes including JEE, NEET, and other competitive exams.',
      },
      {
        id: 'grades-covered',
        question: 'Which grades and academic levels are covered?',
        answer:
          'Indian Mentors provides support from pre-primary through school grades (Classes 1–12), undergraduate programmes, and selected postgraduate subjects. Coverage varies by location and tutor availability.',
      },
      {
        id: 'subjects-offered',
        question: 'What subjects can students learn?',
        answer:
          'Core subjects include Mathematics, Science, English, Social Studies, and regional languages, along with specialised coaching for commerce, computer science, foreign languages, and entrance exam preparation.',
      },
      {
        id: 'demo-sessions',
        question: 'Can we book a demo session before enrolling?',
        answer:
          'Yes. Families can book a free demo session to evaluate teaching quality, communication, and learning fit before confirming enrollment with a tutor.',
      },
      {
        id: 'institute-hiring',
        question: 'Do you help institutions hire teachers?',
        answer:
          'Yes. Schools, coaching centres, and educational institutions can use our teacher recruitment and hiring support services. Visit the Institutions page or contact our partnerships team for details.',
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees & Subscription Plans',
    description: 'Pricing structure, plans, and payment-related queries.',
    iconMdi: 'mdi:credit-card-outline',
    items: [
      {
        id: 'fee-structure',
        question: 'How is tutoring fee structured?',
        answer:
          'Fees depend on grade, subject, board, teaching mode (home or online), session frequency, and tutor experience. Our counsellors share a transparent fee breakdown after understanding your requirements.',
      },
      {
        id: 'subscription-plans',
        question: 'Do you offer subscription plans for students?',
        answer:
          'Yes. Indian Mentors offers structured subscription plans (Gold, Diamond, and Platinum) with varying levels of mentoring support, reporting, and parent engagement. See the Subscription Plans page for a full comparison.',
      },
      {
        id: 'payment-methods',
        question: 'What payment methods are accepted?',
        answer:
          'Payments can be made through approved digital payment channels as guided by our enrollment team. Fee schedules and installment options are shared during the enrollment process.',
      },
      {
        id: 'refund-policy',
        question: 'What is your refund or cancellation policy?',
        answer:
          'Refund and cancellation terms depend on the enrolled plan and session status. Please contact our support team for case-specific guidance — we aim to handle all requests fairly and transparently.',
      },
    ],
  },
  {
    id: 'enrollment',
    title: 'Enrollment & Getting Started',
    description: 'Registration steps, demos, and onboarding.',
    iconMdi: 'mdi:clipboard-check-outline',
    items: [
      {
        id: 'enrollment-steps',
        question: 'What is the student enrollment process?',
        answer:
          'The process typically includes sharing student requirements, receiving matched tutor profiles, booking a demo session, confirming the tutor, and completing enrollment formalities with our academic coordination team.',
      },
      {
        id: 'documents-needed',
        question: 'What information do I need to provide during enrollment?',
        answer:
          'Basic details include student name, grade, board, subjects, preferred teaching mode, location (for home tutoring), and preferred schedule. Additional academic context helps us recommend the best mentor match.',
      },
      {
        id: 'start-timeline',
        question: 'How soon can classes begin after enrollment?',
        answer:
          'Once enrollment is confirmed and schedules are aligned with the tutor, regular sessions can usually begin within a few working days.',
      },
      {
        id: 'parent-dashboard',
        question: 'Do parents get access to a dashboard or ERP system?',
        answer:
          'Yes. Indian Mentors provides a structured parent dashboard for tracking sessions, academic updates, and communication — giving families visibility into the learning journey.',
      },
    ],
  },
  {
    id: 'partnerships',
    title: 'Partnerships & Support',
    description: 'Channel partners, careers, and contacting our team.',
    iconMdi: 'mdi:handshake-outline',
    items: [
      {
        id: 'channel-partner',
        question: 'How can I become a channel partner?',
        answer:
          'Individuals and organisations interested in referral or regional partnership opportunities can explore our Channel Partner programme. Visit the Channel Partner page or contact our partnerships team to learn about eligibility and benefits.',
      },
      {
        id: 'careers',
        question: 'Are there career opportunities at Indian Mentors?',
        answer:
          'Yes. We hire for academic coordination, operations, technology, and regional support roles. Open positions and application details are listed on our Careers page.',
      },
      {
        id: 'contact-support',
        question: 'How can I contact the support team?',
        answer:
          'Reach us by phone, WhatsApp, or email during working hours (Monday–Saturday, 10:00 AM–7:00 PM). Visit the Contact page for all official numbers and addresses.',
      },
      {
        id: 'working-hours',
        question: 'When is customer support available?',
        answer:
          'Our support team is available Monday through Saturday, 10:00 AM to 7:00 PM IST. Messages sent outside these hours are typically addressed on the next working day.',
      },
    ],
  },
]

export const faqClosing = {
  title: 'Still Have Questions?',
  text: 'Our academic counsellors are ready to help with tutor selection, demo booking, enrollment, and partnership enquiries.',
} as const

export const faqCta = {
  badge: 'Need Personalised Help?',
  title: 'Talk to Our Academic Counselling Team',
  description:
    'Get expert guidance on tutor matching, subject planning, and enrollment — tailored to your student\'s goals.',
  ctas: [
    { label: 'Call Support', href: 'tel:+917389563564', iconMdi: 'mdi:phone-outline' },
    { label: 'Book Free Demo', href: externalLinks.studentSignup, iconMdi: 'mdi:calendar-check-outline' },
    { label: 'Contact Us', href: '/contact', iconMdi: 'mdi:email-outline' },
  ],
} as const
