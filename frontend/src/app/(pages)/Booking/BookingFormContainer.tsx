"use client";

import React, { useState } from 'react';
import { BookingStep1 } from './BookingStep1';
import { BookingStep2 } from './BookingStep2';
import { BookingStep3 } from './BookingStep3';
import { BookingSuccess } from './BookingSuccess';
import { BookingState, Service } from '../../../types';
import { bookingsApi } from '../../../lib/api';

interface Props {
    services: Service[];
}

export const BookingFormContainer: React.FC<Props> = ({ services }) => {
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [bookingData, setBookingData] = useState<BookingState>({
        serviceId: '',
        serviceName: '',
        city: ['Chennai'],
        date: '',
        time: '',
        patientName: '',
        patientAge: '',
        patientGender: '',
        guardianName: '',
        relationship: '',
        mobile: '',
        alternateMobile: '',
        address: '',
    });

    const updateData = (updates: Partial<BookingState>) => {
        setBookingData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleConfirm = async () => {
        setSubmitting(true);
        setSubmitError(null);
        try {
            await bookingsApi.create({
                ...bookingData,
                city: Array.isArray(bookingData.city) ? bookingData.city[0] : bookingData.city,
            });
            nextStep();
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            setSubmitError(message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {step === 1 && <BookingStep1 data={bookingData} updateData={updateData} onNext={nextStep} services={services} />}
            {step === 2 && <BookingStep2 data={bookingData} updateData={updateData} onNext={nextStep} onBack={prevStep} />}
            {step === 3 && (
                <>
                    {submitError && (
                        <div className="container pt-4">
                            <div className="alert alert-danger" role="alert">
                                ⚠️ {submitError}
                            </div>
                        </div>
                    )}
                    <BookingStep3
                        data={bookingData}
                        onConfirm={handleConfirm}
                        onEdit={(s: number) => setStep(s)}
                        submitting={submitting}
                    />
                </>
            )}
            {step === 4 && <BookingSuccess data={bookingData} />}
        </>
    );
}
