import React from 'react';
import { getISRData } from '@/lib/api';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content } = await getISRData();
    const contactMetadata = content.pagesMetadata?.contact || content.globalMetadata;
    return {
        title: contactMetadata.title,
        description: contactMetadata.description,
        keywords: contactMetadata.keywords,
    };
}

export default async function ContactPage() {
    const { content } = await getISRData();
    const { contact, companyName } = content;

    return (
        <main className="bg-light min-vh-100 pb-5">
            <section className="bg-white border-bottom py-5">
                <div className="container">
                    <h1 className="display-5 fw-bold text-dark mb-3">Contact & Support</h1>
                    <p className="text-secondary">We're here to help you with service details, bookings, and general enquiries.<br />Our team is available to assist you across {contact.cities[0]}.</p>
                </div>
            </section>

            <div className="container py-5" style={{ marginTop: '-2rem' }}>
                <div className="row g-4 mb-5 position-relative z-1">
                    <div className="col-md-4">
                        <div className="bg-dark text-white p-4 rounded shadow">
                            <h3 className="h6 fw-bold text-uppercase text-secondary mb-2">Call Us</h3>
                            <p className="h4 fw-bold mb-3">{contact.phone}</p>
                            <p className="small text-secondary mb-0">Available: 9 AM – 7 PM</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-dark text-white p-4 rounded shadow">
                            <h3 className="h6 fw-bold text-uppercase text-secondary mb-2">WhatsApp Support</h3>
                            <p className="h4 fw-bold mb-3">{contact.phone}</p>
                            <p className="small text-secondary mb-0">Quick assistance and updates</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-dark text-white p-4 rounded shadow">
                            <h3 className="h6 fw-bold text-uppercase text-secondary mb-2">Email Us</h3>
                            <p className="h4 fw-bold mb-3">{contact.email}</p>
                            <p className="small text-secondary mb-0">Response within 24 hours</p>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm p-4 p-md-5 mb-5">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-bold text-dark">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-dark">Mobile Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold text-dark">Email Address</label>
                                <input type="email" className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6 d-flex flex-column">
                            <div className="mb-4 flex-grow-1">
                                <label className="form-label fw-bold text-dark">Message</label>
                                <textarea className="form-control h-100" style={{ minHeight: '150px' }}></textarea>
                            </div>
                            <button className="btn btn-primary fw-bold px-4 py-2 align-self-start">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded border mb-4">
                    <h3 className="h6 fw-bold text-dark mb-2">{companyName} Health Care Pvt Ltd</h3>
                    <p className="text-muted mb-3">{contact.address}<br />India</p>
                    <p className="fw-medium text-dark mb-0">Service availability: Across {contact.cities[0]}</p>
                </div>

                <div className="bg-body-secondary p-3 rounded text-secondary small fw-medium">
                    For medical emergencies, please contact local emergency services.<br />This platform does not replace emergency care.
                </div>
            </div>
        </main>
    );
}
