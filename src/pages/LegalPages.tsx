import { COMPANY_INFO } from '../data/plumbingData';
import type { AppRoute } from '../components/Header';

interface LegalPageProps {
  onNavigate: (path: AppRoute) => void;
}

export function PrivacyPolicyPage({ onNavigate }: LegalPageProps) {
  return (
    <div className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
          Legal Information
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-[#0D1117] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[#525B65]">
          Effective Year: 2026 · {COMPANY_INFO.name}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#525B65] sm:text-base">
          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              1. Information You Provide
            </h2>
            <p className="mt-2">
              When you fill out the Contact Us, Get a Quote, or AMC Enquiry
              forms on this website, you provide details such as your name,
              mobile number, location, property type, and plumbing requirements.
              This website does not store your form entries on an automated
              database; instead, it formats your enquiry into a WhatsApp message
              that you choose to send directly to {COMPANY_INFO.phoneDisplay}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              2. How We Use Customer Information
            </h2>
            <p className="mt-2">
              Information shared with {COMPANY_INFO.name} via phone call or
              WhatsApp is used strictly to respond to your plumbing enquiry,
              coordinate site inspections, prepare quotations, and carry out
              requested plumbing or maintenance services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              3. Data Sharing &amp; Minimal Collection
            </h2>
            <p className="mt-2">
              We do not sell or rent your contact details to third parties. We
              only ask for practical information needed to understand your site
              location and plumbing scope.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              4. Contact Regarding Privacy
            </h2>
            <p className="mt-2">
              If you have questions about how your enquiry information is
              handled, please contact {COMPANY_INFO.owner} at{' '}
              <a
                href={COMPANY_INFO.phoneHref}
                className="font-semibold text-[#06789C] underline"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>{' '}
              or via our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/contact-us')}
                className="cursor-pointer font-semibold text-[#06789C] underline"
              >
                Contact Us page
              </button>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function TermsPage({ onNavigate }: LegalPageProps) {
  return (
    <div className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
          Legal Information
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-[#0D1117] sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-[#525B65]">
          Effective Year: 2026 · {COMPANY_INFO.name}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#525B65] sm:text-base">
          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              1. Service Scope &amp; Quotations
            </h2>
            <p className="mt-2">
              All plumbing installations, repairs, and Annual Maintenance
              Contracts (AMC) provided by {COMPANY_INFO.name} are subject to
              requirement discussion and site inspection. Final quotations depend
              on site conditions, pipe routing, fixture specifications, and
              agreed scope of work.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              2. Service Locations
            </h2>
            <p className="mt-2">
              Active services are offered across {COMPANY_INFO.regionSummary},
              subject to scheduling availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              3. Illustrative Gallery Notice
            </h2>
            <p className="mt-2">
              Sample photographs displayed on this website are illustrative
              references showing typical bathroom, kitchen, commercial, and
              pipeline work environments and are not represented as past VMPS
              project portfolios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              4. Annual Maintenance Contracts (AMC)
            </h2>
            <p className="mt-2">
              AMC visit schedules, covered components, and repair exclusions are
              governed strictly by the written AMC proposal agreed upon between
              the customer and {COMPANY_INFO.name}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-[#0D1117]">
              5. Questions
            </h2>
            <p className="mt-2">
              For clarifications regarding quotations or service terms, please
              reach out on{' '}
              <a
                href={COMPANY_INFO.phoneHref}
                className="font-semibold text-[#06789C] underline"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>{' '}
              or visit our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/contact-us')}
                className="cursor-pointer font-semibold text-[#06789C] underline"
              >
                Contact Us page
              </button>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
