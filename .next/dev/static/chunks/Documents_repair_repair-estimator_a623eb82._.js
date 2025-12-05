(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/DeviceForm.tsx
__turbopack_context__.s([
    "default",
    ()=>DeviceForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function DeviceForm({ onSubmit, isLoading }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        userName: '',
        userEmail: '',
        deviceType: '',
        deviceBrand: '',
        deviceModel: '',
        deviceIssue: ''
    });
    const handleChange = (e)=>{
        const { id, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
        // Reset form
        setFormData({
            userName: '',
            userEmail: '',
            deviceType: '',
            deviceBrand: '',
            deviceModel: '',
            deviceIssue: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "userName",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-user text-blue-500 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    "Your Name"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "userName",
                                value: formData.userName,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "Enter your full name",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "userEmail",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-envelope text-blue-500 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    "Email Address"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                id: "userEmail",
                                value: formData.userEmail,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "Enter your email for the quote",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "deviceType",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-mobile-alt text-purple-500 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    "Device Type"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "deviceType",
                                value: formData.deviceType,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select device type"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "smartphone",
                                        children: "Smartphone"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "tablet",
                                        children: "Tablet"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "laptop",
                                        children: "Laptop"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "desktop",
                                        children: "Desktop Computer"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "smartwatch",
                                        children: "Smartwatch"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "deviceBrand",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-tag text-purple-500 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    "Device Brand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "deviceBrand",
                                value: formData.deviceBrand,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select brand"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "apple",
                                        children: "Apple"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "samsung",
                                        children: "Samsung"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "google",
                                        children: "Google"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "microsoft",
                                        children: "Microsoft"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "dell",
                                        children: "Dell"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "hp",
                                        children: "HP"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "lenovo",
                                        children: "Lenovo"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sony",
                                        children: "Sony"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "other",
                                        children: "Other"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "deviceModel",
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-microchip text-purple-500 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    "Device Model"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "deviceModel",
                                value: formData.deviceModel,
                                onChange: handleChange,
                                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                placeholder: "e.g., iPhone 12, Galaxy S21",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "deviceIssue",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-exclamation-triangle text-red-500 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            "Describe the Issue"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "deviceIssue",
                        value: formData.deviceIssue,
                        onChange: handleChange,
                        rows: 4,
                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        placeholder: "Please describe the problem with your device in detail...",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isLoading,
                className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-spinner fa-spin mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        "Processing..."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fas fa-paper-plane mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        "Submit for Quote"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(DeviceForm, "NeF+xdmyTHomFj4f4M/6dhAKMQ8=");
_c = DeviceForm;
var _c;
__turbopack_context__.k.register(_c, "DeviceForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/QuoteDisplay.tsx
__turbopack_context__.s([
    "default",
    ()=>QuoteDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function QuoteDisplay({ quote }) {
    const getStatusColor = (status)=>{
        switch(status){
            case 'repairable':
                return 'bg-green-100 text-green-800';
            case 'assessment':
                return 'bg-yellow-100 text-yellow-800';
            case 'pending':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'repairable':
                return 'fa-check-circle';
            case 'assessment':
                return 'fa-hourglass-half';
            case 'pending':
                return 'fa-clock';
            default:
                return 'fa-question-circle';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-blue-100 rounded-lg mr-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-dollar-sign text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-blue-600 font-semibold uppercase tracking-wide",
                                                children: "ESTIMATED COST"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: quote.cost
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: "Diagnostic fee may apply"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-purple-100 rounded-lg mr-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-clock text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-purple-600 font-semibold uppercase tracking-wide",
                                                children: "TURNAROUND TIME"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: quote.time
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: "From diagnostic to completion"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-gray-100 rounded-lg mr-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-microchip text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-600 font-semibold uppercase tracking-wide",
                                                children: "DEVICE ID"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-mono font-bold text-gray-900 truncate",
                                                children: quote.deviceId
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: "Your unique reference"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-gray-50 p-4 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium text-gray-700",
                                children: "Repair Status"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mt-2 ${getStatusColor(quote.status)}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fas ${getStatusIcon(quote.status)} mr-2`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    quote.status.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-download mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            "Download Quote PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 px-5 py-3 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-medium text-gray-700 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fas fa-clipboard-check text-green-600 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                "TECHNICAL ASSESSMENT"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700",
                            children: quote.assessment
                        }, void 0, false, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            quote.formData && quote.deviceInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-gray-200 rounded-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 px-5 py-3 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-medium text-gray-700 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fas fa-laptop text-blue-600 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                "DEVICE INFORMATION"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-medium text-gray-500 mb-2",
                                            children: "CUSTOMER DETAILS"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-user text-gray-400 mr-2 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: quote.formData.userName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-envelope text-gray-400 mr-2 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: quote.formData.userEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "text-sm font-medium text-gray-500 mb-2",
                                            children: "DEVICE DETAILS"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-mobile-alt text-gray-400 mr-2 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: quote.deviceInfo.deviceName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-tag text-gray-400 mr-2 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700 capitalize",
                                                            children: quote.formData.deviceType
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-calendar-check mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            "Schedule Repair"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-question-circle mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            "Ask Questions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-share-alt mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            "Share Quote"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = QuoteDisplay;
var _c;
__turbopack_context__.k.register(_c, "QuoteDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/SubmissionsList.tsx
__turbopack_context__.s([
    "default",
    ()=>SubmissionsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SubmissionsList({ submissions, onRespond, onUpdateStatus }) {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredSubmissions = submissions.filter((submission)=>{
        if (filter === 'all') return true;
        if (filter === 'pending') return submission.status === 'pending';
        if (filter === 'replied') return submission.status === 'replied';
        if (filter === 'repairable') return submission.quote?.status === 'repairable';
        if (filter === 'assessment') return submission.quote?.status === 'assessment';
        return true;
    });
    const getStatusColor = (status)=>{
        switch(status){
            case 'repairable':
                return 'bg-green-100 text-green-800';
            case 'assessment':
                return 'bg-yellow-100 text-yellow-800';
            case 'pending':
                return 'bg-blue-100 text-blue-800';
            case 'replied':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'repairable':
                return 'fa-check-circle';
            case 'assessment':
                return 'fa-hourglass-half';
            case 'pending':
                return 'fa-clock';
            case 'replied':
                return 'fa-reply';
            default:
                return 'fa-question-circle';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between mb-6 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-filter text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filter,
                                onChange: (e)=>setFilter(e.target.value),
                                className: "px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "All Submissions"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pending",
                                        children: "Pending Response"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "replied",
                                        children: "Replied"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "repairable",
                                        children: "Repairable"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "assessment",
                                        children: "Needs Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-database mr-1"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            submissions.length,
                            " total submissions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            filteredSubmissions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-inbox text-gray-300 text-4xl mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No submissions found"
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm mt-2",
                        children: filter !== 'all' ? 'Try changing your filter' : 'Submit a device to see it here'
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredSubmissions.map((submission)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-lg text-gray-800",
                                                            children: submission.deviceInfo?.deviceName || `${submission.deviceBrand} ${submission.deviceModel}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fas fa-user mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        submission.userName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fas fa-calendar mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        new Date(submission.timestamp).toLocaleDateString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(submission.quote?.status)}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fas ${getStatusIcon(submission.quote?.status)} mr-1`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 23
                                                        }, this),
                                                        submission.quote?.status || 'pending'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-gray-700 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-exclamation-triangle text-red-500 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Issue Description"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 bg-gray-50 p-3 rounded-lg",
                                                    children: submission.deviceIssue
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-blue-50 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-blue-600 font-medium mb-1",
                                                            children: "ESTIMATED COST"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-gray-800",
                                                            children: submission.quote?.cost || 'Not quoted'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-purple-50 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-purple-600 font-medium mb-1",
                                                            children: "TURNAROUND TIME"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-gray-800",
                                                            children: submission.quote?.time || 'Not estimated'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 p-3 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-600 font-medium mb-1",
                                                            children: "DEVICE ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-mono text-sm text-gray-800 truncate",
                                                            children: submission.quote?.deviceId || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col space-y-3 md:w-48",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onRespond(submission.id),
                                            className: "w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-reply mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this),
                                                "Respond"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600 font-medium",
                                                    children: "Update Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: submission.status || 'pending',
                                                    onChange: (e)=>onUpdateStatus(submission.id, e.target.value),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "pending",
                                                            children: "Pending Review"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "diagnostic",
                                                            children: "Diagnostic Needed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "quoted",
                                                            children: "Quoted"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "approved",
                                                            children: "Approved by Customer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "in-progress",
                                                            children: "Repair In Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "completed",
                                                            children: "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "cancelled",
                                                            children: "Cancelled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fas fa-eye mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this),
                                                "View Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this)
                    }, submission.id, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(SubmissionsList, "W/UjwQokI5qYZ80z+yO8skpbfNg=");
_c = SubmissionsList;
var _c;
__turbopack_context__.k.register(_c, "SubmissionsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repair/repair-estimator/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/api.ts
__turbopack_context__.s([
    "fetchDeviceInfo",
    ()=>fetchDeviceInfo,
    "fetchPhoneSpecs",
    ()=>fetchPhoneSpecs
]);
async function fetchPhoneSpecs(brand, model, deviceType) {
    try {
        const deviceName = `${brand} ${model}`;
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(deviceName)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch device info from Wikipedia');
        }
        const data = await response.json();
        // Generate realistic specifications based on brand and model
        const specifications = generateSpecifications(brand, model, deviceType);
        return {
            deviceName: data.title || deviceName,
            deviceType: deviceType || determineDeviceType(brand, model),
            brand,
            model,
            description: data.extract || 'No description available',
            image: data.thumbnail?.source || null,
            specifications,
            source: 'Wikipedia API',
            apiSuccess: true
        };
    } catch (error) {
        console.error('Error fetching device specs:', error);
        // Fallback data if API fails
        return {
            deviceName: `${brand} ${model}`,
            deviceType: deviceType || 'smartphone',
            brand,
            model,
            description: 'Device information could not be fetched from API. Using local data.',
            specifications: generateSpecifications(brand, model, deviceType),
            source: 'Local Data',
            apiSuccess: false
        };
    }
}
async function fetchDeviceInfo(deviceName) {
    try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(deviceName)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch device info');
        }
        const data = await response.json();
        return {
            success: true,
            deviceName: data.title,
            description: data.extract,
            image: data.thumbnail?.source,
            source: 'Wikipedia API'
        };
    } catch (error) {
        console.error('Error fetching device info:', error);
        return {
            success: false,
            deviceName: deviceName,
            description: 'Device information not available from API',
            source: 'Local Data'
        };
    }
}
function determineDeviceType(brand, model) {
    const modelLower = model.toLowerCase();
    if (modelLower.includes('iphone') || modelLower.includes('galaxy') || modelLower.includes('pixel')) {
        return 'smartphone';
    } else if (modelLower.includes('macbook') || modelLower.includes('xps') || modelLower.includes('thinkpad')) {
        return 'laptop';
    } else if (modelLower.includes('ipad') || modelLower.includes('tab')) {
        return 'tablet';
    } else if (modelLower.includes('watch')) {
        return 'smartwatch';
    } else {
        return 'other';
    }
}
function generateSpecifications(brand, model, deviceType) {
    const specs = {};
    const brandLower = brand.toLowerCase();
    const modelLower = model.toLowerCase();
    const type = deviceType || determineDeviceType(brand, model);
    // Add basic specifications
    specs.brand = brand;
    specs.model = model;
    specs.type = type.charAt(0).toUpperCase() + type.slice(1);
    // Determine device type based on model or provided type
    if (type === 'smartphone') {
        specs.display = brandLower === 'apple' ? '6.1-inch Super Retina XDR' : '6.2-inch Dynamic AMOLED';
        specs.processor = brandLower === 'apple' ? 'A15 Bionic' : 'Snapdragon 8 Gen 2';
        specs.ram = brandLower === 'apple' ? '6GB' : '8GB';
        specs.storage = '128GB/256GB/512GB';
        specs.battery = 'Up to 20 hours video playback';
        specs.camera = 'Dual/Triple camera system';
    } else if (type === 'laptop') {
        specs.display = '13.3-inch/14-inch/15.6-inch Retina/FHD/4K';
        specs.processor = brandLower === 'apple' ? 'Apple M2/M3' : 'Intel Core i5/i7 or AMD Ryzen 5/7';
        specs.ram = '8GB/16GB/32GB';
        specs.storage = '256GB/512GB/1TB SSD';
        specs.graphics = 'Integrated/Discrete GPU';
        specs.battery = 'Up to 18 hours';
    } else if (type === 'tablet') {
        specs.display = '10.2-inch/10.9-inch/12.9-inch Retina Display';
        specs.processor = brandLower === 'apple' ? 'Apple M1/A14 Bionic' : 'Snapdragon 8cx/MediaTek Dimensity';
        specs.ram = '4GB/8GB';
        specs.storage = '64GB/128GB/256GB';
        specs.battery = 'Up to 10 hours';
    } else {
        specs.display = 'Various sizes available';
        specs.processor = 'Processor varies by model';
        specs.ram = 'Memory varies by model';
        specs.storage = 'Storage varies by model';
        specs.battery = 'Battery life varies';
    }
    if (brandLower === 'apple') {
        specs.os = type === 'smartphone' ? 'iOS' : type === 'laptop' ? 'macOS' : type === 'tablet' ? 'iPadOS' : 'Apple OS';
    } else if (brandLower === 'microsoft') {
        specs.os = 'Windows';
    } else if (brandLower === 'google') {
        specs.os = type === 'laptop' ? 'Chrome OS' : 'Android';
    } else {
        specs.os = 'Operating System varies';
    }
    return specs;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/repair/repair-estimator/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$DeviceForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/components/DeviceForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$QuoteDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/components/QuoteDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$SubmissionsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/components/SubmissionsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repair/repair-estimator/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const [submissions, setSubmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuote, setCurrentQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load submissions from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedSubmissions = localStorage.getItem('deviceSubmissions');
            if (savedSubmissions) {
                try {
                    setSubmissions(JSON.parse(savedSubmissions));
                } catch (error) {
                    console.error('Error parsing saved submissions:', error);
                }
            }
        }
    }["Home.useEffect"], []);
    const handleSubmit = async (formData)=>{
        setIsLoading(true);
        try {
            // Get device information from real API
            let deviceInfo;
            if (formData.deviceBrand && formData.deviceModel) {
                try {
                    // Try to get phone specs from Wikipedia API
                    deviceInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPhoneSpecs"])(formData.deviceBrand, formData.deviceModel, formData.deviceType);
                    // Make sure deviceType is set
                    if (!deviceInfo.deviceType) {
                        deviceInfo.deviceType = formData.deviceType;
                    }
                } catch (error) {
                    console.log('Could not fetch phone specs, using fallback');
                    // Fallback if API fails
                    deviceInfo = {
                        deviceName: `${formData.deviceBrand} ${formData.deviceModel}`,
                        deviceType: formData.deviceType,
                        specifications: {
                            message: 'Details not available from API'
                        }
                    };
                }
            } else {
                // If no API data, create basic device info
                deviceInfo = {
                    deviceName: `${formData.deviceBrand} ${formData.deviceModel}`,
                    deviceType: formData.deviceType,
                    specifications: {
                        message: 'Details not available from API'
                    }
                };
            }
            // Generate a repair quote
            const quote = generateRepairQuote(formData, deviceInfo);
            const newSubmission = {
                id: Date.now().toString(),
                ...formData,
                deviceInfo,
                quote,
                timestamp: new Date().toISOString(),
                status: 'pending'
            };
            // Update state
            const updatedSubmissions = [
                newSubmission,
                ...submissions
            ];
            setSubmissions(updatedSubmissions);
            setCurrentQuote({
                ...quote,
                formData,
                deviceInfo
            });
            // Save to localStorage
            localStorage.setItem('deviceSubmissions', JSON.stringify(updatedSubmissions));
            // Show success message
            alert(`Thank you ${formData.userName}! Your device information has been submitted. Your quote is ready.`);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    const generateRepairQuote = (formData, deviceInfo)=>{
        const issue = formData.deviceIssue.toLowerCase();
        let assessment, cost, time, status;
        // Realistic repair quote logic
        if (issue.includes('screen') || issue.includes('display') || issue.includes('crack')) {
            assessment = 'Screen replacement needed. Common repair with high success rate.';
            cost = formData.deviceType === 'smartphone' ? '$89 - $249' : formData.deviceType === 'tablet' ? '$129 - $399' : formData.deviceType === 'laptop' ? '$199 - $599' : '$149 - $499';
            time = '1-2 business days';
            status = 'repairable';
        } else if (issue.includes('battery') || issue.includes('charge')) {
            assessment = 'Battery replacement required. Standard procedure with OEM or high-quality replacement.';
            cost = '$69 - $199';
            time = '1 business day';
            status = 'repairable';
        } else if (issue.includes('water') || issue.includes('liquid')) {
            assessment = 'Water damage assessment needed. Requires diagnostic to determine extent of damage.';
            cost = '$49 (diagnostic) + repair cost';
            time = '3-5 business days';
            status = 'assessment';
        } else if (issue.includes('motherboard') || issue.includes('logic board')) {
            assessment = 'Complex motherboard repair. Requires specialized equipment and testing.';
            cost = '$199 - $899';
            time = '5-7 business days';
            status = 'repairable';
        } else if (issue.includes('software') || issue.includes('os') || issue.includes('update')) {
            assessment = 'Software issue. Can typically be resolved with diagnostic and software repair.';
            cost = '$49 - $149';
            time = '1 business day';
            status = 'repairable';
        } else {
            assessment = 'General repair needed. Requires diagnostic to provide accurate quote.';
            cost = '$49 (diagnostic fee)';
            time = '2-3 business days';
            status = 'assessment';
        }
        // Adjust cost based on device brand
        if (formData.deviceBrand === 'apple') {
            const costParts = cost.replace('$', '').split(' - ');
            const minCost = parseInt(costParts[0]) + 50;
            const maxCost = parseInt(costParts[1]) + 100;
            cost = `$${minCost} - $${maxCost}`;
        }
        return {
            assessment,
            cost,
            time,
            status,
            deviceId: `DEV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };
    };
    const handleRespond = (submissionId)=>{
        const submission = submissions.find((s)=>s.id === submissionId);
        if (submission) {
            alert(`Response sent to ${submission.userEmail} for ${submission.deviceInfo.deviceName}`);
        }
    };
    const handleUpdateStatus = (submissionId, newStatus)=>{
        const updatedSubmissions = submissions.map((submission)=>{
            if (submission.id === submissionId) {
                return {
                    ...submission,
                    status: newStatus
                };
            }
            return submission;
        });
        setSubmissions(updatedSubmissions);
        localStorage.setItem('deviceSubmissions', JSON.stringify(updatedSubmissions));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-6 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-laptop-medical text-blue-600 mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    "Device Information"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$DeviceForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onSubmit: handleSubmit,
                                isLoading: isLoading
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-6 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-file-invoice-dollar text-purple-600 mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    "Repair Quote"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            currentQuote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$QuoteDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                quote: currentQuote
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fas fa-search text-gray-300 text-4xl mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Submit a device to see your repair quote here"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-6 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-history text-blue-600 mr-3"
                            }, void 0, false, {
                                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            "Recent Submissions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repair$2f$repair$2d$estimator$2f$components$2f$SubmissionsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        submissions: submissions,
                        onRespond: handleRespond,
                        onUpdateStatus: handleUpdateStatus
                    }, void 0, false, {
                        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/repair/repair-estimator/app/page.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(Home, "nrZoyRrGpnzM10zaDZtmKX2SOM0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_repair_repair-estimator_a623eb82._.js.map