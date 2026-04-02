import { SectionBanner } from '../../components/ui/SectionBanner';
import { testimonials } from '../../data/content';
import { Quote, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Testimonials() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Patient Testimonials"
        subtitle="Read the personal experiences of the patients we serve at ProMed Health Primary Care."
        breadcrumbs={[{ name: 'About', path: '/about' }, { name: 'Testimonials', path: '/about/testimonials' }]}
      />

      {/* Intro */}
      <section className="sp bg-warm border-b border-border">
        <div className="wrap">
          <div className="max-w-2xl rv-left mt-[-70px]">
            <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full mb-4">Patient Stories</div>
            <h2 className="text-3xl lg:text-4xl mb-4">What Our Community Is Saying</h2>
            <p className="text-sm text-muted leading-relaxed">
              We take great pride in delivering compassionate, patient-centered care.
              Here is what our community in Frisco is saying about their experience with ProMed Health.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="sp bg-card">
        <div className="wrap">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-[-60px]">
            {testimonials.map((item, idx) => {
              const isFeatured = idx === 0 || idx === 3;
              const isAccent   = idx === 2;
              return (
                <div key={idx}
                  className={`break-inside-avoid mb-5 flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group rv-up d${(idx % 3) + 1} ${
                    isFeatured ? 'bg-p border-p'
                    : isAccent  ? 'bg-s border-s'
                    : 'bg-warm border-border hover:border-s/30'
                  }`}>
                  <div className="flex items-center justify-between">
                    <Quote size={18}
                      className={`transition-all duration-300 ${
                        isFeatured ? 'text-white/15 group-hover:text-white/50 group-hover:scale-110'
                        : isAccent  ? 'text-white/20 group-hover:text-white/60 group-hover:scale-110'
                        : 'text-border group-hover:text-s group-hover:scale-110'
                      }`}
                      fill="currentColor" />
                  </div>
                  <p className={`text-sm leading-relaxed ${isFeatured || isAccent ? 'text-white/75' : 'text-muted'}`}>
                    "{item.text}"
                  </p>
                  <div className={`flex items-center gap-3 pt-3 border-t ${isFeatured ? 'border-white/10' : isAccent ? 'border-white/20' : 'border-border'}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-semibold text-sm shrink-0 ${
                      isFeatured ? 'bg-s text-white' : isAccent ? 'bg-white text-s' : 'bg-p text-white'
                    }`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isFeatured || isAccent ? 'text-white' : 'text-p'}`}>{item.author}</p>
                      <p className={`text-xs ${isFeatured || isAccent ? 'text-white/40' : 'text-muted'}`}>Designation</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-s py-14">
        <div className="wrap flex flex-col lg:flex-row items-center justify-between gap-8 rv-up">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Health Deserves Exceptional Care.</h2>
            <p className="text-sm text-white/65">Join our community of satisfied patients. Now accepting new patients in Frisco.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm text-s text-sm font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
              <Calendar size={14} /> Book Appointment
            </Link>
            <Link to="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 text-sm font-medium px-7 py-3 rounded-full transition-all">
              Our Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
