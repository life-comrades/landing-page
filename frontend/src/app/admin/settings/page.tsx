'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { contentApi, blogsApi, jobsApi, servicesApi, testimonialsApi } from '@/lib/api';
import {
    Settings,
    Globe,
    Briefcase,
    FileText,
    Search,
    Plus,
    Save,
    Trash2,
    Edit2,
    CheckCircle,
    XCircle,
    AlertCircle,
    Info,
    Layout
} from 'lucide-react';

const ArrayInput = ({ label, items, onChange }: { label: string, items: string[], onChange: (items: string[]) => void }) => {
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim()) {
            onChange([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    const removeItem = (index: number) => {
        onChange(items.filter((_, i) => i !== index));
    };

    return (
        <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">{label}</label>
            <div className="d-flex gap-2 mb-2">
                <input
                    type="text"
                    className="form-control form-control-sm"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem())}
                />
                <button type="button" className="btn btn-teal-600 btn-sm text-white" onClick={addItem}>
                    <Plus size={14} />
                </button>
            </div>
            <div className="d-flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span key={index} className="badge bg-light text-dark border d-flex align-items-center gap-2 py-2 px-3">
                        {item}
                        <Trash2 size={12} className="text-danger cursor-pointer" onClick={() => removeItem(index)} />
                    </span>
                ))}
            </div>
        </div>
    );
};

const SettingsPage = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('general');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    // Data states
    const [globalContent, setGlobalContent] = useState<any>(null);
    const [metadata, setMetadata] = useState<any[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [jobs, setJobs] = useState<any[]>([]);
    const [blogs, setBlogs] = useState<any[]>([]);
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        setLoading(true);
        try {
            const [content, meta, svcs, jbs, blgs, tests] = await Promise.all([
                contentApi.getGlobal(),
                contentApi.getAllMetadata(),
                servicesApi.getAll(),
                jobsApi.getAll(),
                blogsApi.getAll('global'),
                testimonialsApi.getAll()
            ]);
            setGlobalContent(content);
            setMetadata(Object.entries(meta).map(([id, data]: any) => ({ id, ...data })));
            setServices(svcs);
            setJobs(jbs);
            setBlogs(blgs.data || []);
            setTestimonials(tests || []);
        } catch (error) {
            console.error('Failed to fetch settings data:', error);
            setMessage({ type: 'error', text: 'Failed to load settings data' });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveGlobal = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setSaving(true);
        try {
            const token = await user.getIdToken();
            await contentApi.updateGlobal(token, globalContent);
            setMessage({ type: 'success', text: 'Global settings updated successfully' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to update global settings' });
        } finally {
            setSaving(false);
        }
    };

    const [editingItem, setEditingItem] = useState<any>(null);
    const [editType, setEditType] = useState<'service' | 'job' | 'blog' | 'testimonial' | 'seo' | null>(null);

    const handleEdit = (item: any, type: 'service' | 'job' | 'blog' | 'testimonial' | 'seo') => {
        setEditingItem(JSON.parse(JSON.stringify(item)));
        setEditType(type);
    };

    const handleDelete = async (id: string, type: 'service' | 'job' | 'blog' | 'testimonial' | 'seo') => {
        if (!user || !confirm(`Are you sure you want to delete this ${type}?`)) return;
        setSaving(true);
        try {
            const token = await user.getIdToken();
            if (type === 'blog') await blogsApi.delete(token, 'global', id);
            else if (type === 'job') await jobsApi.delete(token, id);
            else if (type === 'service') await servicesApi.delete(token, id);
            else if (type === 'testimonial') await testimonialsApi.delete(token, id);
            setMessage({ type: 'success', text: `${type} deleted successfully` });
            fetchInitialData();
        } catch (error) {
            setMessage({ type: 'error', text: `Failed to delete ${type}` });
        } finally {
            setSaving(false);
        }
    };

    const handleSaveEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !editingItem || !editType) return;
        setSaving(true);
        try {
            const token = await user.getIdToken();
            if (editType === 'seo') {
                await contentApi.upsertMetadata(token, editingItem.id, editingItem);
            } else if (editType === 'blog') {
                if (editingItem.id) await blogsApi.update(token, 'global', editingItem.id, editingItem);
                else await blogsApi.create(token, 'global', editingItem);
            } else if (editType === 'job') {
                if (editingItem.id) await jobsApi.update(token, editingItem.id, editingItem);
                else await jobsApi.create(token, editingItem);
            } else if (editType === 'service') {
                if (editingItem.isNew) {
                    await servicesApi.create(token, editingItem);
                } else {
                    await servicesApi.update(token, editingItem.id, editingItem);
                }
            } else if (editType === 'testimonial') {
                if (editingItem.id) await testimonialsApi.update(token, editingItem.id, editingItem);
                else await testimonialsApi.create(token, editingItem);
            }
            setMessage({ type: 'success', text: `${editType} saved successfully` });
            setEditingItem(null);
            setEditType(null);
            fetchInitialData();
        } catch (error) {
            setMessage({ type: 'error', text: `Failed to save ${editType}` });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-teal-600" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 mb-1 fw-bold text-dark">Website Settings</h1>
                    <p className="text-secondary mb-0">Manage global content, services, jobs, and SEO</p>
                </div>
            </div>

            {message && (
                <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
                    <div className="d-flex align-items-center gap-2">
                        {message.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                        {message.text}
                    </div>
                    <button type="button" className="btn-close" onClick={() => setMessage(null)} aria-label="Close"></button>
                </div>
            )}

            {editingItem && (
                <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1060, backdropFilter: 'blur(4px)' }}>
                    <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${(editType === 'service' || editType === 'blog') ? 'modal-xl' : 'modal-lg'}`}>
                        <div className="modal-content border-0 shadow-lg rounded-xl" style={{ maxHeight: '90vh' }}>
                            <form onSubmit={handleSaveEdit} className="d-flex flex-column h-100 overflow-hidden">
                                <div className="modal-header border-bottom py-3 flex-shrink-0">
                                    <h5 className="modal-title fw-bold">Edit {editType}</h5>
                                    <button type="button" className="btn-close" onClick={() => setEditingItem(null)}></button>
                                </div>
                                <div className="modal-body p-4 flex-grow-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                                    {editType === 'seo' && (
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Page ID</label>
                                                <input type="text" className="form-control bg-light" value={editingItem.id} disabled />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Page Title</label>
                                                <input type="text" className="form-control" value={editingItem.title} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Description</label>
                                                <textarea className="form-control" rows={3} value={editingItem.description} onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold text-teal-600">Keywords List</label>
                                                <ArrayInput label="" items={editingItem.keywords || []} onChange={items => setEditingItem({ ...editingItem, keywords: items })} />
                                            </div>
                                        </div>
                                    )}
                                    {editType === 'service' && (
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Service ID (Slug)</label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-light"
                                                    value={editingItem.id || ''}
                                                    onChange={e => setEditingItem({ ...editingItem, id: e.target.value })}
                                                    disabled={!editingItem.isNew}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Title</label>
                                                <input type="text" className="form-control" value={editingItem.title || ''} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Short Description</label>
                                                <textarea className="form-control" rows={2} value={editingItem.description || ''} onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">About Text (Long)</label>
                                                <textarea className="form-control" rows={4} value={editingItem.about || ''} onChange={e => setEditingItem({ ...editingItem, about: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Detailed About Section (Full length)</label>
                                                <textarea className="form-control" rows={6} value={editingItem.aboutDetails || ''} onChange={e => setEditingItem({ ...editingItem, aboutDetails: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Image URL</label>
                                                <input type="text" className="form-control" value={editingItem.image || ''} onChange={e => setEditingItem({ ...editingItem, image: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <ArrayInput label="Who It Is For" items={editingItem.whoItIsFor || []} onChange={items => setEditingItem({ ...editingItem, whoItIsFor: items })} />
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">Service FAQ (Single)</h6>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label small fw-semibold">Question</label>
                                                        <input type="text" className="form-control" value={editingItem.faq?.question || ''} onChange={e => setEditingItem({ ...editingItem, faq: { ...editingItem.faq, question: e.target.value } })} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label small fw-semibold">Answer</label>
                                                        <textarea className="form-control" rows={2} value={editingItem.faq?.answer || ''} onChange={e => setEditingItem({ ...editingItem, faq: { ...editingItem.faq, answer: e.target.value } })}></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">Service Top Testimonial</h6>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label small fw-semibold">Author</label>
                                                        <input type="text" className="form-control" value={editingItem.testimonial?.author || ''} onChange={e => setEditingItem({ ...editingItem, testimonial: { ...editingItem.testimonial, author: e.target.value } })} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label small fw-semibold">Quote</label>
                                                        <textarea className="form-control" rows={2} value={editingItem.testimonial?.quote || ''} onChange={e => setEditingItem({ ...editingItem, testimonial: { ...editingItem.testimonial, quote: e.target.value } })}></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">SEO Metadata</h6>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <label className="form-label small fw-semibold">Meta Title</label>
                                                        <input type="text" className="form-control" value={editingItem.metadata?.title || ''} onChange={e => setEditingItem({ ...editingItem, metadata: { ...editingItem.metadata, title: e.target.value } })} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label small fw-semibold">Meta Description</label>
                                                        <textarea className="form-control" rows={2} value={editingItem.metadata?.description || ''} onChange={e => setEditingItem({ ...editingItem, metadata: { ...editingItem.metadata, description: e.target.value } })}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {editType === 'job' && (
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Job Title</label>
                                                <input type="text" className="form-control" value={editingItem.title} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Category</label>
                                                <input type="text" className="form-control" value={editingItem.category} onChange={e => setEditingItem({ ...editingItem, category: e.target.value })} />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label small fw-semibold">Type</label>
                                                <select className="form-select" value={editingItem.type} onChange={e => setEditingItem({ ...editingItem, type: e.target.value })}>
                                                    <option value="Full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="Contract">Contract</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label small fw-semibold">Location</label>
                                                <input type="text" className="form-control" value={editingItem.location || ''} onChange={e => setEditingItem({ ...editingItem, location: e.target.value })} />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="form-label small fw-semibold">Salary Range</label>
                                                <input type="text" className="form-control" value={editingItem.salary || ''} onChange={e => setEditingItem({ ...editingItem, salary: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Short Description</label>
                                                <textarea className="form-control" rows={2} value={editingItem.description || ''} onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <ArrayInput label="Requirements" items={editingItem.requirements || []} onChange={items => setEditingItem({ ...editingItem, requirements: items })} />
                                            </div>
                                            <div className="col-md-6">
                                                <ArrayInput label="Responsibilities" items={editingItem.responsibilities || []} onChange={items => setEditingItem({ ...editingItem, responsibilities: items })} />
                                            </div>
                                        </div>
                                    )}
                                    {editType === 'blog' && (
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Blog Title</label>
                                                <input type="text" className="form-control" value={editingItem.title} onChange={e => setEditingItem({ ...editingItem, title: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Category</label>
                                                <input type="text" className="form-control" value={editingItem.category || ''} onChange={e => setEditingItem({ ...editingItem, category: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Read Time (minutes)</label>
                                                <input type="number" className="form-control" value={editingItem.readTime || 0} onChange={e => setEditingItem({ ...editingItem, readTime: parseInt(e.target.value) })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Author</label>
                                                <input type="text" className="form-control" value={editingItem.author} onChange={e => setEditingItem({ ...editingItem, author: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Date</label>
                                                <input type="date" className="form-control" value={editingItem.date ? editingItem.date.split('T')[0] : ''} onChange={e => setEditingItem({ ...editingItem, date: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Short Excerpt (Description)</label>
                                                <textarea className="form-control" rows={2} value={editingItem.description || ''} onChange={e => setEditingItem({ ...editingItem, description: e.target.value })}></textarea>
                                            </div>

                                            <div className="col-12 mt-3 d-flex gap-4">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" checked={editingItem.published || false} onChange={e => setEditingItem({ ...editingItem, published: e.target.checked })} />
                                                    <label className="form-check-label fw-semibold">Published</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" checked={editingItem.isFeatured || false} onChange={e => setEditingItem({ ...editingItem, isFeatured: e.target.checked })} />
                                                    <label className="form-check-label fw-semibold">Featured</label>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">Primary Image</h6>
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <label className="form-label small fw-semibold">Image URL (src)</label>
                                                        <input type="text" className="form-control" placeholder="https://..." value={editingItem.image?.src || editingItem.image || ''} onChange={e => setEditingItem({ ...editingItem, image: typeof editingItem.image === 'object' ? { ...editingItem.image, src: e.target.value } : e.target.value })} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label small fw-semibold">Alt Text</label>
                                                        <input type="text" className="form-control" placeholder="Description for SEO" value={editingItem.image?.alt || ''} onChange={e => setEditingItem({ ...editingItem, image: { ...editingItem.image, alt: e.target.value } })} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label small fw-semibold">Caption</label>
                                                        <input type="text" className="form-control" placeholder="Visible image caption" value={editingItem.image?.description || ''} onChange={e => setEditingItem({ ...editingItem, image: { ...editingItem.image, description: e.target.value } })} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">Blog Content Sections</h6>
                                                {(editingItem.content || []).map((section: any, sIdx: number) => (
                                                    <div key={sIdx} className="card bg-light border-0 mb-3 p-3 position-relative">
                                                        <button type="button" className="btn-close position-absolute top-0 end-0 m-2" style={{ scale: '0.7' }} onClick={() => setEditingItem({ ...editingItem, content: editingItem.content.filter((_: any, i: number) => i !== sIdx) })}></button>
                                                        <div className="mb-3">
                                                            <label className="form-label small fw-semibold">Heading</label>
                                                            <input type="text" className="form-control form-control-sm" value={section.heading || ''} onChange={e => {
                                                                const newContent = [...editingItem.content];
                                                                newContent[sIdx].heading = e.target.value;
                                                                setEditingItem({ ...editingItem, content: newContent });
                                                            }} />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label small fw-semibold">Section Content</label>
                                                            <textarea className="form-control form-control-sm" rows={3} value={section.content || ''} onChange={e => {
                                                                const newContent = [...editingItem.content];
                                                                newContent[sIdx].content = e.target.value;
                                                                setEditingItem({ ...editingItem, content: newContent });
                                                            }}></textarea>
                                                        </div>
                                                        <ArrayInput label="Section List Items (Optional)" items={section.list || []} onChange={items => {
                                                            const newContent = [...editingItem.content];
                                                            newContent[sIdx].list = items;
                                                            setEditingItem({ ...editingItem, content: newContent });
                                                        }} />
                                                    </div>
                                                ))}
                                                <button type="button" className="btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed" onClick={() => setEditingItem({ ...editingItem, content: [...(editingItem.content || []), { heading: '', content: '', list: [] }] })}>
                                                    <Plus size={16} className="me-2" /> Add Section
                                                </button>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <h6 className="fw-bold text-dark border-bottom pb-2">SEO & Metadata</h6>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label small fw-semibold">Meta Title</label>
                                                        <input type="text" className="form-control" value={editingItem.metaTitle || ''} onChange={e => setEditingItem({ ...editingItem, metaTitle: e.target.value })} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label small fw-semibold">Meta Description</label>
                                                        <input type="text" className="form-control" value={editingItem.metaDescription || ''} onChange={e => setEditingItem({ ...editingItem, metaDescription: e.target.value })} />
                                                    </div>
                                                    <div className="col-12">
                                                        <ArrayInput label="Meta Keywords" items={editingItem.metaKeywords || []} onChange={items => setEditingItem({ ...editingItem, metaKeywords: items })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {editType === 'testimonial' && (
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Author Name</label>
                                                <input type="text" className="form-control" value={editingItem.author || ''} onChange={e => setEditingItem({ ...editingItem, author: e.target.value })} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label small fw-semibold">Location / Designation</label>
                                                <input type="text" className="form-control" value={editingItem.location || ''} onChange={e => setEditingItem({ ...editingItem, location: e.target.value })} />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label small fw-semibold">Associated Service</label>
                                                <select className="form-select" value={editingItem.serviceId || ''} onChange={e => setEditingItem({ ...editingItem, serviceId: e.target.value })}>
                                                    <option value="">General / Home Page</option>
                                                    {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label small fw-semibold">Testimonial Quote</label>
                                                <textarea className="form-control" rows={4} value={editingItem.quote || ''} onChange={e => setEditingItem({ ...editingItem, quote: e.target.value })}></textarea>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" checked={editingItem.featured || false} onChange={e => setEditingItem({ ...editingItem, featured: e.target.checked })} />
                                                    <label className="form-check-label fw-semibold">Featured on Home Page</label>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="modal-footer border-top px-4 py-3 flex-shrink-0">
                                    <button type="button" className="btn btn-light" onClick={() => setEditingItem(null)}>Cancel</button>
                                    <button type="submit" className="btn btn-teal-600 text-white px-4" disabled={saving}>
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="card border-0 shadow-sm overflow-hidden rounded-xl">
                <div className="card-header bg-white border-bottom p-0">
                    <ul className="nav nav-tabs border-0 px-3">
                        {[
                            { id: 'general', label: 'General', icon: Settings },
                            { id: 'services', label: 'Services', icon: Layout },
                            { id: 'jobs', label: 'Jobs', icon: Briefcase },
                            { id: 'blog', label: 'Blog', icon: FileText },
                            { id: 'testimonials', label: 'Testimonials', icon: Info },
                            { id: 'seo', label: 'SEO/Metadata', icon: Globe },
                        ].map((tab) => (
                            <li className="nav-item" key={tab.id}>
                                <button
                                    className={`nav-link border-0 py-3 px-4 fw-medium transition-300 ${activeTab === tab.id ? 'text-teal-600 border-bottom border-2 border-teal-600' : 'text-secondary'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <div className="d-flex align-items-center gap-2">
                                        <tab.icon size={18} />
                                        {tab.label}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="card-body p-4 bg-light bg-opacity-10">
                    {activeTab === 'general' && (
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <form onSubmit={handleSaveGlobal}>
                                    <h5 className="fw-bold mb-4 text-dark border-bottom pb-2">Company Information</h5>
                                    <div className="row g-3 mb-4">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.companyName || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, companyName: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Tagline</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.tagline || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, tagline: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.email || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, email: e.target.value } })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.phone || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, phone: e.target.value } })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Office Address</label>
                                            <textarea
                                                className="form-control rounded-lg shadow-xs"
                                                rows={3}
                                                value={globalContent?.contact?.address || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, address: e.target.value } })}
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <ArrayInput label="Branch Cities" items={globalContent?.contact?.cities || []} onChange={items => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, cities: items } })} />
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 text-dark border-bottom pb-2 mt-5">Global SEO</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Site Title</label>
                                            <input type="text" className="form-control" placeholder="Life Comrades | Nursing Care" value={globalContent?.globalMetadata?.title || ''} onChange={e => setGlobalContent({ ...globalContent, globalMetadata: { ...globalContent.globalMetadata, title: e.target.value } })} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Global Keywords</label>
                                            <ArrayInput label="" items={globalContent?.globalMetadata?.keywords || []} onChange={items => setGlobalContent({ ...globalContent, globalMetadata: { ...globalContent.globalMetadata, keywords: items } })} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Site Description</label>
                                            <textarea className="form-control" rows={2} placeholder="Explain what the site is about..." value={globalContent?.globalMetadata?.description || ''} onChange={e => setGlobalContent({ ...globalContent, globalMetadata: { ...globalContent.globalMetadata, description: e.target.value } })}></textarea>
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 text-dark border-bottom pb-2 mt-5">Homepage Hero</h5>
                                    <div className="row g-3 mb-4">
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Hero Title</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.homeHero?.title || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, homeHero: { ...globalContent.homeHero, title: e.target.value } })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Hero Subtitle</label>
                                            <textarea
                                                className="form-control rounded-lg shadow-xs"
                                                rows={2}
                                                value={globalContent?.homeHero?.subtitle || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, homeHero: { ...globalContent.homeHero, subtitle: e.target.value } })}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 text-dark border-bottom pb-2 mt-5">About Page</h5>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Mission Statement</label>
                                            <textarea
                                                className="form-control rounded-lg shadow-xs"
                                                rows={3}
                                                value={globalContent?.aboutPage?.mission || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, mission: e.target.value } })}
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label small fw-semibold text-secondary">Vision Statement</label>
                                            <textarea
                                                className="form-control rounded-lg shadow-xs"
                                                rows={3}
                                                value={globalContent?.aboutPage?.vision || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, vision: e.target.value } })}
                                            ></textarea>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <h6 className="fw-bold text-dark border-bottom pb-2">Founders</h6>
                                            <div className="row g-3">
                                                {(globalContent?.aboutPage?.founders || []).map((f: any, i: number) => (
                                                    <div key={i} className="col-xl-6">
                                                        <div className="card bg-light border-0 mb-3 p-3 position-relative h-100">
                                                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" style={{ scale: '0.7', zIndex: 1 }} onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, founders: globalContent.aboutPage.founders.filter((_: any, idx: number) => idx !== i) } })}></button>
                                                            <div className="row g-2">
                                                                <div className="col-md-6">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Name</label>
                                                                    <input type="text" className="form-control form-control-sm" value={f.name} onChange={val => {
                                                                        const newF = [...globalContent.aboutPage.founders];
                                                                        newF[i].name = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, founders: newF } });
                                                                    }} />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Role</label>
                                                                    <input type="text" className="form-control form-control-sm" value={f.role} onChange={val => {
                                                                        const newF = [...globalContent.aboutPage.founders];
                                                                        newF[i].role = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, founders: newF } });
                                                                    }} />
                                                                </div>
                                                                <div className="col-12">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Bio / Description</label>
                                                                    <textarea className="form-control form-control-sm" rows={2} value={f.bio} onChange={val => {
                                                                        const newF = [...globalContent.aboutPage.founders];
                                                                        newF[i].bio = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, founders: newF } });
                                                                    }}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button type="button" className="btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed" onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, founders: [...(globalContent?.aboutPage?.founders || []), { name: '', role: '', bio: '', image: '' }] } })}><Plus size={14} className="me-1" /> Add Founder</button>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <h6 className="fw-bold text-dark border-bottom pb-2">Partners</h6>
                                            <div className="row g-3">
                                                {(globalContent?.aboutPage?.partners || []).map((p: any, i: number) => (
                                                    <div key={i} className="col-xl-4 col-md-6">
                                                        <div className="card bg-light border-0 mb-3 p-3 position-relative h-100">
                                                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" style={{ scale: '0.7', zIndex: 1 }} onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, partners: globalContent.aboutPage.partners.filter((_: any, idx: number) => idx !== i) } })}></button>
                                                            <div className="row g-2">
                                                                <div className="col-12">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Partner Name</label>
                                                                    <input type="text" className="form-control form-control-sm" value={p.name} onChange={val => {
                                                                        const newP = [...globalContent.aboutPage.partners];
                                                                        newP[i].name = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, partners: newP } });
                                                                    }} />
                                                                </div>
                                                                <div className="col-12">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Website / Logo URL</label>
                                                                    <input type="text" className="form-control form-control-sm" value={p.logo} onChange={val => {
                                                                        const newP = [...globalContent.aboutPage.partners];
                                                                        newP[i].logo = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, partners: newP } });
                                                                    }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button type="button" className="btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed" onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, partners: [...(globalContent?.aboutPage?.partners || []), { name: '', logo: '', website: '' }] } })}><Plus size={14} className="me-1" /> Add Partner</button>
                                        </div>

                                        <div className="col-12 mt-4">
                                            <h6 className="fw-bold text-dark border-bottom pb-2">Recent Events</h6>
                                            <div className="row g-3">
                                                {(globalContent?.aboutPage?.events || []).map((e: any, i: number) => (
                                                    <div key={i} className="col-xl-6">
                                                        <div className="card bg-light border-0 mb-3 p-3 position-relative h-100">
                                                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" style={{ scale: '0.7', zIndex: 1 }} onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, events: globalContent.aboutPage.events.filter((_: any, idx: number) => idx !== i) } })}></button>
                                                            <div className="row g-2">
                                                                <div className="col-md-8">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Event Title</label>
                                                                    <input type="text" className="form-control form-control-sm" value={e.title} onChange={val => {
                                                                        const newE = [...globalContent.aboutPage.events];
                                                                        newE[i].title = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, events: newE } });
                                                                    }} />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Date</label>
                                                                    <input type="date" className="form-control form-control-sm" value={e.date || ''} onChange={val => {
                                                                        const newE = [...globalContent.aboutPage.events];
                                                                        newE[i].date = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, events: newE } });
                                                                    }} />
                                                                </div>
                                                                <div className="col-12">
                                                                    <label className="tiny text-muted fw-bold text-uppercase">Brief Description</label>
                                                                    <textarea className="form-control form-control-sm" rows={2} value={e.description} onChange={val => {
                                                                        const newE = [...globalContent.aboutPage.events];
                                                                        newE[i].description = val.target.value;
                                                                        setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, events: newE } });
                                                                    }}></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button type="button" className="btn btn-outline-teal-600 btn-sm w-100 py-2 border-dashed" onClick={() => setGlobalContent({ ...globalContent, aboutPage: { ...globalContent.aboutPage, events: [...(globalContent?.aboutPage?.events || []), { title: '', date: '', description: '', image: '' }] } })}><Plus size={14} className="me-1" /> Add Event</button>
                                        </div>
                                    </div>

                                    <h5 className="fw-bold mb-4 text-dark border-bottom pb-2 mt-5">Social Links</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">WhatsApp Number</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.social?.whatsapp || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, social: { ...globalContent.contact.social, whatsapp: e.target.value } } })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Facebook URL</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.social?.facebook || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, social: { ...globalContent.contact.social, facebook: e.target.value } } })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">Instagram URL</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.social?.instagram || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, social: { ...globalContent.contact.social, instagram: e.target.value } } })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-semibold text-secondary">LinkedIn URL</label>
                                            <input
                                                type="text"
                                                className="form-control rounded-lg shadow-xs"
                                                value={globalContent?.contact?.social?.linkedin || ''}
                                                onChange={(e) => setGlobalContent({ ...globalContent, contact: { ...globalContent.contact, social: { ...globalContent.contact.social, linkedin: e.target.value } } })}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 pt-3 border-top d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            className="btn btn-teal-600 px-5 py-2 fw-bold text-white shadow-sm transition-300"
                                            disabled={saving}
                                        >
                                            {saving ? (
                                                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                                            ) : <Save size={18} className="me-2" />}
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {activeTab === 'services' && (
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0">Healthcare Services</h5>
                                <button className="btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2" onClick={() => handleEdit({ id: '', name: '', tagline: '', description: '', isNew: true }, 'service')}>
                                    <Plus size={16} /> Add Service
                                </button>
                            </div>
                            <table className="table table-hover align-middle border">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '80px' }}>ID</th>
                                        <th>Service Name</th>
                                        <th>Tagline</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((service) => (
                                        <tr key={service.id}>
                                            <td className="fw-bold text-teal-600">{service.id}</td>
                                            <td className="fw-semibold">{service.title}</td>
                                            <td className="text-muted small text-truncate" style={{ maxWidth: '200px' }}>{service.description}</td>
                                            <td className="text-end">
                                                <button className="btn btn-light btn-sm me-2" onClick={() => handleEdit(service, 'service')}><Edit2 size={14} /></button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(service.id, 'service')}><Trash2 size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'jobs' && (
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0">Job Openings</h5>
                                <button className="btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2" onClick={() => handleEdit({ title: '', category: '', type: 'Full-time', active: true }, 'job')}>
                                    <Plus size={16} /> Post Job
                                </button>
                            </div>
                            <table className="table table-hover align-middle border">
                                <thead className="table-light">
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="fw-semibold">{job.title}</td>
                                            <td>{job.category}</td>
                                            <td><span className="badge bg-light text-dark border">{job.type}</span></td>
                                            <td>
                                                <span className={`badge ${job.active !== false ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                                    {job.active !== false ? 'Active' : 'Closed'}
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-light btn-sm me-2" onClick={() => handleEdit(job, 'job')}><Edit2 size={14} /></button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(job.id, 'job')}><Trash2 size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'blog' && (
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0">Blog Posts</h5>
                                <button className="btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2" onClick={() => handleEdit({ title: '', author: '', date: new Date().toISOString().split('T')[0], excerpt: '', tags: [] }, 'blog')}>
                                    <Plus size={16} /> New Post
                                </button>
                            </div>
                            <table className="table table-hover align-middle border">
                                <thead className="table-light">
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((post) => (
                                        <tr key={post.id}>
                                            <td className="fw-semibold">{post.title}</td>
                                            <td>{post.author}</td>
                                            <td>
                                                <span className="badge bg-light text-dark border">{post.category}</span>
                                            </td>
                                            <td className="text-muted small">{post.date}</td>
                                            <td className="text-end">
                                                <button className="btn btn-light btn-sm me-2" onClick={() => handleEdit(post, 'blog')}><Edit2 size={14} /></button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(post.id, 'blog')}><Trash2 size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'testimonials' && (
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0">Client Testimonials</h5>
                                <button className="btn btn-teal-600 text-white btn-sm px-3 d-flex align-items-center gap-2" onClick={() => handleEdit({ author: '', quote: '', serviceId: '', featured: false }, 'testimonial')}>
                                    <Plus size={16} /> Add Testimonial
                                </button>
                            </div>
                            <table className="table table-hover align-middle border">
                                <thead className="table-light">
                                    <tr>
                                        <th>Author</th>
                                        <th>Service</th>
                                        <th>Quote</th>
                                        <th>Featured</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testimonials.map((test) => (
                                        <tr key={test.id}>
                                            <td className="fw-semibold">{test.author}</td>
                                            <td>
                                                <span className="badge bg-light text-dark border">{test.serviceId || 'General'}</span>
                                            </td>
                                            <td className="text-muted small text-truncate" style={{ maxWidth: '300px' }}>{test.quote}</td>
                                            <td>
                                                {test.featured ? <CheckCircle size={16} className="text-success" /> : <XCircle size={16} className="text-secondary opacity-50" />}
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-light btn-sm me-2" onClick={() => handleEdit(test, 'testimonial')}><Edit2 size={14} /></button>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(test.id, 'testimonial')}><Trash2 size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'seo' && (
                        <div className="table-responsive">
                            <h5 className="fw-bold mb-3">Page Metadata (SEO)</h5>
                            <table className="table table-hover align-middle border">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '150px' }}>Page ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {metadata.map((meta: any) => (
                                        <tr key={meta.id}>
                                            <td className="text-uppercase small fw-bold text-secondary tracking-wider">{meta.id}</td>
                                            <td className="fw-semibold">{meta.title}</td>
                                            <td className="text-muted small text-truncate" style={{ maxWidth: '300px' }}>{meta.description}</td>
                                            <td className="text-end">
                                                <button className="btn btn-light btn-sm me-2" onClick={() => handleEdit(meta, 'seo')}><Edit2 size={14} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .rounded-xl { border-radius: 1rem !important; }
                .rounded-lg { border-radius: 0.5rem !important; }
                .shadow-xs { box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important; }
                .transition-300 { transition: all 0.3s ease; }
                .bg-teal-600 { background-color: #0d9488 !important; }
                .text-teal-600 { color: #0d9488 !important; }
                .btn-teal-600 { background-color: #0d9488 !important; border-color: #0d9488 !important; }
                .btn-teal-600:hover { background-color: #0f766e !important; box-shadow: 0 4px 12px rgba(13, 148, 136, 0.2); }
                .bg-success-subtle { background-color: #d1fae5 !important; }
                .bg-danger-subtle { background-color: #fee2e2 !important; }
                .nav-tabs .nav-link:hover { background-color: #f8fafc; color: #0d9488; }
                .tracking-wider { letter-spacing: 0.05em; }
            `}</style>
        </div>
    );
};

export default SettingsPage;
