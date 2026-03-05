"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { applicationsApi } from '@/lib/api';
import { FileText, Mail, Phone, Calendar, CheckSquare, MoveRight, ExternalLink } from 'lucide-react';

export default function ApplicationsPage() {
    const { user } = useAuth();
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await applicationsApi.getNew(token);
                setApplications(data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [user]);

    const handlePromote = async (app: any) => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            await applicationsApi.promote(token, {
                uid: null, // Scenarios for auto-creating auth user can be added
                name: app.fullName,
                email: app.email,
                mobile: app.mobile,
                experienceLevel: app.experience,
                specialty: app.specialty,
                role: 'nurse'
            });
            // Remove from local list after promotion
            setApplications(applications.filter(a => a.gsheetTimestamp !== app.gsheetTimestamp));
            alert('Staff promoted successfully to Neon Database!');
        } catch (error) {
            console.error('Error promoting application:', error);
            alert('Failed to promote application.');
        }
    };

    return (
        <div className="container-fluid p-4 mt-5">
            <div className="mb-4 pt-3">
                <h1 className="h3 mb-1 text-dark fw-bold">Job Applications</h1>
                <p className="text-muted small mb-0">Review pending applications from Google Sheets and promote to Staff DB</p>
            </div>

            <div className="row g-4">
                {loading ? (
                    <div className="col-12 text-center py-5">
                        <div className="spinner-border text-teal" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : applications.length > 0 ? (
                    applications.map((app, index) => (
                        <div key={index} className="col-lg-6">
                            <div className="card border-0 shadow-sm h-100 overflow-hidden">
                                <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <FileText size={18} className="text-teal" />
                                        <span className="fw-bold text-teal">{app.jobTitle}</span>
                                    </div>
                                    <span className="badge bg-warning-light text-warning rounded-pill px-3">Pending Review</span>
                                </div>
                                <div className="card-body p-4 pt-0">
                                    <h4 className="fw-bold mb-1">{app.fullName}</h4>
                                    <div className="text-muted small mb-3">Applied on: {app.gsheetTimestamp}</div>

                                    <div className="row g-3 mb-4">
                                        <div className="col-6">
                                            <div className="d-flex align-items-center gap-2 text-muted small">
                                                <Mail size={14} />
                                                <span>{app.email}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center gap-2 text-muted small">
                                                <Phone size={14} />
                                                <span>{app.mobile}</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center gap-2 text-muted small">
                                                <Calendar size={14} />
                                                <span>{app.experience} EXP</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center gap-2 text-muted small">
                                                <CheckSquare size={14} />
                                                <span>{app.specialty}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 bg-light rounded-3 mb-4">
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <span className="text-muted tiny d-block text-uppercase">10th Status</span>
                                                <span className="small fw-bold">{app.tenthStatus}</span>
                                            </div>
                                            <div className="col-6">
                                                <span className="text-muted tiny d-block text-uppercase">12th Status</span>
                                                <span className="small fw-bold">{app.twelfthStatus}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => handlePromote(app)}
                                            className="btn btn-teal flex-grow-1 d-flex align-items-center justify-content-center gap-2 rounded-pill shadow-sm"
                                        >
                                            <MoveRight size={18} />
                                            <span>Accept & Promote to Staff DB</span>
                                        </button>
                                        <button className="btn btn-outline-light text-dark border rounded-pill px-3">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center py-5">
                        <div className="text-muted">No pending job applications found in Google Sheets.</div>
                    </div>
                )}
            </div>
        </div>
    );
}
