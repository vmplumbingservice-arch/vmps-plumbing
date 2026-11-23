import { useEffect, useState } from 'react';
import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';
import {
  launchWhatsAppMessage,
  validateIndianMobile,
} from '../utils/whatsapp';

interface ContactPageProps {
  initialProperty?: string;
}

export function ContactPage({ initialProperty }: ContactPageProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Residential Plumbing');
  const [propertyType, setPropertyType] = useState(initialProperty || 'House');
  const [projectDetails, setProjectDetails] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Phone Call'>('WhatsApp');
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (initialProperty) {
      setPropertyType(initialProperty);
    }
  }, [initialProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const phoneResult = validateIndianMobile(mobile);
    if (!phoneResult.valid) {
      setErrorMsg(phoneResult.error || 'Please enter a valid Indian mobile number.');
      return;
    }

    if (!location.trim()) {
      setErrorMsg('Please enter your location (e.g., Dera Bassi, Zirakpur, Mohali, Chandigarh).');
      return;
    }

    if (!projectDetails.trim()) {
      setErrorMsg('Please provide brief details about your plumbing requirement.');
      return;
    }

    const formattedMessage = [
      'Hello VMPS Plumbing Services,',
      'I am reaching out through the Contact Us form on your website.',
      '',
      `Full Name: ${fullName.trim()}`,
      `Mobile Number: ${phoneResult.normalized}`,
      `Location: ${location.trim()}`,
      `Service Required: ${serviceRequired}`,
      `Property Type: ${propertyType}`,
      `Preferred Contact Method: ${preferredContact}`,
      `Project Details: ${projectDetails.trim()}`,
    ].join('\n');

    const url = launchWhatsAppMessage(formattedMessage);
    setWhatsappUrl(url);
  };

  return (
    <div className="bg-[#F6F9FB] py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
            Contact VMPS Plumbing Services
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#0D1117] text-balance">
            Get in Touch for Plumbing Service or Inspection
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#525B65]">
            Call us directly, chat on WhatsApp, or complete the enquiry form to
            send your plumbing details straight to our WhatsApp number.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-[#0D1117]">
                {COMPANY_INFO.name}
              </h2>
              <p className="mt-1 text-sm text-[#525B65]">
                Owner &amp; Technical Head: {COMPANY_INFO.owner}
              </p>

              <div className="mt-6 space-y-5 border-t border-[#E1E8EE] pt-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E1E8EE] bg-[#F6F9FB]">
                    <Phone className="h-4 w-4 text-[#0D1117]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#525B65] uppercase">
                      Phone Number
                    </p>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="mt-0.5 block font-display text-base font-bold text-[#0D1117] tabular-nums hover:text-[#06789C]"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E1E8EE] bg-[#F6F9FB]">
                    <MessageCircle className="h-4 w-4 text-[#06789C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#525B65] uppercase">
                      WhatsApp
                    </p>
                    <a
                      href={COMPANY_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm font-semibold text-[#06789C] hover:underline"
                    >
                      https://wa.me/919915725295
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E1E8EE] bg-[#F6F9FB]">
                    <Instagram className="h-4 w-4 text-[#0D1117]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#525B65] uppercase">
                      Instagram
                    </p>
                    <a
                      href={COMPANY_INFO.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-sm font-semibold text-[#0D1117] hover:text-[#06789C]"
                    >
                      {COMPANY_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E1E8EE] bg-[#F6F9FB]">
                    <MapPin className="h-4 w-4 text-[#06789C]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#525B65] uppercase">
                      Service Areas
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#0D1117]">
                      Dera Bassi, Zirakpur, Mohali and Chandigarh region
                      (including nearby Tricity areas).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#E1E8EE] pt-6">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-3 py-2 text-sm font-semibold text-[#0D1117] hover:border-[#0D1117]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1E2631]"
                >
                  <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-display text-xl font-bold text-[#0D1117]">
              Send an Enquiry via WhatsApp
            </h2>
            <p className="mt-1 text-sm text-[#525B65]">
              Fill in your details below. Submitting opens WhatsApp with your
              message ready—simply press Send inside WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-mobile"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit Indian mobile number"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] tabular-nums focus:border-[#06789C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-location"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Dera Bassi / Zirakpur / Mohali / Chandigarh"
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Service Required <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  >
                    <option value="Residential Plumbing">Residential Plumbing</option>
                    <option value="Commercial Plumbing">Commercial Plumbing</option>
                    <option value="Bathroom Plumbing">Bathroom Plumbing</option>
                    <option value="Kitchen Plumbing">Kitchen Plumbing</option>
                    <option value="Water Supply & Drainage">Water Supply &amp; Drainage</option>
                    <option value="Tank & Pump Work">Tank &amp; Pump Work</option>
                    <option value="Leakage Repair & Maintenance">Leakage Repair &amp; Maintenance</option>
                    <option value="AMC Maintenance">AMC Maintenance</option>
                    <option value="Site Inspection">Site Inspection</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-property"
                    className="block text-sm font-medium text-[#0D1117]"
                  >
                    Property Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="contact-property"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                  >
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Shop">Shop</option>
                    <option value="Office">Office</option>
                    <option value="Restaurant">Restaurant / Cafe</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Housing Society">Housing Society</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#0D1117]">
                    Preferred Contact Method
                  </span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    {(['WhatsApp', 'Phone Call'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPreferredContact(method)}
                        className={`min-h-[42px] cursor-pointer rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                          preferredContact === method
                            ? 'border-[#0D1117] bg-[#0D1117] text-white'
                            : 'border-[#E1E8EE] bg-white text-[#525B65] hover:border-[#0D1117]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-details"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Project Details <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="contact-details"
                  rows={4}
                  required
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Describe the plumbing work, repair issue, or site inspection request..."
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
                className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-[#1E2631]"
              >
                <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
                <span>Send Enquiry on WhatsApp</span>
              </button>

              {whatsappUrl && (
                <div className="rounded-lg border border-[#06789C]/30 bg-[#7DE4F8]/15 p-4 text-sm text-[#0D1117]">
                  <p className="font-semibold">
                    Ready in WhatsApp — please press Send to complete your enquiry.
                  </p>
                  <p className="mt-1 text-xs text-[#525B65]">
                    Your enquiry is not submitted automatically; WhatsApp opens
                    with your details pre-filled so you can review and send.{' '}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#06789C] underline"
                    >
                      Open WhatsApp again
                    </a>
                    .
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
