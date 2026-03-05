(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
'use client';
;
;
;
const stats = [
    {
        label: 'Total Bookings',
        value: '1,284',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        color: 'bg-teal-50 text-teal-600',
        subtext: '+12% from last month',
        alert: false
    },
    {
        label: 'Active Nurses',
        value: '72',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: 'bg-primary-light text-primary',
        subtext: '5 currently on shift',
        alert: false
    },
    {
        label: 'Completed',
        value: '1,156',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
        color: 'bg-success bg-opacity-10 text-success',
        subtext: '98% satisfaction rate',
        alert: false
    },
    {
        label: 'Pending',
        value: '7',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        color: 'bg-warning bg-opacity-10 text-warning',
        subtext: 'Needs attention',
        alert: true
    }
];
const StatsCards = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "ab8aec103d5d944a8b471ba7de47e23330dd377c20f995f9256e9360e3b5ad73") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ab8aec103d5d944a8b471ba7de47e23330dd377c20f995f9256e9360e3b5ad73";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4 mb-5",
            children: stats.map(_temp)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = StatsCards;
const __TURBOPACK__default__export__ = StatsCards;
function _temp(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-12 col-sm-6 col-xl-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card border-0 shadow-sm rounded-2xl h-100 transition-300 hover-shadow bg-white animate-fade-in",
            style: {
                animationDelay: `${index * 100}ms`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-body p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-xl d-flex align-items-center justify-content-center ${stat.color.split(" ")[0]}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    size: 22,
                                    className: stat.color.split(" ")[1]
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                                    lineNumber: 56,
                                    columnNumber: 199
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                                lineNumber: 56,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-secondary small fw-bold mb-1 text-uppercase tracking-wider",
                                        style: {
                                            fontSize: "11px"
                                        },
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                                        lineNumber: 56,
                                        columnNumber: 270
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "h4 fw-extrabold text-dark mb-0 tracking-tight",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                                        lineNumber: 58,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                                lineNumber: 56,
                                columnNumber: 265
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                        lineNumber: 56,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `small mt-3 mb-0 fw-semibold ${stat.alert ? "text-warning" : "text-muted"}`,
                        style: {
                            fontSize: "12px"
                        },
                        children: stat.subtext
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                        lineNumber: 58,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
                lineNumber: 56,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
            lineNumber: 54,
            columnNumber: 69
        }, this)
    }, stat.label, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/StatsCards.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const getStatusStyle = (status)=>{
    switch(status){
        case 'In Progress':
            return 'bg-teal-500 text-white';
        case 'Assigned':
            return 'bg-blue-600 text-white';
        case 'Pending':
            return 'bg-orange-500 text-white';
        case 'New':
            return 'bg-gray-400 text-white';
        case 'Completed':
            return 'bg-emerald-600 text-white';
        case 'Cancelled':
            return 'bg-red-500 text-white';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};
const BookingsTable = ({ isFullMode = false })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingsTable.useEffect": ()=>{
            const fetchBookings = {
                "BookingsTable.useEffect.fetchBookings": async ()=>{
                    try {
                        setLoading(true);
                        const token = await user?.getIdToken();
                        // Mocking data if API fails to match image exactly
                        setBookings([
                            {
                                id: 'BK-1047',
                                patientName: 'Rajesh Kumar',
                                serviceName: 'Post-Surgery Care',
                                city: [
                                    'Anna Nagar'
                                ],
                                date: 'Today',
                                time: '10:00 AM',
                                status: 'In Progress',
                                assignedNurse: 'Priya S.'
                            },
                            {
                                id: 'BK-1048',
                                patientName: 'Lakshmi Devi',
                                serviceName: 'Elderly Care',
                                city: [
                                    'T Nagar'
                                ],
                                date: 'Today',
                                time: '11:30 AM',
                                status: 'Assigned',
                                assignedNurse: 'Meena R.'
                            },
                            {
                                id: 'BK-1049',
                                patientName: 'Venkat Reddy',
                                serviceName: 'Wound Dressing',
                                city: [
                                    'Adyar'
                                ],
                                date: 'Today',
                                time: '2:00 PM',
                                status: 'Pending',
                                assignedNurse: 'Unassigned'
                            },
                            {
                                id: 'BK-1050',
                                patientName: 'Anitha Menon',
                                serviceName: 'Physiotherapy',
                                city: [
                                    'Velachery'
                                ],
                                date: 'Today',
                                time: '3:30 PM',
                                status: 'Assigned',
                                assignedNurse: 'Kavitha M.'
                            },
                            {
                                id: 'BK-1051',
                                patientName: 'Suresh Babu',
                                serviceName: 'Dialysis Support',
                                city: [
                                    'Porur'
                                ],
                                date: 'Today',
                                time: '4:00 PM',
                                status: 'Assigned',
                                assignedNurse: 'Deepa K.'
                            },
                            {
                                id: 'BK-1052',
                                patientName: 'Malathi S.',
                                serviceName: 'Elderly Care',
                                city: [
                                    'Mylapore'
                                ],
                                date: 'Tomorrow',
                                time: '9:00 AM',
                                status: 'New',
                                assignedNurse: 'Unassigned'
                            },
                            {
                                id: 'BK-1053',
                                patientName: 'Karthik Iyer',
                                serviceName: 'Injection Support',
                                city: [
                                    'Nungambakkam'
                                ],
                                date: 'Today',
                                time: '5:00 PM',
                                status: 'Completed',
                                assignedNurse: 'Priya S.'
                            },
                            {
                                id: 'BK-1054',
                                patientName: 'Meera Krishnan',
                                serviceName: 'Pediatric Care',
                                city: [
                                    'Besant Nagar'
                                ],
                                date: 'Yesterday',
                                time: '3:00 PM',
                                status: 'Cancelled',
                                assignedNurse: 'Divya L.'
                            }
                        ]);
                    } catch (err) {
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BookingsTable.useEffect.fetchBookings"];
            if (user) fetchBookings();
        }
    }["BookingsTable.useEffect"], [
        user
    ]);
    const tabs = [
        'All',
        'New Requests',
        'Assigned',
        'In Progress',
        'Completed',
        'Cancelled'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${isFullMode ? 'p-8 pb-0' : 'p-8'} border-b border-gray-50 flex justify-between items-center`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[20px] font-bold text-gray-900",
                                children: "Bookings Management"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            isFullMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-[14px] mt-1",
                                children: "Manage all nursing service bookings and assignments"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 138,
                                columnNumber: 36
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isFullMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/bookings",
                        className: "text-teal-600 hover:text-teal-700 text-[14px] font-bold transition-all",
                        children: "View All"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                        lineNumber: 140,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isFullMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 flex gap-8 border-b border-gray-100",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        className: `py-4 text-[14px] font-bold transition-all relative ${activeTab === tab ? 'text-teal-600' : 'text-gray-400 hover:text-gray-600'}`,
                        children: [
                            tab,
                            tab === 'All' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 px-2 py-0.5 bg-teal-50 text-teal-600 text-[10px] rounded-full",
                                children: "8"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 149,
                                columnNumber: 47
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === tab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-full h-1 bg-teal-600 rounded-t-full"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 150,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, tab, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                        lineNumber: 147,
                        columnNumber: 38
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                lineNumber: 146,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto min-h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-gray-50/50 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Booking ID"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Patient Name"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 160,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Service"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Area"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 162,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Date & Time"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 163,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: isFullMode ? 'Assigned Nurse' : 'Nurse'
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 164,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-8 py-5 text-[11px] font-extrabold text-gray-900 uppercase tracking-widest",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                        lineNumber: 165,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                            lineNumber: 157,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-50",
                            children: bookings.filter((b)=>activeTab === 'All' || activeTab === 'New Requests' && b.status === 'New' || b.status === activeTab).map((b_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50/30 transition-all border-b border-gray-50 group animate-in fade-in slide-in-from-left-2 duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5 text-[13px] font-bold text-teal-600 cursor-pointer hover:underline uppercase",
                                            children: b_0.id
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 170,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5 text-[14px] font-extrabold text-gray-900 leading-tight",
                                            children: b_0.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 171,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5 text-[13px] text-gray-500 font-medium",
                                            children: b_0.serviceName
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 174,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5 text-[13px] text-gray-500 font-medium",
                                            children: b_0.address || b_0.city[0]
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 175,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5 text-[13px] text-gray-500 font-medium",
                                            children: [
                                                b_0.date,
                                                ", ",
                                                b_0.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[13px] font-bold ${b_0.assignedNurse === 'Unassigned' ? 'text-gray-400' : 'text-gray-900'}`,
                                                children: b_0.assignedNurse
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                                lineNumber: 178,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-8 py-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-4 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider inline-block ${getStatusStyle(b_0.status)}`,
                                                children: b_0.status
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                                lineNumber: 183,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, b_0.id, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                    lineNumber: 169,
                                    columnNumber: 166
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isFullMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 flex justify-between items-center bg-white border-t border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-[13px] font-medium",
                        children: "Showing 8 of 8 bookings"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                        lineNumber: 194,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 border border-gray-100 rounded-xl text-[13px] font-bold text-gray-500 hover:bg-gray-50 transition-all",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-xl text-[13px] font-bold shadow-lg shadow-teal-500/20",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-10 h-10 flex items-center justify-center border border-gray-100 text-gray-500 rounded-xl text-[13px] font-bold hover:bg-gray-50",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-4 py-2 border border-gray-100 rounded-xl text-[13px] font-bold text-gray-500 hover:bg-gray-50 transition-all",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                                lineNumber: 199,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                        lineNumber: 195,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
                lineNumber: 193,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/BookingsTable.tsx",
        lineNumber: 133,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BookingsTable, "8dBd7WU5Nfv5ikPuyVApW9RCuhw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = BookingsTable;
const __TURBOPACK__default__export__ = BookingsTable;
var _c;
__turbopack_context__.k.register(_c, "BookingsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
'use client';
;
;
;
const alerts = [
    {
        id: 1,
        text: 'BK-1049 needs nurse assignment in 30 mins',
        timestamp: '5 mins ago',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: 'text-red-500',
        bgColor: 'bg-red-50'
    },
    {
        id: 2,
        text: 'Priya S. requested shift change for tomorrow',
        timestamp: '15 mins ago',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
        color: 'text-blue-500',
        bgColor: 'bg-blue-50'
    },
    {
        id: 3,
        text: 'Low nurse availability in Porur area',
        timestamp: '1 hour ago',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        color: 'text-amber-500',
        title: 'Low Availability Alert',
        desc: 'Low nurse availability in Porur area',
        time: '1 hour ago'
    }
];
const UrgentAlerts = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "0339aba8a753f875cc6ffbf21b7da2b2519f723a4e433f45735c678bd6b0d51a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0339aba8a753f875cc6ffbf21b7da2b2519f723a4e433f45735c678bd6b0d51a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h6 fw-extrabold text-dark mb-0 text-uppercase tracking-wider",
            style: {
                fontSize: "14px"
            },
            children: "Urgent Alerts"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-header bg-white border-0 p-4 pb-0 d-flex align-items-center justify-content-between",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "badge bg-danger bg-opacity-10 text-danger rounded-pill px-3 py-2 fw-bold",
                    style: {
                        fontSize: "10px"
                    },
                    children: "3 NEW"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                    lineNumber: 49,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-3",
            children: alerts.map(_temp)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card border-0 shadow-sm rounded-2xl bg-white overflow-hidden",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body p-4 pt-4",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-link link-teal-600 w-100 mt-4 text-decoration-none fw-bold shadow-none p-0",
                            style: {
                                fontSize: "13px"
                            },
                            children: "View All Alerts"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                            lineNumber: 65,
                            columnNumber: 132
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                    lineNumber: 65,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = UrgentAlerts;
const __TURBOPACK__default__export__ = UrgentAlerts;
function _temp(alert, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex align-items-start gap-3 p-3 rounded-xl hover-bg-light transition-300 cursor-pointer border border-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                    lineNumber: 76,
                    columnNumber: 276
                }, this)
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                lineNumber: 76,
                columnNumber: 150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "h6 fw-bold text-dark mb-1",
                        style: {
                            fontSize: "13px"
                        },
                        children: alert.title
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                        lineNumber: 76,
                        columnNumber: 336
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted mb-1 overflow-hidden text-truncate-2",
                        style: {
                            fontSize: "12px",
                            lineHeight: "1.4"
                        },
                        children: alert.desc
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                        lineNumber: 78,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-secondary opacity-50",
                        style: {
                            fontSize: "10px",
                            fontWeight: "500"
                        },
                        children: alert.time
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                        lineNumber: 81,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
                lineNumber: 76,
                columnNumber: 307
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/UrgentAlerts.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "UrgentAlerts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
;
const nurses = [
    {
        id: 1,
        name: 'Sangeetha V.',
        specialty: 'ICU Specialist',
        location: 'Anna Nagar',
        initials: 'SV',
        color: 'bg-teal-600'
    },
    {
        id: 2,
        name: 'Ramya P.',
        specialty: 'Elderly Care',
        location: 'T Nagar',
        initials: 'RP',
        color: 'bg-[#1E5F74]'
    },
    {
        id: 1,
        name: 'Sangeetha V.',
        specialty: 'ICU Specialist',
        location: 'Anna Nagar',
        initials: 'SV',
        color: 'bg-teal-600',
        rating: 4.8,
        experience: '10 yrs'
    },
    {
        id: 2,
        name: 'Ramya P.',
        specialty: 'Elderly Care',
        location: 'T Nagar',
        initials: 'RP',
        color: 'bg-[#1E5F74]',
        rating: 4.9,
        experience: '8 yrs'
    },
    {
        id: 3,
        name: 'Divya L.',
        specialty: 'Pediatric Care',
        location: 'Adyar',
        initials: 'DL',
        color: 'bg-[#1D3E53]',
        rating: 4.7,
        experience: '6 yrs'
    },
    {
        id: 4,
        name: 'Nithya K.',
        specialty: 'Post-Surgery',
        location: 'Velachery',
        initials: 'NK',
        color: 'bg-[#254B62]',
        rating: 4.9,
        experience: '12 yrs'
    }
];
const AvailableNurses = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "af9416bbe0f3bdac3452ccaee697947e2b8426d9ca8c694d91054de390c03e40") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "af9416bbe0f3bdac3452ccaee697947e2b8426d9ca8c694d91054de390c03e40";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h6 fw-extrabold text-dark mb-0 text-uppercase tracking-wider",
            style: {
                fontSize: "14px"
            },
            children: "Available Nurses"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            width: "20px",
            height: "20px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "badge bg-teal-500 bg-opacity-10 text-teal-600 rounded-circle p-1 d-flex align-items-center justify-content-center",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "spinner-grow spinner-grow-sm",
                style: {
                    width: "8px",
                    height: "8px"
                }
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                lineNumber: 86,
                columnNumber: 153
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-header bg-white border-0 p-4 pb-0 d-flex align-items-center justify-content-between",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex align-items-center gap-2",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-teal-600 small fw-bold",
                            style: {
                                fontSize: "10px"
                            },
                            children: "12 ONLINE"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                            lineNumber: 96,
                            columnNumber: 173
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                    lineNumber: 96,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-4",
            children: nurses.map(_temp2)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card border-0 shadow-sm rounded-2xl bg-white overflow-hidden",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body p-4 pt-4",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-teal-600 w-100 mt-5 rounded-xl py-2.5 fw-bold text-uppercase tracking-widest shadow-sm transition-300",
                            style: {
                                fontSize: "12px"
                            },
                            children: "Find More Nurses"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                            lineNumber: 112,
                            columnNumber: 132
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                    lineNumber: 112,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
};
_c = AvailableNurses;
const __TURBOPACK__default__export__ = AvailableNurses;
function _temp(n) {
    return n[0];
}
function _temp2(nurse, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex align-items-center gap-3 group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "position-relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-teal-50 text-teal-600 rounded-circle d-flex align-items-center justify-content-center fw-bold border border-teal-100 shadow-sm",
                        style: {
                            width: "44px",
                            height: "44px",
                            fontSize: "14px"
                        },
                        children: nurse.name.split(" ").map(_temp).join("")
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                        lineNumber: 126,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "position-absolute bottom-0 end-0 bg-success border border-white rounded-circle p-1",
                        style: {
                            width: "12px",
                            height: "12px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                        lineNumber: 130,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                lineNumber: 126,
                columnNumber: 92
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow-1 min-width-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center justify-content-between mb-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "h6 fw-bold text-dark mb-0 text-truncate",
                                style: {
                                    fontSize: "14px"
                                },
                                children: nurse.name
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                lineNumber: 133,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center text-warning gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 10,
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                        lineNumber: 135,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "fw-bold",
                                        style: {
                                            fontSize: "11px"
                                        },
                                        children: nurse.rating
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                        lineNumber: 135,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                lineNumber: 135,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                        lineNumber: 133,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge bg-light text-secondary fw-medium px-2 py-1 rounded-pill",
                                style: {
                                    fontSize: "10px"
                                },
                                children: nurse.specialty
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                lineNumber: 137,
                                columnNumber: 96
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-secondary opacity-50 fw-medium",
                                style: {
                                    fontSize: "10px"
                                },
                                children: [
                                    nurse.experience,
                                    " exp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                                lineNumber: 139,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                        lineNumber: 137,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
                lineNumber: 133,
                columnNumber: 18
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/admin/AvailableNurses.tsx",
        lineNumber: 126,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AvailableNurses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TriangleAlert
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("triangle-alert", __iconNode);
;
 //# sourceMappingURL=triangle-alert.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertTriangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>UserCheck
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 11 2 2 4-4",
            key: "9rsbq5"
        }
    ],
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const UserCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user-check", __iconNode);
;
 //# sourceMappingURL=user-check.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=hype_workspace_life_comrades_frontend_75288702._.js.map