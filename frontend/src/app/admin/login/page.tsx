'use client';

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { refreshRole } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            await refreshRole();
            router.push('/admin');
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Failed to login. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light bg-opacity-50 py-5">
            <div className="container" style={{ maxWidth: '440px' }}>
                {/* Logo/Brand Area */}
                <div className="text-center mb-5 animate-fade-in">
                    <div className="bg-teal-600 text-white rounded-3xl d-inline-flex align-items-center justify-content-center shadow-lg mb-4" style={{ width: '64px', height: '64px' }}>
                        <LogIn size={32} />
                    </div>
                    <h1 className="h3 fw-bold text-dark tracking-tight mb-2">Admin Portal</h1>
                    <p className="text-secondary">Sign in to manage your services and bookings</p>
                </div>

                {/* Login Card */}
                <div className="card border-0 shadow-lg rounded-3xl p-4 p-md-5 bg-white animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <form onSubmit={handleLogin} className="d-flex flex-column gap-4">
                        {error && (
                            <div className="alert alert-danger border-0 rounded-2xl d-flex align-items-center gap-3 py-3 px-4 mb-0">
                                <AlertCircle size={20} className="flex-shrink-0" />
                                <p className="small mb-0 fw-bold">{error}</p>
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label small fw-bold text-secondary ps-1 mb-2">Email Address</label>
                            <div className="position-relative">
                                <div className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control border-light bg-light bg-opacity-50 ps-5 py-3 rounded-2xl shadow-xs"
                                    placeholder="admin@lifecomrades.in"
                                    style={{ fontSize: '15px' }}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label small fw-bold text-secondary ps-1 mb-2">Password</label>
                            <div className="position-relative">
                                <div className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control border-light bg-light bg-opacity-50 ps-5 pe-5 py-3 rounded-2xl shadow-xs"
                                    placeholder="••••••••"
                                    style={{ fontSize: '15px' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3 text-secondary shadow-none"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-teal-600 py-3 rounded-2xl fw-bold text-white shadow-md transition-300 mt-2 d-flex align-items-center justify-content-center gap-2 border-0"
                            style={{ fontSize: '16px' }}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span>Authenticating...</span>
                                </>
                            ) : (
                                <>
                                    <LogIn size={20} strokeWidth={2.5} />
                                    <span>Sign In</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <p className="text-center mt-5 text-secondary small">
                    Not an admin? <Link href="/" className="text-teal-600 fw-bold text-decoration-none hover-underline">Go back to home</Link>
                </p>
            </div>
        </div>
    );
}
