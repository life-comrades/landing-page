"use client";

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogSidebarProps {
    relatedPosts: BlogPost[];
}

export default function BlogSidebar({ relatedPosts }: BlogSidebarProps) {
    return (
        <div className="d-flex flex-column gap-5 sticky-top" style={{ top: '100px' }}>
            {/* Search Sidebar */}
            <div className="position-relative">
                <input
                    type="text"
                    className="form-control border-secondary-subtle py-3 ps-4 pe-5 rounded-1"
                    placeholder="Search..."
                    style={{ fontSize: '0.9rem' }}
                />
                <Search
                    className="position-absolute end-0 top-50 translate-middle-y me-3 text-secondary"
                    size={20}
                />
            </div>

            {/* Related Posts */}
            <div>
                <h4 className="h5 fw-bold text-dark mb-4">Related Posts</h4>
                <div className="d-flex flex-column gap-4">
                    {relatedPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blogs/${post.id}`}
                            className="text-decoration-none group d-flex gap-3 align-items-center"
                        >
                            <div
                                className="flex-shrink-0 bg-secondary-subtle rounded-1"
                                style={{ width: '80px', height: '60px' }}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-100 h-100 object-fit-cover rounded-1"
                                />
                            </div>
                            <h5 className="small fw-bold text-dark mb-0 line-clamp-2" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                {post.title}
                            </h5>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="card border-1 border-secondary-subtle rounded-1">
                <div className="card-body p-4">
                    <h4 className="h5 fw-bold text-center text-dark mb-4">Quick Enquiry</h4>
                    <form className="d-flex flex-column gap-3">
                        <input
                            type="text"
                            className="form-control border-light-subtle bg-light py-2 rounded-1"
                            placeholder="Name"
                            style={{ fontSize: '0.85rem' }}
                        />
                        <input
                            type="tel"
                            className="form-control border-light-subtle bg-light py-2 rounded-1"
                            placeholder="Phone Number"
                            style={{ fontSize: '0.85rem' }}
                        />
                        <input
                            type="email"
                            className="form-control border-light-subtle bg-light py-2 rounded-1"
                            placeholder="Email Address"
                            style={{ fontSize: '0.85rem' }}
                        />
                        <textarea
                            className="form-control border-light-subtle bg-light py-2 rounded-1"
                            rows={4}
                            placeholder="Message"
                            style={{ fontSize: '0.85rem' }}
                        ></textarea>
                        <button
                            type="submit"
                            className="btn fw-bold text-white py-2 rounded-1 mt-2"
                            style={{ backgroundColor: '#0D9488', fontSize: '0.9rem' }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
