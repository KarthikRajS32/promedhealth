import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Shield, Lock, FileText, CheckCircle, Mail, MapPin, MessageSquare, Cookie, ExternalLink } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    subsections: [
      { label: 'Personal Information', text: 'When you voluntarily submit forms or request appointments, we may collect personal details such as your name, contact information, and any medical information you provide.' },
      { label: 'Technical Data', text: 'Information such as your IP address, browser type, device information, and browsing patterns may be collected automatically for website functionality and security purposes.' },
    ],
  },
  {
    icon: Shield,
    title: 'Use of Information',
    bullets: [
      'To respond to your inquiries or process appointment requests.',
      'To provide you with relevant medical information and updates.',
      'To improve our website and enhance user experience.',
      'To comply with legal obligations or respond to government requests when necessary.',
    ],
    note: 'We do not sell, trade, or share your personal information with third parties, except as required by law or to provide services you have requested. In some cases, we may share information with trusted partners or healthcare providers who assist us in delivering medical care, and only with your consent.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    text: 'We take the security of your information seriously. We implement appropriate technical, administrative, and physical safeguards to protect your personal data from unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    icon: CheckCircle,
    title: 'Your Rights',
    bullets: [
      'Request access to or correction of the personal information we hold about you.',
      'Withdraw consent for data processing at any time.',
      'Request the deletion of your personal information, subject to legal obligations.',
    ],
  },
  {
    icon: Cookie,
    title: 'Cookies',
    text: 'Our website uses cookies to enhance user experience and analyze site traffic. You may choose to disable cookies through your browser settings, though this may affect your ability to fully utilize our website.',
  },
  {
    icon: ExternalLink,
    title: 'Third-Party Links',
    text: 'Our website may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites, and we encourage you to review their privacy policies.',
  },
];

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Privacy Policy"
        subtitle="Our commitment to protecting your personal information and ensuring data confidentiality."
        breadcrumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
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
                    <Shield size={15} />
                  </div>
                  <h2 className="text-sm font-semibold text-p uppercase tracking-widest">Privacy Statement</h2>
                </div>
                <p className="px-6 py-5 text-sm text-ink leading-relaxed">
                  At ProMed Health Primary Care, we are committed to protecting your privacy and ensuring the confidentiality and security of your personal information. This Privacy Statement outlines how we collect, use, and protect any personal data that you provide when accessing our website.
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
                    <div className="p-5 space-y-4">
                      {'text' in sec && sec.text && (
                        <p className="text-sm text-muted leading-relaxed">{sec.text}</p>
                      )}
                      {'subsections' in sec && sec.subsections && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {sec.subsections.map((sub, j) => (
                            <div key={j} className="bg-warm border border-border rounded-xl p-4 space-y-2">
                              <p className="text-xs font-semibold text-p">{sub.label}</p>
                              <p className="text-xs text-muted leading-relaxed">{sub.text}</p>
                            </div>
                          ))}
                        </div>
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
                      {'note' in sec && sec.note && (
                        <p className="text-xs text-muted leading-relaxed border-l-2 border-s pl-3 italic">{sec.note}</p>
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
                  <p className="text-sm text-muted leading-relaxed">By providing your phone number for SMS purposes, you agree to receive text messages from us. SMS opt-in or phone numbers for the purposes of SMS are not being shared with any third party or affiliate company for marketing purposes. If consent has been given to receive text messages from us, messages may be received related to healthcare updates.</p>
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

              {/* Changes */}
              <div className="bg-warm border border-border rounded-2xl p-5 rv-up d3">
                <p className="text-xs font-semibold text-p mb-2">Changes to This Privacy Statement</p>
                <p className="text-xs text-muted leading-relaxed">We reserve the right to update or modify this Privacy Statement at any time. Any changes will be posted on this page with an updated revision date.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-28 rv-right">
              <div className="bg-p rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-semibold text-white">Contact Us</h3>
                <p className="text-xs text-white/50 leading-relaxed">If you have any questions or concerns regarding this Privacy Statement, please contact us.</p>
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
                  {[...sections.map(s => s.title), 'SMS Consent & Terms', 'Changes'].map((t, i) => (
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
