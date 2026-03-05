"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { nursesApi } from '@/lib/api';
import { Award, Star, Phone, MapPin, CheckCircle2, XCircle, Search, UserPlus } from 'lucide-react';

export default function NursesPage() {
    const { user } = useAuth();
    const [nurses, setNurses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchNurses = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await nursesApi.getAll(token);
                setNurses(data);
            } catch (error) {
                console.error('Error fetching nurses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNurses();
    }, [user]);

    const toggleStatus = async (id: string, currentStatus: boolean) => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            await nursesApi.updateStatus(token, id, !currentStatus);
            setNurses(nurses.map(n => n.id === id ? { ...n, is_active: !currentStatus } : n));
        } catch (error) {
            console.error('Error updating nurse status:', error);
        }
    };

    const filteredNurses = nurses.filter(n =>
        n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        n.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid p-4 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4 pt-3">
                <div>
                    <h1 className="h3 mb-1 text-dark fw-bold">Nursing Staff</h1>
                    <p className="text-muted small mb-0">Manage your active nursing pool and roles</p>
                </div>
                <button className="btn btn-teal d-flex align-items-center gap-2 px-4 rounded-pill shadow-sm">
                    <UserPlus size={18} />
                    <span>Add New Staff</span>
                </button>
            </div>

            {/* Filters */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-3">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="input-group">
                                <span className="input-group-text bg-light border-end-0">
                                    <Search size={18} className="text-muted" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control bg-light border-start-0 ps-0"
                                    placeholder="Search staff by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nurses Table */}
            <div className="card border-0 shadow-sm overflow-hidden">
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th className="px-4 py-3 text-secondary small fw-bold text-uppercase">Staff Member</th>
                                <th className="py-3 text-secondary small fw-bold text-uppercase">Specialty</th>
                                <th className="py-3 text-secondary small fw-bold text-uppercase">Experience</th>
                                <th className="py-3 text-secondary small fw-bold text-uppercase">Rating</th>
                                <th className="py-3 text-secondary small fw-bold text-uppercase">Status</th>
                                <th className="py-3 text-secondary small fw-bold text-uppercase text-end px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-5">
                                        <div className="spinner-border text-teal" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredNurses.length > 0 ? (
                                filteredNurses.map((nurse) => (
                                    <tr key={nurse.id}>
                                        <td className="px-4">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="bg-light p-2 rounded-circle text-teal">
                                                    <Award size={20} />
                                                </div>
                                                <div>
                                                    <div className="fw-bold">{nurse.name}</div>
                                                    <div className="text-muted small">{nurse.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{nurse.specialty || 'General Care'}</td>
                                        <td>{nurse.experience_level}</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-1 text-warning">
                                                <Star size={14} fill="currentColor" />
                                                <span className="text-dark fw-bold small">{nurse.rating || '0.0'}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge rounded-pill ${nurse.is_active ? 'bg-success-light text-success' : 'bg-danger-light text-danger'} px-3`}>
                                                {nurse.is_active ? 'Active' : 'Offline'}
                                            </span>
                                        </td>
                                        <td className="text-end px-4">
                                            <div className="d-flex justify-content-end gap-2">
                                                <button
                                                    onClick={() => toggleStatus(nurse.id, nurse.is_active)}
                                                    className={`btn btn-sm ${nurse.is_active ? 'btn-outline-danger' : 'btn-outline-success'} rounded-circle p-2`}
                                                    title={nurse.is_active ? 'Deactivate' : 'Activate'}
                                                >
                                                    {nurse.is_active ? <XCircle size={18} /> : <CheckCircle2 size={18} />}
                                                </button>
                                                <button className="btn btn-sm btn-outline-teal rounded-circle p-2">
                                                    <Phone size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-5">
                                        <div className="text-muted">No nursing staff found.</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
