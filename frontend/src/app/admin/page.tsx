import React from 'react';
import StatsCards from '@/components/admin/StatsCards';
import BookingsTable from '@/components/admin/BookingsTable';
import UrgentAlerts from '@/components/admin/UrgentAlerts';
import AvailableNurses from '@/components/admin/AvailableNurses';

export const metadata = {
    title: 'Dashboard Overview - Life Comrades Admin',
    description: 'Manage bookings, patients, and nurses from the admin dashboard.',
};

export default function AdminDashboardPage() {
    return (
        <div className="w-full animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-[28px] font-extrabold text-gray-900 mb-1 tracking-tight">Dashboard Overview</h1>
                <p className="text-gray-400 text-[15px] font-medium">Chennai Home Nursing Operations</p>
            </div>

            <StatsCards />

            <div className="row g-4">
                {/* Main Content (Left Column) - Bookings Overview */}
                <div className="col-12 col-xl-9">
                    <BookingsTable />
                </div>

                {/* Sidebar Content (Right Column) - Alerts & Nurses */}
                <div className="col-12 col-xl-3">
                    <div className="d-flex flex-column gap-4">
                        <UrgentAlerts />
                        <AvailableNurses />
                    </div>
                </div>
            </div>
        </div>
    );
}
