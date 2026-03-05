(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/hype_workspace/life_comrades/frontend/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ArrayInput = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "8eb89d8b698985e5308d9f6b5e96eaa001a5a1bcc0409417c7508d1cd0864b00") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8eb89d8b698985e5308d9f6b5e96eaa001a5a1bcc0409417c7508d1cd0864b00";
    }
    const { label, items, onChange } = t0;
    const [newItem, setNewItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== items || $[2] !== newItem || $[3] !== onChange) {
        t1 = ()=>{
            if (newItem.trim()) {
                onChange([
                    ...items,
                    newItem.trim()
                ]);
                setNewItem("");
            }
        };
        $[1] = items;
        $[2] = newItem;
        $[3] = onChange;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const addItem = t1;
    let t2;
    if ($[5] !== items || $[6] !== onChange) {
        t2 = (index)=>{
            onChange(items.filter((_, i)=>i !== index));
        };
        $[5] = items;
        $[6] = onChange;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const removeItem = t2;
    let t3;
    if ($[8] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "form-label small fw-semibold text-secondary",
            children: label
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = label;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = (e)=>setNewItem(e.target.value);
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== addItem) {
        t5 = (e_0)=>e_0.key === "Enter" && (e_0.preventDefault(), addItem());
        $[11] = addItem;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== newItem || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            className: "form-control form-control-sm",
            value: newItem,
            onChange: t4,
            onKeyPress: t5
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = newItem;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== addItem) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-teal-600 btn-sm text-white",
            onClick: addItem,
            children: t7
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = addItem;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t6 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex gap-2 mb-2",
            children: [
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t6;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== items || $[23] !== removeItem) {
        let t11;
        if ($[25] !== removeItem) {
            t11 = (item, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "badge bg-light text-dark border d-flex align-items-center gap-2 py-2 px-3",
                    children: [
                        item,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            size: 12,
                            className: "text-danger cursor-pointer",
                            onClick: ()=>removeItem(index_0)
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                            lineNumber: 110,
                            columnNumber: 144
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index_0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                    lineNumber: 110,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0));
            $[25] = removeItem;
            $[26] = t11;
        } else {
            t11 = $[26];
        }
        t10 = items.map(t11);
        $[22] = items;
        $[23] = removeItem;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[27] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex flex-wrap gap-2",
            children: t10
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t10;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== t11 || $[30] !== t3 || $[31] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3",
            children: [
                t3,
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t3;
        $[31] = t9;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    return t12;
};
_s(ArrayInput, "3t9xHeF7+xx7bwzP0DPvCs1bwlI=");
_c = ArrayInput;
const SettingsPage = ()=>{
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('general');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Data states
    const [globalContent, setGlobalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metadata, setMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [services, setServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            fetchInitialData();
        }
    }["SettingsPage.useEffect"], []);
    const fetchInitialData = async ()=>{
        setLoading(true);
        try {
            const [content, meta, svcs, jbs, blgs, tests] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentApi"].getGlobal(),
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentApi"].getAllMetadata(),
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesApi"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsApi"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogsApi"].getAll('global'),
                __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsApi"].getAll()
            ]);
            setGlobalContent(content);
            setMetadata(Object.entries(meta).map(([id, data])=>({
                    id,
                    ...data
                })));
            setServices(svcs);
            setJobs(jbs);
            setBlogs(blgs.data || []);
            setTestimonials(tests || []);
        } catch (error) {
            console.error('Failed to fetch settings data:', error);
            setMessage({
                type: 'error',
                text: 'Failed to load settings data'
            });
        } finally{
            setLoading(false);
        }
    };
    const handleSaveGlobal = async (e)=>{
        e.preventDefault();
        if (!user) return;
        setSaving(true);
        try {
            const token = await user.getIdToken();
            await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentApi"].updateGlobal(token, globalContent);
            setMessage({
                type: 'success',
                text: 'Global settings updated successfully'
            });
        } catch (error_0) {
            setMessage({
                type: 'error',
                text: 'Failed to update global settings'
            });
        } finally{
            setSaving(false);
        }
    };
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editType, setEditType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleEdit = (item, type)=>{
        setEditingItem(JSON.parse(JSON.stringify(item)));
        setEditType(type);
    };
    const handleDelete = async (id_0, type_0)=>{
        if (!user || !confirm(`Are you sure you want to delete this ${type_0}?`)) return;
        setSaving(true);
        try {
            const token_0 = await user.getIdToken();
            if (type_0 === 'blog') await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogsApi"].delete(token_0, 'global', id_0);
            else if (type_0 === 'job') await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsApi"].delete(token_0, id_0);
            else if (type_0 === 'service') await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesApi"].delete(token_0, id_0);
            else if (type_0 === 'testimonial') await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsApi"].delete(token_0, id_0);
            setMessage({
                type: 'success',
                text: `${type_0} deleted successfully`
            });
            fetchInitialData();
        } catch (error_1) {
            setMessage({
                type: 'error',
                text: `Failed to delete ${type_0}`
            });
        } finally{
            setSaving(false);
        }
    };
    const handleSaveEdit = async (e_0)=>{
        e_0.preventDefault();
        if (!user || !editingItem || !editType) return;
        setSaving(true);
        try {
            const token_1 = await user.getIdToken();
            if (editType === 'seo') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contentApi"].upsertMetadata(token_1, editingItem.id, editingItem);
            } else if (editType === 'blog') {
                if (editingItem.id) await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogsApi"].update(token_1, 'global', editingItem.id, editingItem);
                else await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogsApi"].create(token_1, 'global', editingItem);
            } else if (editType === 'job') {
                if (editingItem.id) await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsApi"].update(token_1, editingItem.id, editingItem);
                else await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobsApi"].create(token_1, editingItem);
            } else if (editType === 'service') {
                if (editingItem.isNew) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesApi"].create(token_1, editingItem);
                } else {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicesApi"].update(token_1, editingItem.id, editingItem);
                }
            } else if (editType === 'testimonial') {
                if (editingItem.id) await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsApi"].update(token_1, editingItem.id, editingItem);
                else await __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonialsApi"].create(token_1, editingItem);
            }
            setMessage({
                type: 'success',
                text: `${editType} saved successfully`
            });
            setEditingItem(null);
            setEditType(null);
            fetchInitialData();
        } catch (error_2) {
            setMessage({
                type: 'error',
                text: `Failed to save ${editType}`
            });
        } finally{
            setSaving(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center align-items-center vh-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spinner-border text-teal-600",
                role: "status",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "visually-hidden",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                lineNumber: 273,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
            lineNumber: 272,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-78a62c73698567fa" + " " + "container-fluid py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-78a62c73698567fa" + " " + "d-flex justify-content-between align-items-center mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-78a62c73698567fa",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "jsx-78a62c73698567fa" + " " + "h3 mb-1 fw-bold text-dark",
                            children: "Website Settings"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                            lineNumber: 281,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-78a62c73698567fa" + " " + "text-secondary mb-0",
                            children: "Manage global content, services, jobs, and SEO"
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                            lineNumber: 282,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                    lineNumber: 280,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "jsx-78a62c73698567fa" + " " + `alert alert-${message.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-78a62c73698567fa" + " " + "d-flex align-items-center gap-2",
                        children: [
                            message.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 288,
                                columnNumber: 55
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 288,
                                columnNumber: 83
                            }, ("TURBOPACK compile-time value", void 0)),
                            message.text
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                        lineNumber: 287,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMessage(null),
                        "aria-label": "Close",
                        className: "jsx-78a62c73698567fa" + " " + "btn-close"
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                        lineNumber: 291,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                lineNumber: 286,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0)),
            editingItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1060,
                    backdropFilter: 'blur(4px)'
                },
                className: "jsx-78a62c73698567fa" + " " + "modal fade show d-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-78a62c73698567fa" + " " + `modal-dialog modal-dialog-centered modal-dialog-scrollable ${editType === 'service' || editType === 'blog' ? 'modal-xl' : 'modal-lg'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: '90vh'
                        },
                        className: "jsx-78a62c73698567fa" + " " + "modal-content border-0 shadow-lg rounded-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSaveEdit,
                            className: "jsx-78a62c73698567fa" + " " + "d-flex flex-column h-100 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-78a62c73698567fa" + " " + "modal-header border-bottom py-3 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "jsx-78a62c73698567fa" + " " + "modal-title fw-bold",
                                            children: [
                                                "Edit ",
                                                editType
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingItem(null),
                                            className: "jsx-78a62c73698567fa" + " " + "btn-close"
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        scrollbarWidth: 'thin'
                                    },
                                    className: "jsx-78a62c73698567fa" + " " + "modal-body p-4 flex-grow-1 overflow-y-auto",
                                    children: [
                                        editType === 'seo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Page ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.id,
                                                            disabled: true,
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control bg-light"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Page Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.title,
                                                            onChange: (e_1)=>setEditingItem({
                                                                    ...editingItem,
                                                                    title: e_1.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 3,
                                                            value: editingItem.description,
                                                            onChange: (e_2)=>setEditingItem({
                                                                    ...editingItem,
                                                                    description: e_2.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-teal-600",
                                                            children: "Keywords List"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                            label: "",
                                                            items: editingItem.keywords || [],
                                                            onChange: (items)=>setEditingItem({
                                                                    ...editingItem,
                                                                    keywords: items
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 60
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        editType === 'service' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Service ID (Slug)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.id || '',
                                                            onChange: (e_3)=>setEditingItem({
                                                                    ...editingItem,
                                                                    id: e_3.target.value
                                                                }),
                                                            disabled: !editingItem.isNew,
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control bg-light"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.title || '',
                                                            onChange: (e_4)=>setEditingItem({
                                                                    ...editingItem,
                                                                    title: e_4.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Short Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 2,
                                                            value: editingItem.description || '',
                                                            onChange: (e_5)=>setEditingItem({
                                                                    ...editingItem,
                                                                    description: e_5.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "About Text (Long)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 4,
                                                            value: editingItem.about || '',
                                                            onChange: (e_6)=>setEditingItem({
                                                                    ...editingItem,
                                                                    about: e_6.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Detailed About Section (Full length)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 6,
                                                            value: editingItem.aboutDetails || '',
                                                            onChange: (e_7)=>setEditingItem({
                                                                    ...editingItem,
                                                                    aboutDetails: e_7.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Image URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.image || '',
                                                            onChange: (e_8)=>setEditingItem({
                                                                    ...editingItem,
                                                                    image: e_8.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                        label: "Who It Is For",
                                                        items: editingItem.whoItIsFor || [],
                                                        onChange: (items_0)=>setEditingItem({
                                                                ...editingItem,
                                                                whoItIsFor: items_0
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "Service FAQ (Single)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Question"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editingItem.faq?.question || '',
                                                                            onChange: (e_9)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    faq: {
                                                                                        ...editingItem.faq,
                                                                                        question: e_9.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 393,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 391,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Answer"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 402,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 2,
                                                                            value: editingItem.faq?.answer || '',
                                                                            onChange: (e_10)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    faq: {
                                                                                        ...editingItem.faq,
                                                                                        answer: e_10.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 403,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "Service Top Testimonial"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Author"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editingItem.testimonial?.author || '',
                                                                            onChange: (e_11)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    testimonial: {
                                                                                        ...editingItem.testimonial,
                                                                                        author: e_11.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Quote"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 428,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 2,
                                                                            value: editingItem.testimonial?.quote || '',
                                                                            onChange: (e_12)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    testimonial: {
                                                                                        ...editingItem.testimonial,
                                                                                        quote: e_12.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 429,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "SEO Metadata"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Meta Title"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editingItem.metadata?.title || '',
                                                                            onChange: (e_13)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    metadata: {
                                                                                        ...editingItem.metadata,
                                                                                        title: e_13.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 445,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Meta Description"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 2,
                                                                            value: editingItem.metadata?.description || '',
                                                                            onChange: (e_14)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    metadata: {
                                                                                        ...editingItem.metadata,
                                                                                        description: e_14.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 64
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        editType === 'job' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Job Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.title,
                                                            onChange: (e_15)=>setEditingItem({
                                                                    ...editingItem,
                                                                    title: e_15.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.category,
                                                            onChange: (e_16)=>setEditingItem({
                                                                    ...editingItem,
                                                                    category: e_16.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: editingItem.type,
                                                            onChange: (e_17)=>setEditingItem({
                                                                    ...editingItem,
                                                                    type: e_17.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-select",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Full-time",
                                                                    className: "jsx-78a62c73698567fa",
                                                                    children: "Full-time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Part-time",
                                                                    className: "jsx-78a62c73698567fa",
                                                                    children: "Part-time"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Contract",
                                                                    className: "jsx-78a62c73698567fa",
                                                                    children: "Contract"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 481,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.location || '',
                                                            onChange: (e_18)=>setEditingItem({
                                                                    ...editingItem,
                                                                    location: e_18.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Salary Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.salary || '',
                                                            onChange: (e_19)=>setEditingItem({
                                                                    ...editingItem,
                                                                    salary: e_19.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Short Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 2,
                                                            value: editingItem.description || '',
                                                            onChange: (e_20)=>setEditingItem({
                                                                    ...editingItem,
                                                                    description: e_20.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                        label: "Requirements",
                                                        items: editingItem.requirements || [],
                                                        onChange: (items_1)=>setEditingItem({
                                                                ...editingItem,
                                                                requirements: items_1
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                        label: "Responsibilities",
                                                        items: editingItem.responsibilities || [],
                                                        onChange: (items_2)=>setEditingItem({
                                                                ...editingItem,
                                                                responsibilities: items_2
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 60
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        editType === 'blog' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Blog Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.title,
                                                            onChange: (e_21)=>setEditingItem({
                                                                    ...editingItem,
                                                                    title: e_21.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.category || '',
                                                            onChange: (e_22)=>setEditingItem({
                                                                    ...editingItem,
                                                                    category: e_22.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Read Time (minutes)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: editingItem.readTime || 0,
                                                            onChange: (e_23)=>setEditingItem({
                                                                    ...editingItem,
                                                                    readTime: parseInt(e_23.target.value)
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Author"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.author,
                                                            onChange: (e_24)=>setEditingItem({
                                                                    ...editingItem,
                                                                    author: e_24.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 556,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: editingItem.date ? editingItem.date.split('T')[0] : '',
                                                            onChange: (e_25)=>setEditingItem({
                                                                    ...editingItem,
                                                                    date: e_25.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Short Excerpt (Description)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 2,
                                                            value: editingItem.description || '',
                                                            onChange: (e_26)=>setEditingItem({
                                                                    ...editingItem,
                                                                    description: e_26.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-3 d-flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-check form-switch",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: editingItem.published || false,
                                                                    onChange: (e_27)=>setEditingItem({
                                                                            ...editingItem,
                                                                            published: e_27.target.checked
                                                                        }),
                                                                    className: "jsx-78a62c73698567fa" + " " + "form-check-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 572,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "form-check-label fw-semibold",
                                                                    children: "Published"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 576,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-check form-switch",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: editingItem.isFeatured || false,
                                                                    onChange: (e_28)=>setEditingItem({
                                                                            ...editingItem,
                                                                            isFeatured: e_28.target.checked
                                                                        }),
                                                                    className: "jsx-78a62c73698567fa" + " " + "form-check-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "form-check-label fw-semibold",
                                                                    children: "Featured"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "Primary Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Image URL (src)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            placeholder: "https://...",
                                                                            value: editingItem.image?.src || editingItem.image || '',
                                                                            onChange: (e_29)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    image: typeof editingItem.image === 'object' ? {
                                                                                        ...editingItem.image,
                                                                                        src: e_29.target.value
                                                                                    } : e_29.target.value
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 592,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 590,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Alt Text"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 601,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            placeholder: "Description for SEO",
                                                                            value: editingItem.image?.alt || '',
                                                                            onChange: (e_30)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    image: {
                                                                                        ...editingItem.image,
                                                                                        alt: e_30.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 602,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Caption"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            placeholder: "Visible image caption",
                                                                            value: editingItem.image?.description || '',
                                                                            onChange: (e_31)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    image: {
                                                                                        ...editingItem.image,
                                                                                        description: e_31.target.value
                                                                                    }
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 610,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "Blog Content Sections"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (editingItem.content || []).map((section, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-78a62c73698567fa" + " " + "card bg-light border-0 mb-3 p-3 position-relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        style: {
                                                                            scale: '0.7'
                                                                        },
                                                                        onClick: ()=>setEditingItem({
                                                                                ...editingItem,
                                                                                content: editingItem.content.filter((_, i)=>i !== sIdx)
                                                                            }),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn-close position-absolute top-0 end-0 m-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 626,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-78a62c73698567fa" + " " + "mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                                children: "Heading"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                lineNumber: 633,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: section.heading || '',
                                                                                onChange: (e_32)=>{
                                                                                    const newContent = [
                                                                                        ...editingItem.content
                                                                                    ];
                                                                                    newContent[sIdx].heading = e_32.target.value;
                                                                                    setEditingItem({
                                                                                        ...editingItem,
                                                                                        content: newContent
                                                                                    });
                                                                                },
                                                                                className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                lineNumber: 634,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-78a62c73698567fa" + " " + "mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                                children: "Section Content"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                rows: 3,
                                                                                value: section.content || '',
                                                                                onChange: (e_33)=>{
                                                                                    const newContent_0 = [
                                                                                        ...editingItem.content
                                                                                    ];
                                                                                    newContent_0[sIdx].content = e_33.target.value;
                                                                                    setEditingItem({
                                                                                        ...editingItem,
                                                                                        content: newContent_0
                                                                                    });
                                                                                },
                                                                                className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                lineNumber: 645,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 643,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                                        label: "Section List Items (Optional)",
                                                                        items: section.list || [],
                                                                        onChange: (items_3)=>{
                                                                            const newContent_1 = [
                                                                                ...editingItem.content
                                                                            ];
                                                                            newContent_1[sIdx].list = items_3;
                                                                            setEditingItem({
                                                                                ...editingItem,
                                                                                content: newContent_1
                                                                            });
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 654,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, sIdx, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 114
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setEditingItem({
                                                                    ...editingItem,
                                                                    content: [
                                                                        ...editingItem.content || [],
                                                                        {
                                                                            heading: '',
                                                                            content: '',
                                                                            list: []
                                                                        }
                                                                    ]
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 16,
                                                                    className: "me-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Add Section"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                            children: "SEO & Metadata"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Meta Title"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 679,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editingItem.metaTitle || '',
                                                                            onChange: (e_34)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    metaTitle: e_34.target.value
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 680,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                                            children: "Meta Description"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 686,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: editingItem.metaDescription || '',
                                                                            onChange: (e_35)=>setEditingItem({
                                                                                    ...editingItem,
                                                                                    metaDescription: e_35.target.value
                                                                                }),
                                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 687,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                                        label: "Meta Keywords",
                                                                        items: editingItem.metaKeywords || [],
                                                                        onChange: (items_4)=>setEditingItem({
                                                                                ...editingItem,
                                                                                metaKeywords: items_4
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 692,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 61
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        editType === 'testimonial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Author Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 703,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.author || '',
                                                            onChange: (e_36)=>setEditingItem({
                                                                    ...editingItem,
                                                                    author: e_36.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Location / Designation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingItem.location || '',
                                                            onChange: (e_37)=>setEditingItem({
                                                                    ...editingItem,
                                                                    location: e_37.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-md-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Associated Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: editingItem.serviceId || '',
                                                            onChange: (e_38)=>setEditingItem({
                                                                    ...editingItem,
                                                                    serviceId: e_38.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-select",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    className: "jsx-78a62c73698567fa",
                                                                    children: "General / Home Page"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: s.id,
                                                                        className: "jsx-78a62c73698567fa",
                                                                        children: s.title
                                                                    }, s.id, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 723,
                                                                        columnNumber: 72
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold",
                                                            children: "Testimonial Quote"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 4,
                                                            value: editingItem.quote || '',
                                                            onChange: (e_39)=>setEditingItem({
                                                                    ...editingItem,
                                                                    quote: e_39.target.value
                                                                }),
                                                            className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 728,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-78a62c73698567fa" + " " + "col-12 mt-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "form-check form-switch",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: editingItem.featured || false,
                                                                onChange: (e_40)=>setEditingItem({
                                                                        ...editingItem,
                                                                        featured: e_40.target.checked
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-check-input"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-check-label fw-semibold",
                                                                children: "Featured on Home Page"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 701,
                                            columnNumber: 68
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-78a62c73698567fa" + " " + "modal-footer border-top px-4 py-3 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setEditingItem(null),
                                            className: "jsx-78a62c73698567fa" + " " + "btn btn-light",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 745,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: saving,
                                            className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 text-white px-4",
                                            children: saving ? 'Saving...' : 'Save Changes'
                                        }, void 0, false, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                    lineNumber: 744,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                            lineNumber: 303,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                        lineNumber: 300,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                    lineNumber: 299,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                lineNumber: 294,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-78a62c73698567fa" + " " + "card border-0 shadow-sm overflow-hidden rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-78a62c73698567fa" + " " + "card-header bg-white border-bottom p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "jsx-78a62c73698567fa" + " " + "nav nav-tabs border-0 px-3",
                            children: [
                                {
                                    id: 'general',
                                    label: 'General',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
                                },
                                {
                                    id: 'services',
                                    label: 'Services',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"]
                                },
                                {
                                    id: 'jobs',
                                    label: 'Jobs',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
                                },
                                {
                                    id: 'blog',
                                    label: 'Blog',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
                                },
                                {
                                    id: 'testimonials',
                                    label: 'Testimonials',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
                                },
                                {
                                    id: 'seo',
                                    label: 'SEO/Metadata',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                                }
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "jsx-78a62c73698567fa" + " " + "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: "jsx-78a62c73698567fa" + " " + `nav-link border-0 py-3 px-4 fw-medium transition-300 ${activeTab === tab.id ? 'text-teal-600 border-bottom border-2 border-teal-600' : 'text-secondary'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-78a62c73698567fa" + " " + "d-flex align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                tab.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                            lineNumber: 784,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, tab.id, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                            lineNumber: 757,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                        lineNumber: 756,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-78a62c73698567fa" + " " + "card-body p-4 bg-light bg-opacity-10",
                        children: [
                            activeTab === 'general' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "row justify-content-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-78a62c73698567fa" + " " + "col-lg-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSaveGlobal,
                                        className: "jsx-78a62c73698567fa",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-4 text-dark border-bottom pb-2",
                                                children: "Company Information"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 797,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "row g-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Company Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.companyName || '',
                                                                onChange: (e_41)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        companyName: e_41.target.value
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Tagline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.tagline || '',
                                                                onChange: (e_42)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        tagline: e_42.target.value
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Email Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 814,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: globalContent?.contact?.email || '',
                                                                onChange: (e_43)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            email: e_43.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Phone Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 824,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.contact?.phone || '',
                                                                onChange: (e_44)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            phone: e_44.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 825,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Office Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 3,
                                                                value: globalContent?.contact?.address || '',
                                                                onChange: (e_45)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            address: e_45.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                            label: "Branch Cities",
                                                            items: globalContent?.contact?.cities || [],
                                                            onChange: (items_5)=>setGlobalContent({
                                                                    ...globalContent,
                                                                    contact: {
                                                                        ...globalContent.contact,
                                                                        cities: items_5
                                                                    }
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 844,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 798,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-4 text-dark border-bottom pb-2 mt-5",
                                                children: "Global SEO"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 854,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Site Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Life Comrades | Nursing Care",
                                                                value: globalContent?.globalMetadata?.title || '',
                                                                onChange: (e_46)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        globalMetadata: {
                                                                            ...globalContent.globalMetadata,
                                                                            title: e_46.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Global Keywords"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 867,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayInput, {
                                                                label: "",
                                                                items: globalContent?.globalMetadata?.keywords || [],
                                                                onChange: (items_6)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        globalMetadata: {
                                                                            ...globalContent.globalMetadata,
                                                                            keywords: items_6
                                                                        }
                                                                    })
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 868,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Site Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 877,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 2,
                                                                placeholder: "Explain what the site is about...",
                                                                value: globalContent?.globalMetadata?.description || '',
                                                                onChange: (e_47)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        globalMetadata: {
                                                                            ...globalContent.globalMetadata,
                                                                            description: e_47.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 855,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-4 text-dark border-bottom pb-2 mt-5",
                                                children: "Homepage Hero"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 888,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "row g-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Hero Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 891,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.homeHero?.title || '',
                                                                onChange: (e_48)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        homeHero: {
                                                                            ...globalContent.homeHero,
                                                                            title: e_48.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 890,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Hero Subtitle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 2,
                                                                value: globalContent?.homeHero?.subtitle || '',
                                                                onChange: (e_49)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        homeHero: {
                                                                            ...globalContent.homeHero,
                                                                            subtitle: e_49.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 902,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 900,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 889,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-4 text-dark border-bottom pb-2 mt-5",
                                                children: "About Page"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 912,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Mission Statement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 915,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 3,
                                                                value: globalContent?.aboutPage?.mission || '',
                                                                onChange: (e_50)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        aboutPage: {
                                                                            ...globalContent.aboutPage,
                                                                            mission: e_50.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 916,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Vision Statement"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                rows: 3,
                                                                value: globalContent?.aboutPage?.vision || '',
                                                                onChange: (e_51)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        aboutPage: {
                                                                            ...globalContent.aboutPage,
                                                                            vision: e_51.target.value
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 926,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                                children: "Founders"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                                children: (globalContent?.aboutPage?.founders || []).map((f, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-78a62c73698567fa" + " " + "col-xl-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "card bg-light border-0 mb-3 p-3 position-relative h-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    style: {
                                                                                        scale: '0.7',
                                                                                        zIndex: 1
                                                                                    },
                                                                                    onClick: ()=>setGlobalContent({
                                                                                            ...globalContent,
                                                                                            aboutPage: {
                                                                                                ...globalContent.aboutPage,
                                                                                                founders: globalContent.aboutPage.founders.filter((__0, idx)=>idx !== i_0)
                                                                                            }
                                                                                        }),
                                                                                    className: "jsx-78a62c73698567fa" + " " + "btn-close position-absolute top-0 end-0 m-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 940,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-78a62c73698567fa" + " " + "row g-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Name"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 952,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "text",
                                                                                                    value: f.name,
                                                                                                    onChange: (val)=>{
                                                                                                        const newF = [
                                                                                                            ...globalContent.aboutPage.founders
                                                                                                        ];
                                                                                                        newF[i_0].name = val.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                founders: newF
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 953,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 951,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Role"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 966,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "text",
                                                                                                    value: f.role,
                                                                                                    onChange: (val_0)=>{
                                                                                                        const newF_0 = [
                                                                                                            ...globalContent.aboutPage.founders
                                                                                                        ];
                                                                                                        newF_0[i_0].role = val_0.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                founders: newF_0
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 967,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 965,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Bio / Description"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 980,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                    rows: 2,
                                                                                                    value: f.bio,
                                                                                                    onChange: (val_1)=>{
                                                                                                        const newF_1 = [
                                                                                                            ...globalContent.aboutPage.founders
                                                                                                        ];
                                                                                                        newF_1[i_0].bio = val_1.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                founders: newF_1
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 981,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 979,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 950,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 939,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, i_0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 938,
                                                                        columnNumber: 122
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 937,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGlobalContent({
                                                                        ...globalContent,
                                                                        aboutPage: {
                                                                            ...globalContent.aboutPage,
                                                                            founders: [
                                                                                ...globalContent?.aboutPage?.founders || [],
                                                                                {
                                                                                    name: '',
                                                                                    role: '',
                                                                                    bio: '',
                                                                                    image: ''
                                                                                }
                                                                            ]
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 14,
                                                                        className: "me-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1008,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Add Founder"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 997,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 935,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                                children: "Partners"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                                children: (globalContent?.aboutPage?.partners || []).map((p, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-78a62c73698567fa" + " " + "col-xl-4 col-md-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "card bg-light border-0 mb-3 p-3 position-relative h-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    style: {
                                                                                        scale: '0.7',
                                                                                        zIndex: 1
                                                                                    },
                                                                                    onClick: ()=>setGlobalContent({
                                                                                            ...globalContent,
                                                                                            aboutPage: {
                                                                                                ...globalContent.aboutPage,
                                                                                                partners: globalContent.aboutPage.partners.filter((__1, idx_0)=>idx_0 !== i_1)
                                                                                            }
                                                                                        }),
                                                                                    className: "jsx-78a62c73698567fa" + " " + "btn-close position-absolute top-0 end-0 m-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 1016,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-78a62c73698567fa" + " " + "row g-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Partner Name"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1028,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "text",
                                                                                                    value: p.name,
                                                                                                    onChange: (val_2)=>{
                                                                                                        const newP = [
                                                                                                            ...globalContent.aboutPage.partners
                                                                                                        ];
                                                                                                        newP[i_1].name = val_2.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                partners: newP
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1029,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 1027,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Website / Logo URL"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1042,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "text",
                                                                                                    value: p.logo,
                                                                                                    onChange: (val_3)=>{
                                                                                                        const newP_0 = [
                                                                                                            ...globalContent.aboutPage.partners
                                                                                                        ];
                                                                                                        newP_0[i_1].logo = val_3.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                partners: newP_0
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1043,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 1041,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 1026,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, i_1, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1014,
                                                                        columnNumber: 122
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1013,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGlobalContent({
                                                                        ...globalContent,
                                                                        aboutPage: {
                                                                            ...globalContent.aboutPage,
                                                                            partners: [
                                                                                ...globalContent?.aboutPage?.partners || [],
                                                                                {
                                                                                    name: '',
                                                                                    logo: '',
                                                                                    website: ''
                                                                                }
                                                                            ]
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 14,
                                                                        className: "me-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1069,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Add Partner"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1059,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-12 mt-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold text-dark border-bottom pb-2",
                                                                children: "Recent Events"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1073,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                                children: (globalContent?.aboutPage?.events || []).map((e_52, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-78a62c73698567fa" + " " + "col-xl-6",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-78a62c73698567fa" + " " + "card bg-light border-0 mb-3 p-3 position-relative h-100",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    style: {
                                                                                        scale: '0.7',
                                                                                        zIndex: 1
                                                                                    },
                                                                                    onClick: ()=>setGlobalContent({
                                                                                            ...globalContent,
                                                                                            aboutPage: {
                                                                                                ...globalContent.aboutPage,
                                                                                                events: globalContent.aboutPage.events.filter((__2, idx_1)=>idx_1 !== i_2)
                                                                                            }
                                                                                        }),
                                                                                    className: "jsx-78a62c73698567fa" + " " + "btn-close position-absolute top-0 end-0 m-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 1077,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-78a62c73698567fa" + " " + "row g-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-md-8",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Event Title"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1089,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "text",
                                                                                                    value: e_52.title,
                                                                                                    onChange: (val_4)=>{
                                                                                                        const newE = [
                                                                                                            ...globalContent.aboutPage.events
                                                                                                        ];
                                                                                                        newE[i_2].title = val_4.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                events: newE
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1090,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 1088,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-md-4",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Date"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1103,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                    type: "date",
                                                                                                    value: e_52.date || '',
                                                                                                    onChange: (val_5)=>{
                                                                                                        const newE_0 = [
                                                                                                            ...globalContent.aboutPage.events
                                                                                                        ];
                                                                                                        newE_0[i_2].date = val_5.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                events: newE_0
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1104,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 1102,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "jsx-78a62c73698567fa" + " " + "col-12",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "tiny text-muted fw-bold text-uppercase",
                                                                                                    children: "Brief Description"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1117,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                                    rows: 2,
                                                                                                    value: e_52.description,
                                                                                                    onChange: (val_6)=>{
                                                                                                        const newE_1 = [
                                                                                                            ...globalContent.aboutPage.events
                                                                                                        ];
                                                                                                        newE_1[i_2].description = val_6.target.value;
                                                                                                        setGlobalContent({
                                                                                                            ...globalContent,
                                                                                                            aboutPage: {
                                                                                                                ...globalContent.aboutPage,
                                                                                                                events: newE_1
                                                                                                            }
                                                                                                        });
                                                                                                    },
                                                                                                    className: "jsx-78a62c73698567fa" + " " + "form-control form-control-sm"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                                    lineNumber: 1118,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                            lineNumber: 1116,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                                    lineNumber: 1087,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1076,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, i_2, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1075,
                                                                        columnNumber: 123
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1074,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setGlobalContent({
                                                                        ...globalContent,
                                                                        aboutPage: {
                                                                            ...globalContent.aboutPage,
                                                                            events: [
                                                                                ...globalContent?.aboutPage?.events || [],
                                                                                {
                                                                                    title: '',
                                                                                    date: '',
                                                                                    description: '',
                                                                                    image: ''
                                                                                }
                                                                            ]
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 14,
                                                                        className: "me-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1145,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Add Event"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 913,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-4 text-dark border-bottom pb-2 mt-5",
                                                children: "Social Links"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1149,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "row g-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "WhatsApp Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1152,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.contact?.social?.whatsapp || '',
                                                                onChange: (e_53)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            social: {
                                                                                ...globalContent.contact.social,
                                                                                whatsapp: e_53.target.value
                                                                            }
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1153,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1151,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Facebook URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1165,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.contact?.social?.facebook || '',
                                                                onChange: (e_54)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            social: {
                                                                                ...globalContent.contact.social,
                                                                                facebook: e_54.target.value
                                                                            }
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1166,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "Instagram URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1178,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.contact?.social?.instagram || '',
                                                                onChange: (e_55)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            social: {
                                                                                ...globalContent.contact.social,
                                                                                instagram: e_55.target.value
                                                                            }
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1179,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1177,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-78a62c73698567fa" + " " + "col-md-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-78a62c73698567fa" + " " + "form-label small fw-semibold text-secondary",
                                                                children: "LinkedIn URL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: globalContent?.contact?.social?.linkedin || '',
                                                                onChange: (e_56)=>setGlobalContent({
                                                                        ...globalContent,
                                                                        contact: {
                                                                            ...globalContent.contact,
                                                                            social: {
                                                                                ...globalContent.contact.social,
                                                                                linkedin: e_56.target.value
                                                                            }
                                                                        }
                                                                    }),
                                                                className: "jsx-78a62c73698567fa" + " " + "form-control rounded-lg shadow-xs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1192,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-78a62c73698567fa" + " " + "mt-5 pt-3 border-top d-flex justify-content-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: saving,
                                                    className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 px-5 py-2 fw-bold text-white shadow-sm transition-300",
                                                    children: [
                                                        saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            role: "status",
                                                            className: "jsx-78a62c73698567fa" + " " + "spinner-border spinner-border-sm me-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1207,
                                                            columnNumber: 55
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            size: 18,
                                                            className: "me-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1207,
                                                            columnNumber: 133
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Save Changes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1205,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 796,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                    lineNumber: 795,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 794,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "table-responsive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-78a62c73698567fa" + " " + "d-flex justify-content-between align-items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-0",
                                                children: "Healthcare Services"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1217,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit({
                                                        id: '',
                                                        name: '',
                                                        tagline: '',
                                                        description: '',
                                                        isNew: true
                                                    }, 'service'),
                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Add Service"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1218,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1216,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-78a62c73698567fa" + " " + "table table-hover align-middle border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-78a62c73698567fa" + " " + "table-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-78a62c73698567fa",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                width: '80px'
                                                            },
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1231,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Service Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Tagline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1236,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1229,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-78a62c73698567fa",
                                                children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-78a62c73698567fa",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold text-teal-600",
                                                                children: service.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-semibold",
                                                                children: service.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1242,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    maxWidth: '200px'
                                                                },
                                                                className: "jsx-78a62c73698567fa" + " " + "text-muted small text-truncate",
                                                                children: service.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1243,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(service, 'service'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-light btn-sm me-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1247,
                                                                            columnNumber: 142
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1247,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(service.id, 'service'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-danger btn-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1248,
                                                                            columnNumber: 151
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1248,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1246,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, service.id, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 62
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1228,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 1215,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'jobs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "table-responsive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-78a62c73698567fa" + " " + "d-flex justify-content-between align-items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-0",
                                                children: "Job Openings"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1257,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit({
                                                        title: '',
                                                        category: '',
                                                        type: 'Full-time',
                                                        active: true
                                                    }, 'job'),
                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Post Job"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1258,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1256,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-78a62c73698567fa" + " " + "table table-hover align-middle border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-78a62c73698567fa" + " " + "table-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-78a62c73698567fa",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1271,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1272,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1273,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1274,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1268,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-78a62c73698567fa",
                                                children: jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-78a62c73698567fa",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-semibold",
                                                                children: job.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: job.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1280,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "badge bg-light text-dark border",
                                                                    children: job.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1281,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1281,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-78a62c73698567fa" + " " + `badge ${job.active !== false ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`,
                                                                    children: job.active !== false ? 'Active' : 'Closed'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1283,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1282,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(job, 'job'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-light btn-sm me-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1288,
                                                                            columnNumber: 134
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1288,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(job.id, 'job'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-danger btn-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1289,
                                                                            columnNumber: 143
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1289,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, job.id, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 54
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1277,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1267,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 1255,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'blog' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "table-responsive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-78a62c73698567fa" + " " + "d-flex justify-content-between align-items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-0",
                                                children: "Blog Posts"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1298,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit({
                                                        title: '',
                                                        author: '',
                                                        date: new Date().toISOString().split('T')[0],
                                                        excerpt: '',
                                                        tags: []
                                                    }, 'blog'),
                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1306,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " New Post"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1299,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1297,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-78a62c73698567fa" + " " + "table table-hover align-middle border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-78a62c73698567fa" + " " + "table-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-78a62c73698567fa",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1312,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Author"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1313,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1314,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1315,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1316,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1310,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-78a62c73698567fa",
                                                children: blogs.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-78a62c73698567fa",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-semibold",
                                                                children: post.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: post.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1322,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "badge bg-light text-dark border",
                                                                    children: post.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1324,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-muted small",
                                                                children: post.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1326,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(post, 'blog'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-light btn-sm me-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1328,
                                                                            columnNumber: 136
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1328,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(post.id, 'blog'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-danger btn-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1329,
                                                                            columnNumber: 145
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1329,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1327,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, post.id, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1320,
                                                        columnNumber: 56
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1319,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1309,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 1296,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'testimonials' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "table-responsive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-78a62c73698567fa" + " " + "d-flex justify-content-between align-items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-0",
                                                children: "Client Testimonials"
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit({
                                                        author: '',
                                                        quote: '',
                                                        serviceId: '',
                                                        featured: false
                                                    }, 'testimonial'),
                                                className: "jsx-78a62c73698567fa" + " " + "btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1345,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Add Testimonial"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1337,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-78a62c73698567fa" + " " + "table table-hover align-middle border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-78a62c73698567fa" + " " + "table-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-78a62c73698567fa",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Author"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1351,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Quote"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1353,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Featured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1354,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1355,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1349,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-78a62c73698567fa",
                                                children: testimonials.map((test)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-78a62c73698567fa",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-semibold",
                                                                children: test.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-78a62c73698567fa" + " " + "badge bg-light text-dark border",
                                                                    children: test.serviceId || 'General'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1362,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1361,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    maxWidth: '300px'
                                                                },
                                                                className: "jsx-78a62c73698567fa" + " " + "text-muted small text-truncate",
                                                                children: test.quote
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1364,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa",
                                                                children: test.featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    size: 16,
                                                                    className: "text-success"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1368,
                                                                    columnNumber: 66
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                    size: 16,
                                                                    className: "text-secondary opacity-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1368,
                                                                    columnNumber: 119
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1367,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(test, 'testimonial'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-light btn-sm me-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1371,
                                                                            columnNumber: 143
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1371,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(test.id, 'testimonial'),
                                                                        className: "jsx-78a62c73698567fa" + " " + "btn btn-outline-danger btn-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                            lineNumber: 1372,
                                                                            columnNumber: 152
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1372,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1370,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, test.id, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1359,
                                                        columnNumber: 63
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 1336,
                                columnNumber: 54
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'seo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-78a62c73698567fa" + " " + "table-responsive",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "jsx-78a62c73698567fa" + " " + "fw-bold mb-3",
                                        children: "Page Metadata (SEO)"
                                    }, void 0, false, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1380,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-78a62c73698567fa" + " " + "table table-hover align-middle border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-78a62c73698567fa" + " " + "table-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "jsx-78a62c73698567fa",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                width: '150px'
                                                            },
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Page ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1384,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Title"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1387,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1388,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                            lineNumber: 1389,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1382,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-78a62c73698567fa",
                                                children: metadata.map((meta_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "jsx-78a62c73698567fa",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-uppercase small fw-bold text-secondary tracking-wider",
                                                                children: meta_0.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "fw-semibold",
                                                                children: meta_0.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1395,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    maxWidth: '300px'
                                                                },
                                                                className: "jsx-78a62c73698567fa" + " " + "text-muted small text-truncate",
                                                                children: meta_0.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1396,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-78a62c73698567fa" + " " + "text-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleEdit(meta_0, 'seo'),
                                                                    className: "jsx-78a62c73698567fa" + " " + "btn btn-light btn-sm me-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                        lineNumber: 1400,
                                                                        columnNumber: 137
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                    lineNumber: 1400,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                                lineNumber: 1399,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, meta_0.id, true, {
                                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                        lineNumber: 1393,
                                                        columnNumber: 68
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                                lineNumber: 1392,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                        lineNumber: 1381,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                                lineNumber: 1379,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                        lineNumber: 793,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
                lineNumber: 755,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "78a62c73698567fa",
                children: ".rounded-xl.jsx-78a62c73698567fa{border-radius:1rem!important}.rounded-lg.jsx-78a62c73698567fa{border-radius:.5rem!important}.shadow-xs.jsx-78a62c73698567fa{box-shadow:0 1px 2px #0000000d!important}.transition-300.jsx-78a62c73698567fa{transition:all .3s}.bg-teal-600.jsx-78a62c73698567fa{background-color:#0d9488!important}.text-teal-600.jsx-78a62c73698567fa{color:#0d9488!important}.btn-teal-600.jsx-78a62c73698567fa{background-color:#0d9488!important;border-color:#0d9488!important}.btn-teal-600.jsx-78a62c73698567fa:hover{box-shadow:0 4px 12px #0d948833;background-color:#0f766e!important}.bg-success-subtle.jsx-78a62c73698567fa{background-color:#d1fae5!important}.bg-danger-subtle.jsx-78a62c73698567fa{background-color:#fee2e2!important}.nav-tabs.jsx-78a62c73698567fa .nav-link.jsx-78a62c73698567fa:hover{color:#0d9488;background-color:#f8fafc}.tracking-wider.jsx-78a62c73698567fa{letter-spacing:.05em}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/hype_workspace/life_comrades/frontend/src/app/admin/settings/page.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(SettingsPage, "bI6tpdrHsbW1cOBBPl1TC2aHCwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hype_workspace$2f$life_comrades$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c1 = SettingsPage;
const __TURBOPACK__default__export__ = SettingsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrayInput");
__turbopack_context__.k.register(_c1, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hype_workspace_life_comrades_frontend_src_f2963e89._.js.map