module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Header = ()=>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const navLinks = [
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Jobs',
            path: '/jobs'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Blogs',
            path: '/blogs'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white sticky-top",
        style: {
            zIndex: 1100
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-bottom py-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container d-flex justify-content-between align-items-center small text-muted font-monospace",
                    style: {
                        fontSize: '0.75rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Trusted Home Nursing & Healthcare Services"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Call: ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.phone,
                                " | ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.address
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "navbar navbar-expand-lg navbar-light bg-white py-2 border-bottom shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "navbar-brand d-flex align-items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/resources/logo.png",
                                alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].companyName} Logo`,
                                style: {
                                    height: '50px',
                                    width: 'auto'
                                },
                                className: "d-block"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "navbar-toggler border-0",
                            type: "button",
                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "collapse navbar-collapse d-none d-lg-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "navbar-nav mx-auto gap-4",
                                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.path,
                                                className: `nav-link small fw-medium text-dark ${pathname === link.path ? 'border-bottom border-2 border-primary' : ''} py-1`,
                                                style: {
                                                    fontSize: '0.85rem'
                                                },
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, link.name, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex align-items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/book",
                                            className: "btn btn-primary btn-sm fw-bold px-4 rounded-2",
                                            style: {
                                                backgroundColor: '#0D9488',
                                                border: 'none'
                                            },
                                            children: "Book a Service"
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-decoration-none text-dark small fw-bold d-flex align-items-center gap-1",
                                            children: [
                                                "Login ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '1.1rem'
                                                    },
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-lg-none bg-white border-top p-4 shadow w-100 position-absolute",
                style: {
                    zIndex: 1000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex flex-column gap-3",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.path,
                                className: "text-decoration-none text-dark fw-medium small",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "my-2"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/book",
                            className: "btn btn-primary w-100",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: "Book a Service"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "btn btn-outline-secondary w-100 border-0 text-dark fw-bold",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: "Login →"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Header.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer py-5",
        style: {
            backgroundColor: '#1E293B',
            color: '#CBD5E1'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-4 mb-5 pb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "d-block mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/resources/logo.png",
                                        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].companyName} Logo`,
                                        style: {
                                            height: '60px',
                                            width: 'auto'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "small mb-0 pe-lg-5",
                                    style: {
                                        lineHeight: '1.6'
                                    },
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].companyName,
                                        " provides ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].tagline.toLowerCase(),
                                        ". Our mission is to bring hospital-quality care to the comfort of your home."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "text-white fw-bold mb-4 small",
                                    style: {
                                        letterSpacing: '1px'
                                    },
                                    children: "COMPANY"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-unstyled small d-flex flex-column gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "About us"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "Blogs"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "text-white fw-bold mb-4 small",
                                    style: {
                                        letterSpacing: '1px'
                                    },
                                    children: "SUPPORT"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-unstyled small d-flex flex-column gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/help",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms",
                                                className: "text-decoration-none text-reset hover-white",
                                                children: "Terms of service"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-md-4 col-lg-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "text-white fw-bold mb-4 small",
                                    style: {
                                        letterSpacing: '1px'
                                    },
                                    children: "CONTACT"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-unstyled small d-flex flex-column gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-reset",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.email
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-reset",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.phone
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-reset",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.address
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small mt-5",
                    style: {
                        color: '#94A3B8'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 mb-md-0",
                            children: [
                                "Copyright © ",
                                new Date().getFullYear(),
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].companyName,
                                ", All Rights Reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex gap-5",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.facebook && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.facebook,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-decoration-none text-reset hover-white",
                                    children: "Facebook"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-decoration-none text-reset hover-white",
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.whatsapp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.whatsapp,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-decoration-none text-reset hover-white",
                                    children: "Whatsapp"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].contact.social.instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-decoration-none text-reset hover-white",
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/hype_workspace/life_comrades/frontend/src/lib/firebase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/firebase/app/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/@firebase/app/dist/esm/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyD0bTAjcNQhFyrCM-MCRV8UExVbMHZGvo0"),
    authDomain: ("TURBOPACK compile-time value", "web-content-7a221.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "web-content-7a221") || 'web-support-87bed',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
}),
"[project]/hype_workspace/life_comrades/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/firebase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true,
    logout: async ()=>{}
});
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (user)=>{
            setUser(user);
            setLoading(false);
        });
        return ()=>unsubscribe();
    }, []);
    const logout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/context/AuthContext.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad102778._.js.map