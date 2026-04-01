import { SectionBanner } from '../../components/ui/SectionBanner';
import { testimonials, clinicInfo } from '../../data/content';
import { Quote, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function Testimonials() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Patient Testimonials"
        subtitle="Read the personal experiences of the patients we serve at ProMed Health Primary Care."
        breadcrumbs={[
          { name: 'About', path: '/about' },
          { name: 'Testimonials', path: '/about/testimonials' }
        ]}
      />

      {/* Intro Stats - Simplified */}
      <section className="py-20 bg-brand-white border-b border-brand-accent">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="h-1.5 w-16 bg-brand-secondary rounded-full mb-6" />
            <h2 className="text-3xl lg:text-4xl font-black text-brand-primary mb-4">Patient Stories</h2>
            <p className="text-lg font-medium text-slate-500 leading-relaxed">
              We take great pride in delivering compassionate, patient-centered care. 
              Here is what our community in Frisco is saying about their experience with ProMed Health.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-brand-light relative overflow-hidden">
         {/* Background Shapes */}
         <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-brand-accent/30 blur-3xl opacity-50" />
         <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-brand-secondary/5 blur-2xl opacity-50" />

        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((item, idx) => (
              <div key={idx} className="group relative p-10 bg-brand-white rounded-[40px] border border-brand-accent shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-2">
                <div className="absolute top-8 left-10 text-brand-accent/30 group-hover:text-brand-secondary/20 transition-colors">
                  <Quote size={64} strokeWidth={3} />
                </div>
                
                <div className="relative z-10 space-y-8 h-full flex flex-col">
                  <p className="text-lg font-medium text-slate-600 leading-relaxed flex-grow">
                    "{item.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-black text-brand-primary">{item.author}</h4>
                      <p className="text-xs font-bold text-slate-400 tracking-widest mt-1">Designation</p>
                    </div>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-secondary group-hover:bg-brand-primary group-hover:text-brand-white transition-colors">
                      <CheckCircle size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Insurance Section */}
      <section className="section-padding bg-brand-white border-y border-brand-accent">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-brand-primary">Accepted Insurance</h2>
            <p className="text-lg font-medium text-slate-500 max-w-2xl mx-auto">
              We accept most major insurance plans and Medicare to ensure quality care is accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clinicInfo.insurancePlans.map((plan) => (
              <div key={plan} className="p-8 bg-brand-light rounded-3xl border border-brand-accent flex items-center justify-center text-center hover:bg-brand-white hover:shadow-xl transition-all group">
                <span className="text-lg font-black text-brand-primary group-hover:text-brand-secondary transition-colors decoration-brand-secondary/30 underline-offset-4">
                  {plan}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-brand-accent/30 rounded-3xl border border-brand-accent text-center">
            <p className="text-brand-primary font-bold">
              Don't see your plan? <Link to="/contact" className="text-brand-secondary underline underline-offset-4 hover:text-brand-primary transition-colors">Contact us</Link> to verify coverage or discuss self-pay options.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="bg-brand-primary rounded-[40px] p-10 lg:p-16 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000 rotate-12">
                <Star size={320} />
             </div>
             
             <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-brand-white leading-tight tracking-tight">Your Health Deserves <br/> Exceptional Care.</h2>
                <p className="text-lg font-medium text-brand-accent/80 leading-relaxed">
                  Join our community of healthy, satisfied patients. We're currently accepting new patients at our Frisco location.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/appointments">
                    <Button size="lg" className="h-16 px-12 text-lg">Book Appointment</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="border-brand-white/20 text-brand-white hover:bg-brand-white/10 h-16 px-12 text-lg gap-2">
                       Our Services <ArrowRight size={20} />
                    </Button>
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
