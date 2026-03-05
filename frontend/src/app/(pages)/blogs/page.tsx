import React from 'react';
import Link from 'next/link';
import { getISRData } from '@/lib/api';
import { ChevronRight } from 'lucide-react';

export const revalidate = 3600;

export async function generateMetadata() {
    const { content } = await getISRData();
    const blogMetadata = content.pagesMetadata?.blogs || content.globalMetadata;
    return {
        title: blogMetadata.title,
        description: blogMetadata.description,
        keywords: blogMetadata.keywords,
    };
}

export default async function BlogPage() {
    const { blogPosts: BLOG_POSTS } = await getISRData();
    const BLOG_CATEGORIES = ['ALL', 'ELDERLY CARE', 'NURSING SERVICE', 'RECOVERY', 'HOME CARE'];

    const featuredPost = BLOG_POSTS.find(p => p.isFeatured);
    const regularPosts = featuredPost ? BLOG_POSTS.filter(p => p.id !== featuredPost.id) : BLOG_POSTS;

    return (
        <main className="bg-white min-vh-100">
            {/* Hero Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center py-4">
                        <div className="col-lg-10 bg-white p-5 rounded-3 shadow-sm">
                            <h1 className="display-5 fw-bold text-dark mb-3">Healthcare Tips & Home Care Guides</h1>
                            <p className="lead text-secondary mb-0">
                                Practical advice, recovery guidance, and home healthcare insights from experienced professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-5">
                    <div className="container">
                        <div className="row g-4 align-items-center bg-light rounded-4 overflow-hidden mx-0 p-0">
                            <div className="col-lg-6 p-0">
                                <div className="bg-secondary-subtle ratio ratio-16x9">
                                    <div className="bg-light d-flex align-items-center justify-content-center text-muted">
                                        <img src={featuredPost.image} alt={featuredPost.title} className="w-100 h-100 object-fit-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-5">
                                <span className="text-secondary small fw-medium mb-2 d-block text-uppercase">{featuredPost.category}</span>
                                <h2 className="h1 fw-bold text-dark mb-4" style={{ color: '#0F766E' }}>{featuredPost.title}</h2>
                                <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.6' }}>
                                    {featuredPost.description}
                                </p>
                                <div className="d-flex align-items-center gap-2 text-muted small mb-4">
                                    <span>{featuredPost.readTime}</span>
                                    <span>•</span>
                                    <span>{featuredPost.author}</span>
                                </div>
                                <Link href={`/blogs/${featuredPost.id}`} className="text-decoration-none fw-bold d-flex align-items-center gap-1" style={{ color: '#0D9488' }}>
                                    Read Article <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {regularPosts.map((post) => (
                            <div key={post.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-1 border-secondary-subtle rounded-3 overflow-hidden hover-shadow transition-all">
                                    <div className="ratio ratio-4x3 bg-light">
                                        <img src={post.image} alt={post.title} className="object-fit-cover" />
                                    </div>
                                    <div className="card-body p-4">
                                        <span className="text-secondary small fw-medium mb-2 d-block text-uppercase">{post.category}</span>
                                        <h3 className="h5 fw-bold text-dark mb-3" style={{ lineHeight: '1.4' }}>
                                            {post.title}
                                        </h3>
                                        <p className="text-secondary small mb-4" style={{ lineHeight: '1.5' }}>
                                            {post.description}
                                        </p>
                                        <Link href={`/blogs/${post.id}`} className="text-decoration-none fw-bold d-flex align-items-center gap-1 small" style={{ color: '#0D9488' }}>
                                            Read more <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 border-top">
                <div className="container py-4 text-center">
                    <h2 className="h2 fw-bold text-dark mb-3">Need professional care at home?</h2>
                    <p className="text-secondary mb-5">Book trusted healthcare services at your convenience.</p>
                    <Link href="/book" className="btn btn-primary px-5 py-3 fw-bold rounded-2" style={{ backgroundColor: '#0D9488', border: 'none' }}>
                        Book a Service
                    </Link>
                </div>
            </section>
        </main>
    );
}
