import { WebsiteContent, ServicesData, BlogPost, Job, Testimonial, BookingResponse } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

export type { BookingResponse };

export interface ISRData {
    content: WebsiteContent;
    metadata: Record<string, any>;
    services: any[];
    jobs: Job[];
    testimonials: Testimonial[];
    blogPosts: BlogPost[];
}

/**
 * Fetches all necessary data for Next.js ISR (Incremental Static Regeneration)
 */
export async function getISRData(): Promise<ISRData> {
    const fallback: ISRData = {
        content: {
            companyName: 'Life Comrades',
            tagline: 'Trusted Home Nursing & Healthcare Services',
            contact: { phone: '', email: '', address: '', cities: [], social: {} as any },
            homeHero: { title: '', subtitle: '' },
            testimonials: [],
            globalMetadata: { title: 'Life Comrades', description: '', keywords: [] },
            pagesMetadata: {},
        } as any,
        metadata: {},
        services: [],
        jobs: [],
        testimonials: [],
        blogPosts: [],
    };

    try {
        const response = await fetch(`${API_BASE_URL}/content/isr`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
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

/**
 * Helper to transform aggregated services array into Record<string, Service>
 */
export function getServicesMap(services: any[]): ServicesData {
    return services.reduce((acc, service) => {
        acc[service.id] = service;
        return acc;
    }, {} as ServicesData);
}
export const bookingsApi = {
    create: async (data: any) => {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create booking');
        }
        return response.json();
    },
    getAll: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/bookings`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch bookings');
        return response.json();
    },
    getNewRequests: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/bookings/new-requests`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch new requests');
        return response.json();
    },
    promote: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/bookings/promote`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to promote booking');
        return response.json();
    },
    updateStatus: async (token: string, id: string, status: string) => {
        const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) throw new Error('Failed to update status');
        return response.json();
    },
    assignNurse: async (token: string, id: string, nurseId: string) => {
        const response = await fetch(`${API_BASE_URL}/bookings/${id}/assign`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nurseId }),
        });
        if (!response.ok) throw new Error('Failed to assign nurse');
        return response.json();
    }
};

export const applicationsApi = {
    getNew: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/applications/new`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch applications');
        return response.json();
    },
    promote: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/admin/applications/promote`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to promote application');
        return response.json();
    }
};

export const nursesApi = {
    getAll: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/nurses`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch nurses');
        return response.json();
    },
    updateStatus: async (token: string, id: string, isActive: boolean) => {
        const response = await fetch(`${API_BASE_URL}/admin/nurses/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isActive }),
        });
        if (!response.ok) throw new Error('Failed to update nurse status');
        return response.json();
    }
};

export const patientsApi = {
    getAll: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/patients`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch patients');
        return response.json();
    }
};

export const usersApi = {
    forgotPassword: async (email: string) => {
        const response = await fetch(`${API_BASE_URL}/users/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate reset link');
        }
        return response.json();
    },
    getProfile: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }
        return response.json();
    }
};

export const dashboardApi = {
    getStats: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/stats`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch stats');
        return response.json();
    },
    getAlerts: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/alerts`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch alerts');
        return response.json();
    },
    getNurses: async (token: string) => {
        const response = await fetch(`${API_BASE_URL}/admin/dashboard/nurses`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch nurses');
        return response.json();
    }
};

export const servicesApi = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/services`);
        if (!response.ok) throw new Error('Failed to fetch services');
        return response.json();
    },
    getById: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/services/${id}`);
        if (!response.ok) throw new Error('Failed to fetch service');
        return response.json();
    },
    create: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/services`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create service');
        return response.json();
    },
    update: async (token: string, id: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update service');
        return response.json();
    },
    delete: async (token: string, id: string) => {
        const response = await fetch(`${API_BASE_URL}/services/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to delete service');
        return response.json();
    }
};

export const blogsApi = {
    getAll: async (parentDocId: string = 'global') => {
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}`);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        return response.json();
    },
    getById: async (parentDocId: string, postId: string) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch blog post');
        return response.json();
    },
    create: async (token: string, parentDocId: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create blog post');
        return response.json();
    },
    update: async (token: string, parentDocId: string, postId: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update blog post');
        return response.json();
    },
    delete: async (token: string, parentDocId: string, postId: string) => {
        const response = await fetch(`${API_BASE_URL}/blogs/${parentDocId}/${postId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to delete blog post');
        return response.json();
    }
};

export const jobsApi = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        if (!response.ok) throw new Error('Failed to fetch jobs');
        return response.json();
    },
    getById: async (id: string) => {
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch job');
        return response.json();
    },
    create: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create job');
        return response.json();
    },
    update: async (token: string, id: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update job');
        return response.json();
    },
    delete: async (token: string, id: string) => {
        const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to delete job');
        return response.json();
    }
};

export const contentApi = {
    getGlobal: async () => {
        const response = await fetch(`${API_BASE_URL}/content`);
        if (!response.ok) throw new Error('Failed to fetch global content');
        return response.json();
    },
    updateGlobal: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/content`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update global content');
        return response.json();
    },
    getMetadata: async (pageId: string) => {
        const response = await fetch(`${API_BASE_URL}/content/metadata/${pageId}`);
        if (!response.ok) throw new Error('Failed to fetch metadata');
        return response.json();
    },
    upsertMetadata: async (token: string, pageId: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/content/metadata/${pageId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update metadata');
        return response.json();
    },
    getAllMetadata: async () => {
        const response = await fetch(`${API_BASE_URL}/content/metadata`);
        if (!response.ok) throw new Error('Failed to fetch all metadata');
        return response.json();
    }
};

export const testimonialsApi = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/testimonials`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        return response.json();
    },
    create: async (token: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/testimonials`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create testimonial');
        return response.json();
    },
    update: async (token: string, id: string, data: any) => {
        const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update testimonial');
        return response.json();
    },
    delete: async (token: string, id: string) => {
        const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to delete testimonial');
        return response.json();
    }
};
