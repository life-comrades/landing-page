'use client';

import React from 'react';
import { Search, Plus, Bell, Settings2 } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="navbar navbar-expand bg-white border-bottom border-light sticky-top px-4 py-2 shadow-sm d-flex align-items-center justify-content-between" style={{ height: '72px' }}>
            <div className="d-flex align-items-center gap-4 flex-grow-1">
                <div className="position-relative d-none d-md-block" style={{ width: '400px' }}>
                    <div className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for bookings, patients, or nurses..."
                        className="form-control border-light bg-light bg-opacity-50 ps-5 py-2 rounded-xl shadow-xs focus-border-teal-500"
                        style={{ fontSize: '14px' }}
                    />
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <button className="btn btn-link link-secondary p-2 position-relative hover-bg-light rounded-circle transition-300">
                    <Bell size={20} />
                    <span className="position-absolute translate-middle p-1 bg-teal-600 border border-white rounded-circle" style={{ top: '12px', right: '4px' }}></span>
                </button>
                <button className="btn btn-link link-secondary p-2 hover-bg-light rounded-circle transition-300">
                    <Settings2 size={20} />
                </button>
                <div className="vr mx-2 bg-secondary opacity-25" style={{ height: '24px' }}></div>
                <div className="d-flex align-items-center gap-3 ps-2 cursor-pointer hover-bg-light p-1 rounded-xl transition-300">
                    <div className="text-end d-none d-sm-block">
                        <p className="small fw-bold text-dark mb-0">Arun Santhosh</p>
                        <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Super Admin</p>
                    </div>
                    <div className="bg-teal-50 text-teal-600 rounded-circle d-flex align-items-center justify-content-center fw-bold border border-teal-100 shadow-sm" style={{ width: '40px', height: '40px', fontSize: '13px' }}>
                        AS
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
