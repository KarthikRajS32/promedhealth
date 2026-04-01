import { useState } from 'react';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Contact Us"
        subtitle="Get in touch with our medical team for general inquiries or clinic information."
        breadcrumbs={[
          { name: 'Contact', path: '/contact' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
              {/* Contact Form Column */}
              <div className="space-y-12">
                 <div className="space-y-6">
                    <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                    <h2 className="text-4xl lg:text-7xl font-black text-brand-primary tracking-tight">Send a Message</h2>
                    <p className="text-xl font-medium text-slate-600 leading-relaxed max-w-xl">
                       Have a question about our services or need general information? 
                       Use the form below to reach our clinical administrative team.
                    </p>
                 </div>

                 {isSubmitted ? (
                    <div className="p-12 lg:p-20 bg-brand-accent rounded-[48px] text-center space-y-8 animate-in zoom-in duration-500 border border-brand-accent/50 shadow-sm">
                       <div className="w-24 h-24 bg-brand-primary rounded-[32px] flex items-center justify-center text-brand-white mx-auto shadow-xl">
                          <CheckCircle size={48} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-4xl font-black text-brand-primary">Message Sent!</h3>
                          <p className="text-lg font-bold text-slate-500 leading-relaxed max-w-sm mx-auto">
                             Thank you for reaching out. Our team will review your inquiry and get back to you 
                             within 24-48 business hours.
                          </p>
                       </div>
                       <Button variant="outline" onClick={() => setIsSubmitted(false)} className="h-16 px-12 rounded-2xl">
                          Send Another Message
                       </Button>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 bg-brand-accent/30 p-10 lg:p-14 rounded-[48px] border border-brand-accent shadow-sm">
                       <div className="grid sm:grid-cols-2 gap-8">
                          <div className="space-y-4">
                             <label className="text-sm font-black text-brand-primary uppercase tracking-widest leading-none">Full Name</label>
                             <input 
                                required
                                type="text" 
                                className="w-full h-16 bg-brand-white rounded-2xl px-6 border-2 border-brand-accent/50 focus:border-brand-primary focus:outline-none transition-all font-bold text-brand-primary"
                                placeholder="Dr. Kavitha Ilayaraja"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                             />
                          </div>
                          <div className="space-y-4">
                             <label className="text-sm font-black text-brand-primary uppercase tracking-widest leading-none">Email Address</label>
                             <input 
                                required
                                type="email" 
                                className="w-full h-16 bg-brand-white rounded-2xl px-6 border-2 border-brand-accent/50 focus:border-brand-primary focus:outline-none transition-all font-bold text-brand-primary"
                                placeholder="name@email.com"
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                             />
                          </div>
                          <div className="space-y-4 sm:col-span-2">
                             <label className="text-sm font-black text-brand-primary uppercase tracking-widest leading-none">Phone Number</label>
                             <input 
                                required
                                type="tel" 
                                className="w-full h-16 bg-brand-white rounded-2xl px-6 border-2 border-brand-accent/50 focus:border-brand-primary focus:outline-none transition-all font-bold text-brand-primary"
                                placeholder="(945) 221-6442"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                             />
                          </div>
                          <div className="space-y-4 sm:col-span-2">
                             <label className="text-sm font-black text-brand-primary uppercase tracking-widest leading-none">Your Message</label>
                             <textarea 
                                required
                                rows={6}
                                className="w-full bg-brand-white rounded-3xl p-6 border-2 border-brand-accent/50 focus:border-brand-primary focus:outline-none transition-all font-bold text-brand-primary resize-none"
                                placeholder="How can we help you today?"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                             />
                          </div>
                       </div>
                       
                       <Button type="submit" size="lg" className="w-full h-20 text-xl font-black rounded-3xl gap-4">
                          Send Message <Send size={24} />
                       </Button>
                    </form>
                 )}
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-12 lg:sticky lg:top-32">
                 <div className="p-10 bg-brand-primary rounded-[48px] text-brand-white shadow-xl shadow-brand-primary/10 space-y-12">
                    <div className="space-y-6">
                       <h3 className="text-2xl font-black uppercase tracking-[0.2em] leading-tight">Emergency Information</h3>
                       <p className="text-lg font-medium text-brand-accent/60 leading-relaxed border-l-4 border-brand-secondary pl-6">
                          If you are experiencing a life-threatening medical emergency, please call **911** immediately.
                       </p>
                    </div>

                    <div className="space-y-8">
                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 bg-brand-white/10 rounded-2xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-white transition-colors">
                             <Phone size={28} />
                          </div>
                          <div>
                             <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest mb-1">Primary Call Center</h4>
                             <a href={`tel:${clinicInfo.contact.phone}`} className="text-2xl font-black">{clinicInfo.contact.phone}</a>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 bg-brand-white/10 rounded-2xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-white transition-colors">
                             <Mail size={28} />
                          </div>
                          <div>
                             <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest mb-1">Clinical Inquiries</h4>
                             <a href={`mailto:${clinicInfo.contact.email}`} className="text-2xl font-black">{clinicInfo.contact.email}</a>
                          </div>
                       </div>

                       <div className="flex items-center gap-6 group">
                          <div className="w-14 h-14 bg-brand-white/10 rounded-2xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-white transition-colors">
                             <MapPin size={28} />
                          </div>
                          <div>
                             <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest mb-1">Clinic Address</h4>
                             <p className="text-lg font-bold leading-tight">
                                {clinicInfo.contact.address.street},<br/>
                                {clinicInfo.contact.address.city}, TX
                             </p>
                          </div>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-secondary">
                          <Clock size={24} />
                       </div>
                       <div>
                          <p className="text-xs font-black text-brand-accent uppercase tracking-widest">Operating Hours</p>
                          <p className="text-sm font-bold mt-0.5">Mon - Fri • 8:00 AM – 5:00 PM</p>
                       </div>
                    </div>
                 </div>

                 {/* Information Alert */}
                 <div className="p-10 bg-brand-accent rounded-[48px] border border-brand-accent/50 flex gap-6">
                    <div className="w-12 h-12 bg-brand-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                       <AlertCircle size={28} />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-black text-brand-primary uppercase tracking-tight leading-none">After Hours Care</h4>
                       <p className="text-sm font-bold text-slate-500 leading-relaxed">
                          For non-emergency concerns outside our normal hours, please leave a voicemail or use the 
                          patient portal messaging system. We will follow up the next business day.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
