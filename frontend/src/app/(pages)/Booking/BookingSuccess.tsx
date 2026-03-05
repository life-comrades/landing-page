import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { BookingState } from '../../../types';
import { formatTimeTo12H } from '../../../lib/utils';

interface Props {
  data?: BookingState;
}

export const BookingSuccess: React.FC<Props> = ({ data }) => {
  return (
    <main className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4 shadow" style={{ width: '80px', height: '80px' }}>
            <Check className="text-white" size={40} strokeWidth={3} />
          </div>
          <h1 className="display-5 fw-bold text-dark mb-3">
            Your booking has been successfully submitted
          </h1>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '500px' }}>
            Our team will review the details and assign a qualified nurse shortly.
            You will receive a confirmation call or message soon.
          </p>
        </div>

        <div className="d-flex flex-column gap-4">
          {/* Summary Box */}
          <div className="bg-white border rounded p-4">
            <h5 className="fw-bold mb-3 border-bottom pb-2">Booking Details</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <p className="mb-1 fw-bold">Service</p>
                <p className="text-secondary">{data?.serviceName || '—'}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1 fw-bold">Date & Time</p>
                <p className="text-secondary">{data?.date || '—'} — {formatTimeTo12H(data?.time)}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1 fw-bold">City</p>
                <p className="text-secondary">{data?.city || 'Chennai'}</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1 fw-bold">Patient</p>
                <p className="text-secondary">{data?.patientName || '—'}</p>
              </div>
            </div>
          </div>

          {/* Steps Box */}
          <div className="bg-white border rounded p-4">
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-dark fw-medium">
              <li className="d-flex align-items-start gap-2"><span>•</span> Our care coordinator will contact you to confirm details</li>
              <li className="d-flex align-items-start gap-2"><span>•</span> A suitable nurse will be assigned based on availability</li>
              <li className="d-flex align-items-start gap-2"><span>•</span> You will receive service confirmation before the visit</li>
            </ul>
          </div>

          {/* Support Box */}
          <div className="bg-white border rounded p-5 text-center">
            <h3 className="h5 fw-bold text-dark mb-4">If you have any questions or need to make changes, contact us:</h3>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Link href="/contact" className="text-dark fw-bold text-decoration-underline link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover">Call Support</Link>
              <Link href="/contact" className="text-dark fw-bold text-decoration-underline link-offset-2 link-underline-opacity-100 link-underline-opacity-100-hover">WhatsApp Support</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};