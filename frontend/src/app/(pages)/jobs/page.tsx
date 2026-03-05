import React from 'react';
import { getISRData } from '@/lib/api';
import Link from 'next/link';

export const revalidate = 30;

export async function generateMetadata() {
    const { content } = await getISRData();
    const jobsMetadata = content.pagesMetadata?.jobs || content.globalMetadata;
    return {
        title: jobsMetadata.title,
        description: jobsMetadata.description,
        keywords: jobsMetadata.keywords,
    };
}

export default async function JobsPage() {
    const { jobs: JOBS_DATA } = await getISRData();

    return (
        <main className="bg-light min-vh-100 pb-5">
            <section className="bg-white border-bottom py-5">
                <div className="container">
                    <h1 className="display-5 fw-bold text-dark mb-3">Join Our Healthcare Team</h1>
                    <p className="text-secondary">Explore career opportunities and make a difference in patient care.<br />We are looking for dedicated professionals to join Life Comrades.</p>
                </div>
            </section>

            <div className="container py-5">
                <div className="row g-4">
                    {JOBS_DATA.map((job) => (
                        <div key={job.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm hover-shadow transition-300">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2">
                                            {job.category}
                                        </span>
                                        <span className="text-muted small">{job.postedDate}</span>
                                    </div>
                                    <h3 className="h5 fw-bold text-dark mb-2">{job.title}</h3>
                                    <div className="d-flex align-items-center text-secondary small mb-3">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        {job.location} • {job.type}
                                    </div>
                                    <p className="text-muted small mb-4 line-clamp-3">
                                        {job.description}
                                    </p>
                                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                        <Link
                                            href={`/jobs/${job.id}`}
                                            className="btn btn-outline-primary btn-sm fw-bold"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {JOBS_DATA.length === 0 && (
                    <div className="text-center py-5">
                        <p className="text-secondary">No openings at the moment. Please check back later.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
