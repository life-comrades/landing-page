"use client";

import React from 'react';
import { BookingLayout } from './BookingLayout';
import { BookingState } from '../../../types';

interface Props {
  data: BookingState;
  updateData: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const BookingStep2: React.FC<Props> = ({ data, updateData, onNext, onBack }) => {
  const handleNext = () => {
    // Basic validation could go here
    onNext();
  };

  return (
    <BookingLayout
      title="Patient Details"
      step="step 2 of 4 - Tell us about the patient"
      bookingData={data}
    >
      <div className="d-flex flex-column gap-4">
        {/* Patient Info Box */}
        <div className="border rounded p-4">
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label fw-bold text-dark">Patient Name</label>
              <input
                type="text"
                className="form-control"
                value={data.patientName}
                onChange={(e) => updateData({ patientName: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-bold text-dark">Patient Age</label>
              <input
                type="text"
                className="form-control"
                style={{ maxWidth: '100px' }}
                value={data.patientAge}
                onChange={(e) => updateData({ patientAge: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label className="form-label fw-bold text-dark d-block">Gender</label>
              <div className="d-flex gap-3">
                {['Male', 'Female', 'Other'].map(g => (
                  <div key={g} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id={`gender-${g}`}
                      checked={data.patientGender === g}
                      onChange={() => updateData({ patientGender: g })}
                    />
                    <label className="form-check-label" htmlFor={`gender-${g}`}>
                      {g}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guardian Info Box */}
        <div className="border rounded p-4 bg-light">
          <p className="small text-muted mb-3">Person responsible for coordination and communication.</p>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark small">Guardian Name</label>
              <input type="text" className="form-control form-control-sm"
                value={data.guardianName} onChange={(e) => updateData({ guardianName: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark small">Relationship to patient</label>
              <input type="text" className="form-control form-control-sm"
                value={data.relationship} onChange={(e) => updateData({ relationship: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark small">Mobile number</label>
              <input type="text" className="form-control form-control-sm"
                value={data.mobile} onChange={(e) => updateData({ mobile: e.target.value })} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold text-dark small">Alternate number</label>
              <input type="text" className="form-control form-control-sm"
                value={data.alternateMobile} onChange={(e) => updateData({ alternateMobile: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Address Box */}
        <div className="border rounded p-4">
          <div className="mb-0">
            <label className="form-label fw-bold text-dark">Address</label>
            <textarea
              className="form-control"
              rows={3}
              value={data.address}
              onChange={(e) => updateData({ address: e.target.value })}
            ></textarea>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="btn btn-primary w-100 py-3 fs-5 shadow-sm mt-3"
        >
          continue
        </button>
      </div>
    </BookingLayout>
  );
};