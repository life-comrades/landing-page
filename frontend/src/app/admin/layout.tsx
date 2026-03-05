'use client';

import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Topbar from '@/components/admin/Topbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute requiredRole="ADMIN">
            <div className="d-flex min-vh-100">
                {/* Fixed Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <div className="flex-grow-1" style={{ marginLeft: '256px' }}>
                    <Topbar />
                    <main className="p-4 p-md-5 animate-fade-in">
                        <div className="container-fluid px-0" style={{ maxWidth: '1400px' }}>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
}
