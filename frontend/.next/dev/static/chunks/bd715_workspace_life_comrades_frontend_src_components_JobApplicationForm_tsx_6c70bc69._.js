(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobApplicationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function JobApplicationForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(98);
    if ($[0] !== "bc7db17e7622ec4b3710bdcef87b0bb1daf1006ca84113fad575a19c91a9f97a") {
        for(let $i = 0; $i < 98; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc7db17e7622ec4b3710bdcef87b0bb1daf1006ca84113fad575a19c91a9f97a";
    }
    const { jobId, jobTitle } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            fullName: "",
            mobile: "",
            email: "",
            tenthStatus: "Passed",
            tenthMarks: "",
            twelfthStatus: "Passed",
            twelfthMarks: "",
            nursingQualification: "ANM",
            isGovtRegistered: "No",
            registrationNumber: "",
            experienceLevel: "Fresher",
            currentAddress: "",
            nativeAddress: "",
            message: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "JobApplicationForm[handleChange]": (e)=>{
                const { name, value } = e.target;
                setFormData({
                    "JobApplicationForm[handleChange > setFormData()]": (prev)=>({
                            ...prev,
                            [name]: value
                        })
                }["JobApplicationForm[handleChange > setFormData()]"]);
            }
        })["JobApplicationForm[handleChange]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const handleChange = t2;
    let t3;
    if ($[3] !== formData || $[4] !== jobId || $[5] !== jobTitle) {
        t3 = ({
            "JobApplicationForm[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                if (formData.fullName.length < 3) {
                    alert("Full Name must be at least 3 characters.");
                    return;
                }
                if (!/^\d{10}$/.test(formData.mobile)) {
                    alert("Contact Number must be exactly 10 digits.");
                    return;
                }
                setSubmitting(true);
                ;
                try {
                    await new Promise(_temp);
                    console.log("Job Application Submitted:", {
                        jobId,
                        jobTitle,
                        ...formData,
                        isGovtRegistered: formData.isGovtRegistered === "Yes"
                    });
                    setSubmitting(false);
                    setSubmitted(true);
                } catch (t4) {
                    const error = t4;
                    console.error("Error submitting application:", error);
                    alert("Failed to submit application. Please try again.");
                    setSubmitting(false);
                }
            }
        })["JobApplicationForm[handleSubmit]"];
        $[3] = formData;
        $[4] = jobId;
        $[5] = jobTitle;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleSubmit = t3;
    if (submitted) {
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "display-4 text-success mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "bi bi-check-circle-fill"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                            lineNumber: 111,
                            columnNumber: 91
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                        lineNumber: 111,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "fw-bold",
                        children: "Application Sent!"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                        lineNumber: 111,
                        columnNumber: 138
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-secondary",
                        children: "Thank you for applying. Our HR team will review your application and get back to you soon."
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                        lineNumber: 111,
                        columnNumber: 184
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "JobApplicationForm[<button>.onClick]": ()=>setSubmitted(false)
                        }["JobApplicationForm[<button>.onClick]"],
                        className: "btn btn-outline-primary mt-3",
                        children: "Submit another application"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                        lineNumber: 111,
                        columnNumber: 308
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                lineNumber: 111,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Full Name"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== formData.fullName) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "fullName",
                    required: true,
                    className: "form-control",
                    placeholder: "Min 3 characters",
                    value: formData.fullName,
                    onChange: handleChange,
                    minLength: 3
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 129,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[9] = formData.fullName;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Contact Number"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== formData.mobile) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    name: "mobile",
                    required: true,
                    className: "form-control",
                    placeholder: "10-digit mobile",
                    value: formData.mobile,
                    onChange: handleChange,
                    pattern: "\\d{10}"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 144,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[12] = formData.mobile;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Email Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== formData.email) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    required: true,
                    className: "form-control",
                    placeholder: "Standard format",
                    value: formData.email,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 159,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        $[15] = formData.email;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "10th Status"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Passed",
            children: "Passed"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Failed",
            children: "Failed"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[18] = t11;
        $[19] = t12;
    } else {
        t11 = $[18];
        t12 = $[19];
    }
    let t13;
    if ($[20] !== formData.tenthStatus) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "tenthStatus",
                    className: "form-select",
                    value: formData.tenthStatus,
                    onChange: handleChange,
                    children: [
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 185,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[20] = formData.tenthStatus;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== formData.tenthMarks || $[23] !== formData.tenthStatus) {
        t14 = formData.tenthStatus === "Passed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "form-label fw-bold small text-dark",
                    children: "10th Marks (%)"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 193,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "tenthMarks",
                    required: true,
                    className: "form-control",
                    placeholder: "e.g. 85",
                    value: formData.tenthMarks,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 193,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 193,
            columnNumber: 48
        }, this);
        $[22] = formData.tenthMarks;
        $[23] = formData.tenthStatus;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "12th Status"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    let t17;
    let t18;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Passed",
            children: "Passed"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Failed",
            children: "Failed"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Diploma",
            children: "Diploma"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
    } else {
        t16 = $[26];
        t17 = $[27];
        t18 = $[28];
    }
    let t19;
    if ($[29] !== formData.twelfthStatus) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "twelfthStatus",
                    className: "form-select",
                    value: formData.twelfthStatus,
                    onChange: handleChange,
                    children: [
                        t16,
                        t17,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 224,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[29] = formData.twelfthStatus;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== formData.twelfthMarks || $[32] !== formData.twelfthStatus) {
        t20 = formData.twelfthStatus === "Passed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-md-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "form-label fw-bold small text-dark",
                    children: "12th Marks (%)"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 232,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "twelfthMarks",
                    required: true,
                    className: "form-control",
                    placeholder: "e.g. 90",
                    value: formData.twelfthMarks,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 232,
                    columnNumber: 152
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 232,
            columnNumber: 50
        }, this);
        $[31] = formData.twelfthMarks;
        $[32] = formData.twelfthStatus;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Nursing Qualification"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    let t23;
    let t24;
    let t25;
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ANM",
            children: "ANM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "GNM",
            children: "GNM"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "B.Sc Nursing",
            children: "B.Sc Nursing"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Post Basic B.Sc",
            children: "Post Basic B.Sc"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "M.Sc Nursing",
            children: "M.Sc Nursing"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[35] = t22;
        $[36] = t23;
        $[37] = t24;
        $[38] = t25;
        $[39] = t26;
    } else {
        t22 = $[35];
        t23 = $[36];
        t24 = $[37];
        t25 = $[38];
        t26 = $[39];
    }
    let t27;
    if ($[40] !== formData.nursingQualification) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "nursingQualification",
                    className: "form-select",
                    value: formData.nursingQualification,
                    onChange: handleChange,
                    children: [
                        t22,
                        t23,
                        t24,
                        t25,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 271,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[40] = formData.nursingQualification;
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark d-block",
            children: "Govt. Registered?"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[42] = t28;
    } else {
        t28 = $[42];
    }
    const t29 = formData.isGovtRegistered === "Yes";
    let t30;
    if ($[43] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form-check-input",
            type: "radio",
            name: "isGovtRegistered",
            id: "regYes",
            value: "Yes",
            checked: t29,
            onChange: handleChange
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[43] = t29;
        $[44] = t30;
    } else {
        t30 = $[44];
    }
    let t31;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-check-label",
            htmlFor: "regYes",
            children: "Yes"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    let t32;
    if ($[46] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-check form-check-inline",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[46] = t30;
        $[47] = t32;
    } else {
        t32 = $[47];
    }
    const t33 = formData.isGovtRegistered === "No";
    let t34;
    if ($[48] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: "form-check-input",
            type: "radio",
            name: "isGovtRegistered",
            id: "regNo",
            value: "No",
            checked: t33,
            onChange: handleChange
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[48] = t33;
        $[49] = t34;
    } else {
        t34 = $[49];
    }
    let t35;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-check-label",
            htmlFor: "regNo",
            children: "No"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[50] = t35;
    } else {
        t35 = $[50];
    }
    let t36;
    if ($[51] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-check form-check-inline",
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[51] = t34;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    let t37;
    if ($[53] !== t32 || $[54] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t28,
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[53] = t32;
        $[54] = t36;
        $[55] = t37;
    } else {
        t37 = $[55];
    }
    let t38;
    if ($[56] !== formData.isGovtRegistered || $[57] !== formData.registrationNumber) {
        t38 = formData.isGovtRegistered === "Yes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "form-label fw-bold small text-dark",
                    children: "Registration Number"
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 343,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "registrationNumber",
                    required: true,
                    className: "form-control",
                    placeholder: "Enter number",
                    value: formData.registrationNumber,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 343,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 343,
            columnNumber: 50
        }, this);
        $[56] = formData.isGovtRegistered;
        $[57] = formData.registrationNumber;
        $[58] = t38;
    } else {
        t38 = $[58];
    }
    let t39;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Experience Level"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 352,
            columnNumber: 11
        }, this);
        $[59] = t39;
    } else {
        t39 = $[59];
    }
    let t40;
    let t41;
    let t42;
    let t43;
    let t44;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Fresher",
            children: "Fresher"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "<1 Year",
            children: "<1 Year"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "1-3 Years",
            children: "1-3 Years"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "3-5 Years",
            children: "3-5 Years"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "5+ Years",
            children: "5+ Years"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[60] = t40;
        $[61] = t41;
        $[62] = t42;
        $[63] = t43;
        $[64] = t44;
    } else {
        t40 = $[60];
        t41 = $[61];
        t42 = $[62];
        t43 = $[63];
        t44 = $[64];
    }
    let t45;
    if ($[65] !== formData.experienceLevel) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "experienceLevel",
                    className: "form-select",
                    value: formData.experienceLevel,
                    onChange: handleChange,
                    children: [
                        t40,
                        t41,
                        t42,
                        t43,
                        t44
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 382,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[65] = formData.experienceLevel;
        $[66] = t45;
    } else {
        t45 = $[66];
    }
    let t46;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Current Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[67] = t46;
    } else {
        t46 = $[67];
    }
    let t47;
    if ($[68] !== formData.currentAddress) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "currentAddress",
                    required: true,
                    className: "form-control",
                    rows: 2,
                    placeholder: "Street address + City",
                    value: formData.currentAddress,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 397,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 397,
            columnNumber: 11
        }, this);
        $[68] = formData.currentAddress;
        $[69] = t47;
    } else {
        t47 = $[69];
    }
    let t48;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Native Address"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 405,
            columnNumber: 11
        }, this);
        $[70] = t48;
    } else {
        t48 = $[70];
    }
    let t49;
    if ($[71] !== formData.nativeAddress) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t48,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "nativeAddress",
                    required: true,
                    className: "form-control",
                    rows: 2,
                    placeholder: "Permanent home address",
                    value: formData.nativeAddress,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 412,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 412,
            columnNumber: 11
        }, this);
        $[71] = formData.nativeAddress;
        $[72] = t49;
    } else {
        t49 = $[72];
    }
    let t50;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label fw-bold small text-dark",
            children: "Message (Optional)"
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[73] = t50;
    } else {
        t50 = $[73];
    }
    let t51;
    if ($[74] !== formData.message) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-12",
            children: [
                t50,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: "message",
                    className: "form-control",
                    rows: 2,
                    placeholder: "Additional info...",
                    value: formData.message,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
                    lineNumber: 427,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, this);
        $[74] = formData.message;
        $[75] = t51;
    } else {
        t51 = $[75];
    }
    let t52;
    if ($[76] !== t13 || $[77] !== t14 || $[78] !== t19 || $[79] !== t20 || $[80] !== t27 || $[81] !== t37 || $[82] !== t38 || $[83] !== t45 || $[84] !== t47 || $[85] !== t49 || $[86] !== t5 || $[87] !== t51 || $[88] !== t7 || $[89] !== t9) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row g-3",
            children: [
                t5,
                t7,
                t9,
                t13,
                t14,
                t19,
                t20,
                t27,
                t37,
                t38,
                t45,
                t47,
                t49,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[76] = t13;
        $[77] = t14;
        $[78] = t19;
        $[79] = t20;
        $[80] = t27;
        $[81] = t37;
        $[82] = t38;
        $[83] = t45;
        $[84] = t47;
        $[85] = t49;
        $[86] = t5;
        $[87] = t51;
        $[88] = t7;
        $[89] = t9;
        $[90] = t52;
    } else {
        t52 = $[90];
    }
    const t53 = submitting ? "Submitting..." : "Submit Application";
    let t54;
    if ($[91] !== submitting || $[92] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: submitting,
            className: "btn btn-primary w-100 fw-bold py-2 mt-4",
            children: t53
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[91] = submitting;
        $[92] = t53;
        $[93] = t54;
    } else {
        t54 = $[93];
    }
    let t55;
    if ($[94] !== handleSubmit || $[95] !== t52 || $[96] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [
                t52,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/components/JobApplicationForm.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[94] = handleSubmit;
        $[95] = t52;
        $[96] = t54;
        $[97] = t55;
    } else {
        t55 = $[97];
    }
    return t55;
}
_s(JobApplicationForm, "kcBZBdLjtGgcKnaji4hMId7Fd0g=");
_c = JobApplicationForm;
function _temp(resolve) {
    return setTimeout(resolve, 1500);
}
var _c;
__turbopack_context__.k.register(_c, "JobApplicationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bd715_workspace_life_comrades_frontend_src_components_JobApplicationForm_tsx_6c70bc69._.js.map