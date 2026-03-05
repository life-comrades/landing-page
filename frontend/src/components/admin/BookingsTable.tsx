"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { bookingsApi } from '@/lib/api';
import { Search, Filter, MoreHorizontal, CheckCircle, Clock, XCircle, ArrowUpRight, CheckSquare, Loader2 } from 'lucide-react';

interface BookingsTableProps {
    isFullMode?: boolean;
}

export default function BookingsTable({ isFullMode = false }: BookingsTableProps) {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState<'new' | 'active'>('new');
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        if (!user) return;
        setLoading(true);
        try {
            const token = await user.getIdToken();
            const data = activeTab === 'new'
                ? await bookingsApi.getNewRequests(token)
                : await bookingsApi.getAll(token);
            setBookings(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setBookings([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [user, activeTab]);

    const handlePromote = async (booking: any) => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            await bookingsApi.promote(token, {
                gsheetTimestamp: booking.gsheetTimestamp || booking.timestamp,
                serviceId: booking.serviceId,
                serviceName: booking.serviceName,
                date: booking.date,
                time: booking.time,
                patientName: booking.patientName,
                patientAge: booking.patientAge,
                patientGender: booking.patientGender,
                guardianName: booking.guardianName,
                relationship: booking.relationship,
                mobile: booking.mobile,
                alternateMobile: booking.alternateMobile,
                address: booking.address,
                city: booking.city,
                status: 'confirmed'
            });
            alert('Booking confirmed and promoted to Neon DB!');
            fetchData();
        } catch (error) {
            console.error('Error promoting booking:', error);
            alert('Failed to promote booking.');
        }
    };

    const getStatusBadge = (status: string) => {
        const s = (status || 'pending').toLowerCase();
        switch (s) {
            case 'pending': return <span className="badge bg-warning-light text-warning rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '10px' }}>PENDING</span>;
            case 'confirmed': return <span className="badge bg-success-light text-success rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '10px' }}>CONFIRMED</span>;
            case 'assigned': return <span className="badge bg-info-light text-info rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '10px' }}>ASSIGNED</span>;
            case 'completed': return <span className="badge bg-secondary-light text-secondary rounded-pill px-3 py-2 fw-bold" style={{ fontSize: '10px' }}>COMPLETED</span>;
            default: return <span className="badge bg-light text-dark rounded-pill px-3 py-2 fw-bold text-uppercase" style={{ fontSize: '10px' }}>{s}</span>;
        }
    };

    const filteredBookings = bookings.filter(b =>
        (b.patientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.serviceName || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="card border-0 shadow-sm rounded-2xl bg-white overflow-hidden">
            <div className="card-header bg-white border-0 p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    {/* Tabs */}
                    <div className="nav nav-pills bg-light p-1 rounded-pill shadow-xs" style={{ width: 'fit-content' }}>
                        <button
                            className={`nav-link rounded-pill px-4 py-2 small fw-bold transition-300 ${activeTab === 'new' ? 'active bg-teal shadow-sm text-white' : 'text-secondary'}`}
                            onClick={() => setActiveTab('new')}
                        >
                            NEW REQUESTS (GSheet)
                        </button>
                        <button
                            className={`nav-link rounded-pill px-4 py-2 small fw-bold transition-300 ${activeTab === 'active' ? 'active bg-teal shadow-sm text-white' : 'text-secondary'}`}
                            onClick={() => setActiveTab('active')}
                        >
                            ACTIVE BOOKINGS (Neon)
                        </button>
                    </div>

                    {/* Search */}
                    <div className="position-relative" style={{ width: isFullMode ? '300px' : '200px' }}>
                        <Search className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted" size={16} />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            className="form-control form-control-sm border-light bg-light ps-5 py-2 rounded-xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light bg-opacity-50">
                        <tr>
                            <th className="px-4 py-3 text-secondary small fw-bold text-uppercase border-0">Patient & Service</th>
                            <th className="py-3 text-secondary small fw-bold text-uppercase border-0">Schedule</th>
                            <th className="py-3 text-secondary small fw-bold text-uppercase border-0">Contact</th>
                            <th className="py-3 text-secondary small fw-bold text-uppercase border-0 text-center">Status</th>
                            <th className="py-3 text-secondary small fw-bold text-uppercase text-end px-4 border-0">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="text-center py-5">
                                    <Loader2 className="animate-spin text-teal mb-2" size={32} />
                                    <p className="text-muted small">Loading data...</p>
                                </td>
                            </tr>
                        ) : filteredBookings.length > 0 ? (
                            filteredBookings.map((booking, index) => (
                                <tr key={booking.id || booking.gsheetTimestamp || index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <td className="px-4">
                                        <div className="d-flex flex-column">
                                            <span className="fw-bold text-dark">{booking.patientName}</span>
                                            <span className="text-muted small d-flex align-items-center gap-1">
                                                <div className="bg-teal-light p-1 rounded-circle d-inline-flex" style={{ width: '18px', height: '18px' }}>
                                                    <Clock size={10} className="text-teal" />
                                                </div>
                                                {booking.serviceName}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex flex-column">
                                            <span className="text-dark small fw-semibold">{booking.date}</span>
                                            <span className="text-muted tiny">{booking.time}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-dark small fw-medium">{booking.mobile}</div>
                                        <div className="text-muted tiny">{booking.city}</div>
                                    </td>
                                    <td className="text-center">{getStatusBadge(booking.status)}</td>
                                    <td className="text-end px-4">
                                        {activeTab === 'new' ? (
                                            <button
                                                onClick={() => handlePromote(booking)}
                                                className="btn btn-teal-600 btn-sm rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center gap-2 transition-300"
                                            >
                                                <CheckSquare size={14} />
                                                <span className="tiny">PROMOTE</span>
                                            </button>
                                        ) : (
                                            <div className="dropdown">
                                                <button className="btn btn-light btn-sm rounded-circle p-2 border" type="button" data-bs-toggle="dropdown">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-xl overflow-hidden">
                                                    <li><button className="dropdown-item small py-2 fw-medium">View History</button></li>
                                                    <li><button className="dropdown-item small py-2 fw-medium">Assign Nurse</button></li>
                                                    <li><hr className="dropdown-divider opacity-50" /></li>
                                                    <li><button className="dropdown-item small py-2 text-danger fw-bold">Cancel</button></li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-5">
                                    <div className="text-muted small">No {activeTab === 'new' ? 'new requests' : 'active bookings'} found.</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isFullMode && filteredBookings.length > 0 && (
                <div className="card-footer bg-white border-top border-light p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="text-secondary tiny">Showing <b>{filteredBookings.length}</b> of <b>{bookings.length}</b> entries</span>
                        <nav>
                            <ul className="pagination pagination-sm mb-0 gap-1">
                                <li className="page-item disabled"><span className="page-link border-0 bg-light rounded-pill px-3">Prev</span></li>
                                <li className="page-item active"><span className="page-link border-0 bg-teal rounded-pill px-3 shadow-sm">1</span></li>
                                <li className="page-item"><span className="page-link border-0 text-teal rounded-pill px-3">Next</span></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}
