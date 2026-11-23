import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

export function FloatingContactControls() {
  return (
    <>
      {/* Desktop Floating WhatsApp Action */}
      <a
        href={COMPANY_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VMPS Plumbing Services on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden min-h-[46px] items-center gap-2.5 rounded-full border border-[#7DE4F8]/60 bg-[#0D1117] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#19202B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DE4F8] md:inline-flex"
      >
        <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
        <span>WhatsApp VMPS</span>
      </a>

      {/* Mobile Sticky Bottom Call & WhatsApp Bar (<= 9% mobile viewport height) */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid h-14 grid-cols-2 border-t border-[#E1E8EE] bg-white md:hidden">
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center justify-center gap-2 border-r border-[#E1E8EE] text-sm font-semibold text-[#0D1117] active:bg-[#F6F9FB]"
        >
          <Phone className="h-4 w-4 text-[#0D1117]" />
          <span>Call Now</span>
        </a>
        <a
          href={COMPANY_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#0D1117] text-sm font-semibold text-white active:bg-[#1E2631]"
        >
          <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
