"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroContent, Service, ContactInfo } from "@/types";

interface HeroSectionProps {
    heroData: HeroContent;
    services: Service[];
    cities: string[];
}

export default function HeroSection({ heroData, services, cities }: HeroSectionProps) {
    const images = [
        '/images/slides/1.jpg',
        '/images/slides/2.jpg',
        '/images/slides/3.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 500); // Half second for transition
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="position-relative overflow-hidden" style={{ minHeight: '600px', display: 'flex', alignItems: 'center' }}>
            {/* Background Images with Fade Transition & Gradient Overlay */}
            <div className="position-absolute w-100 h-100 top-0 start-0 z-0 text-white">
                {images.map((img, index) => (
                    <div
                        key={`${img}-${index}`}
                        className="position-absolute w-100 h-100 top-0 start-0 transition-opacity"
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            zIndex: index === currentImageIndex ? 1 : 0,
                        }}
                    />
                ))}
                <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                        background: 'linear-gradient(90deg, rgba(13, 148, 136, 1) 0%, rgba(13, 148, 136, 0.8) 20%, rgba(13, 148, 136, 0) 100%)',
                        zIndex: 2
                    }}
                ></div>
            </div>

            <div className="container position-relative z-3 py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 text-white">
                        <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            {heroData.title}
                        </h1>
                        <p className="lead opacity-90 mb-0" style={{ fontSize: '1.2rem', maxWidth: '500px', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                            {heroData.subtitle}
                        </p>
                    </div>

                    <div className="col-lg-6">
                        {/* Quick Booking Widget */}
                        <div className="card shadow-lg border-0 ms-auto" style={{ maxWidth: '450px', borderRadius: '12px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                            <div className="card-body p-4 p-md-5">
                                <h5 className="fw-bold mb-4 text-dark">Quick Booking</h5>

                                <div className="mb-4">
                                    <label className="form-label mb-2 fw-semibold text-muted small">Select City</label>
                                    <select className="form-select border-secondary-subtle py-2 bg-white">
                                        {cities.map(city => (
                                            <option key={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label mb-2 fw-semibold text-muted small">Select Service</label>
                                        <select className="form-select border-secondary-subtle py-2 bg-white">
                                            {services.map((s, idx) => (
                                                <option key={s.id || idx}>{s.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <Link href="/book" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm" style={{ backgroundColor: '#0D9488', border: 'none' }}>
                                            Book Now →
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-muted mt-4 mb-0 text-center" style={{ fontSize: '0.75rem' }}>Available across {cities[0]} with verified professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




