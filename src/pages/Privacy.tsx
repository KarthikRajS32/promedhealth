import { motion } from 'framer-motion';
import { SectionBanner } from '../components/ui/SectionBanner';
import { Shield, Info, Lock, User, Cookie, ExternalLink, MessageSquare, Mail, MapPin } from 'lucide-react';

const sections = [
  {
    icon: Info,
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you voluntarily submit forms or request appointments, we may collect personal details such as your name, contact information, and any medical information you provide.',
      },
      {
        subtitle: 'Technical Data',
        text: 'Information such as your IP address, browser type, device information, and browsing patterns may be collected automatically for website functionality and security purposes.',
      },
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
  },
  {
    icon: Shield,
    title: 'Sharing of Information',
    text: 'We do not sell, trade, or share your personal information with third parties, except as required by law or to provide services you have requested. In some cases, we may share information with trusted partners or healthcare providers who assist us in delivering medical care, and only with your consent.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    text: 'We take the security of your information seriously. We implement appropriate technical, administrative, and physical safeguards to protect your personal data from unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    icon: User,
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
  {
    icon: MessageSquare,
    title: 'SMS Consent and Terms & Conditions',
    content: [
      {
        subtitle: 'SMS Opt-In',
        text: 'By providing your phone number for SMS purposes, you agree to receive text messages from us. SMS opt-in or phone numbers for the purposes of SMS are not being shared with any third party or affiliate company for marketing purposes. If consent has been given to receive text messages from us, messages may be received related to healthcare updates.',
      },
      {
        subtitle: 'Message Frequency',
        text: 'You may receive text messages from us three to five times per week.',
      },
      {
        subtitle: 'Potential Fees for Messaging',
        text: "Standard messaging and data rates may apply, based on your mobile carrier's terms.",
      },
      {
        subtitle: 'Message Opt-In and Opt-Out',
        text: 'To opt-in and begin receiving messages, reply with START. To opt-out and stop receiving messages, reply with STOP. Reply HELP for support.',
      },
    ],
  },
];

export function Privacy() {
  const slideLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Privacy Policy"
        subtitle="At ProMed Health Primary Care, we are committed to protecting your privacy and ensuring the confidentiality and security of your personal information."
        breadcrumbs={[{ name: 'Privacy Policy', path: '/privacy' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div 
              {...slideLeft}
              className="lg:col-span-2 space-y-10"
            >
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div key={idx} className="space-y-4">
                    {/* Section heading */}
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className="w-8 h-8 bg-brand-accent flex items-center justify-center text-brand-secondary shrink-0">
                        <Icon size={15} />
                      </div>
                      <h2 className="text-base font-semibold text-brand-primary font-sans">{section.title}</h2>
                    </div>

                    {/* Plain text */}
                    {'text' in section && section.text && (
                      <p className="text-sm text-slate-500 leading-relaxed">{section.text}</p>
                    )}

                    {/* Bullet list */}
                    {'bullets' in section && section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-1.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Sub-sections */}
                    {'content' in section && section.content && (
                      <div className="space-y-4">
                        {section.content.map((sub, i) => (
                          <div key={i} className="bg-brand-warm border-l-2 border-brand-secondary pl-4 py-3 pr-4 space-y-1">
                            <p className="text-xs font-semibold text-brand-primary uppercase tracking-widest">{sub.subtitle}</p>
                            <p className="text-sm text-slate-500 leading-relaxed">{sub.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Changes notice */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 bg-brand-accent flex items-center justify-center text-brand-secondary shrink-0">
                    <Info size={15} />
                  </div>
                  <h2 className="text-base font-semibold text-brand-primary font-sans">Changes to This Privacy Statement</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  We reserve the right to update or modify this Privacy Statement at any time. Any changes will be posted on this page with an updated revision date.
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
               {...slideRight}
               className="space-y-5"
            >
              {/* Contact card */}
              <div className="bg-brand-primary p-6 space-y-5">
                <h3 className="text-base font-semibold text-white font-sans">Contact Us</h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  If you have any questions or concerns regarding this Privacy Statement or how your information is handled, please contact us.
                </p>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={13} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>11691 Independence Pkwy, Suite 110<br />Frisco, Texas 75035</span>
                  </div>
                  <a href="mailto:info@promedhealthmd.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Mail size={13} className="text-brand-secondary shrink-0" />
                    info@promedhealthmd.com
                  </a>
                </div>
              </div>

              {/* Effective date */}
              <div className="bg-brand-warm border border-slate-100 p-5 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Effective Date</p>
                <p className="text-sm font-semibold text-brand-primary">January 16, 2025</p>
              </div>

              {/* Quick nav */}
              <div className="bg-brand-warm border border-slate-100 p-5 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Sections</p>
                <ul className="space-y-2">
                  {sections.map((s, i) => (
                    <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-secondary shrink-0" />
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
