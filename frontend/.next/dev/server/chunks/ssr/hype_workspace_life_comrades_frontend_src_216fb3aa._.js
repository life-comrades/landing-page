module.exports = [
"[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { WebsiteContent, ServicesData, BlogPost, JobListing, AboutData } from '../types';
// export const SERVICES_DATA: ServicesData = {
//     'home-nursing': {
//         id: 'home-nursing',
//         title: 'Home Nursing',
//         description: 'Skilled nurses for medical care, recovery, and daily assistance.',
//         about: 'Our home nursing service is designed to support patients who require professional medical care, recovery assistance, or ongoing health monitoring within the comfort of their home.',
//         aboutDetails: 'Trained nurses provide clinical care, medication support, and assistance with daily health needs while maintaining safety and dignity.',
//         whoItIsFor: [
//             'Patients recovering after surgery',
//             'Elderly individuals needing daily medical care',
//             'Patients with chronic medical conditions',
//             'Individuals requiring mobility assistance'
//         ],
//         features: [
//             'Certified and trained professionals',
//             'Background verified',
//             'Experienced in clinical and home care',
//             'Regularly monitored by our care team'
//         ],
//         faq: {
//             question: 'How quickly can a nurse be assigned?',
//             answer: 'Assignment depends on availability and service requirements. Our team will confirm details after booking submission.'
//         },
//         testimonial: {
//             quote: 'The nurse was professional and caring throughout the service.',
//             author: 'Anita, Chennai'
//         },
//         metadata: {
//             title: 'Home Nursing Services in Chennai - Life Comrades',
//             description: 'Professional home nursing care for post-surgery recovery, elderly care, and medical assistance at home in Chennai.',
//             keywords: ['home nursing chennai', 'private nurse at home', 'medical care at home']
//         }
//     },
//     'icu-home': {
//         id: 'icu-home',
//         title: 'ICU at Home',
//         description: 'Advanced critical care with hospital-grade equipment at home.',
//         about: 'Our ICU at Home service brings critical care expertise and hospital-grade equipment to your doorstep for patients who need intensive monitoring.',
//         aboutDetails: 'We provide specialized nursing staff and essential medical devices to ensure the highest level of care in a familiar environment.',
//         whoItIsFor: [
//             'Patients requiring long-term ventilator support',
//             'Patients with critical respiratory or cardiac conditions',
//             'Post-operative patients needing high-intensity monitoring',
//             'Patients who prefer home-based intensive care'
//         ],
//         features: [
//             '24/7 critical care nursing',
//             'Hospital-grade medical equipment',
//             'Regular doctor consultations',
//             'Continuous vital monitoring'
//         ],
//         faq: {
//             question: 'What equipment is provided in the ICU setup?',
//             answer: 'We provide ventilators, bipap/cpap machines, monitors, infusion pumps, and hospital beds as required.'
//         },
//         testimonial: {
//             quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
//             author: 'Vikas, Chennai'
//         },
//         metadata: {
//             title: 'Critical Care & ICU at Home Chennai - Life Comrades',
//             description: 'Hospital-grade ICU setup and 24/7 critical care nursing at home in Chennai. Advanced equipment and expert medical team.',
//             keywords: ['icu at home chennai', 'critical care home nursing', 'ventilator setup at home']
//         }
//     },
//     'elder-care': {
//         id: 'elder-care',
//         title: 'Elder Care',
//         description: 'Compassionate medical and personal care for senior citizens.',
//         about: 'Elder care services focus on the physical, emotional, and social needs of senior citizens, ensuring they lead a comfortable and dignified life.',
//         aboutDetails: 'Our caregivers assist with daily activities, medication management, and provide companionship to help seniors maintain their independence.',
//         whoItIsFor: [
//             'Seniors requiring assistance with daily activities',
//             'Elderly individuals with chronic age-related issues',
//             'Seniors living alone who need safety monitoring',
//             'Individuals needing companionship and emotional support'
//         ],
//         features: [
//             'Trained geriatric caregivers',
//             'Medication and diet management',
//             'Assistance with personal hygiene',
//             'Regular health check-ups'
//         ],
//         faq: {
//             question: 'Are your caregivers trained specifically for senior care?',
//             answer: 'Yes, our caregivers undergo specialized training in geriatric care, including mobility assistance and emergency response.'
//         },
//         testimonial: {
//             quote: 'Excellent care for my mother. She feels very safe and happy with the caregiver.',
//             author: 'Priya, Chennai'
//         },
//         metadata: {
//             title: 'Elder Care Services in Chennai - Life Comrades',
//             description: 'Compassionate elder care and geriatric support in Chennai. Trained caregivers for seniors requiring daily assistance and monitoring.',
//             keywords: ['elder care chennai', 'senior home care', 'geriatric caregiver chennai']
//         }
//     },
//     'physiotherapy': {
//         id: 'physiotherapy',
//         title: 'Physiotherapy',
//         description: 'Personalized therapy sessions to restore mobility and strength.',
//         about: 'In-home physiotherapy offers personalized rehabilitation plans to help patients recover from surgery, injury, or chronic pain in their own space.',
//         aboutDetails: 'Our qualified physiotherapists use evidence-based techniques to improve mobility, strength, and overall physical function.',
//         whoItIsFor: [
//             'Patients recovering from orthopedic surgeries',
//             'Individuals with sports injuries or chronic pain',
//             'Patients needing stroke rehabilitation',
//             'Seniors with mobility and balance issues'
//         ],
//         features: [
//             'Qualified and registered physiotherapists',
//             'Customized exercise routines',
//             'Use of portable therapeutic equipment',
//             'Progress tracking and regular assessments'
//         ],
//         faq: {
//             question: 'How many sessions will I need?',
//             answer: 'The number of sessions depends on your condition and recovery goals, which will be determined after the initial assessment.'
//         },
//         testimonial: {
//             quote: 'The at-home physiotherapy helped me recover much faster after my knee surgery.',
//             author: 'Ramesh, Chennai'
//         },
//         metadata: {
//             title: 'Physiotherapy At Home in Chennai - Life Comrades',
//             description: 'Personalized physiotherapy sessions at home for post-surgery recovery, sports injuries, and mobility issues in Chennai.',
//             keywords: ['physiotherapy at home chennai', 'physiotherapist home visit', 'stroke rehabilitation chennai']
//         }
//     },
//     'doctor-visit': {
//         id: 'doctor-visit',
//         title: 'Doctor Visit',
//         description: 'Qualified doctors available for in-home medical consultations.',
//         about: 'Home doctor visits provide convenient medical consultations for patients who find it difficult to travel to a clinic or hospital.',
//         aboutDetails: 'Our doctors conduct thorough examinations, prescribe medications, and provide referrals for further diagnostic tests if needed.',
//         whoItIsFor: [
//             'Patients with acute illnesses needing consultation',
//             'Seniors with chronic conditions requiring regular check-ups',
//             'Housebound patients or those with mobility issues',
//             'People seeking medical advice without hospital visits'
//         ],
//         features: [
//             'Experienced general practitioners',
//             'Scheduled and emergency visits available',
//             'Thorough clinical examinations',
//             'Digital prescription and follow-up'
//         ],
//         faq: {
//             question: 'What happens if I need emergency care?',
//             answer: 'Our doctors can stabilize patients and recommend immediate hospitalization if the condition is critical.'
//         },
//         testimonial: {
//             quote: 'Very convenient to have a doctor visit home for my elderly parents.',
//             author: 'S Suresh, Chennai'
//         },
//         metadata: {
//             title: 'Home Doctor Visit Services in Chennai - Life Comrades',
//             description: 'Consult qualified doctors at clinical examinations and prescriptions from the comfort of your home in Chennai.',
//             keywords: ['doctor visit at home chennai', 'home consultation doctor', 'general physician home visit']
//         }
//     },
//     'lab-tests': {
//         id: 'lab-tests',
//         title: 'Lab Tests',
//         description: 'Sample collection and diagnostics from the comfort of home.',
//         about: 'Our home lab test service offers safe and hygienic sample collection from your home, ensuring accurate and timely diagnostic reports.',
//         aboutDetails: 'We partner with accredited laboratories to provide a wide range of tests, from basic blood work to comprehensive health packages.',
//         whoItIsFor: [
//             'Patients requiring regular blood monitoring',
//             'Individuals seeking annual health check-ups',
//             'Seniors who prefer avoiding diagnostic lab visits',
//             'Busy professionals seeking convenience'
//         ],
//         features: [
//             'Certified phlebotomists for collection',
//             'Accredited and high-quality lab partners',
//             'Digital report delivery via email/app',
//             'Home sample collection at your preferred time'
//         ],
//         faq: {
//             question: 'Is fasting required for all tests?',
//             answer: 'Fasting requirements vary by test. Our team will provide specific instructions when you schedule your test.'
//         },
//         testimonial: {
//             quote: 'Prompt service and accurate results. Sample collection was very professional.',
//             author: 'Meera, Chennai'
//         },
//         metadata: {
//             title: 'Lab Tests At Home Chennai - Sample Collection & Diagnostics',
//             description: 'Hygienic home sample collection for blood tests and health check-ups in Chennai. Accurate results from accredited partner labs.',
//             keywords: ['lab tests at home chennai', 'blood test home collection', 'diagnostic tests chennai']
//         }
//     }
// };
// export const ABOUT_DATA: AboutData = {
//     mission: 'To provide compassionate, high-quality healthcare services that empower individuals to lead healthier lives in the comfort of their homes.',
//     vision: 'To be the most trusted and innovative home healthcare provider in India, setting new standards for patient care and clinical excellence.',
//     founders: [
//         {
//             name: 'Dr. Ramesh Kumar',
//             role: 'Founder & CEO',
//             bio: 'With over 20 years of experience in critical care and hospital administration, Dr. Ramesh founded Life Comrades to bridge the gap in home-based medical support.',
//             image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=800&auto=format&fit=crop'
//         }
//     ],
//     partners: [
//         { name: 'Apollo Hospitals', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Apollo_Hospitals_Logo.svg' },
//         { name: 'Fortis Health', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Fortis_Healthcare_logo.svg' },
//         { name: 'Dr. Lal PathLabs', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Dr_Lal_PathLabs_logo.svg' }
//     ],
//     events: [
//         {
//             title: 'Free Health Camp 2024',
//             date: 'January 15, 2024',
//             description: 'We organized a free health check-up camp for local communities, serving over 500 seniors.',
//             image: 'https://images.unsplash.com/photo-1576765625344-93e506637ef6?q=80&w=800&auto=format&fit=crop'
//         },
//         {
//             title: 'Healthcare Innovation Summit',
//             date: 'November 10, 2023',
//             description: 'Life Comrades was recognized for its pioneering work in home-based ICU setups.',
//             image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
//         }
//     ]
// };
// export const WEBSITE_CONTENT: WebsiteContent = {
//     companyName: 'Life Comrades',
//     tagline: 'Trusted Home Nursing & Healthcare Services',
//     contact: {
//         phone: '+91 XXXXX XXXXX',
//         email: 'care@lifecomrades.com',
//         address: 'Chennai, Tamil Nadu',
//         cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Tirunelveli', 'Tiruppur', 'Thanjavur', 'Vellore'],
//         social: {
//             facebook: 'https://facebook.com/lifecomrades',
//             whatsapp: 'https://wa.me/91XXXXXXXXXX',
//             linkedin: 'https://linkedin.com/company/lifecomrades',
//             instagram: 'https://instagram.com/lifecomrades'
//         }
//     },
//     homeHero: {
//         title: 'Professional Home Nursing & Healthcare Services',
//         subtitle: 'Skilled nurses and caregivers delivered to your home, when you need them.',
//     },
//     testimonials: [
//         {
//             id: 't1',
//             quote: 'The nurse was professional and caring throughout the service.',
//             author: 'Anita',
//             location: 'Chennai',
//             serviceId: 'home-nursing'
//         },
//         {
//             id: 't2',
//             quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
//             author: 'Vikas',
//             location: 'Chennai',
//             serviceId: 'icu-home'
//         }
//     ],
//     aboutPage: ABOUT_DATA,
//     globalMetadata: {
//         title: 'Life Comrades - Home Nursing & Healthcare Services in Chennai',
//         description: 'Life Comrades provides professional home nursing, ICU at home, elder care, physiotherapy, and lab tests at home. Available across major cities in Tamil Nadu.',
//         keywords: ['home nursing', 'healthcare services', 'elder care chennai', 'icu at home', 'physiotherapy at home']
//     },
//     pagesMetadata: {
//         'home': {
//             title: 'Life Comrades | Professional Home Healthcare in Chennai',
//             description: 'Top-rated home nursing, ICU at home, and elder care services in Chennai. Certified caregivers and medical professionals at your doorstep.',
//             keywords: ['home nursing chennai', 'elder care services', 'healthcare at home']
//         },
//         'about': {
//             title: 'About Us - Life Comrades Home Healthcare',
//             description: 'Learn about Life Comrades, our mission, vision, and the team behind our trusted home nursing and healthcare services.',
//             keywords: ['about life comrades', 'healthcare mission', 'nursing service history']
//         },
//         'contact': {
//             title: 'Contact Us - Life Comrades Home Healthcare',
//             description: 'Get in touch with Life Comrades for professional home nursing and healthcare services. We are available 24/7 for your needs.',
//             keywords: ['contact life comrades', 'home care support', 'medical assistance contact']
//         },
//         'services': {
//             title: 'Our Home Healthcare Services - Life Comrades',
//             description: 'Comprehensive home nursing, ICU at home, elder care, and physiotherapy services in Chennai. Professional medical care at your convenience.',
//             keywords: ['home nursing services', 'icu at home', 'physiotherapy chennai']
//         },
//         'book': {
//             title: 'Book a Service - Life Comrades',
//             description: 'Schedule professional home nursing, ICU at home, or diagnostic tests easily. Quality healthcare is just a booking away.',
//             keywords: ['book home nursing', 'schedule medical test', 'request caregiver']
//         },
//         'jobs': {
//             title: 'Careers & Job Openings - Join Life Comrades',
//             description: 'Explore career opportunities for nurses, caregivers, and healthcare professionals at Life Comrades. Apply to join our team today.',
//             keywords: ['nursing jobs chennai', 'home care jobs', 'healthcare careers']
//         }
//     }
// };
// export const BLOG_POSTS: BlogPost[] = [
//     {
//         "id": "featured-1",
//         "category": "Home Nursing",
//         "title": "The Future of Patient-Centric Care: How Modern Healthcare Agencies Are Redefining Support",
//         "description": "Healthcare is evolving rapidly, and agencies have a unique opportunity to shape the future of patient experiences.",
//         "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200",
//         "readTime": "8 min read",
//         "author": "Chennai Healthcare Team",
//         "date": "Feb 17, 2026",
//         "isFeatured": true,
//         "content": [
//             {
//                 "heading": "Why Patient Expectations Are Changing",
//                 "content": "Technology has reshaped nearly every industry, and healthcare is no exception. Patients are more informed than ever before. They compare services online, read reviews, and expect transparency in both treatment and communication.",
//                 "list": [
//                     "Faster appointment scheduling and digital communication",
//                     "Clear, empathetic guidance throughout treatment",
//                     "Coordinated care between professionals",
//                     "Reliable follow-up and long-term support"
//                 ]
//             },
//             {
//                 "heading": "Conclusion",
//                 "content": "By prioritizing collaboration, technology, and human connection, agencies can deliver care that is not only efficient but genuinely impactful."
//             }
//         ]
//     },
//     {
//         "id": "post-1",
//         "category": "Elder Care",
//         "title": "5 Daily Care Tips for Seniors Recovering at Home",
//         "description": "Simple routines that improve safety, comfort, and recovery for elderly patients.",
//         "image": "https://images.unsplash.com/photo-1581578731522-6b6dea1d21c8?q=80&w=800",
//         "readTime": "4 min read",
//         "author": "Elder Care Specialist",
//         "date": "Feb 10, 2025",
//         "content": [
//             {
//                 "heading": "Maintaining a Safe Environment",
//                 "content": "Safety is the top priority for seniors recovering at home. A few simple adjustments can significantly reduce the risk of falls and injuries.",
//                 "list": [
//                     "Remove loose rugs and clutter from walkways",
//                     "Ensure adequate lighting in all rooms, especially at night",
//                     "Install grab bars in bathrooms and near beds",
//                     "Keep essential items within easy reach"
//                 ]
//             },
//             {
//                 "heading": "Medication Management",
//                 "content": "Consistent medication is crucial for recovery. Use pill organizers and set reminders to ensure no doses are missed, and keep a log of all medications taken.",
//                 "list": [
//                     "Use a weekly pill organizer",
//                     "Set digital alarms for each dose",
//                     "Keep an updated list of all medications for doctors",
//                     "Monitor for any potential side effects"
//                 ]
//             },
//             {
//                 "heading": "The Importance of Social Interaction",
//                 "content": "Recovery isn't just physical; emotional well-being plays a huge role. Regular social interaction helps seniors maintain a positive outlook and speeds up the healing process."
//             }
//         ]
//     },
//     {
//         "id": "post-2",
//         "category": "Post-Op Recovery",
//         "title": "Managing Wound Care After Surgery: A Guide for Families",
//         "description": "Essential steps to prevent infection and promote faster healing after a hospital discharge.",
//         "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
//         "readTime": "6 min read",
//         "author": "Clinical Supervisor",
//         "date": "Feb 08, 2025",
//         "content": [
//             {
//                 "heading": "Keeping the Wound Clean and Dry",
//                 "content": "Proper hygiene is the foundation of effective wound care. Always follow the specific instructions provided by your surgical team regarding when and how to clean the area.",
//                 "list": [
//                     "Wash hands thoroughly before touching the wound area",
//                     "Avoid using unapproved creams or ointments",
//                     "Keep the dressing dry unless otherwise instructed",
//                     "Change dressings as scheduled by your healthcare provider"
//                 ]
//             },
//             {
//                 "heading": "Recognizing Signs of Infection",
//                 "content": "Early detection of infection can prevent serious complications. Contact your doctor immediately if you notice any of the following:",
//                 "list": [
//                     "Increased redness or swelling around the wound",
//                     "Foul-smelling discharge or pus",
//                     "Fever or chills",
//                     "Increased pain at the surgical site"
//                 ]
//             }
//         ]
//     },
//     {
//         "id": "post-3",
//         "category": "Physiotherapy",
//         "title": "The Role of Home Physiotherapy in Stroke Recovery",
//         "description": "How personalized exercise programs at home help stroke survivors regain mobility and independence.",
//         "image": "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800",
//         "readTime": "7 min read",
//         "author": "Sr. Physiotherapist",
//         "date": "Feb 05, 2025",
//         "content": [
//             {
//                 "heading": "Restoring Mobility Through Repetition",
//                 "content": "Consistency is key in neuro-rehabilitation. Regular physiotherapy helps the brain 'rewire' itself, a process known as neuroplasticity.",
//                 "list": [
//                     "Range-of-motion exercises to prevent joint stiffness",
//                     "Strength training to regain muscle control",
//                     "Balance exercises to improve walking stability",
//                     "Task-specific training for daily activities"
//                 ]
//             },
//             {
//                 "heading": "The Benefits of Home-Based Therapy",
//                 "content": "Receiving therapy in a familiar environment reduces stress and allows the therapist to tailor exercises to the patient's actual living space.",
//                 "list": [
//                     "Increased comfort and privacy",
//                     "Focus on practical, real-world movements",
//                     "Family involvement in the recovery process",
//                     "Elimination of travel-related fatigue"
//                 ]
//             }
//         ]
//     },
//     {
//         "id": "post-4",
//         "category": "Mental Health",
//         "title": "Coping with Caregiver Burnout: Taking Care of Yourself",
//         "description": "Practical advice for family members on balancing patient care with personal well-being.",
//         "image": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800",
//         "readTime": "4 min read",
//         "author": "Wellness Counselor",
//         "date": "Feb 01, 2025",
//         "content": [
//             {
//                 "heading": "Identifying the Warning Signs",
//                 "content": "Caregiver burnout is a state of physical, emotional, and mental exhaustion. Recognizing the signs early is essential for your health and the quality of care you provide.",
//                 "list": [
//                     "Feeling overwhelmed or constantly worried",
//                     "Getting too much sleep or not enough",
//                     "Losing interest in activities you used to enjoy",
//                     "Becoming easily irritated or angry"
//                 ]
//             },
//             {
//                 "heading": "Strategies for Self-Care",
//                 "content": "You cannot pour from an empty cup. Taking small breaks and asking for help are not signs of weakness, but necessary steps for sustainability.",
//                 "list": [
//                     "Schedule dedicated 'me time' every day",
//                     "Join a support group for caregivers",
//                     "Accept help from friends and family",
//                     "Maintain your own health check-ups and hobbies"
//                 ]
//             }
//         ]
//     },
//     {
//         "id": "post-5",
//         "category": "Medical Tech",
//         "title": "Essential Medical Equipment for Setting Up a Home ICU",
//         "description": "A checklist of necessary monitors, beds, and support systems for critical care at home.",
//         "image": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
//         "readTime": "5 min read",
//         "author": "Technical Lead",
//         "date": "Jan 28, 2025",
//         "content": [
//             {
//                 "heading": "Core Monitoring Devices",
//                 "content": "A home ICU setup requires precise monitoring to ensure patient safety. These devices provide real-time data to healthcare professionals.",
//                 "list": [
//                     "Multi-para monitors for vitals",
//                     "Pulse oximeters for oxygen levels",
//                     "Infusion pumps for precise medication delivery",
//                     "Oxygen concentrators or cylinders"
//                 ]
//             },
//             {
//                 "heading": "Comfort and Mobility",
//                 "content": "Specialized furniture is essential for both patient comfort and the ease of providing care by nursing staff.",
//                 "list": [
//                     "Electric hospital beds with adjustable positions",
//                     "Air mattresses to prevent pressure sores",
//                     "Suction machines for airway clearance",
//                     "Patient hoists for safe transfers"
//                 ]
//             }
//         ]
//     },
//     {
//         "id": "post-6",
//         "category": "Nutrition",
//         "title": "Dietary Requirements for Patients with Chronic Illness",
//         "description": "How specialized nutrition plans can significantly impact the management of diabetes and hypertension.",
//         "image": "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800",
//         "readTime": "4 min read",
//         "author": "Dietary Consultant",
//         "date": "Jan 25, 2025",
//         "content": [
//             {
//                 "heading": "Managing Nutrition at Home",
//                 "content": "The right diet can be as powerful as medication in managing chronic conditions. Tailoring your nutritional intake helps stabilize health markers.",
//                 "list": [
//                     "Low-sodium plans for managing hypertension",
//                     "Consistent carbohydrate intake for diabetics",
//                     "High-protein options for tissue repair and recovery",
//                     "Adequate hydration throughout the day"
//                 ]
//             },
//             {
//                 "heading": "Practical Meal Planning",
//                 "content": "Preparing healthy meals doesn't have to be complicated. Simple routines can help you stay on track with your nutritional goals.",
//                 "list": [
//                     "Prepare 'batch' meals for the week",
//                     "Focus on whole, unprocessed foods",
//                     "Consult with a nutritionist for personalized plans",
//                     "Keep a food diary to track impacts on health"
//                 ]
//             }
//         ]
//     }
// ];
// export const JOBS_DATA: JobListing = [
//     {
//         id: 'staff-nurse-chennai',
//         title: 'Staff Nurse (Home Healthcare)',
//         category: 'Nursing',
//         type: 'Full-time',
//         location: 'Chennai',
//         salary: '₹25,000 - ₹35,000',
//         postedDate: 'Feb 15, 2026',
//         description: 'We are looking for compassionate and skilled Staff Nurses to provide high-quality medical care to patients in their homes.',
//         requirements: [
//             'B.Sc Nursing or GNM degree',
//             'Valid state nursing council registration',
//             'Minimum 1-2 years of clinical experience',
//             'Good communication skills in Tamil and English'
//         ],
//         responsibilities: [
//             'Monitor patient vitals and health status',
//             'Administer medications and injections',
//             'Provide wound care and post-surgical support',
//             'Maintain accurate medical records and reports'
//         ]
//     },
//     {
//         id: 'icu-nurse-home',
//         title: 'ICU Critical Care Nurse',
//         category: 'Critical Care',
//         type: 'Full-time',
//         location: 'Chennai',
//         salary: '₹35,000 - ₹50,000',
//         postedDate: 'Feb 18, 2026',
//         description: 'Specialized role for nurses experienced in ICU settings to manage critical patients at home with advanced equipment.',
//         requirements: [
//             '3+ years of ICU experience in a reputed hospital',
//             'Expertise in handling ventilators and monitors',
//             'ACLS/BLS certification is a plus',
//             'Ability to handle emergencies independently'
//         ],
//         responsibilities: [
//             '24/7 monitoring of critical patients',
//             'Managing ventilators and infusion pumps',
//             'Coordinating with attending doctors',
//             'Providing emergency intervention if required'
//         ]
//     },
//     {
//         id: 'physiotherapist-home',
//         title: 'Home Physiotherapist',
//         category: 'Physiotherapy',
//         type: 'Part-time / Contract',
//         location: 'Chennai',
//         salary: 'Per session basis',
//         postedDate: 'Feb 10, 2026',
//         description: 'Join our team to provide personalized physiotherapy sessions to patients recovering from surgery or injury.',
//         requirements: [
//             'Bachelor of Physiotherapy (BPT)',
//             'Experience in orthopedic or neurological rehab',
//             'Willingness to travel to patient locations',
//             'Excellent patient handling skills'
//         ],
//         responsibilities: [
//             'Assess patient condition and mobility',
//             'Develop customized rehabilitation plans',
//             'Conduct regular therapy sessions',
//             'Track and report patient progress'
//         ]
//     }
// ];
// export const BLOG_CATEGORIES = [
//     'ALL',
//     ...Array.from(new Set(BLOG_POSTS.map(post => post.category.toUpperCase())))
// ];
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/services/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.services.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.services.description,
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.services.keywords
};
function ServicesLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_216fb3aa._.js.map