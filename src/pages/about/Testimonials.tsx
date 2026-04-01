import { SectionBanner } from '../../components/ui/SectionBanner';
import { testimonials, clinicInfo } from '../../data/content';
import { Quote, Star, ArrowRight } from 'lucide-react';
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

      {/* Testimonials — masonry columns, natural card heights */}
      <section className="section-padding bg-brand-warm">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {testimonials.map((item, idx) => {
              const isFeatured = idx === 0 || idx === 3;
              const isAccent = idx === 2;
              return (
                <div
                  key={idx}
                  className={`break-inside-avoid mb-5 flex flex-col gap-4 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group ${
                    isFeatured
                      ? 'bg-brand-primary border-brand-primary'
                      : isAccent
                      ? 'bg-brand-secondary border-brand-secondary'
                      : 'bg-white border-slate-100 hover:border-brand-secondary/30'
                  }`}
                >
                  {/* quote */}
                  <div className="flex items-center justify-between">
                  
                    <Quote
                      size={20}
                      className={`transition-all duration-300 ${
                        isFeatured
                          ? 'text-white/15 group-hover:text-white/50 group-hover:scale-110'
                          : isAccent
                          ? 'text-white/20 group-hover:text-white/60 group-hover:scale-110'
                          : 'text-slate-100 group-hover:text-brand-secondary group-hover:scale-110'
                      }`}
                      fill="currentColor"
                    />
                  </div>

                  {/* Full review — no truncation, no min-height */}
                  <p className={`text-sm leading-relaxed ${
                    isFeatured || isAccent ? 'text-white/75' : 'text-slate-500'
                  }`}>
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className={`flex items-center gap-3 pt-3 border-t ${
                    isFeatured ? 'border-white/10' : isAccent ? 'border-white/20' : 'border-slate-100'
                  }`}>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-sm shrink-0 ${
                      isFeatured ? 'bg-brand-secondary text-white' : isAccent ? 'bg-white text-brand-secondary' : 'bg-brand-primary text-white'
                    }`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${
                        isFeatured || isAccent ? 'text-white' : 'text-brand-primary'
                      }`}>{item.author}</p>
                      <p className={`text-xs ${
                        isFeatured || isAccent ? 'text-white/40' : 'text-slate-400'
                      }`}>Designation</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accepted Insurance Section */}
      {/* <section className="section-padding bg-brand-white border-y border-brand-accent">
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
      </section> */}

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
