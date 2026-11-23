import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import type { AppRoute } from '../components/Header';
import { ResilientImage } from '../components/ResilientImage';
import {
  COMPANY_INFO,
  DETAILED_SERVICES_PAGE_SECTIONS,
} from '../data/plumbingData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ServicesPageProps {
  onNavigate: (path: AppRoute, prefill?: { service?: string }) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div>
      {/* Services Hero */}
      <section className="border-b border-[#E1E8EE] bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Plumbing Services · Dera Bassi, Zirakpur, Mohali &amp; Chandigarh
            </p>
            <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#0D1117] text-balance">
              Residential, Commercial &amp; Maintenance Plumbing Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#525B65] sm:text-lg">
              Explore our complete range of plumbing services across five clear
              categories. Every installation, repair, and maintenance plan is
              planned around your property layout and quoted after requirement
              discussion or site inspection.
            </p>

            {/* Quick Category Anchors */}
            <div className="mt-7 flex flex-wrap gap-2">
              {DETAILED_SERVICES_PAGE_SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="inline-flex min-h-[38px] items-center rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-3.5 py-1.5 text-xs font-semibold text-[#0D1117] transition-colors hover:border-[#06789C] sm:text-sm"
                >
                  {sec.code}. {sec.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Categories A–E */}
      <section className="divide-y divide-[#E1E8EE] bg-white">
        {DETAILED_SERVICES_PAGE_SECTIONS.map((section, idx) => {
          const isEven = idx % 2 === 1;
          const waText = `Hello VMPS Plumbing Services, I would like to enquire about ${section.title}. Please let me know how to schedule a site inspection or quotation.`;

          return (
            <div
              key={section.id}
              id={section.id}
              className={`py-14 lg:py-20 ${isEven ? 'bg-[#F6F9FB]' : 'bg-white'}`}
            >
              <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
                <div
                  className={`lg:col-span-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#E1E8EE] bg-white">
                    <ResilientImage
                      src={section.image}
                      alt={section.imageAlt}
                      className="h-full w-full object-cover"
                      fallbackTitle={section.title}
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                    Category {section.code}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
                    {section.code}. {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#525B65]">
                    {section.intro}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#E1E8EE] bg-white p-5">
                      <h3 className="font-display text-sm font-bold tracking-wide text-[#0D1117] uppercase">
                        Included Services
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {section.services.map((srv) => (
                          <li
                            key={srv}
                            className="flex items-start gap-2 text-sm text-[#525B65]"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#06789C]" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-[#E1E8EE] bg-white p-5">
                      <h3 className="font-display text-sm font-bold tracking-wide text-[#0D1117] uppercase">
                        Key Practical Benefits
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {section.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-[#525B65]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#06789C]"
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/get-a-quote', { service: section.title })
                      }
                      className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-[#0D1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E2631]"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <a
                      href={buildWhatsAppUrl(waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#06789C] bg-[#7DE4F8]/20 px-5 py-2.5 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#7DE4F8]/35"
                    >
                      <MessageCircle className="h-4 w-4 text-[#06789C]" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E1E8EE] bg-white px-4 py-2.5 text-sm font-semibold text-[#0D1117] hover:border-[#0D1117]"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
