import { useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

export type AppRoute =
  | '/'
  | '/about-us'
  | '/services'
  | '/amc'
  | '/contact-us'
  | '/get-a-quote'
  | '/privacy-policy'
  | '/terms-and-conditions';

interface HeaderProps {
  currentPath: AppRoute;
  onNavigate: (path: AppRoute) => void;
}

const NAV_ITEMS: { label: string; path: AppRoute }[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'AMC', path: '/amc' },
  { label: 'Contact Us', path: '/contact-us' },
];

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (path: AppRoute) => {
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E1E8EE] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        {/* Zone 1: Original VMPS Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06789C]"
          aria-label="VMPS Plumbing Services Home"
        >
          <img
            src={COMPANY_INFO.logoPath}
            alt="VMPS Plumbing Services"
            className="h-9 w-auto object-contain sm:h-11"
          />
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06789C] ${
                  isActive
                    ? 'text-[#0D1117]'
                    : 'text-[#525B65] hover:text-[#0D1117]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[2px] h-0.5 bg-[#06789C]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Header WhatsApp Link + Primary Get a Quote CTA */}
        <div className="hidden items-center gap-4 shrink-0 md:flex">
          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-[#06789C] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0D1117] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06789C]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => handleNavClick('/get-a-quote')}
            className="inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-lg bg-[#0D1117] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E2631] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06789C]"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-[#E1E8EE] text-[#0D1117] transition-colors hover:bg-[#F6F9FB] md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E1E8EE] bg-white px-4 pb-6 pt-3 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EDF3F7] text-[#0D1117] font-semibold'
                      : 'text-[#525B65] hover:bg-[#F6F9FB] hover:text-[#0D1117]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#E1E8EE] pt-4">
            <button
              type="button"
              onClick={() => handleNavClick('/get-a-quote')}
              className="flex min-h-[46px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#0D1117] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get a Quote
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#06789C] bg-[#7DE4F8]/20 px-3 py-2 text-sm font-semibold text-[#0D1117]"
              >
                <MessageCircle className="h-4 w-4 text-[#06789C]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-3 py-2 text-sm font-semibold text-[#0D1117]"
              >
                <Phone className="h-4 w-4 text-[#0D1117]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
