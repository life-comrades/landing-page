"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { LogIn, Mail, Lock, AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import { usersApi } from '@/lib/api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [forgotMode, setForgotMode] = useState(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    const router = useRouter();
    const { refreshRole } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const tokenResult = await userCredential.user.getIdTokenResult();

            // Refresh role in context as well
            await refreshRole();

            if (tokenResult.claims.role === 'ADMIN') {
                router.push('/admin');
            } else {
                router.push('/');
            }
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.message || 'Failed to login. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg(null);

        try {
            await usersApi.forgotPassword(email);
            setSuccessMsg('A password reset link has been generated. In a production app, this would be sent to your email.');
        } catch (err: any) {
            setError(err.message || 'Failed to process request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-vh-100 d-flex align-items-center justify-content-center bg-light bg-opacity-50 py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-5 col-xl-4">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden animate-fade-in">
                            <div className="card-body p-4 p-md-5 bg-white">
                                <div className="text-center mb-4">
                                    <Link href="/">
                                        <img src="/images/resources/logo.png" alt="Logo" className="mb-4 img-fluid" style={{ height: '64px', objectFit: 'contain' }} />
                                    </Link>
                                    <h2 className="h3 fw-bold text-dark mb-2">{forgotMode ? 'Reset Password' : 'Welcome Back'}</h2>
                                    <p className="text-secondary small mb-0">
                                        {forgotMode
                                            ? 'Enter your email to receive a secure reset link'
                                            : 'Sign in to access your Life Comrades portal'}
                                    </p>
                                </div>

                                {error && (
                                    <div className="alert alert-danger d-flex align-items-center gap-2 rounded-3 border-0 py-3 mb-4 animate-shake">
                                        <AlertCircle size={18} className="flex-shrink-0" />
                                        <span className="small fw-bold">{error}</span>
                                    </div>
                                )}

                                {successMsg && (
                                    <div className="alert alert-success d-flex align-items-center gap-2 rounded-3 border-0 py-3 mb-4 animate-fade-in">
                                        <AlertCircle size={18} className="flex-shrink-0" />
                                        <span className="small fw-bold">{successMsg}</span>
                                    </div>
                                )}

                                <form onSubmit={forgotMode ? handleForgotPassword : handleLogin} className="d-flex flex-column gap-4">
                                    <div className="form-group">
                                        <label className="form-label small fw-bold text-secondary text-uppercase mb-2 ps-1">Email Address</label>
                                        <div className="position-relative">
                                            <div className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg border-light bg-light bg-opacity-50 ps-5 py-3 rounded-3 shadow-none fw-medium"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                style={{ fontSize: '15px' }}
                                            />
                                        </div>
                                    </div>

                                    {!forgotMode && (
                                        <div className="form-group">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <label className="form-label small fw-bold text-secondary text-uppercase mb-0 ps-1">Password</label>
                                                <button
                                                    type="button"
                                                    onClick={() => setForgotMode(true)}
                                                    className="btn btn-link p-0 text-decoration-none small fw-bold text-teal-600 shadow-none border-0"
                                                >
                                                    Forgot?
                                                </button>
                                            </div>
                                            <div className="position-relative">
                                                <div className="position-absolute start-0 top-50 translate-middle-y ps-3 text-muted">
                                                    <Lock size={18} />
                                                </div>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control form-control-lg border-light bg-light bg-opacity-50 ps-5 pe-5 py-3 rounded-3 shadow-none fw-medium"
                                                    placeholder="••••••••"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required={!forgotMode}
                                                    style={{ fontSize: '15px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="btn btn-link position-absolute end-0 top-50 translate-middle-y pe-3 text-secondary shadow-none border-0"
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-teal-600 w-100 py-3 rounded-3 fw-bold text-white shadow-md transition-300 mt-2 d-flex align-items-center justify-content-center gap-2 border-0"
                                    >
                                        {loading ? (
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <span>{forgotMode ? 'Send Reset Link' : 'Sign In'}</span>
                                                {!forgotMode && <LogIn size={20} strokeWidth={2.5} />}
                                            </>
                                        )}
                                    </button>

                                    {forgotMode && (
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setForgotMode(false);
                                                    setError(null);
                                                    setSuccessMsg(null);
                                                }}
                                                className="btn btn-link text-decoration-none small fw-bold text-secondary shadow-none border-0"
                                            >
                                                Back to Login
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="text-center mt-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                            <p className="text-secondary small">
                                Don't have an account? <Link href="/contact" className="text-teal-600 fw-bold text-decoration-none hover-underline">Contact Support</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
