import { Link } from 'react-router-dom';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Gavel, Scale, Info, AlertCircle, Heart, Mail, MapPin, Shield, MessageSquare, RefreshCw, BookOpen, HandshakeIcon, ExternalLink } from 'lucide-react';

const sections = [
  {
    icon: Scale,
    title: 'Acceptance of Terms',
    text: 'By using our Site, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree, you must not use our Site.',
  },
  {
    icon: Info,
    title: 'Website Use',
    text: 'The content on this Site is provided for general information purposes only. It is not intended as medical advice and should not be relied upon as a substitute for consultation with a healthcare professional. Use of this Site does not establish a doctor-patient relationship.',
  },
  {
    icon: BookOpen,
    title: 'Intellectual Property',
    text: 'All content on this Site, including but not limited to text, images, logos, and software, is the property of ProMed Health Primary Care or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may view, download, and print materials from the Site for your personal use only, provided you retain all proprietary notices. Any other use, reproduction, or distribution of the content is prohibited without our express written consent.',
  },
  {
    icon: AlertCircle,
    title: 'User Conduct',
    intro: 'By using the Site, you agree not to:',
    bullets: [
      'Use the Site for any unlawful purposes or in violation of applicable laws.',
      'Upload or transmit any harmful, obscene, or offensive material.',
      'Attempt to gain unauthorized access to any part of the Site or any server connected to the Site.',
      'Interfere with the proper functioning of the Site.',
    ],
  },
  {
    icon: Shield,
    title: 'Privacy and Data Protection',
    text: 'We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal data when you visit our Site.',
    link: { label: 'View Privacy Policy', path: '/privacy' },
  },
  {
    icon: Heart,
    title: 'Medical Disclaimer',
    text: 'The information provided on this Site is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site.',
  },
  {
    icon: ExternalLink,
    title: 'Third-Party Links',
    text: 'Our Site may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content of third-party sites and accept no responsibility for any loss or damage that may arise from your use of them.',
  },
  {
    icon: Gavel,
    title: 'Limitation of Liability',
    text: 'To the fullest extent permitted by law, ProMed Health Primary Care and its affiliates, officers, employees, agents, and licensors will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site. This includes, but is not limited to, any damages resulting from errors, omissions, interruptions, or defects in the content provided on the Site.',
  },
  {
    icon: HandshakeIcon,
    title: 'Indemnification',
    text: 'You agree to indemnify and hold ProMed Health Primary Care harmless from any claim, demand, or damage, including legal fees, asserted by any third party due to or arising out of your use of the Site or violation of these Terms.',
  },
  {
    icon: RefreshCw,
    title: 'Modifications to the Site and Terms',
    text: 'We reserve the right to modify, update, or discontinue any part of the Site at any time without notice. We may also revise these Terms at any time by updating this page. Your continued use of the Site after any changes constitutes your acceptance of the new terms.',
  },
  {
    icon: Scale,
    title: 'Governing Law',
    text: 'These Terms and your use of the Site are governed by and construed in accordance with the laws. Any disputes arising from or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the courts.',
  },
];

export function TermsAndConditions() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Terms & Conditions"
        subtitle="Governing the use of our website and services to ensure a safe and transparent experience."
        breadcrumbs={[{ name: 'Terms & Conditions', path: '/terms-conditions' }]}
      />

      <section className="py-14 lg:py-20 bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-6 rv-left">

              {/* Intro */}
              <div className="bg-card border border-border rounded-3xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-a border-b border-border">
                  <div className="w-8 h-8 bg-s/15 rounded-xl flex items-center justify-center text-s">
                    <Gavel size={15} />
                  </div>
                  <h2 className="text-sm font-semibold text-p uppercase tracking-widest">Terms of Use</h2>
                </div>
                <p className="px-6 py-5 text-sm text-ink leading-relaxed">
                  Welcome to ProMed Health Primary Care website. By accessing or using this Site, you agree to comply with and be bound by these Terms & Conditions. Please read these Terms carefully before using the Site. If you do not agree to these Terms, you must not use this Site.
                </p>
              </div>

              {/* Sections */}
              {sections.map((sec, i) => {
                const Icon = sec.icon;
                return (
                  <div key={i} className={`bg-card border border-border rounded-2xl overflow-hidden rv-up d${(i % 3) + 1}`}>
                    <div className="flex items-center gap-3 px-5 py-3.5 bg-a border-b border-border">
                      <div className="w-7 h-7 bg-s/15 rounded-lg flex items-center justify-center">
                        <Icon size={13} className="text-s" />
                      </div>
                      <h3 className="text-xs font-semibold text-p uppercase tracking-widest">{sec.title}</h3>
                    </div>
                    <div className="p-5 space-y-3">
                      {'intro' in sec && sec.intro && (
                        <p className="text-xs text-muted">{sec.intro}</p>
                      )}
                      {'text' in sec && sec.text && (
                        <p className="text-sm text-muted leading-relaxed">{sec.text}</p>
                      )}
                      {'bullets' in sec && sec.bullets && (
                        <ul className="space-y-2">
                          {sec.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-xs text-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-s shrink-0 mt-1.5" /> {b}
                            </li>
                          ))}
                        </ul>
                      )}
                      {'link' in sec && sec.link && (
                        <Link to={sec.link.path}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-s hover:underline mt-1">
                          {sec.link.label} →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* SMS */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden rv-up d2">
                <div className="flex items-center gap-3 px-5 py-3.5 bg-a border-b border-border">
                  <div className="w-7 h-7 bg-s/15 rounded-lg flex items-center justify-center">
                    <MessageSquare size={13} className="text-s" />
                  </div>
                  <h3 className="text-xs font-semibold text-p uppercase tracking-widest">SMS Consent & Terms</h3>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-sm text-muted leading-relaxed">By providing your phone number for SMS purposes, you agree to receive text messages from us. SMS opt-in or phone numbers for the purposes of SMS are not being shared with any third party or affiliate company for marketing purposes.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Frequency', value: '3–5 times/week' },
                      { label: 'Fees', value: 'Standard rates apply' },
                      { label: 'Opt-Out', value: 'Reply STOP' },
                    ].map(item => (
                      <div key={item.label} className="bg-warm border border-border rounded-xl p-3 text-center">
                        <p className="text-[10px] font-semibold text-s uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-xs font-semibold text-p">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Acknowledgement */}
              <div className="bg-p rounded-2xl p-5 rv-up d3">
                <p className="text-sm text-white/80 leading-relaxed italic text-center">
                  By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-28 rv-right">
              <div className="bg-p rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-semibold text-white">Contact Information</h3>
                <p className="text-xs text-white/50 leading-relaxed">If you have any questions about these Terms, please contact us.</p>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={13} className="text-s shrink-0 mt-0.5" />
                    <span>11691 Independence Pkwy, Suite 110<br />Frisco, Texas 75035</span>
                  </div>
                  <a href={`mailto:${clinicInfo.contact.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Mail size={13} className="text-s shrink-0" /> {clinicInfo.contact.email}
                  </a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 space-y-2">
                <p className="text-xs font-semibold text-muted uppercase tracking-widest">Effective Date</p>
                <p className="text-sm font-semibold text-p">January 16, 2025</p>
              </div>
              <div className="bg-a border border-s/20 rounded-2xl p-5 space-y-3">
                <p className="text-xs font-semibold text-s uppercase tracking-widest">Sections</p>
                <ul className="space-y-2">
                  {[...sections.map(s => s.title), 'SMS Consent & Terms'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted">
                      <span className="w-1 h-1 rounded-full bg-s shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
