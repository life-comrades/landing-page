module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRICING_DATA",
    ()=>PRICING_DATA,
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
        priceStart: '1500',
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
        priceStart: 'Custom',
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
        priceStart: '1200',
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
        priceStart: '600',
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
        priceStart: '800',
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
        priceStart: 'Varies',
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
const PRICING_DATA = [
    {
        title: 'Home Nursing',
        price: 'Starting from ₹1500 / day',
        description: 'Pricing varies based on care duration'
    },
    {
        title: 'ICU at Home',
        price: 'Custom pricing',
        description: 'Pricing depends on equipment and level of care'
    },
    {
        title: 'Elder Care',
        price: 'Starting from ₹1200 / day',
        description: 'Flexible plans available for long-term care'
    },
    {
        title: 'Physiotherapy',
        price: 'Starting from ₹600 / session',
        description: 'Packages available for multiple sessions'
    },
    {
        title: 'Doctor Visit',
        price: 'Starting from ₹800 / visit',
        description: 'Based on specialization and visit time'
    },
    {
        title: 'Lab Tests',
        price: 'Price varies by test',
        description: 'Transparent pricing after test selection'
    }
];
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
        subtitle: 'Skilled nurses and caregivers delivered to your home, when you need them.',
        backgroundImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop',
        ctaText: 'Book a Service',
        ctaLink: '/book'
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
        'areas': {
            title: 'Areas We Serve - Life Comrades Home Healthcare',
            description: 'We provide professional home nursing and healthcare services across Chennai, Coimbatore, Madurai, and major cities in Tamil Nadu.',
            keywords: [
                'healthcare services tamil nadu',
                'home care cities',
                'medical care areas'
            ]
        },
        'pricing': {
            title: 'Transparent Pricing & Care Packages - Life Comrades',
            description: 'Affordable and transparent pricing for home nursing, physiotherapy, and doctor visits. View our flexible healthcare packages.',
            keywords: [
                'home care pricing',
                'nursing service cost',
                'medical care packages'
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
        }
    }
};
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/data/data.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.pricing.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.pricing.description,
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WEBSITE_CONTENT"].pagesMetadata.pricing.keywords
};
function PricingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-light min-vh-100 pb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-bottom py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "display-5 fw-bold text-dark mb-4",
                            children: "Pricing & Care Packages"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary",
                            style: {
                                maxWidth: '600px'
                            },
                            children: "Our pricing is based on the type of care, duration, and patient needs. All services are currently available across Chennai."
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                            lineNumber: 17,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded border mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mb-0 text-secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Pricing depends on service type and duration"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Packages are available for daily, weekly, or monthly care"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Final pricing is confirmed after understanding patient needs"
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-4 mb-5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRICING_DATA"].map((pkg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-6 col-lg-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card h-100 border hover-border-primary transition-all p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-body p-0 d-flex flex-column",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h5 fw-bold text-dark mb-2",
                                                children: pkg.title
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "h5 fw-semibold text-primary mb-3",
                                                children: pkg.price
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted small mb-0",
                                                children: pkg.description
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded border mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "fw-bold text-dark mb-0",
                            children: "Prices shown are indicative and may vary based on patient condition, duration of care, and service requirements. Final pricing will be confirmed before service initiation."
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded border d-flex flex-column flex-md-row justify-content-between align-items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "h5 fw-bold text-dark mb-1",
                                        children: "Need help choosing the right care package?"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "text-secondary text-decoration-underline hover-primary",
                                        children: "Contact Support"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/book",
                                className: "btn btn-primary px-4 py-2 fw-medium",
                                children: "Book a Service"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/pricing/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__94407b34._.js.map