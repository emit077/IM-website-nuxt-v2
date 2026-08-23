/**
 * Why Choose Indian Mentors — page content
 */

import { externalLinks } from './external-links'

export const whyChooseHero = {
  badge: 'Why Choose Indian Mentors',
  title:
    'A Structured Academic <span class="text-gradient-brand">Partnership</span>',
  description:
    'Verified educators. Personalised learning. Transparent progress — built for every student.',
  headingId: 'why-choose-hero-heading',
  primaryCta: { label: 'Find a Tutor', href: externalLinks.studentSignup },
  secondaryCta: { label: 'Talk to a Counsellor', href: 'tel:+917389563564' },
}

export const whyChooseDifferentiators = {
  kicker: 'Our Standards of Excellence',
  title:
    'What Sets <span class="text-gradient-brand">Indian Mentors</span> Apart?',
  classes: '!px-0 !py-0',
  description:
    'Verified tutors, personalised plans, and transparent support — built for every learner.',
  features: [
    {
      iconMdi: 'mdi:shield-check-outline',
      title: 'Verified Tutors',
      description:
        'Every tutor is screened for quality, credibility, and teaching excellence before joining our network.',
      pointsLabel: 'Our Screening Process Includes',
      points: [
        'Identity & KYC Verification',
        'Academic Qualification Validation',
        'Teaching Experience Assessment',
      ],
      benefit:
        'Students learn from trusted, carefully screened educators while parents gain confidence in tutor quality.',
    },
    {
      iconMdi: 'mdi:robot-outline',
      title: 'Smart Tutor Matching',
      description:
        'We match tutors by academic fit, learning preferences, and practical requirements — not subject alone.',
      pointsLabel: 'Matching Considerations',
      points: [
        'Subject Expertise',
        'Board Specialisation',
        'Learning Style Compatibility',
      ],
      benefit:
        'Better tutor compatibility creates stronger engagement and improved learning outcomes.',
    },
    {
      iconMdi: 'mdi:target',
      title: 'Personalised Plans',
      description:
        'Every learner gets a custom strategy built around strengths, pace, and academic goals.',
      pointsLabel: 'Learning Plans Include',
      points: [
        'Learning Gap Analysis',
        'Academic Goal Setting',
        'Regular Learning Reviews',
      ],
      benefit:
        'Students receive structured learning aligned with their individual academic journey.',
    },
    {
      iconMdi: 'mdi:book-education-outline',
      title: 'Board-Aligned Teaching',
      description:
        'Sessions follow recognised boards and frameworks for structured, syllabus-focused learning.',
      pointsLabel: 'Supported Curricula',
      points: ['CBSE', 'ICSE / IB & IGCSE', 'State Boards & NIOS'],
      benefit:
        'Syllabus-focused learning that strengthens concepts and exam readiness.',
    },
    {
      iconMdi: 'mdi:chart-box-outline',
      title: 'Progress Monitoring',
      description:
        "Parents stay informed through structured monitoring of their child's academic progress.",
      pointsLabel: 'Monitoring Includes',
      points: ['Attendance Tracking', 'Progress Reports', 'Parent Communication'],
      benefit:
        'Transparent reporting enables better planning and continuous improvement.',
    },
    {
      iconMdi: 'mdi:clock-outline',
      title: 'Flexible Scheduling',
      description:
        'Tutoring that fits comfortably into every student’s academic routine and family schedule.',
      pointsLabel: 'Flexible Options',
      points: ['Weekday & Weekend Classes', 'Morning or Evening Sessions', 'Convenient Rescheduling'],
      benefit:
        'Students can learn without disrupting academic or personal commitments.',
    },
    {
      iconMdi: 'mdi:home-variant-outline',
      title: 'Learning Formats',
      description:
        'Choose the tutoring format that best suits your child’s learning needs and environment.',
      pointsLabel: 'Available Formats',
      points: ['Home, Online & Hybrid Tutors', 'Shadow & Live-In Tutors', 'Special Educators'],
      benefit:
        'Families pick the tutoring model that matches their educational requirements.',
    },
    {
      iconMdi: 'mdi:sync',
      title: 'Tutor Replacement Support',
      description:
        'If a tutor change is needed, we coordinate a smooth transition with minimal learning disruption.',
      pointsLabel: 'Replacement Process',
      points: ['Parent Consultation', 'Alternative Tutor Selection', 'Smooth Transition'],
      benefit:
        'Students continue learning with minimal interruption and ongoing support.',
    },
    {
      iconMdi: 'mdi:laptop',
      title: 'Academic ERP System',
      description:
        'Our ERP system improves coordination, transparency, and communication across tutoring.',
      pointsLabel: 'ERP Features',
      points: ['Session Scheduling', 'Attendance Management', 'Payment Tracking'],
      benefit:
        'A transparent, organised tutoring experience for students, parents, and tutors.',
    },
    {
      iconMdi: 'mdi:account-group-outline',
      title: 'Dedicated Support Team',
      description:
        'Support professionals assist families at every stage of the academic journey.',
      pointsLabel: 'Support Services',
      points: ['Academic Counselling', 'Tutor Coordination', 'Parent Relationship Support'],
      benefit:
        'Continuous guidance from enquiry through ongoing academic success.',
    },
    {
      iconMdi: 'mdi:shield-account-outline',
      title: 'Safe Learning Environment',
      description:
        'A secure, respectful, and professional setting is central to every tutoring engagement.',
      pointsLabel: 'Our Safety Standards',
      points: ['Student Safety & Privacy', 'Verified Tutor Profiles', 'Ethical Academic Practices'],
      benefit:
        'Students and parents can learn with confidence in a trustworthy environment.',
    },
    {
      iconMdi: 'mdi:sprout-outline',
      title: 'Confidence & Holistic Development',
      description:
        'We help students become confident, independent learners with lifelong study skills.',
      pointsLabel: 'Development Focus',
      points: ['Confidence Building', 'Positive Learning Habits', 'Critical Thinking'],
      benefit:
        'Stronger academics paired with confidence, responsibility, and lifelong skills.',
    },

  ],
}

export const whyChooseEcosystem = {
  kicker: 'The Academic Ecosystem',
  title:
    'One Platform.  <span class="text-gradient-brand">Multiple Stakeholders.</span>One Shared Goal.',
  classes: '!px-0 !py-0',
  description:
    'Indian Mentors brings students, parents, tutors, academic counsellors, coordinators, and support teams together within a structured academic ecosystem.',
  image: 'assets/img/why-choose/academic-ecosystem.webp',
  imageAlt:
    'Indian Mentors academic ecosystem — ten connected steps from student identification through continuous improvement',
  steps: [
    { title: 'Student', subtitle: 'At the centre of learning.' },
    {
      title: 'Academic Requirement Identification',
      subtitle: 'Understanding individual learning needs.',
    },
    {
      title: 'Academic Counselling',
      subtitle: 'Expert guidance for the right academic path.',
    },
    {
      title: 'Tutor Selection & Matching',
      subtitle: 'Finding the best-fit tutor for every learner.',
    },
    {
      title: 'Tutor Onboarding',
      subtitle: 'Verifying & onboarding quality educators.',
    },
    {
      title: 'Personalised Learning Plan',
      subtitle: 'Customised plan for better outcomes.',
    },
    {
      title: 'Regular Tutoring Sessions',
      subtitle: 'Consistent support for concept clarity.',
    },
    {
      title: 'Attendance & Progress Monitoring',
      subtitle: 'Tracking progress every step of the way.',
    },
    {
      title: 'Parent Feedback & Academic Review',
      subtitle: 'Collaborative feedback for continuous growth.',
    },
    {
      title: 'Continuous Improvement',
      subtitle: 'Refining approach for long-term success.',
    },
  ],
  keyMessage:
    "Our ecosystem is designed to ensure that every stakeholder contributes to a student's academic journey with clarity, coordination, and shared responsibility.",
}

export const whyChooseCommitments = {
  kicker: 'Our Commitments',
  title: 'Built Around Families & <span class="text-gradient-brand">Learners</span>',
  classes: '!px-0 !py-0',
  description:
    'Transparency for parents. The right mentor for every student.',
  parents: {
    label: 'For Families',
    iconMdi: 'mdi:account-check-outline',
    titleHtml:
      'Parents deserve <span class="text-amber-300">transparency.</span>',
    description:
      "Stay connected to the learning process and feel confident in every step of your child's academic journey.",
    items: [
      'Better tutor selection',
      'Structured academic support',
      'Transparent communication',
      'Ongoing guidance',
    ],
  },
  students: {
    label: 'For Students',
    iconMdi: 'mdi:star-four-points-outline',
    titleHtml:
      'Every learner deserves <span class="text-gradient-brand">the right mentor.</span>',
    description:
      'A supportive environment to understand concepts, build better habits, and grow into a confident, capable learner.',
    items: [
      'Strengthen conceptual understanding',
      'Encourage consistent practice',
      'Monitor meaningful progress',
      'Build confidence and independence',
    ],
  },
}

export const whyChooseAdvantage = {
  kicker: 'Our Distinct Advantages',
  title: 'Why choose  <span class="text-gradient-brand">Indian Mentors</span>?',
  classes: '!px-0 !py-0 [&_p]:!mt-3 [&_p]:!text-sm [&_p]:!leading-relaxed',
  description:
    'Indian Mentors brings verified educators, personalised tutoring, curriculum-aligned teaching, and structured academic monitoring into one complete ecosystem.',
  image: 'assets/img/why-choose/why-1.png',
  imageAlt: 'A student considering personalised learning options with Indian Mentors',
  imageBadge: 'Structured Academic Partnership',
  advantages: [
    {
      title: 'Verified Tutors',
      meaning: 'Carefully screened educators',
      iconMdi: 'mdi:shield-check-outline',
    },
    {
      title: 'Personalised Learning',
      meaning: 'Student-specific academic strategies',
      iconMdi: 'mdi:target',
    },
    {
      title: 'Structured Teaching',
      meaning: 'Curriculum and goal-aligned',
      iconMdi: 'mdi:book-education-outline',
    },
    {
      title: 'Transparent Monitoring',
      meaning: 'Visibility into academic progress',
      iconMdi: 'mdi:chart-box-outline',
    },
  ],
  ctas: [
    {
      label: 'Book Free Consultation',
      href: externalLinks.studentSignup,
      variant: 'primary' as const,
      icon: 'mdi:calendar-outline',
    },
    {
      label: 'Learn More',
      href: '/why-choose',
      variant: 'secondary' as const,
    },

  ],
  familyAdvantages: [
    {
      title: 'Verified Tutors',
      meaning: 'Every tutor is screened for credibility, qualifications, and teaching quality.',
      iconMdi: 'mdi:shield-check-outline',
    },
    {
      title: 'Personalised Learning',
      meaning: "Plans are built around the student's pace, gaps, and academic goals.",
      iconMdi: 'mdi:target',
    },
    {
      title: 'Board-Aligned Teaching',
      meaning: 'Sessions follow CBSE, ICSE, IB, IGCSE, and recognised state-board curricula.',
      iconMdi: 'mdi:book-education-outline',
    },
    {
      title: 'Transparent Monitoring',
      meaning: 'Parents stay informed through attendance, feedback, and progress updates.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      title: 'Flexible Formats',
      meaning: 'Choose home, online, hybrid, or specialised tutoring to fit family schedules.',
      iconMdi: 'mdi:home-variant-outline',
    },
    {
      title: 'Dedicated Support',
      meaning: 'Counsellors guide families from first enquiry through ongoing learning.',
      iconMdi: 'mdi:headset',
    },
  ],
}

export const whyChooseJourney = {
  badge: 'Our Tutoring Service Journey',
  title:
    'From Requirement to Personalised <span class="text-gradient-brand">Learning</span>',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    {
      no: '01',
      title: 'Share Your Requirement',
      description:
        "Tell us the student's class, board, subjects, location, schedule, and academic goals.",
      accent: 'blue' as const,
    },
    {
      no: '02',
      title: 'Academic Counselling',
      description:
        'We review the requirement and help identify a suitable tutoring format.',
      accent: 'sky' as const,
    },
    {
      no: '03',
      title: 'Tutor Identification',
      description:
        'Tutors are shortlisted by subject expertise, location, availability, and experience.',
      accent: 'emerald' as const,
    },
    {
      no: '04',
      title: 'Tutor Selection & Demo',
      description:
        'Families evaluate the proposed tutor, including a demo session where offered.',
      accent: 'blue' as const,
    },
    {
      no: '05',
      title: 'Learning Begins',
      description:
        'The selected tutor starts personalised sessions as per the agreed plan and schedule.',
      accent: 'sky' as const,
    },
    {
      no: '06',
      title: 'Progress Monitoring',
      description:
        'Attendance, feedback, and academic progress are tracked through structured monitoring.',
      accent: 'emerald' as const,
    },
  ],
}

export const whyChooseDifference = {
  badge: 'The Indian Mentors Difference',
  title: 'More Than Finding a <span class="text-gradient-brand">Tutor</span>',
  description:
    'Indian Mentors is a personalised tutoring ecosystem that connects students with suitable tutors and supports their complete learning journey.',
  classes: '!px-0 !py-0 mx-auto max-w-3xl',
  steps: [
    {
      id: 'discover',
      label: 'Discover',
      title: 'Find the Right Tutors',
      description: 'Explore tutors by subject, grade, board, location and need.',
      iconMdi: 'mdi:magnify',
    },
    {
      id: 'match',
      label: 'Match',
      title: 'Find the Right Fit',
      description: 'Connect with tutors matched to academic needs and preferences.',
      iconMdi: 'mdi:account-switch-outline',
    },
    {
      id: 'demo',
      label: 'Demo',
      title: 'Experience the Tutor',
      description: 'Attend a demo to assess teaching style and compatibility.',
      iconMdi: 'mdi:play-circle-outline',
    },
    {
      id: 'learn',
      label: 'Learn',
      title: 'Start Personalised Learning',
      description: 'Start one-to-one tutoring aligned with goals and pace.',
      iconMdi: 'mdi:book-open-page-variant-outline',
    },
    {
      id: 'monitor',
      label: 'Monitor',
      title: 'Track Academic Progress',
      description: 'Track sessions, attendance, feedback and academic progress.',
      iconMdi: 'mdi:chart-box-outline',
    },
    {
      id: 'improve',
      label: 'Improve',
      title: 'Strengthen Learning',
      description: 'Use feedback and insights to close gaps and improve.',
      iconMdi: 'mdi:trending-up',
    },
    {
      id: 'support',
      label: 'Support',
      title: 'Receive Ongoing Guidance',
      description: 'Get ongoing academic coordination throughout the journey.',
      iconMdi: 'mdi:headset',
    },
    {
      id: 'grow',
      label: 'Grow',
      title: 'Achieve Academic Goals',
      description: 'Build stronger concepts, confidence and lasting progress.',
      iconMdi: 'mdi:sprout-outline',
    },
  ],
}

export const whyChooseConversionStrip = {
  title: 'Give your child the right academic support, today.',
  description:
    "Book a demo and experience a personalised tutoring approach built around your child's needs, goals and preferred learning environment.",
  ctas: [
    { label: 'Book Free Demo', href: externalLinks.studentSignup, variant: 'secondary' as const },
    { label: 'Talk to Counsellor', href: 'tel:+917389563564', variant: 'secondary' as const },
  ],
}

