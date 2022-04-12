import React,{useState} from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Script from "next/script";
import SliderCarousel from "../../components/Slider";
import Data from "../about/data.json";
import Footer from "../../components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import OurServices from "../../components/OurServices";
const CaseStudies = () => {
  
  return (
    <React.Fragment>
      <Head>
        <title>Case Study</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./images/half circle.svg" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        ></link>
        <Script>console.log("working")</Script>
      </Head>
      <Header />

      <section className="CaseInner position-relative">
        <div className="bg-imagehalf position-absolute top-50">
          <img src="/images/half circle.svg" alt="cicrle-image" />
        </div>
        <div className="container px-4 py-2 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-6">
              <div className="abouthero">
                <span className="text-white">CASE STUDY</span>
                <h1 className="text-white fw-bold">
                  Transformative UX for AI-based Critical Care Systems
                </h1>
                {/* <p className="text-white fs-6 fw-light lh-lg my-4">
                Working with data scientists and core development team for a NYC-based healthcare startup to transform critical care experience for providers.
                </p> */}
                {/* <div className="tags">
                  <span className="text-white">User Research</span>
                  <span className="text-white">UX Design</span>
                  <span className="text-white">UI Design</span>
                  <span className="text-white">Interactive Prototyping</span>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="aboutPhoto text-center">
                {/* <img src="/images/case_study_promo_1.jpg" alt="case_study_promo_1"/> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="case-projects">
                <div className="content text-white">
                  <ul className="tags list-unstyled d-inline-flex">
                    <li>Business Intelligence</li>
                    <li>Marketing Automation</li>
                    <li>United Kingdom</li>
                  </ul>
                  <h2 className="secondary-title">
                    UX &amp; UI Design for COVID-19 Return to Work Programs
                  </h2>
                  <p className="sub-head mt-3">
                    An effective Return-To-Work program for self-reporting and
                    monitoring of symptoms, testing, and contact-tracing to help
                    organizations stay a step ahead of the infections curve.
                  </p>
                  <a href="#" className="btn btn-primary me-2 rounded-2 py-2">
                    Read Full Case Study
                    <svg
                      className="ml-3"
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4697 0L9.78967 0.664992L14.6447 5.52499H0.459747V6.47499H14.6447L9.78967 11.34L10.4697 12L16.4597 5.99995L10.4697 0Z"
                        fill="white"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spacers">
        <div className="container">
          <div>
            <h3 className="text-white my-4">All Case Studies <i class="fas fa-arrow-down"></i></h3>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 caseStudy-Bg">
              <div className="realImpact d-flex two-column bg-secondary">
                <div className="case-contents w-50 ps-4">
                  <div className="content">
                    {/* <div className="logo">
                                            <img src="./assets/images/Distil.png" alt="case_study_img" />
                                        </div> */}
                    <h3
                      className="wow fadeInUp text-white"
                      data-wow-delay="500ms"
                    >
                      Artificial Intelligence. Real Impact.
                    </h3>
                    <p
                      className="wow fadeInUp text-white pe-4"
                      data-wow-delay="700ms"
                    >
                      A user experience strategy to empower marketers through a
                      sophisticated, relevant and insightful customer
                      intelligence tool.
                    </p>
                    <ul className="text-white ps-3 mb-4">
                      <li className="wow fadeInUp" data-wow-delay="800ms">
                        {" "}
                        Business Intelligence
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="900ms">
                        {" "}
                        Marketing Automation
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="1000ms">
                        {" "}
                        United Kingdom{" "}
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="btn btn-primary me-2 py-2 rounded-2"
                      data-wow-delay="1200ms"
                    >
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div className="study-image">
                  <img
                    src="/images/case_study_img.jpg"
                    alt="study-img"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* <div className="pattern_wrap d-none d-lg-block wow fadeInUp" data-wow-delay="200ms">
                                </div>  */}
              <div className="pattern_wrap"></div>
            </div>
            <div className="col-lg-6">
              <div className="realImpact text-dark bg-gradient">
                <div className="case-contents ps-4">
                  <div className="content mb-100">
                    {/* <div className="logo">
                                                <img src="./assets/images/promovi.png" alt="case_study_img" />
                                            </div> */}
                    <h3 className="text-white">
                      Transforming Digital Strategy For A Leader In Special
                      Education
                    </h3>
                    <p className="text-white">
                      eCommerce infrastructure design, development, deployment,
                      and management for a special education curriculum serving
                      5000+ school districts in the United States and Canada.
                    </p>
                    <ul className="text-white ps-3 mb-4">
                      <li>eCommerce Infrastructure</li>
                      <li>Special Education </li>
                      <li>USA</li>
                    </ul>
                    <a href="#" className="btn btn-primary me-2 py-2 rounded-2">
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div
                  className="case_study_img wow fadeInUp"
                  data-wow-delay="1300ms"
                >
                  <img
                    src="/images/case_study_img_2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-study py-5">
        <div className="container">
          <div className="ecommerce-Bg">
            <div className="row">
              <div className="col-lg-12">
                <div className="ecommerce-content">
                  <img
                    src="/images/brand-advertising.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="ecommerce-content w-75 py-4">
                  <h3 className="text-white">
                    eCommerce Design & Brand Refresh for one of the world's
                    largest publisher
                  </h3>
                  <p className="text-white">
                    Revamping the Brand and eCommerce Footprint for an eLearning
                    platform, helping millions of students reach their
                    potential.
                  </p>
                  <ul className="text-white ps-3">
                    <li>eCommerce Infrastructure</li>
                    <li>Special Education</li>
                    <li>USA</li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary me-2 py-2 rounded-2"
                    data-wow-delay="1200ms"
                  >
                    Read Full Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spacers">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="case-study bg-light">
                <div className="case-content">
                  <div className="content p-5">
                    <h3 className="">
                      An Innovative UX For A Peer Support Program for Chronic
                      Disease Management
                    </h3>
                    <p className="">
                      An Innovative User Experience For A Peer Support Program
                      for Chronic Disease Management
                    </p>
                    <ul className="ps-3">
                      <li className=""> Healthcare</li>
                      <li className=""> USA</li>
                      <li className=""> United Kingdom </li>
                    </ul>

                    <a
                      href="#"
                      className="btn btn-primary me-2 py-2 rounded-2"
                      data-wow-delay="1200ms"
                    >
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div className="case_study_img studiopod wow fadeInUp">
                  <img
                    src="/images/case_study_img_4.jpg"
                    alt="case_study_img_4"
                    className="img-fluid wow fadeInUp"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="case-study bg-dark">
                <div className="case-content">
                  <div className="content p-5">
                    <h3 className="text-white">
                    Reimagining Eurofins Media QC Environment
                    </h3>
                    <p className="text-white">
                    A media QC experience to ensure a stellar UX across all touchpoints. An innovative QC portal, enabling seamless collaboration.
                    </p>
                    <ul className="ps-3 text-white">
                      <li className=""> Media QC</li>
                      <li className=""> UX/UI Experience</li>
                      <li className=""> Web Designer </li>
                    </ul>

                    <a
                      href="#"
                      className="btn btn-primary me-2 py-2 rounded-2"
                      data-wow-delay="1200ms"
                    >
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div className="case_study_img studiopod wow fadeInUp">
                  <img
                    src="/images/case_study_img_7.jpg"
                    alt="case_study_img_4"
                    className="img-fluid wow fadeInUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-study py-5">
        <div className="container">
          <div className="platform-Bg">
            <div className="row">
              <div className="col-lg-6">
                <div className="ecommerce-content spacers ps-5">
                  <h3 className="text-white">
                  Influencer Monetization Platform for the New Age of Media
                  </h3>
                  <p className="text-white">
                  Developing a SaaS Platform That Enabled Influencers Expand and Monetize their Audience using hyper-targeted ads.
                  </p>
                  <ul className="text-white ps-3">
                    <li>Media</li>
                    <li>SaaS</li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary me-2 py-2 rounded-2"
                    data-wow-delay="1200ms"
                  >
                    Read Full Case Study
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ecommerce-content">
                  <img
                    src="/images/case_study_img_6.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spacers">
        <div className="container">
          <div className="row g-0">
          <div className="col-lg-6">
              <div className="realImpact text-dark bg-dark">
                <div className="case-contents ps-4">
                  <div className="content mb-100">
                    {/* <div className="logo">
                                                <img src="./assets/images/promovi.png" alt="case_study_img" />
                                            </div> */}
                    <h3 className="text-white">
                      Transforming Digital Strategy For A Leader In Special
                      Education
                    </h3>
                    <p className="text-white">
                      eCommerce infrastructure design, development, deployment,
                      and management for a special education curriculum serving
                      5000+ school districts in the United States and Canada.
                    </p>
                    <ul className="text-white ps-3 mb-4">
                      <li>eCommerce Infrastructure</li>
                      <li>Special Education </li>
                      <li>USA</li>
                    </ul>
                    <a href="#" className="btn btn-primary me-2 py-2 rounded-2">
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div
                  className="case_study_img wow fadeInUp"
                  data-wow-delay="1300ms"
                >
                  <img
                    src="/images/case_study_img_2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 caseStudy-Bg">
              <div className="realImpact d-flex two-column bg-blue">
                <div className="case-contents w-50 ps-4">
                  <div className="content">
                    {/* <div className="logo">
                                            <img src="./assets/images/Distil.png" alt="case_study_img" />
                                        </div> */}
                    <h3
                      className="wow fadeInUp text-white"
                      data-wow-delay="500ms"
                    >
                      Artificial Intelligence. Real Impact.
                    </h3>
                    <p
                      className="wow fadeInUp text-white pe-4"
                      data-wow-delay="700ms"
                    >
                      A user experience strategy to empower marketers through a
                      sophisticated, relevant and insightful customer
                      intelligence tool.
                    </p>
                    <ul className="text-white ps-3 mb-4">
                      <li className="wow fadeInUp" data-wow-delay="800ms">
                        {" "}
                        Business Intelligence
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="900ms">
                        {" "}
                        Marketing Automation
                      </li>
                      <li className="wow fadeInUp" data-wow-delay="1000ms">
                        {" "}
                        United Kingdom{" "}
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="btn btn-primary me-2 py-2 rounded-2"
                      data-wow-delay="1200ms"
                    >
                      Read Full Case Study
                    </a>
                  </div>
                </div>
                <div className="study-image">
                  <img
                    src="/images/case_study_img.jpg"
                    alt="study-img"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* <div className="pattern_wrap d-none d-lg-block wow fadeInUp" data-wow-delay="200ms">
                                </div>  */}
              <div className="pattern_wrap blue_pattern"></div>
            </div>

          </div>
        </div>
      </section>


      {/* <section className="whoWeAre">
        <div className="container">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-4">
              <div className="startWeAre">
                <h2 className="text-white fw-bold display-4 mb-3">
                  Our <span className="yellowColor">Roles</span> In The{" "}
                  <span className="yellowColor">Project</span>
                </h2>
                <p className="text-white fs-6 lh-lg">
                  Initiated with in-depth research, we allot the team as per
                  their expertise to offer fruitful results to the clients.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fas fa-search yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">Research</h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fas fa-chart-line yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">User Flow</h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fab fa-digital-ocean yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">Wireframe</h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fas fa-desktop yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">UI Design</h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fas fa-code yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">Frontend</h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="projectCase py-5 text-center">
                    <i
                      aria-hidden="true"
                      className="fab fa-codepen yellowColor fs-1 mb-3"
                    ></i>
                    <h3 className="text-white">Backend</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="timeline">
          <div className="container">
            <div className="spacers">
              <div className="row flex-row-reverse">
                <div className="col-lg-6">
                  <div className="aboutCompany">
                    <h2 className="text-white display-6 fw-bold mb-3">
                      SEO Onsite{" "}
                      <span className="yellowColor">optimisation</span>
                    </h2>
                    <p className="text-white text-opacity-50 lh-lg">
                      We ran display campaigns to help promote specific content
                      pieces for brand awareness in the US. These were set up to
                      target a very specific, relevant affinity audience across
                      key-topic related placements, allowing us to maximise
                      relevance, impression share and ROI.
                    </p>
                    <p className="text-white text-opacity-50 lh-lg">
                      More than 50% of traffic to Wiley Online Library comes
                      directly from Google, Google Scholar, and other search
                      engines.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="PhotoCompany">
                    <img src="/images/case_study_promo_2.jpg" alt="vd2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="timeline">
          <div className="container">
            <div className="spacers">
              <div className="row">
                <div className="col-lg-6">
                  <div className="aboutCompany">
                    <h2 className="text-white display-6 fw-bold mb-3">
                      Marketing <span className="yellowColor">Goals</span>
                    </h2>
                    <p className="text-white text-opacity-50 lh-lg">
                      A case study proves how your product has helped other
                      companies by demonstrating real-life results. Not only
                      that, but case studies typically contain quotes by the
                      customer, so it’s not just a marketing advertisement where
                      you praise your own product. Rather, other companies are
                      praising your company — and there’s no stronger marketing
                      material than a verbal recommendation or testimonial. A
                      great case study is also filled with research and stats to
                      back up points made about a project's results.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="PhotoCompany float-end">
                    <img src="/images/case_study_promo_3.jpg" alt="vd2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="rs-cta" className="rs-cta primary-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 wow fadeInLeft setes1">
                <div className="cta-content text-center">
                  <h2 className="text-white display-5 fw-bold mb-3">
                    The Challenge
                  </h2>
                  <p className="text-white fs-6 lh-lg">
                    Urban mobility is not a new challenge. And electric vehicles
                    are not a new solution. But the changing market dynamics and
                    improvements in technology, coupled with rising pollution
                    and congestion, is bringing the focus back on ways to
                    improve urban mobility. Micromobility solutions like
                    eScooters continue their dream run with massive investments
                    and burgeoning valuations for eScooter companies like Lime
                    and Bird.
                  </p>
                  <p className="text-white mb-4 fs-6 lh-lg">
                    Our team's challenge was to redefine how eScooters could
                    find a place in the urban mobility story in the years to
                    come. We had to devise a user experience strategy for
                    end-users, Fleet Managers, and Service Stations,
                    specializing in electric vehicle servicing.
                  </p>
                  <h2 className="text-white display-5 fw-bold mb-3">
                    The Contours of our Solution
                  </h2>
                  <p className="text-white fs-6 lh-lg">
                    Consumer-facing apps for managing electic vehicles have been
                    around for a while. Our solution was designed for
                    manageability from the perspective of service centers and
                    fleet managers.
                  </p>
                  <p className="text-white mb-4 fs-6 lh-lg">
                    Our user research indicated needs around 4 key areas -
                    Vehicle Deployment, Pickup, Servicing and Charging. Coupled
                    with intelligent route planning and rerouting, the UX
                    framework had to address real-world scenarios using
                    interactive prototypes with users. Our UX solution focused
                    on building an extensible, reconfigurable, and componentized
                    framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="backend">
          <div className="container px-4 py-5 text-center position-relative">
            <div className="row align-items-center g-lg-5 py-5 padd">
              <div className="col-md-12 text-lg-start">
                <h2 className="text-center text-white pb-2 display-4 fw-bold">
                  Industry Specific Problems Solved with Design
                </h2>
                <p className="text-center text-white">
                  We’ve been fortunate enough to help some great companies with
                  Digital Product Design. Here’s some of our case studies.
                </p>
              </div>
              <SliderCarousel
                settings={Data.settings}
                data={Data.imageGallery}
              />
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </React.Fragment>
  );
};

export default CaseStudies;
