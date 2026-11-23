import { useState } from 'react';
import { Check, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { ResilientImage } from '../components/ResilientImage';
import {
  AMC_SCOPE_ITEMS,
  COMPANY_INFO,
  IMAGES,
} from '../data/plumbingData';
import {
  buildWhatsAppUrl,
  launchWhatsAppMessage,
  validateIndianMobile,
} from '../utils/whatsapp';

export function AmcPage() {
  const [planType, setPlanType] = useState<'Monthly AMC' | 'Quarterly AMC' | 'Annual AMC'>('Annual AMC');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [propertyType, setPropertyType] = useState('Office');
  const [location, setLocation] = useState('');
  const [requirement, setRequirement] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [preparedUrl, setPreparedUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const phoneCheck = validateIndianMobile(mobile);
    if (!phoneCheck.valid) {
      setErrorMsg(phoneCheck.error || 'Please enter a valid mobile number.');
      return;
    }

    if (!location.trim()) {
      setErrorMsg('Please enter your site location.');
      return;
    }

    if (!requirement.trim()) {
      setErrorMsg('Please briefly describe your maintenance requirement.');
      return;
    }

    const message = [
      'Hello VMPS Plumbing Services,',
      `I would like to submit a ${planType} enquiry.`,
      '',
      `AMC Plan Option: ${planType}`,
      `Name: ${fullName.trim()}`,
      `Mobile Number: ${phoneCheck.normalized}`,
      `Property Type: ${propertyType}`,
      `Site Location: ${location.trim()}`,
      `Maintenance Requirement: ${requirement.trim()}`,
    ].join('\n');

    const url = launchWhatsAppMessage(message);
    setPreparedUrl(url);
  };

  return (
    <div>
      {/* AMC Hero */}
      <section className="border-b border-[#E1E8EE] bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Annual Maintenance Contracts (AMC)</span>
            </div>
            <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#0D1117] text-balance">
              Monthly, Quarterly &amp; Annual Plumbing Maintenance Plans
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#525B65] sm:text-lg">
              Preventive plumbing upkeep helps residential properties, offices,
              shops, restaurants, and housing societies reduce unexpected water
              leaks, blocked drains, and pump downtime. All AMC proposals are
              prepared specifically for your site after inspection.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#amc-enquiry-form"
                className="inline-flex min-h-[46px] items-center rounded-lg bg-[#0D1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E2631]"
              >
                Submit AMC Enquiry
              </a>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-5 py-2.5 text-sm font-semibold text-[#0D1117] hover:border-[#0D1117]"
              >
                <Phone className="h-4 w-4" />
                <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB]">
              <ResilientImage
                src={IMAGES.tankPump}
                alt="Water storage tank and booster pump system inspected under VMPS AMC"
                className="h-full w-full object-cover"
                fallbackTitle="AMC Tank & Pump Maintenance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule Options */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Maintenance Options
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
              Choose a Schedule Matched to Your Property Usage
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Monthly AMC Enquiry',
                plan: 'Monthly AMC' as const,
                desc: 'Ideal for active restaurants, cafes, offices, retail showrooms, and high-traffic washrooms needing regular monthly checks.',
                points: [
                  'Scheduled monthly inspection visit',
                  'Washroom taps, cisterns & traps check',
                  'Drainage & water tank line check',
                ],
              },
              {
                name: 'Quarterly AMC Enquiry',
                plan: 'Quarterly AMC' as const,
                desc: 'Suited for residential homes, villas, small offices, and clinics looking for seasonal preventive inspection every three months.',
                points: [
                  'Four scheduled inspections per year',
                  'Pump, valve & pressure checks',
                  'Minor fitting adjustment & leak check',
                ],
              },
              {
                name: 'Annual AMC Enquiry',
                plan: 'Annual AMC' as const,
                desc: 'Comprehensive yearly maintenance contract structured around your property’s fixtures, overhead tanks, and pipeline layout.',
                points: [
                  'Site-specific yearly maintenance calendar',
                  'Tank, pump & main riser inspections',
                  'Documented scope agreed upfront',
                ],
              },
            ].map((opt) => (
              <div
                key={opt.name}
                className="flex flex-col justify-between rounded-2xl border border-[#E1E8EE] bg-white p-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0D1117]">
                    {opt.plan}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#525B65]">
                    {opt.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {opt.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm text-[#0D1117]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#06789C]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-[#E1E8EE] pt-4">
                  <a
                    href="#amc-enquiry-form"
                    onClick={() => setPlanType(opt.plan)}
                    className="inline-flex min-h-[42px] w-full items-center justify-center rounded-lg bg-[#0D1117] px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-[#1E2631]"
                  >
                    {opt.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Scope */}
      <section className="border-b border-[#E1E8EE] bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Maintenance Scope
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
              What Our Plumbing Maintenance Covers
            </h2>
            <p className="mt-2 text-sm text-[#525B65]">
              Exact visit frequency, covered fixtures, and material exclusions
              are finalized in your site-specific AMC proposal.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AMC_SCOPE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#E1E8EE] bg-[#F6F9FB]/60 p-5"
              >
                <h3 className="font-display text-base font-semibold text-[#0D1117]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Enquiry Form -> WhatsApp */}
      <section id="amc-enquiry-form" className="bg-[#F6F9FB] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-10">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              AMC Proposal Request
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
              Request a Monthly or Annual AMC Proposal
            </h2>
            <p className="mt-2 text-sm text-[#525B65]">
              Select your preferred AMC frequency and property details. Clicking
              submit opens WhatsApp with your details pre-filled so you can
              press Send directly to {COMPANY_INFO.phoneDisplay}.
            </p>

            {/* Plan Toggle */}
            <div className="mt-6">
              <span className="block text-xs font-semibold text-[#0D1117] uppercase">
                Enquiry Type
              </span>
              <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl border border-[#E1E8EE] bg-[#F6F9FB] p-1">
                {(['Monthly AMC', 'Quarterly AMC', 'Annual AMC'] as const).map(
                  (plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => setPlanType(plan)}
                      className={`min-h-[40px] cursor-pointer rounded-lg px-2 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                        planType === plan
                          ? 'bg-[#0D1117] text-white'
                          : 'text-[#525B65] hover:text-[#0D1117]'
                      }`}
                    >
                      {plan}
                    </button>
                  )
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="amc-name"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="amc-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amc-mobile"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Mobile Number (India) <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="amc-mobile"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] tabular-nums focus:border-[#06789C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="amc-property"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Property Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="amc-property"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  >
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Housing Society">Housing Society</option>
                    <option value="Shop">Shop / Showroom</option>
                    <option value="Office">Office</option>
                    <option value="Restaurant">Restaurant / Cafe</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="amc-location"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Site Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="amc-location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Dera Bassi / Zirakpur / Mohali / Chandigarh"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="amc-req"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Maintenance Requirement <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="amc-req"
                  rows={4}
                  required
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="Describe the number of washrooms, water tanks, pumps, or maintenance scope..."
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                />
              </div>

              {errorMsg && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E2631]"
              >
                <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
                <span>Send {planType} Enquiry on WhatsApp</span>
              </button>

              {preparedUrl && (
                <div className="rounded-lg border border-[#06789C]/30 bg-[#7DE4F8]/15 p-4 text-sm text-[#0D1117]">
                  <p className="font-semibold">
                    WhatsApp enquiry window opened.
                  </p>
                  <p className="mt-1 text-xs text-[#525B65]">
                    Please review the pre-filled message in WhatsApp and press
                    Send to deliver your enquiry to VMPS Plumbing Services. If
                    WhatsApp did not open automatically,{' '}
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#06789C] underline"
                    >
                      click here to open WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}

              <div className="text-center">
                <a
                  href={buildWhatsAppUrl(
                    'Hello VMPS Plumbing Services, I would like to ask about AMC plumbing maintenance plans.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#525B65] hover:text-[#0D1117]"
                >
                  Or chat directly on WhatsApp without filling the form →
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
