import Link from "next/link";
import { getISRData, getServicesMap } from "@/lib/api";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";

export const revalidate = 30;

export async function generateMetadata() {
  const { content } = await getISRData();
  const homeMetadata = content.pagesMetadata?.home || content.globalMetadata;

  return {
    title: homeMetadata.title,
    description: homeMetadata.description,
    keywords: homeMetadata.keywords,
  };
}

export default async function Home() {
  const data = await getISRData();
  const { content, services: servicesArray, testimonials } = data;
  const services = servicesArray; // It's an array from the API

  return (
    <main>
      <HeroSection
        heroData={content.homeHero}
        services={services}
        cities={content.contact.cities}
      />

      {/* Our Healthcare Services */}
      <section id="services" className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="h3 fw-bold text-dark mb-2">Our Healthcare Services</h2>
            <p className="text-secondary small">Professional medical care delivered safely at home.</p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id || index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm service-card-edge transition-all hover-shadow p-1">
                  <div className="card-body p-4">
                    <div className="d-flex gap-4">
                      <div className="flex-shrink-0 rounded-1" style={{ width: '64px', height: '64px', backgroundColor: '#64748B' }}></div>
                      <div>
                        <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1rem' }}>{service.title}</h5>
                        <p className="text-secondary mb-3" style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>{service.description}</p>
                        <Link href={`/services/${service.id}`} className="text-primary text-decoration-none fw-bold" style={{ fontSize: '0.75rem' }}>
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <h2 className="h3 fw-bold text-center text-dark mb-4">How It Works</h2>
          <p className="text-secondary text-center small mb-5">Getting professional care at home is simple and straightforward.</p>

          <div className="row g-4">
            {[
              { id: '01', title: 'Choose Service & City', desc: 'Select the type of care you need and your location.' },
              { id: '02', title: 'Schedule date & time', desc: 'Pick a convenient time for care at home.' },
              { id: '03', title: 'Get care at home', desc: 'Our trained professionals arrive and provide care.' },
            ].map((step) => (
              <div key={step.id} className="col-md-4">
                <div className="card h-100 border-secondary-subtle rounded-3 p-4 bg-transparent" style={{ minHeight: '180px' }}>
                  <div className="h5 text-primary fw-bold mb-3">{step.id}</div>
                  <h4 className="fw-bold text-dark mb-3" style={{ fontSize: '1.05rem' }}>{step.title}</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-5 bg-white border-bottom">
        <div className="container py-4">
          <h2 className="h3 fw-bold text-center text-dark mb-4">what people say about us</h2>
          <p className="text-secondary text-center small mb-5">Getting professional care at home is simple and straightforward.</p>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id || index} className="col-md-4">
                <div className="card h-100 border-secondary-subtle rounded-3 p-4 bg-transparent" style={{ minHeight: '180px' }}>
                  <Testimonial {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Call to Action */}
      <section className="py-5 bg-white">
        <div className="container text-center py-5">
          <h2 className="h3 fw-bold text-dark mb-3">Need {content.tagline?.toLowerCase()}?</h2>
          <p className="text-secondary small mb-5">Book trusted healthcare services at your convenience.</p>
          <Link href="/book" className="btn btn-primary fw-bold px-5 py-3 rounded-2" style={{ fontSize: '0.9rem', backgroundColor: '#0D9488', border: 'none' }}>
            Book a Service Now
          </Link>
        </div>
      </section>
    </main >
  );
}
