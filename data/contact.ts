export type PhoneContact = {
  display: string
  tel: string
  wa?: string
}

export const cityIconBasePath = '/assets/img/city-icons' as const
export const cityImgBasePath = '/assets/img/city-img' as const

export type PopularCity = {
  id: string
  icon: string
  label: string
  branchCity?: string
}

export type PopularCityImage = {
  id: string
  image: string
  label: string
  branchCity?: string
}

/** Cities with a dedicated icon in /public/assets/img/city-icons/ */
export const popularCities = [
  { id: 'mumbai', icon: 'mumbai', label: 'Mumbai', branchCity: 'Mumbai' },
  { id: 'delhi', icon: 'delhi', label: 'Delhi-NCR', branchCity: 'Delhi' },
  { id: 'bengaluru', icon: 'bengaluru', label: 'Bengaluru', branchCity: 'Bangalore' },
  { id: 'hyderabad', icon: 'hydrabad', label: 'Hyderabad', branchCity: 'Hyderabad' },
  { id: 'chandigarh', icon: 'chandigarh', label: 'Chandigarh', branchCity: 'Chandigarh' },
  { id: 'ahmedabad', icon: 'ahmdabad', label: 'Ahmedabad', branchCity: 'Ahmedabad' },
  { id: 'pune', icon: 'pune', label: 'Pune', branchCity: 'Pune' },
  { id: 'chennai', icon: 'chennai', label: 'Chennai', branchCity: 'Chennai' },
  { id: 'kolkata', icon: 'kolkata', label: 'Kolkata', branchCity: 'Kolkata' },
  { id: 'raipur', icon: 'raipur', label: 'Raipur', branchCity: 'Raipur' },
  { id: 'nagpur', icon: 'nagpur', label: 'Nagpur', branchCity: 'Nagpur' },
  { id: 'indore', icon: 'indore', label: 'Indore', branchCity: 'Indore' },
  { id: 'lucknow', icon: 'lucknow', label: 'Lucknow', branchCity: 'Lucknow' },
  { id: 'jaipur', icon: 'jaipur', label: 'Jaipur', branchCity: 'Jaipur' },
  { id: 'patna', icon: 'patna', label: 'Patna' },
  { id: 'kochi', icon: 'kochi', label: 'Kochi' },
  { id: 'bhubaneswar', icon: 'bhubneshwar', label: 'Bhubaneswar' },
  { id: 'vizag', icon: 'vizag', label: 'Visakhapatnam' },
] as const satisfies readonly PopularCity[]

/** Cities with a dedicated image in /public/assets/img/city-img/ */
export const popularCityImages = [
  { id: 'mumbai', image: 'mumbai', label: 'Mumbai', branchCity: 'Mumbai' },
  { id: 'delhi', image: 'delhi', label: 'Delhi-NCR', branchCity: 'Delhi' },
  { id: 'bengaluru', image: 'bangluru', label: 'Bengaluru', branchCity: 'Bangalore' },
  { id: 'chennai', image: 'chennai', label: 'Chennai', branchCity: 'Chennai' },
  { id: 'kolkata', image: 'kolkata', label: 'Kolkata', branchCity: 'Kolkata' },
  { id: 'pune', image: 'pune', label: 'Pune', branchCity: 'Pune' },
  { id: 'ahmedabad', image: 'ahmdabad', label: 'Ahmedabad', branchCity: 'Ahmedabad' },
  { id: 'raipur', image: 'raipur', label: 'Raipur', branchCity: 'Raipur' },
  { id: 'indore', image: 'indore', label: 'Indore', branchCity: 'Indore' },
  { id: 'lucknow', image: 'lucknow', label: 'Lucknow', branchCity: 'Lucknow' },
  { id: 'kochi', image: 'kochi', label: 'Kochi' },
  { id: 'bhopal', image: 'bhopal', label: 'Bhopal', branchCity: 'Bhopal' },
] as const satisfies readonly PopularCityImage[]

export type BranchOffice = {
  city: string
  address: string
  label?: string
}

export type ServiceZone = {
  id: string
  title: string
  iconMdi: string
  cities: string[]
}

export const contactHero = {
  badge: 'Cities of Operation',
  tagline: 'INDIAN MENTORS – Structured Academic Support, Delivered Nationwide',
  title: 'Expanding Structured Mentorship',
  titleHighlight: 'Across India',
  subheadline: 'Delivering Personalised Tutoring Services Across Major Cities and Educational Hubs',
  description:
    'Indian Mentors operates as a growing national academic ecosystem dedicated to delivering structured and personalised tutoring services across multiple cities in India.',
  supporting: [
    'Our operational network combines centralised academic quality control with local accessibility, ensuring the same high standards of mentorship, tutor verification, and learning transparency wherever students are located.',
    'Through home tutoring, online tutoring, and academic support systems, we connect students with qualified mentors across metropolitan areas, regional cities, and emerging educational hubs.',
  ],
  primaryCta: { label: 'Explore Popular Cities', href: '#branch-offices' },
  secondaryCta: { label: 'Contact Support', href: '#call-us' },
} as const

export const contactHeroHighlights = [
  { label: '19+ Branch Offices', iconMdi: 'mdi:office-building-marker-outline' },
  { label: 'Pan-India Coverage', iconMdi: 'mdi:earth' },
  { label: 'Home & Online Tutoring', iconMdi: 'mdi:home-city-outline' },
  { label: 'Verified Mentors', iconMdi: 'mdi:shield-check-outline' },
] as const

export const contactHeroStats = [
  { value: '19', suffix: '+', label: 'Primary service cities' },
  { value: '150', suffix: '+', label: 'Cities actively served' },
  { value: '5', suffix: '', label: 'Regional zones covered' },
  { value: '2', suffix: '', label: 'HQ & corporate offices' },
] as const

export const contactHeroFeaturedCities = popularCityImages.slice(0, 6)

export const contactQuickLinks = [
  { id: 'head-office', title: 'Headquarters', href: '#head-office', iconMdi: 'mdi:office-building-outline' },
  { id: 'corporate-office', title: 'Corporate Office', href: '#corporate-office', iconMdi: 'mdi:domain' },
  { id: 'branch-offices', title: 'Popular Cities', href: '#branch-offices', iconMdi: 'mdi:city-variant-outline' },
  { id: 'also-serving', title: 'Other Cities', href: '#also-serving', iconMdi: 'mdi:map-marker-radius-outline' },
  { id: 'call-us', title: 'Contact Us', href: '#call-us', iconMdi: 'mdi:phone-outline' },
] as const

export const headOffice = {
  title: 'Indian Mentors – National Operations Center',
  subtitle: 'Headquarters',
  address:
    '32A, Indian Mentors Building, Near Avantibai Chowk, Junwani Road, Beside Dubey Dairy, Kohka, Bhilai, District Durg, Chhattisgarh, India – 490023',
  intro:
    'The Indian Mentors headquarters in Bhilai serves as the central hub for:',
  responsibilities: [
    'Academic operations and mentor coordination',
    'Tutor verification and onboarding processes',
    'ERP system management and monitoring',
    'Academic compliance and quality control',
    'Strategic expansion of tutoring services across India',
  ],
  closing:
    'From this location, our administrative and academic teams ensure that every student receives consistent, high-quality tutoring support nationwide.',
} as const

export const corporateOffice = {
  title: 'Corporate Office',
  subtitle: 'Indian Mentors – Central Coordination Hub',
  address:
    'Office No 7-8-9, 5th Floor, Surya Treasure Island Mall, South Office Block, Junwani Road, Surya Vihar, Nehru Nagar, Bhilai, District Durg, Chhattisgarh 490020',
  description: [
    'The corporate office of Indian Mentors serves as the central hub for academic operations, tutor management, student support, and strategic coordination across India.',
    'Located in the educational and commercial hub of Bhilai, our corporate office ensures seamless coordination between students, parents, mentors, and institutional partners, enabling a structured and efficient tutoring experience.',
  ],
} as const

export const branchOffices = {
  title: 'Major Cities with Operational Presence',
  intro:
    'Indian Mentors currently maintains operational activities in several key metropolitan and regional cities across India.',
  sectionLabel: 'Primary Service Cities',
  offices: [
    {
      city: 'Mumbai',
      address: 'Darshan Bhuleshwar, Atmaram Merchant Road, Near Khaugali, Mumbai, Maharashtra 400002',
    },
    {
      city: 'Delhi',
      label: 'Delhi-NCR',
      address: 'Sarojini Nagar, New Delhi, Delhi 110023',
    },
    {
      city: 'Bangalore',
      label: 'Bengaluru',
      address:
        '1st Cross, Near Prakash Traders, 80ft Road, Kattriguppe Grama, Banashankari 3rd Stage, Bangalore, Karnataka 560085',
    },
    {
      city: 'Hyderabad',
      address: 'Tooba Tower, SA Colony, 7 Tombs Road, Tolichowki, Hyderabad, Telangana 500008',
    },
    {
      city: 'Chandigarh',
      address: 'Near Landmark Hospital, Sector 33, Chandigarh, 160020',
    },
    {
      city: 'Ahmedabad',
      address: 'Near Maher Homes, Shela, Daskroi, Ahmedabad, Gujarat 380058',
    },
    {
      city: 'Pune',
      address: 'Tukai Darshan, Bhekrai Nagar, Hadapsar, Pune, Maharashtra 411028',
    },
    {
      city: 'Chennai',
      address:
        'Plot No. 5B, 3rd Cross Street, Balakrishna Nagar, Gerugambakkam, Chennai, Tamil Nadu 600128',
    },
    {
      city: 'Kolkata',
      address: 'G. J. Khan Road, Topsia, Kolkata, West Bengal 700039',
    },
    {
      city: 'Gurugram',
      address:
        'Satya The Hermitage, Near S. N. International School, Sector 103, Daulatabad, Gurugram, Haryana 122006',
    },
    {
      city: 'Durg',
      address: 'Near Shiv Mandir, Panchsheel Nagar, Sector A, Borsi, Durg, Chhattisgarh 491001',
    },
    {
      city: 'Raipur',
      address:
        'Office No 55, 3rd Floor, Office Block, Magneto The Mall, Labhandih, Raipur, Chhattisgarh, 492006',
    },
    {
      city: 'Bilaspur',
      address:
        'Office No 57, 3rd Floor, Palika Bazar, Rama Magneto Mall, Talapara, Bilaspur, Chhattisgarh, 495004',
    },
    {
      city: 'Nagpur',
      address: 'H. No 71669, M.B. Town, Zingabai Takli, Nagpur, Maharashtra 440030',
    },
    {
      city: 'Bhopal',
      address:
        'House No 42, Mahendra Greenwoods, Jathkhedi, Hosangabad Road, Bhopal, Madhya Pradesh 462026',
    },
    {
      city: 'Indore',
      address: 'Near Daily College, Panchasheel Nagar, Indore, Madhya Pradesh 452001',
    },
    {
      city: 'Lucknow',
      address: 'Mawaiya Charbagh, Near Mawaiya Park, Lucknow, Uttar Pradesh 226004',
    },
    {
      city: 'Surat',
      address: 'Shree Krishna Dreams, Near SMC Garden, Godadara Surat, Gujarat 395010',
    },
    {
      city: 'Jaipur',
      address:
        'Near Tagore Residency, Hanuman Nagar, Rawan Gate, Jhotwara, Jaipur, Rajasthan 302012',
    },
  ] satisfies BranchOffice[],
} as const

export const alsoServing = {
  title: 'Also Serving In',
  intro:
    'In addition to our branch locations, Indian Mentors actively serves students in numerous growing educational hubs across India through our home tutoring network and online learning ecosystem.',
  supporting:
    'These cities benefit from our centralised mentor verification process, ERP monitoring system, and structured tutoring framework.',
  zones: [
    {
      id: 'north',
      title: 'North Zone',
      iconMdi: 'mdi:compass-outline',
      cities: [
        'Noida',
        'Faridabad',
        'Ghaziabad',
        'Dehradun',
        'Kanpur',
        'Varanasi',
        'Prayagraj',
        'Agra',
        'Meerut',
        'Aligarh',
        'Bareilly',
        'Gorakhpur',
        'Amritsar',
        'Ludhiana',
        'Shimla',
        'Jammu',
        'Srinagar',
        'Leh',
        'Haldwani',
        'Roorkee',
        'Haridwar',
        'Panipat',
        'Karnal',
        'Hisar',
        'Ambala',
        'Bathinda',
        'Bikaner',
        'Kota',
        'Ajmer',
        'Alwar',
        'Sikar',
        'Pali',
        'Bharatpur',
        'Firozabad',
        'Mathura',
        'Saharanpur',
        'Muzaffarnagar',
        'Moradabad',
        'Rampur',
        'Shahjahanpur',
        'Budaun',
        'Pilibhit',
        'Etawah',
        'Mainpuri',
        'Hathras',
        'Bulandshahr',
        'Bijnor',
      ],
    },
    {
      id: 'east',
      title: 'East Zone',
      iconMdi: 'mdi:weather-sunset-up',
      cities: [
        'Patna',
        'Ranchi',
        'Bhubaneswar',
        'Guwahati',
        'Imphal',
        'Aizawl',
        'Kohima',
        'Itanagar',
        'Shillong',
        'Gangtok',
        'Dhanbad',
        'Jamshedpur',
        'Siliguri',
        'Cuttack',
        'Sambalpur',
        'Rourkela',
        'Purnia',
        'Muzaffarpur',
        'Darbhanga',
        'Gaya',
        'Bhagalpur',
        'Asansol',
        'Durgapur',
        'Haldia',
        'Kharagpur',
        'Malda',
        'Bardhaman',
        'Jalpaiguri',
        'Balasore',
        'Berhampur',
        'Angul',
        'Tinsukia',
        'Tezpur',
        'Nagaon',
        'Dibrugarh',
      ],
    },
    {
      id: 'west',
      title: 'West Zone',
      iconMdi: 'mdi:city-variant-outline',
      cities: [
        'Vadodara',
        'Rajkot',
        'Jodhpur',
        'Udaipur',
        'Panaji',
        'Margao',
        'Aurangabad',
        'Nashik',
        'Solapur',
        'Kolhapur',
        'Nanded',
        'Jalgaon',
        'Vapi',
        'Bharuch',
        'Jamnagar',
        'Bhavnagar',
        'Junagadh',
        'Gandhidham',
        'Porbandar',
        'Bhiwandi',
        'Ulhasnagar',
        'Thane',
        'Kalyan',
        'Mira-Bhayandar',
        'Palghar',
        'Ratnagiri',
        'Satara',
        'Sangli',
        'Latur',
        'Dhule',
        'Akola',
        'Amravati',
        'Chandrapur',
        'Yavatmal',
      ],
    },
    {
      id: 'south',
      title: 'South Zone',
      iconMdi: 'mdi:palm-tree',
      cities: [
        'Coimbatore',
        'Kochi',
        'Thiruvananthapuram',
        'Visakhapatnam',
        'Vijayawada',
        'Mysuru',
        'Mangalore',
        'Tiruchirappalli',
        'Madurai',
        'Salem',
        'Warangal',
        'Tirupati',
        'Hubballi',
        'Belagavi',
        'Puducherry',
        'Port Blair',
        'Kakinada',
        'Nellore',
        'Karimnagar',
        'Guntur',
        'Kadapa',
        'Anantapur',
        'Nizamabad',
        'Thrissur',
        'Kozhikode',
        'Kannur',
        'Palakkad',
        'Erode',
        'Tirunelveli',
        'Vellore',
        'Thanjavur',
        'Kanchipuram',
        'Kurnool',
        'Ongole',
        'Rajahmundry',
        'Eluru',
        'Chittoor',
        'Hosur',
        'Udupi',
        'Davanagere',
        'Ballari',
      ],
    },
    {
      id: 'central',
      title: 'Central Zone',
      iconMdi: 'mdi:map-marker-outline',
      cities: [
        'Jabalpur',
        'Ujjain',
        'Sagar',
        'Rewa',
        'Korba',
        'Jagdalpur',
        'Satna',
        'Chhindwara',
        'Seoni',
        'Ratlam',
        'Dewas',
        'Vidisha',
        'Hoshangabad',
        'Guna',
        'Shivpuri',
        'Damoh',
        'Katni',
        'Betul',
        'Khandwa',
        'Burhanpur',
        'Rajnandgaon',
        'Ambikapur',
        'Dhamtari',
        'Mahasamund',
        'Balaghat',
      ],
    },
  ] satisfies ServiceZone[],
} as const

export const continuousExpansion = {
  title: 'Continuous Expansion',
  intro:
    'Indian Mentors continues to expand its tutoring network across India to ensure that more students gain access to qualified mentors, personalised academic support, and structured learning systems.',
  standardsLabel: 'Every new city added to our network follows the same standards of:',
  standards: [
    'Tutor verification and screening',
    'Academic monitoring and ERP tracking',
    'Structured tutoring methodology',
    'Dedicated academic support services',
  ],
  closing:
    'Our goal is to build a reliable national mentorship network that supports students across diverse educational environments.',
} as const

export const findMentorSection = {
  title: 'Find a Mentor in Your City',
  description:
    'Whether you need home tutoring, online academic support, or specialised mentoring, Indian Mentors connects students with trusted educators across India.',
  closing: 'Start your learning journey with the right mentor today.',
} as const

export const phoneSupport = {
  title: 'Speak with Our Support Team',
  intro: 'Our authorised support numbers are available for:',
  topics: [
    'Student enrollment enquiries',
    'Tutor recruitment assistance',
    'Tutor allocation assistance',
    'Demo session booking',
    'Academic counselling',
    'Recruitment partnership',
    'Partnership discussions',
  ],
  numbers: [
    { display: '+91 73895 63564', tel: '+917389563564', wa: '917389563564' },
    { display: '+91 78690 27983', tel: '+917869027983', wa: '917869027983' },
    { display: '+91 70245 68193', tel: '+917024568193' },
    { display: '+91 74152 63564', tel: '+917415263564' },
    { display: '+91 74153 63564', tel: '+917415363564' },
    { display: '+91 74159 13564', tel: '+917415913564' },
    { display: '+91 74159 23564', tel: '+917415923564' },
    { display: '+91 91791 84304', tel: '+919179184304' },
  ] satisfies PhoneContact[],
} as const

export const workingHours = {
  title: "Need Help? We're Available to Support You",
  subtitle: 'Our team is available to guide you throughout your academic journey.',
  days: 'Monday – Saturday',
  hours: '10:00 AM – 07:00 PM',
  note: 'Reach out anytime during working hours for quick support',
} as const

export const whatsappSupport = {
  title: 'Instant Support on WhatsApp',
  intro: 'Connect with our support team for quick responses regarding tutoring services and enquiries.',
  topics: [
    'Demo session booking',
    'Course and subject enquiries',
    'Fee structure details',
    'Tutor application guidance',
    'Local branch support',
  ],
  numbers: [
    { display: '+91 73895 63564', tel: '+917389563564', wa: '917389563564' },
    { display: '+91 78690 27983', tel: '+917869027983', wa: '917869027983' },
  ] satisfies PhoneContact[],
  ctaLabel: 'Chat on WhatsApp',
} as const

export const emailSupport = {
  title: 'Write to Our Team',
  intro:
    'For detailed enquiries, institutional partnerships, or official communication, you may contact us via email.',
  address: 'info@indianmentors.in',
  responseTime: 'Our team typically responds within 24–48 working hours.',
} as const

export const websiteInfo = {
  title: 'Learn More About Indian Mentors',
  intro: 'Explore complete information about:',
  topics: [
    'Personalised tutoring services',
    'Tutor registration process',
    'Student enrollment procedures',
    'Academic programs and subjects offered',
  ],
  url: 'https://www.indianmentors.in',
  displayUrl: 'www.indianmentors.in',
} as const

export const contactClosing = {
  title: 'Indian Mentors — Structured Academic Support, Delivered Nationwide.',
  text: 'At Indian Mentors, your academic success is our priority. Reach out today and let us help you achieve your learning goals with the right guidance and support.',
} as const

export const contactGetStarted = {
  badge: 'Get Started',
  title: 'Get Personalised Tutoring Support in Your City',
  description:
    'Experience structured mentorship designed to help students achieve confidence, clarity, and academic success.',
  ctas: [
    { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
    { label: 'Talk to Counsellor', href: `tel:${phoneSupport.numbers[0].tel}`, iconMdi: 'mdi:account-voice' },
    { label: 'Find a Mentor in Your City', href: '#find-mentor', iconMdi: 'mdi:map-marker-radius-outline' },
  ],
} as const

export const primaryPhone = phoneSupport.numbers[0]
