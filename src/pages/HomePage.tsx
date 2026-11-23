import { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import type { AppRoute } from '../components/Header';
import {
  COMPANY_INFO,
  FAQ_ITEMS,
  HOME_SERVICE_CATEGORIES,
  IMAGES,
  SAMPLE_GALLERY,
  SERVICE_PACKAGES,
  WHY_CHOOSE_VMPS,
  WORK_PROCESS_STEPS,
} from '../data/plumbingData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (path: AppRoute, prefill?: { service?: string; property?: string }) => void;
}

const PROCESS_ICONS = [
  PhoneCall,
  ClipboardList,
  MapPin,
  FileText,
  Wrench,
  CheckCircle2,
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'repair'>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredCategories =
    activeCategory === 'all'
      ? HOME_SERVICE_CATEGORIES
      : HOME_SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <div>
      {/* SECTION 2: HERO SECTION */}
      <section className="border-b border-[#E1E8EE] bg-white">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              VMPS Plumbing Services · Tricity Region
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.15rem,4vw,3.35rem)] font-bold leading-[1.12] tracking-tight text-[#0D1117] text-balance">
              Reliable Plumbing Solutions for Every Home &amp; Business.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#525B65] sm:text-lg">
              VMPS Plumbing Services provides professional residential and
              commercial plumbing solutions, including bathroom installation,
              kitchen plumbing, water supply, drainage, pipeline repairs and
              maintenance.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/get-a-quote')}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E2631] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06789C]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={buildWhatsAppUrl(
                  'Hello VMPS Plumbing Services, I would like to enquire about plumbing services.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#06789C] bg-[#7DE4F8]/25 px-5 py-3 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#7DE4F8]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06789C]"
              >
                <MessageCircle className="h-4 w-4 text-[#06789C]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#E1E8EE] bg-white px-5 py-3 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#0D1117] hover:bg-[#F6F9FB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06789C]"
              >
                <Phone className="h-4 w-4 text-[#0D1117]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Service Locations Bar */}
            <div className="mt-8 border-t border-[#E1E8EE] pt-6">
              <p className="text-xs font-medium tracking-wide text-[#525B65] uppercase">
                Service Locations
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-[#0D1117]">
                <span>Dera Bassi</span>
                <span aria-hidden="true" className="text-[#06789C]">·</span>
                <span>Zirakpur</span>
                <span aria-hidden="true" className="text-[#06789C]">·</span>
                <span>Mohali</span>
                <span aria-hidden="true" className="text-[#06789C]">·</span>
                <span>Chandigarh</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB]">
              <ResilientImage
                src={IMAGES.heroBathroom}
                alt="Modern residential bathroom plumbing installation with chrome faucets and ceramic vanity"
                className="h-full w-full object-cover lg:h-full"
                fallbackTitle="Residential Bathroom Plumbing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY INTRODUCTION */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                Owner-Led Local Service
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-3xl text-balance">
                Your Trusted Local Plumbing Service Partner
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#525B65]">
                Led by founder <strong className="font-semibold text-[#0D1117]">{COMPANY_INFO.owner}</strong>,
                VMPS Plumbing Services is a dedicated local plumbing service
                focused on practical, responsible execution for homeowners,
                villas, apartments, and commercial properties across the Tricity
                region.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/about-us')}
                  className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg border border-[#E1E8EE] bg-white px-4 py-2 text-sm font-semibold text-[#0D1117] transition-colors hover:border-[#0D1117]"
                >
                  <span>About VMPS</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  title: 'Practical Plumbing Experience',
                  text: 'Hands-on familiarity with residential and commercial water supply, sanitary fittings, and drainage layouts.',
                },
                {
                  title: 'Customer-Focused Service',
                  text: 'Clear scheduling, tidy on-site work habits, and respectful coordination at homes and active businesses.',
                },
                {
                  title: 'Residential & Commercial Work',
                  text: 'From bathroom taps and kitchen sinks to multi-washroom commercial spaces and hospitality upkeep.',
                },
                {
                  title: 'Site-Based Quotations',
                  text: 'Every project scope is assessed on site before confirming labour and material requirements.',
                },
                {
                  title: 'Maintenance Support',
                  text: 'Structured monthly and annual maintenance options to monitor tanks, pumps, valves, and drainage.',
                },
                {
                  title: 'Professional Communication',
                  text: 'Direct updates via phone and WhatsApp with owner supervision throughout execution.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E1E8EE] bg-white p-5"
                >
                  <h3 className="font-display text-base font-semibold text-[#0D1117]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES */}
      <section className="border-b border-[#E1E8EE] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                Our Services
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-4xl text-balance">
                Complete Plumbing Installation, Repair &amp; Maintenance
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter service categories"
              className="inline-flex flex-wrap gap-1 rounded-xl border border-[#E1E8EE] bg-[#F6F9FB] p-1"
            >
              {[
                { key: 'all' as const, label: 'All Services' },
                { key: 'residential' as const, label: 'Residential' },
                { key: 'commercial' as const, label: 'Commercial' },
                { key: 'repair' as const, label: 'Repair & Maintenance' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`min-h-[38px] cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors sm:text-sm ${
                    activeCategory === tab.key
                      ? 'bg-[#0D1117] text-white'
                      : 'text-[#525B65] hover:text-[#0D1117]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-14">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB]/60 p-5 sm:p-8"
              >
                <div className="grid gap-6 border-b border-[#E1E8EE] pb-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <h3 className="font-display text-xl font-bold text-[#0D1117] sm:text-2xl">
                      {category.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#525B65] sm:text-base">
                      {category.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
                    <button
                      type="button"
                      onClick={() => onNavigate('/services')}
                      className="inline-flex min-h-[42px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#E1E8EE] bg-white px-4 py-2 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors hover:border-[#0D1117]"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/get-a-quote', { service: category.title })
                      }
                      className="inline-flex min-h-[42px] cursor-pointer items-center rounded-lg bg-[#0D1117] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1E2631]"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((service) => (
                    <div
                      key={service.name}
                      className="flex flex-col justify-between rounded-xl border border-[#E1E8EE] bg-white p-5 transition-colors hover:border-[#06789C]/50"
                    >
                      <div>
                        <h4 className="font-display text-base font-semibold text-[#0D1117]">
                          {service.name}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                          {service.detail}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-4 border-t border-[#F0F4F8] pt-3">
                        <button
                          type="button"
                          onClick={() =>
                            onNavigate('/get-a-quote', { service: service.name })
                          }
                          className="cursor-pointer text-xs font-semibold text-[#06789C] hover:text-[#0D1117]"
                        >
                          Get a Quote →
                        </button>
                        <button
                          type="button"
                          onClick={() => onNavigate('/services')}
                          className="cursor-pointer text-xs font-medium text-[#525B65] hover:text-[#0D1117]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE VMPS */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Why Choose VMPS
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-3xl text-balance">
              Accountable Workmanship Built on Practical Supervision
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_VMPS.map((item) => (
              <div
                key={item.index}
                className="rounded-xl border border-[#E1E8EE] bg-white p-6"
              >
                <span className="font-display text-sm font-bold text-[#06789C] tabular-nums">
                  {item.index}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[#0D1117]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#525B65]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR WORK PROCESS */}
      <section className="border-b border-[#E1E8EE] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Our Work Process
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-3xl text-balance">
              From Site Enquiry to Tested Handover in Six Clear Steps
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_PROCESS_STEPS.map((step, idx) => {
              const Icon = PROCESS_ICONS[idx] || Wrench;
              return (
                <div
                  key={step.step}
                  className="flex items-start gap-4 rounded-xl border border-[#E1E8EE] bg-[#F6F9FB]/50 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E1E8EE] bg-white text-[#0D1117]">
                    <Icon className="h-5 w-5 text-[#06789C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#06789C] tabular-nums">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-[#0D1117]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE PACKAGES */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Service Packages
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-4xl text-balance">
              Flexible Scope Packages with Site-Based Quotations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#525B65] sm:text-base">
              All plumbing work is quoted transparently after discussing your
              requirements or inspecting the site. Select a package to open a
              pre-filled WhatsApp quote request.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PACKAGES.map((pkg) => {
              const waMessage = `Hello VMPS Plumbing Services, I would like to request a quotation for the "${pkg.name}" service package. Please share site inspection and quotation details.`;
              return (
                <div
                  key={pkg.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#E1E8EE] bg-white p-6"
                >
                  <div>
                    <p className="text-xs font-medium text-[#06789C]">
                      {pkg.tag} · {pkg.basis}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#0D1117]">
                      {pkg.name}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {pkg.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-sm text-[#525B65]"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#06789C]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-[#E1E8EE] pt-5">
                    <a
                      href={buildWhatsAppUrl(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-4 py-2.5 text-xs font-semibold tracking-wide text-white uppercase whitespace-nowrap transition-colors hover:bg-[#1E2631]"
                    >
                      <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
                      <span>Get This Package Quote</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: SAMPLE WORK / DEMO GALLERY */}
      <section className="border-b border-[#E1E8EE] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Illustrative Solutions Gallery
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-4xl text-balance">
              Our Work &amp; Plumbing Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#525B65]">
              Note: The photographs below are illustrative sample images used
              to demonstrate the plumbing environments and installations we
              service. Actual on-site project photographs will be added as they
              are documented.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_GALLERY.map((item, idx) => (
              <figure
                key={item.id}
                className={`overflow-hidden rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB] ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}>
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    fallbackTitle={item.title}
                  />
                </div>
                <figcaption className="border-t border-[#E1E8EE] bg-white p-5">
                  <p className="text-xs font-medium text-[#06789C]">
                    {item.label} · {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-[#0D1117]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: COMMERCIAL CUSTOMER SECTION */}
      <section className="border-b border-[#1E2631] bg-[#0D1117] py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7DE4F8] uppercase">
              <Building2 className="h-4 w-4" />
              <span>Commercial Plumbing Support</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Looking for Reliable Plumbing Support for Your Business?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#C2CCD6]">
              VMPS provides plumbing installation, repairs and maintenance
              support for shops, offices, restaurants and other commercial
              properties.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onNavigate('/contact-us', { property: 'Office' })
                }
                className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-lg bg-[#7DE4F8] px-5 py-2.5 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors hover:bg-[#5CD6EE]"
              >
                Commercial Enquiry
              </button>
              <button
                type="button"
                onClick={() =>
                  onNavigate('/get-a-quote', {
                    service: 'Commercial Plumbing',
                    property: 'Shop',
                  })
                }
                className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-white/10"
              >
                Request a Quote
              </button>
              <a
                href={buildWhatsAppUrl(
                  'Hello VMPS Plumbing Services, I have a commercial plumbing enquiry for my business property.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#7DE4F8]/40 px-5 py-2.5 text-sm font-semibold text-[#7DE4F8] whitespace-nowrap shrink-0 transition-colors hover:bg-[#7DE4F8]/10"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp VMPS</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/15">
              <ResilientImage
                src={IMAGES.commercialWashroom}
                alt="Commercial washroom installation for offices, restaurants, and retail spaces"
                className="h-full w-full object-cover"
                fallbackTitle="Commercial Washroom Setup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: AMC SECTION */}
      <section className="border-b border-[#E1E8EE] bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB]">
              <ResilientImage
                src={IMAGES.tankPump}
                alt="Overhead water storage tank and booster pump maintained through plumbing AMC"
                className="h-full w-full object-cover"
                fallbackTitle="AMC Tank & Pump Maintenance"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Monthly &amp; Annual Maintenance Contracts</span>
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-3xl text-balance">
              Keep Your Property Running Smoothly with Regular Plumbing
              Maintenance.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#525B65]">
              Choose structured monthly, quarterly, or annual maintenance visits
              tailored to your residential society, office, shop, or commercial
              property. Every AMC plan is defined by a clear written scope.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Routine plumbing inspections',
                'Water tank and pump checks',
                'Pipeline inspection',
                'Leakage and drainage maintenance',
                'Scheduled maintenance visits',
                'Site-specific AMC proposals',
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-3.5 py-2.5 text-sm font-medium text-[#0D1117]"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#06789C]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => onNavigate('/amc')}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1E2631]"
              >
                <span>Request AMC Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12: FUTURE EXPANSION + SERVICE AREAS */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Future Expansion */}
          <div className="rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-8 lg:col-span-6">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Future Expansion Goal
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-[#0D1117] sm:text-2xl">
              Growing Towards Bigger Plumbing Projects
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#525B65] sm:text-base">
              VMPS is currently focused on residential and commercial plumbing
              services. As our business develops, we aim to expand our
              capabilities into industrial plumbing and larger building plumbing
              projects in the future.
            </p>
            <p className="mt-3 text-xs text-[#646D77]">
              Note: Industrial and large-scale building projects represent
              future expansion goals and are not currently advertised active
              services.
            </p>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-8 lg:col-span-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                Service Areas
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-[#0D1117] sm:text-2xl">
                Serving the Tricity Region
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#525B65]">
                On-site inspections, installations, repairs, and AMC visits are
                available across:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2.5 text-sm font-medium text-[#0D1117] sm:grid-cols-3">
                {[
                  'Dera Bassi',
                  'Zirakpur',
                  'Mohali',
                  'Chandigarh',
                  'Nearby Tricity areas',
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-[#06789C]" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contact-us')}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-[#0D1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E2631]"
              >
                <span>Contact VMPS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: CUSTOMER FAQ */}
      <section className="border-b border-[#E1E8EE] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-3xl">
              Clear Answers About Our Plumbing Services
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#E1E8EE] rounded-2xl border border-[#E1E8EE] bg-white">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F6F9FB] sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-sm font-semibold text-[#0D1117] sm:text-base">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#525B65] transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#06789C]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-[#525B65] sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 14: FINAL CTA */}
      <section className="bg-[#F6F9FB] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#0D1117] sm:text-4xl text-balance">
            Need Professional Plumbing Assistance?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#525B65]">
            Contact VMPS today to discuss your plumbing requirement and request
            a quotation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={buildWhatsAppUrl(
                'Hello VMPS Plumbing Services, I need plumbing assistance and would like to discuss my requirement.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1E2631]"
            >
              <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#E1E8EE] bg-white px-6 py-3 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors hover:border-[#0D1117]"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/get-a-quote')}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#06789C] bg-[#7DE4F8]/25 px-6 py-3 text-sm font-semibold text-[#0D1117] whitespace-nowrap shrink-0 transition-colors hover:bg-[#7DE4F8]/40"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
