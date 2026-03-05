(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "304ce3bd391ad2da3000a8f24782ce6220dc6d87935b4bea9fea42c88f08d7a8") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "304ce3bd391ad2da3000a8f24782ce6220dc6d87935b4bea9fea42c88f08d7a8";
    }
    const { heroData, services, cities } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "/images/slides/1.jpg",
            "/images/slides/2.jpg",
            "/images/slides/3.jpg"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const images = t1;
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "HeroSection[useEffect()]": ()=>{
                if (images.length <= 1) {
                    return;
                }
                const interval = setInterval({
                    "HeroSection[useEffect() > setInterval()]": ()=>{
                        setIsTransitioning(true);
                        setTimeout({
                            "HeroSection[useEffect() > setInterval() > setTimeout()]": ()=>{
                                setCurrentImageIndex({
                                    "HeroSection[useEffect() > setInterval() > setTimeout() > setCurrentImageIndex()]": (prev)=>(prev + 1) % images.length
                                }["HeroSection[useEffect() > setInterval() > setTimeout() > setCurrentImageIndex()]"]);
                                setIsTransitioning(false);
                            }
                        }["HeroSection[useEffect() > setInterval() > setTimeout()]"], 500);
                    }
                }["HeroSection[useEffect() > setInterval()]"], 3000);
                return ()=>clearInterval(interval);
            }
        })["HeroSection[useEffect()]"];
        t3 = [
            images.length
        ];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            minHeight: "600px",
            display: "flex",
            alignItems: "center"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== currentImageIndex) {
        t5 = images.map({
            "HeroSection[images.map()]": (img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "position-absolute w-100 h-100 top-0 start-0 transition-opacity",
                    style: {
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: index === currentImageIndex ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                        zIndex: index === currentImageIndex ? 1 : 0
                    }
                }, img, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                    lineNumber: 81,
                    columnNumber: 52
                }, this)
        }["HeroSection[images.map()]"]);
        $[5] = currentImageIndex;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-absolute w-100 h-100 top-0 start-0",
            style: {
                background: "linear-gradient(90deg, rgba(13, 148, 136, 1) 0%, rgba(13, 148, 136, 0.8) 20%, rgba(13, 148, 136, 0) 100%)",
                zIndex: 2
            }
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-absolute w-100 h-100 top-0 start-0 z-0 text-white",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            lineHeight: "1.2",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)"
        };
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== heroData.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "display-4 fw-bold mb-4",
            style: t8,
            children: heroData.title
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[11] = heroData.title;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            fontSize: "1.2rem",
            maxWidth: "500px",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)"
        };
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== heroData.subtitle) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "lead opacity-90 mb-0",
            style: t10,
            children: heroData.subtitle
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[14] = heroData.subtitle;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11 || $[17] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-6 mb-5 mb-lg-0 text-white",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t9;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            maxWidth: "450px",
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)"
        };
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "fw-bold mb-4 text-dark",
            children: "Quick Booking"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label mb-2 fw-semibold text-muted small",
            children: "Select City"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== cities) {
        t16 = cities.map(_HeroSectionCitiesMap);
        $[22] = cities;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "form-select border-secondary-subtle py-2 bg-white",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                    lineNumber: 195,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label mb-2 fw-semibold text-muted small",
            children: "Select Service"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== services) {
        t19 = services.map(_HeroSectionServicesMap);
        $[27] = services;
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "form-select border-secondary-subtle py-2 bg-white",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                    lineNumber: 218,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[29] = t19;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12 mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/book",
                className: "btn btn-primary btn-lg w-100 fw-bold shadow-sm",
                style: {
                    backgroundColor: "#0D9488",
                    border: "none"
                },
                children: "Book Now →"
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                lineNumber: 226,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-3",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[32] = t20;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            fontSize: "0.75rem"
        };
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] !== cities[0]) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted mt-4 mb-0 text-center",
            style: t23,
            children: [
                "Available across ",
                cities[0],
                " with verified professionals"
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[35] = cities[0];
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    let t25;
    if ($[37] !== t17 || $[38] !== t22 || $[39] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card shadow-lg border-0 ms-auto",
                style: t13,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body p-4 p-md-5",
                    children: [
                        t14,
                        t17,
                        t22,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                    lineNumber: 261,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                lineNumber: 261,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t22;
        $[39] = t24;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t12 || $[42] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container position-relative z-3 py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row align-items-center",
                children: [
                    t12,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
                lineNumber: 271,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[41] = t12;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t26 || $[45] !== t7) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "position-relative overflow-hidden",
            style: t4,
            children: [
                t7,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[44] = t26;
        $[45] = t7;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    return t27;
}
_s(HeroSection, "OA/2S3QcTZ5UN8LyHNbK4gBjQhg=");
_c = HeroSection;
function _HeroSectionServicesMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        children: s.title
    }, s.id, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
        lineNumber: 290,
        columnNumber: 10
    }, this);
}
function _HeroSectionCitiesMap(city) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        children: city
    }, city, false, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/HeroSection.tsx",
        lineNumber: 293,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Testimonial(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "f3c91422b4a2351ef0bf19f404990c832808bb20fd496bbe112a603f6e42d826") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3c91422b4a2351ef0bf19f404990c832808bb20fd496bbe112a603f6e42d826";
    }
    const { quote, author, location } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-blue-500 text-4xl mb-4",
            children: "“"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== quote) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 italic text-lg leading-relaxed",
                    children: quote
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
                    lineNumber: 28,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = quote;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== author[0]) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3",
            children: author[0]
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = author[0];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== author) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-gray-900",
            children: author
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = author;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== location) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500",
            children: location
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[8] = location;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex items-center",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t2 || $[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300",
            children: [
                t2,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/Testimonial.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[16] = t2;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_c = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // const TestimonialList = () => {
 //   const testimonials = [
 //     {
 //       id: 't1',
 //       quote: 'The nurse was professional and caring throughout the service.',
 //       author: 'Anita',
 //       location: 'Chennai',
 //       serviceId: 'home-nursing'
 //     },
 //     {
 //       id: 't2',
 //       quote: 'The ICU setup at home was a lifesaver for my father. Highly professional team.',
 //       author: 'Vikas',
 //       location: 'Chennai',
 //       serviceId: 'icu-home'
 //     }
 //   ];
 //   return (
 //     <div className="bg-gray-50 py-12 px-4">
 //       <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
 //       <div className="flex flex-wrap justify-center gap-6">
 //         {testimonials.map((item) => (
 //           <TestimonialCard
 //             key={item.id}
 //             quote={item.quote}
 //             author={item.author}
 //             location={item.location}
 //           />
 //         ))}
 //       </div>
 //     </div>
 //   );
 // };
 // export default TestimonialList;
}),
]);

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_components_91e5d1e2._.js.map