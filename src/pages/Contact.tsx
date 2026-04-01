import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
        title="Contact Us"
        subtitle="Our team is ready to assist with inquiries, record requests, and clinic information."
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info panel */}
            <motion.div 
              {...slideLeft}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Get In Touch</p>
                <h2 className="text-2xl font-bold text-brand-primary">We're Here to Help</h2>
                <p className="text-sm text-slate-500 leading-relaxed">Reach out for appointments, general questions, or any assistance you need.</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: 'Phone', value: clinicInfo.contact.phone, href: `tel:${clinicInfo.contact.phone}` },
                  { icon: Mail, label: 'Email', value: clinicInfo.contact.email, href: `mailto:${clinicInfo.contact.email}` },
                  { icon: MapPin, label: 'Address', value: `${clinicInfo.contact.address.street}, ${clinicInfo.contact.address.city}, TX ${clinicInfo.contact.address.zip}`, href: undefined },
                  { icon: Clock, label: 'Hours', value: 'Mon – Fri: 8:00 AM – 5:00 PM', href: undefined },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-brand-light rounded-xl border border-slate-100">
                    <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors mt-0.5 block">{item.value}</a>
                      ) : (
                        <p className="text-sm font-medium text-brand-primary mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency note */}
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 leading-relaxed">
                  <strong>Emergency?</strong> If you are experiencing a life-threatening emergency, please call <strong>911</strong> immediately.
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-slate-100 h-48 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
               {...slideRight}
               className="bg-brand-light rounded-2xl border border-slate-100 p-7 space-y-6"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-brand-primary">Send a Message</h3>
                <p className="text-xs text-slate-400">We'll respond within 24–48 business hours.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-brand-secondary" />
                  </div>
                  <p className="text-sm font-semibold text-brand-primary">Message Sent!</p>
                  <p className="text-xs text-slate-400">A coordinator will follow up via your preferred contact method.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Full Name</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-brand-primary focus:outline-none focus:border-brand-secondary transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Email Address</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-brand-primary focus:outline-none focus:border-brand-secondary transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-brand-primary focus:outline-none focus:border-brand-secondary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-500">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-brand-primary focus:outline-none focus:border-brand-secondary transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold py-3 rounded-full transition-colors">
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
