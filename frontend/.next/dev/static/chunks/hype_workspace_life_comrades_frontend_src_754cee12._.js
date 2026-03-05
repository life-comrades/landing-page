(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hype_workspace/life_comrades/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTimeTo12H",
    ()=>formatTimeTo12H
]);
const formatTimeTo12H = (time24)=>{
    if (!time24) return "—";
    try {
        const [hours, minutes] = time24.split(':');
        let h = parseInt(hours, 10);
        const m = minutes;
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12; // the hour '0' should be '12'
        return `${h.toString().padStart(2, '0')}:${m} ${ampm}`;
    } catch (error) {
        return time24;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingLayout",
    ()=>BookingLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const BookingLayout = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "c3dbf87f16f18f56e2d7856ef97d8d8e08e9048304f4812a76c1d968dff785de") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3dbf87f16f18f56e2d7856ef97d8d8e08e9048304f4812a76c1d968dff785de";
    }
    const { children, title, step, bookingData } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "display-5 fw-bold text-white mb-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== step) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white-50 lead mb-0",
            children: step
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = step;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    t1,
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                lineNumber: 43,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            marginTop: "-2rem"
        };
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            minHeight: "400px"
        };
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== children) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded shadow-sm border p-4 p-lg-5",
                style: t5,
                children: children
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                lineNumber: 70,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = children;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            top: "6rem"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h5 fw-bold mb-4 border-bottom border-white border-opacity-25 pb-3",
            children: "Booking Summary"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t7;
        $[13] = t8;
    } else {
        t7 = $[12];
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "opacity-75 d-block text-uppercase",
            style: {
                fontSize: "0.7rem"
            },
            children: "Service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = bookingData.serviceName || "\u2014";
    let t11;
    if ($[15] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fw-medium",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 101,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "opacity-75 d-block text-uppercase",
            style: {
                fontSize: "0.7rem"
            },
            children: "City"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== bookingData.city) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fw-medium",
                    children: bookingData.city
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 118,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = bookingData.city;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "opacity-75 d-block text-uppercase",
            style: {
                fontSize: "0.7rem"
            },
            children: "Date & Time"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    const t15 = bookingData.date || "\u2014";
    let t16;
    if ($[21] !== bookingData.time) {
        t16 = bookingData.time ? `at ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(bookingData.time)}` : "";
        $[21] = bookingData.time;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t15 || $[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fw-medium",
                    children: [
                        t15,
                        " ",
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 144,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t15;
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== bookingData.patientName) {
        t18 = bookingData.patientName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 border-top border-white border-opacity-25 mt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "opacity-75 d-block text-uppercase",
                    style: {
                        fontSize: "0.7rem"
                    },
                    children: "Patient"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 153,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fw-medium",
                    children: bookingData.patientName
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 155,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 153,
            columnNumber: 38
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = bookingData.patientName;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t11 || $[29] !== t13 || $[30] !== t17 || $[31] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-3 small",
            children: [
                t11,
                t13,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t11;
        $[29] = t13;
        $[30] = t17;
        $[31] = t18;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "opacity-75 mb-1",
            style: {
                fontSize: "0.75rem"
            },
            children: "Note:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-3 border-top border-white border-opacity-25",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-0",
                    style: {
                        fontSize: "0.75rem"
                    },
                    children: "Final details will be confirmed before booking"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                    lineNumber: 183,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== t19) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white rounded p-4 shadow sticky-top",
                style: t7,
                children: [
                    t8,
                    t19,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                lineNumber: 192,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t19;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] !== t22 || $[38] !== t6) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container pb-5",
            style: t4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row g-4",
                children: [
                    t6,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
                lineNumber: 200,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t22;
        $[38] = t6;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t23 || $[41] !== t3) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-light min-vh-100",
            children: [
                t3,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t23;
        $[41] = t3;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    return t24;
};
_c = BookingLayout;
var _c;
__turbopack_context__.k.register(_c, "BookingLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStep1",
    ()=>BookingStep1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const BookingStep1 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "c11c8b2b2e24173ec3956cfa6d208f979e621529726d6c5db69a111586432a72") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c11c8b2b2e24173ec3956cfa6d208f979e621529726d6c5db69a111586432a72";
    }
    const { data, updateData, onNext, services } = t0;
    let t1;
    if ($[1] !== data.date || $[2] !== data.serviceName || $[3] !== data.time || $[4] !== onNext) {
        t1 = ()=>{
            if (data.serviceName && data.date && data.time) {
                onNext();
            } else {
                alert("Please fill in all fields");
            }
        };
        $[1] = data.date;
        $[2] = data.serviceName;
        $[3] = data.time;
        $[4] = onNext;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const handleNext = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5",
            children: "service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== updateData) {
        t3 = (e)=>updateData({
                serviceName: e.target.value
            });
        $[7] = updateData;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            disabled: true,
            children: "select service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== services) {
        t5 = services?.map(_temp);
        $[10] = services;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== services) {
        t6 = !services && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "Home Nursing",
                    children: "Home Nursing"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 79,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "ICU at Home",
                    children: "ICU at Home"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 79,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "Elder Care",
                    children: "Elder Care"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 79,
                    columnNumber: 123
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "Physiotherapy",
                    children: "Physiotherapy"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 79,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[12] = services;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== data.serviceName || $[15] !== t3 || $[16] !== t5 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "form-select form-select-lg",
                        value: data.serviceName,
                        onChange: t3,
                        children: [
                            t4,
                            t5,
                            t6
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 87,
                        columnNumber: 80
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 87,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = data.serviceName;
        $[15] = t3;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5",
            children: "date"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== updateData) {
        t9 = (e_0)=>updateData({
                date: e_0.target.value
            });
        $[20] = updateData;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== data.date || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "form-control form-control-lg",
                        value: data.date,
                        onChange: t9
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 115,
                        columnNumber: 81
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 115,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = data.date;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5",
            children: "time"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== data.time) {
        t12 = data.time ? (parseInt(data.time.split(":")[0]) % 12 || 12).toString().padStart(2, "0") : "09";
        $[26] = data.time;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== data.time || $[29] !== updateData) {
        t13 = (e_1)=>{
            const h12 = parseInt(e_1.target.value);
            const [oldH, oldM] = (data.time || "09:00").split(":");
            const isPM = parseInt(oldH) >= 12;
            let newH = h12;
            if (isPM && h12 < 12) {
                newH = newH + 12;
            }
            if (!isPM && h12 === 12) {
                newH = 0;
            }
            updateData({
                time: `${newH.toString().padStart(2, "0")}:${oldM}`
            });
        };
        $[28] = data.time;
        $[29] = updateData;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = Array.from({
            length: 12
        }, _temp2).map(_temp3);
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t12 || $[33] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t12,
            onChange: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t12;
        $[33] = t13;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== data.time) {
        t16 = data.time ? data.time.split(":")[1] : "00";
        $[35] = data.time;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== data.time || $[38] !== updateData) {
        t17 = (e_2)=>{
            const newM = e_2.target.value;
            const h24 = (data.time || "09:00").split(":")[0];
            updateData({
                time: `${h24}:${newM}`
            });
        };
        $[37] = data.time;
        $[38] = updateData;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = [
            "00",
            "15",
            "30",
            "45"
        ].map(_temp4);
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t16 || $[42] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t16,
            onChange: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t16;
        $[42] = t17;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    const t20 = data.time ? parseInt(data.time.split(":")[0]) >= 12 ? "PM" : "AM" : "AM";
    let t21;
    if ($[44] !== data.time || $[45] !== updateData) {
        t21 = (e_3)=>{
            const isPM_0 = e_3.target.value === "PM";
            const [oldH_0, oldM_0] = (data.time || "09:00").split(":");
            const h12_0 = parseInt(oldH_0) % 12 || 12;
            let newH_0 = h12_0;
            if (isPM_0 && h12_0 < 12) {
                newH_0 = newH_0 + 12;
            }
            if (!isPM_0 && h12_0 === 12) {
                newH_0 = 0;
            }
            updateData({
                time: `${newH_0.toString().padStart(2, "0")}:${oldM_0}`
            });
        };
        $[44] = data.time;
        $[45] = updateData;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    let t23;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "AM",
            children: "AM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "PM",
            children: "PM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t22;
        $[48] = t23;
    } else {
        t22 = $[47];
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t20 || $[50] !== t21) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t20,
            onChange: t21,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t20;
        $[50] = t21;
        $[51] = t24;
    } else {
        t24 = $[51];
    }
    let t25;
    if ($[52] !== t15 || $[53] !== t19 || $[54] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2",
                        children: [
                            t15,
                            t19,
                            t24
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 263,
                        columnNumber: 82
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 263,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 263,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t15;
        $[53] = t19;
        $[54] = t24;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    let t26;
    if ($[56] !== t10 || $[57] !== t25 || $[58] !== t7) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-4 mb-5",
            children: [
                t7,
                t10,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t10;
        $[57] = t25;
        $[58] = t7;
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    if ($[60] !== handleNext) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNext,
            className: "btn btn-primary w-100 py-3 fs-5 shadow-sm",
            children: "continue"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = handleNext;
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t26 || $[63] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-3",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t26;
        $[63] = t27;
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    let t29;
    if ($[65] !== data || $[66] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingLayout"], {
            title: "Book a Service",
            step: "step 1 of 4 - Select Service and schedule",
            bookingData: data,
            children: t28
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = data;
        $[66] = t28;
        $[67] = t29;
    } else {
        t29 = $[67];
    }
    return t29;
};
_c = BookingStep1;
function _temp(service) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: service.title,
        children: service.title
    }, service.id, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
        lineNumber: 310,
        columnNumber: 10
    }, this);
}
function _temp2(_, i) {
    return (i + 1).toString().padStart(2, "0");
}
function _temp3(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: h,
        children: h
    }, h, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
        lineNumber: 316,
        columnNumber: 10
    }, this);
}
function _temp4(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m,
        children: m
    }, m, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
        lineNumber: 319,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BookingStep1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStep2",
    ()=>BookingStep2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingLayout.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const BookingStep2 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "d1f5d483f4b6780bb2148e3adf58854d289d14f2e5686b3f444a711b7c148ad9") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d1f5d483f4b6780bb2148e3adf58854d289d14f2e5686b3f444a711b7c148ad9";
    }
    const { data, updateData, onNext } = t0;
    let t1;
    if ($[1] !== onNext) {
        t1 = ()=>{
            onNext();
        };
        $[1] = onNext;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleNext = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark",
            children: "Patient Name"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== updateData) {
        t3 = (e)=>updateData({
                patientName: e.target.value
            });
        $[4] = updateData;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== data.patientName || $[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control",
                    value: data.patientName,
                    onChange: t3
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 56,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = data.patientName;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark",
            children: "Patient Age"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            maxWidth: "100px"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== updateData) {
        t7 = (e_0)=>updateData({
                patientAge: e_0.target.value
            });
        $[11] = updateData;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== data.patientAge || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control",
                    style: t6,
                    value: data.patientAge,
                    onChange: t7
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 91,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = data.patientAge;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark d-block",
            children: "Gender"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            "Male",
            "Female",
            "Other"
        ];
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== data.patientGender || $[19] !== updateData) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-3",
                    children: t10.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-check",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "form-check-input",
                                    type: "radio",
                                    name: "gender",
                                    id: `gender-${g}`,
                                    checked: data.patientGender === g,
                                    onChange: ()=>updateData({
                                            patientGender: g
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                                    lineNumber: 114,
                                    columnNumber: 119
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "form-check-label",
                                    htmlFor: `gender-${g}`,
                                    children: g
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, g, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                            lineNumber: 114,
                            columnNumber: 83
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 114,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = data.patientGender;
        $[19] = updateData;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t4 || $[23] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border rounded p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row g-3",
                children: [
                    t4,
                    t8,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                lineNumber: 125,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
        $[22] = t4;
        $[23] = t8;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "small text-muted mb-3",
            children: "Person responsible for coordination and communication."
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark small",
            children: "Guardian Name"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== updateData) {
        t15 = (e_1)=>updateData({
                guardianName: e_1.target.value
            });
        $[27] = updateData;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== data.guardianName || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control form-control-sm",
                    value: data.guardianName,
                    onChange: t15
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 159,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = data.guardianName;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark small",
            children: "Relationship to patient"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== updateData) {
        t18 = (e_2)=>updateData({
                relationship: e_2.target.value
            });
        $[33] = updateData;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== data.relationship || $[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control form-control-sm",
                    value: data.relationship,
                    onChange: t18
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 185,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = data.relationship;
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark small",
            children: "Mobile number"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== updateData) {
        t21 = (e_3)=>updateData({
                mobile: e_3.target.value
            });
        $[39] = updateData;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== data.mobile || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control form-control-sm",
                    value: data.mobile,
                    onChange: t21
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 211,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = data.mobile;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark small",
            children: "Alternate number"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== updateData) {
        t24 = (e_4)=>updateData({
                alternateMobile: e_4.target.value
            });
        $[45] = updateData;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== data.alternateMobile || $[48] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "form-control form-control-sm",
                    value: data.alternateMobile,
                    onChange: t24
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 237,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = data.alternateMobile;
        $[48] = t24;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] !== t16 || $[51] !== t19 || $[52] !== t22 || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border rounded p-4 bg-light",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-3",
                    children: [
                        t16,
                        t19,
                        t22,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                    lineNumber: 246,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t16;
        $[51] = t19;
        $[52] = t22;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold text-dark",
            children: "Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== updateData) {
        t28 = (e_5)=>updateData({
                address: e_5.target.value
            });
        $[56] = updateData;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== data.address || $[59] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border rounded p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-0",
                children: [
                    t27,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "form-control",
                        rows: 3,
                        value: data.address,
                        onChange: t28
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                        lineNumber: 274,
                        columnNumber: 74
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
                lineNumber: 274,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = data.address;
        $[59] = t28;
        $[60] = t29;
    } else {
        t29 = $[60];
    }
    let t30;
    if ($[61] !== handleNext) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNext,
            className: "btn btn-primary w-100 py-3 fs-5 shadow-sm mt-3",
            children: "continue"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = handleNext;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== t12 || $[64] !== t26 || $[65] !== t29 || $[66] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-4",
            children: [
                t12,
                t26,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t12;
        $[64] = t26;
        $[65] = t29;
        $[66] = t30;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== data || $[69] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingLayout"], {
            title: "Patient Details",
            step: "step 2 of 4 - Tell us about the patient",
            bookingData: data,
            children: t31
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = data;
        $[69] = t31;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    return t32;
};
_c = BookingStep2;
var _c;
__turbopack_context__.k.register(_c, "BookingStep2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingStep3",
    ()=>BookingStep3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BookingStep3 = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(132);
    if ($[0] !== "d0744677bb75ae091f3440bc43fdb5220944ae919b670930e5a45ac6a2f4cc8b") {
        for(let $i = 0; $i < 132; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d0744677bb75ae091f3440bc43fdb5220944ae919b670930e5a45ac6a2f4cc8b";
    }
    const { data, onConfirm, onEdit, submitting: t1 } = t0;
    const submitting = t1 === undefined ? false : t1;
    const [agreed, setAgreed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== agreed || $[2] !== onConfirm) {
        t2 = ()=>{
            if (agreed) {
                onConfirm();
            } else {
                alert("Please agree to the terms");
            }
        };
        $[1] = agreed;
        $[2] = onConfirm;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleConfirm = t2;
    let t3;
    if ($[4] !== onEdit) {
        t3 = (t4)=>{
            const { step } = t4;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onEdit(step),
                className: "btn btn-link btn-sm text-decoration-underline text-secondary p-0",
                children: "Edit"
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 51,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        };
        $[4] = onEdit;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const EditBtn = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display-5 fw-bold text-white mb-2",
                        children: "Review & Confirm"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                        lineNumber: 61,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white-50 lead mb-0",
                        children: "step 3 of 4 - Please review your booking details"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                        lineNumber: 61,
                        columnNumber: 145
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 61,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            marginTop: "-2rem"
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Service:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== data.serviceName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t6,
                " ",
                data.serviceName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = data.serviceName;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "City:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== data.city) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t8,
                " ",
                data.city
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = data.city;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Date:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== data.date) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t10,
                " ",
                data.date
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = data.date;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Time:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== data.time) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(data.time);
        $[18] = data.time;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t12,
                " ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t13;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== t11 || $[23] !== t14 || $[24] !== t7 || $[25] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t7,
                t9,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t11;
        $[23] = t14;
        $[24] = t7;
        $[25] = t9;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== EditBtn) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 1
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = EditBtn;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t15 || $[30] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t15;
        $[30] = t16;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Name:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== data.patientName) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t18,
                " ",
                data.patientName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = data.patientName;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Age:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t20;
    } else {
        t20 = $[35];
    }
    let t21;
    if ($[36] !== data.patientAge) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t20,
                " ",
                data.patientAge
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = data.patientAge;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Gender:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== data.patientGender) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t22,
                " ",
                data.patientGender
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = data.patientGender;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t19 || $[42] !== t21 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t19,
                t21,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t19;
        $[42] = t21;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== EditBtn) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = EditBtn;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    let t26;
    if ($[47] !== t24 || $[48] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t24;
        $[48] = t25;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Name:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    let t28;
    if ($[51] !== data.guardianName) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t27,
                " ",
                data.guardianName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = data.guardianName;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Relationship:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t29;
    } else {
        t29 = $[53];
    }
    let t30;
    if ($[54] !== data.relationship) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t29,
                " ",
                data.relationship
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = data.relationship;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Mobile:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== data.mobile) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t31,
                " ",
                data.mobile
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = data.mobile;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    let t33;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Alternate:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] !== data.alternateMobile) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t33,
                " ",
                data.alternateMobile
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = data.alternateMobile;
        $[61] = t34;
    } else {
        t34 = $[61];
    }
    let t35;
    if ($[62] !== t28 || $[63] !== t30 || $[64] !== t32 || $[65] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t28,
                t30,
                t32,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t28;
        $[63] = t30;
        $[64] = t32;
        $[65] = t34;
        $[66] = t35;
    } else {
        t35 = $[66];
    }
    let t36;
    if ($[67] !== EditBtn) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = EditBtn;
        $[68] = t36;
    } else {
        t36 = $[68];
    }
    let t37;
    if ($[69] !== t35 || $[70] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t35;
        $[70] = t36;
        $[71] = t37;
    } else {
        t37 = $[71];
    }
    let t38;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            minHeight: "100px"
        };
        $[72] = t38;
    } else {
        t38 = $[72];
    }
    let t39;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "h6 fw-normal text-secondary mb-2 text-uppercase",
            children: "Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t39;
    } else {
        t39 = $[73];
    }
    let t40;
    if ($[74] !== data.address) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-100",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-0 text-dark small",
                    children: data.address
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                    lineNumber: 371,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = data.address;
        $[75] = t40;
    } else {
        t40 = $[75];
    }
    let t41;
    if ($[76] !== EditBtn) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = EditBtn;
        $[77] = t41;
    } else {
        t41 = $[77];
    }
    let t42;
    if ($[78] !== t40 || $[79] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            style: t38,
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t40;
        $[79] = t41;
        $[80] = t42;
    } else {
        t42 = $[80];
    }
    const t43 = submitting ? "Submitting\u2026" : "Confirm Booking";
    let t44;
    if ($[81] !== handleConfirm || $[82] !== submitting || $[83] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleConfirm,
            disabled: submitting,
            className: "d-lg-none btn btn-primary w-100 py-3 fs-5 shadow-sm mt-3",
            children: t43
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = handleConfirm;
        $[82] = submitting;
        $[83] = t43;
        $[84] = t44;
    } else {
        t44 = $[84];
    }
    let t45;
    if ($[85] !== t17 || $[86] !== t26 || $[87] !== t37 || $[88] !== t42 || $[89] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-column gap-3",
                children: [
                    t17,
                    t26,
                    t37,
                    t42,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 407,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 407,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t17;
        $[86] = t26;
        $[87] = t37;
        $[88] = t42;
        $[89] = t44;
        $[90] = t45;
    } else {
        t45 = $[90];
    }
    let t46;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            top: "6rem",
            minHeight: "400px"
        };
        $[91] = t46;
    } else {
        t46 = $[91];
    }
    let t47;
    if ($[92] !== data.serviceName) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h5 fw-bold mb-4",
            children: [
                "Service: ",
                data.serviceName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = data.serviceName;
        $[93] = t47;
    } else {
        t47 = $[93];
    }
    let t48;
    if ($[94] !== data.city) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "City: ",
                data.city
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[94] = data.city;
        $[95] = t48;
    } else {
        t48 = $[95];
    }
    const t49 = data.date;
    let t50;
    if ($[96] !== data.time) {
        t50 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(data.time);
        $[96] = data.time;
        $[97] = t50;
    } else {
        t50 = $[97];
    }
    let t51;
    if ($[98] !== data.date || $[99] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Date & Time: ",
                t49,
                ", ",
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[98] = data.date;
        $[99] = t50;
        $[100] = t51;
    } else {
        t51 = $[100];
    }
    let t52;
    if ($[101] !== data.patientName) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Patient: ",
                data.patientName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 463,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = data.patientName;
        $[102] = t52;
    } else {
        t52 = $[102];
    }
    let t53;
    if ($[103] !== data.guardianName) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Guardian: ",
                data.guardianName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[103] = data.guardianName;
        $[104] = t53;
    } else {
        t53 = $[104];
    }
    let t54;
    if ($[105] !== t47 || $[106] !== t48 || $[107] !== t51 || $[108] !== t52 || $[109] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow-1",
            children: [
                t47,
                t48,
                t51,
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 479,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[105] = t47;
        $[106] = t48;
        $[107] = t51;
        $[108] = t52;
        $[109] = t53;
        $[110] = t54;
    } else {
        t54 = $[110];
    }
    let t55;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = (e)=>setAgreed(e.target.checked);
        $[111] = t55;
    } else {
        t55 = $[111];
    }
    let t56;
    if ($[112] !== agreed) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form-check-input",
            type: "checkbox",
            id: "agreeCheck",
            checked: agreed,
            onChange: t55
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[112] = agreed;
        $[113] = t56;
    } else {
        t56 = $[113];
    }
    let t57;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-check-label small lh-sm",
            htmlFor: "agreeCheck",
            children: "I confirm the details provided are accurate and agree to the terms."
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[114] = t57;
    } else {
        t57 = $[114];
    }
    let t58;
    if ($[115] !== t56) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-4 border-top border-white border-opacity-25",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-check",
                children: [
                    t56,
                    t57
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 513,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[115] = t56;
        $[116] = t58;
    } else {
        t58 = $[116];
    }
    let t59;
    if ($[117] !== t54 || $[118] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-4 d-none d-lg-block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white rounded p-4 shadow sticky-top d-flex flex-column",
                style: t46,
                children: [
                    t54,
                    t58
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 521,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[117] = t54;
        $[118] = t58;
        $[119] = t59;
    } else {
        t59 = $[119];
    }
    let t60;
    if ($[120] !== t45 || $[121] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4",
            children: [
                t45,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 530,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[120] = t45;
        $[121] = t59;
        $[122] = t60;
    } else {
        t60 = $[122];
    }
    const t61 = !agreed || submitting;
    let t62;
    if ($[123] !== submitting) {
        t62 = submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "spinner-border spinner-border-sm me-2",
                    role: "status",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                    lineNumber: 540,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)),
                "Submitting…"
            ]
        }, void 0, true) : "Confirm Booking";
        $[123] = submitting;
        $[124] = t62;
    } else {
        t62 = $[124];
    }
    let t63;
    if ($[125] !== handleConfirm || $[126] !== t61 || $[127] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-none d-lg-block mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleConfirm,
                disabled: t61,
                className: "btn btn-primary w-100 py-3 fs-4 fw-medium shadow-sm",
                children: t62
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 548,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 548,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[125] = handleConfirm;
        $[126] = t61;
        $[127] = t62;
        $[128] = t63;
    } else {
        t63 = $[128];
    }
    let t64;
    if ($[129] !== t60 || $[130] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-light min-vh-100",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container pb-5",
                    style: t5,
                    children: [
                        t60,
                        t63
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                    lineNumber: 558,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 558,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[129] = t60;
        $[130] = t63;
        $[131] = t64;
    } else {
        t64 = $[131];
    }
    return t64;
};
_s(BookingStep3, "M2qgP4UlCM7VqtLVo0/m0bCgG0Y=");
_c = BookingStep3;
var _c;
__turbopack_context__.k.register(_c, "BookingStep3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingSuccess",
    ()=>BookingSuccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const BookingSuccess = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "6a7c8c813ee33cb2d544d6d347ac5970861870b00024cf8c6a82e0b679d97eda") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6a7c8c813ee33cb2d544d6d347ac5970861870b00024cf8c6a82e0b679d97eda";
    }
    const { data } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            maxWidth: "800px"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow",
            style: {
                width: "80px",
                height: "80px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "text-white",
                size: 40,
                strokeWidth: 3
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                lineNumber: 36,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "display-5 fw-bold text-dark mb-3",
            children: "Your booking has been successfully submitted"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-5",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary lead mx-auto",
                    style: {
                        maxWidth: "500px"
                    },
                    children: "Our team will review the details and assign a qualified nurse shortly. You will receive a confirmation call or message soon."
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 46,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "fw-bold mb-3 border-bottom pb-2",
            children: "Booking Details"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 fw-bold",
            children: "Service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = data?.serviceName || "\u2014";
    let t8;
    if ($[7] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 70,
                    columnNumber: 40
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 fw-bold",
            children: "Date & Time"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = data?.date || "\u2014";
    const t11 = data?.time;
    let t12;
    if ($[10] !== t11) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(t11);
        $[10] = t11;
        $[11] = t12;
    } else {
        t12 = $[11];
    }
    let t13;
    if ($[12] !== t10 || $[13] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary",
                    children: [
                        t10,
                        " — ",
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 95,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
        $[13] = t12;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 fw-bold",
            children: "City"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    const t15 = data?.city || "Chennai";
    let t16;
    if ($[16] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 112,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 fw-bold",
            children: "Patient"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    const t18 = data?.patientName || "\u2014";
    let t19;
    if ($[19] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 128,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] !== t13 || $[22] !== t16 || $[23] !== t19 || $[24] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded p-4",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-3",
                    children: [
                        t8,
                        t13,
                        t16,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 136,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t13;
        $[22] = t16;
        $[23] = t19;
        $[24] = t8;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "d-flex align-items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 147,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0)),
                " Our care coordinator will contact you to confirm details"
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "d-flex align-items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "•"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 154,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0)),
                " A suitable nurse will be assigned based on availability"
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-unstyled mb-0 d-flex flex-column gap-2 text-dark fw-medium",
                children: [
                    t21,
                    t22,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "d-flex align-items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                                lineNumber: 161,
                                columnNumber: 193
                            }, ("TURBOPACK compile-time value", void 0)),
                            " You will receive service confirmation before the visit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                        lineNumber: 161,
                        columnNumber: 146
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                lineNumber: 161,
                columnNumber: 56
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t23;
    } else {
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h5 fw-bold text-dark mb-4",
            children: "If you have any questions or need to make changes, contact us:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded p-5 text-center",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center gap-4 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "text-dark fw-bold text-decoration-underline link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover",
                            children: "Call Support"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                            lineNumber: 175,
                            columnNumber: 136
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "text-dark fw-bold text-decoration-underline link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover",
                            children: "WhatsApp Support"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                            lineNumber: 175,
                            columnNumber: 307
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                    lineNumber: 175,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] !== t20) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-light min-vh-100 py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                style: t1,
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-column gap-4",
                        children: [
                            t20,
                            t23,
                            t25
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                        lineNumber: 182,
                        columnNumber: 96
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
                lineNumber: 182,
                columnNumber: 54
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t20;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    return t26;
};
_c = BookingSuccess;
var _c;
__turbopack_context__.k.register(_c, "BookingSuccess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applicationsApi",
    ()=>applicationsApi,
    "blogsApi",
    ()=>blogsApi,
    "bookingsApi",
    ()=>bookingsApi,
    "contentApi",
    ()=>contentApi,
    "dashboardApi",
    ()=>dashboardApi,
    "getISRData",
    ()=>getISRData,
    "getServicesMap",
    ()=>getServicesMap,
    "jobsApi",
    ()=>jobsApi,
    "nursesApi",
    ()=>nursesApi,
    "patientsApi",
    ()=>patientsApi,
    "servicesApi",
    ()=>servicesApi,
    "testimonialsApi",
    ()=>testimonialsApi,
    "usersApi",
    ()=>usersApi
]);
const API_BASE_URL = 'http://localhost:5000/api';
async function getISRData() {
    const fallback = {
        content: {
            companyName: 'Life Comrades',
            tagline: 'Trusted Home Nursing & Healthcare Services',
            contact: {
                phone: '',
                email: '',
                address: '',
                cities: [],
                social: {}
            },
            homeHero: {
                title: '',
                subtitle: ''
            },
            testimonials: [],
            globalMetadata: {
                title: 'Life Comrades',
                description: '',
                keywords: []
            },
            pagesMetadata: {}
        },
        metadata: {},
        services: [],
        jobs: [],
        testimonials: [],
        blogPosts: []
    };
    try {
        const response = await fetch(`${API_BASE_URL}/content/isr`, {
            next: {
                revalidate: 3600
            }
        });
        if (!response.ok) {
            console.warn(`ISR fetch failed (${response.status}), using fallback data`);
            return fallback;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in getISRData, using fallback:', error);
        return fallback;
    }
}
function getServicesMap(services) {
    return services.reduce((acc, service)=>{
        acc[service.id] = service;
        return acc;
    }, {});
}
const bookingsApi = {
    create: async (data)=>{
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create booking');
        }
        return response.json();
    },
    getAll: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch bookings');
        return response.json();
    },
    getNewRequests: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/bookings/new-requests`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch new requests');
        return response.json();
    },
    promote: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/bookings/promote`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to promote booking');
        return response.json();
    },
    updateStatus: async (token, id, status)=>{
        const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        });
        if (!response.ok) throw new Error('Failed to update status');
        return response.json();
    },
    assignNurse: async (token, id, nurseId)=>{
        const response = await fetch(`${API_BASE_URL}/bookings/${id}/assign`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nurseId
            })
        });
        if (!response.ok) throw new Error('Failed to assign nurse');
        return response.json();
    }
};
const applicationsApi = {
    getNew: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/applications/new`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch applications');
        return response.json();
    },
    promote: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/admin/applications/promote`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to promote application');
        return response.json();
    }
};
const nursesApi = {
    getAll: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/nurses`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch nurses');
        return response.json();
    },
    updateStatus: async (token, id, isActive)=>{
        const response = await fetch(`${API_BASE_URL}/admin/nurses/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isActive
            })
        });
        if (!response.ok) throw new Error('Failed to update nurse status');
        return response.json();
    }
};
const patientsApi = {
    getAll: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/patients`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch patients');
        return response.json();
    }
};
const usersApi = {
    forgotPassword: async (email)=>{
        const response = await fetch(`${API_BASE_URL}/users/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate reset link');
        }
        return response.json();
    },
    getProfile: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }
        return response.json();
    }
};
const dashboardApi = {
    getStats: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch stats');
        return response.json();
    },
    getAlerts: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/alerts`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch alerts');
        return response.json();
    },
    getNurses: async (token)=>{
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/nurses`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to fetch nurses');
        return response.json();
    }
};
const servicesApi = {
    getAll: async ()=>{
        const response = await fetch(`${API_BASE_URL}/services`);
        if (!response.ok) throw new Error('Failed to fetch services');
        return response.json();
    },
    getById: async (id)=>{
        const response = await fetch(`${API_BASE_URL}/services/${id}`);
        if (!response.ok) throw new Error('Failed to fetch service');
        return response.json();
    },
    create: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/services`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to create service');
        return response.json();
    },
    update: async (token, id, data)=>{
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update service');
        return response.json();
    },
    delete: async (token, id)=>{
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete service');
        return response.json();
    }
};
const blogsApi = {
    getAll: async (parentDocId = 'global')=>{
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        return response.json();
    },
    getById: async (parentDocId, postId)=>{
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch blog post');
        return response.json();
    },
    create: async (token, parentDocId, data)=>{
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to create blog post');
        return response.json();
    },
    update: async (token, parentDocId, postId, data)=>{
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update blog post');
        return response.json();
    },
    delete: async (token, parentDocId, postId)=>{
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete blog post');
        return response.json();
    }
};
const jobsApi = {
    getAll: async ()=>{
        const response = await fetch(`${API_BASE_URL}/jobs`);
        if (!response.ok) throw new Error('Failed to fetch jobs');
        return response.json();
    },
    getById: async (id)=>{
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch job');
        return response.json();
    },
    create: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to create job');
        return response.json();
    },
    update: async (token, id, data)=>{
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update job');
        return response.json();
    },
    delete: async (token, id)=>{
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete job');
        return response.json();
    }
};
const contentApi = {
    getGlobal: async ()=>{
        const response = await fetch(`${API_BASE_URL}/content`);
        if (!response.ok) throw new Error('Failed to fetch global content');
        return response.json();
    },
    updateGlobal: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/content`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update global content');
        return response.json();
    },
    getMetadata: async (pageId)=>{
        const response = await fetch(`${API_BASE_URL}/content/metadata/${pageId}`);
        if (!response.ok) throw new Error('Failed to fetch metadata');
        return response.json();
    },
    upsertMetadata: async (token, pageId, data)=>{
        const response = await fetch(`${API_BASE_URL}/content/metadata/${pageId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update metadata');
        return response.json();
    },
    getAllMetadata: async ()=>{
        const response = await fetch(`${API_BASE_URL}/content/metadata`);
        if (!response.ok) throw new Error('Failed to fetch all metadata');
        return response.json();
    }
};
const testimonialsApi = {
    getAll: async ()=>{
        const response = await fetch(`${API_BASE_URL}/testimonials`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        return response.json();
    },
    create: async (token, data)=>{
        const response = await fetch(`${API_BASE_URL}/testimonials`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to create testimonial');
        return response.json();
    },
    update: async (token, id, data)=>{
        const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Failed to update testimonial');
        return response.json();
    },
    delete: async (token, id)=>{
        const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete testimonial');
        return response.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingFormContainer",
    ()=>BookingFormContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingSuccess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const BookingFormContainer = ({ services })=>{
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bookingData, setBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        serviceId: '',
        serviceName: '',
        city: [
            'Chennai'
        ],
        date: '',
        time: '',
        patientName: '',
        patientAge: '',
        patientGender: '',
        guardianName: '',
        relationship: '',
        mobile: '',
        alternateMobile: '',
        address: ''
    });
    const updateData = (updates)=>{
        setBookingData((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const nextStep = ()=>setStep((prev_0)=>prev_0 + 1);
    const prevStep = ()=>setStep((prev_1)=>prev_1 - 1);
    const handleConfirm = async ()=>{
        setSubmitting(true);
        setSubmitError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bookingsApi"].create({
                ...bookingData,
                city: Array.isArray(bookingData.city) ? bookingData.city[0] : bookingData.city
            });
            nextStep();
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            setSubmitError(message);
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep1"], {
                data: bookingData,
                updateData: updateData,
                onNext: nextStep,
                services: services
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                lineNumber: 59,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep2"], {
                data: bookingData,
                updateData: updateData,
                onNext: nextStep,
                onBack: prevStep
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                lineNumber: 60,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "alert alert-danger",
                            role: "alert",
                            children: [
                                "⚠️ ",
                                submitError
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                            lineNumber: 63,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                        lineNumber: 62,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep3"], {
                        data: bookingData,
                        onConfirm: handleConfirm,
                        onEdit: (s)=>setStep(s),
                        submitting: submitting
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingSuccess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingSuccess"], {
                data: bookingData
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingFormContainer.tsx",
                lineNumber: 69,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(BookingFormContainer, "OfgA9pnBdSos01crSvttbET4sJo=");
_c = BookingFormContainer;
var _c;
__turbopack_context__.k.register(_c, "BookingFormContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_754cee12._.js.map