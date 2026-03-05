"use client";

import React from 'react';
import Link from 'next/link';
import { WebsiteContent } from '@/types';

interface FooterProps {
  content?: WebsiteContent;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="footer py-5" style={{ backgroundColor: '#1E293B', color: '#CBD5E1' }}>
      <div className="container">
        <div className="row g-4 mb-5 pb-5">
          {/* Brand */}
          <div className="col-lg-3">
            <Link href="/" className="d-block mb-4">
              <img
                src="/images/resources/logo.png"
                alt={`${content?.companyName || 'Life Comrades'} Logo`}
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>
            <p className="small mb-0 pe-lg-5" style={{ lineHeight: '1.6' }}>
              {content?.companyName || 'Life Comrades'} provides {content?.tagline?.toLowerCase() || 'professional healthcare'}. Our mission is to bring hospital-quality care to the comfort of your home.
            </p>
          </div>

          {/* Company */}
          <div className="col-12 col-md-4 col-lg-3">
            <h6 className="text-white fw-bold mb-4 small" style={{ letterSpacing: '1px' }}>COMPANY</h6>
            <ul className="list-unstyled small d-flex flex-column gap-3">
              <li><Link href="/about" className="text-decoration-none text-reset hover-white">About us</Link></li>
              <li><Link href="/blogs" className="text-decoration-none text-reset hover-white">Blogs</Link></li>
              <li><Link href="/contact" className="text-decoration-none text-reset hover-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-12 col-md-4 col-lg-3">
            <h6 className="text-white fw-bold mb-4 small" style={{ letterSpacing: '1px' }}>SUPPORT</h6>
            <ul className="list-unstyled small d-flex flex-column gap-3">
              <li><Link href="/help" className="text-decoration-none text-reset hover-white">Help Center</Link></li>
              <li><Link href="/privacy" className="text-decoration-none text-reset hover-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-decoration-none text-reset hover-white">Terms of service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 col-lg-3">
            <h6 className="text-white fw-bold mb-4 small" style={{ letterSpacing: '1px' }}>CONTACT</h6>
            <ul className="list-unstyled small d-flex flex-column gap-3">
              <li className="text-reset">{content?.contact?.email}</li>
              <li className="text-reset">{content?.contact?.phone}</li>
              <li className="text-reset">{content?.contact?.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center small mt-5" style={{ color: '#94A3B8' }}>
          <div className="mb-3 mb-md-0">
            Copyright © {new Date().getFullYear()} {content?.companyName || 'Life Comrades'}, All Rights Reserved.
          </div>
          <div className="d-flex gap-5">
            {content?.contact?.social?.facebook && (
              <a href={content?.contact?.social?.facebook} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset hover-white">Facebook</a>
            )}
            {content?.contact?.social?.linkedin && (
              <a href={content?.contact?.social?.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset hover-white">LinkedIn</a>
            )}
            {content?.contact?.social?.whatsapp && (
              <a href={content?.contact?.social?.whatsapp} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset hover-white">Whatsapp</a>
            )}
            {content?.contact?.social?.instagram && (
              <a href={content?.contact?.social?.instagram} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-reset hover-white">Instagram</a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};