import { useEffect, useState } from 'react';
import { FloatingContactControls } from './components/FloatingContactControls';
import { Footer } from './components/Footer';
import { Header, type AppRoute } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { AmcPage } from './pages/AmcPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { QuotePage } from './pages/QuotePage';
import { ServicesPage } from './pages/ServicesPage';
import { updateDocumentMeta, type RouteMeta } from './utils/whatsapp';

const ROUTE_META: Record<AppRoute, RouteMeta> = {
  '/': {
    title: 'VMPS Plumbing Services | Dera Bassi, Zirakpur, Mohali & Chandigarh',
    description:
      'Residential and commercial plumbing services in Dera Bassi, Zirakpur, Mohali, and Chandigarh. Bathroom installation, kitchen plumbing, repairs, and AMC.',
    canonicalPath: '/',
  },
  '/about-us': {
    title: 'About Us | VMPS Plumbing Services – Vishav Mohan',
    description:
      'Learn about VMPS Plumbing Services, an owner-led plumbing company founded by Vishav Mohan serving residential and commercial clients in Tricity.',
    canonicalPath: '/about-us',
  },
  '/services': {
    title: 'Plumbing Services | Residential, Commercial, Installation & AMC – VMPS',
    description:
      'Explore residential plumbing, commercial plumbing, bathroom and kitchen installation, leakage repairs, and AMC services in Dera Bassi, Zirakpur, Mohali & Chandigarh.',
    canonicalPath: '/services',
  },
  '/amc': {
    title: 'Plumbing AMC Maintenance Plans | Monthly & Annual – VMPS',
    description:
      'Request monthly, quarterly, or annual plumbing maintenance contracts (AMC) for homes, housing societies, offices, shops, and restaurants across Tricity.',
    canonicalPath: '/amc',
  },
  '/contact-us': {
    title: 'Contact Us | VMPS Plumbing Services (+91 99157 25295)',
    description:
      'Contact VMPS Plumbing Services by phone, WhatsApp, or enquiry form for plumbing inspections and quotes in Dera Bassi, Zirakpur, Mohali, and Chandigarh.',
    canonicalPath: '/contact-us',
  },
  '/get-a-quote': {
    title: 'Get a Quote | Request Plumbing Quotation & Site Inspection – VMPS',
    description:
      'Request a site-based quotation for bathroom plumbing, kitchen plumbing, complete home piping, commercial plumbing, or AMC maintenance via WhatsApp.',
    canonicalPath: '/get-a-quote',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | VMPS Plumbing Services',
    description:
      'Read how VMPS Plumbing Services handles enquiry details shared via WhatsApp and phone consultations.',
    canonicalPath: '/privacy-policy',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | VMPS Plumbing Services',
    description:
      'Review service quotation, site inspection, and maintenance terms for VMPS Plumbing Services.',
    canonicalPath: '/terms-and-conditions',
  },
};

function parseRoute(pathname: string): AppRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized in ROUTE_META) {
    return normalized as AppRoute;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<AppRoute>(() =>
    parseRoute(window.location.pathname)
  );
  const [prefillState, setPrefillState] = useState<{
    service?: string;
    property?: string;
  }>({});

  useEffect(() => {
    updateDocumentMeta(ROUTE_META[currentPath]);
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (
    path: AppRoute,
    prefill?: { service?: string; property?: string }
  ) => {
    setPrefillState(prefill || {});
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0D1117]">
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main className="flex-1">
        {currentPath === '/' && <HomePage onNavigate={navigate} />}
        {currentPath === '/about-us' && <AboutPage onNavigate={navigate} />}
        {currentPath === '/services' && <ServicesPage onNavigate={navigate} />}
        {currentPath === '/amc' && <AmcPage />}
        {currentPath === '/contact-us' && (
          <ContactPage initialProperty={prefillState.property} />
        )}
        {currentPath === '/get-a-quote' && (
          <QuotePage
            initialService={prefillState.service}
            initialProperty={prefillState.property}
          />
        )}
        {currentPath === '/privacy-policy' && (
          <PrivacyPolicyPage onNavigate={navigate} />
        )}
        {currentPath === '/terms-and-conditions' && (
          <TermsPage onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
      <FloatingContactControls />
    </div>
  );
}
