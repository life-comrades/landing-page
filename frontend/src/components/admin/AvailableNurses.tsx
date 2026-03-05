'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { dashboardApi } from '@/lib/api';
import { Star } from 'lucide-react';

const AvailableNurses = () => {
    const { user } = useAuth();
    const [nurses, setNurses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNurses = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await dashboardApi.getNurses(token);
                setNurses(data);
            } catch (error) {
                console.error('Error fetching available nurses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNurses();
    }, [user]);

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    if (loading) {
        return (
            <div className="card border-0 shadow-sm rounded-2xl bg-white overflow-hidden">
                <div className="card-header bg-white border-0 p-4 pb-0">
                    <div className="placeholder col-6 rounded py-2"></div>
                </div>
                <div className="card-body p-4 pt-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="d-flex align-items-center gap-3 mb-4 placeholder-glow">
                            <div className="placeholder rounded-circle" style={{ width: '44px', height: '44px' }}></div>
                            <div className="flex-grow-1">
                                <div className="placeholder col-8 rounded mb-1"></div>
                                <div className="placeholder col-4 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="card border-0 shadow-sm rounded-2xl bg-white overflow-hidden">
            <div className="card-header bg-white border-0 p-4 pb-0 d-flex align-items-center justify-content-between">
                <h3 className="h6 fw-extrabold text-dark mb-0 text-uppercase tracking-wider" style={{ fontSize: '14px' }}>Available Nurses</h3>
                <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-teal-500 bg-opacity-10 text-teal-600 rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
                        <span className="spinner-grow spinner-grow-sm" style={{ width: '8px', height: '8px' }}></span>
                    </span>
                    <span className="text-teal-600 small fw-bold" style={{ fontSize: '10px' }}>{nurses.length} ONLINE</span>
                </div>
            </div>
            <div className="card-body p-4 pt-4">
                <div className="d-flex flex-column gap-4">
                    {nurses.length > 0 ? nurses.map((nurse, index) => (
                        <div key={nurse.id || index} className="d-flex align-items-center gap-3 group cursor-pointer">
                            <div className="position-relative">
                                <div className="bg-teal-50 text-teal-600 rounded-circle d-flex align-items-center justify-content-center fw-bold border border-teal-100 shadow-sm" style={{ width: '44px', height: '44px', fontSize: '14px' }}>
                                    {getInitials(nurse.name)}
                                </div>
                                <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle p-1" style={{ width: '12px', height: '12px' }}></span>
                            </div>
                            <div className="flex-grow-1 min-width-0 overflow-hidden">
                                <div className="d-flex align-items-center justify-content-between mb-0.5">
                                    <h5 className="h6 fw-bold text-dark mb-0 text-truncate" style={{ fontSize: '14px' }}>{nurse.name}</h5>
                                    <div className="d-flex align-items-center text-warning gap-1">
                                        <Star size={10} fill="currentColor" />
                                        <span className="fw-bold" style={{ fontSize: '11px' }}>{nurse.rating}</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-light text-secondary fw-medium px-2 py-1 rounded-pill" style={{ fontSize: '10px' }}>{nurse.specialty}</span>
                                    <span className="text-secondary opacity-50 fw-medium" style={{ fontSize: '10px' }}>{nurse.experience} exp</span>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-4">
                            <p className="text-muted small mb-0">No nurses online currently</p>
                        </div>
                    )}
                </div>
                <button className="btn btn-teal-600 w-100 mt-5 rounded-xl py-2.5 fw-bold text-uppercase tracking-widest shadow-sm transition-300" style={{ fontSize: '12px' }}>
                    Find More Nurses
                </button>
            </div>
        </div>
    );
};

export default AvailableNurses;
