"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { patientsApi } from '@/lib/api';
import { User, Phone, MapPin, Calendar, Search, Filter } from 'lucide-react';

export default function PatientsPage() {
    const { user } = useAuth();
    const [patients, setPatients] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPatients = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await patientsApi.getAll(token);
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatients();
    }, [user]);

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.mobile.includes(searchTerm)
    );

    return (
        <div className="container-fluid p-4 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4 pt-3">
                <div>
                    <h1 className="h3 mb-1 text-dark fw-bold">Patients Management</h1>
                    <p className="text-muted small mb-0">Manage and view all registered patients</p>
                </div>
            </div>

            {/* Filters & Search */}
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
                                    placeholder="Search by name or mobile..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Patients Grid */}
            <div className="row g-4">
                {loading ? (
                    <div className="col-12 text-center py-5">
                        <div className="spinner-border text-teal" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : filteredPatients.length > 0 ? (
                    filteredPatients.map((patient, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="bg-teal-light p-2 rounded-circle">
                                            <User size={24} className="text-teal" />
                                        </div>
                                        <div>
                                            <h5 className="mb-0 fw-bold">{patient.name}</h5>
                                            <span className="badge bg-light text-teal border border-teal-light small">Mobile: {patient.mobile}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="d-flex align-items-center gap-2 text-muted small">
                                            <MapPin size={16} />
                                            <span>{patient.address}, {patient.city}</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 text-muted small mt-2">
                                            <Calendar size={16} />
                                            <span>Registered: {new Date(patient.created_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <hr className="my-3 opacity-50" />

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <button className="btn btn-outline-teal btn-sm px-3 rounded-pill">View History</button>
                                        <button className="btn btn-teal btn-sm px-3 rounded-pill">New Booking</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <div className="text-muted">No patients found.</div>
                    </div>
                )}
            </div>
        </div>
    );
}
