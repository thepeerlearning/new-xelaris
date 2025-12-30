(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ type = 'colored', onClick, children, className = '', htmlType = 'button', ...props }) {
    const baseStyles = 'flex items-center justify-center rounded-2xl font-medium text-sm tracking-[-0.4px] whitespace-nowrap transition-all duration-200';
    const coloredStyles = 'bg-[#fefc00] text-[#161a20] px-6 py-2.5 shadow-[inset_2px_2px_8px_0px_rgba(255,255,255,0.25),inset_-2px_-2px_7px_0px_rgba(0,0,0,0.15)] hover:opacity-90 active:opacity-80';
    const uncoloredStyles = 'bg-transparent text-white border border-white px-[2rem] py-2.5 hover:bg-white/10 active:bg-white/20';
    const buttonStyles = type === 'colored' ? coloredStyles : uncoloredStyles;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: htmlType,
        onClick: onClick,
        className: `${baseStyles} ${buttonStyles} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/AcceleratorPrograms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcceleratorPrograms",
    ()=>AcceleratorPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const aiImage = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824096/or6XD584AhJWFCfXx1bfHMhY2qw.png_3_oczn3k.png';
const web3Image = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png';
function AcceleratorCard({ title, description, image, link }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-px",
                    style: {
                        backgroundImage: "linear-gradient(138.24deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-1.5 xl:p-2 2xl:p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] p-px",
                            style: {
                                backgroundImage: "linear-gradient(137.13deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-[370/277.75] overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: image,
                                            alt: title,
                                            fill: true,
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 xl:pt-7 2xl:pt-[29px] pb-4 sm:pb-5 md:pb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 sm:gap-5 md:gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight",
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-normal text-[#b0b0b0] text-base sm:text-lg md:text-base leading-relaxed tracking-tight",
                                                        children: description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link,
                                                className: "py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal text-[#fefc00] text-base sm:text-lg md:text-base leading-relaxed tracking-tight",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "colored",
                                                    onClick: ()=>console.log('Apply for', title),
                                                    className: "!rounded-xl !px-4 sm:!px-5 md:!px-6 !py-2 sm:!py-2.5 md:!py-3 w-full sm:w-auto",
                                                    children: "Apply For Consideration→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03),inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15)] rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem]"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = AcceleratorCard;
function AcceleratorPrograms() {
    const programs = [
        {
            title: 'AI Accelerator',
            description: '12 to 15 weeks AI program for High school students Students learn machine learning fundamentals, build an original research project with a mentor, and write a paper they can submit to science fairs or feature in college applications.',
            image: aiImage,
            link: '/programs/ai-for-high-school'
        },
        {
            title: 'Beginner Web3',
            description: '13 to 15 weeks Web3 beginner program for High school students to build and deploy real smart contracts, launch decentralized apps, and understand blockchain architecture. Perfect for students interested in crypto, Web3 startups, or cutting-edge tech.',
            image: web3Image,
            link: '/programs/web3-for-high-school'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-[1440px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full lg:pt-6 xl:pt-8 2xl:pt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "flex flex-col lg:block font-medium text-white text-3xl md:text-5xl     lg:text-6xl leading-tight tracking-tight text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Accelerator Programs For "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 119,
                                        columnNumber: 53
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "High School Students"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center max-w-2xl w-full pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center leading-relaxed tracking-tight",
                                children: "Intensive programs designed for high school students who want to build standout projects for college applications, or early career opportunities."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 items-stretch justify-center w-full mt-6 sm:mt-7 md:mt-8 lg:mt-4 xl:mt-5 2xl:mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl",
                    children: programs.map((program, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AcceleratorCard, {
                            title: program.title,
                            description: program.description,
                            image: program.image,
                            link: program.link
                        }, index, false, {
                            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/AcceleratorPrograms.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c1 = AcceleratorPrograms;
var _c, _c1;
__turbopack_context__.k.register(_c, "AcceleratorCard");
__turbopack_context__.k.register(_c1, "AcceleratorPrograms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Microsoft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Microsoft",
    ()=>Microsoft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Microsoft() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "106",
        height: "23",
        viewBox: "0 0 106 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M37.1479 12.9605L36.5207 14.7395H36.4685C36.3639 14.3383 36.1723 13.7279 35.8587 12.9954L32.496 4.5368H29.2031V18.0183H31.381V9.69918C31.381 9.17596 31.381 8.58299 31.3636 7.85049C31.3461 7.48424 31.3113 7.20519 31.2939 6.9959H31.3461C31.4507 7.51912 31.5726 7.90281 31.6597 8.14697L35.7018 17.9834H37.2351L41.2423 8.05977C41.3294 7.83305 41.4165 7.37959 41.5037 6.9959H41.5559C41.5037 7.99001 41.4688 8.87947 41.4514 9.42013V17.966H43.7686V4.50192H40.5977L37.1479 12.9605ZM45.9639 8.30394H48.2289V17.966H45.9639V8.30394ZM47.1138 4.22287C46.7305 4.22287 46.4169 4.36239 46.1556 4.60656C45.8942 4.85073 45.7548 5.16466 45.7548 5.54835C45.7548 5.9146 45.8942 6.22852 46.1556 6.47269C46.4169 6.71686 46.7305 6.83894 47.1138 6.83894C47.4971 6.83894 47.8282 6.69942 48.0721 6.47269C48.3334 6.22852 48.4728 5.9146 48.4728 5.54835C48.4728 5.1821 48.3334 4.86817 48.0721 4.60656C47.8456 4.36239 47.5145 4.22287 47.1138 4.22287ZM56.2608 8.21674C55.8427 8.12953 55.4071 8.07721 54.989 8.07721C53.961 8.07721 53.0202 8.30394 52.2361 8.75739C51.4521 9.21084 50.8249 9.8387 50.4242 10.6235C50.006 11.4258 49.7969 12.3501 49.7969 13.414C49.7969 14.3383 50.006 15.158 50.4067 15.908C50.8075 16.6405 51.365 17.2335 52.1142 17.6346C52.8285 18.0357 53.6648 18.245 54.6056 18.245C55.6859 18.245 56.6093 18.0183 57.341 17.5997L57.3585 17.5823V15.4894L57.2714 15.5592C56.9403 15.8033 56.557 16.0126 56.1737 16.1347C55.773 16.2742 55.4071 16.344 55.0935 16.344C54.1875 16.344 53.4732 16.0824 52.9679 15.5068C52.4452 14.9488 52.1839 14.1814 52.1839 13.2221C52.1839 12.228 52.4452 11.4432 52.9853 10.8677C53.5254 10.2922 54.2398 9.99566 55.1109 9.99566C55.8427 9.99566 56.5919 10.2398 57.2714 10.7282L57.3585 10.7979V8.58299L57.341 8.56555C57.0449 8.44346 56.7138 8.30394 56.2608 8.21674ZM63.7352 8.14697C63.1777 8.14697 62.655 8.32138 62.202 8.68763C61.8187 9.00156 61.5574 9.45501 61.3309 9.99566H61.3134V8.30394H59.0485V17.966H61.3134V13.0303C61.3134 12.1932 61.4877 11.4955 61.871 10.9898C62.2543 10.4666 62.7421 10.2049 63.3345 10.2049C63.5436 10.2049 63.7527 10.2573 64.014 10.2922C64.2579 10.3619 64.4321 10.4317 64.5541 10.5189L64.6412 10.5886V8.32138L64.589 8.30394C64.4321 8.1993 64.1185 8.14697 63.7352 8.14697ZM69.9029 8.09465C68.3174 8.09465 67.0456 8.56555 66.157 9.48989C65.251 10.4142 64.8154 11.6874 64.8154 13.2919C64.8154 14.7918 65.2684 16.0126 66.1396 16.9021C67.0107 17.7741 68.1955 18.2276 69.6764 18.2276C71.2271 18.2276 72.4641 17.7567 73.3526 16.8149C74.2586 15.8731 74.6942 14.6174 74.6942 13.0652C74.6942 11.5304 74.2761 10.3096 73.4223 9.42013C72.6035 8.53067 71.4013 8.09465 69.9029 8.09465ZM71.7149 15.5243C71.2967 16.0649 70.6347 16.3265 69.8158 16.3265C68.9969 16.3265 68.3349 16.0649 67.8644 15.4894C67.394 14.9488 67.1675 14.1639 67.1675 13.1698C67.1675 12.1408 67.4115 11.356 67.8644 10.7979C68.3349 10.2398 68.9795 9.96078 69.7984 9.96078C70.5998 9.96078 71.2271 10.2224 71.6801 10.763C72.133 11.3037 72.377 12.0885 72.377 13.1175C72.3421 14.1639 72.1505 14.9836 71.7149 15.5243ZM79.7468 12.3152C79.0325 12.0188 78.5795 11.792 78.3704 11.6002C78.1962 11.4258 78.1091 11.1816 78.1091 10.8677C78.1091 10.6061 78.2136 10.3445 78.475 10.1701C78.7363 9.99566 79.0325 9.90846 79.4681 9.90846C79.8514 9.90846 80.2521 9.97822 80.6354 10.0829C81.0187 10.1875 81.3672 10.3445 81.6459 10.5538L81.733 10.6235V8.49578L81.6808 8.47834C81.4194 8.3737 81.071 8.26906 80.6528 8.18186C80.2347 8.11209 79.8514 8.07721 79.5378 8.07721C78.4575 8.07721 77.569 8.33882 76.8721 8.91435C76.1752 9.45501 75.8441 10.1875 75.8441 11.0421C75.8441 11.4955 75.9138 11.8967 76.0706 12.228C76.2274 12.5594 76.4539 12.8733 76.7675 13.1349C77.0811 13.3791 77.5341 13.6582 78.1614 13.9198C78.684 14.1465 79.0848 14.3209 79.3287 14.4604C79.5726 14.5999 79.7294 14.7569 79.8514 14.879C79.9385 15.0185 79.9908 15.1929 79.9908 15.4196C79.9908 16.0649 79.5029 16.3789 78.5098 16.3789C78.1265 16.3789 77.7258 16.3091 77.2554 16.1521C76.7849 15.9952 76.3494 15.7685 75.9835 15.5068L75.8964 15.4371V17.652L75.9487 17.6695C76.2797 17.8264 76.6804 17.9311 77.1683 18.0532C77.6561 18.1404 78.0917 18.2101 78.475 18.2101C79.6423 18.2101 80.6006 17.9485 81.28 17.373C81.977 16.8149 82.3428 16.0998 82.3428 15.1755C82.3428 14.5302 82.1686 13.9546 81.7853 13.5186C81.28 13.1001 80.6528 12.6641 79.7468 12.3152ZM88.3189 8.09465C86.7334 8.09465 85.4615 8.56555 84.573 9.48989C83.6844 10.4142 83.2314 11.6874 83.2314 13.2919C83.2314 14.7918 83.6844 16.0126 84.5555 16.9021C85.4267 17.7741 86.6114 18.2276 88.0924 18.2276C89.643 18.2276 90.88 17.7567 91.7686 16.8149C92.6746 15.8731 93.1102 14.6174 93.1102 13.0652C93.1102 11.5304 92.692 10.3096 91.8383 9.42013C91.0194 8.53067 89.8172 8.09465 88.3189 8.09465ZM90.1134 15.5243C89.6953 16.0649 89.0332 16.3265 88.2143 16.3265C87.378 16.3265 86.7334 16.0649 86.263 15.4894C85.7926 14.9488 85.5661 14.1639 85.5661 13.1698C85.5661 12.1408 85.81 11.356 86.263 10.7979C86.7334 10.2398 87.378 9.96078 88.1969 9.96078C88.981 9.96078 89.6256 10.2224 90.0786 10.763C90.5316 11.3037 90.7755 12.0885 90.7755 13.1175C90.7755 14.1639 90.549 14.9836 90.1134 15.5243ZM105.219 10.1701V8.30394H102.937V5.4437L102.867 5.46114L100.707 6.10644L100.654 6.12388V8.30394H97.2394V7.08311C97.2394 6.52501 97.3788 6.089 97.6227 5.80995C97.8666 5.53091 98.2325 5.39138 98.6855 5.39138C98.9991 5.39138 99.3301 5.46114 99.696 5.61811L99.7831 5.67043V3.69966L99.7309 3.68222C99.4172 3.57757 98.9991 3.50781 98.459 3.50781C97.7795 3.50781 97.1871 3.66478 96.647 3.92638C96.1069 4.22287 95.7062 4.624 95.41 5.16466C95.1138 5.68787 94.957 6.28085 94.957 6.96102V8.30394H93.3715V10.1526H94.957V17.966H97.2394V10.1701H100.654V15.1406C100.654 17.1811 101.613 18.2101 103.529 18.2101C103.843 18.2101 104.174 18.1578 104.487 18.1055C104.818 18.0357 105.062 17.9485 105.202 17.8788L105.219 17.8613V15.9952L105.132 16.0649C104.993 16.1521 104.871 16.2219 104.662 16.2742C104.487 16.3266 104.33 16.344 104.209 16.344C103.756 16.344 103.442 16.2393 103.215 15.9777C103.006 15.7336 102.902 15.3324 102.902 14.7395V10.1701H105.219Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Microsoft.tsx",
                lineNumber: 4,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 0H10.6802V10.691H0V0Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Microsoft.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.8008 0H22.481V10.691H11.8008V0Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Microsoft.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 11.8047H10.6802V22.4957H0V11.8047Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Microsoft.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.8008 11.8047H22.481V22.4957H11.8008V11.8047Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Microsoft.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/Microsoft.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Microsoft;
var _c;
__turbopack_context__.k.register(_c, "Microsoft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Netflix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Netflix",
    ()=>Netflix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Netflix() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "69",
        height: "19",
        viewBox: "0 0 69 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M65.3088 9.04398L69 19C67.9122 18.8417 66.8249 18.6435 65.7179 18.4648L63.6385 12.9637L61.5021 18.0107C60.4534 17.8321 59.4234 17.7726 58.3746 17.6339L62.1237 8.92561L58.7233 0H61.8706L63.774 4.98688L65.8142 0H68.9994L65.3088 9.04398ZM56.2382 0H53.3824V17.2583C54.3149 17.3179 55.2858 17.3571 56.2382 17.4756V0ZM50.9152 17.0601C48.3125 16.8821 45.7091 16.7245 43.0479 16.6643V7.64623e-05H45.9616V13.8542C47.6324 13.8935 49.3027 14.0315 50.9152 14.1107V17.0601ZM39.9392 6.74942V9.71784H35.9571V16.4666H33.0828V0H41.2415V2.96842H35.9577V6.74949H39.9398L39.9392 6.74942ZM28.1868 2.96842V16.625C27.2153 16.625 26.2251 16.625 25.2727 16.6643V2.96842H22.2616V0H31.2166V2.96842H28.1868ZM19.115 9.87558C17.8332 9.87558 16.3176 9.87558 15.2298 9.93576V14.3488C16.9393 14.2297 18.6487 14.0916 20.3774 14.0322V16.8821L12.3163 17.5357V0H20.3769V2.96842H15.2297V6.96665C16.3567 6.96665 18.0855 6.90716 19.1148 6.90716V9.87619L19.115 9.87558ZM2.97139 8.21306V18.5839C1.92334 18.7029 0.990264 18.8416 0 19V0H2.77807L6.56569 10.787V0H9.47982V17.7726C8.45038 17.9512 7.40113 18.0107 6.29401 18.1685L2.97139 8.21306Z",
            fill: "#DADDDE"
        }, void 0, false, {
            fileName: "[project]/src/components/assets/Netflix.tsx",
            lineNumber: 4,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/assets/Netflix.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Netflix;
var _c;
__turbopack_context__.k.register(_c, "Netflix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Shopify.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shopify",
    ()=>Shopify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Shopify() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "95",
        height: "27",
        viewBox: "0 0 95 27",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.7424 0.854147C10.9325 0.854147 11.0276 0.94888 11.2177 1.04361C10.0769 1.51728 8.93612 2.7488 8.36573 5.40132L6.2743 5.96971C6.93975 4.07506 8.27066 0.854147 10.7424 0.854147ZM11.7881 1.80147C11.9782 2.36987 12.1683 3.033 12.1683 4.07506C12.1683 4.16979 12.1683 4.16979 12.1683 4.26452L9.41144 5.02239C9.98184 3.033 10.9325 2.18041 11.7881 1.80147ZM14.2598 3.50666L13.0239 3.88559C13.0239 3.79086 13.0239 3.69613 13.0239 3.6014C13.0239 2.7488 12.9289 2.08567 12.7387 1.51728C13.4042 1.70674 13.9746 2.55934 14.2598 3.50666ZM20.439 5.02239C20.439 4.92765 20.3439 4.83292 20.2489 4.83292C20.0587 4.83292 18.0624 4.64346 18.0624 4.64346C18.0624 4.64346 16.6364 3.22246 16.4463 3.12773C16.2561 2.93827 15.9709 3.033 15.8759 3.033C15.8759 3.033 15.5907 3.12773 15.1154 3.3172C14.64 1.99094 13.7844 0.759415 12.3585 0.759415H12.2634C11.8831 0.191018 11.3127 0.00155293 10.8374 0.00155293C7.41508 -0.0931798 5.79897 4.16979 5.22858 6.34864C4.46806 6.53811 3.70754 6.82231 2.85195 7.10651C2.09143 7.29597 2.09143 7.3907 1.99637 8.05383C1.9013 8.5275 0 23.4953 0 23.4953L15.1154 26.3372L23.2909 24.5373C23.2909 24.5373 20.439 5.21185 20.439 5.02239Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Shopify.tsx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.1556 4.83325C20.0606 4.83325 18.0642 4.64378 18.0642 4.64378C18.0642 4.64378 16.6382 3.22279 16.4481 3.12806C16.353 3.03333 16.353 3.03333 16.258 3.03333L15.1172 26.3376L23.2928 24.5376C23.2928 24.5376 20.4408 5.21218 20.4408 5.02271C20.4408 4.92798 20.2507 4.83325 20.1556 4.83325Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Shopify.tsx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.3567 9.37925L11.311 12.4107C11.311 12.4107 10.4554 11.937 9.3146 11.937C7.69849 11.937 7.60342 12.8844 7.60342 13.1686C7.60342 14.4948 11.2159 15.0632 11.2159 18.2841C11.2159 20.8419 9.59979 22.4524 7.41329 22.4524C4.84654 22.4524 3.51562 20.8419 3.51562 20.8419L4.18108 18.5683C4.18108 18.5683 5.51199 19.7051 6.65277 19.7051C7.41329 19.7051 7.69849 19.1367 7.69849 18.6631C7.69849 16.8631 4.75147 16.7684 4.75147 13.8317C4.75147 11.3686 6.55771 9.00032 10.0751 9.00032C11.6912 8.90559 12.3567 9.37925 12.3567 9.37925Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Shopify.tsx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32.8927 14.969C32.0371 14.4953 31.6569 14.1164 31.6569 13.6427C31.6569 12.9796 32.2273 12.6006 33.1779 12.6006C34.2236 12.6006 35.1743 13.0743 35.1743 13.0743L35.9348 10.8007C35.9348 10.8007 35.2693 10.2323 33.273 10.2323C30.421 10.2323 28.5197 11.8428 28.5197 14.1164C28.5197 15.4426 29.4704 16.39 30.6112 17.0531C31.5618 17.6215 31.9421 18.0004 31.9421 18.5688C31.9421 19.1372 31.4667 19.7056 30.5161 19.7056C29.1852 19.7056 27.8543 19.0425 27.8543 19.0425L27.0938 21.3161C27.0938 21.3161 28.2345 22.0739 30.2309 22.0739C33.0829 22.0739 35.1743 20.6529 35.1743 18.0951C35.1743 16.6741 34.1286 15.6321 32.8927 14.969ZM44.3956 10.1376C42.9696 10.1376 41.8288 10.8007 40.9733 11.8428L42.2091 5.40096H38.9769L35.8397 21.7897H39.072L40.1177 16.2005C40.4979 14.1164 41.6387 12.7901 42.6844 12.7901C43.4449 12.7901 43.7301 13.2638 43.7301 14.0216C43.7301 14.4953 43.7301 14.969 43.6351 15.4426L42.3992 21.8844H45.6314L46.8673 15.2532C46.9624 14.59 47.0574 13.7374 47.0574 13.169C47.0574 11.2744 46.1068 10.1376 44.3956 10.1376ZM52.6663 19.5161C51.5255 19.5161 51.1452 18.5688 51.1452 17.432C51.1452 15.6321 52.0959 12.6006 53.807 12.6006C54.9478 12.6006 55.3281 13.548 55.3281 14.4953C55.3281 16.5794 54.3774 19.5161 52.6663 19.5161ZM54.2824 10.1376C50.3847 10.1376 47.8179 13.6427 47.8179 17.5267C47.8179 19.9898 49.339 21.9792 52.286 21.9792C56.0886 21.9792 58.6554 18.5688 58.6554 14.59C58.6554 12.3164 57.3244 10.1376 54.2824 10.1376ZM63.7889 19.6109C62.9333 19.6109 62.458 19.1372 62.458 19.1372L63.0284 16.1058C63.4086 14.1164 64.4543 12.7901 65.5951 12.7901C66.5458 12.7901 66.926 13.7374 66.926 14.59C66.831 16.6741 65.5951 19.6109 63.7889 19.6109ZM66.926 10.1376C64.7395 10.1376 63.5037 12.0322 63.5037 12.0322L63.6938 10.3271H60.8419C60.7468 11.4639 60.4616 13.2638 60.1764 14.59L57.8948 26.3369H61.1271L61.9826 21.6002H62.0777C62.0777 21.6002 62.7432 21.9792 63.979 21.9792C67.7816 21.9792 70.2533 18.0951 70.2533 14.2111C70.2533 12.127 69.3027 10.1376 66.926 10.1376ZM74.8164 5.59042C73.7707 5.59042 73.0102 6.44302 73.0102 7.48508C73.0102 8.4324 73.5806 9.09553 74.5312 9.09553C75.577 9.09553 76.4325 8.4324 76.4325 7.20088C76.4325 6.25355 75.7671 5.59042 74.8164 5.59042ZM70.3484 21.7897H73.5806L75.7671 10.4218H72.5349L70.3484 21.7897ZM83.9427 10.4218H81.6611L81.7562 9.85339C81.9463 8.7166 82.6118 7.76928 83.6575 7.76928C84.2279 7.76928 84.7032 7.95874 84.7032 7.95874L85.3687 5.40096C85.3687 5.40096 84.7983 5.11676 83.6575 5.11676C82.5167 5.11676 81.3759 5.40096 80.5203 6.15882C79.3796 7.10615 78.9042 8.4324 78.619 9.75866L78.524 10.3271H77.0029L76.5276 12.7901H78.0486L76.3375 21.7897H79.5697L81.2809 12.7901H83.4674L83.9427 10.4218ZM91.643 10.4218C91.643 10.4218 89.6466 15.4426 88.6959 18.1899C88.6009 17.3373 87.9354 10.4218 87.9354 10.4218H84.5131L86.4144 20.8424C86.4144 21.0319 86.4144 21.2213 86.3193 21.4108C85.939 22.1686 85.2736 22.8318 84.6081 23.3054C84.0377 23.7791 83.2772 24.0633 82.8019 24.2528L83.6575 27C84.3229 26.9053 85.6539 26.3369 86.7946 25.2948C88.2206 23.9686 89.6466 21.7897 90.9775 18.9477L94.8752 10.5165L91.643 10.4218Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Shopify.tsx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/Shopify.tsx",
        lineNumber: 3,
        columnNumber: 1
    }, this);
}
_c = Shopify;
var _c;
__turbopack_context__.k.register(_c, "Shopify");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/SpringBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpringBoard",
    ()=>SpringBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SpringBoard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "136",
        height: "22",
        viewBox: "0 0 136 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.27375 15C12.8432 15 16.5475 11.6421 16.5475 7.5C16.5475 3.35786 12.8432 0 8.27375 0C3.70428 0 0 3.35786 0 7.5C0 11.6421 3.70428 15 8.27375 15Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/SpringBoard.tsx",
                lineNumber: 4,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.12604 21.018C12.0045 21.018 15.1486 20.1185 15.1486 19.009C15.1486 17.8995 12.0045 17 8.12604 17C4.24761 17 1.10352 17.8995 1.10352 19.009C1.10352 20.1185 4.24761 21.018 8.12604 21.018Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/SpringBoard.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M132.123 15.3296C132.123 15.7694 132.389 15.978 132.853 15.9317L134.956 15.6769C135.177 15.6533 135.199 15.492 135.067 15.2834C134.846 14.9361 134.58 14.1953 134.58 13.0374V1.04563C134.58 0.605862 134.314 0.397302 133.85 0.443544L131.747 0.698346C131.526 0.721939 131.504 0.883313 131.637 1.09187C131.858 1.43916 132.124 2.17997 132.124 3.33791V6.02371H132.013C131.393 5.16682 130.353 4.65816 129.202 4.65816C126.325 4.65816 124.224 7.15899 124.224 10.562C124.224 13.965 126.282 16.2337 128.738 16.2337C130.131 16.2337 131.261 15.5854 132.013 14.335H132.124V15.3306L132.123 15.3296ZM129.512 14.334C127.874 14.334 126.768 12.8062 126.768 10.3987C126.768 7.99134 127.896 6.30116 129.623 6.30116C131.172 6.30116 132.123 7.66671 132.123 9.72777V11.232C132.123 13.0383 130.972 14.334 129.512 14.334ZM117.119 15.9308H120.128C120.349 15.9308 120.372 15.7458 120.239 15.5373C120.062 15.2598 119.863 14.5879 119.863 13.2912V11.3C119.863 8.38298 121.368 7.22599 122.828 7.22599C123.093 7.22599 123.293 7.22599 123.514 7.27224C123.713 7.31848 123.823 7.24864 123.823 7.04103V5.02715C123.823 4.81859 123.735 4.70345 123.558 4.67986C123.403 4.65627 123.226 4.65627 123.027 4.65627C121.478 4.65627 120.482 5.74437 119.95 7.75825H119.862V5.53581C119.862 5.09604 119.597 4.88748 119.132 4.93372L117.008 5.18852C116.787 5.21211 116.764 5.37349 116.897 5.58205C117.118 5.92933 117.383 6.67015 117.383 7.82808V13.2922C117.383 14.5888 117.184 15.2598 117.007 15.5382C116.874 15.7468 116.896 15.9317 117.117 15.9317L117.119 15.9308ZM109.219 16.2318C110.569 16.2318 111.742 15.5373 112.428 14.3331H112.538V15.3287C112.538 15.7685 112.803 15.977 113.268 15.9308L115.392 15.676C115.613 15.6524 115.636 15.491 115.503 15.2825C115.282 14.9352 115.016 14.1944 115.016 13.0364V4.95826H113.333L112.846 6.23132H112.736C112.072 5.2593 110.944 4.65721 109.638 4.65721C106.871 4.65721 104.725 7.15805 104.725 10.5611C104.725 13.9641 106.916 16.2328 109.217 16.2328L109.219 16.2318ZM109.993 14.3331C108.356 14.3331 107.293 12.7363 107.293 10.328C107.293 7.91962 108.422 6.30021 110.081 6.30021C111.519 6.30021 112.538 7.57328 112.538 9.72683V11.2085C112.538 13.061 111.365 14.334 109.993 14.334V14.3331ZM98.1529 14.4718C96.4489 14.4718 95.4088 12.9213 95.4088 10.4205C95.4088 7.91962 96.4705 6.41535 98.1529 6.41535C99.8354 6.41535 100.92 7.89697 100.92 10.4205C100.92 12.9439 99.8354 14.4718 98.1529 14.4718ZM98.1529 16.2318C101.251 16.2318 103.553 13.8244 103.553 10.4205C103.553 7.01649 101.251 4.65533 98.1529 4.65533C95.0551 4.65533 92.753 7.04008 92.753 10.4205C92.753 13.8008 95.0542 16.2318 98.1529 16.2318ZM86.7784 16.2318C89.5451 16.2318 91.7354 13.8244 91.7354 10.3053C91.7354 6.78622 89.6768 4.65627 87.1771 4.65627C85.805 4.65627 84.6765 5.35084 83.9458 6.55501H83.8348V1.04563C83.8348 0.605862 83.5696 0.397302 83.105 0.443544L81.0022 0.698346C80.7812 0.721939 80.7587 0.883313 80.8913 1.09187C81.1123 1.43916 81.3784 2.17997 81.3784 3.33791V15.9327H83.0608L83.5038 14.636H83.6147C84.3003 15.6316 85.4739 16.2328 86.7793 16.2328L86.7784 16.2318ZM86.358 14.5879C84.7874 14.5879 83.8348 13.245 83.8348 11.0924V9.68058C83.8348 7.89792 84.9408 6.55501 86.4464 6.55501C88.1054 6.55501 89.1906 8.10553 89.1906 10.4903C89.1906 12.875 88.1063 14.5879 86.358 14.5879ZM74.2753 10.7677C73.1026 10.7677 72.3277 9.91085 72.3277 8.47547C72.3277 7.04008 73.1017 6.1143 74.2753 6.1143C75.4489 6.1143 76.2229 7.01743 76.2229 8.47547C76.2229 9.9335 75.4489 10.7677 74.2753 10.7677ZM58.2306 15.9298H61.2183C61.4393 15.9298 61.4619 15.7449 61.3293 15.5363C61.1525 15.2589 60.9531 14.5869 60.9531 13.2903V9.56262C60.9531 7.59498 62.1484 6.57578 63.4537 6.57578C64.6264 6.57578 65.3129 7.38548 65.3129 8.98318V13.2893C65.3129 14.586 65.1136 15.257 64.9368 15.5354C64.8041 15.7439 64.8258 15.9289 65.0477 15.9289H68.0571C68.2781 15.9289 68.3007 15.7439 68.1681 15.5354C67.9913 15.2579 67.7919 14.586 67.7919 13.2893V8.91429C67.7919 6.11336 66.3314 4.65438 64.2728 4.65438C62.8123 4.65438 61.7722 5.32536 61.064 6.55313H60.9531V5.53486C60.9531 5.09509 60.6879 4.88653 60.2233 4.93278L58.1205 5.18758C57.8995 5.21117 57.8769 5.37255 58.0095 5.58111C58.2306 5.92839 58.4967 6.6692 58.4967 7.82714V13.2912C58.4967 14.5879 58.2973 15.2589 58.1205 15.5373C57.9879 15.7458 58.0095 15.9308 58.2315 15.9308L58.2306 15.9298ZM54.6673 3.61252C55.5522 3.61252 56.2387 2.8953 56.2387 1.99217C56.2387 1.08904 55.5531 0.441656 54.6673 0.441656C53.7814 0.441656 53.0525 1.11263 53.0525 1.99217C53.0525 2.87171 53.7607 3.61252 54.6673 3.61252ZM53.1409 15.9289H56.1287C56.3497 15.9289 56.3722 15.7439 56.2396 15.5354C56.0628 15.2579 55.8634 14.586 55.8634 13.2893V5.53769C55.8634 5.09793 55.5982 4.88937 55.1336 4.93561L53.0309 5.19041C52.8098 5.214 52.7873 5.37538 52.9199 5.58394C53.1409 5.93122 53.407 6.67203 53.407 7.82997V13.2941C53.407 14.5907 53.2077 15.2617 53.0309 15.5401C52.8982 15.7486 52.9199 15.9336 53.1418 15.9336L53.1409 15.9289ZM45.1519 15.9279H48.1613C48.3823 15.9279 48.4049 15.743 48.2723 15.5344C48.0955 15.257 47.8961 14.585 47.8961 13.2884V11.2972C47.8961 8.38015 49.4008 7.22316 50.8613 7.22316C51.1265 7.22316 51.3259 7.22316 51.5469 7.2694C51.7463 7.31565 51.8563 7.24581 51.8563 7.03819V5.02432C51.8563 4.81576 51.7679 4.70062 51.5911 4.67703C51.4359 4.65344 51.2591 4.65344 51.0598 4.65344C49.5109 4.65344 48.5149 5.74154 47.9836 7.75541H47.8952V5.53298C47.8952 5.09321 47.63 4.88465 47.1654 4.93089L45.041 5.18569C44.82 5.20928 44.7974 5.37066 44.93 5.57922C45.151 5.9265 45.4171 6.66732 45.4171 7.82525V13.2893C45.4171 14.586 45.2178 15.257 45.041 15.5354C44.9084 15.7439 44.93 15.9289 45.151 15.9289L45.1519 15.9279ZM38.0704 14.585C36.5441 14.585 35.5473 13.312 35.5473 11.066V9.67681C35.5473 7.82431 36.72 6.55124 38.1589 6.55124C39.8413 6.55124 40.903 8.10176 40.903 10.4865C40.903 12.8713 39.7971 14.5841 38.0704 14.5841V14.585ZM32.8256 20.5578H35.8134C36.0344 20.5578 36.057 20.3728 35.9244 20.1643C35.7475 19.8868 35.5482 19.2149 35.5482 17.9182V14.8625H35.6591C36.3231 15.7656 37.3632 16.2281 38.4701 16.2281C41.1475 16.2281 43.4488 13.9594 43.4488 10.278C43.4488 6.82869 41.3685 4.65249 38.9347 4.65249C37.4742 4.65249 36.3898 5.34706 35.6591 6.55124H35.5482V5.53298C35.5482 5.09321 35.283 4.88465 34.8184 4.93089L32.7156 5.18569C32.4946 5.20928 32.472 5.37066 32.6046 5.57922C32.8256 5.9265 33.0918 6.66732 33.0918 7.82525V17.9192C33.0918 19.2158 32.8924 19.8868 32.7156 20.1652C32.583 20.3738 32.6046 20.5587 32.8265 20.5587L32.8256 20.5578ZM25.7 16.229C29.1739 16.229 31.3435 14.5624 31.3435 11.7379C31.3435 9.67681 29.883 7.89508 27.6476 7.03819L25.5448 6.22849C24.1727 5.69624 23.6856 5.02526 23.6856 4.00605C23.6856 2.75564 24.8358 1.8761 26.4298 1.8761C28.178 1.8761 29.5727 2.6858 30.0589 3.95981C30.1257 4.12213 30.3683 4.07589 30.3683 3.88998V1.0881C29.4834 0.463362 28.2222 0 26.474 0C23.1542 0 21.074 1.76002 21.074 4.37504C21.074 6.41251 22.1583 7.89414 24.106 8.70384L26.0978 9.53714C28.068 10.3704 28.7094 11.0414 28.7094 12.2918C28.7094 13.5422 27.5366 14.3293 25.8326 14.3293C23.6639 14.3293 21.9157 13.2648 21.2743 11.5973C21.2075 11.4349 20.9648 11.4812 20.9648 11.6671V14.6539C21.8498 15.5108 23.7316 16.2281 25.7009 16.2281L25.7 16.229ZM73.9433 20.8824C77.5057 20.8824 79.963 19.1932 79.963 16.8311C79.963 15.0022 78.5251 14.0066 76.0245 14.0066H72.8373C72.0182 14.0066 71.5762 13.6593 71.5762 13.127C71.5762 12.641 71.9298 12.2239 72.5054 11.9464C73.0367 12.155 73.6339 12.2475 74.2978 12.2475C76.8427 12.2475 78.5242 10.6271 78.5242 8.47358C78.5242 7.66387 78.1705 6.99195 77.7502 6.62107V6.505L79.742 6.52859C79.9414 6.52859 80.0965 6.36627 80.0965 6.11147V4.81481C80.0965 4.5836 79.9639 4.49112 79.742 4.51377L76.0019 4.92995C75.4264 4.74498 74.8517 4.65249 74.2753 4.65249C71.7305 4.65249 69.9605 6.15677 69.9605 8.47263C69.9605 9.65322 70.4693 10.6488 71.3326 11.3198V11.3661C70.1157 12.037 69.606 12.9864 69.606 13.8669C69.606 15.6958 71.3326 16.1592 72.1734 16.1592H75.8251C76.9978 16.1592 77.5734 16.5291 77.5734 17.386C77.5734 18.659 75.8909 19.3536 74.0326 19.3536C72.1743 19.3536 71.5537 18.6364 71.1775 17.5474C71.0007 17.0151 70.6245 16.7377 70.1599 16.7377C69.5844 16.7377 69.0756 17.1548 69.0756 17.9881C69.0756 19.6084 70.8464 20.8824 73.9442 20.8824H73.9433Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/SpringBoard.tsx",
                lineNumber: 6,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/SpringBoard.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
_c = SpringBoard;
var _c;
__turbopack_context__.k.register(_c, "SpringBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Synthesis.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Synthesis",
    ()=>Synthesis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Synthesis() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "142",
        height: "21",
        viewBox: "0 0 142 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.66414 10.125L11.3283 20.2453H0L5.66414 10.125Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Synthesis.tsx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.66414 0L11.3283 10.1203H0L5.66414 0Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Synthesis.tsx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25.7505 5.51562C27.0505 5.51562 28.195 5.72489 29.1841 6.14341C30.1873 6.5475 31.0563 7.14642 31.791 7.94016L30.0319 10.3431C29.4243 9.69363 28.7672 9.21016 28.0608 8.89266C27.3684 8.56073 26.5771 8.39477 25.687 8.39477C25.1642 8.39477 24.7403 8.45249 24.4153 8.56795C24.0903 8.6834 23.8571 8.84215 23.7159 9.0442C23.5746 9.24624 23.5039 9.47715 23.5039 9.73692C23.5039 10.04 23.6381 10.2998 23.9066 10.5162C24.1892 10.7183 24.6414 10.8915 25.2631 11.0358L27.6157 11.577C29.0145 11.9089 30.0389 12.3924 30.6889 13.0274C31.3389 13.6624 31.6639 14.5066 31.6639 15.5601C31.6639 16.5704 31.4095 17.4291 30.9008 18.1362C30.3922 18.8289 29.6927 19.3557 28.8026 19.7165C27.9124 20.0629 26.8951 20.236 25.7505 20.236C24.818 20.236 23.9278 20.135 23.08 19.933C22.2322 19.7165 21.4692 19.4134 20.791 19.0238C20.1128 18.6341 19.5405 18.1867 19.0742 17.6816L20.8334 15.1921C21.1866 15.6107 21.6176 15.9859 22.1263 16.3178C22.6491 16.6353 23.2142 16.8879 23.8218 17.0755C24.4435 17.2631 25.0723 17.3569 25.7082 17.3569C26.2027 17.3569 26.6125 17.3064 26.9374 17.2054C27.2766 17.1043 27.5238 16.9528 27.6793 16.7508C27.8347 16.5487 27.9124 16.3106 27.9124 16.0364C27.9124 15.7333 27.8064 15.4808 27.5945 15.2787C27.3825 15.0622 26.9798 14.8819 26.3864 14.7375L23.8006 14.153C23.0094 13.9654 22.3029 13.7201 21.6812 13.417C21.0736 13.0995 20.5932 12.681 20.2399 12.1615C19.8867 11.6275 19.7101 10.9636 19.7101 10.1699C19.7101 9.2751 19.9503 8.48136 20.4307 7.78863C20.9111 7.08147 21.6034 6.52585 22.5078 6.12176C23.4121 5.71767 24.493 5.51562 25.7505 5.51562ZM46.16 5.7321L41.2217 14.8025V20.0196H37.5762V14.8025L32.6378 5.7321H36.4105L38.3816 9.65033L39.4201 12.0316L40.4799 9.65033L42.451 5.7321H46.16ZM60.7931 5.7321V20.0196H56.7449L52.4 12.2913L51.3403 10.1699H51.3191L51.4039 12.8109V20.0196H48.1823V5.7321H52.2305L56.5754 13.4603L57.6351 15.5818H57.6563L57.5715 12.9408V5.7321H60.7931ZM76.079 5.7321V8.61124H71.5221V20.0196H67.8766V8.61124H63.2986V5.7321H76.079ZM91.2191 5.7321V20.0196H87.5736V5.7321H91.2191ZM82.2322 5.7321V20.0196H78.5867V5.7321H82.2322ZM89.5235 11.3821V14.2613H80.3671V11.3821H89.5235ZM94.741 20.0196V5.7321H105.635V8.61124H98.3864V11.512H104.151V14.218H98.3864V17.1404H105.911V20.0196H94.741ZM114.004 5.51562C115.304 5.51562 116.449 5.72489 117.438 6.14341C118.441 6.5475 119.31 7.14642 120.045 7.94016L118.286 10.3431C117.678 9.69363 117.021 9.21016 116.314 8.89266C115.622 8.56073 114.831 8.39477 113.941 8.39477C113.418 8.39477 112.994 8.45249 112.669 8.56795C112.344 8.6834 112.111 8.84215 111.97 9.0442C111.828 9.24624 111.758 9.47715 111.758 9.73692C111.758 10.04 111.892 10.2998 112.16 10.5162C112.443 10.7183 112.895 10.8915 113.517 11.0358L115.869 11.577C117.268 11.9089 118.293 12.3924 118.943 13.0274C119.593 13.6624 119.918 14.5066 119.918 15.5601C119.918 16.5704 119.663 17.4291 119.155 18.1362C118.646 18.8289 117.946 19.3557 117.056 19.7165C116.166 20.0629 115.149 20.236 114.004 20.236C113.072 20.236 112.182 20.135 111.334 19.933C110.486 19.7165 109.723 19.4134 109.045 19.0238C108.366 18.6341 107.794 18.1867 107.328 17.6816L109.087 15.1921C109.44 15.6107 109.871 15.9859 110.38 16.3178C110.903 16.6353 111.468 16.8879 112.076 17.0755C112.697 17.2631 113.326 17.3569 113.962 17.3569C114.456 17.3569 114.866 17.3064 115.191 17.2054C115.53 17.1043 115.778 16.9528 115.933 16.7508C116.088 16.5487 116.166 16.3106 116.166 16.0364C116.166 15.7333 116.06 15.4808 115.848 15.2787C115.636 15.0622 115.234 14.8819 114.64 14.7375L112.054 14.153C111.263 13.9654 110.557 13.7201 109.935 13.417C109.327 13.0995 108.847 12.681 108.494 12.1615C108.14 11.6275 107.964 10.9636 107.964 10.1699C107.964 9.2751 108.204 8.48136 108.684 7.78863C109.165 7.08147 109.857 6.52585 110.761 6.12176C111.666 5.71767 112.747 5.51562 114.004 5.51562ZM126.265 5.7321V20.0196H122.62V5.7321H126.265ZM135.26 5.51562C136.56 5.51562 137.704 5.72489 138.693 6.14341C139.697 6.5475 140.566 7.14642 141.3 7.94016L139.541 10.3431C138.934 9.69363 138.277 9.21016 137.57 8.89266C136.878 8.56073 136.086 8.39477 135.196 8.39477C134.673 8.39477 134.25 8.45249 133.925 8.56795C133.6 8.6834 133.366 8.84215 133.225 9.0442C133.084 9.24624 133.013 9.47715 133.013 9.73692C133.013 10.04 133.147 10.2998 133.416 10.5162C133.699 10.7183 134.151 10.8915 134.772 11.0358L137.125 11.577C138.524 11.9089 139.548 12.3924 140.198 13.0274C140.848 13.6624 141.173 14.5066 141.173 15.5601C141.173 16.5704 140.919 17.4291 140.41 18.1362C139.901 18.8289 139.202 19.3557 138.312 19.7165C137.422 20.0629 136.404 20.236 135.26 20.236C134.327 20.236 133.437 20.135 132.589 19.933C131.742 19.7165 130.979 19.4134 130.3 19.0238C129.622 18.6341 129.05 18.1867 128.584 17.6816L130.343 15.1921C130.696 15.6107 131.127 15.9859 131.636 16.3178C132.158 16.6353 132.724 16.8879 133.331 17.0755C133.953 17.2631 134.582 17.3569 135.217 17.3569C135.712 17.3569 136.122 17.3064 136.447 17.2054C136.786 17.1043 137.033 16.9528 137.189 16.7508C137.344 16.5487 137.422 16.3106 137.422 16.0364C137.422 15.7333 137.316 15.4808 137.104 15.2787C136.892 15.0622 136.489 14.8819 135.896 14.7375L133.31 14.153C132.519 13.9654 131.812 13.7201 131.19 13.417C130.583 13.0995 130.102 12.681 129.749 12.1615C129.396 11.6275 129.219 10.9636 129.219 10.1699C129.219 9.2751 129.46 8.48136 129.94 7.78863C130.42 7.08147 131.113 6.52585 132.017 6.12176C132.921 5.71767 134.002 5.51562 135.26 5.51562Z",
                fill: "#DADDE2"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Synthesis.tsx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/Synthesis.tsx",
        lineNumber: 4,
        columnNumber: 1
    }, this);
}
_c = Synthesis;
var _c;
__turbopack_context__.k.register(_c, "Synthesis");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Tesla.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tesla",
    ()=>Tesla
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Tesla() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "118",
        height: "16",
        viewBox: "0 0 118 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M100.659 6.08801V15.3469H103.618V9.17429H114.441V15.3469H117.401V6.08801H100.659ZM103.28 3.08628H114.695C116.301 2.79034 117.443 1.35289 117.781 0H100.194C100.532 1.35289 101.716 2.74806 103.28 3.08628ZM91.6535 15.3469C93.1332 14.7127 93.9365 13.6135 94.2747 12.3451H80.9572V0.0422778H77.9555V15.3469H91.6535ZM55.7596 3.044H66.3291C67.9356 2.57895 69.2462 1.35289 69.5845 0.0422778H52.8424V9.08974H66.5405V12.2606H55.8019C54.1108 12.7256 52.6733 13.8671 51.9546 15.3469H69.4999V6.08801H55.8019L55.7596 3.044ZM29.7165 3.08628H41.1315C42.738 2.79034 43.9218 1.35289 44.2178 0H26.5879C26.9261 1.35289 28.1099 2.74806 29.7165 3.08628ZM29.7165 9.13201H41.1315C42.738 8.83607 43.9218 7.39862 44.2178 6.04573H26.5879C26.9261 7.39862 28.1099 8.79379 29.7165 9.13201ZM29.7165 15.3469H41.1315C42.738 15.0509 43.9218 13.6135 44.2178 12.2606H26.5879C26.9261 13.6135 28.1099 15.0509 29.7165 15.3469Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Tesla.tsx",
                lineNumber: 4,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 0.0422779C0.338223 1.39517 1.522 2.74806 3.08628 3.08628H7.90596L8.15963 3.17084V15.3046H11.1614V3.17084L11.415 3.08628H16.2347C17.8413 2.6635 18.9828 1.39517 19.321 0.0422779V0L0 0.0422779Z",
                fill: "#DADDDE"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Tesla.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/Tesla.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Tesla;
var _c;
__turbopack_context__.k.register(_c, "Tesla");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Microsoft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Microsoft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Netflix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Netflix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Shopify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Shopify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$SpringBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/SpringBoard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Synthesis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Synthesis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Tesla$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Tesla.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center pt-20 lg:pt-28 py-5 px-4 w-full max-w-[1440px] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-medium text-center  text-4xl md:text-5xl lg:text-[5rem] leading-[100%] lg:leading-[6rem] lg:tracking-[-4.5px]  md:px-0 text-white",
                    children: [
                        "For Ambitious Kids ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "block lg:hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                            lineNumber: 19,
                            columnNumber: 30
                        }, this),
                        " Who ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden lg:block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                            lineNumber: 19,
                            columnNumber: 69
                        }, this),
                        " Want to Build, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "block lg:hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                            lineNumber: 19,
                            columnNumber: 119
                        }, this),
                        " Not Just Learn"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-auto relative w-full max-w-[45rem] mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-normal leading-6 text-center w-full mx-auto px-4 text-lg md:text-lg lg:text-[19px] lg:leading-[25px] text-[#F1F5F9]",
                    children: [
                        "Professional engineers mentor students ages 7-18 in 1-on-1 sessions. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                            className: "hidden md:block"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                            lineNumber: 26,
                            columnNumber: 80
                        }, this),
                        "They build real products (web/mobile apps, AI models, and games)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-3 lg:gap-[14.35px] items-center justify-center mt-10 w-full px-4 max-w-[300px] lg:max-w-none mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/auth/signup",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "colored",
                        className: "w-full lg:w-50 flex items-center gap-1 lg:!px-12 lg:!py-3",
                        children: [
                            "Enroll Now  ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-3 h-3 lg:w-4 lg:h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                lineNumber: 41,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center pb-0 pt-8 px-4 w-full mt-8 max-w-[1152px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 items-start w-full lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 items-start w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center opacity-85 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium leading-4 text-white text-xs text-center tracking-wider uppercase w-full",
                                            children: "TRUSTED BY PARENTS WORKING AT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6 items-center justify-center w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-[80%] opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Netflix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Netflix"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5 w-[80%] opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Tesla$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tesla"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5 w-[80%] opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Shopify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shopify"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 items-center justify-center w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center opacity-85 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium leading-4 text-white text-xs text-center tracking-wider uppercase w-full",
                                            children: "FOUNDED BY FORMER TECH EDUCATORS FROM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 items-center justify-center w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5 w-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Synthesis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Synthesis"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$SpringBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpringBoard"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex  items-center justify-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 items-center justify-center flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center opacity-85 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium leading-4 text-white text-xs text-center tracking-[0.6px] uppercase whitespace-nowrap",
                                            children: "TRUSTED BY PARENTS WORKING AT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6 items-center justify-center w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Netflix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Netflix"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5  opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Shopify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shopify"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-5  opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Tesla$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tesla"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6  opacity-75 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Microsoft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Microsoft"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 items-center justify-center flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center opacity-85 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium leading-4 text-white text-xs text-center tracking-[0.6px] uppercase",
                                            children: "FOUNDED BY FORMER TECH EDUCATORS FROM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-[17px] items-center w-full max-w-[294px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[20.245px] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Synthesis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Synthesis"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[21.018px] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$SpringBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpringBoard"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Home/Hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Home/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Home/Hero.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/OurPrograms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OurPrograms",
    ()=>OurPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const foundationImage = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766823281/or6XD584AhJWFCfXx1bfHMhY2qw.png_xzuzpv.png';
const intermediateImage = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766823256/or6XD584AhJWFCfXx1bfHMhY2qw.png_1_jd4i7h.png';
const advancedImage = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766823252/or6XD584AhJWFCfXx1bfHMhY2qw.png_2_vqqqas.png';
function ProgramCard({ title, ageRange, description, prerequisite, image, link }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full lg:flex-1 lg:h-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] lg:h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-px flex-1 flex flex-col",
                    style: {
                        backgroundImage: "linear-gradient(128.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem] p-1.5 xl:p-2 2xl:p-2 flex-1 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] p-px flex-1 flex flex-col",
                            style: {
                                backgroundImage: "linear-gradient(127.53deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden flex-1 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-[370/277.75] overflow-hidden flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: image,
                                            alt: title,
                                            fill: true,
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-5 md:px-6 pt-6 sm:pt-7 md:pt-8 xl:pt-9 2xl:pt-[39px] pb-4 sm:pb-5 md:pb-6 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight",
                                                        children: [
                                                            title,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-base sm:text-lg md:text-base",
                                                                children: ageRange
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-normal text-[#b0b0b0] text-base sm:text-lg md:text-base leading-relaxed tracking-tight",
                                                        children: description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-normal text-white text-base sm:text-lg md:text-base leading-relaxed tracking-tight",
                                                    children: prerequisite
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: link,
                                                className: "py-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal text-[#fefc00] text-base sm:text-lg md:text-base leading-relaxed tracking-tight",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex mt-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://cal.com/xelaris/trial-class",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "w-full sm:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        type: "colored",
                                                        className: "!rounded-xl !px-4 sm:!px-5 md:!px-6 !py-2 sm:!py-2.5 md:!py-3 w-full sm:w-auto",
                                                        children: [
                                                            "Book A Trial Class ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03),inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15)] rounded-xl xl:rounded-2xl 2xl:rounded-[1.75rem]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.125rem]"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ProgramCard;
function OurPrograms() {
    const programs = [
        {
            title: 'Foundation |',
            ageRange: 'Ages 7-10',
            description: 'Your child learns the basics of coding through Scratch and python turtle, then chooses a path: Web/app Development, AI, or Game Development. They spend the next several months learning real tools and building working projects actual websites, games, or programs they can show off.',
            prerequisite: 'Prerequisite: No coding experience required',
            image: foundationImage,
            link: '/programs/foundation'
        },
        {
            title: 'Intermediate |',
            ageRange: 'Ages 11-13',
            description: 'Students go deep in their chosen path, learning professional tools like React for web, machine learning for AI, or Unity, Roblox for game development. They build 5 to 6 major projects complete applications, AI models, or published games. By the end, many can freelance or compete in hackathons.',
            prerequisite: 'Prerequisite: Foundation or equivalent coding experience',
            image: intermediateImage,
            link: '/programs/intermediate'
        },
        {
            title: 'Advanced |',
            ageRange: 'Ages 14-18',
            description: 'For experienced students preparing for top CS programs or careers in tech. Through personalized 1:1 mentorship with professional engineers, students work on research-quality projects in software Development, AI or Web3. Students graduate with portfolios that get them into IVY League or job offers before college.',
            prerequisite: 'Prerequisite: Intermediate or advanced coding skills',
            image: advancedImage,
            link: ''
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-20 py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-[1440px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:gap-4 md:gap-5 items-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full lg:pt-6 xl:pt-8 2xl:pt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-medium text-white text-3xl sm:text-4xl md:text-5xl   lg:text-6xl leading-tight tracking-tight text-center",
                                children: "Our Programs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full lg:mt-0 pb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center leading-relaxed tracking-tight",
                                children: [
                                    "Students choose their path: Web Development, Software & AI, or Game Development.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    "Then they work 1-on-1 with professional engineers to build real, meaningful projects."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-4 xl:gap-6 2xl:gap-8 items-stretch justify-center w-full mt-6 sm:mt-7 md:mt-8 lg:mt-4 xl:mt-5 2xl:mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:items-stretch",
                    children: programs.map((program, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgramCard, {
                            title: program.title,
                            ageRange: program.ageRange,
                            description: program.description,
                            prerequisite: program.prerequisite,
                            image: program.image,
                            link: program.link
                        }, index, false, {
                            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/OurPrograms.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_c1 = OurPrograms;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProgramCard");
__turbopack_context__.k.register(_c1, "OurPrograms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/cards/RegularCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegularCard",
    ()=>RegularCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const RegularCard = ({ title, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-[2.125rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-[2.125rem] p-px",
                    style: {
                        backgroundImage: "linear-gradient(155.31deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 83%)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1b1f24] rounded-[2.125rem] p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-[1.75rem] p-px h-[15.75rem]",
                            style: {
                                backgroundImage: "linear-gradient(155.12deg, rgba(255, 255, 255, 0.2) 3%, rgba(255, 255, 255, 0) 87%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-full rounded-[1.75rem] bg-gradient-to-b from-[#242930] to-[#13181f] pt-[1.125rem] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[0.44rem] h-full justify-center pb-4 px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center min-w-[19.125rem]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-[#eaee13] text-2xl leading-6 tracking-[-0.025rem]  whitespace-pre-wrap",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center pt-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-normal text-[#b0b0b0] text-lg leading-5 tracking-[-0.025rem]  whitespace-pre-wrap",
                                                    children: description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03),inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15)] rounded-[1.75rem]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-[2.125rem]"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/cards/RegularCard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RegularCard;
var _c;
__turbopack_context__.k.register(_c, "RegularCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/Programs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrestigiousPrograms",
    ()=>PrestigiousPrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cards$2f$RegularCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/cards/RegularCard.tsx [app-client] (ecmascript)");
'use client';
;
;
function PrestigiousPrograms() {
    const cards = [
        {
            title: "Work With Engineers\nWho Actually Ship",
            description: "Your child is mentored by engineers who build software daily. Not career educators, but practitioners who've architected systems, debugged at scale, and shipped products to real users. They bring experience you can't get from a textbook."
        },
        {
            title: "Build Products That Matter, Not Tutorials",
            description: "Students graduate with portfolios of live software: working apps, AI models solving actual problems, games people play. Not certificates. Not badges. Real projects they can demo to anyone or use for college applications."
        },
        {
            title: "1-on-1 Mentorship,\nTailored to Your Child",
            description: "No cohorts. No fixed curriculum. Every student works directly with their an engineer on projects they actually care about or problems they want to solve, moving at their own pace. We adapt to your child's schedule, learning style, and goals."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full px-4 md:px-20  py-5 max-w-[1440px] mx-auto ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 items-center w-full max-w-[1200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center w-full lg:pt-[46px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "flex flex-col  lg:block font-medium justify-center leading-10  md:leading-12 lg:leading-[66px] text-white text-3xl md:text-5xl lg:text-6xl tracking-[-0.125rem] md:tracking-[-1px] lg:tracking-[-2px] text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "What makes us one "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/Programs.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "of the prestigious "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/Programs.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "programs out there?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/Programs.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Home/Programs.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/Programs.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center px-16 lg:px-40  max-w-[51.125rem] w-full lg:mt-[9px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium leading-[1.4rem] lg:leading-[22.4px] text-[#b0b0b0] text-lg lg:text-[16px] text-center tracking-[-0.025rem] lg:tracking-[-0.4px]",
                            children: "Our students don't just learn to code, they ship real products,  and work with professional engineers who've  built at scale"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Programs.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/Programs.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Home/Programs.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-5 lg:gap-4 items-center lg:items-stretch justify-center w-full mt-9 ",
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cards$2f$RegularCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegularCard"], {
                        title: card.title,
                        description: card.description
                    }, index, false, {
                        fileName: "[project]/src/components/layout/Home/Programs.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Home/Programs.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Home/Programs.tsx",
        lineNumber: 21,
        columnNumber: 7
    }, this);
}
_c = PrestigiousPrograms;
var _c;
__turbopack_context__.k.register(_c, "PrestigiousPrograms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/Started.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Started",
    ()=>Started
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const desktopImage = 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766823260/main_ggu6py.png';
function Started() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full px-4 md:px-20 py-5 pt-20 lg:pt-[8rem] max-w-[1440px] mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-center w-full max-w-[1200px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start w-full lg:flex-1 lg:h-[720px] lg:relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-10 lg:gap-0 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 items-start justify-center w-full lg:max-w-[519px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start w-full lg:pt-[46px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "flex flex-col font-medium justify-center leading-10 text-white text-3xl md:text-5xl     2xl:text-6xl tracking-tight  lg:leading-[66px] lg:tracking-[-2px] lg:whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Why We Started"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Xelaris"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Home/Started.tsx",
                                            lineNumber: 20,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                                        lineNumber: 19,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-normal items-start w-full mt-2 lg:mt-[31px] lg:max-w-[515px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px] mb-4",
                                                children: "We saw a disconnect in how kids were learning tech skills. Most coding programs teach students to replicate pre-built projects and follow instructions, led by instructors who've never shipped code to production. Pre-built curriculums where everyone makes the same thing. Students complete courses, earn certificates, and graduate without ever building something real."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px] mb-4",
                                                children: "So we built what we wished existed: true 1-on-1 mentorship with engineers who work in the industry. No cohorts. No fixed curriculum. Just a student with an idea working with an engineer."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "leading-5 text-[#b0b0b0] text-lg lg:text-[18px] lg:leading-[22px]",
                                                children: [
                                                    "All programs are developed and taught exclusively by a",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#fefc00] underline",
                                                        children: "team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 21
                                                    }, this),
                                                    ' ',
                                                    "of professional engineers."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row gap-3 lg:gap-[14.35px] lg:items-center justify-start w-fit lg:w-auto lg:absolute lg:top-[579px] lg:left-[0.34px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://cal.com/xelaris/trial-class",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "colored",
                                        className: "w-full lg:w-auto !rounded-xl lg:!px-12 lg:!py-3",
                                        children: [
                                            "Book A Trial Class ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                                lineNumber: 53,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/Started.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/Started.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start overflow-hidden w-full   md:w-[292px] lg:w-[392px] xl:w-[592px] lg:h-[514px] h-80  lg:shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center overflow-hidden rounded-lg md:rounded-[10px] lg:rounded-[20px] w-full h-full bg-[#15161d] p-1 border border-[#2b2b2b]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full rounded-lg md:rounded-[8px] lg:rounded-[16px] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: desktopImage,
                                alt: "Teacher mentoring student",
                                fill: true,
                                className: "object-cover",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/Started.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Started.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/Started.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/Started.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/Started.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/Started.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, this);
}
_c = Started;
var _c;
__turbopack_context__.k.register(_c, "Started");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/WhatParentSays.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatParentSays",
    ()=>WhatParentSays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const testimonials = [
    {
        id: '1',
        firstName: 'KATERYNA',
        lastName: 'Goncharov',
        image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824583/f532a862057955a00327410cf2e728d009c74b48_wbl4me.png',
        quote: "My experience with my son's experience \nat Xelaris! As a parent, I find the organization \nto be impeccable, making everything \neasy and straightforward. My 11-year-old \nis absolutely engaged and progressing \nremarkably with his coding skills."
    },
    {
        id: '2',
        firstName: 'ALICE',
        lastName: 'Richardson',
        image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824584/c20522e647fdefa17222d7ba52f436bf217c4be8_go9wab.jpg',
        quote: "My child has been learning to code at Xelaris and the progress is amazing. The mentors are patient and knowledgeable, and my daughter loves every session."
    },
    {
        id: '3',
        firstName: 'MARIO DE',
        lastName: 'Barros',
        image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824565/68ec954d7480a2ce512b8b490cbede3d787878c0_mz7pqb.png',
        quote: "Xelaris has transformed my son's interest in gaming into a passion for building games. The personalized approach is exactly what he needed."
    },
    {
        id: '4',
        firstName: 'MOHAMMED',
        lastName: 'Gwandu',
        image: 'https://res.cloudinary.com/seunsanyaa/image/upload/v1766824556/455e78b605f6e488ff8181c70f8ca4645ec6365d_ypbxny.jpg',
        quote: "As a parent, seeing my child build real projects is incredible. Xelaris makes coding accessible and fun while maintaining high standards."
    }
];
function WhatParentSays() {
    _s();
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: 'start',
        loop: false
    });
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [canScrollPrev, setCanScrollPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollNext, setCanScrollNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Default to first card (index 0)
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WhatParentSays.useCallback[scrollPrev]": ()=>{
            if (emblaApi) emblaApi.scrollPrev();
        }
    }["WhatParentSays.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WhatParentSays.useCallback[scrollNext]": ()=>{
            if (emblaApi) emblaApi.scrollNext();
        }
    }["WhatParentSays.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WhatParentSays.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        }
    }["WhatParentSays.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatParentSays.useEffect": ()=>{
            if (!emblaApi) return;
            emblaApi.on('select', onSelect);
            emblaApi.on('reInit', onSelect);
            // Initialize selected index after mount
            const initIndex = {
                "WhatParentSays.useEffect.initIndex": ()=>{
                    setSelectedIndex(emblaApi.selectedScrollSnap());
                    setCanScrollPrev(emblaApi.canScrollPrev());
                    setCanScrollNext(emblaApi.canScrollNext());
                }
            }["WhatParentSays.useEffect.initIndex"];
            requestAnimationFrame(initIndex);
            return ({
                "WhatParentSays.useEffect": ()=>{
                    emblaApi.off('select', onSelect);
                }
            })["WhatParentSays.useEffect"];
        }
    }["WhatParentSays.useEffect"], [
        emblaApi,
        onSelect
    ]);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WhatParentSays.useCallback[scrollTo]": (index)=>{
            if (emblaApi) emblaApi.scrollTo(index);
        }
    }["WhatParentSays.useCallback[scrollTo]"], [
        emblaApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 items-center w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-4 xl:px-8 2xl:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-0 items-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:gap-4 md:gap-5 items-center justify-center w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center w-full lg:pt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-medium text-white text-3xl md:text-5xl   lg:text-6xl leading-tight text-center tracking-tight",
                                    children: "What Parents Say"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center max-w-sm md:max-w-md lg:max-w-full w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight",
                                    children: "Real feedback from parents whose children have learned to code, and built projects they're proud of"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col items-start w-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden w-full",
                        ref: emblaRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 sm:gap-5 md:gap-6",
                            children: testimonials.map((testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-[0_0_auto] min-w-0 w-80 sm:w-96 md:w-[28rem] aspect-[4/5] rounded-lg relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: testimonial.image,
                                                alt: `${testimonial.firstName} ${testimonial.lastName}`,
                                                fill: true,
                                                className: "object-cover object-center",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-lg",
                                            style: {
                                                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 pb-10 sm:pb-12 md:pb-14 pt-4 sm:pt-5 md:pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-start pb-3 sm:pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-start w-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight tracking-wide uppercase w-full",
                                                                children: testimonial.firstName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-start w-full",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-white text-xs sm:text-sm leading-normal w-full",
                                                                children: testimonial.lastName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-end w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-extralight text-white text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap w-full",
                                                            children: testimonial.quote
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, testimonial.id, true, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-start justify-between w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl gap-3 xl:gap-4 2xl:gap-5 h-[500px] xl:h-[550px] 2xl:h-[635px]",
                    children: testimonials.map((testimonial, index)=>{
                        const isOpen = hoveredIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseEnter: ()=>setHoveredIndex(index),
                            onMouseLeave: ()=>setHoveredIndex(0),
                            className: `relative h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'flex-[1.8] xl:flex-[1.85] 2xl:flex-[1.9]' : 'flex-1'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: testimonial.image,
                                    alt: `${testimonial.firstName} ${testimonial.lastName}`,
                                    fill: true,
                                    className: "object-cover",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-lg",
                                    style: {
                                        backgroundImage: isOpen ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 xl:bottom-8 2xl:bottom-10 left-4 xl:left-6 2xl:left-8 right-4 xl:right-6 2xl:right-8 flex flex-col gap-3 xl:gap-4 2xl:gap-5 transition-opacity duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white text-2xl xl:text-3xl 2xl:text-4xl leading-tight tracking-[0.15rem] xl:tracking-[0.2rem] 2xl:tracking-[0.25rem] uppercase",
                                                    children: testimonial.firstName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-white text-lg xl:text-lg 2xl:text-xl leading-normal",
                                                    children: testimonial.lastName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 211,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-light text-white text-sm xl:text-base 2xl:text-lg leading-relaxed whitespace-pre-wrap",
                                            children: testimonial.quote
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 210,
                                    columnNumber: 19
                                }, this),
                                !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[10%] left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "transform -rotate-90 whitespace-nowrap origin-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white text-2xl xl:text-3xl 2xl:text-4xl leading-tight tracking-[0.15rem] xl:tracking-[0.2rem] 2xl:tracking-[0.25rem] uppercase text-left",
                                                    children: testimonial.firstName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-normal text-white text-lg xl:text-xl 2xl:text-2xl leading-normal text-left",
                                                    children: testimonial.lastName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, testimonial.id, true, {
                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollPrev,
                            disabled: !canScrollPrev,
                            className: "hidden lg:flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            "aria-label": "Previous testimonial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "backdrop-blur-sm bg-black/20 flex items-center justify-center overflow-hidden rounded-full lg:rounded-none lg:bg-transparent lg:backdrop-blur-none px-2 sm:px-2.5 md:px-3 lg:px-0 py-2 sm:py-2.5 md:py-3 lg:py-0 gap-1.5 sm:gap-2",
                            children: testimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(index),
                                    className: "flex items-center justify-center",
                                    "aria-label": `Go to testimonial ${index + 1}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-full shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 transition-colors ${selectedIndex === index ? 'bg-[#fefc00]' : 'bg-white opacity-50 lg:border lg:border-white'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollNext,
                            disabled: !canScrollNext,
                            className: "hidden lg:flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                            "aria-label": "Next testimonial",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/WhatParentSays.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(WhatParentSays, "2wWMleRUlmudxt8ij3y0nvqxBYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = WhatParentSays;
var _c;
__turbopack_context__.k.register(_c, "WhatParentSays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/assets/Logos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "166",
        height: "32",
        viewBox: "0 0 166 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.0912 28.9063C14.4553 28.9063 17.1824 26.2865 17.1824 23.0547C17.1824 19.823 14.4553 17.2031 11.0912 17.2031C7.72712 17.2031 5 19.823 5 23.0547C5 26.2865 7.72712 28.9063 11.0912 28.9063Z",
                fill: "#181C22"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Logos.tsx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.8143 23.2177C18.8143 22.9672 18.8307 22.7203 18.8625 22.4781C18.9059 22.1483 18.91 22.1278 18.8383 21.7928C18.1012 18.3515 15.7603 15.9738 11.7898 15.5943C11.5605 15.6195 11.3275 15.6329 11.0912 15.6329C7.7271 15.6329 5 13.013 5 9.7813C5 6.54952 7.72715 3.92969 11.0912 3.92969C14.4553 3.92969 17.1824 6.54957 17.1824 9.7813C17.1824 10.0508 17.163 10.3159 17.1263 10.5757L17.1268 10.5752C17.1405 15.5835 20.8978 17.3863 23.8081 17.461C24.1641 17.3988 24.5308 17.3661 24.9055 17.3661C28.2696 17.3661 30.9967 19.986 30.9967 23.2177C30.9967 26.4495 28.2695 29.0693 24.9055 29.0693C21.5414 29.0693 18.8143 26.4494 18.8143 23.2177Z",
                fill: "#181C22"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Logos.tsx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24.9095 15.8048C28.2736 15.8048 31.0007 13.1849 31.0007 9.95317C31.0007 6.72142 28.2736 4.10156 24.9095 4.10156C21.5455 4.10156 18.8184 6.72142 18.8184 9.95317C18.8184 13.1849 21.5455 15.8048 24.9095 15.8048Z",
                fill: "#181C22"
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Logos.tsx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_4029_43277)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M37.44 23L41.54 15.94L37.48 9H40.48L43.26 14.06H43.62L46.4 9H49.4L45.34 15.94L49.44 23H46.44L43.62 17.82H43.26L40.44 23H37.44ZM55.1286 23.28C54.1419 23.28 53.2686 23.0733 52.5086 22.66C51.7619 22.2333 51.1753 21.64 50.7486 20.88C50.3353 20.1067 50.1286 19.2 50.1286 18.16V17.92C50.1286 16.88 50.3353 15.98 50.7486 15.22C51.1619 14.4467 51.7419 13.8533 52.4886 13.44C53.2353 13.0133 54.1019 12.8 55.0886 12.8C56.0619 12.8 56.9086 13.02 57.6286 13.46C58.3486 13.8867 58.9086 14.4867 59.3086 15.26C59.7086 16.02 59.9086 16.9067 59.9086 17.92V18.78H52.6886C52.7153 19.46 52.9686 20.0133 53.4486 20.44C53.9286 20.8667 54.5153 21.08 55.2086 21.08C55.9153 21.08 56.4353 20.9267 56.7686 20.62C57.1019 20.3133 57.3553 19.9733 57.5286 19.6L59.5886 20.68C59.4019 21.0267 59.1286 21.4067 58.7686 21.82C58.4219 22.22 57.9553 22.5667 57.3686 22.86C56.7819 23.14 56.0353 23.28 55.1286 23.28ZM52.7086 16.9H57.3486C57.2953 16.3267 57.0619 15.8667 56.6486 15.52C56.2486 15.1733 55.7219 15 55.0686 15C54.3886 15 53.8486 15.1733 53.4486 15.52C53.0486 15.8667 52.8019 16.3267 52.7086 16.9ZM61.8016 23V9H64.3216V23H61.8016ZM69.8441 23.28C69.1374 23.28 68.5041 23.16 67.9441 22.92C67.3841 22.6667 66.9374 22.3067 66.6041 21.84C66.2841 21.36 66.1241 20.78 66.1241 20.1C66.1241 19.42 66.2841 18.8533 66.6041 18.4C66.9374 17.9333 67.3907 17.5867 67.9641 17.36C68.5507 17.12 69.2174 17 69.9641 17H72.6841V16.44C72.6841 15.9733 72.5374 15.5933 72.2441 15.3C71.9507 14.9933 71.4841 14.84 70.8441 14.84C70.2174 14.84 69.7507 14.9867 69.4441 15.28C69.1374 15.56 68.9374 15.9267 68.8441 16.38L66.5241 15.6C66.6841 15.0933 66.9374 14.6333 67.2841 14.22C67.6441 13.7933 68.1174 13.4533 68.7041 13.2C69.3041 12.9333 70.0307 12.8 70.8841 12.8C72.1907 12.8 73.2241 13.1267 73.9841 13.78C74.7441 14.4333 75.1241 15.38 75.1241 16.62V20.32C75.1241 20.72 75.3107 20.92 75.6841 20.92H76.4841V23H74.8041C74.3107 23 73.9041 22.88 73.5841 22.64C73.2641 22.4 73.1041 22.08 73.1041 21.68V21.66H72.7241C72.6707 21.82 72.5507 22.0333 72.3641 22.3C72.1774 22.5533 71.8841 22.78 71.4841 22.98C71.0841 23.18 70.5374 23.28 69.8441 23.28ZM70.2841 21.24C70.9907 21.24 71.5641 21.0467 72.0041 20.66C72.4574 20.26 72.6841 19.7333 72.6841 19.08V18.88H70.1441C69.6774 18.88 69.3107 18.98 69.0441 19.18C68.7774 19.38 68.6441 19.66 68.6441 20.02C68.6441 20.38 68.7841 20.6733 69.0641 20.9C69.3441 21.1267 69.7507 21.24 70.2841 21.24ZM77.9766 23V13.08H80.4566V14.2H80.8166C80.9632 13.8 81.2032 13.5067 81.5366 13.32C81.8832 13.1333 82.2832 13.04 82.7366 13.04H83.9366V15.28H82.6966C82.0566 15.28 81.5299 15.4533 81.1166 15.8C80.7032 16.1333 80.4966 16.6533 80.4966 17.36V23H77.9766ZM85.5563 23V13.08H88.0763V23H85.5563ZM86.8163 11.92C86.3629 11.92 85.9763 11.7733 85.6563 11.48C85.3496 11.1867 85.1963 10.8 85.1963 10.32C85.1963 9.84 85.3496 9.45333 85.6563 9.16C85.9763 8.86667 86.3629 8.72 86.8163 8.72C87.2829 8.72 87.6696 8.86667 87.9763 9.16C88.2829 9.45333 88.4363 9.84 88.4363 10.32C88.4363 10.8 88.2829 11.1867 87.9763 11.48C87.6696 11.7733 87.2829 11.92 86.8163 11.92ZM94.6388 23.28C93.3454 23.28 92.2854 23 91.4588 22.44C90.6321 21.88 90.1321 21.08 89.9588 20.04L92.2788 19.44C92.3721 19.9067 92.5254 20.2733 92.7388 20.54C92.9654 20.8067 93.2388 21 93.5588 21.12C93.8921 21.2267 94.2521 21.28 94.6388 21.28C95.2254 21.28 95.6588 21.18 95.9388 20.98C96.2188 20.7667 96.3588 20.5067 96.3588 20.2C96.3588 19.8933 96.2254 19.66 95.9588 19.5C95.6921 19.3267 95.2654 19.1867 94.6788 19.08L94.1188 18.98C93.4254 18.8467 92.7921 18.6667 92.2188 18.44C91.6454 18.2 91.1854 17.8733 90.8388 17.46C90.4921 17.0467 90.3188 16.5133 90.3188 15.86C90.3188 14.8733 90.6788 14.12 91.3988 13.6C92.1188 13.0667 93.0654 12.8 94.2388 12.8C95.3454 12.8 96.2654 13.0467 96.9988 13.54C97.7321 14.0333 98.2121 14.68 98.4388 15.48L96.0988 16.2C95.9921 15.6933 95.7721 15.3333 95.4388 15.12C95.1188 14.9067 94.7188 14.8 94.2388 14.8C93.7588 14.8 93.3921 14.8867 93.1388 15.06C92.8854 15.22 92.7588 15.4467 92.7588 15.74C92.7588 16.06 92.8921 16.3 93.1588 16.46C93.4254 16.6067 93.7854 16.72 94.2388 16.8L94.7988 16.9C95.5454 17.0333 96.2188 17.2133 96.8188 17.44C97.4321 17.6533 97.9121 17.9667 98.2588 18.38C98.6188 18.78 98.7988 19.3267 98.7988 20.02C98.7988 21.06 98.4188 21.8667 97.6588 22.44C96.9121 23 95.9054 23.28 94.6388 23.28Z",
                    fill: "#181C22"
                }, void 0, false, {
                    fileName: "[project]/src/components/assets/Logos.tsx",
                    lineNumber: 8,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Logos.tsx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_4029_43277",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "65",
                        height: "18",
                        fill: "white",
                        transform: "translate(37 7)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/assets/Logos.tsx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/assets/Logos.tsx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/assets/Logos.tsx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/assets/Logos.tsx",
        lineNumber: 3,
        columnNumber: 1
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/nav/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
function MobileMenu({ isOpen, onClose }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white z-50 flex flex-col justify-between overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: "absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 24,
                    className: "text-[#161a20]"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start px-3 py-0 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start w-full max-w-[351px] mx-auto pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: onClose,
                            className: "bg-[#f1f5f9] flex gap-[15px] items-center px-4 py-2.5 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start w-[22px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                        size: 22,
                                        className: "text-[#161a20]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-[#161a20] text-lg leading-normal",
                                        children: "Go to Home Page"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[#bababa] flex flex-col items-start pb-px pt-0 px-0 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/programs",
                                    onClick: onClose,
                                    className: "flex items-center justify-between p-[15px] w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[#161a20] text-lg leading-normal",
                                            children: "Programs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 24,
                                            className: "text-[#161a20]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[#bababa] flex flex-col items-start pb-px pt-0 px-0 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    onClick: onClose,
                                    className: "flex items-center justify-between p-[15px] w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[#161a20] text-lg leading-normal",
                                            children: "Company"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 24,
                                            className: "text-[#161a20]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[#bababa] flex flex-col items-center justify-center pb-px pt-0 px-0 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth/login",
                                    onClick: onClose,
                                    className: "flex items-center justify-between p-[15px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium text-[#161a20] text-lg leading-normal",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start pb-[15px] pt-0 px-5 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-start w-full max-w-[351px] mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start pb-6 pt-5 px-5 w-full bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://cal.com/xelaris/trial-class",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: onClose,
                                className: "bg-[#fefc00] flex items-center justify-center overflow-hidden px-6 py-3 rounded-2xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_0px_rgba(0,0,0,0.15)] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-6",
                                    children: "Book A Trial Class →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/signup",
                                onClick: onClose,
                                className: "border border-[#161a20] flex items-center justify-center overflow-hidden px-12 py-2.5 rounded-2xl w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium text-[#161a20] text-lg text-center tracking-[-0.4px] leading-6",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/nav/MobileMenu.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/nav/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Logos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/assets/Logos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/MobileMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Nav() {
    _s();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-[#f1f5f9] backdrop-blur-[5px] py-2 px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$assets$2f$Logos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                            fileName: "[project]/src/components/nav/index.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav/index.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/programs",
                                className: "font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "Programs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: "font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pricing",
                                className: "font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "font-medium text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav/index.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/auth/login",
                                className: "font-normal text-[#181c22] text-lg leading-[19.2px] px-1.5 py-1 rounded hover:bg-white/50 transition-colors",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://cal.com/xelaris/trial-class",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "bg-[#fefc00] text-[#161a20] font-medium text-lg leading-6 tracking-[-0.4px] px-6 py-3 rounded-2xl shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_0px_rgba(0,0,0,0.15)] hover:bg-[#f5f200] transition-colors inline-block",
                                children: "Book A Trial Class →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/index.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav/index.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "lg:hidden !bg-[#1a1e24] text-white !p-3 !rounded-xl",
                        onClick: ()=>setIsMobileMenuOpen(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/components/nav/index.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav/index.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenu"], {
                isOpen: isMobileMenuOpen,
                onClose: ()=>setIsMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/nav/index.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Nav, "QerECOS75+B7gv+k3q7FrDf39mc=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$world$2d$flags$2f$dist$2f$react$2d$world$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-world-flags/dist/react-world-flags.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Country flag codes - organized by position in grid (4 rows x 5 columns for mobile, 4 rows x 6 columns for desktop)
// Based on the image: Row 1: USA, Australia, Canada, Bahamas, Indonesia, Luxembourg
// Row 2: France, Netherlands, Dominican Republic, Saint Kitts and Nevis, Hong Kong, Bahrain
// Row 3: Singapore, China, Russia, Brazil, New Zealand, Greece
// Row 4: Dominica, Israel, Maldives, Colombia, British Virgin Islands, (and more countries to fill 6 columns)
const countryCodes = [
    // Row 1
    'US',
    'AU',
    'CA',
    'BS',
    'ID',
    'LU',
    // Row 2
    'FR',
    'NL',
    'DO',
    'KN',
    'HK',
    'BH',
    // Row 3
    'SG',
    'CN',
    'RU',
    'BR',
    'NZ',
    'GR',
    // Row 4
    'DM',
    'IL',
    'MV',
    'CO',
    'VG'
];
function Footer({ onContact, onSocialClick }) {
    _s();
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleSection = (section)=>{
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(section)) {
            newOpenSections.delete(section);
        } else {
            newOpenSections.add(section);
        }
        setOpenSections(newOpenSections);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full bg-black ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-center lg:max-w-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://cal.com/xelaris/trial-class",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-[#fefc00] border-b border-l-0 lg:border-l border-r border-t border-black flex gap-2 sm:gap-2.5 items-center justify-left md:justify-center py-4 sm:py-5 md:py-6 lg:py-5 xl:py-6 2xl:py-8 px-4 sm:px-5 md:px-6 w-full lg:flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-full h-full",
                                    viewBox: "0 0 19 23",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11.4577 10.0234H5.20768M7.29102 14.0164H5.20768M13.541 6.03038H5.20768M17.7077 5.83073V16.2127C17.7077 17.8899 17.7077 18.7285 17.3671 19.3691C17.0675 19.9327 16.5895 20.3908 16.0014 20.6779C15.3329 21.0044 14.4579 21.0044 12.7077 21.0044H6.04102C4.29085 21.0044 3.41577 21.0044 2.7473 20.6779C2.15929 20.3908 1.68122 19.9327 1.38162 19.3691C1.04102 18.7285 1.04102 17.8899 1.04102 16.2127V5.83073C1.04102 4.15348 1.04102 3.31486 1.38162 2.67424C1.68122 2.11074 2.15929 1.65259 2.7473 1.36547C3.41577 1.03906 4.29085 1.03906 6.04102 1.03906H12.7077C14.4579 1.03906 15.3329 1.03906 16.0014 1.36547C16.5895 1.65259 17.0675 2.11074 17.3671 2.67424C17.7077 3.31486 17.7077 4.15348 17.7077 5.83073Z",
                                        stroke: "#050505",
                                        strokeWidth: "2.08333",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 1
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#161a20] text-lg sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl whitespace-nowrap",
                                children: [
                                    "Book A Trial Class ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "inline-block w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onContact,
                        className: "bg-white border border-black flex gap-2 sm:gap-2.5 items-center justify-left md:justify-center py-4 sm:py-5 md:py-6 lg:py-5 xl:py-6 2xl:py-8 px-4 sm:px-5 md:px-6 w-full lg:flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-full h-full",
                                    viewBox: "0 0 25 25",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21.8755 11.9792C21.8755 16.8692 17.9114 20.8333 13.0214 20.8333C11.8997 20.8333 10.8268 20.6248 9.83925 20.2443C9.6587 20.1748 9.56842 20.14 9.49663 20.1234C9.42601 20.1072 9.3749 20.1003 9.30249 20.0976C9.22887 20.0948 9.1481 20.1031 8.98655 20.1198L3.65216 20.6713C3.14356 20.7238 2.88927 20.7501 2.73927 20.6585C2.60862 20.5789 2.51963 20.4457 2.49594 20.2946C2.46874 20.1209 2.59026 19.896 2.83329 19.4463L4.53711 16.2925C4.67742 16.0328 4.74757 15.9029 4.77936 15.778C4.81073 15.6548 4.81832 15.5658 4.80828 15.439C4.79812 15.3105 4.74176 15.1433 4.62906 14.809C4.32955 13.9204 4.16721 12.9688 4.16721 11.9792C4.16721 7.08915 8.13136 3.125 13.0214 3.125C17.9114 3.125 21.8755 7.08915 21.8755 11.9792Z",
                                        stroke: "#050505",
                                        strokeWidth: "2.08333",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 1
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-[#050505] text-lg sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl whitespace-nowrap",
                                children: "Contact us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#1a282e]  flex flex-col items-start justify-center py-4 sm:py-5 md:py-6 pt-8 sm:pt-10 md:pt-12 lg:pt-8 xl:pt-12 2xl:pt-16 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 lg:py-8 xl:py-12 2xl:py-16 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:hidden flex-col items-start max-w-[93.75rem] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-10 items-start py-5 px-0 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bg-white h-0.5 left-0 right-0 -top-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSection('programs'),
                                                className: "flex items-center justify-between pb-1 pt-0 px-0 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal text-[#fefc00] text-lg whitespace-nowrap",
                                                        children: "Programs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center w-5 h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-[0.6875rem] h-2 text-white transition-transform ${openSections.has('programs') ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            openSections.has('programs') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 items-start pt-4 pb-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/programs/foundation",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Foundation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/programs/intermediate",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Intermediate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Advanced"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/programs/ai-for-high-school",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-white text-lg tracking-[-1px] leading-6",
                                                            children: "AI (High School)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/programs/web3-for-high-school",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Web3 (High School)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bg-white h-0.5 left-0 right-0 -top-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSection('company'),
                                                className: "flex items-center justify-between pb-1 pt-0 px-0 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal text-[#fefc00] text-lg whitespace-nowrap",
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center w-5 h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-[0.6875rem] h-2 text-white transition-transform ${openSections.has('company') ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            openSections.has('company') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 items-start pt-4 pb-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/pricing",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Pricing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bg-white h-0.5 left-0 right-0 -top-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleSection('legal'),
                                                className: "flex items-center justify-between pb-1 pt-0 px-0 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-normal text-[#fefc00] text-lg whitespace-nowrap",
                                                        children: "Legal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center w-5 h-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-[0.6875rem] h-2 text-white transition-transform ${openSections.has('legal') ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            openSections.has('legal') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 items-start pt-4 pb-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/terms",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Terms of Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/privacy",
                                                        className: "opacity-70 hover:opacity-100 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-white text-lg",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t-2 border-white flex flex-col gap-6 items-start py-5 px-0 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-normal text-[#fefc00] text-lg w-full",
                                        children: "Follow us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2.5 items-center h-8 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/xelarisofficial/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "shrink-0  relative hover:opacity-80 transition-opacity",
                                                "aria-label": "Instagram",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "28",
                                                    height: "29",
                                                    viewBox: "0 0 28 29",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            "clip-path": "url(#clip0_4094_43608)",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                "clip-path": "url(#clip1_4094_43608)",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M14.0016 10.6383C11.9946 10.6383 10.3567 12.3205 10.3567 14.3817C10.3567 16.443 11.9946 18.1252 14.0016 18.1252C16.0086 18.1252 17.6465 16.443 17.6465 14.3817C17.6465 12.3205 16.0086 10.6383 14.0016 10.6383ZM24.9337 14.3817C24.9337 12.8316 24.9473 11.2955 24.8626 9.74811C24.7778 7.95082 24.3786 6.35571 23.0989 5.04144C21.8165 3.72436 20.2661 3.31716 18.5161 3.2301C17.0067 3.14305 15.511 3.15709 14.0044 3.15709C12.495 3.15709 10.9993 3.14305 9.4926 3.2301C7.7426 3.31716 6.18948 3.72717 4.90979 5.04144C3.62737 6.35852 3.23088 7.95082 3.14612 9.74811C3.06135 11.2983 3.07503 12.8344 3.07503 14.3817C3.07503 15.9291 3.06135 17.468 3.14612 19.0154C3.23088 20.8127 3.6301 22.4078 4.90979 23.7221C6.19221 25.0392 7.7426 25.4464 9.4926 25.5334C11.002 25.6205 12.4977 25.6064 14.0044 25.6064C15.5137 25.6064 17.0094 25.6205 18.5161 25.5334C20.2661 25.4464 21.8192 25.0363 23.0989 23.7221C24.3813 22.405 24.7778 20.8127 24.8626 19.0154C24.9501 17.468 24.9337 15.9319 24.9337 14.3817ZM14.0016 20.1415C10.8981 20.1415 8.39339 17.5691 8.39339 14.3817C8.39339 11.1944 10.8981 8.62199 14.0016 8.62199C17.1051 8.62199 19.6098 11.1944 19.6098 14.3817C19.6098 17.5691 17.1051 20.1415 14.0016 20.1415ZM19.8395 9.73126C19.1149 9.73126 18.5297 9.13029 18.5297 8.3861C18.5297 7.6419 19.1149 7.04093 19.8395 7.04093C20.5641 7.04093 21.1493 7.6419 21.1493 8.3861C21.1495 8.56281 21.1158 8.73782 21.05 8.90112C20.9843 9.06444 20.8878 9.2128 20.7661 9.33776C20.6445 9.46271 20.5 9.5618 20.341 9.62932C20.182 9.69684 20.0116 9.73148 19.8395 9.73126Z",
                                                                    fill: "white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 1
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 1
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                    id: "clip0_4094_43608",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        width: "28",
                                                                        height: "29",
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 1
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 1
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                    id: "clip1_4094_43608",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        width: "28",
                                                                        height: "29",
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 1
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 1
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 1
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onSocialClick?.('facebook'),
                                                className: "shrink-0 relative",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12",
                                                    height: "26",
                                                    viewBox: "0 0 12 26",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7.58126 25.0611V13.6481H11.0375L11.5513 9.17964H7.58126V6.33335C7.58126 5.0439 7.90376 4.16105 9.56496 4.16105H11.67V0.177085C10.6458 0.0548148 9.61626 -0.00422505 8.58626 0.000234952C5.53126 0.000234952 3.43376 2.07785 3.43376 5.89194V9.17124H0V13.6398H3.44126V25.0611H7.58126Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 1
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://x.com/Xelarisofficial",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "shrink-0  relative hover:opacity-80 transition-opacity",
                                                "aria-label": "Twitter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "25",
                                                    height: "23",
                                                    viewBox: "0 0 25 23",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22.0412 5.53941C22.0575 5.78311 22.0575 6.02541 22.0575 6.26771C22.0575 13.6828 16.9912 22.2272 7.7325 22.2272C4.88 22.2272 2.23 21.3067 0 19.7081C0.405 19.7596 0.795 19.7777 1.21625 19.7777C3.48249 19.7838 5.68456 18.9397 7.4675 17.3812C6.41678 17.3601 5.39822 16.9739 4.55405 16.2766C3.70987 15.5794 3.08223 14.6058 2.75875 13.492C3.07 13.5435 3.3825 13.5783 3.71 13.5783C4.16125 13.5783 4.615 13.5087 5.03625 13.3875C3.89595 13.1311 2.87059 12.4425 2.13452 11.439C1.39845 10.4355 0.99712 9.17891 0.99875 7.88301V7.81331C1.67 8.22971 2.44875 8.49011 3.27375 8.52491C2.58261 8.01331 2.0159 7.31901 1.62417 6.50411C1.23245 5.68921 1.02789 4.77891 1.02875 3.85446C1.02875 2.81286 1.2775 1.8576 1.71375 1.02489C2.97892 2.75858 4.55688 4.17691 6.34542 5.18801C8.134 6.19911 10.0932 6.78041 12.0962 6.89431C12.0187 6.47651 11.9712 6.04351 11.9712 5.60901C11.9709 4.87231 12.1009 4.14279 12.3538 3.4621C12.6068 2.78142 12.9776 2.16295 13.4452 1.64203C13.9128 1.12111 14.468 0.707971 15.079 0.426221C15.6901 0.144471 16.3449 -0.000359331 17.0062 6.69484e-07C18.4562 6.69484e-07 19.765 0.676761 20.685 1.77127C21.8122 1.52844 22.8932 1.07003 23.88 0.416361C23.5043 1.71253 22.7172 2.81162 21.6662 3.50772C22.666 3.3807 23.643 3.08782 24.565 2.6388C23.8764 3.75712 23.0231 4.73781 22.0412 5.53941Z",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 1
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t-2 border-white flex flex-col gap-2 items-start py-5 px-0 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-normal text-[#fefc00] text-lg w-full",
                                        children: "Countries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-normal text-white text-lg opacity-70 pb-4 pt-0",
                                        children: "Where we have student learning"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-5 gap-4 w-full max-w-[250px]",
                                        children: countryCodes.slice(0, 20).map((code, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square w-10 h-10 relative overflow-hidden rounded-[0.3125rem]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$world$2d$flags$2f$dist$2f$react$2d$world$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    code: code,
                                                    className: "w-full h-full object-cover rounded-[0.3125rem]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden max-w-7xl xl:max-w-[90rem] 2xl:max-w-[1440px] mx-auto lg:flex items-start justify-between max-w-5xl xl:max-w-6xl 2xl:max-w-[1224px] w-full mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 gap-6 xl:gap-8 2xl:gap-10 items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start w-full max-w-xs xl:max-w-sm 2xl:max-w-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1",
                                                    children: "Programs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/programs/foundation",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Foundation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/programs/intermediate",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Intermediate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Advanced"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/programs/ai-for-high-school",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-white text-lg tracking-[-1px] leading-6",
                                                                children: "AI (High School)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/programs/web3-for-high-school",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Web3 (High School)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start w-full max-w-xs xl:max-w-sm 2xl:max-w-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1",
                                                    children: "Company"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/about",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "About"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/contact",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Contact"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/pricing",
                                                            className: "opacity-70 hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-white text-lg",
                                                                children: "Pricing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start mb-2 xl:mb-3 2xl:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl pb-1",
                                                        children: "Legal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-4 xl:gap-5 items-start pb-6 xl:pb-8 2xl:pb-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/terms",
                                                                className: "opacity-70 hover:opacity-100 transition-opacity",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-normal text-white text-lg",
                                                                    children: "Terms of Service"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 348,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/privacy",
                                                                className: "opacity-70 hover:opacity-100 transition-opacity",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-normal text-white text-lg",
                                                                    children: "Privacy Policy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 xl:gap-5 2xl:gap-6 items-start pt-2 xl:pt-3 2xl:pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl",
                                                        children: "Follow us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-5 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>onSocialClick?.('facebook'),
                                                                className: "shrink-0 relative hover:opacity-80 transition-opacity",
                                                                "aria-label": "Facebook",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "12",
                                                                    height: "26",
                                                                    viewBox: "0 0 12 26",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M7.58126 25.0611V13.6481H11.0375L11.5513 9.17964H7.58126V6.33335C7.58126 5.0439 7.90376 4.16105 9.56496 4.16105H11.67V0.177085C10.6458 0.0548148 9.61626 -0.00422505 8.58626 0.000234952C5.53126 0.000234952 3.43376 2.07785 3.43376 5.89194V9.17124H0V13.6398H3.44126V25.0611H7.58126Z",
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                        lineNumber: 368,
                                                                        columnNumber: 1
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 18
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://x.com/Xelarisofficial",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "shrink-0 relative hover:opacity-80 transition-opacity",
                                                                "aria-label": "Twitter",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "25",
                                                                    height: "23",
                                                                    viewBox: "0 0 25 23",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M22.0412 5.53941C22.0575 5.78311 22.0575 6.02541 22.0575 6.26771C22.0575 13.6828 16.9912 22.2272 7.7325 22.2272C4.88 22.2272 2.23 21.3067 0 19.7081C0.405 19.7596 0.795 19.7777 1.21625 19.7777C3.48249 19.7838 5.68456 18.9397 7.4675 17.3812C6.41678 17.3601 5.39822 16.9739 4.55405 16.2766C3.70987 15.5794 3.08223 14.6058 2.75875 13.492C3.07 13.5435 3.3825 13.5783 3.71 13.5783C4.16125 13.5783 4.615 13.5087 5.03625 13.3875C3.89595 13.1311 2.87059 12.4425 2.13452 11.439C1.39845 10.4355 0.99712 9.17891 0.99875 7.88301V7.81331C1.67 8.22971 2.44875 8.49011 3.27375 8.52491C2.58261 8.01331 2.0159 7.31901 1.62417 6.50411C1.23245 5.68921 1.02789 4.77891 1.02875 3.85446C1.02875 2.81286 1.2775 1.8576 1.71375 1.02489C2.97892 2.75858 4.55688 4.17691 6.34542 5.18801C8.134 6.19911 10.0932 6.78041 12.0962 6.89431C12.0187 6.47651 11.9712 6.04351 11.9712 5.60901C11.9709 4.87231 12.1009 4.14279 12.3538 3.4621C12.6068 2.78142 12.9776 2.16295 13.4452 1.64203C13.9128 1.12111 14.468 0.707971 15.079 0.426221C15.6901 0.144471 16.3449 -0.000359331 17.0062 6.69484e-07C18.4562 6.69484e-07 19.765 0.676761 20.685 1.77127C21.8122 1.52844 22.8932 1.07003 23.88 0.416361C23.5043 1.71253 22.7172 2.81162 21.6662 3.50772C22.666 3.3807 23.643 3.08782 24.565 2.6388C23.8764 3.75712 23.0231 4.73781 22.0412 5.53941Z",
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 1
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 379,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://www.instagram.com/xelarisofficial/",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "shrink-0 relative hover:opacity-80 transition-opacity",
                                                                "aria-label": "Instagram",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "28",
                                                                    height: "29",
                                                                    viewBox: "0 0 28 29",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                            "clip-path": "url(#clip0_4094_43608)",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                                                "clip-path": "url(#clip1_4094_43608)",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M14.0016 10.6383C11.9946 10.6383 10.3567 12.3205 10.3567 14.3817C10.3567 16.443 11.9946 18.1252 14.0016 18.1252C16.0086 18.1252 17.6465 16.443 17.6465 14.3817C17.6465 12.3205 16.0086 10.6383 14.0016 10.6383ZM24.9337 14.3817C24.9337 12.8316 24.9473 11.2955 24.8626 9.74811C24.7778 7.95082 24.3786 6.35571 23.0989 5.04144C21.8165 3.72436 20.2661 3.31716 18.5161 3.2301C17.0067 3.14305 15.511 3.15709 14.0044 3.15709C12.495 3.15709 10.9993 3.14305 9.4926 3.2301C7.7426 3.31716 6.18948 3.72717 4.90979 5.04144C3.62737 6.35852 3.23088 7.95082 3.14612 9.74811C3.06135 11.2983 3.07503 12.8344 3.07503 14.3817C3.07503 15.9291 3.06135 17.468 3.14612 19.0154C3.23088 20.8127 3.6301 22.4078 4.90979 23.7221C6.19221 25.0392 7.7426 25.4464 9.4926 25.5334C11.002 25.6205 12.4977 25.6064 14.0044 25.6064C15.5137 25.6064 17.0094 25.6205 18.5161 25.5334C20.2661 25.4464 21.8192 25.0363 23.0989 23.7221C24.3813 22.405 24.7778 20.8127 24.8626 19.0154C24.9501 17.468 24.9337 15.9319 24.9337 14.3817ZM14.0016 20.1415C10.8981 20.1415 8.39339 17.5691 8.39339 14.3817C8.39339 11.1944 10.8981 8.62199 14.0016 8.62199C17.1051 8.62199 19.6098 11.1944 19.6098 14.3817C19.6098 17.5691 17.1051 20.1415 14.0016 20.1415ZM19.8395 9.73126C19.1149 9.73126 18.5297 9.13029 18.5297 8.3861C18.5297 7.6419 19.1149 7.04093 19.8395 7.04093C20.5641 7.04093 21.1493 7.6419 21.1493 8.3861C21.1495 8.56281 21.1158 8.73782 21.05 8.90112C20.9843 9.06444 20.8878 9.2128 20.7661 9.33776C20.6445 9.46271 20.5 9.5618 20.341 9.62932C20.182 9.69684 20.0116 9.73148 19.8395 9.73126Z",
                                                                                    fill: "white"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                    lineNumber: 394,
                                                                                    columnNumber: 1
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 1
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 1
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                                    id: "clip0_4094_43608",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                        width: "28",
                                                                                        height: "29",
                                                                                        fill: "white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                        lineNumber: 399,
                                                                                        columnNumber: 1
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                    lineNumber: 398,
                                                                                    columnNumber: 1
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                                    id: "clip1_4094_43608",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                        width: "28",
                                                                                        height: "29",
                                                                                        fill: "white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                        lineNumber: 402,
                                                                                        columnNumber: 1
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                                    lineNumber: 401,
                                                                                    columnNumber: 1
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 1
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 17
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col gap-1 items-start lg:ml-8 xl:ml-12 2xl:ml-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-[#fefc00] text-lg xl:text-xl 2xl:text-2xl",
                                                children: "Countries"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 414,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start pb-6 xl:pb-8 2xl:pb-10 pt-0 w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-start pt-4 xl:pt-5 2xl:pt-6 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-normal text-white text-sm xl:text-base 2xl:text-lg opacity-70 pb-3 xl:pb-4 2xl:pb-5",
                                                            children: "Where we have student learning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-6 gap-x-2 xl:gap-x-3 2xl:gap-x-4 gap-y-4 xl:gap-y-6 2xl:gap-y-8 max-w-xs xl:max-w-sm 2xl:max-w-md",
                                                            children: countryCodes.map((code, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "aspect-square w-10 h-10 relative overflow-hidden rounded-[0.3125rem]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$world$2d$flags$2f$dist$2f$react$2d$world$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        code: code,
                                                                        className: "w-full h-full object-cover rounded-[0.3125rem]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, index, false, {
                                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start leading-normal text-lg w-full  mx-auto lg:pt-0 whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex lg:hidden flex-col font-bold justify-center relative shrink-0 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-normal",
                                    children: [
                                        "XELARIS:",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal",
                                            children: ` For Ambitious Kids/Teens Who `
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex lg:hidden flex-col font-normal justify-center relative shrink-0 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "leading-normal",
                                    children: "Want to Build, Not Just Learn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex lg:hidden flex-col font-normal justify-center relative shrink-0 text-[#b0b0b0] leading-[1.375rem] whitespace-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "We saw a disconnect in how kids were "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "learning tech skills. Most coding programs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 452,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "teach students to replicate pre-built"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "projects and follow instructions, led by "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: `instructors  who've never shipped code to `
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "production, pre-built curriculums where "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "everyone makes the same thing. Students "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "complete courses, earn certificates, and "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "graduate without ever building something "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "real. So we built what we wished existed: "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "true 1-on-1 in the industry. No cohorts. "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: "No fixed curriculum. Just a student with "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: `an idea working with an engineer. `
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "All "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0 font-bold",
                                        children: "programs is developed and taught exclusively "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-0 font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: `by a `
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-[#fefc00] underline decoration-solid underline-offset-2",
                                                children: `team`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: ` of professional`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: ` engineers.  `
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex flex-col items-start leading-normal text-lg w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-bold justify-center text-white w-full max-w-[610px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-normal whitespace-normal",
                                            children: [
                                                "XELARIS:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-normal",
                                                    children: " For Ambitious Kids/Teens Who Want to Build, Not Just Learn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 479,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-normal justify-center text-[#b0b0b0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[22px] whitespace-nowrap",
                                            children: "We saw a disconnect in how kids were learning tech skills. Most coding programs teach students to replicate pre-built projects and follow instructions,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-normal justify-center text-[#b0b0b0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[22px] whitespace-nowrap",
                                            children: "led by instructors who've never shipped code to production. Pre-built curriculums where everyone makes the same thing. Students complete courses,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-normal justify-center text-[#b0b0b0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[22px] whitespace-nowrap",
                                            children: "earn certificates, and graduate without ever building something real. So we built what we wished existed: true 1-on-1 mentorship with engineers who work"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-normal justify-center text-[#b0b0b0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[22px] whitespace-nowrap",
                                            children: [
                                                "in the industry. No cohorts. No fixed curriculum. Just a student with an idea working with an engineer. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "All programs is developed and taught"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 121
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col font-bold justify-center text-[#b0b0b0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-[22px] whitespace-nowrap",
                                            children: [
                                                "exclusively ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "by a "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-[#fefc00] underline decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]",
                                                    children: "team"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: " of professional engineers."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                            lineNumber: 498,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 477,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 shrink-0 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 md:py-5 lg:py-3 xl:py-4 2xl:py-5 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center relative w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-normal text-[#050505] text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-center w-full",
                        children: "All rights reserved ©2025 Xelaris Inc."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                        lineNumber: 513,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Footer/Footer.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer/Footer.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Footer, "dFctSU5BM0R696pg+CcjAIIi5PE=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Home/Faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Faq",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Faq() {
    _s();
    const [openItems, setOpenItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleItem = (sectionTitle, question)=>{
        const key = `${sectionTitle}-${question}`;
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(key)) {
            newOpenItems.delete(key);
        } else {
            newOpenItems.add(key);
        }
        setOpenItems(newOpenItems);
    };
    const faqData = [
        {
            title: "About Our Programs",
            items: [
                {
                    question: "What is the difference between Foundation, Advanced, and Masters?",
                    answer: "Foundation is where students discover what kind of technologist they want to become. They learn the basics of coding, explore different areas such as web development, AI, and game development, and build four to six real projects over six to twelve months. It is designed for kids ages 7 - 10 with no prior experience.\n\nIntermediate is where students go deep into their chosen path. They choose a specialization in Web Development, Software and AI, or Game Development. Over seven to nine months of personalized one-on-one instruction with a professional engineer, they deepen their technical skills by building hands-on projects and applying concepts to real-world problems within their chosen path. It is designed for kids ages 11 - 13. Prerequisite required.\n\nAdvanced is our most intensive program for ages 14-18. Students build production-ready applications and create portfolios that help them gain admission into top universities or secure internships at major tech companies. It runs for twelve to eighteen months and includes personalized mentorship."
                },
                {
                    question: "What is the AI Accelerator?",
                    answer: "The AI Accelerator is a focused program for high school students who need one standout AI project for college applications or science competitions. Instead of learning everything about AI over an extended period, students choose a domain such as AI and Health, AI and Finance, AI and Law, AI and Education, AI and Business, or AI and Language, and build one exceptional research level project with one on one mentorship from an AI engineer."
                },
                {
                    question: "How do I know which program is right for my child?",
                    answer: "We offer a personalized assessment where we meet with your child, review any previous work, give a short technical challenge, and discuss their interests. By the end of the call, we provide a clear recommendation on the best program."
                },
                {
                    question: "Does my child need coding experience to start?",
                    answer: "Foundation: No prior experience required. This program is designed for complete beginners.\n\nIntermediate: Yes. Students should have basic programming knowledge, either by completing Foundation or by demonstrating a solid understanding of core concepts.\n\nAdvanced: Yes. Students must have strong technical skills, either through successful completion of Intermediate or through at least two years of coding experience supported by a portfolio.\n\nAI Accelerator: Yes. Students must have strong Python programming skills."
                },
                {
                    question: "What if my child is not ready for the program I want them in?",
                    answer: "We will be honest with you. If your child is not ready, we will explain exactly what they need to improve and recommend the right starting point. Most students who are not ready for Advanced simply need Foundation first. That is not a setback. It is the smartest path to long-term success."
                },
                {
                    question: "Can my child switch paths during the program?",
                    answer: "Yes, especially in Intermediate. Helping students discover what genuinely interests them is a core part of the program. If your child begins in web development and later realizes they prefer game development, we adapt their learning path. In more advanced levels, switching is possible but less common, as students typically enter with a clear focus."
                }
            ]
        },
        {
            title: "How Classes Work",
            items: [
                {
                    question: "Are these group classes or private lessons?",
                    answer: "All programs are one-on-one private lessons with a dedicated mentor. Your child receives personalized attention, progresses at their own pace, and gets direct feedback on every line of code they write."
                },
                {
                    question: "How long are the classes?",
                    answer: "Class length and frequency depend on the program you choose.\n\nIn the Foundation program, students can attend 45-minute or 1-hour sessions, either once per week or twice per week.\n\nIn the Intermediate and Advanced programs, students attend 45-minute sessions twice per week, 1-hour sessions once per week, or 1-hour sessions twice per week."
                },
                {
                    question: "How often does my child meet with their mentor?",
                    answer: "You choose either once a week or twice a week. Students who meet twice weekly typically progress faster, but once weekly works well for many families."
                },
                {
                    question: "What happens in each session?",
                    answer: "Each session is personalized to your child. They may learn a new concept, build a project, debug code they have written, or receive feedback on their work. After every class, you receive detailed instructor notes outlining what was covered."
                },
                {
                    question: "What if my child needs help between classes?",
                    answer: "We provide dedicated support seven days a week. If your child gets stuck or has a question, they can reach out and receive help without waiting for the next session."
                },
                {
                    question: "Can we reschedule classes?",
                    answer: "Yes. You can reschedule your child's class anytime. We understand that life happens, and we aim to remain flexible for your family."
                }
            ]
        },
        {
            title: "Pricing & Payment",
            items: [
                {
                    question: "How much does each program cost?",
                    answer: "Pricing varies based on the program, session length, and class frequency. For full and up-to-date details, please visit our Pricing page, where all options are clearly outlined."
                },
                {
                    question: "What is included in the monthly price?",
                    answer: "Everything your child needs, including private one-on-one sessions once or twice weekly with an experienced instructor, personalized lessons tailored to your child's pace and learning style, detailed instructor notes after every class, dedicated support seven days a week, flexible rescheduling, and course certification upon completion."
                },
                {
                    question: "Is there a registration fee or any hidden costs?",
                    answer: "No. There are no registration fees and no hidden costs. The monthly price is exactly what you pay."
                },
                {
                    question: "Can I pause or cancel?",
                    answer: "Yes. We require thirty days' notice for cancellation. You can also pause your child's enrollment if you need to take a break."
                },
                {
                    question: "Do you offer any guarantees?",
                    answer: "Yes. If you enroll after the assessment and your child completes the first two classes but you are not satisfied, we will work with you to make it right. This may include adjusting the program, changing instructors, or issuing a refund."
                }
            ]
        },
        {
            title: "Results & Outcomes",
            items: [
                {
                    question: "What will my child actually build?",
                    answer: "Foundation: Students build hands-on projects like games and animations, learning by doing and exploring what excites them most.\n\nIntermediate: Students work on 5–6 meaningful projects, such as web applications, AI models, or published games.\n\nAdvanced: Students develop research-level projects, submit work to competitions, build portfolios, and develop real applications that people can actually use."
                },
                {
                    question: "Will my child get a certificate?",
                    answer: "Yes. Students receive course certification upon completion. More importantly, they leave with a portfolio of real projects, which matters far more than a certificate."
                },
                {
                    question: "What do students do after completing a program?",
                    answer: "After Foundation, students typically move on to Intermediate to deepen their skills.\n\nAfter Intermediate, students progress to Advanced if they are aiming for top universities or serious tech careers. Others may choose to apply for internships or start freelancing."
                },
                {
                    question: "Has this actually worked for other kids?",
                    answer: "Yes. Many of our students have achieved impressive results, including winning national and international competitions such as the National Beta State Competition in 2024 and 2025, as well as AI competitions. Several have built and launched live applications, and some have even applied to Y Combinator, the world's largest startup accelerator, with the projects they created in our programs."
                }
            ]
        },
        {
            title: "About Instructors",
            items: [
                {
                    question: "Who are the instructors?",
                    answer: "All instructors are experienced developers who build software every day. They are not just teachers. They are practitioners who design systems, solve real world problems, and ship products to real users."
                },
                {
                    question: "Will my child have the same instructor throughout the program?",
                    answer: "Yes. Consistency matters in one-on-one mentorship, and your child will work with the same dedicated mentor throughout the program."
                },
                {
                    question: "What if my child does not connect with their instructor?",
                    answer: "We will switch instructors. The mentor-student relationship is critical, and we prioritize the right fit."
                }
            ]
        },
        {
            title: "Technical Requirements",
            items: [
                {
                    question: "What does my child need to participate?",
                    answer: "A computer running Windows, Mac, or Chromebook for Foundation. Windows or Mac is preferred for intermediate and advanced. A stable internet connection and a quiet space for video calls are also required."
                },
                {
                    question: "Do I need to buy any software?",
                    answer: "No. All tools we use are free and open source. We help set everything up during the first session."
                },
                {
                    question: "What if we have technical issues?",
                    answer: "Our support team is available seven days a week and will help troubleshoot any issues."
                }
            ]
        },
        {
            title: "Getting Started",
            items: [
                {
                    question: "How do I enroll my child?",
                    answer: "Book an assessment session.\n\nMeet with your child to review their skills and receive a clear program recommendation.\n\nEnroll your child and get started."
                },
                {
                    question: "How quickly can my child start?",
                    answer: "Most students begin within one week of their assessment, depending on instructor availability and scheduling."
                },
                {
                    question: "What if I have more questions?",
                    answer: "You can contact our team directly at any time. We are happy to answer all your questions and guide you before you make any commitment."
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start px-4 py-10 w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 items-start w-full md:max-w-[60rem] lg:max-w-[70rem] mx-auto lg:px-30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 items-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-medium text-white text-3xl sm:text-3xl md:text-5xl     lg:text-6xl leading-[2.2rem] lg:leading-[4.4rem] text-center tracking-[-0.075rem] whitespace-pre-wrap",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium leading-[1.4rem] text-[#b0b0b0] text-lg text-center tracking-[-0.025rem] whitespace-pre-wrap max-w-md",
                                children: "Find answers to common questions about our programs, pricing, scheduling, and how to get started."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 items-start w-full px-4",
                    children: faqData.map((section, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 items-start w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-0  items-start p-5 relative rounded-[14px] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-[1_0_0] flex-col h-full items-start min-h-0 min-w-0 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between relative w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-start pl-0 pr-[30px] py-0 relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col font-semibold leading-[0] relative text-[#fefc00] text-[18px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "leading-[28px] whitespace-pre-wrap text-left",
                                                            children: section.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-start relative shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shrink-0 w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                section.items.map((item, itemIndex)=>{
                                    const key = `${section.title}-${item.question}`;
                                    const isOpen = openItems.has(key);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-0 items-start w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleItem(section.title, item.question),
                                                className: "bg-white/10 flex gap-4 items-start p-5 relative rounded-[14px] w-full hover:bg-white/15 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/30 flex flex-col items-center p-2 relative rounded-[6px] shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-6 h-6 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "21",
                                                                height: "21",
                                                                viewBox: "0 0 21 21",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M6.9 18.0079C8.80858 18.9869 11.0041 19.2521 13.0909 18.7556C15.1777 18.2592 17.0186 17.0337 18.2818 15.3C19.545 13.5664 20.1474 11.4386 19.9806 9.30002C19.8137 7.16147 18.8886 5.15283 17.3718 3.63605C15.855 2.11928 13.8464 1.19411 11.7078 1.02728C9.56929 0.860441 7.44147 1.46291 5.70782 2.72611C3.97417 3.98931 2.74869 5.83017 2.25222 7.91697C1.75575 10.0038 2.02094 12.1993 3 14.1079L1 20.0079L6.9 18.0079Z",
                                                                    stroke: "white",
                                                                    "stroke-width": "2",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 1
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-[1_0_0] flex-col items-start min-h-0 min-w-0 relative self-stretch",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between relative w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start pl-0 pr-[30px] py-0 relative",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col font-normal justify-center leading-[0] relative text-white text-[18px]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "leading-[28px] whitespace-pre-wrap text-left",
                                                                            children: item.question
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start relative shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `relative w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "w-6 h-6 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            isOpen && item.answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/5 p-5 rounded-[14px] w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-normal text-white text-lg leading-[1.4rem] whitespace-pre-wrap",
                                                    children: item.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                                lineNumber: 269,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, itemIndex, true, {
                                        fileName: "[project]/src/components/layout/Home/Faq.tsx",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this);
                                })
                            ]
                        }, sectionIndex, true, {
                            fileName: "[project]/src/components/layout/Home/Faq.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Home/Faq.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Home/Faq.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Home/Faq.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(Faq, "6wUNhupnqjb8VYcB/f/pzCnGmHY=");
_c = Faq;
var _c;
__turbopack_context__.k.register(_c, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Footer/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Home$2f$Faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Home/Faq.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "body",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Home$2f$Faq$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Faq"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                onContact: ()=>{
                    window.location.href = '/contact';
                }
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/cards/StudentProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudentProjectCard",
    ()=>StudentProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
;
;
;
const StudentProjectCard = ({ projectImage, title, description, features, builtBy, builtWith, onViewProject })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-[2.125rem]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-[2.125rem]",
                style: {
                    backgroundImage: "linear-gradient(108deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 56%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1b1f24] rounded-[2.125rem] p-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 items-center pb-6 pt-2 px-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center min-h-[25.5rem] overflow-hidden p-px relative rounded-[1.75rem] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        alt: title,
                                        className: "object-cover object-center pointer-events-none rounded-[1.75rem]",
                                        src: projectImage,
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-[1.75rem]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5 items-start px-3 py-0 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start relative w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-white text-xl leading-[1.55rem] tracking-[-0.015rem] whitespace-pre-wrap",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 items-start relative w-full pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-normal text-white text-xs leading-[1.03rem] whitespace-pre-wrap",
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start relative w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-normal text-white text-xs leading-[1.03rem] mb-0 whitespace-pre-wrap",
                                                        children: "Users can:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc ms-[1.125rem] mt-0 space-y-0",
                                                        children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "font-normal text-white text-sm leading-[1.03rem] mb-0",
                                                                children: feature
                                                            }, index, false, {
                                                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex  relative w-full mt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "colored",
                                                    onClick: onViewProject,
                                                    className: "w-full sm:w-auto",
                                                    children: [
                                                        "View Project ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 36
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start relative w-full pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[#d8e100] text-sm leading-[1.3rem] tracking-[-0.01rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Built by: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: [
                                                        builtBy,
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "| Built with: "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: builtWith
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/cards/StudentProjectCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StudentProjectCard;
var _c;
__turbopack_context__.k.register(_c, "StudentProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Students/OurStudents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OurStudents",
    ()=>OurStudents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cards$2f$StudentProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/cards/StudentProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Project images
const projectImages = {
    "Mortgage Calculator": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043085/internal-wrap_vdynwu.png",
    "OneKind Donation": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043210/233bc5665235ca3ff1c33e4bde6f4c27aeb88300_h5pgqi.png",
    "Weather App": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043854/7576c96a8c5bd2fc66cf4e4c19981c302c7631b1_dzsmna.jpg",
    "Word Scramble": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043499/aab13495ca22ef0b4b978eaf1ad97d9a8eb63a87_rtj342.png",
    "Animal Quiz": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043920/internal-wrap_1_f9hg6n.png",
    "Virus Rules": "https://res.cloudinary.com/seunsanyaa/image/upload/v1767043862/8d5c660ca7f8127a647bb1d4305703f5205e20d2_kxp35u.png"
};
function OurStudents() {
    _s();
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mortgage Calculator");
    // Project data - in a real app, this would come from an API
    const projectData = {
        "Mortgage Calculator": {
            title: "Mortgage Calculator",
            description: "I design this mortgage calculator project for practicing working with forms, client-side validation, and updating the Document Object Model (DOM).",
            features: [
                "Enter mortgage details and view the monthly and total repayment amounts after submitting the form",
                "See validation messages when required fields are incomplete",
                "Complete the entire form using only their keyboard"
            ],
            builtBy: "Chloé, 14 yrs old",
            builtWith: "HTML, CSS, JavaScript",
            url: "https://xelaris-mortgage-calculator.vercel.app/"
        },
        "OneKind Donation": {
            title: "OneKind Donation",
            description: "I designed this donation platform to simulate a real-world experience as my project. The goal was to build a fully functional interface that handles form interactions, validates user inputs, and integrates with a payment system. Working on this helped me practice a lot of important front-end skills: Form Handling & State Management, Client-Side Validation, and Payment Flow Logic.",
            features: [
                "Pick a donation type and choose a preset amount or type their own",
                "Decide between monthly or one-time donations",
                "See validation messages when a field is missing",
                "Clean transition to checkout page with payment-ready data"
            ],
            builtBy: "Maya, 15 years old",
            builtWith: "React",
            url: "https://onekind-donations.vercel.app/"
        },
        "Weather App": {
            title: "Weather App",
            description: "I built this weather app to practice building something real people could actually use. The goal was to create a working interface that shows weather information and updates based on what the user searches for. Working on this helped me practice getting data from APIs and managing state.",
            features: [
                "Search for any city and see current temperature and conditions",
                "View weather forecasts for the next few days",
                "Save favorite locations for quick access"
            ],
            builtBy: "Zach, 12 years old",
            builtWith: "HTML, CSS, JavaScript"
        },
        "Word Scramble": {
            title: "Word Scramble",
            description: "I built this word game to practice JavaScript and figure out how to handle user input. You basically unscramble letters to find the hidden word before you run out of tries. Building this taught me how to manage multiple pieces of game state, handle user input smoothly, and create win/lose logic—all skills I can use for more complex projects.",
            features: [
                "Auto-moving inputs: cursor automatically jumps to the next box",
                "Game tracks tries and wrong letters, resets after 6 mistakes",
                "Word scrambling function with random word selection",
                "Two reset options: new word or retry same word"
            ],
            builtBy: "William, 14 years old",
            builtWith: "HTML, CSS, JavaScript",
            url: "https://xelaris-word-scramble.vercel.app/"
        },
        "Animal Quiz": {
            title: "Animal Quiz",
            description: "I made this game because I love animals, and I want other kids to learn about animals too. When you start, you can pick an animal group, like dogs, cats, birds, or fish. Each one has different questions. Every question shows four pictures, and you have to pick the right animal. I hope you have fun playing my game!",
            features: [
                "Pick an animal group (dogs, cats, birds, or fish)",
                "Answer questions by selecting from four picture options",
                "Try again if you get a question wrong",
                "See your score at the end and play again to beat it"
            ],
            builtBy: "Alexa, 13 years old",
            builtWith: "HTML, CSS, JavaScript",
            url: "https://xelaris-animal-quiz.vercel.app/"
        },
        "Virus Rules": {
            title: "Virus Rules",
            description: "The problem I am solving is that many people get sick without knowing the cause of their symptoms, like wheezing. VirusRule helps users learn about viruses, vaccines, and virologists through fun games and quizzes. I created VirusRule because I believe learning about health should be enjoyable and easy. When we make learning fun, we can help people take control of their health.",
            features: [
                "Learn about viruses, vaccines, and virologists",
                "Play fun games and quizzes about health topics",
                "Understand symptoms and their causes",
                "Make learning about health enjoyable and easy"
            ],
            builtBy: "Zoja, 12 years old",
            builtWith: "HTML, CSS, JavaScript",
            url: "https://www.virusrule.com/"
        }
    };
    const projectList = [
        "Mortgage Calculator",
        "OneKind Donation",
        "Word Scramble",
        "Animal Quiz",
        "Weather App",
        "Virus Rules"
    ];
    const currentProject = projectData[selectedProject] || projectData["Mortgage Calculator"];
    const currentProjectImage = projectImages[selectedProject] || projectImages["Mortgage Calculator"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center w-full py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 2xl:px-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-[1440px] gap-4 sm:gap-5 md:gap-6 lg:gap-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col gap-2 sm:gap-3 md:gap-4 items-center w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold text-white text-3xl md:text-5xl  leading-tight text-center tracking-tight",
                                children: "See What Our Students Built"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight",
                                children: [
                                    "Every project here is built and owned by our students, guided by expert mentors and developed at a professional level. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 133,
                                        columnNumber: 134
                                    }, this),
                                    "Each new student creates something equally ambitious, driven entirely by their own passion."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col items-center justify-center overflow-hidden py-4 sm:py-5 md:py-6 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 sm:gap-1.5 md:gap-2 items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedProject("Mortgage Calculator"),
                                    className: `flex items-center justify-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg ${selectedProject === "Mortgage Calculator" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-base sm:text-lg md:text-lg leading-tight tracking-tight whitespace-nowrap",
                                        children: "Mortgage Calculator"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-full gap-1 sm:gap-1.5 md:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedProject("OneKind Donation"),
                                        className: `flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${selectedProject === "OneKind Donation" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap",
                                            children: "OneKind Donation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedProject("Weather App"),
                                        className: `flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${selectedProject === "Weather App" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap",
                                            children: "Weather App"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-full gap-1 sm:gap-1.5 md:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedProject("Word Scramble"),
                                        className: `flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${selectedProject === "Word Scramble" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap",
                                            children: "Word Scramble"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedProject("Animal Quiz"),
                                        className: `flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${selectedProject === "Animal Quiz" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap",
                                            children: "Animal Quiz"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedProject("Virus Rules"),
                                        className: `flex items-center justify-center px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg flex-1 ${selectedProject === "Virus Rules" ? "bg-[#141a25] text-[#fefc00] shadow-[inset_0.125rem_0.125rem_0.125rem_0_rgba(0,0,0,0.5)]" : "bg-[#1a1f28] text-[#b0b0b0] hover:text-white hover:bg-[#1f252f] transition-colors"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base leading-tight tracking-tight whitespace-nowrap",
                                            children: "Virus Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex flex-col items-center w-full gap-4 xl:gap-6 2xl:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full pt-6 xl:pt-8 2xl:pt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-medium text-white text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-center tracking-tight xl:tracking-tight 2xl:tracking-tighter whitespace-nowrap",
                                    children: "See What Our Students Have Built"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium text-[#b0b0b0] text-sm xl:text-base 2xl:text-lg leading-relaxed text-center tracking-tight mt-4 xl:mt-5 2xl:mt-6 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl",
                                    children: [
                                        "Every project here is built and owned by our students, guided by expert mentors and developed at a professional level.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                            className: "hidden md:block"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this),
                                        "Each new student creates something equally ambitious, driven entirely by their own passion."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-20 w-full justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col pt-4 xl:pt-6 2xl:pt-8 w-full max-w-xs xl:max-w-sm 2xl:max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 items-start overflow-hidden pb-2 w-full",
                                            children: projectList.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedProject(project),
                                                    className: `flex items-center px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 2xl:py-5 rounded-xl xl:rounded-2xl w-full ${selectedProject === project ? "bg-[#191c22] text-[#fefc00] shadow-[inset_-1px_-1px_1px_0px_rgba(82,89,102,0.08),inset_2px_2px_2px_0px_rgba(0,0,0,0.5)]" : "text-[#b0b0b0] hover:text-white transition-colors"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-sm xl:text-base 2xl:text-lg leading-tight tracking-tight",
                                                        children: project
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, this)
                                                }, project, false, {
                                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#1a1e24] flex flex-col items-center justify-end p-2 xl:p-3 2xl:p-4 rounded-xl xl:rounded-2xl 2xl:rounded-3xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)] border border-black w-full mt-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://cal.com/xelaris/trial-class",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "colored",
                                                    className: "!rounded-xl !px-4 xl:!px-6 2xl:!px-8 !py-2.5 xl:!py-3 2xl:!py-3.5 w-full",
                                                    children: [
                                                        "Book A Trial Class ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cards$2f$StudentProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StudentProjectCard"], {
                                        projectImage: currentProjectImage,
                                        title: currentProject.title,
                                        description: currentProject.description,
                                        features: currentProject.features,
                                        builtBy: currentProject.builtBy,
                                        builtWith: currentProject.builtWith,
                                        onViewProject: ()=>{
                                            if (currentProject.url) {
                                                window.open(currentProject.url, '_blank', 'noopener,noreferrer');
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col items-center pb-4 sm:pb-5 md:pb-6 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$cards$2f$StudentProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StudentProjectCard"], {
                        projectImage: currentProjectImage,
                        title: currentProject.title,
                        description: currentProject.description,
                        features: currentProject.features,
                        builtBy: currentProject.builtBy,
                        builtWith: currentProject.builtWith,
                        onViewProject: ()=>{
                            if (currentProject.url) {
                                window.open(currentProject.url, '_blank', 'noopener,noreferrer');
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Students/OurStudents.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(OurStudents, "3s1W/zYuif6R3yNFKLDsufJrNl4=");
_c = OurStudents;
var _c;
__turbopack_context__.k.register(_c, "OurStudents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Students/SuccessStories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SuccessStories",
    ()=>SuccessStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const imgZachMath = "https://res.cloudinary.com/seunsanyaa/image/upload/v1767016642/b9ea01b0a622041d935a5553077ac9ca5bdc6cca_1_j76bf0.png";
const imgFedir2024 = "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000726/First_Video_fiqdbq.mov";
const imgZachAI = "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000701/Second_Video_rcgegn.mov";
const imgFedir2025 = "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000658/Third_Video_rwnmnq.mp4";
const playButtonIcon = "https://res.cloudinary.com/seunsanyaa/image/upload/v1766252550/Component_1_1_vndzqq.png";
function SuccessStories() {
    _s();
    const [playingVideoIndex, setPlayingVideoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const stories = [
        {
            title: "From 75th to 95th Percentile: How Coding Boosted Zach's Math Scores by 20%",
            description: "Zach's MAP math scores jumped 20% from last fall, a phenomenal leap from the 75th to the 95th percentile. His highest-scoring area is problem-solving. His parents attribute this improvement to the coding and logical thinking skills he developed in our program. The MAP test is taken biannually to benchmark students in U.S.-based schools.",
            image: imgZachMath,
            hasVideo: false
        },
        {
            title: "2nd Place in Computer Science at National BETA Convention, U.S 2024",
            description: "Fedir placed 2nd in Computer Science at the National BETA State Convention, competing against some of the brightest students in the United States.",
            image: imgFedir2024,
            videoUrl: imgFedir2024,
            hasVideo: true
        },
        {
            title: "Zach Built an AI Math Tool. Then Taught a Room How It Works.",
            description: "We're so proud of our student Zach! He did an amazing job presenting his AI project at camp, and his parents were amazed by how confident and articulate he was. As his mom said, \"We attribute his success to the support and guidance he's receiving through the program.\"",
            image: imgZachAI,
            videoUrl: imgZachAI,
            hasVideo: true
        },
        {
            title: "Fedir Ranks 7th at 2025 National BETA Convention, U.S",
            description: "Fedir placed 7th in Computer Science at the National BETA State Convention, competing against some of the brightest students in the United States.",
            image: imgFedir2025,
            videoUrl: imgFedir2025,
            hasVideo: true
        }
    ];
    const handlePlayVideo = (index)=>{
        setPlayingVideoIndex(index);
        // Play video when opened
        setTimeout(()=>{
            const video = videoRefs.current[index];
            if (video) {
                video.play().catch(console.error);
            }
        }, 100);
    };
    const handleCloseVideo = (index)=>{
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
        setPlayingVideoIndex(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessStories.useEffect": ()=>{
            // Pause all videos when a new one opens
            videoRefs.current.forEach({
                "SuccessStories.useEffect": (video, index)=>{
                    if (video && index !== playingVideoIndex) {
                        video.pause();
                        video.currentTime = 0;
                    }
                }
            }["SuccessStories.useEffect"]);
        }
    }["SuccessStories.useEffect"], [
        playingVideoIndex
    ]);
    // Close video on escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessStories.useEffect": ()=>{
            const handleEscape = {
                "SuccessStories.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape' && playingVideoIndex !== null) {
                        handleCloseVideo(playingVideoIndex);
                    }
                }
            }["SuccessStories.useEffect.handleEscape"];
            window.addEventListener('keydown', handleEscape);
            return ({
                "SuccessStories.useEffect": ()=>window.removeEventListener('keydown', handleEscape)
            })["SuccessStories.useEffect"];
        }
    }["SuccessStories.useEffect"], [
        playingVideoIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center py-12 sm:py-16 md:py-20 lg:pt-6 xl:pt-8 2xl:pt-10 lg:pb-16 xl:pb-24 2xl:pb-32 w-full px-4 sm:px-6 md:px-8 lg:px-30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-5 md:gap-20 items-start justify-center w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-[1440px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col gap-4 sm:gap-5 md:gap-6 items-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:gap-4 items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-medium text-white text-3xl md:text-4xl leading-tight text-center tracking-tight whitespace-pre-wrap",
                                    children: [
                                        "Our Students",
                                        '\n',
                                        "Success Stories"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center max-w-xs sm:max-w-sm md:max-w-md w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium leading-relaxed text-[#b0b0b0] text-base sm:text-lg md:text-lg text-center tracking-tight whitespace-pre-wrap",
                                    children: "From winning state and national competitions to raising academic performance."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-start sticky top-0 w-full xl:max-w-md pt-16 xl:pt-20 2xl:pt-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-medium text-white sm:text-4xl  md:text-5xl lg:text-6xl leading-tight tracking-tight",
                                children: "Our Students Success Stories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col w-full pb-3 xl:pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-[#b0b0b0] text-sm xl:text-base 2xl:text-lg leading-relaxed tracking-tight",
                                children: "From winning state and national competitions to raising academic performance."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://cal.com/xelaris/trial-class",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "colored",
                                className: "!rounded-xl !px-4 xl:!px-6 2xl:!px-8 !py-2.5 xl:!py-3 2xl:!py-3.5 w-full",
                                children: [
                                    "Book A Trial Class ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                        lineNumber: 147,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex lg:hidden flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center w-full",
                    children: stories.map((story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-2xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl p-px",
                                        style: {
                                            backgroundImage: `linear-gradient(${130 + index * 2}deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#1b1f24] rounded-2xl p-1.5 sm:p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-xl sm:rounded-2xl p-px",
                                                style: {
                                                    backgroundImage: `linear-gradient(${131 + index * 2}deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden pb-3 sm:pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2 sm:gap-3 items-start pt-3 sm:pt-4 px-3 sm:px-4 pb-0 w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start justify-center w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-white text-xl sm:text-2xl md:text-2xl leading-tight tracking-tight whitespace-pre-wrap w-full",
                                                                        children: story.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `flex flex-col items-start opacity-70 w-full ${!story.hasVideo ? 'min-h-[8rem] sm:min-h-[10rem]' : ''}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-white text-base sm:text-lg md:text-base leading-relaxed tracking-tight whitespace-pre-wrap w-full",
                                                                        children: story.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 27
                                                                }, this),
                                                                !story.hasVideo ? // Full-width image for first card
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start justify-center relative rounded-xl sm:rounded-2xl w-full mt-2 sm:mt-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            alt: story.title,
                                                                            src: story.image,
                                                                            fill: true,
                                                                            className: "object-cover object-center object-top pointer-events-none rounded-xl sm:rounded-2xl",
                                                                            unoptimized: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 196,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 29
                                                                }, this) : // Video thumbnail for other cards
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start overflow-hidden relative rounded-xl sm:rounded-2xl w-full sm:w-80 md:w-96 mt-2 sm:mt-3",
                                                                    children: playingVideoIndex === index ? // Video player
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                ref: (el)=>{
                                                                                    videoRefs.current[index] = el;
                                                                                },
                                                                                src: story.videoUrl,
                                                                                controls: true,
                                                                                className: "w-full h-full object-contain",
                                                                                playsInline: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: (e)=>{
                                                                                    e.stopPropagation();
                                                                                    handleCloseVideo(index);
                                                                                },
                                                                                className: "absolute top-2 right-2 z-30 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors",
                                                                                "aria-label": "Close video",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "w-5 h-5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                    lineNumber: 228,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 33
                                                                    }, this) : // Video thumbnail with play button
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl z-10 pointer-events-none"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                lineNumber: 234,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer",
                                                                                onClick: ()=>handlePlayVideo(index),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                        src: story.videoUrl,
                                                                                        className: "w-full h-full object-cover rounded-xl sm:rounded-2xl",
                                                                                        preload: "metadata",
                                                                                        muted: true,
                                                                                        playsInline: true,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                                            src: story.videoUrl
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                            lineNumber: 243,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                        lineNumber: 236,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                alt: "Play button",
                                                                                                src: playButtonIcon,
                                                                                                fill: true,
                                                                                                className: "object-contain object-center",
                                                                                                unoptimized: true
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                                lineNumber: 249,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                            lineNumber: 248,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                        lineNumber: 247,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-xl sm:rounded-2xl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex flex-col gap-3 xl:gap-4 2xl:gap-5 items-end flex-1",
                    children: stories.map((story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,0.25)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] p-px",
                                        style: {
                                            backgroundImage: `linear-gradient(${130 + index * 2}deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%)`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#1b1f24] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem] p-1.5 xl:p-2 2xl:p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] p-px",
                                                style: {
                                                    backgroundImage: `linear-gradient(${131 + index * 2}deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 62%)`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] bg-gradient-to-b from-[#242930] to-[#13181f] overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2 xl:gap-3 2xl:gap-4 items-start pt-4 xl:pt-5 2xl:pt-6 px-4 xl:px-5 2xl:px-6 pb-0 w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start justify-center w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-white text-xl xl:text-2xl 2xl:text-3xl leading-tight tracking-tight w-full",
                                                                        children: story.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-start opacity-70 w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-white text-sm xl:text-base 2xl:text-lg leading-relaxed tracking-tight w-full",
                                                                        children: story.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 313,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-start pt-4 xl:pt-5 2xl:pt-6 px-0 pb-0 w-full",
                                                            children: !story.hasVideo ? // Full-width image for first card
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-start justify-center relative w-full px-4 xl:px-5 2xl:px-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl 2xl:rounded-[2rem] overflow-hidden opacity-70",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        alt: story.title,
                                                                        src: story.image,
                                                                        fill: true,
                                                                        className: "object-cover object-center pointer-events-none",
                                                                        unoptimized: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 29
                                                            }, this) : // Video thumbnail for other cards - centered
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center overflow-hidden relative w-full",
                                                                children: playingVideoIndex === index ? // Video player
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl overflow-hidden bg-black",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                            ref: (el)=>{
                                                                                videoRefs.current[index] = el;
                                                                            },
                                                                            src: story.videoUrl,
                                                                            controls: true,
                                                                            className: "w-full h-full object-contain rounded-xl xl:rounded-2xl",
                                                                            playsInline: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                            lineNumber: 341,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                handleCloseVideo(index);
                                                                            },
                                                                            className: "absolute top-2 right-2 z-30 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors",
                                                                            "aria-label": "Close video",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "w-5 h-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                lineNumber: 357,
                                                                                columnNumber: 37
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                            lineNumber: 349,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 33
                                                                }, this) : // Video thumbnail with play button
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl xl:rounded-2xl z-10 pointer-events-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative w-full max-w-md xl:max-w-lg 2xl:max-w-xl aspect-video xl:aspect-[4/3] 2xl:aspect-[3/2] rounded-xl xl:rounded-2xl overflow-hidden cursor-pointer",
                                                                            onClick: ()=>handlePlayVideo(index),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                    src: story.videoUrl,
                                                                                    className: "w-full h-full object-cover rounded-xl xl:rounded-2xl",
                                                                                    preload: "metadata",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                                        src: story.videoUrl
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                        lineNumber: 373,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                    lineNumber: 368,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 relative",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                            alt: "Play button",
                                                                                            src: playButtonIcon,
                                                                                            fill: true,
                                                                                            className: "object-contain object-center",
                                                                                            unoptimized: true
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                            lineNumber: 379,
                                                                                            columnNumber: 41
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                        lineNumber: 378,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                                    lineNumber: 377,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 pointer-events-none shadow-[inset_-0.3125rem_-0.5625rem_0.6875rem_0_rgba(0,0,0,0.15),inset_0.25rem_0.25rem_0.25rem_0_rgba(255,255,255,0.03)] rounded-xl xl:rounded-2xl 2xl:rounded-[2rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                                lineNumber: 295,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 pointer-events-none shadow-[inset_0.0625rem_0.0625rem_0.0625rem_0_rgba(255,255,255,0.1)] rounded-2xl xl:rounded-3xl 2xl:rounded-[2.5rem]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Students/SuccessStories.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(SuccessStories, "uHo/61ttDvQrw5Tfp1ihWBg8OC4=");
_c = SuccessStories;
var _c;
__turbopack_context__.k.register(_c, "SuccessStories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/video/Preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preview",
    ()=>Preview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const videoUrl = "https://res.cloudinary.com/seunsanyaa/video/upload/v1767000708/Home-page_video_tzmxjd.mov";
const playButtonIcon = "https://res.cloudinary.com/seunsanyaa/image/upload/v1767047113/Path_2_utz67t.png";
function Preview() {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formatTime = (time)=>{
        if (isNaN(time) || !isFinite(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    const handleTimerClick = ()=>{
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preview.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handleTimeUpdate = {
                "Preview.useEffect.handleTimeUpdate": ()=>{
                    setCurrentTime(video.currentTime);
                }
            }["Preview.useEffect.handleTimeUpdate"];
            const handleLoadedMetadata = {
                "Preview.useEffect.handleLoadedMetadata": ()=>{
                    setDuration(video.duration);
                }
            }["Preview.useEffect.handleLoadedMetadata"];
            const handlePlay = {
                "Preview.useEffect.handlePlay": ()=>setIsPlaying(true)
            }["Preview.useEffect.handlePlay"];
            const handlePause = {
                "Preview.useEffect.handlePause": ()=>setIsPlaying(false)
            }["Preview.useEffect.handlePause"];
            const handleEnded = {
                "Preview.useEffect.handleEnded": ()=>{
                    setIsPlaying(false);
                    if (video) {
                        video.currentTime = 0;
                        setCurrentTime(0);
                    }
                }
            }["Preview.useEffect.handleEnded"];
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('ended', handleEnded);
            return ({
                "Preview.useEffect": ()=>{
                    video.removeEventListener('timeupdate', handleTimeUpdate);
                    video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                    video.removeEventListener('play', handlePlay);
                    video.removeEventListener('pause', handlePause);
                    video.removeEventListener('ended', handleEnded);
                }
            })["Preview.useEffect"];
        }
    }["Preview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[189px] md:w-[189px] rounded-full overflow-hidden shadow-[0px_3.24px_3.24px_0px_rgba(0,0,0,0.25)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: videoUrl,
                        className: "w-full h-full object-cover rounded-full",
                        loop: true,
                        playsInline: true,
                        preload: "metadata",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: videoUrl,
                                type: "video/quicktime"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/video/Preview.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: videoUrl,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/video/Preview.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/video/Preview.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/video/Preview.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative -mt-[8px] sm:-mt-[10px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleTimerClick,
                        className: "bg-[rgba(137,136,136,0.53)] backdrop-blur-sm flex items-center gap-[4px] sm:gap-[6px] px-[14px] sm:px-[19px] py-1.5 sm:py-2 pr-[8px] sm:pr-[11px] rounded-[50px] shadow-[0px_2.066px_3.935px_0px_rgba(0,0,0,0.06),0px_5.711px_10.879px_0px_rgba(0,0,0,0.09),0px_13.751px_26.192px_0px_rgba(0,0,0,0.11),0px_45.612px_86.879px_0px_rgba(0,0,0,0.17),0px_0px_0px_5px_rgba(255,255,255,0.4)] cursor-pointer hover:bg-[rgba(137,136,136,0.65)] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[9px] h-[11px] sm:w-[11px] sm:h-[13px] shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    alt: "Play icon",
                                    src: playButtonIcon,
                                    fill: true,
                                    className: "object-contain",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/video/Preview.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/video/Preview.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-normal text-[15px] sm:text-[17px] text-white leading-normal",
                                children: [
                                    formatTime(currentTime),
                                    "/",
                                    formatTime(duration)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/video/Preview.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/video/Preview.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/video/Preview.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/video/Preview.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/video/Preview.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Preview, "oUiLIInZpEbz93PxHBb9dYHR4Co=");
_c = Preview;
var _c;
__turbopack_context__.k.register(_c, "Preview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_f8274fcd._.js.map