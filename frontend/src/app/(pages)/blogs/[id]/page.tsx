import React from 'react';
import { notFound } from 'next/navigation';
import { getISRData } from '@/lib/api';
import BlogSidebar from '@/components/BlogSidebar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const revalidate = 3600;

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { id } = await params;
    const { blogPosts: blogsArray } = await getISRData();
    const post = blogsArray.find((p) => p.id === id);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.description,
        keywords: post.metaKeywords,
    };
}

export async function generateStaticParams() {
    const { blogPosts: blogsArray } = await getISRData();
    return blogsArray.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;
    const { blogPosts: blogsArray } = await getISRData();
    const post = blogsArray.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogsArray.filter((p) => p.id !== post.id).slice(0, 4);

    return (
        <main className="bg-white min-vh-100 pb-5">
            {/* Breadcrumb / Top Bar */}
            <div className="border-bottom py-3 mb-5">
                <div className="container">
                    <nav className="d-flex align-items-center gap-2 small text-secondary fw-medium">
                        <Link href="/" className="text-decoration-none text-reset hover-primary">Home</Link>
                        <ChevronRight size={14} />
                        <Link href="/blogs" className="text-decoration-none text-reset hover-primary">Blogs</Link>
                        <ChevronRight size={14} />
                        <span className="text-dark line-clamp-1">{post.title}</span>
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="row g-5">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <article>
                            <h1 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                {post.title}
                            </h1>

                            {/* Hero Image */}
                            <div className="bg-light rounded-1 overflow-hidden mb-5" style={{ aspectRatio: '16/7' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <div className="blog-content">
                                <p className="lead text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                                    {post.description}
                                </p>

                                {post.content?.map((section, index) => (
                                    <div key={index} className="mb-5">
                                        <h2 className="h3 fw-bold text-dark mb-4 pb-2 border-bottom border-light-subtle">
                                            {section.heading}
                                        </h2>
                                        <p className="text-secondary mb-4" style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                                            {section.content}
                                        </p>
                                        {section.list && (
                                            <ul className="list-unstyled d-flex flex-column gap-3">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="d-flex gap-3 text-secondary" style={{ fontSize: '1.05rem' }}>
                                                        <span className="text-primary fw-bold">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <BlogSidebar relatedPosts={relatedPosts} />
                    </div>
                </div>
            </div>
        </main>
    );
}
