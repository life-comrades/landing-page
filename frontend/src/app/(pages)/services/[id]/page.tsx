import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ChevronRight, Calendar, Clock } from 'lucide-react';
import { getISRData, getServicesMap } from '@/lib/api';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { services: servicesArray } = await getISRData();
    const services = getServicesMap(servicesArray);
    const service = services[id];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.metadata?.title || service.title,
        description: service.metadata?.description || service.description,
        keywords: service.metadata?.keywords,
    };
}

export async function generateStaticParams() {
    const { services: servicesArray } = await getISRData();
    return servicesArray
        .filter((s) => s && typeof s.id === 'string' && s.id.trim() !== '')
        .map((s) => ({
            id: s.id,
        }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { services: servicesArray } = await getISRData();
    const servicesMap = getServicesMap(servicesArray);
    const service = servicesMap[id];

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-white min-vh-100 pb-5">
            {/* Services Sub-Navbar */}
            <div className="bg-white border-bottom sticky-top shadow-sm" style={{ top: '95px', zIndex: 1010, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
                <div className="container">
                    <div className="d-flex overflow-x-auto no-scrollbar py-2 gap-4 align-items-center">
                        <span className="text-secondary small fw-bold text-nowrap border-end pe-4 d-none d-md-block">OTHER SERVICES:</span>
                        {servicesArray.map((s, idx) => (
                            <Link
                                key={s.id || idx}
                                href={`/services/${s.id}`}
                                className={`text-decoration-none small fw-bold text-nowrap py-2 transition-all ${id === s.id
                                    ? 'text-primary border-bottom border-2 border-primary'
                                    : 'text-secondary hover-primary'
                                    }`}
                                style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}
                            >
                                {s.title.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-5">
                    {/* Main Content Area (Left) */}
                    <div className="col-lg-8">
                        {/* About This Service */}
                        <section className="mb-5">
                            <h1 className="h2 fw-bold text-dark mb-4" style={{ color: '#1E293B' }}>About This Service</h1>
                            <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                                {service.about}
                            </p>
                            <p className="text-secondary mb-5" style={{ lineHeight: '1.7' }}>
                                {service.aboutDetails}
                            </p>

                            <h3 className="h5 fw-bold text-dark mb-3">Who This Service is For</h3>
                            <ul className="list-unstyled text-secondary mb-5 ps-2">
                                {service.whoItIsFor?.map((item, idx) => (
                                    <li key={idx} className="mb-2">• {item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Features (Our Nurses/Team) */}
                        <section className="mb-5">
                            <h3 className="h5 fw-bold text-dark mb-4">Why Choose Our {service.title} Service</h3>
                            <div className="row g-3">
                                {service.features?.map((feature, idx) => (
                                    <div key={idx} className="col-12">
                                        <div className="d-flex align-items-center gap-2 text-secondary">
                                            <Check className="text-dark" size={18} strokeWidth={3} />
                                            <span>{feature}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Preview */}
                        <section className="mb-5">
                            <h3 className="h5 fw-bold text-dark mb-4">Frequently Asked Questions</h3>
                            <div className="mb-4">
                                <p className="fw-bold text-dark mb-1 small">{service.faq?.question}</p>
                                <p className="text-secondary small" style={{ lineHeight: '1.6' }}>
                                    {service.faq?.answer}
                                </p>
                            </div>
                        </section>

                        {/* Testimonial Box */}
                        <section>
                            <div className="bg-light p-5 rounded-1 border-0">
                                <h3 className="h5 fw-bold text-dark mb-4">What Families Say</h3>
                                <p className="fst-italic text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                                    "{service.testimonial?.quote}"
                                </p>
                                <footer className="text-secondary small">— {service.testimonial?.author}</footer>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Summary (Right) */}
                    <div className="col-lg-4">
                        <div className="card shadow-sm border border-secondary-subtle rounded-1 sticky-top transition-all" style={{ top: '155px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                            <div className="card-body p-4">
                                <h2 className="h4 fw-bold text-dark mb-2">{service.title}</h2>
                                <div className="text-muted small mb-4 pb-4 border-bottom">
                                    <span className="me-2">Professional Care</span> • <span className="ms-2">Personalized Support</span>
                                </div>

                                <Link
                                    href={{ pathname: '/book', query: { service: service.id } }}
                                    className="btn btn-primary w-100 py-2 fw-bold mb-4 d-flex align-items-center justify-content-center gap-2"
                                    style={{ backgroundColor: '#0D9488', border: 'none' }}
                                >
                                    Book Now <ChevronRight size={18} />
                                </Link>

                                <div className="d-flex flex-column gap-3">
                                    <Link href="/areas" className="text-decoration-underline text-primary small fw-medium">View Areas We Serve</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
