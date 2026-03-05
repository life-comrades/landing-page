'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { dashboardApi } from '@/lib/api';
import {
    Users,
    Calendar,
    CheckCircle2,
    AlertTriangle
} from 'lucide-react';

const StatsCards = () => {
    const { user } = useAuth();
    const [statsData, setStatsData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            if (!user) return;
            try {
                const token = await user.getIdToken();
                const data = await dashboardApi.getStats(token);
                setStatsData(data);
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [user]);

    const stats = [
        {
            label: 'Total Bookings',
            value: statsData?.totalBookings?.toLocaleString() || '0',
            icon: Calendar,
            color: 'bg-teal-50 text-teal-600',
            subtext: 'Across all categories',
            alert: false
        },
        {
            label: 'Active Nurses',
            value: statsData?.activeNurses?.toLocaleString() || '0',
            icon: Users,
            color: 'bg-primary-light text-primary',
            subtext: 'Qualified personnel',
            alert: false
        },
        {
            label: 'Completed',
            value: statsData?.completedBookings?.toLocaleString() || '0',
            icon: CheckCircle2,
            color: 'bg-success bg-opacity-10 text-success',
            subtext: 'Successfully served',
            alert: false
        },
        {
            label: 'Pending',
            value: statsData?.pendingBookings?.toLocaleString() || '0',
            icon: AlertTriangle,
            color: 'bg-warning bg-opacity-10 text-warning',
            subtext: 'Needs assignment',
            alert: (statsData?.pendingBookings || 0) > 0
        },
    ];

    if (loading) {
        return (
            <div className="row g-4 mb-5">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="col-12 col-sm-6 col-xl-3">
                        <div className="card border-0 shadow-sm rounded-2xl h-100 bg-white placeholder-glow">
                            <div className="card-body p-4">
                                <div className="placeholder col-4 rounded mb-3" style={{ height: '40px' }}></div>
                                <div className="placeholder col-8 rounded mb-2"></div>
                                <div className="placeholder col-6 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="row g-4 mb-5">
            {stats.map((stat, index) => (
                <div key={stat.label} className="col-12 col-sm-6 col-xl-3">
                    <div className="card border-0 shadow-sm rounded-2xl h-100 transition-300 hover-shadow bg-white animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center gap-3">
                                <div className={`p-3 rounded-xl d-flex align-items-center justify-content-center ${stat.color.split(' ')[0]}`}>
                                    <stat.icon size={22} className={stat.color.split(' ')[1]} />
                                </div>
                                <div>
                                    <p className="text-secondary small fw-bold mb-1 text-uppercase tracking-wider" style={{ fontSize: '11px' }}>{stat.label}</p>
                                    <h3 className="h4 fw-extrabold text-dark mb-0 tracking-tight">{stat.value}</h3>
                                </div>
                            </div>
                            <p className={`small mt-3 mb-0 fw-semibold ${stat.alert ? 'text-warning' : 'text-muted'}`} style={{ fontSize: '12px' }}>
                                {stat.subtext}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
