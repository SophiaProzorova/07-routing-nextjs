module.exports = [
"[project]/app/notes/filter/@sidebar/Sidebar.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "menuItem": "Sidebar-module__cRHKIG__menuItem",
  "menuLink": "Sidebar-module__cRHKIG__menuLink",
  "menuList": "Sidebar-module__cRHKIG__menuList",
});
}),
"[project]/app/notes/filter/@sidebar/default.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/filter/@sidebar/Sidebar.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
const NotesSidebar = async ()=>{
    const categories = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuList,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuItem,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/notes/filter/all`,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuLink,
                    children: "All notes"
                }, void 0, false, {
                    fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuItem,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/notes/filter/${category.id}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f40$sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuLink,
                        children: category.name
                    }, void 0, false, {
                        fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, category.id, false, {
                    fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
        lineNumber: 9,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NotesSidebar;
}),
];

//# sourceMappingURL=app_notes_filter_%40sidebar_f8a00208._.js.map