"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { dashboardApi } from '@/lib/api';
import { AlertCircle, Loader2 } from 'lucide-react';

export default function UrgentAlerts() {
    const { user } = useAuth();
    const [alerts, setAlerts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlerts = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await dashboardApi.getAlerts(token);
                setAlerts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching dashboard alerts:', error);
                setAlerts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAlerts();
    }, [user]);

    if (loading) {
        return (
            <div className="card border-0 shadow-sm rounded-2xl bg-white overflow-hidden p-5 d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <div className="text-center">
                    <Loader2 className="animate-spin text-teal mb-2" size={32} />
                    <p className="text-muted small">Checking for alerts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card border-0 shadow-sm rounded-2xl bg-white overflow-hidden h-100">
            <div className="card-header bg-white border-bottom border-light p-4 d-flex align-items-center justify-content-between">
                <h3 className="h6 fw-extrabold text-dark mb-0 text-uppercase tracking-wider" style={{ fontSize: '13px' }}>Urgent Alerts</h3>
                {alerts.length > 0 && (
                    <span className="badge bg-danger rounded-pill px-3 py-2 fw-bold animate-pulse shadow-sm" style={{ fontSize: '10px' }}>{alerts.length} NEW</span>
                )}
            </div>
            <div className="card-body p-4">
                <div className="d-flex flex-column gap-3">
                    {alerts.length > 0 ? alerts.map((alert, index) => (
                        <div key={index} className="d-flex align-items-start gap-3 p-3 rounded-xl hover-bg-light transition-300 cursor-pointer border border-light shadow-xs animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="p-2 rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center mt-1">
                                <AlertCircle size={16} />
                            </div>
                            <div className="flex-grow-1">
                                <h5 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>{alert.title}</h5>
                                <p className="text-muted mb-1 small lh-sm">{alert.desc}</p>
                                <span className="text-secondary opacity-50 tiny fw-bold">{alert.time}</span>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-5">
                            <div className="bg-light p-3 rounded-circle d-inline-flex mb-3">
                                <AlertCircle size={32} className="text-muted opacity-50" />
                            </div>
                            <p className="text-muted small mb-0">No urgent alerts at this time.</p>
                        </div>
                    )}
                </div>
                {alerts.length > 0 && (
                    <button className="btn btn-link link-teal w-100 mt-4 text-decoration-none fw-bold shadow-none p-0 small">
                        View All Alerts
                    </button>
                )}
            </div>
        </div>
    );
}
