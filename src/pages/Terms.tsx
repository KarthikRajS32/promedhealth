import { motion } from 'framer-motion';
import { SectionBanner } from '../components/ui/SectionBanner';
import { FileText, Globe, BookOpen, User, Shield, AlertCircle, ExternalLink, Scale, MessageSquare, HandshakeIcon, RefreshCw, Gavel, Mail, MapPin } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    text: 'By using our Site, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree, you must not use our Site.',
  },
  {
    icon: Globe,
    title: 'Website Use',
    text: 'The content on this Site is provided for general information purposes only. It is not intended as medical advice and should not be relied upon as a substitute for consultation with a healthcare professional. Use of this Site does not establish a doctor-patient relationship.',
  },
  {
    icon: BookOpen,
    title: 'Intellectual Property',
    text: 'All content on this Site, including but not limited to text, images, logos, and software, is the property of ProMed Health Primary Care or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may view, download, and print materials from the Site for your personal use only, provided you retain all proprietary notices. Any other use, reproduction, or distribution of the content is prohibited without our express written consent.',
  },
  {
    icon: User,
    title: 'User Conduct',
    intro: 'By using the Site, you agree not to:',
    bullets: [
      'Use the Site for any unlawful purposes or in violation of applicable laws.',
      'Upload or transmit any harmful, obscene, or offensive material.',
      'Attempt to gain unauthorized access to any part of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.',
      'Interfere with the proper functioning of the Site.',
    ],
  },
  {
    icon: Shield,
    title: 'Privacy and Data Protection',
    text: 'We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal data when you visit our Site.',
  },
  {
    icon: AlertCircle,
    title: 'Medical Disclaimer',
    text: 'The information provided on this Site is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site.',
  },
  {
    icon: ExternalLink,
    title: 'Third-Party Links',
    text: 'Our Site may contain links to third-party websites or resources. These links are provided for your convenience only. We have no control over the content of third-party sites and accept no responsibility for any loss or damage that may arise from your use of them.',
  },
  {
    icon: Scale,
    title: 'Limitation of Liability',
    text: 'To the fullest extent permitted by law, ProMed Health Primary Care and its affiliates, officers, employees, agents, and licensors will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site. This includes, but is not limited to, any damages resulting from errors, omissions, interruptions, or defects in the content provided on the Site.',
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
  {
    icon: HandshakeIcon,
    title: 'Indemnification',
    text: 'You agree to indemnify and hold ProMed Health Primary Care harmless from any claim, demand, or damage, including legal fees, asserted by any third party due to or arising out of your use of the Site or violation of these Terms.',
  },
  {
    icon: RefreshCw,
    title: 'Modifications to the Site and Terms',
    text: 'We reserve the right to modify, update, or discontinue any part of the Site at any time without notice. We may also revise these Terms at any time by updating this page. Your continued use of the Site after any changes to the Terms constitutes your acceptance of the new terms.',
  },
  {
    icon: Gavel,
    title: 'Governing Law',
    text: 'These Terms and your use of the Site are governed by and construed in accordance with the laws. Any disputes arising from or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the courts.',
  },
];

export function Terms() {
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
        title="Terms & Conditions"
        subtitle='Welcome to ProMed Health Primary Care. By accessing or using this Site, you agree to comply with and be bound by these Terms & Conditions.'
        breadcrumbs={[{ name: 'Terms & Conditions', path: '/terms' }]}
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
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className="w-8 h-8 bg-brand-accent flex items-center justify-center text-brand-secondary shrink-0">
                        <Icon size={15} />
                      </div>
                      <h2 className="text-base font-semibold text-brand-primary font-sans">{section.title}</h2>
                    </div>

                    {'text' in section && section.text && (
                      <p className="text-sm text-slate-500 leading-relaxed">{section.text}</p>
                    )}

                    {'intro' in section && section.intro && (
                      <p className="text-sm text-slate-500">{section.intro}</p>
                    )}

                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-1.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.content && (
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

              {/* Acknowledgement */}
              <div className="bg-brand-warm border border-brand-secondary/20 p-5 border-l-4 border-l-brand-secondary">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-brand-primary">By using this Site</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
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
                <h3 className="text-base font-semibold text-white font-sans">Contact Information</h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  If you have any questions about these Terms, please contact us.
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
