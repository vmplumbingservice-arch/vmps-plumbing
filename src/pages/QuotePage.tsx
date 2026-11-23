import { useEffect, useState } from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';
import {
  launchWhatsAppMessage,
  validateIndianMobile,
} from '../utils/whatsapp';

interface QuotePageProps {
  initialService?: string;
  initialProperty?: string;
}

const PROPERTY_TYPES = [
  'House',
  'Villa',
  'Apartment',
  'Shop',
  'Office',
  'Restaurant',
  'Hotel',
  'Other',
];

const SERVICE_CATEGORIES = [
  'Bathroom Plumbing',
  'Kitchen Plumbing',
  'Complete Home Plumbing',
  'Water Supply',
  'Drainage',
  'Sewerage Connections',
  'Tank and Pump Work',
  'Leakage Repair',
  'Commercial Plumbing',
  'AMC Maintenance',
];

export function QuotePage({ initialService, initialProperty }: QuotePageProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState(initialProperty || 'House');
  const [serviceCategory, setServiceCategory] = useState('Bathroom Plumbing');
  const [detailedRequirements, setDetailedRequirements] = useState('');
  const [approxBudget, setApproxBudget] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [quoteWhatsappUrl, setQuoteWhatsappUrl] = useState('');

  useEffect(() => {
    if (initialProperty && PROPERTY_TYPES.includes(initialProperty)) {
      setPropertyType(initialProperty);
    }
    if (initialService) {
      const matched = SERVICE_CATEGORIES.find((cat) =>
        cat.toLowerCase().includes(initialService.toLowerCase()) ||
        initialService.toLowerCase().includes(cat.toLowerCase())
      );
      if (matched) {
        setServiceCategory(matched);
      } else {
        setDetailedRequirements((prev) =>
          prev ? prev : `Requirement regarding: ${initialService}`
        );
      }
    }
  }, [initialService, initialProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const phoneResult = validateIndianMobile(phone);
    if (!phoneResult.valid) {
      setErrorMsg(phoneResult.error || 'Please enter a valid 10-digit Indian phone number.');
      return;
    }

    if (!location.trim()) {
      setErrorMsg('Please enter your site location.');
      return;
    }

    if (!detailedRequirements.trim()) {
      setErrorMsg('Please enter your detailed plumbing requirements.');
      return;
    }

    const lines = [
      'Hello VMPS Plumbing Services,',
      'I would like to request a plumbing quotation.',
      '',
      `Full Name: ${fullName.trim()}`,
      `Phone Number: ${phoneResult.normalized}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Location: ${location.trim()}`,
      `Property Type: ${propertyType}`,
      `Service Category: ${serviceCategory}`,
      `Detailed Requirements: ${detailedRequirements.trim()}`,
      approxBudget.trim() ? `Approximate Project Budget: ${approxBudget.trim()}` : null,
      inspectionDate ? `Preferred Site Inspection Date: ${inspectionDate}` : null,
      additionalInfo.trim() ? `Additional Information: ${additionalInfo.trim()}` : null,
    ].filter(Boolean);

    const url = launchWhatsAppMessage(lines.join('\n'));
    setQuoteWhatsappUrl(url);
  };

  return (
    <div className="bg-[#F6F9FB] py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
            Quotation Request · {COMPANY_INFO.regionSummary}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#0D1117] text-balance">
            Request a Plumbing Quotation or Site Inspection
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#525B65]">
            Share your property type, service category, and preferred inspection
            date below. Submitting formats your quotation request into a clean
            WhatsApp message for {COMPANY_INFO.phoneDisplay}.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Row 1 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-name"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit Indian mobile number"
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] tabular-nums focus:border-[#06789C] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Email <span className="text-xs font-normal text-[#525B65]">(Optional)</span>
                </label>
                <input
                  id="quote-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-location"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Location <span className="text-red-600">*</span>
                </label>
                <input
                  id="quote-location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Zirakpur, Dera Bassi, Mohali, Chandigarh"
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-property"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Property Type <span className="text-red-600">*</span>
                </label>
                <select
                  id="quote-property"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="quote-category"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Service Category <span className="text-red-600">*</span>
                </label>
                <select
                  id="quote-category"
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                >
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label
                htmlFor="quote-requirements"
                className="block text-sm font-medium text-[#0D1117]"
              >
                Detailed Requirements <span className="text-red-600">*</span>
              </label>
              <textarea
                id="quote-requirements"
                rows={4}
                required
                value={detailedRequirements}
                onChange={(e) => setDetailedRequirements(e.target.value)}
                placeholder="Describe number of bathrooms/kitchens, new installation vs renovation, leakage points, or tank/pump requirements..."
                className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
              />
            </div>

            {/* Row 5 */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-budget"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Approximate Project Budget{' '}
                  <span className="text-xs font-normal text-[#525B65]">(Optional)</span>
                </label>
                <input
                  id="quote-budget"
                  type="text"
                  value={approxBudget}
                  onChange={(e) => setApproxBudget(e.target.value)}
                  placeholder="Optional budget range in INR"
                  className="mt-1.5 w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] focus:border-[#06789C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-date"
                  className="block text-sm font-medium text-[#0D1117]"
                >
                  Preferred Site Inspection Date
                </label>
                <div className="relative mt-1.5">
                  <input
                    id="quote-date"
                    type="date"
                    value={inspectionDate}
                    onChange={(e) => setInspectionDate(e.target.value)}
                    className="w-full rounded-lg border border-[#E1E8EE] bg-white px-3.5 py-2.5 text-sm text-[#0D1117] tabular-nums focus:border-[#06789C] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div>
              <label
                htmlFor="quote-additional"
                className="block text-sm font-medium text-[#0D1117]"
              >
                Additional Information{' '}
                <span className="text-xs font-normal text-[#525B65]">(Optional)</span>
              </label>
              <textarea
                id="quote-additional"
                rows={2}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Preferred visiting hours, ongoing construction notes, or parking/society gate instructions"
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

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0D1117] px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-[#1E2631]"
              >
                <MessageCircle className="h-4 w-4 text-[#7DE4F8]" />
                <span>Send Quote Request via WhatsApp</span>
              </button>
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-5 py-3 text-sm font-semibold text-[#0D1117] whitespace-nowrap hover:border-[#0D1117]"
              >
                <Phone className="h-4 w-4" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {quoteWhatsappUrl && (
              <div className="rounded-lg border border-[#06789C]/30 bg-[#7DE4F8]/15 p-4 text-sm text-[#0D1117]">
                <div className="flex items-start gap-2.5">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#06789C]" />
                  <div>
                    <p className="font-semibold">
                      Quote request formatted in WhatsApp — press Send in
                      WhatsApp to deliver it.
                    </p>
                    <p className="mt-1 text-xs text-[#525B65]">
                      If WhatsApp did not open automatically,{' '}
                      <a
                        href={quoteWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#06789C] underline"
                      >
                        click here to launch WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
