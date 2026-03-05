"use client";

import React, { useState } from 'react';

interface JobApplicationFormProps {
    jobId: string;
    jobTitle: string;
}

export default function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        tenthStatus: 'Passed',
        tenthMarks: '',
        twelfthStatus: 'Passed',
        twelfthMarks: '',
        nursingQualification: 'ANM',
        isGovtRegistered: 'No',
        registrationNumber: '',
        experienceLevel: 'Fresher',
        currentAddress: '',
        nativeAddress: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (formData.fullName.length < 3) {
            alert('Full Name must be at least 3 characters.');
            return;
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            alert('Contact Number must be exactly 10 digits.');
            return;
        }

        setSubmitting(true);

        try {
            // Simulate API call or relative logic
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Job Application Submitted:', {
                jobId,
                jobTitle,
                ...formData,
                isGovtRegistered: formData.isGovtRegistered === 'Yes'
            });

            setSubmitting(false);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again.');
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-4">
                <div className="display-4 text-success mb-3">
                    <i className="bi bi-check-circle-fill"></i>
                </div>
                <h4 className="fw-bold">Application Sent!</h4>
                <p className="text-secondary">Thank you for applying. Our HR team will review your application and get back to you soon.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-primary mt-3"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        className="form-control"
                        placeholder="Min 3 characters"
                        value={formData.fullName}
                        onChange={handleChange}
                        minLength={3}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label fw-bold small text-dark">Contact Number</label>
                    <input
                        type="tel"
                        name="mobile"
                        required
                        className="form-control"
                        placeholder="10-digit mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        pattern="\d{10}"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label fw-bold small text-dark">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        placeholder="Standard format"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label fw-bold small text-dark">10th Status</label>
                    <select name="tenthStatus" className="form-select" value={formData.tenthStatus} onChange={handleChange}>
                        <option value="Passed">Passed</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
                {formData.tenthStatus === 'Passed' && (
                    <div className="col-md-6">
                        <label className="form-label fw-bold small text-dark">10th Marks (%)</label>
                        <input
                            type="text"
                            name="tenthMarks"
                            required
                            className="form-control"
                            placeholder="e.g. 85"
                            value={formData.tenthMarks}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="col-md-6">
                    <label className="form-label fw-bold small text-dark">12th Status</label>
                    <select name="twelfthStatus" className="form-select" value={formData.twelfthStatus} onChange={handleChange}>
                        <option value="Passed">Passed</option>
                        <option value="Failed">Failed</option>
                        <option value="Diploma">Diploma</option>
                    </select>
                </div>
                {formData.twelfthStatus === 'Passed' && (
                    <div className="col-md-6">
                        <label className="form-label fw-bold small text-dark">12th Marks (%)</label>
                        <input
                            type="text"
                            name="twelfthMarks"
                            required
                            className="form-control"
                            placeholder="e.g. 90"
                            value={formData.twelfthMarks}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Nursing Qualification</label>
                    <select name="nursingQualification" className="form-select" value={formData.nursingQualification} onChange={handleChange}>
                        <option value="ANM">ANM</option>
                        <option value="GNM">GNM</option>
                        <option value="B.Sc Nursing">B.Sc Nursing</option>
                        <option value="Post Basic B.Sc">Post Basic B.Sc</option>
                        <option value="M.Sc Nursing">M.Sc Nursing</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark d-block">Govt. Registered?</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isGovtRegistered" id="regYes" value="Yes" checked={formData.isGovtRegistered === 'Yes'} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="regYes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="isGovtRegistered" id="regNo" value="No" checked={formData.isGovtRegistered === 'No'} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="regNo">No</label>
                    </div>
                </div>

                {formData.isGovtRegistered === 'Yes' && (
                    <div className="col-12">
                        <label className="form-label fw-bold small text-dark">Registration Number</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            required
                            className="form-control"
                            placeholder="Enter number"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Experience Level</label>
                    <select name="experienceLevel" className="form-select" value={formData.experienceLevel} onChange={handleChange}>
                        <option value="Fresher">Fresher</option>
                        <option value="<1 Year">&lt;1 Year</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5+ Years">5+ Years</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Current Address</label>
                    <textarea
                        name="currentAddress"
                        required
                        className="form-control"
                        rows={2}
                        placeholder="Street address + City"
                        value={formData.currentAddress}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Native Address</label>
                    <textarea
                        name="nativeAddress"
                        required
                        className="form-control"
                        rows={2}
                        placeholder="Permanent home address"
                        value={formData.nativeAddress}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="col-12">
                    <label className="form-label fw-bold small text-dark">Message (Optional)</label>
                    <textarea
                        name="message"
                        className="form-control"
                        rows={2}
                        placeholder="Additional info..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-100 fw-bold py-2 mt-4"
            >
                {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
        </form>
    );
}
