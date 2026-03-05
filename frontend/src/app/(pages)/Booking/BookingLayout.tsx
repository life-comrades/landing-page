import React from 'react';
import { BookingState } from '../../../types';

import { formatTimeTo12H } from '../../../lib/utils';

interface BookingLayoutProps {
  children: React.ReactNode;
  title: string;
  step: string;
  bookingData: BookingState;
}

export const BookingLayout: React.FC<BookingLayoutProps> = ({ children, title, step, bookingData }) => {
  return (
    <main className="bg-light min-vh-100">
      {/* Header */}
      <div className="bg-primary py-5">
        <div className="container">
          <h1 className="display-5 fw-bold text-white mb-2">{title}</h1>
          <p className="text-white-50 lead mb-0">{step}</p>
        </div>
      </div>

      <div className="container pb-5" style={{ marginTop: '-2rem' }}>
        <div className="row g-4">
          {/* Main Content Card */}
          <div className="col-lg-8">
            <div className="bg-white rounded shadow-sm border p-4 p-lg-5" style={{ minHeight: '400px' }}>
              {children}
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="col-lg-4">
            <div className="bg-primary text-white rounded p-4 shadow sticky-top" style={{ top: '6rem' }}>
              <h3 className="h5 fw-bold mb-4 border-bottom border-white border-opacity-25 pb-3">Booking Summary</h3>
              <div className="d-flex flex-column gap-3 small">
                <div>
                  <span className="opacity-75 d-block text-uppercase" style={{ fontSize: '0.7rem' }}>Service</span>
                  <span className="fw-medium">{bookingData.serviceName || '—'}</span>
                </div>
                <div>
                  <span className="opacity-75 d-block text-uppercase" style={{ fontSize: '0.7rem' }}>City</span>
                  <span className="fw-medium">{bookingData.city}</span>
                </div>
                <div>
                  <span className="opacity-75 d-block text-uppercase" style={{ fontSize: '0.7rem' }}>Date & Time</span>
                  <span className="fw-medium">
                    {bookingData.date || '—'} {bookingData.time ? `at ${formatTimeTo12H(bookingData.time)}` : ''}
                  </span>
                </div>
                {bookingData.patientName && (
                  <div className="pt-2 border-top border-white border-opacity-25 mt-2">
                    <span className="opacity-75 d-block text-uppercase" style={{ fontSize: '0.7rem' }}>Patient</span>
                    <span className="fw-medium">{bookingData.patientName}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-top border-white border-opacity-25">
                <p className="opacity-75 mb-1" style={{ fontSize: '0.75rem' }}>Note:</p>
                <p className="mb-0" style={{ fontSize: '0.75rem' }}>
                  Final details will be confirmed before booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};