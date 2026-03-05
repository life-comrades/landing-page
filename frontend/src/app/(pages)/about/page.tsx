import React from 'react';
import { Target, Eye, Users, Handshake, Calendar } from 'lucide-react';
import { getISRData } from '@/lib/api';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content } = await getISRData();
    const aboutMetadata = content.pagesMetadata?.about || content.globalMetadata;
    return {
        title: aboutMetadata.title,
        description: aboutMetadata.description,
        keywords: aboutMetadata.keywords,
    };
}

export default async function AboutPage() {
    const { content } = await getISRData();
    const { mission, vision, founders, partners, events } = content.aboutPage ?? {};

    return (
        <main className="bg-light min-vh-100">
            {/* Hero Section */}
            <section className="bg-dark text-white py-5 position-relative overflow-hidden">
                <div className="container py-4 position-relative z-1">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold mb-3">About {content.companyName}</h1>
                            <p className="lead text-secondary">
                                Empowering health and happiness through compassionate home-based care.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 bg-light" style={{ height: '3rem', clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
            </section>

            {/* Mission & Vision */}
            <section className="py-5 container">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100 p-4 p-lg-5 transition-300 hover-translate-y">
                            <div className="bg-primary-subtle p-3 rounded-circle d-inline-flex mb-4">
                                <Target className="text-primary" size={32} />
                            </div>
                            <h2 className="h3 fw-bold mb-3">Our Mission</h2>
                            <p className="text-secondary fs-5 leading-relaxed mb-0">
                                {mission}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm h-100 p-4 p-lg-5 transition-300 hover-translate-y">
                            <div className="bg-success-subtle p-3 rounded-circle d-inline-flex mb-4">
                                <Eye className="text-success" size={32} />
                            </div>
                            <h2 className="h3 fw-bold mb-3">Our Vision</h2>
                            <p className="text-secondary fs-5 leading-relaxed mb-0">
                                {vision}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-5 bg-white border-top border-bottom">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                            <Users className="text-primary" size={24} />
                            <span className="text-primary fw-bold text-uppercase tracking-wider small">The Leadership</span>
                        </div>
                        <h2 className="display-6 fw-bold text-dark">Meet Our Founders</h2>
                    </div>

                    <div className="row justify-content-center g-4">
                        {founders?.map((founder, index) => (
                            <div key={index} className="col-lg-10">
                                <div className="card border-0 shadow-sm overflow-hidden p-0">
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-4">
                                            <img
                                                src={founder.image}
                                                alt={founder.name}
                                                className="img-fluid h-100 w-100 object-fit-cover"
                                                style={{ minHeight: '300px' }}
                                            />
                                        </div>
                                        <div className="col-md-8 p-4 p-lg-5">
                                            <h3 className="h3 fw-bold mb-1">{founder.name}</h3>
                                            <p className="text-primary fw-semibold mb-4">{founder.role}</p>
                                            <p className="text-secondary fs-5 mb-0 italic">
                                                "{founder.bio}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                            <Handshake className="text-primary" size={24} />
                            <span className="text-primary fw-bold text-uppercase tracking-wider small">Collaboration</span>
                        </div>
                        <h2 className="h2 fw-bold text-dark">Our Trusted Partners</h2>
                    </div>

                    <div className="row justify-content-center align-items-center g-4 grayscale-img opacity-75">
                        {partners?.map((partner, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-2 text-center">
                                <div className="p-3 bg-white rounded shadow-sm">
                                    <img src={partner.logo} alt={partner.name} className="img-fluid" style={{ maxHeight: '40px' }} />
                                    <p className="small fw-bold text-dark mb-0 mt-2">{partner.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-5 bg-white border-top">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                            <Calendar className="text-primary" size={24} />
                            <span className="text-primary fw-bold text-uppercase tracking-wider small">Community Engagement</span>
                        </div>
                        <h2 className="display-6 fw-bold text-dark">Events & Impact</h2>
                    </div>

                    <div className="row g-4">
                        {events?.map((event, index) => (
                            <div key={index} className="col-md-6">
                                <div className="card border-0 shadow-sm h-100 overflow-hidden hover-shadow transition-300">
                                    <div className="position-relative" style={{ height: '240px' }}>
                                        <img src={event.image} alt={event.title} className="img-fluid w-100 h-100 object-fit-cover" />
                                        <div className="position-absolute top-0 start-0 p-3">
                                            <span className="badge bg-primary px-3 py-2">{event.date}</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-4">
                                        <h3 className="h4 fw-bold mb-3">{event.title}</h3>
                                        <p className="text-secondary mb-0">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-primary text-white text-center">
                <div className="container py-4">
                    <h2 className="display-6 fw-bold mb-4">Join Our Journey to Better Healthcare</h2>
                    <p className="lead opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        Whether you need care or want to join our team, we're here to make a difference.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <a href="/contact" className="btn btn-light btn-lg px-5 fw-bold">Contact Us</a>
                        <a href="/jobs" className="btn btn-outline-light btn-lg px-5 fw-bold">View Openings</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
