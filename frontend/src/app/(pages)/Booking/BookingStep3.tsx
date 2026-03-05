"use client";

import React, { useState } from 'react';
import { BookingState } from '../../../types';
import { formatTimeTo12H } from '../../../lib/utils';

interface Props {
  data: BookingState;
  onConfirm: () => void;
  onEdit: (step: number) => void;
  submitting?: boolean;
}

export const BookingStep3: React.FC<Props> = ({ data, onConfirm, onEdit, submitting = false }) => {
  const [agreed, setAgreed] = useState(false);

  const handleConfirm = () => {
    if (agreed) {
      onConfirm();
    } else {
      alert('Please agree to the terms');
    }
  };

  const EditBtn = ({ step }: { step: number }) => (
    <button onClick={() => onEdit(step)} className="btn btn-link btn-sm text-decoration-underline text-secondary p-0">Edit</button>
  );

  return (
    <main className="bg-light min-vh-100">
      <div className="bg-primary py-5">
        <div className="container">
          <h1 className="display-5 fw-bold text-white mb-2">Review & Confirm</h1>
          <p className="text-white-50 lead mb-0">step 3 of 4 - Please review your booking details</p>
        </div>
      </div>

      <div className="container pb-5" style={{ marginTop: '-2rem' }}>
        <div className="row g-4">
          {/* Main Content Card */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {/* Service Summary */}
              <div className="bg-white rounded border p-4 d-flex justify-content-between align-items-start">
                <div className="small">
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Service:</span> {data.serviceName}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>City:</span> {data.city}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Date:</span> {data.date}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Time:</span> {formatTimeTo12H(data.time)}</p>
                </div>
                <EditBtn step={1} />
              </div>

              {/* Patient Summary */}
              <div className="bg-white rounded border p-4 d-flex justify-content-between align-items-start">
                <div className="small">
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Name:</span> {data.patientName}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Age:</span> {data.patientAge}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Gender:</span> {data.patientGender}</p>
                </div>
                <EditBtn step={2} />
              </div>

              {/* Guardian Summary */}
              <div className="bg-white rounded border p-4 d-flex justify-content-between align-items-start">
                <div className="small">
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Name:</span> {data.guardianName}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Relationship:</span> {data.relationship}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Mobile:</span> {data.mobile}</p>
                  <p className="mb-1"><span className="text-muted d-inline-block" style={{ width: '100px' }}>Alternate:</span> {data.alternateMobile}</p>
                </div>
                <EditBtn step={2} />
              </div>

              {/* Address Summary */}
              <div className="bg-white rounded border p-4 d-flex justify-content-between align-items-start" style={{ minHeight: '100px' }}>
                <div className="w-100">
                  <h4 className="h6 fw-normal text-secondary mb-2 text-uppercase">Address</h4>
                  <p className="mb-0 text-dark small">{data.address}</p>
                </div>
                <EditBtn step={2} />
              </div>

              {/* Confirm Button for Mobile */}
              <button
                onClick={handleConfirm}
                disabled={submitting}
                className="d-lg-none btn btn-primary w-100 py-3 fs-5 shadow-sm mt-3"
              >
                {submitting ? 'Submitting…' : 'Confirm Booking'}
              </button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="bg-primary text-white rounded p-4 shadow sticky-top d-flex flex-column" style={{ top: '6rem', minHeight: '400px' }}>
              <div className="flex-grow-1">
                <h3 className="h5 fw-bold mb-4">Service: {data.serviceName}</h3>
                <p className="mb-2">City: {data.city}</p>
                <p className="mb-2">Date & Time: {data.date}, {formatTimeTo12H(data.time)}</p>
                <p className="mb-2">Patient: {data.patientName}</p>
                <p className="mb-2">Guardian: {data.guardianName}</p>
              </div>

              <div className="mt-4 pt-4 border-top border-white border-opacity-25">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agreeCheck"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <label className="form-check-label small lh-sm" htmlFor="agreeCheck">
                    I confirm the details provided are accurate and agree to the terms.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Bar Desktop */}
        <div className="d-none d-lg-block mt-4">
          <button
            onClick={handleConfirm}
            disabled={!agreed || submitting}
            className="btn btn-primary w-100 py-3 fs-4 fw-medium shadow-sm"
          >
            {submitting ? (
              <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Submitting…</>
            ) : 'Confirm Booking'}
          </button>
        </div>
      </div>
    </main>
  );
};