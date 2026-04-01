import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicInfo } from '../data/content';
import { Mail, Clock, Send, CheckCircle, AlertCircle, Plus } from 'lucide-react';
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
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── COORDINATE CARE HEADER ── */}
      <section className="container-custom relative mb-24 lg:mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <Plus size={14} className="text-brand-accent" /> Communication Hub
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Let's Coordinate <br />
            <span className="text-slate-300">Your Care.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            Our clinical administrative team is ready to assist with general inquiries, record requests, and clinic information.
          </p>
        </div>
      </section>

      {/* ── ASYMMETRIC CONTACT SPLIT ── */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Dark Info Panel (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="p-12 lg:p-16 bg-brand-primary rounded-[4rem] text-white space-y-16 overflow-hidden relative shadow-2xl">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Mail size={250} />
               </div>
               
               <div className="space-y-6 relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-widest leading-[0.9]">Emergency <br /> Protocol.</h3>
                  <div className="w-12 h-1.5 bg-brand-accent rounded-full" />
                  <p className="text-white/50 font-medium leading-relaxed italic">
                    "If you are experiencing a life-threatening medical emergency, please call <strong>911</strong> immediately."
                  </p>
               </div>

               <div className="space-y-10 relative z-10">
                  <div className="group">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-2">Direct Line</p>
                    <a href={`tel:${clinicInfo.contact.phone}`} className="text-3xl font-black group-hover:text-brand-accent transition-colors tracking-tighter">
                      {clinicInfo.contact.phone}
                    </a>
                  </div>
                  
                  <div className="group">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-2">Clinical Support</p>
                    <a href={`mailto:${clinicInfo.contact.email}`} className="text-2xl font-black group-hover:text-brand-accent transition-colors tracking-tighter truncate block">
                      {clinicInfo.contact.email}
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-2">Frisco Location</p>
                    <p className="text-xl font-black leading-tight">
                      {clinicInfo.contact.address.street},<br />
                      {clinicInfo.contact.address.city}, TX {clinicInfo.contact.address.zip}
                    </p>
                  </div>
               </div>

               <div className="pt-12 border-t border-white/5 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
                     <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Operating Hours</p>
                    <p className="font-bold text-sm">Mon - Fri • 8:00 AM – 5:00 PM</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Minimal Form Panel */}
          <div className="lg:col-span-7 space-y-16 lg:pt-10">
            <div className="space-y-4">
               <h2 className="text-4xl font-black text-brand-primary tracking-tighter">Digital Intake.</h2>
               <p className="text-brand-muted font-medium">Expected response time: Within 24-48 business hours.</p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-16 lg:p-24 bg-brand-accent rounded-[4rem] text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center text-brand-accent mx-auto shadow-xl">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-black text-brand-primary leading-tight">Protocol Executed.</h3>
                  <p className="text-lg font-bold text-brand-primary/60 max-w-sm mx-auto">
                    We've received your inquiry. A clinical coordinator will follow up via your preferred contact method.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="px-12 h-16 rounded-2xl border-brand-primary/20 text-brand-primary">
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                    <div className="relative group">
                       <input 
                         required
                         type="text"
                         className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-brand-accent outline-none font-black text-2xl text-brand-primary transition-all placeholder:opacity-0"
                         placeholder="Full Name"
                         value={formData.name}
                         onChange={e => setFormData({ ...formData, name: e.target.value })}
                       />
                       <label className="absolute left-0 top-0 text-[10px] uppercase font-black tracking-[0.2em] text-brand-muted transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-accent pointer-events-none">
                         Full Name
                       </label>
                    </div>

                    <div className="relative group">
                       <input 
                         required
                         type="email"
                         className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-brand-accent outline-none font-black text-2xl text-brand-primary transition-all placeholder:opacity-0"
                         placeholder="Email Address"
                         value={formData.email}
                         onChange={e => setFormData({ ...formData, email: e.target.value })}
                       />
                       <label className="absolute left-0 top-0 text-[10px] uppercase font-black tracking-[0.2em] text-brand-muted transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-accent pointer-events-none">
                         Email Address
                       </label>
                    </div>

                    <div className="relative group sm:col-span-2">
                       <input 
                         required
                         type="tel"
                         className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-brand-accent outline-none font-black text-2xl text-brand-primary transition-all placeholder:opacity-0"
                         placeholder="Phone Number"
                         value={formData.phone}
                         onChange={e => setFormData({ ...formData, phone: e.target.value })}
                       />
                       <label className="absolute left-0 top-0 text-[10px] uppercase font-black tracking-[0.2em] text-brand-muted transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-accent pointer-events-none">
                         Phone Number
                       </label>
                    </div>

                    <div className="relative group sm:col-span-2">
                       <textarea 
                         required
                         rows={4}
                         className="peer w-full bg-transparent border-b-2 border-slate-100 py-4 focus:border-brand-accent outline-none font-black text-2xl text-brand-primary transition-all placeholder:opacity-0 resize-none"
                         placeholder="Your Message"
                         value={formData.message}
                         onChange={e => setFormData({ ...formData, message: e.target.value })}
                       />
                       <label className="absolute left-0 top-0 text-[10px] uppercase font-black tracking-[0.2em] text-brand-muted transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-accent pointer-events-none">
                         General Inquiry / Question
                       </label>
                    </div>
                  </div>

                  <Button type="submit" size="xl" className="w-full sm:w-auto px-20 h-20 rounded-3xl group">
                    Send Secure Message <Send size={20} className="ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </form>
              )}
            </AnimatePresence>

            {/* After Hours Alert */}
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] flex gap-6 group hover:bg-white hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <AlertCircle size={24} />
               </div>
               <div className="space-y-2">
                  <h4 className="text-xl font-black text-brand-primary tracking-tight">After Hours Support</h4>
                  <p className="text-sm font-medium text-brand-muted leading-relaxed">
                    For non-emergency concerns outside our normal hours, please leave a voicemail or use the patient portal. We prioritize portal messaging for faster clinician response.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
