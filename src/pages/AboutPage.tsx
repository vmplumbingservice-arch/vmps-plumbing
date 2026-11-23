import { ArrowRight, MessageCircle, Phone, UserCheck, Users, Wrench } from 'lucide-react';
import type { AppRoute } from '../components/Header';
import { ResilientImage } from '../components/ResilientImage';
import { COMPANY_INFO, IMAGES } from '../data/plumbingData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (path: AppRoute) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Page Hero */}
      <section className="border-b border-[#E1E8EE] bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              About Us · {COMPANY_INFO.regionSummary}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-[#0D1117] text-balance">
              About VMPS Plumbing Services
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#525B65] sm:text-lg">
              VMPS Plumbing Services is an owner-led plumbing service business
              focused on dependable residential and commercial plumbing work in
              Dera Bassi, Zirakpur, Mohali, Chandigarh, and surrounding Tricity
              neighbourhoods.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/get-a-quote')}
                className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-lg bg-[#0D1117] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E2631]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={buildWhatsAppUrl(
                  'Hello VMPS Plumbing Services, I would like to discuss a plumbing requirement.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-[#06789C] bg-[#7DE4F8]/20 px-5 py-2.5 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#7DE4F8]/35"
              >
                <MessageCircle className="h-4 w-4 text-[#06789C]" />
                <span>WhatsApp VMPS</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#E1E8EE] bg-[#F6F9FB]">
              <ResilientImage
                src={IMAGES.pipeMaintenance}
                alt="VMPS plumbing workmanship on residential water supply manifold"
                className="h-full w-full object-cover"
                fallbackTitle="VMPS Plumbing Services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Owner Profile */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                Leadership &amp; Technical Supervision
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
                {COMPANY_INFO.owner}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#525B65]">
                {COMPANY_INFO.ownerRole}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#525B65] sm:text-base">
                As the founder and technical head of VMPS Plumbing Services,{' '}
                {COMPANY_INFO.owner} is directly involved in technical
                supervision, plumbing work coordination, site inspections, and
                understanding customer requirements from initial enquiry through
                handover.
              </p>
            </div>

            <div className="rounded-xl border border-[#E1E8EE] bg-[#F6F9FB] p-6 sm:p-8 lg:col-span-7">
              <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
                Owner&apos;s Message
              </p>
              <blockquote className="mt-3 font-display text-lg font-semibold leading-relaxed text-[#0D1117] sm:text-xl">
                &ldquo;Our goal is to provide dependable plumbing services
                through practical experience, responsible workmanship and
                customer-focused solutions.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-medium text-[#525B65]">
                — {COMPANY_INFO.owner}, {COMPANY_INFO.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Small Team Structure */}
      <section className="border-b border-[#E1E8EE] bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Our Team
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
              A Focused, Hands-On Local Team
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#525B65]">
              VMPS currently operates with a small, dedicated team so every site
              receives direct attention, clear communication, and consistent
              workmanship.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: UserCheck,
                role: 'Owner / Technical Head',
                summary:
                  'Leads customer consultations, site inspections, quotation preparation, and technical supervision of plumbing layouts.',
              },
              {
                icon: Wrench,
                role: 'Plumbing Technicians',
                summary:
                  'Carry out pipe installations, bathroom and kitchen fittings, sanitary mounting, leakage diagnosis, and routine repairs.',
              },
              {
                icon: Users,
                role: 'Site Assistance',
                summary:
                  'Supports material handling, site preparation, drainage clearing, and post-work testing and clean-up.',
              },
            ].map((member) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.role}
                  className="rounded-xl border border-[#E1E8EE] bg-[#F6F9FB]/60 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E1E8EE] bg-white text-[#0D1117]">
                    <Icon className="h-5 w-5 text-[#06789C]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0D1117]">
                    {member.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#525B65]">
                    {member.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-[#E1E8EE] bg-[#F6F9FB] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#06789C] uppercase">
              Our Core Values
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#0D1117] sm:text-3xl">
              How We Work on Every Site
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: 'Honest Communication',
                desc: 'Clear explanations of faults, material needs, and practical options without unnecessary upselling.',
              },
              {
                title: 'Quality Workmanship',
                desc: 'Careful alignment, clean joints, and leak verification before completing any task.',
              },
              {
                title: 'Customer Satisfaction',
                desc: 'Respecting your home or commercial schedule with tidy, courteous service.',
              },
              {
                title: 'Responsible Execution',
                desc: 'Taking ownership of the planned plumbing scope from inspection to handover.',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Steadily refining our tools, techniques, and maintenance workflows as we grow.',
              },
            ].map((val, idx) => (
              <div
                key={val.title}
                className="rounded-xl border border-[#E1E8EE] bg-white p-5"
              >
                <span className="font-display text-xs font-bold text-[#06789C] tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-[#0D1117]">
                  {val.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#525B65]">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Contact Bar */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#E1E8EE] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0D1117]">
                Ready to Discuss Your Plumbing Requirement?
              </h3>
              <p className="mt-1 text-sm text-[#525B65]">
                Serving {COMPANY_INFO.regionSummary}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E1E8EE] bg-[#F6F9FB] px-4 py-2 text-sm font-semibold text-[#0D1117] hover:border-[#0D1117]"
              >
                <Phone className="h-4 w-4" />
                <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/contact-us')}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-[#0D1117] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1E2631]"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
