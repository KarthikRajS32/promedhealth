import { Link } from 'react-router-dom';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Gavel, Scale, Info, AlertCircle, Heart, Mail, MapPin } from 'lucide-react';

export function TermsAndConditions() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Terms & Conditions"
        subtitle="Governing the use of our website and services to ensure a safe and transparent experience."
        breadcrumbs={[
          { name: 'Terms & Conditions', path: '/terms-conditions' }
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12 lg:space-y-20">
            {/* Introductory Section */}
            <div className="space-y-6">
              <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
              <h2 className="text-3xl lg:text-5xl font-black text-brand-primary tracking-tight">Terms of Use</h2>
              <p className="text-lg lg:text-xl font-medium text-slate-600 leading-relaxed">
                Welcome to ProMed Health Primary Care website (“promedhealthmd.com”). By accessing or using 
                this Site, you agree to comply with and be bound by these Terms & Conditions. Please read 
                these Terms carefully before using the Site.
              </p>
            </div>

            <div className="grid gap-12 lg:gap-20">
              {/* Core Sections Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                 <div className="p-8 bg-brand-accent/20 rounded-[32px] border border-brand-accent/50 space-y-4">
                    <div className="flex items-center gap-3 text-brand-primary">
                       <Scale size={24} className="text-brand-secondary" />
                       <h3 className="text-xl font-black uppercase tracking-tight">Acceptance of Terms</h3>
                    </div>
                    <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                       By using our Site, you confirm that you accept these Terms and that you agree to 
                       comply with them. If you do not agree, you must not use our Site.
                    </p>
                 </div>
                 
                 <div className="p-8 bg-brand-accent/20 rounded-[32px] border border-brand-accent/50 space-y-4">
                    <div className="flex items-center gap-3 text-brand-primary">
                       <Info size={24} className="text-brand-secondary" />
                       <h3 className="text-xl font-black uppercase tracking-tight">Website Use</h3>
                    </div>
                    <p className="text-sm lg:text-base text-slate-600 font-medium leading-relaxed">
                       Content is for general information only. It is not intended as medical advice. 
                       Use of this Site does not establish a doctor-patient relationship.
                    </p>
                 </div>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-brand-primary">
                    <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white">
                       <Gavel size={24} />
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight">Intellectual Property</h3>
                 </div>
                 <p className="text-lg font-medium text-slate-600 leading-relaxed px-4 border-l-4 border-brand-secondary">
                    All content on this Site, including but not limited to text, images, logos, and software, is the property of ProMed Health Primary Care or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may view, download, and print materials from the Site for your personal use only, provided you retain all proprietary notices. Any other use, reproduction, or distribution of the content is prohibited without our express written consent.
                 </p>
              </div>

              {/* User Conduct & Medical Disclaimer */}
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                 <div className="space-y-8">
                    <h4 className="text-xl font-black text-brand-primary uppercase tracking-widest flex items-center gap-3">
                       <AlertCircle size={20} className="text-brand-secondary" /> User Conduct
                    </h4>
                    <p className="text-sm text-slate-500 font-bold mb-4 italic">By using the Site, you agree not to:</p>
                    <ul className="space-y-4">
                       {[
                         "Use the Site for any unlawful purposes or in violation of applicable laws.",
                         "Upload or transmit any harmful, obscene, or offensive material.",
                         "Attempt to gain unauthorized access to any part of the Site, the server on which the Site is stored, or any server, computer, or database connected to the Site.",
                         "Interfere with the proper functioning of the Site."
                       ].map((item, i) => (
                         <li key={i} className="flex items-start gap-4 p-4 bg-brand-accent/30 rounded-2xl border border-brand-accent/50">
                            <div className="w-2 h-2 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                            <span className="font-bold text-slate-600 leading-snug">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="space-y-8">
                    <h4 className="text-xl font-black text-brand-primary uppercase tracking-widest flex items-center gap-3">
                      <Heart size={20} className="text-brand-secondary" /> Medical Disclaimer
                    </h4>
                    <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                       <p>
                         The information provided on this Site is for informational purposes only and does 
                         not constitute medical advice, diagnosis, or treatment. 
                       </p>
                       <div className="p-6 bg-brand-primary/5 rounded-3xl border-l-4 border-brand-primary space-y-4">
                          <p>
                            Always seek the advice of your physician or other qualified healthcare provider 
                            with any questions you may have regarding a medical condition.
                          </p>
                          <p className="font-bold text-brand-primary">
                            Never disregard professional medical advice or delay in seeking it because of 
                            something you have read on this Site.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Privacy, Links & Indemnification */}
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                 <div className="p-8 bg-brand-light rounded-[32px] border border-brand-accent space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Privacy</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                       We are committed to protecting your privacy. Please review our 
                       <Link to="/privacy-policy" className="text-brand-secondary hover:underline ml-1">Privacy Policy</Link> to 
                       understand how we collect, use, and safeguard your personal data when you visit our Site.
                    </p>
                 </div>
                 <div className="p-8 bg-brand-light rounded-[32px] border border-brand-accent space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Third-Party Links</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                       Our Site may contain links to third-party websites or resources. These links are provided 
                       for your convenience only. We have no control over the content of third-party sites and 
                       accept no responsibility for any loss or damage that may arise from your use of them.
                    </p>
                 </div>
                 <div className="p-8 bg-brand-light rounded-[32px] border border-brand-accent space-y-4">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest">Indemnification</h4>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                       You agree to indemnify and hold ProMed Health Primary Care harmless from any claim, 
                       demand, or damage, including legal fees, asserted by any third party due to or 
                       arising out of your use of the Site or violation of these Terms.
                    </p>
                 </div>
              </div>

              {/* SMS Consent and Terms Section */}
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

              {/* Liability, Law & Modifications */}
              <div className="space-y-12">
                 <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                    <div className="p-10 lg:p-12 bg-brand-primary rounded-[40px] text-white">
                       <h4 className="text-lg text-gray-300 uppercase tracking-widest mb-6 border-b border-white/20 pb-4 leading-relaxed">Limitation of Liability</h4>
                       <p className="text-white/80 font-medium leading-relaxed">
                          To the fullest extent permitted by law, ProMed Health Primary Care and its affiliates, 
                          officers, employees, agents, and licensors will not be liable for any indirect, 
                          incidental, special, consequential, or punitive damages arising out of or in 
                          connection with your use of the Site. This includes, but is not limited to, any 
                          damages resulting from errors, omissions, interruptions, or defects in the content 
                          provided on the Site.
                       </p>
                    </div>
                    <div className="p-10 lg:p-12 bg-brand-accent/40 rounded-[40px] border border-brand-accent">
                       <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-6 border-b border-brand-primary/20 pb-4">Modifications</h4>
                       <p className="text-slate-600 font-medium leading-relaxed">
                          We reserve the right to modify, update, or discontinue any part of the Site at any 
                          time without notice. We may also revise these Terms at any time by updating this 
                          page. Your continued use of the Site after any changes to the Terms constitutes 
                          your acceptance of the new terms.
                       </p>
                    </div>
                 </div>
                 <div className="text-center p-8 bg-brand-light rounded-[32px] border border-brand-accent">
                    <h4 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">Governing Law</h4>
                    <p className="text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                       These Terms and your use of the Site are governed by and construed in accordance with the laws. 
                       Any disputes arising from or relating to the Site or these Terms shall be subject to the 
                       exclusive jurisdiction of the courts.
                    </p>
                 </div>
              </div>

              {/* Final Acknowledgement */}
              <div className="text-center space-y-12 pt-10 border-t border-brand-accent">
                 <p className="text-lg font-black text-brand-primary max-w-2xl mx-auto italic">
                    By using this Site, you acknowledge that you have read, understood, and agree to be 
                    bound by these Terms & Conditions.
                 </p>
                 <div className="space-y-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
                       <div className="flex items-center gap-4 text-brand-primary">
                          <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-secondary">
                             <MapPin size={24} />
                          </div>
                          <address className="not-italic text-left font-bold text-sm leading-tight text-slate-600">
                             ProMed Health Primary Care<br/>
                             11691 Independence Pkwy, Suite 110<br/>
                             Frisco, Texas 75035
                          </address>
                       </div>
                       <div className="flex items-center gap-4 text-brand-primary">
                          <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-secondary">
                             <Mail size={24} />
                          </div>
                          <a href={`mailto:${clinicInfo.contact.email}`} className="font-bold text-sm text-slate-600 hover:text-brand-secondary transition-colors">
                             {clinicInfo.contact.email}
                          </a>
                       </div>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] pt-4">Effective Date: 01/16/2025</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
