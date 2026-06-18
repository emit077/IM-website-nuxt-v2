export type PhoneContact = {
  display: string
  tel: string
  wa?: string
}

export type PopularCity = {
  id: string
  icon: string
  label: string
}

export type PopularCityImage = {
  id: string
  image: string
  label: string
}

/** Cities with a dedicated icon in /public/assets/img/city-icons/ */
export const popularCities = [
  { id: 'mumbai', icon: 'mumbai', label: 'Mumbai' },
  { id: 'delhi', icon: 'delhi', label: 'Delhi-NCR' },
  { id: 'bengaluru', icon: 'bengaluru', label: 'Bengaluru' },
  { id: 'hyderabad', icon: 'hydrabad', label: 'Hyderabad' },
  { id: 'chandigarh', icon: 'chandigarh', label: 'Chandigarh' },
  { id: 'ahmedabad', icon: 'ahmdabad', label: 'Ahmedabad' },
  { id: 'pune', icon: 'pune', label: 'Pune' },
  { id: 'chennai', icon: 'chennai', label: 'Chennai' },
  { id: 'kolkata', icon: 'kolkata', label: 'Kolkata' },
  { id: 'raipur', icon: 'raipur', label: 'Raipur' },
  { id: 'nagpur', icon: 'nagpur', label: 'Nagpur' },
  { id: 'indore', icon: 'indore', label: 'Indore' },
  { id: 'lucknow', icon: 'lucknow', label: 'Lucknow' },
  { id: 'jaipur', icon: 'jaipur', label: 'Jaipur' },
  { id: 'patna', icon: 'patna', label: 'Patna' },
  { id: 'kochi', icon: 'kochi', label: 'Kochi' },
  { id: 'bhubaneswar', icon: 'bhubneshwar', label: 'Bhubaneswar' },
  { id: 'vizag', icon: 'vizag', label: 'Visakhapatnam' },
] as const satisfies readonly PopularCity[]

/** Cities with a dedicated image in /public/assets/img/city-img/ */
export const popularCityImages = [
  { id: 'mumbai', image: 'mumbai', label: 'Mumbai' },
  { id: 'delhi', image: 'delhi', label: 'Delhi-NCR' },
  { id: 'bengaluru', image: 'bangluru', label: 'Bengaluru' },
  { id: 'chennai', image: 'chennai', label: 'Chennai' },
  { id: 'kolkata', image: 'kolkata', label: 'Kolkata' },
  { id: 'pune', image: 'pune', label: 'Pune' },
  { id: 'ahmedabad', image: 'ahmdabad', label: 'Ahmedabad' },
  { id: 'raipur', image: 'raipur', label: 'Raipur' },
  { id: 'jaipur', image: 'jaipur', label: 'Jaipur' },
  { id: 'indore', image: 'indore', label: 'Indore' },
  { id: 'lucknow', image: 'lucknow', label: 'Lucknow' },
  { id: 'kochi', image: 'kochi', label: 'Kochi' },
  { id: 'bhopal', image: 'bhopal', label: 'Bhopal' },
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
  subheadline: 'Delivering Personalised Tutoring Services Across Major Cities and Educational Hubs',
  primaryCta: { label: 'Explore Popular Cities', href: '#branch-offices' },
  secondaryCta: { label: 'Contact Support', href: '#call-us' },
} as const

/** Contact hero collage — top row (2 cities) + bottom row (4 cities) */
export const contactHeroCollageTop = popularCityImages.slice(0, 2)
export const contactHeroCollageBottom = popularCityImages.slice(2, 6)

export const headOffice = {
  title: 'Indian Mentors – National Operations Center',
  subtitle: 'Headquarters',
  location: 'Bhilai, Chhattisgarh',
  address:
    '32A, Indian Mentors Building, Near Avantibai Chowk, Junwani Road, Beside Dubey Dairy, Kohka, Bhilai, District Durg, Chhattisgarh, India – 490023',
  mapsCta: 'Get directions on Google Maps',
  intro: 'The Indian Mentors headquarters in Bhilai serves as the central hub for:',
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

export const branchOffices = {
  title: 'Major Cities with Operational Presence',
  intro:
    'Indian Mentors currently maintains operational activities in several key metropolitan and regional cities across India.',
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

export const findMentorSection = {
  title: 'Find a Mentor in Your City',
  description:
    'Whether you need home tutoring, online academic support, or specialised mentoring, Indian Mentors connects students with trusted educators across India.',
  closing: 'Start your learning journey with the right mentor today.',
} as const

export const phoneSupport = {
  title: 'Speak with Our Support Team',
  intro: 'Call our authorised support line for enrollment, demo booking, academic counselling, and partnership enquiries.',
  topics: [
    'Student enrollment enquiries',
    'Tutor recruitment assistance',
    'Tutor allocation assistance',
    'Demo session booking',
    'Academic counselling',
    'Recruitment partnership',
    'Partnership discussions',
  ],
  number: { display: '+91 73895 63564', tel: '+917389563564', wa: '917389563564' },
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
    'For detailed enquiries, institutional partnerships, or official communication, reach us at our support email.',
  address: 'info@indianmentors.in',
  ctaLabel: 'Send an Email',
  responseTime: 'Our team typically responds within 24–48 working hours.',
  topics: [
    'Institutional partnership enquiries',
    'Official documentation requests',
    'Detailed enrollment information',
    'Tutor and mentor applications',
    'Academic program details',
    'Verification and compliance queries',
  ],
} as const

export const contactGetStarted = {
  badge: 'Get Started',
  title: 'Get Personalised Tutoring Support in Your City',
  description:
    'Experience structured mentorship designed to help students achieve confidence, clarity, and academic success.',
  ctas: [
    { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
    { label: 'Talk to Counsellor', href: `tel:${phoneSupport.number.tel}`, iconMdi: 'mdi:account-voice' },
  ],
} as const
