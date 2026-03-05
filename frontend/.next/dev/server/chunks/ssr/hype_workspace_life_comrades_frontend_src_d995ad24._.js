module.exports = [
"[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUT_DATA",
    ()=>ABOUT_DATA,
    "BLOG_CATEGORIES",
    ()=>BLOG_CATEGORIES,
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "JOBS_DATA",
    ()=>JOBS_DATA,
    "SERVICES_DATA",
    ()=>SERVICES_DATA,
    "WEBSITE_CONTENT",
    ()=>WEBSITE_CONTENT
]);
const SERVICES_DATA = {
    'home-nursing': {
        id: 'home-nursing',
        title: 'Home Nursing',
        description: 'Skilled nurses for medical care, recovery, and daily assistance.',
        about: 'Our home nursing service is designed to support patients who require professional medical care, recovery assistance, or ongoing health monitoring within the comfort of their home.',
        aboutDetails: 'Trained nurses provide clinical care, medication support, and assistance with daily health needs while maintaining safety and dignity.',
        whoItIsFor: [
            'Patients recovering after surgery',
            'Elderly individuals needing daily medical care',
            'Patients with chronic medical conditions',
            'Individuals requiring mobility assistance'
        ],
        features: [
            'Certified and trained professionals',
            'Background verified',
            'Experienced in clinical and home care',
            'Regularly monitored by our care team'
        ],
        faq: {
            question: 'How quickly can a nurse be assigned?',
            answer: 'Assignment depends on availability and service requirements. Our team will confirm details after booking submission.'
        },
        testimonial: {
            quote: 'The nurse was professional and caring throughout the service.',
            author: 'Anita, Chennai'
        },
        metadata: {
            title: 'Home Nursing Services in Chennai - Life Comrades',
            description: 'Professional home nursing care for post-surgery recovery, elderly care, and medical assistance at home in Chennai.',
            keywords: [
                'home nursing chennai',
                'private nurse at home',
                'medical care at home'
            ]
        }
    },
    'icu-home': {
        id: 'icu-home',
        title: 'ICU at Home',
        description: 'Advanced critical care with hospital-grade equipment at home.',
        about: 'Our ICU at Home service brings critical care expertise and hospital-grade equipment to your doorstep for patients who need intensive monitoring.',
        aboutDetails: 'We provide specialized nursing staff and essential medical devices to ensure the highest level of care in a familiar environment.',
        whoItIsFor: [
            'Patients requiring long-term ventilator support',
            'Patients with critical respiratory or cardiac conditions',
            'Post-operative patients needing high-intensity monitoring',
            'Patients who prefer home-based intensive care'
        ],
        features: [
            '24/7 critical care nursing',
            'Hospital-grade medical equipment',
            'Regular doctor consultations',
            'Continuous vital monitoring'
        ],
        faq: {
            question: 'What equipment is provided in the ICU setup?',
            answer: 'We provide ventilators, bipap/cpap machines, monitors, infusion pumps, and hospital beds as required.'
        },
        testimonial: {
            quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
            author: 'Vikas, Chennai'
        },
        metadata: {
            title: 'Critical Care & ICU at Home Chennai - Life Comrades',
            description: 'Hospital-grade ICU setup and 24/7 critical care nursing at home in Chennai. Advanced equipment and expert medical team.',
            keywords: [
                'icu at home chennai',
                'critical care home nursing',
                'ventilator setup at home'
            ]
        }
    },
    'elder-care': {
        id: 'elder-care',
        title: 'Elder Care',
        description: 'Compassionate medical and personal care for senior citizens.',
        about: 'Elder care services focus on the physical, emotional, and social needs of senior citizens, ensuring they lead a comfortable and dignified life.',
        aboutDetails: 'Our caregivers assist with daily activities, medication management, and provide companionship to help seniors maintain their independence.',
        whoItIsFor: [
            'Seniors requiring assistance with daily activities',
            'Elderly individuals with chronic age-related issues',
            'Seniors living alone who need safety monitoring',
            'Individuals needing companionship and emotional support'
        ],
        features: [
            'Trained geriatric caregivers',
            'Medication and diet management',
            'Assistance with personal hygiene',
            'Regular health check-ups'
        ],
        faq: {
            question: 'Are your caregivers trained specifically for senior care?',
            answer: 'Yes, our caregivers undergo specialized training in geriatric care, including mobility assistance and emergency response.'
        },
        testimonial: {
            quote: 'Excellent care for my mother. She feels very safe and happy with the caregiver.',
            author: 'Priya, Chennai'
        },
        metadata: {
            title: 'Elder Care Services in Chennai - Life Comrades',
            description: 'Compassionate elder care and geriatric support in Chennai. Trained caregivers for seniors requiring daily assistance and monitoring.',
            keywords: [
                'elder care chennai',
                'senior home care',
                'geriatric caregiver chennai'
            ]
        }
    },
    'physiotherapy': {
        id: 'physiotherapy',
        title: 'Physiotherapy',
        description: 'Personalized therapy sessions to restore mobility and strength.',
        about: 'In-home physiotherapy offers personalized rehabilitation plans to help patients recover from surgery, injury, or chronic pain in their own space.',
        aboutDetails: 'Our qualified physiotherapists use evidence-based techniques to improve mobility, strength, and overall physical function.',
        whoItIsFor: [
            'Patients recovering from orthopedic surgeries',
            'Individuals with sports injuries or chronic pain',
            'Patients needing stroke rehabilitation',
            'Seniors with mobility and balance issues'
        ],
        features: [
            'Qualified and registered physiotherapists',
            'Customized exercise routines',
            'Use of portable therapeutic equipment',
            'Progress tracking and regular assessments'
        ],
        faq: {
            question: 'How many sessions will I need?',
            answer: 'The number of sessions depends on your condition and recovery goals, which will be determined after the initial assessment.'
        },
        testimonial: {
            quote: 'The at-home physiotherapy helped me recover much faster after my knee surgery.',
            author: 'Ramesh, Chennai'
        },
        metadata: {
            title: 'Physiotherapy At Home in Chennai - Life Comrades',
            description: 'Personalized physiotherapy sessions at home for post-surgery recovery, sports injuries, and mobility issues in Chennai.',
            keywords: [
                'physiotherapy at home chennai',
                'physiotherapist home visit',
                'stroke rehabilitation chennai'
            ]
        }
    },
    'doctor-visit': {
        id: 'doctor-visit',
        title: 'Doctor Visit',
        description: 'Qualified doctors available for in-home medical consultations.',
        about: 'Home doctor visits provide convenient medical consultations for patients who find it difficult to travel to a clinic or hospital.',
        aboutDetails: 'Our doctors conduct thorough examinations, prescribe medications, and provide referrals for further diagnostic tests if needed.',
        whoItIsFor: [
            'Patients with acute illnesses needing consultation',
            'Seniors with chronic conditions requiring regular check-ups',
            'Housebound patients or those with mobility issues',
            'People seeking medical advice without hospital visits'
        ],
        features: [
            'Experienced general practitioners',
            'Scheduled and emergency visits available',
            'Thorough clinical examinations',
            'Digital prescription and follow-up'
        ],
        faq: {
            question: 'What happens if I need emergency care?',
            answer: 'Our doctors can stabilize patients and recommend immediate hospitalization if the condition is critical.'
        },
        testimonial: {
            quote: 'Very convenient to have a doctor visit home for my elderly parents.',
            author: 'S Suresh, Chennai'
        },
        metadata: {
            title: 'Home Doctor Visit Services in Chennai - Life Comrades',
            description: 'Consult qualified doctors at clinical examinations and prescriptions from the comfort of your home in Chennai.',
            keywords: [
                'doctor visit at home chennai',
                'home consultation doctor',
                'general physician home visit'
            ]
        }
    },
    'lab-tests': {
        id: 'lab-tests',
        title: 'Lab Tests',
        description: 'Sample collection and diagnostics from the comfort of home.',
        about: 'Our home lab test service offers safe and hygienic sample collection from your home, ensuring accurate and timely diagnostic reports.',
        aboutDetails: 'We partner with accredited laboratories to provide a wide range of tests, from basic blood work to comprehensive health packages.',
        whoItIsFor: [
            'Patients requiring regular blood monitoring',
            'Individuals seeking annual health check-ups',
            'Seniors who prefer avoiding diagnostic lab visits',
            'Busy professionals seeking convenience'
        ],
        features: [
            'Certified phlebotomists for collection',
            'Accredited and high-quality lab partners',
            'Digital report delivery via email/app',
            'Home sample collection at your preferred time'
        ],
        faq: {
            question: 'Is fasting required for all tests?',
            answer: 'Fasting requirements vary by test. Our team will provide specific instructions when you schedule your test.'
        },
        testimonial: {
            quote: 'Prompt service and accurate results. Sample collection was very professional.',
            author: 'Meera, Chennai'
        },
        metadata: {
            title: 'Lab Tests At Home Chennai - Sample Collection & Diagnostics',
            description: 'Hygienic home sample collection for blood tests and health check-ups in Chennai. Accurate results from accredited partner labs.',
            keywords: [
                'lab tests at home chennai',
                'blood test home collection',
                'diagnostic tests chennai'
            ]
        }
    }
};
const ABOUT_DATA = {
    mission: 'To provide compassionate, high-quality healthcare services that empower individuals to lead healthier lives in the comfort of their homes.',
    vision: 'To be the most trusted and innovative home healthcare provider in India, setting new standards for patient care and clinical excellence.',
    founders: [
        {
            name: 'Dr. Ramesh Kumar',
            role: 'Founder & CEO',
            bio: 'With over 20 years of experience in critical care and hospital administration, Dr. Ramesh founded Life Comrades to bridge the gap in home-based medical support.',
            image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=800&auto=format&fit=crop'
        }
    ],
    partners: [
        {
            name: 'Apollo Hospitals',
            logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Apollo_Hospitals_Logo.svg'
        },
        {
            name: 'Fortis Health',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Fortis_Healthcare_logo.svg'
        },
        {
            name: 'Dr. Lal PathLabs',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dr_Lal_PathLabs_logo.svg'
        }
    ],
    events: [
        {
            title: 'Free Health Camp 2024',
            date: 'January 15, 2024',
            description: 'We organized a free health check-up camp for local communities, serving over 500 seniors.',
            image: 'https://images.unsplash.com/photo-1576765625344-93e506637ef6?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Healthcare Innovation Summit',
            date: 'November 10, 2023',
            description: 'Life Comrades was recognized for its pioneering work in home-based ICU setups.',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
        }
    ]
};
const WEBSITE_CONTENT = {
    companyName: 'Life Comrades',
    tagline: 'Trusted Home Nursing & Healthcare Services',
    contact: {
        phone: '+91 XXXXX XXXXX',
        email: 'care@lifecomrades.com',
        address: 'Chennai, Tamil Nadu',
        cities: [
            'Chennai',
            'Coimbatore',
            'Madurai',
            'Tiruchirappalli',
            'Salem',
            'Erode',
            'Tirunelveli',
            'Tiruppur',
            'Thanjavur',
            'Vellore'
        ],
        social: {
            facebook: 'https://facebook.com/lifecomrades',
            whatsapp: 'https://wa.me/91XXXXXXXXXX',
            linkedin: 'https://linkedin.com/company/lifecomrades',
            instagram: 'https://instagram.com/lifecomrades'
        }
    },
    homeHero: {
        title: 'Professional Home Nursing & Healthcare Services',
        subtitle: 'Skilled nurses and caregivers delivered to your home, when you need them.'
    },
    testimonials: [
        {
            id: 't1',
            quote: 'The nurse was professional and caring throughout the service.',
            author: 'Anita',
            location: 'Chennai',
            serviceId: 'home-nursing'
        },
        {
            id: 't2',
            quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
            author: 'Vikas',
            location: 'Chennai',
            serviceId: 'icu-home'
        }
    ],
    aboutPage: ABOUT_DATA,
    globalMetadata: {
        title: 'Life Comrades - Home Nursing & Healthcare Services in Chennai',
        description: 'Life Comrades provides professional home nursing, ICU at home, elder care, physiotherapy, and lab tests at home. Available across major cities in Tamil Nadu.',
        keywords: [
            'home nursing',
            'healthcare services',
            'elder care chennai',
            'icu at home',
            'physiotherapy at home'
        ]
    },
    pagesMetadata: {
        'home': {
            title: 'Life Comrades | Professional Home Healthcare in Chennai',
            description: 'Top-rated home nursing, ICU at home, and elder care services in Chennai. Certified caregivers and medical professionals at your doorstep.',
            keywords: [
                'home nursing chennai',
                'elder care services',
                'healthcare at home'
            ]
        },
        'about': {
            title: 'About Us - Life Comrades Home Healthcare',
            description: 'Learn about Life Comrades, our mission, vision, and the team behind our trusted home nursing and healthcare services.',
            keywords: [
                'about life comrades',
                'healthcare mission',
                'nursing service history'
            ]
        },
        'contact': {
            title: 'Contact Us - Life Comrades Home Healthcare',
            description: 'Get in touch with Life Comrades for professional home nursing and healthcare services. We are available 24/7 for your needs.',
            keywords: [
                'contact life comrades',
                'home care support',
                'medical assistance contact'
            ]
        },
        'services': {
            title: 'Our Home Healthcare Services - Life Comrades',
            description: 'Comprehensive home nursing, ICU at home, elder care, and physiotherapy services in Chennai. Professional medical care at your convenience.',
            keywords: [
                'home nursing services',
                'icu at home',
                'physiotherapy chennai'
            ]
        },
        'book': {
            title: 'Book a Service - Life Comrades',
            description: 'Schedule professional home nursing, ICU at home, or diagnostic tests easily. Quality healthcare is just a booking away.',
            keywords: [
                'book home nursing',
                'schedule medical test',
                'request caregiver'
            ]
        },
        'jobs': {
            title: 'Careers & Job Openings - Join Life Comrades',
            description: 'Explore career opportunities for nurses, caregivers, and healthcare professionals at Life Comrades. Apply to join our team today.',
            keywords: [
                'nursing jobs chennai',
                'home care jobs',
                'healthcare careers'
            ]
        }
    }
};
const BLOG_POSTS = [
    {
        "id": "featured-1",
        "category": "Home Nursing",
        "title": "The Future of Patient-Centric Care: How Modern Healthcare Agencies Are Redefining Support",
        "description": "Healthcare is evolving rapidly, and agencies have a unique opportunity to shape the future of patient experiences.",
        "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200",
        "readTime": "8 min read",
        "author": "Chennai Healthcare Team",
        "date": "Feb 17, 2026",
        "isFeatured": true,
        "content": [
            {
                "heading": "Why Patient Expectations Are Changing",
                "content": "Technology has reshaped nearly every industry, and healthcare is no exception. Patients are more informed than ever before. They compare services online, read reviews, and expect transparency in both treatment and communication.",
                "list": [
                    "Faster appointment scheduling and digital communication",
                    "Clear, empathetic guidance throughout treatment",
                    "Coordinated care between professionals",
                    "Reliable follow-up and long-term support"
                ]
            },
            {
                "heading": "Conclusion",
                "content": "By prioritizing collaboration, technology, and human connection, agencies can deliver care that is not only efficient but genuinely impactful."
            }
        ]
    },
    {
        "id": "post-1",
        "category": "Elder Care",
        "title": "5 Daily Care Tips for Seniors Recovering at Home",
        "description": "Simple routines that improve safety, comfort, and recovery for elderly patients.",
        "image": "https://images.unsplash.com/photo-1581578731522-6b6dea1d21c8?q=80&w=800",
        "readTime": "4 min read",
        "author": "Elder Care Specialist",
        "date": "Feb 10, 2025",
        "content": [
            {
                "heading": "Maintaining a Safe Environment",
                "content": "Safety is the top priority for seniors recovering at home. A few simple adjustments can significantly reduce the risk of falls and injuries.",
                "list": [
                    "Remove loose rugs and clutter from walkways",
                    "Ensure adequate lighting in all rooms, especially at night",
                    "Install grab bars in bathrooms and near beds",
                    "Keep essential items within easy reach"
                ]
            },
            {
                "heading": "Medication Management",
                "content": "Consistent medication is crucial for recovery. Use pill organizers and set reminders to ensure no doses are missed, and keep a log of all medications taken.",
                "list": [
                    "Use a weekly pill organizer",
                    "Set digital alarms for each dose",
                    "Keep an updated list of all medications for doctors",
                    "Monitor for any potential side effects"
                ]
            },
            {
                "heading": "The Importance of Social Interaction",
                "content": "Recovery isn't just physical; emotional well-being plays a huge role. Regular social interaction helps seniors maintain a positive outlook and speeds up the healing process."
            }
        ]
    },
    {
        "id": "post-2",
        "category": "Post-Op Recovery",
        "title": "Managing Wound Care After Surgery: A Guide for Families",
        "description": "Essential steps to prevent infection and promote faster healing after a hospital discharge.",
        "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
        "readTime": "6 min read",
        "author": "Clinical Supervisor",
        "date": "Feb 08, 2025",
        "content": [
            {
                "heading": "Keeping the Wound Clean and Dry",
                "content": "Proper hygiene is the foundation of effective wound care. Always follow the specific instructions provided by your surgical team regarding when and how to clean the area.",
                "list": [
                    "Wash hands thoroughly before touching the wound area",
                    "Avoid using unapproved creams or ointments",
                    "Keep the dressing dry unless otherwise instructed",
                    "Change dressings as scheduled by your healthcare provider"
                ]
            },
            {
                "heading": "Recognizing Signs of Infection",
                "content": "Early detection of infection can prevent serious complications. Contact your doctor immediately if you notice any of the following:",
                "list": [
                    "Increased redness or swelling around the wound",
                    "Foul-smelling discharge or pus",
                    "Fever or chills",
                    "Increased pain at the surgical site"
                ]
            }
        ]
    },
    {
        "id": "post-3",
        "category": "Physiotherapy",
        "title": "The Role of Home Physiotherapy in Stroke Recovery",
        "description": "How personalized exercise programs at home help stroke survivors regain mobility and independence.",
        "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800",
        "readTime": "7 min read",
        "author": "Sr. Physiotherapist",
        "date": "Feb 05, 2025",
        "content": [
            {
                "heading": "Restoring Mobility Through Repetition",
                "content": "Consistency is key in neuro-rehabilitation. Regular physiotherapy helps the brain 'rewire' itself, a process known as neuroplasticity.",
                "list": [
                    "Range-of-motion exercises to prevent joint stiffness",
                    "Strength training to regain muscle control",
                    "Balance exercises to improve walking stability",
                    "Task-specific training for daily activities"
                ]
            },
            {
                "heading": "The Benefits of Home-Based Therapy",
                "content": "Receiving therapy in a familiar environment reduces stress and allows the therapist to tailor exercises to the patient's actual living space.",
                "list": [
                    "Increased comfort and privacy",
                    "Focus on practical, real-world movements",
                    "Family involvement in the recovery process",
                    "Elimination of travel-related fatigue"
                ]
            }
        ]
    },
    {
        "id": "post-4",
        "category": "Mental Health",
        "title": "Coping with Caregiver Burnout: Taking Care of Yourself",
        "description": "Practical advice for family members on balancing patient care with personal well-being.",
        "image": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
        "readTime": "4 min read",
        "author": "Wellness Counselor",
        "date": "Feb 01, 2025",
        "content": [
            {
                "heading": "Identifying the Warning Signs",
                "content": "Caregiver burnout is a state of physical, emotional, and mental exhaustion. Recognizing the signs early is essential for your health and the quality of care you provide.",
                "list": [
                    "Feeling overwhelmed or constantly worried",
                    "Getting too much sleep or not enough",
                    "Losing interest in activities you used to enjoy",
                    "Becoming easily irritated or angry"
                ]
            },
            {
                "heading": "Strategies for Self-Care",
                "content": "You cannot pour from an empty cup. Taking small breaks and asking for help are not signs of weakness, but necessary steps for sustainability.",
                "list": [
                    "Schedule dedicated 'me time' every day",
                    "Join a support group for caregivers",
                    "Accept help from friends and family",
                    "Maintain your own health check-ups and hobbies"
                ]
            }
        ]
    },
    {
        "id": "post-5",
        "category": "Medical Tech",
        "title": "Essential Medical Equipment for Setting Up a Home ICU",
        "description": "A checklist of necessary monitors, beds, and support systems for critical care at home.",
        "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
        "readTime": "5 min read",
        "author": "Technical Lead",
        "date": "Jan 28, 2025",
        "content": [
            {
                "heading": "Core Monitoring Devices",
                "content": "A home ICU setup requires precise monitoring to ensure patient safety. These devices provide real-time data to healthcare professionals.",
                "list": [
                    "Multi-para monitors for vitals",
                    "Pulse oximeters for oxygen levels",
                    "Infusion pumps for precise medication delivery",
                    "Oxygen concentrators or cylinders"
                ]
            },
            {
                "heading": "Comfort and Mobility",
                "content": "Specialized furniture is essential for both patient comfort and the ease of providing care by nursing staff.",
                "list": [
                    "Electric hospital beds with adjustable positions",
                    "Air mattresses to prevent pressure sores",
                    "Suction machines for airway clearance",
                    "Patient hoists for safe transfers"
                ]
            }
        ]
    },
    {
        "id": "post-6",
        "category": "Nutrition",
        "title": "Dietary Requirements for Patients with Chronic Illness",
        "description": "How specialized nutrition plans can significantly impact the management of diabetes and hypertension.",
        "image": "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
        "readTime": "4 min read",
        "author": "Dietary Consultant",
        "date": "Jan 25, 2025",
        "content": [
            {
                "heading": "Managing Nutrition at Home",
                "content": "The right diet can be as powerful as medication in managing chronic conditions. Tailoring your nutritional intake helps stabilize health markers.",
                "list": [
                    "Low-sodium plans for managing hypertension",
                    "Consistent carbohydrate intake for diabetics",
                    "High-protein options for tissue repair and recovery",
                    "Adequate hydration throughout the day"
                ]
            },
            {
                "heading": "Practical Meal Planning",
                "content": "Preparing healthy meals doesn't have to be complicated. Simple routines can help you stay on track with your nutritional goals.",
                "list": [
                    "Prepare 'batch' meals for the week",
                    "Focus on whole, unprocessed foods",
                    "Consult with a nutritionist for personalized plans",
                    "Keep a food diary to track impacts on health"
                ]
            }
        ]
    }
];
const JOBS_DATA = [
    {
        id: 'staff-nurse-chennai',
        title: 'Staff Nurse (Home Healthcare)',
        category: 'Nursing',
        type: 'Full-time',
        location: 'Chennai',
        salary: '₹25,000 - ₹35,000',
        postedDate: 'Feb 15, 2026',
        description: 'We are looking for compassionate and skilled Staff Nurses to provide high-quality medical care to patients in their homes.',
        requirements: [
            'B.Sc Nursing or GNM degree',
            'Valid state nursing council registration',
            'Minimum 1-2 years of clinical experience',
            'Good communication skills in Tamil and English'
        ],
        responsibilities: [
            'Monitor patient vitals and health status',
            'Administer medications and injections',
            'Provide wound care and post-surgical support',
            'Maintain accurate medical records and reports'
        ]
    },
    {
        id: 'icu-nurse-home',
        title: 'ICU Critical Care Nurse',
        category: 'Critical Care',
        type: 'Full-time',
        location: 'Chennai',
        salary: '₹35,000 - ₹50,000',
        postedDate: 'Feb 18, 2026',
        description: 'Specialized role for nurses experienced in ICU settings to manage critical patients at home with advanced equipment.',
        requirements: [
            '3+ years of ICU experience in a reputed hospital',
            'Expertise in handling ventilators and monitors',
            'ACLS/BLS certification is a plus',
            'Ability to handle emergencies independently'
        ],
        responsibilities: [
            '24/7 monitoring of critical patients',
            'Managing ventilators and infusion pumps',
            'Coordinating with attending doctors',
            'Providing emergency intervention if required'
        ]
    },
    {
        id: 'physiotherapist-home',
        title: 'Home Physiotherapist',
        category: 'Physiotherapy',
        type: 'Part-time / Contract',
        location: 'Chennai',
        salary: 'Per session basis',
        postedDate: 'Feb 10, 2026',
        description: 'Join our team to provide personalized physiotherapy sessions to patients recovering from surgery or injury.',
        requirements: [
            'Bachelor of Physiotherapy (BPT)',
            'Experience in orthopedic or neurological rehab',
            'Willingness to travel to patient locations',
            'Excellent patient handling skills'
        ],
        responsibilities: [
            'Assess patient condition and mobility',
            'Develop customized rehabilitation plans',
            'Conduct regular therapy sessions',
            'Track and report patient progress'
        ]
    }
];
const BLOG_CATEGORIES = [
    'ALL',
    ...Array.from(new Set(BLOG_POSTS.map((post)=>post.category.toUpperCase())))
];
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function JobDetailPage({ params }) {
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const job = __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOBS_DATA"].find((j)=>j.id === resolvedParams.id);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        mobile: '',
        email: '',
        tenthStatus: 'Passed',
        tenthMarks: '',
        twelfthStatus: 'Passed',
        twelfthMarks: '',
        nursingQualification: 'ANM',
        isGovtRegistered: 'No',
        registrationNumber: '',
        experienceLevel: 'Fresher',
        currentAddress: '',
        nativeAddress: '',
        message: ''
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!job) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Basic validation
        if (formData.fullName.length < 3) {
            alert('Full Name must be at least 3 characters.');
            return;
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            alert('Contact Number must be exactly 10 digits.');
            return;
        }
        setSubmitting(true);
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        console.log('Job Application Submitted:', {
            jobId: job.id,
            jobTitle: job.title,
            ...formData,
            isGovtRegistered: formData.isGovtRegistered === 'Yes'
        });
        setSubmitting(false);
        setSubmitted(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-38d4ea40b196ff63" + " " + "bg-light min-vh-100 pb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-38d4ea40b196ff63" + " " + "bg-white border-bottom py-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-38d4ea40b196ff63" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "breadcrumb",
                            className: "jsx-38d4ea40b196ff63" + " " + "mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "jsx-38d4ea40b196ff63" + " " + "breadcrumb mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "breadcrumb-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/jobs",
                                            children: "Jobs"
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 61
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        "aria-current": "page",
                                        className: "jsx-38d4ea40b196ff63" + " " + "breadcrumb-item active",
                                        children: job.title
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-38d4ea40b196ff63" + " " + "d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-38d4ea40b196ff63",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "badge bg-primary-subtle text-primary mb-2 px-3 py-2",
                                        children: job.category
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "h2 fw-bold text-dark mb-0",
                                        children: job.title
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "text-secondary mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "bi bi-geo-alt me-2"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 33
                                            }, this),
                                            job.location,
                                            " • ",
                                            job.type,
                                            " • Posted on ",
                                            job.postedDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-38d4ea40b196ff63" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-38d4ea40b196ff63" + " " + "row g-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-38d4ea40b196ff63" + " " + "col-lg-7 col-xl-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-38d4ea40b196ff63" + " " + "card border-0 shadow-sm p-4 p-md-5 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "h4 fw-bold text-dark mb-4",
                                                children: "About the Role"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "text-secondary leading-relaxed",
                                                children: job.description
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "h4 fw-bold text-dark mb-4",
                                                children: "Key Responsibilities"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "list-group list-group-flush border-0",
                                                children: job.responsibilities.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-38d4ea40b196ff63" + " " + "list-group-item border-0 bg-transparent px-0 py-2 d-flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-38d4ea40b196ff63" + " " + "bi bi-check2-circle text-primary me-3 mt-1 fs-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-38d4ea40b196ff63" + " " + "text-secondary",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "jsx-38d4ea40b196ff63",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "h4 fw-bold text-dark mb-4",
                                                children: "Requirements"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "list-group list-group-flush border-0",
                                                children: job.requirements.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-38d4ea40b196ff63" + " " + "list-group-item border-0 bg-transparent px-0 py-2 d-flex",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "jsx-38d4ea40b196ff63" + " " + "bi bi-dot text-primary me-2 fs-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-38d4ea40b196ff63" + " " + "text-secondary",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-38d4ea40b196ff63" + " " + "col-lg-5 col-xl-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "apply-form",
                                style: {
                                    top: '6rem'
                                },
                                className: "jsx-38d4ea40b196ff63" + " " + "card border-0 shadow-sm overflow-hidden sticky-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "card-header bg-dark text-white p-4 border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "h5 fw-bold mb-0",
                                                children: "Apply for Position"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-38d4ea40b196ff63" + " " + "small text-secondary mb-0 mt-1",
                                                children: "Please fill in your details accurately."
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-38d4ea40b196ff63" + " " + "card-body p-4",
                                        children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-38d4ea40b196ff63" + " " + "text-center py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-38d4ea40b196ff63" + " " + "display-4 text-success mb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "jsx-38d4ea40b196ff63" + " " + "bi bi-check-circle-fill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-38d4ea40b196ff63" + " " + "fw-bold",
                                                    children: "Application Sent!"
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-38d4ea40b196ff63" + " " + "text-secondary",
                                                    children: "Thank you for applying. Our HR team will review your application and get back to you soon."
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSubmitted(false),
                                                    className: "jsx-38d4ea40b196ff63" + " " + "btn btn-outline-primary mt-3",
                                                    children: "Submit another application"
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            className: "jsx-38d4ea40b196ff63",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-38d4ea40b196ff63" + " " + "row g-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Full Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "fullName",
                                                                    required: true,
                                                                    placeholder: "Min 3 characters",
                                                                    value: formData.fullName,
                                                                    onChange: handleChange,
                                                                    minLength: 3,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Contact Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    name: "mobile",
                                                                    required: true,
                                                                    placeholder: "10-digit mobile",
                                                                    value: formData.mobile,
                                                                    onChange: handleChange,
                                                                    pattern: "\\d{10}",
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Email Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    name: "email",
                                                                    required: true,
                                                                    placeholder: "Standard format",
                                                                    value: formData.email,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "10th Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "tenthStatus",
                                                                    value: formData.tenthStatus,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-select",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Passed",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Passed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 195,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Failed",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Failed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 196,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 45
                                                        }, this),
                                                        formData.tenthStatus === 'Passed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "10th Marks (%)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "tenthMarks",
                                                                    required: true,
                                                                    placeholder: "e.g. 85",
                                                                    value: formData.tenthMarks,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "12th Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "twelfthStatus",
                                                                    value: formData.twelfthStatus,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-select",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Passed",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Passed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 216,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Failed",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Failed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Diploma",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Diploma"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 45
                                                        }, this),
                                                        formData.twelfthStatus === 'Passed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-md-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "12th Marks (%)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "twelfthMarks",
                                                                    required: true,
                                                                    placeholder: "e.g. 90",
                                                                    value: formData.twelfthMarks,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Nursing Qualification"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "nursingQualification",
                                                                    value: formData.nursingQualification,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-select",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "ANM",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "ANM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "GNM",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "GNM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 239,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "B.Sc Nursing",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "B.Sc Nursing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Post Basic B.Sc",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Post Basic B.Sc"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "M.Sc Nursing",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "M.Sc Nursing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark d-block",
                                                                    children: "Govt. Registered?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-check form-check-inline",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            name: "isGovtRegistered",
                                                                            id: "regYes",
                                                                            value: "Yes",
                                                                            checked: formData.isGovtRegistered === 'Yes',
                                                                            onChange: handleChange,
                                                                            className: "jsx-38d4ea40b196ff63" + " " + "form-check-input"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 248,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "regYes",
                                                                            className: "jsx-38d4ea40b196ff63" + " " + "form-check-label",
                                                                            children: "Yes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-check form-check-inline",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            name: "isGovtRegistered",
                                                                            id: "regNo",
                                                                            value: "No",
                                                                            checked: formData.isGovtRegistered === 'No',
                                                                            onChange: handleChange,
                                                                            className: "jsx-38d4ea40b196ff63" + " " + "form-check-input"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            htmlFor: "regNo",
                                                                            className: "jsx-38d4ea40b196ff63" + " " + "form-check-label",
                                                                            children: "No"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 45
                                                        }, this),
                                                        formData.isGovtRegistered === 'Yes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Registration Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "registrationNumber",
                                                                    required: true,
                                                                    placeholder: "Enter number",
                                                                    value: formData.registrationNumber,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Experience Level"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "experienceLevel",
                                                                    value: formData.experienceLevel,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-select",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Fresher",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "Fresher"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "<1 Year",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "<1 Year"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 276,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "1-3 Years",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "1-3 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 277,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "3-5 Years",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "3-5 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "5+ Years",
                                                                            className: "jsx-38d4ea40b196ff63",
                                                                            children: "5+ Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                            lineNumber: 279,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Current Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "currentAddress",
                                                                    required: true,
                                                                    rows: 2,
                                                                    placeholder: "Street address + City",
                                                                    value: formData.currentAddress,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Native Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "nativeAddress",
                                                                    required: true,
                                                                    rows: 2,
                                                                    placeholder: "Permanent home address",
                                                                    value: formData.nativeAddress,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-38d4ea40b196ff63" + " " + "col-12",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-label fw-bold small text-dark",
                                                                    children: "Message (Optional)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    name: "message",
                                                                    rows: 2,
                                                                    placeholder: "Additional info...",
                                                                    value: formData.message,
                                                                    onChange: handleChange,
                                                                    className: "jsx-38d4ea40b196ff63" + " " + "form-control"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: submitting,
                                                    className: "jsx-38d4ea40b196ff63" + " " + "btn btn-primary w-100 fw-bold py-2 mt-4",
                                                    children: submitting ? 'Submitting...' : 'Submit Application'
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "38d4ea40b196ff63",
                children: ".leading-relaxed.jsx-38d4ea40b196ff63{line-height:1.7}.breadcrumb-item.jsx-38d4ea40b196ff63 a.jsx-38d4ea40b196ff63{color:var(--bs-primary);text-decoration:none}.breadcrumb-item.active.jsx-38d4ea40b196ff63{color:var(--bs-secondary)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/jobs/[id]/page.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_d995ad24._.js.map