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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "0aaf5e7748ab1914ab1836fff5c5c4d5b94ef352d4bda27253f80a61a9afbfe6") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0aaf5e7748ab1914ab1836fff5c5c4d5b94ef352d4bda27253f80a61a9afbfe6";
    }
    const { data, updateData, onNext } = t0;
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
            lineNumber: 45,
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
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            disabled: true,
            children: "select service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Home Nursing",
            children: "Home Nursing"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ICU at Home",
            children: "ICU at Home"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Elder Care",
            children: "Elder Care"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Physiotherapy",
            children: "Physiotherapy"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
    }
    let t9;
    if ($[14] !== data.serviceName || $[15] !== t3) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            t6,
                            t7,
                            t8
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 85,
                        columnNumber: 80
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 85,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = data.serviceName;
        $[15] = t3;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5",
            children: "date"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== updateData) {
        t11 = (e_0)=>updateData({
                date: e_0.target.value
            });
        $[18] = updateData;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== data.date || $[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "form-control form-control-lg",
                        value: data.date,
                        onChange: t11
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 111,
                        columnNumber: 82
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 111,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = data.date;
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5",
            children: "time"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== data.time) {
        t14 = data.time ? (parseInt(data.time.split(":")[0]) % 12 || 12).toString().padStart(2, "0") : "09";
        $[24] = data.time;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== data.time || $[27] !== updateData) {
        t15 = (e_1)=>{
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
        $[26] = data.time;
        $[27] = updateData;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = Array.from({
            length: 12
        }, _temp).map(_temp2);
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t14 || $[31] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t14,
            onChange: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t14;
        $[31] = t15;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== data.time) {
        t18 = data.time ? data.time.split(":")[1] : "00";
        $[33] = data.time;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== data.time || $[36] !== updateData) {
        t19 = (e_2)=>{
            const newM = e_2.target.value;
            const h24 = (data.time || "09:00").split(":")[0];
            updateData({
                time: `${h24}:${newM}`
            });
        };
        $[35] = data.time;
        $[36] = updateData;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = [
            "00",
            "15",
            "30",
            "45"
        ].map(_temp3);
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t18 || $[40] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t18,
            onChange: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    const t22 = data.time ? parseInt(data.time.split(":")[0]) >= 12 ? "PM" : "AM" : "AM";
    let t23;
    if ($[42] !== data.time || $[43] !== updateData) {
        t23 = (e_3)=>{
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
        $[42] = data.time;
        $[43] = updateData;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "AM",
            children: "AM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "PM",
            children: "PM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t24;
        $[46] = t25;
    } else {
        t24 = $[45];
        t25 = $[46];
    }
    let t26;
    if ($[47] !== t22 || $[48] !== t23) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "form-select form-select-lg",
            value: t22,
            onChange: t23,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t22;
        $[48] = t23;
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== t17 || $[51] !== t21 || $[52] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row align-items-center",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex gap-2",
                        children: [
                            t17,
                            t21,
                            t26
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                        lineNumber: 259,
                        columnNumber: 82
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
                    lineNumber: 259,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t17;
        $[51] = t21;
        $[52] = t26;
        $[53] = t27;
    } else {
        t27 = $[53];
    }
    let t28;
    if ($[54] !== t12 || $[55] !== t27 || $[56] !== t9) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-column gap-4 mb-5",
            children: [
                t9,
                t12,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t12;
        $[55] = t27;
        $[56] = t9;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] !== handleNext) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNext,
            className: "btn btn-primary w-100 py-3 fs-5 shadow-sm",
            children: "continue"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = handleNext;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    let t30;
    if ($[60] !== t28 || $[61] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-3",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = t28;
        $[61] = t29;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] !== data || $[64] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingLayout"], {
            title: "Book a Service",
            step: "step 1 of 4 - Select Service and schedule",
            bookingData: data,
            children: t30
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = data;
        $[64] = t30;
        $[65] = t31;
    } else {
        t31 = $[65];
    }
    return t31;
};
_c = BookingStep1;
function _temp(_, i) {
    return (i + 1).toString().padStart(2, "0");
}
function _temp2(h) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: h,
        children: h
    }, h, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
        lineNumber: 309,
        columnNumber: 10
    }, this);
}
function _temp3(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: m,
        children: m
    }, m, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx",
        lineNumber: 312,
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(127);
    if ($[0] !== "cdf6799318c2473e366b1cad37026c7ad7c34e82cbd8ce8dde4b548bf14073a9") {
        for(let $i = 0; $i < 127; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cdf6799318c2473e366b1cad37026c7ad7c34e82cbd8ce8dde4b548bf14073a9";
    }
    const { data, onConfirm, onEdit } = t0;
    const [agreed, setAgreed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== agreed || $[2] !== onConfirm) {
        t1 = ()=>{
            if (agreed) {
                onConfirm();
            } else {
                alert("Please agree to the terms");
            }
        };
        $[1] = agreed;
        $[2] = onConfirm;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleConfirm = t1;
    let t2;
    if ($[4] !== onEdit) {
        t2 = (t3)=>{
            const { step } = t3;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onEdit(step),
                className: "btn btn-link btn-sm text-decoration-underline text-secondary p-0",
                children: "Edit"
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 48,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        };
        $[4] = onEdit;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const EditBtn = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display-5 fw-bold text-white mb-2",
                        children: "Review & Confirm"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                        lineNumber: 58,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white-50 lead mb-0",
                        children: "step 3 of 4 - Please review your booking details"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                        lineNumber: 58,
                        columnNumber: 145
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 58,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            marginTop: "-2rem"
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Service:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== data.serviceName) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t5,
                " ",
                data.serviceName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = data.serviceName;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "City:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== data.city) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t7,
                " ",
                data.city
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = data.city;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Date:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== data.date) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t9,
                " ",
                data.date
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = data.date;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Time:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== data.time) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(data.time);
        $[18] = data.time;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t11,
                " ",
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t10 || $[23] !== t13 || $[24] !== t6 || $[25] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t6,
                t8,
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t13;
        $[24] = t6;
        $[25] = t8;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== EditBtn) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 1
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = EditBtn;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t14 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    let t17;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Name:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== data.patientName) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t17,
                " ",
                data.patientName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = data.patientName;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Age:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== data.patientAge) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t19,
                " ",
                data.patientAge
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = data.patientAge;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Gender:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] !== data.patientGender) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t21,
                " ",
                data.patientGender
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = data.patientGender;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] !== t18 || $[42] !== t20 || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t18,
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t20;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== EditBtn) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = EditBtn;
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== t23 || $[48] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t23;
        $[48] = t24;
        $[49] = t25;
    } else {
        t25 = $[49];
    }
    let t26;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Name:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== data.guardianName) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t26,
                " ",
                data.guardianName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = data.guardianName;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    let t28;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Relationship:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t28;
    } else {
        t28 = $[53];
    }
    let t29;
    if ($[54] !== data.relationship) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t28,
                " ",
                data.relationship
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = data.relationship;
        $[55] = t29;
    } else {
        t29 = $[55];
    }
    let t30;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Mobile:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t30;
    } else {
        t30 = $[56];
    }
    let t31;
    if ($[57] !== data.mobile) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t30,
                " ",
                data.mobile
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = data.mobile;
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    let t32;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-muted d-inline-block",
            style: {
                width: "100px"
            },
            children: "Alternate:"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t32;
    } else {
        t32 = $[59];
    }
    let t33;
    if ($[60] !== data.alternateMobile) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1",
            children: [
                t32,
                " ",
                data.alternateMobile
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[60] = data.alternateMobile;
        $[61] = t33;
    } else {
        t33 = $[61];
    }
    let t34;
    if ($[62] !== t27 || $[63] !== t29 || $[64] !== t31 || $[65] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "small",
            children: [
                t27,
                t29,
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t27;
        $[63] = t29;
        $[64] = t31;
        $[65] = t33;
        $[66] = t34;
    } else {
        t34 = $[66];
    }
    let t35;
    if ($[67] !== EditBtn) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = EditBtn;
        $[68] = t35;
    } else {
        t35 = $[68];
    }
    let t36;
    if ($[69] !== t34 || $[70] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t34;
        $[70] = t35;
        $[71] = t36;
    } else {
        t36 = $[71];
    }
    let t37;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            minHeight: "100px"
        };
        $[72] = t37;
    } else {
        t37 = $[72];
    }
    let t38;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "h6 fw-normal text-secondary mb-2 text-uppercase",
            children: "Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 361,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t38;
    } else {
        t38 = $[73];
    }
    let t39;
    if ($[74] !== data.address) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-100",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-0 text-dark small",
                    children: data.address
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                    lineNumber: 368,
                    columnNumber: 39
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = data.address;
        $[75] = t39;
    } else {
        t39 = $[75];
    }
    let t40;
    if ($[76] !== EditBtn) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditBtn, {
            step: 2
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = EditBtn;
        $[77] = t40;
    } else {
        t40 = $[77];
    }
    let t41;
    if ($[78] !== t39 || $[79] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded border p-4 d-flex justify-content-between align-items-start",
            style: t37,
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 384,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t39;
        $[79] = t40;
        $[80] = t41;
    } else {
        t41 = $[80];
    }
    let t42;
    if ($[81] !== handleConfirm) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleConfirm,
            className: "d-lg-none btn btn-primary w-100 py-3 fs-5 shadow-sm mt-3",
            children: "Confirm Booking"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = handleConfirm;
        $[82] = t42;
    } else {
        t42 = $[82];
    }
    let t43;
    if ($[83] !== t16 || $[84] !== t25 || $[85] !== t36 || $[86] !== t41 || $[87] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex flex-column gap-3",
                children: [
                    t16,
                    t25,
                    t36,
                    t41,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 401,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t16;
        $[84] = t25;
        $[85] = t36;
        $[86] = t41;
        $[87] = t42;
        $[88] = t43;
    } else {
        t43 = $[88];
    }
    let t44;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = {
            top: "6rem",
            minHeight: "400px"
        };
        $[89] = t44;
    } else {
        t44 = $[89];
    }
    let t45;
    if ($[90] !== data.serviceName) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "h5 fw-bold mb-4",
            children: [
                "Service: ",
                data.serviceName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = data.serviceName;
        $[91] = t45;
    } else {
        t45 = $[91];
    }
    let t46;
    if ($[92] !== data.city) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "City: ",
                data.city
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = data.city;
        $[93] = t46;
    } else {
        t46 = $[93];
    }
    const t47 = data.date;
    let t48;
    if ($[94] !== data.time) {
        t48 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimeTo12H"])(data.time);
        $[94] = data.time;
        $[95] = t48;
    } else {
        t48 = $[95];
    }
    let t49;
    if ($[96] !== data.date || $[97] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Date & Time: ",
                t47,
                ", ",
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 448,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[96] = data.date;
        $[97] = t48;
        $[98] = t49;
    } else {
        t49 = $[98];
    }
    let t50;
    if ($[99] !== data.patientName) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Patient: ",
                data.patientName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = data.patientName;
        $[100] = t50;
    } else {
        t50 = $[100];
    }
    let t51;
    if ($[101] !== data.guardianName) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2",
            children: [
                "Guardian: ",
                data.guardianName
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = data.guardianName;
        $[102] = t51;
    } else {
        t51 = $[102];
    }
    let t52;
    if ($[103] !== t45 || $[104] !== t46 || $[105] !== t49 || $[106] !== t50 || $[107] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-grow-1",
            children: [
                t45,
                t46,
                t49,
                t50,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[103] = t45;
        $[104] = t46;
        $[105] = t49;
        $[106] = t50;
        $[107] = t51;
        $[108] = t52;
    } else {
        t52 = $[108];
    }
    let t53;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = (e)=>setAgreed(e.target.checked);
        $[109] = t53;
    } else {
        t53 = $[109];
    }
    let t54;
    if ($[110] !== agreed) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form-check-input",
            type: "checkbox",
            id: "agreeCheck",
            checked: agreed,
            onChange: t53
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[110] = agreed;
        $[111] = t54;
    } else {
        t54 = $[111];
    }
    let t55;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-check-label small lh-sm",
            htmlFor: "agreeCheck",
            children: "I confirm the details provided are accurate and agree to the terms."
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[112] = t55;
    } else {
        t55 = $[112];
    }
    let t56;
    if ($[113] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 pt-4 border-top border-white border-opacity-25",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-check",
                children: [
                    t54,
                    t55
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 507,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 507,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[113] = t54;
        $[114] = t56;
    } else {
        t56 = $[114];
    }
    let t57;
    if ($[115] !== t52 || $[116] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-4 d-none d-lg-block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white rounded p-4 shadow sticky-top d-flex flex-column",
                style: t44,
                children: [
                    t52,
                    t56
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 515,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 515,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[115] = t52;
        $[116] = t56;
        $[117] = t57;
    } else {
        t57 = $[117];
    }
    let t58;
    if ($[118] !== t43 || $[119] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-4",
            children: [
                t43,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[118] = t43;
        $[119] = t57;
        $[120] = t58;
    } else {
        t58 = $[120];
    }
    const t59 = !agreed;
    let t60;
    if ($[121] !== handleConfirm || $[122] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-none d-lg-block mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleConfirm,
                disabled: t59,
                className: "btn btn-primary w-100 py-3 fs-4 fw-medium shadow-sm",
                children: "Confirm Booking"
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                lineNumber: 534,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[121] = handleConfirm;
        $[122] = t59;
        $[123] = t60;
    } else {
        t60 = $[123];
    }
    let t61;
    if ($[124] !== t58 || $[125] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "bg-light min-vh-100",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container pb-5",
                    style: t4,
                    children: [
                        t58,
                        t60
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
                    lineNumber: 543,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx",
            lineNumber: 543,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[124] = t58;
        $[125] = t60;
        $[126] = t61;
    } else {
        t61 = $[126];
    }
    return t61;
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
"[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/book/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingStep3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingSuccess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/Booking/BookingSuccess.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BookPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "beccc6585881be6b79e779b7b765ea6d3f072bf03d431efb275ff4da68c603c5") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "beccc6585881be6b79e779b7b765ea6d3f072bf03d431efb275ff4da68c603c5";
    }
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            serviceId: "",
            serviceName: "",
            city: [
                "Chennai"
            ],
            date: "",
            time: "",
            patientName: "",
            patientAge: "",
            patientGender: "",
            guardianName: "",
            relationship: "",
            mobile: "",
            alternateMobile: "",
            address: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [bookingData, setBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "BookPage[updateData]": (updates)=>{
                setBookingData({
                    "BookPage[updateData > setBookingData()]": (prev)=>({
                            ...prev,
                            ...updates
                        })
                }["BookPage[updateData > setBookingData()]"]);
            }
        })["BookPage[updateData]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const updateData = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "BookPage[nextStep]": ()=>setStep(_BookPageNextStepSetStep)
        })["BookPage[nextStep]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const nextStep = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "BookPage[prevStep]": ()=>setStep(_BookPagePrevStepSetStep)
        })["BookPage[prevStep]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const prevStep = t3;
    let t4;
    if ($[5] !== bookingData || $[6] !== step) {
        t4 = step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep1"], {
            data: bookingData,
            updateData: updateData,
            onNext: nextStep
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/book/page.tsx",
            lineNumber: 80,
            columnNumber: 24
        }, this);
        $[5] = bookingData;
        $[6] = step;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== bookingData || $[9] !== step) {
        t5 = step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep2"], {
            data: bookingData,
            updateData: updateData,
            onNext: nextStep,
            onBack: prevStep
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/book/page.tsx",
            lineNumber: 89,
            columnNumber: 24
        }, this);
        $[8] = bookingData;
        $[9] = step;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== bookingData || $[12] !== step) {
        t6 = step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingStep3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingStep3"], {
            data: bookingData,
            onConfirm: nextStep,
            onEdit: {
                "BookPage[<BookingStep3>.onEdit]": (s)=>setStep(s)
            }["BookPage[<BookingStep3>.onEdit]"]
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/book/page.tsx",
            lineNumber: 98,
            columnNumber: 24
        }, this);
        $[11] = bookingData;
        $[12] = step;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== bookingData || $[15] !== step) {
        t7 = step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$app$2f28$pages$292f$Booking$2f$BookingSuccess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookingSuccess"], {
            data: bookingData
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/(pages)/book/page.tsx",
            lineNumber: 109,
            columnNumber: 24
        }, this);
        $[14] = bookingData;
        $[15] = step;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t4 || $[18] !== t5 || $[19] !== t6 || $[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t5,
                t6,
                t7
            ]
        }, void 0, true);
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    return t8;
}
_s(BookPage, "//+Q9HbWtRI8jeLtG9Xb0p3U+g8=");
_c = BookPage;
function _BookPagePrevStepSetStep(prev_1) {
    return prev_1 - 1;
}
function _BookPageNextStepSetStep(prev_0) {
    return prev_0 + 1;
}
var _c;
__turbopack_context__.k.register(_c, "BookPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_d0ffd3d8._.js.map