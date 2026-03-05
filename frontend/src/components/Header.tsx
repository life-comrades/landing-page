"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { WebsiteContent } from '@/types';

interface HeaderProps {
  content?: WebsiteContent;
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white sticky-top" style={{ zIndex: 1100 }}>
      {/* Top Bar */}
      <div className="bg-white border-bottom py-1">
        <div className="container d-flex justify-content-between align-items-center small text-muted font-monospace" style={{ fontSize: '0.75rem' }}>
          <span>Trusted Home Nursing & Healthcare Services</span>
          <span>
            Call: {content?.contact?.phone} | {content?.contact?.address}
          </span>
        </div>
      </div>


      {/* Main Nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 border-bottom shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <img
              src="/images/resources/logo.png"
              alt={`${content?.companyName || 'Life Comrades'} Logo`}
              style={{ height: '50px', width: 'auto' }}
              className="d-block"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav mx-auto gap-4">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link
                    href={link.path}
                    className={`nav-link small fw-medium text-dark ${pathname === link.path ? 'border-bottom border-2 border-primary' : ''} py-1`}
                    style={{ fontSize: '0.85rem' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="d-flex align-items-center gap-4">
              <Link href="/book" className="btn btn-primary btn-sm fw-bold px-4 rounded-2" style={{ backgroundColor: '#0D9488', border: 'none' }}>
                Book a Service
              </Link>
              <Link href="/login" className="text-decoration-none text-dark small fw-bold d-flex align-items-center gap-1">
                Login <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="d-lg-none bg-white border-top p-4 shadow w-100 position-absolute" style={{ zIndex: 1000 }}>
          <div className="d-flex flex-column gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-decoration-none text-dark fw-medium small"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              href="/book"
              className="btn btn-primary w-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Service
            </Link>
            <Link
              href="/login"
              className="btn btn-outline-secondary w-100 border-0 text-dark fw-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};