"use client";

import React from 'react';
import { BookingLayout } from './BookingLayout';
import { BookingState } from '../../../types';

interface Props {
  data: BookingState;
  updateData: (updates: Partial<BookingState>) => void;
  onNext: () => void;
  services?: any[];
}

export const BookingStep1: React.FC<Props> = ({ data, updateData, onNext, services }) => {
  const handleNext = () => {
    if (data.serviceName && data.date && data.time) {
      onNext();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <BookingLayout
      title="Book a Service"
      step="step 1 of 4 - Select Service and schedule"
      bookingData={data}
    >
      <div className="py-3">
        <div className="d-flex flex-column gap-4 mb-5">
          <div className="row align-items-center">
            <label className="col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5">service</label>
            <div className="col-md-9">
              <select
                className="form-select form-select-lg"
                value={data.serviceName}
                onChange={(e) => updateData({ serviceName: e.target.value })}
              >
                <option value="" disabled>select service</option>
                {services?.map(service => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
                {!services && (
                  <>
                    <option value="Home Nursing">Home Nursing</option>
                    <option value="ICU at Home">ICU at Home</option>
                    <option value="Elder Care">Elder Care</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="row align-items-center">
            <label className="col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5">date</label>
            <div className="col-md-9">
              <input
                type="date"
                className="form-control form-control-lg"
                value={data.date}
                onChange={(e) => updateData({ date: e.target.value })}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <label className="col-md-3 col-form-label text-md-end fw-medium text-secondary fs-5">time</label>
            <div className="col-md-9">
              <div className="d-flex gap-2">
                {/* Hour Select */}
                <select
                  className="form-select form-select-lg"
                  value={data.time ? (parseInt(data.time.split(':')[0]) % 12 || 12).toString().padStart(2, '0') : "09"}
                  onChange={(e) => {
                    const h12 = parseInt(e.target.value);
                    const [oldH, oldM] = (data.time || "09:00").split(':');
                    const isPM = parseInt(oldH) >= 12;
                    let newH = h12;
                    if (isPM && h12 < 12) newH += 12;
                    if (!isPM && h12 === 12) newH = 0;
                    updateData({ time: `${newH.toString().padStart(2, '0')}:${oldM}` });
                  }}
                >
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>

                {/* Minute Select */}
                <select
                  className="form-select form-select-lg"
                  value={data.time ? data.time.split(':')[1] : "00"}
                  onChange={(e) => {
                    const newM = e.target.value;
                    const h24 = (data.time || "09:00").split(':')[0];
                    updateData({ time: `${h24}:${newM}` });
                  }}
                >
                  {['00', '15', '30', '45'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>

                {/* AM/PM Select */}
                <select
                  className="form-select form-select-lg"
                  value={data.time ? (parseInt(data.time.split(':')[0]) >= 12 ? 'PM' : 'AM') : "AM"}
                  onChange={(e) => {
                    const isPM = e.target.value === 'PM';
                    const [oldH, oldM] = (data.time || "09:00").split(':');
                    let h12 = parseInt(oldH) % 12 || 12;
                    let newH = h12;
                    if (isPM && h12 < 12) newH += 12;
                    if (!isPM && h12 === 12) newH = 0;
                    updateData({ time: `${newH.toString().padStart(2, '0')}:${oldM}` });
                  }}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="btn btn-primary w-100 py-3 fs-5 shadow-sm"
        >
          continue
        </button>
      </div>
    </BookingLayout>
  );
};











