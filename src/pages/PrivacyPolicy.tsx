import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Shield, Lock, FileText, CheckCircle, Mail, MapPin } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Privacy Policy"
        subtitle="Our commitment to protecting your personal information and ensuring data confidentiality."
        breadcrumbs={[
          { name: 'Privacy Policy', path: '/privacy-policy' }
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12 lg:space-y-20">
            {/* Introductory Section */}
            <div className="space-y-6">
              <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
              <h2 className="text-3xl lg:text-5xl font-black text-brand-primary tracking-tight">Privacy Statement</h2>
              <p className="text-lg lg:text-xl font-medium text-slate-600 leading-relaxed">
                At ProMed Health Primary Care, we are committed to protecting your privacy and ensuring 
                the confidentiality and security of your personal information. This Privacy Statement 
                outlines how we collect, use, and protect any personal data that you provide when 
                accessing our website.
              </p>
            </div>

            <div className="grid gap-10 lg:gap-16">
              {/* Information We Collect */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-brand-primary">
                  <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-brand-secondary" />
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">Information We Collect</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-brand-accent/30 rounded-3xl border border-brand-accent/50 space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Personal Information</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      When you voluntarily submit forms or request appointments, we may collect personal details 
                      such as your name, contact information, and any medical information you provide.
                    </p>
                  </div>
                  <div className="p-8 bg-brand-accent/30 rounded-3xl border border-brand-accent/50 space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Technical Data</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      Information such as your IP address, browser type, device information, and browsing patterns 
                      may be collected automatically for website functionality and security purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Use of Information */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-brand-primary">
                  <FileText className="w-8 h-8 lg:w-10 lg:h-10 text-brand-secondary" />
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">Use of Information</h3>
                </div>
                <div className="bg-brand-primary p-10 lg:p-14 rounded-[40px] text-white shadow-xl shadow-brand-primary/10">
                   <p className="text-lg lg:text-xl font-medium leading-relaxed mb-8 opacity-90">
                      We use the information collected for the following purposes:
                   </p>
                   <ul className="space-y-6">
                      {[
                        "To respond to your inquiries or process appointment requests.",
                        "To provide you with relevant medical information and updates.",
                        "To improve our website and enhance user experience.",
                        "To comply with legal obligations or respond to government requests when necessary."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="w-6 h-6 rounded-full bg-brand-secondary flex-shrink-0 flex items-center justify-center text-brand-primary">
                              <CheckCircle size={14} fill="currentColor" className="text-brand-primary" />
                           </div>
                           <span className="font-bold text-lg leading-snug">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic text-center max-w-2xl mx-auto">
                    We do not sell, trade, or share your personal information with third parties, except as required by law or to provide services you have requested. In some cases, we may share information with trusted partners or healthcare providers who assist us in delivering medical care, and only with your consent.
                </p>
              </div>

              {/* Data Security & Rights */}
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-primary">
                      <Lock className="w-6 h-6 text-brand-secondary" />
                      <h3 className="text-xl font-black uppercase tracking-tight">Data Security</h3>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      We take the security of your information seriously. We implement appropriate technical, 
                      administrative, and physical safeguards to protect your personal data from unauthorized 
                      access, alteration, disclosure, or destruction.
                    </p>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-primary">
                       <Shield className="w-6 h-6 text-brand-secondary" />
                       <h3 className="text-xl font-black uppercase tracking-tight">Your Rights</h3>
                    </div>
                    <p className="text-sm font-bold text-slate-500 mb-2">You have the right to:</p>
                    <ul className="space-y-3">
                       {[
                         "Request access to or correction of the personal information we hold about you.",
                         "Withdraw consent for data processing at any time.",
                         "Request the deletion of your personal information, subject to legal obligations."
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-brand-primary font-bold">
                            <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full shrink-0" />
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Cookies & Third-Party Links */}
              <div className="p-10 lg:p-14 bg-brand-accent/20 rounded-[48px] border border-brand-accent/50 grid md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Cookies</h4>
                    <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                      Our website uses cookies to enhance user experience and analyze site traffic. 
                      You may choose to disable cookies through your browser settings, though this may 
                      affect your ability to fully utilize our website.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Third-Party Links</h4>
                    <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                      Our website may contain links to external websites. We are not responsible for 
                      the privacy practices or content of these third-party sites, and we encourage 
                      you to review their privacy policies.
                    </p>
                 </div>
              </div>

              {/* SMS Section */}
              <div className="p-10 lg:p-14 bg-brand-light rounded-[48px] border-2 border-brand-accent space-y-8">
                 <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-black text-brand-primary tracking-tight">SMS Consent and Terms & Conditions</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      By providing your phone number for SMS purposes, you agree to receive text messages from us. SMS opt-in or phone numbers for the purposes of SMS are not being shared with any third party or affiliate company for marketing purposes. If consent has been given to receive text messages from us, messages may be received related to healthcare update.
                    </p>
                 </div>
                 <div className="grid sm:grid-cols-3 gap-8">
                    <div className="space-y-2">
                       <h5 className="text-xs font-black text-brand-secondary uppercase tracking-widest">Frequency</h5>
                       <p className="text-sm font-bold text-brand-primary">3 to 5 times per week</p>
                    </div>
                    <div className="space-y-2">
                       <h5 className="text-xs font-black text-brand-secondary uppercase tracking-widest">Fees</h5>
                       <p className="text-sm font-bold text-brand-primary">Standard data rates apply</p>
                    </div>
                    <div className="space-y-2">
                       <h5 className="text-xs font-black text-brand-secondary uppercase tracking-widest">Opt-In / Out</h5>
                       <p className="text-sm font-bold text-brand-primary">START to Opt-in / STOP to Opt-out / HELP for support</p>
                    </div>
                 </div>
              </div>

              {/* Changes to Statement */}
              <div className="p-8 lg:p-12 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
                 <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Changes to This Privacy Statement</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">
                    We reserve the right to update or modify this Privacy Statement at any time. 
                    Any changes will be posted on this page with an updated revision date.
                 </p>
              </div>

              {/* Contact Information */}
              <div className="text-center space-y-8 pt-10">
                 <div className="space-y-4">
                    <h3 className="text-2xl font-black text-brand-primary tracking-tight">Contact Us</h3>
                    <p className="text-slate-600 font-medium">If you have any questions or concerns, please contact us at:</p>
                 </div>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
                    <div className="flex items-center gap-4 text-brand-primary">
                       <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-secondary">
                          <MapPin size={24} />
                       </div>
                       <address className="not-italic text-left font-bold text-sm leading-tight">
                          ProMed Health Primary Care<br/>
                          11691 Independence Pkwy, Suite 110<br/>
                          Frisco, Texas 75035
                       </address>
                    </div>
                    <div className="flex items-center gap-4 text-brand-primary">
                       <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-secondary">
                          <Mail size={24} />
                       </div>
                       <a href={`mailto:${clinicInfo.contact.email}`} className="font-bold text-sm hover:text-brand-secondary transition-colors">
                          {clinicInfo.contact.email}
                       </a>
                    </div>
                 </div>
                 <div className="pt-10 border-t border-brand-accent">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Effective Date: 01/16/2025</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
