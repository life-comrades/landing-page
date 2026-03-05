'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import {
    LayoutDashboard,
    FileText,
    Users,
    UserRound,
    UserPlus,
    ClipboardList,
    Calendar,
    CreditCard,
    BarChart2,
    Settings,
    ChevronRight,
    LogOut
} from 'lucide-react';

const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Bookings', icon: FileText, href: '/admin/bookings' },
    { name: 'Patients', icon: Users, href: '/admin/patients' },
    { name: 'Nurses', icon: UserRound, href: '/admin/nurses' },
    { name: 'Applications', icon: UserPlus, href: '/admin/applications' },
    { name: 'Assignments', icon: ClipboardList, href: '/admin/assignments' },
    { name: 'Schedule', icon: Calendar, href: '/admin/schedule' },
    { name: 'Payments', icon: CreditCard, href: '/admin/payments' },
    { name: 'Reports', icon: BarChart2, href: '/admin/reports' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
];

const Sidebar = () => {
    const pathname = usePathname();
    const { user } = useAuth();

    return (
        <aside className="position-fixed top-0 start-0 z-3 bg-white border-end border-light d-flex flex-column vh-100 shadow-sm" style={{ width: '256px' }}>
            {/* Logo Section */}
            <div className="p-4 d-flex align-items-center gap-3 border-bottom border-light">
                <div className="bg-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <img src="/logo.png" alt="Life Comrades" className="img-fluid" />
                </div>
                <div>
                    <h1 className="h6 mb-0 fw-bold text-dark" style={{ fontSize: '15px' }}>Life Comrades</h1>
                    <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Chennai Nursing</p>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow-1 px-3 mt-4 overflow-auto">
                <ul className="nav nav-pills flex-column gap-1 list-unstyled">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href || (item.href === '/admin' && pathname === '/admin');
                        const isBookings = item.name === 'Bookings' && pathname.startsWith('/admin/bookings');
                        const highlight = isActive || isBookings;

                        return (
                            <li key={item.name} className="nav-item">
                                <Link
                                    href={item.href}
                                    className={`nav-link d-flex align-items-center justify-content-between px-3 py-2 rounded-xl transition-300 border-0 ${highlight
                                        ? 'bg-teal-50 text-teal-600 fw-bold shadow-xs'
                                        : 'text-secondary bg-transparent'
                                        }`}
                                >
                                    <div className="d-flex align-items-center gap-3">
                                        <item.icon size={18} strokeWidth={highlight ? 2 : 1.5} />
                                        <span>{item.name}</span>
                                    </div>
                                    {item.name === 'Bookings' && (
                                        <ChevronRight size={14} className={`transition-300 ${isBookings || isActive ? 'rotate-90' : ''}`} />
                                    )}
                                </Link>
                                {item.name === 'Bookings' && highlight && (
                                    <ul className="nav flex-column mt-1 ms-4 gap-0 list-unstyled">
                                        <li>
                                            <Link href="/admin/bookings" className={`nav-link py-2 ps-4 border-0 bg-transparent ${pathname === '/admin/bookings' ? 'text-teal-600 fw-bold' : 'text-muted'}`} style={{ fontSize: '13px' }}>
                                                All Bookings
                                            </Link>
                                        </li>
                                        {['New Requests', 'Assigned', 'In Progress', 'Completed', 'Cancelled'].map(sub => (
                                            <li key={sub}>
                                                <Link href="#" className="nav-link py-2 ps-4 text-muted bg-transparent border-0 text-uppercase tracking-tight" style={{ fontSize: '12px' }}>{sub}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Admin Profile */}
            <div className="p-4 border-top border-light mt-auto bg-light bg-opacity-25">
                <div className="d-flex align-items-center gap-3 px-2 py-2 mb-2">
                    <div className="bg-teal-600 rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg border border-2 border-white" style={{ width: '40px', height: '40px', fontSize: '13px' }}>
                        {user?.displayName ? user.displayName.split(' ').map((n: any) => n[0]).join('').toUpperCase() : 'AD'}
                    </div>
                    <div className="flex-grow-1 min-width-0 overflow-hidden">
                        <h4 className="h6 mb-0 fw-semibold text-dark text-truncate">{user?.displayName || 'Admin User'}</h4>
                        <p className="mb-0 text-muted text-truncate" style={{ fontSize: '11px' }}>{user?.email || 'admin@carehome.in'}</p>
                    </div>
                </div>
                <button
                    onClick={() => import('@/lib/firebase').then(({ auth }) => auth.signOut())}
                    className="btn btn-link link-secondary d-flex align-items-center gap-2 w-100 px-2 py-2 text-decoration-none transition-300 hover-text-danger"
                >
                    <LogOut size={16} />
                    <span className="small fw-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
