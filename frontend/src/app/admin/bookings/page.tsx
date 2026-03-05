import React from 'react';
import BookingsTable from '@/components/admin/BookingsTable';

export const metadata = {
    title: 'Bookings Management - Life Comrades Admin',
    description: 'Manage and assign nursing service bookings.',
};

export default function BookingsManagementPage() {
    return (
        <div className="container-fluid px-0 animate-fade-in">
            <div className="mb-4">
                <h1 className="h4 fw-bold text-dark">Bookings Management</h1>
                <p className="text-muted small">Manage all service requests and assignments</p>
            </div>
            <BookingsTable isFullMode={true} />
        </div>
    );
}
