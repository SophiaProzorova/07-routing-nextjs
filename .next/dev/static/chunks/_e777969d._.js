(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes,
    "getCategories",
    ()=>getCategories,
    "getNotes",
    ()=>getNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const noteHubAPIUrl = `https://notehub-public.goit.study/api/notes`;
const API_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlNvcGhpZS5ncmVhdEBnbWFpbC5jb20iLCJpYXQiOjE3NTk5MDM4ODN9.TBmpiVxJbcXNMdnRBpa0NK2xDd694yQYbLjWZ0bdTTc");
const headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
};
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://notehub-public.goit.study/api",
    headers
});
const getNotes = async (categoryId)=>{
    const res = await api.get('/notes', {
        params: {
            tag: categoryId
        }
    });
    return res.data;
};
const fetchNoteById = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${noteHubAPIUrl}/${id}`, {
        headers
    });
    return res.data;
};
const fetchNotes = async (search, page, tag)=>{
    const options = {
        headers: headers,
        params: {
            search: search,
            page: page,
            perPage: 10,
            ...tag ? {
                tag: tag
            } : {}
        }
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(noteHubAPIUrl, options);
    return {
        notes: response.data.notes,
        totalPages: response.data.totalPages
    };
};
const createNote = async ({ title, content, tag })=>{
    const params = {
        title: title,
        content: content,
        tag: tag
    };
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(noteHubAPIUrl, params, {
        headers
    });
    return response.data;
};
const deleteNote = async (noteId)=>{
    const url = `${noteHubAPIUrl}/${noteId}`;
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(url, {
        headers: headers
    });
    return response.data;
};
const getCategories = async ()=>{
    const { notes } = await fetchNotes("", 1);
    const tags = notes.map((note)=>note.tag).filter((tag)=>Boolean(tag));
    const uniqueTags = Array.from(new Set(tags));
    return uniqueTags.map((tag)=>({
            id: tag,
            name: tag,
            description: "",
            createdAt: "",
            updatedAt: ""
        }));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteList/NoteList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "NoteList-module__LCs_aq__button",
  "content": "NoteList-module__LCs_aq__content",
  "footer": "NoteList-module__LCs_aq__footer",
  "link": "NoteList-module__LCs_aq__link",
  "list": "NoteList-module__LCs_aq__list",
  "listItem": "NoteList-module__LCs_aq__listItem",
  "tag": "NoteList-module__LCs_aq__tag",
  "title": "NoteList-module__LCs_aq__title",
});
}),
"[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NoteList = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "6ce2fa4db559f1666a35d43b61479ca9c15e4274a0a8f81d7122c992750e91d6") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ce2fa4db559f1666a35d43b61479ca9c15e4274a0a8f81d7122c992750e91d6";
    }
    const { notes } = t0;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t1;
    if ($[1] !== queryClient) {
        t1 = {
            mutationFn: _temp,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "notes"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t1);
    let t2;
    if ($[3] !== mutation) {
        t2 = async (noteId_0)=>{
            mutation.mutate(noteId_0);
        };
        $[3] = mutation;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleDeleteNote = t2;
    let t3;
    if ($[5] !== handleDeleteNote || $[6] !== notes) {
        let t4;
        if ($[8] !== handleDeleteNote) {
            t4 = (note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: note.title
                        }, void 0, false, {
                            fileName: "[project]/components/NoteList/NoteList.tsx",
                            lineNumber: 55,
                            columnNumber: 63
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                            children: note.content
                        }, void 0, false, {
                            fileName: "[project]/components/NoteList/NoteList.tsx",
                            lineNumber: 55,
                            columnNumber: 106
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                    children: note.tag
                                }, void 0, false, {
                                    fileName: "[project]/components/NoteList/NoteList.tsx",
                                    lineNumber: 55,
                                    columnNumber: 179
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/notes/${note.id}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                    children: "View details"
                                }, void 0, false, {
                                    fileName: "[project]/components/NoteList/NoteList.tsx",
                                    lineNumber: 55,
                                    columnNumber: 222
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                    onClick: ()=>handleDeleteNote(note.id),
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/NoteList/NoteList.tsx",
                                    lineNumber: 55,
                                    columnNumber: 295
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/NoteList/NoteList.tsx",
                            lineNumber: 55,
                            columnNumber: 151
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, note.id, true, {
                    fileName: "[project]/components/NoteList/NoteList.tsx",
                    lineNumber: 55,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0));
            $[8] = handleDeleteNote;
            $[9] = t4;
        } else {
            t4 = $[9];
        }
        t3 = notes.map(t4);
        $[5] = handleDeleteNote;
        $[6] = notes;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/NoteList/NoteList.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
};
_s(NoteList, "mUUakYvFQSudGRmMzZErOI9nuuc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteList;
const __TURBOPACK__default__export__ = NoteList;
async function _temp(noteId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNote"])(noteId);
}
var _c;
__turbopack_context__.k.register(_c, "NoteList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Pagination/Pagination.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Pagination-module__QyWOzW__active",
  "pagination": "Pagination-module__QyWOzW__pagination",
});
}),
"[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-paginate/dist/react-paginate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.module.css [app-client] (css module)");
;
;
;
;
const Pagination = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "a3b9a94470abbfb8a7ab6a9c37600db9081dec8d8d02377d7843559ec86ca3c2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3b9a94470abbfb8a7ab6a9c37600db9081dec8d8d02377d7843559ec86ca3c2";
    }
    const { onPageChange, totalPages, forcePage } = t0;
    let t1;
    if ($[1] !== forcePage || $[2] !== onPageChange || $[3] !== totalPages) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Pagination",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$paginate$2f$dist$2f$react$2d$paginate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                pageCount: totalPages,
                pageRangeDisplayed: 5,
                marginPagesDisplayed: 1,
                onPageChange: onPageChange,
                forcePage: forcePage,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
                activeClassName: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active,
                nextLabel: "\u2192",
                previousLabel: "\u2190"
            }, void 0, false, {
                fileName: "[project]/components/Pagination/Pagination.tsx",
                lineNumber: 26,
                columnNumber: 39
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Pagination/Pagination.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = forcePage;
        $[2] = onPageChange;
        $[3] = totalPages;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "SearchBox-module__izN5UG__input",
});
}),
"[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.module.css [app-client] (css module)");
;
;
;
const SearchBox = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3ed1947f848ffb85c53411ad86f83d42b8c95b2f236f0930b39165af2b55aaa9") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ed1947f848ffb85c53411ad86f83d42b8c95b2f236f0930b39165af2b55aaa9";
    }
    const { onChange } = t0;
    let t1;
    if ($[1] !== onChange) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "query",
            placeholder: "Search notes...",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
            onChange: onChange
        }, void 0, false, {
            fileName: "[project]/components/SearchBox/SearchBox.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = onChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = SearchBox;
const __TURBOPACK__default__export__ = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Modal/Modal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Modal-module__sR2AWG__backdrop",
  "modal": "Modal-module__sR2AWG__modal",
});
}),
"[project]/components/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Modal = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "7f625321e98f565f6bddb3e6ac52adaab551396076b08aef0ab12abe85456f6c") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f625321e98f565f6bddb3e6ac52adaab551396076b08aef0ab12abe85456f6c";
    }
    const { children, onClose } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = (e)=>{
            if (e.target === e.currentTarget) {
                onClose();
            }
        };
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleBackdropClick = t1;
    let t2;
    let t3;
    if ($[3] !== onClose) {
        t2 = ()=>{
            const handleKeyDown = (e_0)=>{
                if (e_0.key === "Escape") {
                    onClose();
                }
            };
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
            return ()=>{
                document.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "";
            };
        };
        t3 = [
            onClose
        ];
        $[3] = onClose;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = children;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== handleBackdropClick || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
            role: "dialog",
            "aria-modal": "true",
            onClick: handleBackdropClick,
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/Modal/Modal.tsx",
            lineNumber: 71,
            columnNumber: 23
        }, ("TURBOPACK compile-time value", void 0)), document.body);
        $[8] = handleBackdropClick;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
};
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteForm/FormSchema.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Schema",
    ()=>Schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const Schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(3, "Title must be at least 5 character").max(50, "Title is too long").required("Title is required"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().max(500, "Content is too long"),
    tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Tag should be selected")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "NoteForm-module__XA_SlW__actions",
  "cancelButton": "NoteForm-module__XA_SlW__cancelButton",
  "error": "NoteForm-module__XA_SlW__error",
  "form": "NoteForm-module__XA_SlW__form",
  "formGroup": "NoteForm-module__XA_SlW__formGroup",
  "input": "NoteForm-module__XA_SlW__input",
  "select": "NoteForm-module__XA_SlW__select",
  "submitButton": "NoteForm-module__XA_SlW__submitButton",
  "textarea": "NoteForm-module__XA_SlW__textarea",
});
}),
"[project]/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$FormSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteForm/FormSchema.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/NoteForm/NoteForm.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const initialValues = {
    title: "",
    content: "",
    tag: "Todo"
};
const NoteForm = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "bb8e555978c500910d189dc6d682faed5b50497b89d141176cc10783a760df31") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb8e555978c500910d189dc6d682faed5b50497b89d141176cc10783a760df31";
    }
    const fieldId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== props || $[2] !== queryClient) {
        t0 = {
            mutationFn: _temp,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "note"
                    ]
                });
                props.onClose();
            },
            onError (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.message);
            }
        };
        $[1] = props;
        $[2] = queryClient;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const addNewNoteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
    let t1;
    if ($[4] !== addNewNoteMutation) {
        t1 = (values)=>addNewNoteMutation.mutate(values);
        $[4] = addNewNoteMutation;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const t2 = `${fieldId}-title`;
    let t3;
    if ($[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t2,
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = `${fieldId}-title`;
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            id: t4,
            type: "text",
            name: "title",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            component: "span",
            name: "title",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t3 || $[12] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t3,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t3;
        $[12] = t5;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = `${fieldId}-content`;
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t8,
            children: "Content"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = `${fieldId}-content`;
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            as: "textarea",
            id: t10,
            name: "content",
            rows: 8,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            component: "span",
            name: "content",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== t11 || $[20] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t11;
        $[20] = t9;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    const t14 = `${fieldId}-tag`;
    let t15;
    if ($[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: t14,
            children: "Tag"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = `${fieldId}-tag`;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Todo",
            children: "Todo"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Work",
            children: "Work"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Personal",
            children: "Personal"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Meeting",
            children: "Meeting"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "Shopping",
            children: "Shopping"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t17;
        $[25] = t18;
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
    } else {
        t17 = $[24];
        t18 = $[25];
        t19 = $[26];
        t20 = $[27];
        t21 = $[28];
    }
    let t22;
    if ($[29] !== t16) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
            as: "select",
            id: t16,
            name: "tag",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
            children: [
                t17,
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t16;
        $[30] = t22;
    } else {
        t22 = $[30];
    }
    let t23;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorMessage"], {
            component: "span",
            name: "tag",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t15 || $[33] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
            children: [
                t15,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
        $[33] = t22;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    if ($[35] !== props.onClose) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
            onClick: props.onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = props.onClose;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
            disabled: false,
            children: "Create note"
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t25;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] !== t13 || $[41] !== t24 || $[42] !== t27 || $[43] !== t7) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
            children: [
                t7,
                t13,
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t13;
        $[41] = t24;
        $[42] = t27;
        $[43] = t7;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] !== t1 || $[46] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Formik"], {
            initialValues: initialValues,
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$FormSchema$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"],
            onSubmit: t1,
            children: t28
        }, void 0, false, {
            fileName: "[project]/components/NoteForm/NoteForm.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t1;
        $[46] = t28;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    return t29;
};
_s(NoteForm, "bE4b2F1dZj+VOOV+6mhwVJjNptI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = NoteForm;
const __TURBOPACK__default__export__ = NoteForm;
async function _temp(t0) {
    const { ...note } = t0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNote"])(note);
}
var _c;
__turbopack_context__.k.register(_c, "NoteForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/notes/filter/[...slug]/NotesPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "app": "NotesPage-module__ixuFzq__app",
  "button": "NotesPage-module__ixuFzq__button",
  "toolbar": "NotesPage-module__ixuFzq__toolbar",
});
}),
"[project]/app/notes/filter/[...slug]/Notes.client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteList/NoteList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Pagination/Pagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchBox/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NoteForm/NoteForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/notes/filter/[...slug]/NotesPage.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function NotesClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "5c05bac5932720f04f2d86ffb7657a070d5b5775b365da21c80218324e23db64") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c05bac5932720f04f2d86ffb7657a070d5b5775b365da21c80218324e23db64";
    }
    const { slug } = t0;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tag = slug[0] === "all" ? undefined : slug[0];
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "NotesClient[useDebouncedCallback()]": (e)=>{
                setSearchQuery(e.target.value);
                setCurrentPage(1);
            }
        })["NotesClient[useDebouncedCallback()]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const updateSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])(t1, 300);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "NotesClient[openModal]": ()=>setIsModalOpen(true)
        })["NotesClient[openModal]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const openModal = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "NotesClient[closeModal]": ()=>setIsModalOpen(false)
        })["NotesClient[closeModal]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const closeModal = t3;
    let t4;
    if ($[4] !== updateSearchQuery) {
        t4 = ({
            "NotesClient[handleSearchSubmit]": (e_0)=>{
                updateSearchQuery(e_0);
            }
        })["NotesClient[handleSearchSubmit]"];
        $[4] = updateSearchQuery;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleSearchSubmit = t4;
    let t5;
    if ($[6] !== currentPage || $[7] !== searchQuery || $[8] !== tag) {
        t5 = {
            queryKey: [
                "notes",
                tag,
                currentPage,
                searchQuery
            ],
            queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchNotes"])(searchQuery, currentPage, tag),
            placeholderData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keepPreviousData"]
        };
        $[6] = currentPage;
        $[7] = searchQuery;
        $[8] = tag;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
    const totalPages = data?.totalPages ?? 0;
    let t6;
    if ($[10] !== data?.notes) {
        t6 = data?.notes ?? [];
        $[10] = data?.notes;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const notes = t6;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== handleSearchSubmit) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchBox$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onChange: handleSearchSubmit
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[13] = handleSearchSubmit;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== currentPage || $[16] !== totalPages) {
        t9 = totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onPageChange: {
                "NotesClient[<Pagination>.onPageChange]": (t10)=>{
                    const { selected } = t10;
                    return setCurrentPage(selected + 1);
                }
            }["NotesClient[<Pagination>.onPageChange]"],
            totalPages: totalPages,
            forcePage: currentPage - 1
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 124,
            columnNumber: 28
        }, this);
        $[15] = currentPage;
        $[16] = totalPages;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            onClick: openModal,
            children: "Create note +"
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t8 || $[20] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[19] = t8;
        $[20] = t9;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== isModalOpen) {
        t12 = isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteForm$2f$NoteForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeModal
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
                lineNumber: 156,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 156,
            columnNumber: 26
        }, this);
        $[22] = isModalOpen;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== notes) {
        t13 = notes?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NoteList$2f$NoteList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            notes: notes
        }, void 0, false, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 164,
            columnNumber: 32
        }, this);
        $[24] = notes;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t11 || $[27] !== t12 || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$filter$2f5b2e2e2e$slug$5d2f$NotesPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].app,
            children: [
                t7,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/notes/filter/[...slug]/Notes.client.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    return t14;
}
_s(NotesClient, "nBDdjr7cd3PnHaJPNAAT0vry8LQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = NotesClient;
const __TURBOPACK__default__export__ = NotesClient;
var _c;
__turbopack_context__.k.register(_c, "NotesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e777969d._.js.map