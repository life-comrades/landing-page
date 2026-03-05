import React from 'react';
import { getISRData } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JobApplicationForm from '@/components/JobApplicationForm';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { jobs: jobsArray } = await getISRData();
    const job = jobsArray.find(j => j.id === id);

    if (!job) {
        return {
            title: 'Job Not Found',
        };
    }

    return {
        title: `${job.title} - Careers at Life Comrades`,
        description: job.description,
    };
}

export async function generateStaticParams() {
    const { jobs: jobsArray } = await getISRData();
    return jobsArray.map((job) => ({
        id: job.id,
    }));
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { jobs: jobsArray } = await getISRData();
    const job = jobsArray.find(j => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <main className="bg-light min-vh-100 pb-5">
            <div className="bg-white border-bottom py-4 mb-4">
                <div className="container">
                    <nav aria-label="breadcrumb" className="mb-3">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link href="/jobs" className="text-decoration-none text-primary">Jobs</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{job.title}</li>
                        </ol>
                    </nav>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                        <div>
                            <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2">{job.category}</span>
                            <h1 className="h2 fw-bold text-dark mb-0">{job.title}</h1>
                            <div className="text-secondary mt-2">
                                <i className="bi bi-geo-alt me-2"></i>
                                {job.location} • {job.type} • Posted on {job.postedDate}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-7 col-xl-8">
                        <div className="card border-0 shadow-sm p-4 p-md-5 mb-4">
                            <section className="mb-5">
                                <h2 className="h4 fw-bold text-dark mb-4">About the Role</h2>
                                <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                                    {job.description}
                                </p>
                            </section>

                            <section className="mb-5">
                                <h2 className="h4 fw-bold text-dark mb-4">Key Responsibilities</h2>
                                <ul className="list-group list-group-flush border-0">
                                    {job.responsibilities.map((item, index) => (
                                        <li key={index} className="list-group-item border-0 bg-transparent px-0 py-2 d-flex">
                                            <i className="bi bi-check2-circle text-primary me-3 mt-1 fs-5"></i>
                                            <span className="text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="h4 fw-bold text-dark mb-4">Requirements</h2>
                                <ul className="list-group list-group-flush border-0">
                                    {job.requirements.map((item, index) => (
                                        <li key={index} className="list-group-item border-0 bg-transparent px-0 py-2 d-flex">
                                            <i className="bi bi-dot text-primary me-2 fs-4"></i>
                                            <span className="text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    <div className="col-lg-5 col-xl-4">
                        <div id="apply-form" className="card border-0 shadow-sm overflow-hidden sticky-top" style={{ top: '6rem' }}>
                            <div className="card-header bg-dark text-white p-4 border-0">
                                <h3 className="h5 fw-bold mb-0">Apply for Position</h3>
                                <p className="small text-secondary mb-0 mt-1">Please fill in your details accurately.</p>
                            </div>
                            <div className="card-body p-4">
                                <JobApplicationForm jobId={job.id} jobTitle={job.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
