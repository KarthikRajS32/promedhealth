import { useState } from 'react';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Contact Us"
        subtitle="Get in touch with our medical team for general inquiries or clinic information."
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />

      <section className="py-12 lg:py-16 bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Info */}
            <div className="space-y-5 rv-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">Get In Touch</div>
                <h2 className="text-3xl">We're Here to Help</h2>
                <p className="text-sm text-muted leading-relaxed">Reach out for appointments, general questions, or any assistance you need.</p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: 'Phone',   value: clinicInfo.contact.phone,  href: `tel:${clinicInfo.contact.phone}` },
                  { icon: Mail,  label: 'Email',   value: clinicInfo.contact.email,  href: `mailto:${clinicInfo.contact.email}` },
                  { icon: MapPin,label: 'Address', value: `${clinicInfo.contact.address.street}, ${clinicInfo.contact.address.city}, TX ${clinicInfo.contact.address.zip}` },
                  { icon: Clock, label: 'Hours',   value: 'Mon – Fri: 8:00 AM – 5:00 PM' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 bg-card border border-border rounded-2xl rv-up d${i+1}`}>
                    <div className="w-9 h-9 bg-a rounded-lg flex items-center justify-center text-s shrink-0">
                      <item.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider">{item.label}</p>
                      {(item as any).href
                        ? <a href={(item as any).href} className="text-sm font-medium text-p hover:text-s transition-colors mt-0.5 block">{item.value}</a>
                        : <p className="text-sm font-medium text-p mt-0.5">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 rv-up d5">
                <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 leading-relaxed">
                  <strong>Emergency?</strong> If you are experiencing a life-threatening emergency, please call <strong>911</strong> immediately.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-48 shadow-sm rv-up d6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-7 space-y-5 rv-right">
              <div>
                <h3 className="text-lg font-semibold text-p">Send a Message</h3>
                <p className="text-xs text-muted mt-0.5">We'll respond within 24–48 business hours.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center">
                  <div className="w-12 h-12 bg-a rounded-full flex items-center justify-center">
                    <CheckCircle size={22} className="text-s" />
                  </div>
                  <p className="text-sm font-semibold text-p">Message Sent!</p>
                  <p className="text-xs text-muted">A coordinator will follow up via your preferred contact method.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-muted">Full Name</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-warm border border-border rounded-xl px-3 py-2.5 text-sm text-p focus:outline-none focus:border-s transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-muted">Email Address</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-warm border border-border rounded-xl px-3 py-2.5 text-sm text-p focus:outline-none focus:border-s transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-warm border border-border rounded-xl px-3 py-2.5 text-sm text-p focus:outline-none focus:border-s transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-muted">Message</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-warm border border-border rounded-xl px-3 py-2.5 text-sm text-p focus:outline-none focus:border-s transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold py-3 rounded-full transition-all hover:-translate-y-px">
                    <Send size={14} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
