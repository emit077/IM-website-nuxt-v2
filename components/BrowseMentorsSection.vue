<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from './ui/cardheader.vue'

type BrowseMode = 'tutors' | 'students'
type SessionMode = 'online' | 'home'

interface Tutor {
    id: string
    name: string
    photo: string
    location: string
    subjects: string[]
    rating: number
    reviews: number
    hoursTaught: number
    students: number
    description: string
    languages: { name: string; level: 'Native' | 'Fluent' | 'Conversational' }[]
    pricePerHour: number
    isPopular?: boolean
    grades: string[]
    modes: SessionMode[]
    cities: string[]
}

interface StudentRequest {
    id: string
    name: string
    photo: string
    location: string
    grade: string
    board: 'CBSE' | 'ICSE' | 'IB' | 'State' | 'Cambridge'
    subjectsNeeded: string[]
    description: string
    hoursPerWeek: number
    budgetMin: number
    budgetMax: number
    postedAgo: string
    urgent?: boolean
    preferredMode: SessionMode
    grades: string[]
    cities: string[]
}

const browseMode = ref<BrowseMode>('tutors')

const grades = ['All grades', 'Grade 1-5', 'Grade 6-8', 'Grade 9-10', 'Grade 11-12', 'JEE/NEET']
const subjectOptions = [
    'All subjects',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science',
]
const filterGrade = ref('Grade 6-8')
const filterSubject = ref('Mathematics')
const filterCity = ref('')
const filterMode = ref<SessionMode>('online')

const tutors: Tutor[] = [
    {
        id: 't1',
        name: 'Anaya Gupta',
        photo:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Raipur, Chhattisgarh, India',
        subjects: ['Maths', 'Science', 'Biology'],
        rating: 4.5,
        reviews: 1400,
        hoursTaught: 100,
        students: 45,
        description:
            'Math Tutor | 9 years of experience | Engineer | GCSE (Edexcel, AQA) | IGCSE | Calculus | Algebra | AP…',
        languages: [
            { name: 'Hindi', level: 'Native' },
            { name: 'English', level: 'Fluent' },
            { name: 'Tamil', level: 'Fluent' },
        ],
        pricePerHour: 1000,
        isPopular: true,
        grades: ['Grade 6-8', 'Grade 9-10', 'Grade 11-12'],
        modes: ['online', 'home'],
        cities: ['raipur'],
    },
    {
        id: 't2',
        name: 'Aarav Sharma',
        photo:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Noida, Uttar Pradesh, India',
        subjects: ['Maths', 'Physics', 'Chemistry'],
        rating: 4.8,
        reviews: 1100,
        hoursTaught: 120,
        students: 52,
        description:
            'JEE Foundation Tutor | 8 years of experience | Problem solving | Algebra | Trigonometry | Calculus',
        languages: [
            { name: 'Hindi', level: 'Native' },
            { name: 'English', level: 'Fluent' },
        ],
        pricePerHour: 1100,
        grades: ['Grade 9-10', 'Grade 11-12', 'JEE/NEET'],
        modes: ['online'],
        cities: ['noida'],
    },
    {
        id: 't3',
        name: 'Meera Iyer',
        photo:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Bengaluru, Karnataka, India',
        subjects: ['Physics', 'Maths'],
        rating: 4.9,
        reviews: 980,
        hoursTaught: 210,
        students: 78,
        description:
            'IIT-JEE Mentor | 11 years of experience | Conceptual physics | Mechanics | Electromagnetism | NEET Foundation',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Tamil', level: 'Fluent' },
            { name: 'Kannada', level: 'Conversational' },
        ],
        pricePerHour: 1250,
        grades: ['Grade 11-12', 'JEE/NEET'],
        modes: ['online', 'home'],
        cities: ['bengaluru', 'bangalore'],
    },
    {
        id: 't4',
        name: 'Rohan Kapoor',
        photo:
            'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Delhi, India',
        subjects: ['English', 'Literature', 'IELTS'],
        rating: 4.7,
        reviews: 760,
        hoursTaught: 340,
        students: 96,
        description:
            'English & IELTS Coach | 10 years of experience | Cambridge certified | Spoken English | Writing | Public Speaking',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
            { name: 'Punjabi', level: 'Fluent' },
        ],
        pricePerHour: 950,
        isPopular: true,
        grades: ['Grade 6-8', 'Grade 9-10', 'Grade 11-12'],
        modes: ['online', 'home'],
        cities: ['delhi', 'new delhi'],
    },
    {
        id: 't5',
        name: 'Priya Nair',
        photo:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Pune, Maharashtra, India',
        subjects: ['Biology', 'Chemistry'],
        rating: 4.8,
        reviews: 1320,
        hoursTaught: 280,
        students: 88,
        description:
            'NEET Specialist | 9 years of experience | Cell Biology | Genetics | Organic Chemistry | Mock Test Reviews',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Marathi', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
        ],
        pricePerHour: 1150,
        grades: ['Grade 11-12', 'JEE/NEET'],
        modes: ['online'],
        cities: ['pune'],
    },
    {
        id: 't6',
        name: 'Vikram Joshi',
        photo:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Ahmedabad, Gujarat, India',
        subjects: ['Computer Science', 'Maths'],
        rating: 4.6,
        reviews: 540,
        hoursTaught: 160,
        students: 64,
        description:
            'Coding Mentor | 7 years of experience | Python | Java | DSA | Olympiad prep | Logic building for school students',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Gujarati', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
        ],
        pricePerHour: 1050,
        grades: ['Grade 6-8', 'Grade 9-10', 'Grade 11-12'],
        modes: ['online', 'home'],
        cities: ['ahmedabad'],
    },
    {
        id: 't7',
        name: 'Neha Saxena',
        photo:
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Lucknow, Uttar Pradesh, India',
        subjects: ['Accounts', 'Economics', 'Business Studies'],
        rating: 4.7,
        reviews: 820,
        hoursTaught: 240,
        students: 71,
        description:
            'Commerce Mentor | 12 years of experience | CA Inter | Class 11-12 Boards | Macro & Micro Economics | Case studies',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Hindi', level: 'Native' },
        ],
        pricePerHour: 980,
        grades: ['Grade 11-12'],
        modes: ['online', 'home'],
        cities: ['lucknow'],
    },
    {
        id: 't8',
        name: 'Arjun Menon',
        photo:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Kochi, Kerala, India',
        subjects: ['Maths', 'Physics'],
        rating: 4.9,
        reviews: 1450,
        hoursTaught: 410,
        students: 132,
        description:
            'Cambridge & IB Math Coach | 13 years of experience | AA HL/SL | IGCSE | A-Level | Concept-first approach',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Malayalam', level: 'Native' },
            { name: 'Hindi', level: 'Conversational' },
        ],
        pricePerHour: 1400,
        isPopular: true,
        grades: ['Grade 9-10', 'Grade 11-12'],
        modes: ['online'],
        cities: ['kochi', 'cochin'],
    },
    {
        id: 't9',
        name: 'Sara Fernandes',
        photo:
            'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Goa, India',
        subjects: ['English', 'Spoken English'],
        rating: 4.6,
        reviews: 690,
        hoursTaught: 180,
        students: 58,
        description:
            'Spoken English & Personality Development | 6 years of experience | Phonetics | Confident communication | Storytelling for kids',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Konkani', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
        ],
        pricePerHour: 850,
        grades: ['Grade 1-5', 'Grade 6-8'],
        modes: ['online'],
        cities: ['goa', 'panaji'],
    },
    {
        id: 't10',
        name: 'Tanvi Kulkarni',
        photo:
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Mumbai, Maharashtra, India',
        subjects: ['Maths', 'Mental Maths'],
        rating: 4.8,
        reviews: 1180,
        hoursTaught: 260,
        students: 92,
        description:
            'Pre-Board Maths Mentor | 10 years of experience | Visual learning | Vedic Maths | Speed techniques | Class 6-10 specialist',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Marathi', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
        ],
        pricePerHour: 1080,
        isPopular: true,
        grades: ['Grade 6-8', 'Grade 9-10'],
        modes: ['online', 'home'],
        cities: ['mumbai'],
    },
    {
        id: 't11',
        name: 'Sahil Bhatia',
        photo:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Chandigarh, India',
        subjects: ['Maths', 'Science'],
        rating: 4.7,
        reviews: 720,
        hoursTaught: 195,
        students: 67,
        description:
            'STEM Enthusiast | 8 years of experience | NCERT mastery | Olympiad coaching | Concept videos & worksheets',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Hindi', level: 'Native' },
            { name: 'Punjabi', level: 'Fluent' },
        ],
        pricePerHour: 920,
        grades: ['Grade 6-8', 'Grade 9-10'],
        modes: ['online'],
        cities: ['chandigarh'],
    },
    {
        id: 't12',
        name: 'Pooja Reddy',
        photo:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Hyderabad, Telangana, India',
        subjects: ['Maths', 'Computer Science'],
        rating: 4.9,
        reviews: 1340,
        hoursTaught: 320,
        students: 104,
        description:
            'Logic-first Maths Mentor | 11 years of experience | Algebra | Number theory | Scratch & Python for kids | Olympiad prep',
        languages: [
            { name: 'English', level: 'Native' },
            { name: 'Telugu', level: 'Native' },
            { name: 'Hindi', level: 'Conversational' },
        ],
        pricePerHour: 1180,
        grades: ['Grade 6-8', 'Grade 9-10'],
        modes: ['online', 'home'],
        cities: ['hyderabad'],
    },
]

const students: StudentRequest[] = [
    {
        id: 's1',
        name: 'Riya Verma',
        photo:
            'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Gurugram, Haryana',
        grade: 'Grade 9',
        board: 'CBSE',
        subjectsNeeded: ['Maths', 'Science'],
        description:
            'Looking for a patient tutor to strengthen Algebra & Geometry fundamentals before half-yearly exams.',
        hoursPerWeek: 4,
        budgetMin: 600,
        budgetMax: 900,
        postedAgo: '2 days ago',
        urgent: true,
        preferredMode: 'online',
        grades: ['Grade 9-10'],
        cities: ['gurugram', 'gurgaon'],
    },
    {
        id: 's2',
        name: 'Karthik Rao',
        photo:
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Hyderabad, Telangana',
        grade: 'Grade 11',
        board: 'CBSE',
        subjectsNeeded: ['Physics', 'Chemistry', 'Maths'],
        description:
            'JEE aspirant — needs problem-solving sessions twice a week with regular mock test reviews.',
        hoursPerWeek: 6,
        budgetMin: 900,
        budgetMax: 1300,
        postedAgo: '5 hrs ago',
        preferredMode: 'online',
        grades: ['Grade 11-12', 'JEE/NEET'],
        cities: ['hyderabad'],
    },
    {
        id: 's3',
        name: 'Aisha Khan',
        photo:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Mumbai, Maharashtra',
        grade: 'Grade 7',
        board: 'ICSE',
        subjectsNeeded: ['English', 'Mathematics'],
        description:
            'Prefers female tutor for English literature & writing skills. Weekday evenings work best.',
        hoursPerWeek: 3,
        budgetMin: 500,
        budgetMax: 750,
        postedAgo: '1 day ago',
        preferredMode: 'home',
        grades: ['Grade 6-8'],
        cities: ['mumbai'],
    },
    {
        id: 's4',
        name: 'Devansh Mehta',
        photo:
            'https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Jaipur, Rajasthan',
        grade: 'Grade 12',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'Physics'],
        description:
            'NEET aspirant in his final year — looking for revision-focused mentor with daily doubt support and weekend tests.',
        hoursPerWeek: 8,
        budgetMin: 1100,
        budgetMax: 1500,
        postedAgo: '7 hrs ago',
        urgent: true,
        preferredMode: 'online',
        grades: ['Grade 11-12', 'JEE/NEET'],
        cities: ['jaipur'],
    },
    {
        id: 's5',
        name: 'Ananya Banerjee',
        photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Kolkata, West Bengal',
        grade: 'Grade 5',
        board: 'ICSE',
        subjectsNeeded: ['Mathematics', 'Science'],
        description:
            'Foundation strengthening for primary school. Parent prefers a tutor who can keep sessions playful and visual.',
        hoursPerWeek: 2,
        budgetMin: 400,
        budgetMax: 600,
        postedAgo: '3 days ago',
        preferredMode: 'home',
        grades: ['Grade 1-5'],
        cities: ['kolkata'],
    },
    {
        id: 's6',
        name: 'Saanvi Reddy',
        photo:
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Chennai, Tamil Nadu',
        grade: 'Grade 10',
        board: 'IB',
        subjectsNeeded: ['English', 'Mathematics'],
        description:
            'IB MYP student — wants extended writing coaching and IB-style problem solving for Maths AA.',
        hoursPerWeek: 5,
        budgetMin: 1200,
        budgetMax: 1800,
        postedAgo: '1 day ago',
        preferredMode: 'online',
        grades: ['Grade 9-10'],
        cities: ['chennai'],
    },
    {
        id: 's7',
        name: 'Aditya Singh',
        photo:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Bhopal, Madhya Pradesh',
        grade: 'Grade 8',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'Science'],
        description:
            'Average performer wants to climb to top 10 of class. Parent prefers tutor available at 7pm on weekdays.',
        hoursPerWeek: 4,
        budgetMin: 500,
        budgetMax: 800,
        postedAgo: '6 hrs ago',
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['bhopal'],
    },
    {
        id: 's8',
        name: 'Ishaan Patel',
        photo:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Surat, Gujarat',
        grade: 'Grade 6',
        board: 'State',
        subjectsNeeded: ['English', 'Hindi'],
        description:
            'New to English-medium school — needs reading fluency and grammar foundations. Patient, friendly tutor preferred.',
        hoursPerWeek: 3,
        budgetMin: 450,
        budgetMax: 700,
        postedAgo: '4 days ago',
        preferredMode: 'home',
        grades: ['Grade 6-8'],
        cities: ['surat'],
    },
    {
        id: 's9',
        name: 'Tara Desai',
        photo:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Indore, Madhya Pradesh',
        grade: 'Grade 11',
        board: 'CBSE',
        subjectsNeeded: ['Biology', 'Chemistry'],
        description:
            'NEET dropper looking for intensive 1-on-1 coaching with a structured weekly plan and timed practice.',
        hoursPerWeek: 10,
        budgetMin: 1300,
        budgetMax: 1900,
        postedAgo: '11 hrs ago',
        urgent: true,
        preferredMode: 'online',
        grades: ['Grade 11-12', 'JEE/NEET'],
        cities: ['indore'],
    },
    {
        id: 's10',
        name: 'Vihaan Krishnan',
        photo:
            'https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Coimbatore, Tamil Nadu',
        grade: 'Grade 9',
        board: 'Cambridge',
        subjectsNeeded: ['Physics', 'Mathematics', 'Computer Science'],
        description:
            'IGCSE student exploring computer science Olympiad — looking for a mentor who can balance schoolwork and coding contests.',
        hoursPerWeek: 6,
        budgetMin: 1000,
        budgetMax: 1500,
        postedAgo: '2 days ago',
        preferredMode: 'online',
        grades: ['Grade 9-10'],
        cities: ['coimbatore'],
    },
    {
        id: 's11',
        name: 'Meher Kaur',
        photo:
            'https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Chandigarh, India',
        grade: 'Grade 4',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'English'],
        description:
            'Primary school child needs an engaging tutor to make daily homework fun and build reading habit.',
        hoursPerWeek: 3,
        budgetMin: 350,
        budgetMax: 600,
        postedAgo: '1 day ago',
        preferredMode: 'home',
        grades: ['Grade 1-5'],
        cities: ['chandigarh'],
    },
    {
        id: 's12',
        name: 'Kabir Sinha',
        photo:
            'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Patna, Bihar',
        grade: 'Grade 7',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'Science'],
        description:
            'Wants a steady weekly mentor for Maths foundation — algebra and geometry are weak points before Class 8.',
        hoursPerWeek: 4,
        budgetMin: 500,
        budgetMax: 800,
        postedAgo: '2 hrs ago',
        urgent: true,
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['patna'],
    },
    {
        id: 's13',
        name: 'Zara Iqbal',
        photo:
            'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Lucknow, Uttar Pradesh',
        grade: 'Grade 8',
        board: 'ICSE',
        subjectsNeeded: ['Mathematics', 'English'],
        description:
            'ICSE Class 8 student preparing for school olympiad — needs problem-solving practice and writing improvement.',
        hoursPerWeek: 5,
        budgetMin: 700,
        budgetMax: 1000,
        postedAgo: '8 hrs ago',
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['lucknow'],
    },
    {
        id: 's14',
        name: 'Arnav Krishnan',
        photo:
            'https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Bengaluru, Karnataka',
        grade: 'Grade 6',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'Computer Science'],
        description:
            'Curious learner — parents want a mentor who can introduce coding alongside school maths in a fun way.',
        hoursPerWeek: 3,
        budgetMin: 600,
        budgetMax: 900,
        postedAgo: '1 day ago',
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['bengaluru', 'bangalore'],
    },
    {
        id: 's15',
        name: 'Diya Mehta',
        photo:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Pune, Maharashtra',
        grade: 'Grade 8',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics'],
        description:
            'Improving from 70% to 90% in Maths is the goal — needs structured weekly tests and concept revisions.',
        hoursPerWeek: 4,
        budgetMin: 650,
        budgetMax: 950,
        postedAgo: '3 days ago',
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['pune'],
    },
    {
        id: 's16',
        name: 'Yuvaan Sharma',
        photo:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=3&w=240&q=80',
        location: 'Noida, Uttar Pradesh',
        grade: 'Grade 7',
        board: 'CBSE',
        subjectsNeeded: ['Mathematics', 'Science'],
        description:
            'Looking for an evening tutor (after 6pm) to support school homework and clear daily doubts.',
        hoursPerWeek: 5,
        budgetMin: 550,
        budgetMax: 850,
        postedAgo: '5 hrs ago',
        preferredMode: 'online',
        grades: ['Grade 6-8'],
        cities: ['noida'],
    },
]

const filteredTutors = computed<Tutor[]>(() =>
    tutors.filter((t) => {
        if (filterGrade.value !== 'All grades' && !t.grades.includes(filterGrade.value)) return false
        if (
            filterSubject.value !== 'All subjects' &&
            !t.subjects.some((s) =>
                s.toLowerCase().includes(filterSubject.value.toLowerCase().slice(0, 4)),
            )
        )
            return false
        if (!t.modes.includes(filterMode.value)) return false
        const city = filterCity.value.trim().toLowerCase()
        if (city && !t.cities.some((c) => c.includes(city))) return false
        return true
    }),
)

const filteredStudents = computed<StudentRequest[]>(() =>
    students.filter((s) => {
        if (filterGrade.value !== 'All grades' && !s.grades.includes(filterGrade.value)) return false
        if (
            filterSubject.value !== 'All subjects' &&
            !s.subjectsNeeded.some((sb) =>
                sb.toLowerCase().includes(filterSubject.value.toLowerCase().slice(0, 4)),
            )
        )
            return false
        if (s.preferredMode !== filterMode.value) return false
        const city = filterCity.value.trim().toLowerCase()
        if (city && !s.cities.some((c) => c.includes(city))) return false
        return true
    }),
)

const resultCount = computed(() =>
    browseMode.value === 'tutors' ? filteredTutors.value.length : filteredStudents.value.length,
)

function formatRating(r: number) {
    return r.toFixed(1)
}

function formatReviews(n: number) {
    if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`
    return String(n)
}

function inrFmt(n: number) {
    return `₹${n.toLocaleString('en-IN')}`
}

const headerCopy = computed(() =>
    browseMode.value === 'tutors'
        ? {
            badge: 'Discover the perfect match',
            title:
                "Find Your <span class='text-gradient-brand'>Learning</span> Partner",
            description:
                'Background-verified tutors across boards, subjects and cities — filter by what you need and book a free demo in minutes.',
        }
        : {
            badge: 'Discover the perfect match',
            title:
                "Meet <span class='text-gradient-brand'>Eager</span> Learners",
            description:
                'Active student requests with clear goals, schedule and budget — find the ones that fit your expertise and send a proposal in one click.',
        },
)

/* ---------------- Slider (scroll-snap) ---------------- */
const tutorsTrack = ref<HTMLElement | null>(null)
const studentsTrack = ref<HTMLElement | null>(null)
const tutorsActiveIndex = ref(0)
const studentsActiveIndex = ref(0)
const tutorsAtStart = ref(true)
const tutorsAtEnd = ref(false)
const studentsAtStart = ref(true)
const studentsAtEnd = ref(false)

function getCardWidth(track: HTMLElement): number {
    const card = track.querySelector<HTMLElement>('[data-slide]')
    if (!card) return track.clientWidth
    const styles = window.getComputedStyle(track)
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
    return card.getBoundingClientRect().width + gap
}

function updateSliderState(
    track: HTMLElement,
    activeIndex: typeof tutorsActiveIndex,
    atStart: typeof tutorsAtStart,
    atEnd: typeof tutorsAtEnd,
) {
    const w = getCardWidth(track)
    if (w > 0) activeIndex.value = Math.round(track.scrollLeft / w)
    atStart.value = track.scrollLeft <= 4
    atEnd.value = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
}

function onTutorsScroll() {
    if (tutorsTrack.value)
        updateSliderState(tutorsTrack.value, tutorsActiveIndex, tutorsAtStart, tutorsAtEnd)
}
function onStudentsScroll() {
    if (studentsTrack.value)
        updateSliderState(studentsTrack.value, studentsActiveIndex, studentsAtStart, studentsAtEnd)
}

function scrollSlider(track: HTMLElement | null, dir: 1 | -1) {
    if (!track) return
    track.scrollBy({ left: getCardWidth(track) * dir, behavior: 'smooth' })
}

function goToSlide(track: HTMLElement | null, index: number) {
    if (!track) return
    track.scrollTo({ left: getCardWidth(track) * index, behavior: 'smooth' })
}

function refreshActiveSlider() {
    nextTick(() => {
        if (browseMode.value === 'tutors') onTutorsScroll()
        else onStudentsScroll()
    })
}

watch(browseMode, refreshActiveSlider)
watch([filteredTutors, filteredStudents], refreshActiveSlider)

let resizeObserver: ResizeObserver | null = null
onMounted(() => {
    refreshActiveSlider()
    if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => refreshActiveSlider())
        if (tutorsTrack.value) resizeObserver.observe(tutorsTrack.value)
        if (studentsTrack.value) resizeObserver.observe(studentsTrack.value)
    }
    window.addEventListener('resize', refreshActiveSlider)
})

onUnmounted(() => {
    resizeObserver?.disconnect()
    window.removeEventListener('resize', refreshActiveSlider)
})
</script>

<template>
    <section id="tutors" class="relative mx-auto w-full max-w-[1200px] px-4 py-12 sm:py-16"
        aria-labelledby="browse-mentors-heading">
        <!-- Anchor for CTAs site-wide -->
        <div id="book-demo" class="sr-only scroll-mt-28" tabindex="-1">
          Book a free demo
        </div>
        <div aria-hidden="true"
            class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-[#eef1ff] via-[#f6f8ff] to-transparent">
        </div>

        <CardHeader :badge="headerCopy.badge" :title="headerCopy.title" :description="headerCopy.description" />

        <!-- Browse mode tabs -->
        <div class="mt-2 flex justify-center" v-motion :initial="{ opacity: 0, y: 8 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }">
            <div role="tablist" aria-label="Browse mode"
                class="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                <button role="tab" :aria-selected="browseMode === 'tutors'" type="button" @click="browseMode = 'tutors'"
                    :class="[
                        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition sm:px-5',
                        browseMode === 'tutors'
                            ? 'bg-blue-600 text-white shadow-[0_8px_20px_-10px_rgba(37,99,235,0.7)]'
                            : 'text-slate-600 hover:text-slate-900',
                    ]">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7" />
                        <path d="M4.5 20c1.4-3.7 4.5-5.2 7.5-5.2s6.1 1.5 7.5 5.2" stroke="currentColor"
                            stroke-width="1.7" stroke-linecap="round" />
                    </svg>
                    Browse Tutors
                </button>
                <button role="tab" :aria-selected="browseMode === 'students'" type="button"
                    @click="browseMode = 'students'" :class="[
                        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition sm:px-5',
                        browseMode === 'students'
                            ? 'bg-indigo-600 text-white shadow-[0_8px_20px_-10px_rgba(67,56,202,0.65)]'
                            : 'text-slate-600 hover:text-slate-900',
                    ]">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 10.5 12 6l9 4.5-9 4.5L3 10.5z" stroke="currentColor" stroke-width="1.7"
                            stroke-linejoin="round" />
                        <path d="M7.5 12.5V17c1.6 1.4 3.4 2 4.5 2s2.9-.6 4.5-2v-4.5" stroke="currentColor"
                            stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Browse Students
                </button>
            </div>
        </div>

        <!-- Filter bar -->
        <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_30px_-20px_rgba(15,23,42,0.18)] sm:p-4"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 } }">
            <div class="flex flex-col items-stretch gap-2.5 lg:flex-row lg:items-center lg:gap-3">
                <span aria-hidden="true"
                    class="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 lg:grid">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.7" />
                        <path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                    </svg>
                </span>

                <div class="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:items-center lg:gap-2">
                    <!-- Grade -->
                    <label class="relative">
                        <span class="sr-only">Grade</span>
                        <select v-model="filterGrade"
                            class="w-full appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-[13px] font-semibold text-slate-800 transition hover:border-slate-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/70 lg:w-auto">
                            <option v-for="g in grades" :key="g">{{ g }}</option>
                        </select>
                        <svg aria-hidden="true"
                            class="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                            viewBox="0 0 24 24" fill="none">
                            <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </label>

                    <!-- Subject -->
                    <label class="relative">
                        <span class="sr-only">Subject</span>
                        <select v-model="filterSubject"
                            class="w-full appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-[13px] font-semibold text-slate-800 transition hover:border-slate-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/70 lg:w-auto">
                            <option v-for="s in subjectOptions" :key="s">{{ s }}</option>
                        </select>
                        <svg aria-hidden="true"
                            class="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                            viewBox="0 0 24 24" fill="none">
                            <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </label>

                    <!-- City -->
                    <label class="relative flex-1">
                        <span class="sr-only">City or area</span>
                        <input v-model="filterCity" type="text" placeholder="City, area…"
                            class="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-[13px] text-slate-800 placeholder:text-slate-400 transition hover:border-slate-300 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200/70" />
                        <svg aria-hidden="true"
                            class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M12 21s7-6.2 7-11.4A7 7 0 1 0 5 9.6C5 14.8 12 21 12 21z" stroke="currentColor"
                                stroke-width="1.6" />
                            <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" stroke-width="1.6" />
                        </svg>
                    </label>

                    <!-- Mode toggle -->
                    <div
                        class="inline-flex shrink-0 items-center justify-self-stretch rounded-full border border-slate-200 bg-slate-50 p-1 sm:justify-self-start">
                        <button type="button" @click="filterMode = 'online'" :class="[
                            'rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition',
                            filterMode === 'online'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-slate-600 hover:text-slate-900',
                        ]">
                            Online
                        </button>
                        <button type="button" @click="filterMode = 'home'" :class="[
                            'rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition',
                            filterMode === 'home'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-slate-600 hover:text-slate-900',
                        ]">
                            Home
                        </button>
                    </div>

                    <button type="button"
                        class="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)] transition hover:bg-blue-500">
                        Search
                        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- =================== TUTORS SLIDER =================== -->
        <div v-show="browseMode === 'tutors'" class="relative mt-4">
            <button type="button" @click="scrollSlider(tutorsTrack, -1)" :disabled="tutorsAtStart"
                aria-label="Previous tutors"
                class="absolute -left-2 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 lg:grid">
                <Icon icon="mdi:chevron-left" class="h-6 w-6" />
            </button>
            <button type="button" @click="scrollSlider(tutorsTrack, 1)" :disabled="tutorsAtEnd" aria-label="Next tutors"
                class="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 lg:grid">
                <Icon icon="mdi:chevron-right" class="h-6 w-6" />
            </button>

            <div ref="tutorsTrack" @scroll.passive="onTutorsScroll"
                class="scrollbar-hide flex snap-x snap-mandatory scroll-pl-4 gap-5 overflow-x-auto px-1 pb-3 lg:scroll-pl-0">
                <article v-for="(t, i) in filteredTutors" :key="t.id" data-slide
                    class="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.35)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                    v-motion :initial="{ opacity: 0, y: 14 }"
                    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 + i * 90 } }">

                    <!-- Header (gradient) -->
                    <div
                        class="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 px-4 pb-3.5 pt-9 text-center">
                        <div aria-hidden="true"
                            class="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/15 to-transparent">
                        </div>
                        <span v-if="t.isPopular"
                            class="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-amber-400/95 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-amber-900 shadow ring-1 ring-amber-500/40">
                            <svg class="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2 14 9l7 .5-5.5 4.5L17 21l-5-3.5L7 21l1.5-7L3 9.5 10 9l2-7z" />
                            </svg>
                            Popular
                        </span>

                        <div
                            class="relative z-[1] mx-auto h-16 w-16 rounded-full ring-2 ring-white/90 sm:h-[72px] sm:w-[72px]">
                            <img :src="t.photo" :alt="t.name" class="h-full w-full rounded-full object-cover shadow-md"
                                loading="lazy" />
                        </div>
                        <h3
                            class="mt-2 inline-flex items-center justify-center gap-1 font-display text-[14.5px] font-bold leading-tight text-white">
                            <span>{{ t.name }}</span>
                            <Icon icon="mdi:check-decagram"
                                class="h-3.5 w-3.5 text-sky-300 drop-shadow-[0_1px_2px_rgba(2,6,23,0.35)]"
                                aria-label="Verified tutor" />
                        </h3>
                        <p class="mt-0.5 inline-flex items-center justify-center gap-1 text-[11px] text-blue-100">
                            <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M12 21s7-6.2 7-11.4A7 7 0 1 0 5 9.6C5 14.8 12 21 12 21z" stroke="currentColor"
                                    stroke-width="1.6" />
                                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" stroke-width="1.6" />
                            </svg>
                            {{ t.location }}
                        </p>

                        <div class="mt-2.5 flex flex-wrap items-center justify-center gap-1">
                            <span v-for="s in t.subjects" :key="s"
                                class="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                                {{ s }}
                            </span>
                        </div>
                    </div>

                    <!-- Stats row -->
                    <div
                        class="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-white px-2 py-2 text-center">
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ formatRating(t.rating) }}
                                <span class="text-amber-500">★</span>
                            </p>
                            <p class="text-[10px] text-slate-500">
                                {{ formatReviews(t.reviews) }} reviews
                            </p>
                        </div>
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ t.hoursTaught }}
                                <svg aria-hidden="true" class="inline-block h-2.5 w-2.5 -translate-y-px text-blue-500"
                                    viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" />
                                    <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.6"
                                        stroke-linecap="round" />
                                </svg>
                            </p>
                            <p class="text-[10px] text-slate-500">hrs taught</p>
                        </div>
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ t.students }}
                                <svg aria-hidden="true" class="inline-block h-2.5 w-2.5 -translate-y-px text-violet-500"
                                    viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor"
                                        stroke-width="1.6" />
                                    <path d="M4 21c1.6-4 5-6 8-6s6.4 2 8 6" stroke="currentColor" stroke-width="1.6"
                                        stroke-linecap="round" />
                                </svg>
                            </p>
                            <p class="text-[10px] text-slate-500">students</p>
                        </div>
                    </div>

                    <!-- Body -->
                    <div class="flex flex-1 flex-col gap-2 px-4 py-3">
                        <p class="line-clamp-2 text-[11.5px] leading-snug text-slate-600">
                            {{ t.description }}
                        </p>
                        <p class="line-clamp-1 text-[11px] text-slate-500">
                            <template v-for="(l, idx) in t.languages" :key="l.name">
                                <span class="font-semibold text-slate-700">{{ l.name }}</span>
                                <span class="text-slate-400"> ({{ l.level }})</span>
                                <span v-if="idx < t.languages.length - 1"> · </span>
                            </template>
                        </p>

                        <div class="flex items-center justify-between">
                            <p class="font-display text-[15px] font-extrabold text-slate-900">
                                {{ inrFmt(t.pricePerHour) }}
                                <span class="text-[11px] font-medium text-slate-500">/hr</span>
                            </p>
                            <span class="text-[11px] font-semibold text-blue-600">Free demo</span>
                        </div>

                        <div class="mt-1 grid grid-cols-2 gap-2">
                            <button type="button"
                                class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                                View Profile
                            </button>
                            <button type="button"
                                class="rounded-lg bg-blue-600 px-2.5 py-1.5 text-[12px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(37,99,235,0.7)] transition hover:bg-blue-500">
                                Book Demo
                            </button>
                        </div>
                    </div>
                </article>

                <p v-if="!filteredTutors.length" data-slide
                    class="w-full shrink-0 snap-start rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-[13px] text-slate-500">
                    No tutors match your filters yet — try widening the grade or city.
                </p>
            </div>

            <div v-if="filteredTutors.length > 1" class="mt-4 flex justify-center gap-2" role="tablist"
                aria-label="Tutor slider pages">
                <button v-for="(t, idx) in filteredTutors" :key="`tutor-dot-${t.id}`" type="button" role="tab"
                    :aria-selected="tutorsActiveIndex === idx" :aria-label="`Go to tutor ${idx + 1}`"
                    @click="goToSlide(tutorsTrack, idx)" :class="[
                        'h-1.5 rounded-full transition-all duration-300',
                        tutorsActiveIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400',
                    ]"></button>
            </div>
        </div>

        <!-- =================== STUDENTS SLIDER =================== -->
        <div v-show="browseMode === 'students'" class="relative mt-4">
            <button type="button" @click="scrollSlider(studentsTrack, -1)" :disabled="studentsAtStart"
                aria-label="Previous students"
                class="absolute -left-2 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 lg:grid">
                <Icon icon="mdi:chevron-left" class="h-6 w-6" />
            </button>
            <button type="button" @click="scrollSlider(studentsTrack, 1)" :disabled="studentsAtEnd"
                aria-label="Next students"
                class="absolute -right-2 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 lg:grid">
                <Icon icon="mdi:chevron-right" class="h-6 w-6" />
            </button>

            <div ref="studentsTrack" @scroll.passive="onStudentsScroll"
                class="scrollbar-hide flex snap-x snap-mandatory scroll-pl-4 gap-5 overflow-x-auto px-1 pb-3 lg:scroll-pl-0">
                <article v-for="(s, i) in filteredStudents" :key="s.id" data-slide
                    class="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(37,99,235,0.32)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                    v-motion :initial="{ opacity: 0, y: 14 }"
                    :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 + i * 90 } }">
                    <!-- Header (blue gradient — slightly different shade from tutors) -->
                    <div
                        class="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 px-4 pb-3.5 pt-9 text-center">
                        <span v-if="s.urgent"
                            class="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-rose-500/95 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow ring-1 ring-white/30">
                            <span class="h-1 w-1 rounded-full bg-white"></span>
                            Urgent
                        </span>
                        <span
                            class="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20 backdrop-blur-sm">
                            {{ s.postedAgo }}
                        </span>

                        <div
                            class="relative z-[1] mx-auto h-16 w-16 rounded-full ring-2 ring-white/90 sm:h-[72px] sm:w-[72px]">
                            <img :src="s.photo" :alt="s.name" class="h-full w-full rounded-full object-cover shadow-md"
                                loading="lazy" />
                        </div>
                        <h3 class="mt-2 font-display text-[14.5px] font-bold leading-tight text-white">
                            {{ s.name }}
                        </h3>
                        <p class="mt-0.5 inline-flex items-center justify-center gap-1 text-[11px] text-blue-100">
                            <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M12 21s7-6.2 7-11.4A7 7 0 1 0 5 9.6C5 14.8 12 21 12 21z" stroke="currentColor"
                                    stroke-width="1.6" />
                                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" stroke-width="1.6" />
                            </svg>
                            {{ s.location }}
                        </p>

                        <div class="mt-2.5 flex flex-wrap items-center justify-center gap-1">
                            <span
                                class="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                                {{ s.grade }}
                            </span>
                            <span
                                class="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                                {{ s.board }}
                            </span>
                        </div>
                    </div>

                    <!-- Quick facts -->
                    <div
                        class="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100 bg-white px-2 py-2 text-center">
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ s.subjectsNeeded.length }}
                            </p>
                            <p class="text-[10px] text-slate-500">subjects</p>
                        </div>
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ s.hoursPerWeek }}
                            </p>
                            <p class="text-[10px] text-slate-500">hrs/week</p>
                        </div>
                        <div>
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900 capitalize">
                                {{ s.preferredMode }}
                            </p>
                            <p class="text-[10px] text-slate-500">mode</p>
                        </div>
                    </div>

                    <!-- Body -->
                    <div class="flex flex-1 flex-col gap-2 px-4 py-3">
                        <div class="flex flex-wrap gap-1">
                            <span v-for="sub in s.subjectsNeeded" :key="sub"
                                class="rounded-full bg-blue-50 px-2 py-0.5 text-[10.5px] font-semibold text-blue-700 ring-1 ring-blue-100">
                                {{ sub }}
                            </span>
                        </div>
                        <p class="line-clamp-2 text-[11.5px] leading-snug text-slate-600">
                            {{ s.description }}
                        </p>

                        <div class="flex items-center justify-between">
                            <p class="font-display text-[13.5px] font-extrabold text-slate-900">
                                {{ inrFmt(s.budgetMin) }}–{{ inrFmt(s.budgetMax) }}
                                <span class="text-[11px] font-medium text-slate-500">/hr</span>
                            </p>
                            <span class="text-[11px] font-semibold text-blue-600">Budget</span>
                        </div>

                        <div class="mt-1 grid grid-cols-2 gap-2">
                            <button type="button"
                                class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                                View Request
                            </button>
                            <button type="button"
                                class="rounded-lg bg-blue-600 px-2.5 py-1.5 text-[12px] font-semibold text-white shadow-[0_8px_18px_-10px_rgba(37,99,235,0.7)] transition hover:bg-blue-500">
                                Send Proposal
                            </button>
                        </div>
                    </div>
                </article>

                <p v-if="!filteredStudents.length" data-slide
                    class="w-full shrink-0 snap-start rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-[13px] text-slate-500">
                    No student requests match your filters — try a different grade or subject.
                </p>
            </div>

            <div v-if="filteredStudents.length > 1" class="mt-4 flex justify-center gap-2" role="tablist"
                aria-label="Student slider pages">
                <button v-for="(s, idx) in filteredStudents" :key="`student-dot-${s.id}`" type="button" role="tab"
                    :aria-selected="studentsActiveIndex === idx" :aria-label="`Go to student ${idx + 1}`"
                    @click="goToSlide(studentsTrack, idx)" :class="[
                        'h-1.5 rounded-full transition-all duration-300',
                        studentsActiveIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400',
                    ]"></button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.scrollbar-hide {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
