import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';
import type { AppRoute } from './Header';

interface FooterProps {
  onNavigate: (path: AppRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLink = (e: React.MouseEvent, path: AppRoute) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#1E2631] bg-[#0D1117] pb-20 text-white md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="inline-block rounded-xl bg-white px-3.5 py-2"
              aria-label="VMPS Plumbing Services"
            >
              <img
                src={COMPANY_INFO.logoPath}
                alt="VMPS Plumbing Services Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B4BEC8]">
              Owner-led residential and commercial plumbing solutions across Dera
              Bassi, Zirakpur, Mohali, Chandigarh, and nearby Tricity areas.
            </p>
            <p className="mt-3 text-xs text-[#8D99A6]">
              Founder &amp; Technical Head: {COMPANY_INFO.owner}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#B4BEC8]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  onClick={(e) => handleLink(e, '/about-us')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/amc"
                  onClick={(e) => handleLink(e, '/amc')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  AMC Maintenance
                </a>
              </li>
              <li>
                <a
                  href="/get-a-quote"
                  onClick={(e) => handleLink(e, '/get-a-quote')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => handleLink(e, '/contact-us')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Services &amp; AMC
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#B4BEC8]">
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Residential Plumbing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Commercial Plumbing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Bathroom &amp; Kitchen Installation
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, '/services')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Repair &amp; Leakage Solutions
                </a>
              </li>
              <li>
                <a
                  href="/amc"
                  onClick={(e) => handleLink(e, '/amc')}
                  className="transition-colors hover:text-[#7DE4F8]"
                >
                  Monthly &amp; Annual AMC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information & Service Areas */}
          <div>
            <h2 className="font-display text-sm font-semibold tracking-wide text-white">
              Contact &amp; Service Areas
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[#B4BEC8]">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 font-medium text-white tabular-nums transition-colors hover:text-[#7DE4F8]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#7DE4F8]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#7DE4F8]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#7DE4F8]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[#7DE4F8]"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[#7DE4F8]" />
                  <span>{COMPANY_INFO.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-[#9BA6B2]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#7DE4F8]" />
                <span>{COMPANY_INFO.regionSummary}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#1E2631] pt-8 text-xs text-[#8D99A6] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 VMPS Plumbing Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, '/privacy-policy')}
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(e) => handleLink(e, '/terms-and-conditions')}
              className="transition-colors hover:text-white"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
