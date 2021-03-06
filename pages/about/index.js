import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Script from "next/script";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonials";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Data from './data.json'
import OurServices from "../../components/OurServices";
const About = ({data}) => {

  return (
    <React.Fragment>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./images/half circle.svg" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Header />
    
      <div className="position-relative">
      <div className="bg-imagehalf">
      </div>
 
      <section className="AboutInner position-relative">
        <div className="container px-4 py-2 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-6">
              <div className="abouthero">
              <div dangerouslySetInnerHTML={{ __html: data?.aboutInnerText }}>
                  </div>
                {/* <div className="position-absolute top-0">
                  <img src="/images/abstractAbout.png" alt="abstractAbout" />
                </div> */}
                <a
                  href={data?.aboutInnerButton}
                  className="btn-primary p-3 text-decoration-none px-5 d-inline-block"
                >
                Get In Tech
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="aboutPhoto text-center">
                <img
                  src={data?.aboutInnerRightImage.mediaItemUrl}
                  alt="about-img-copyright"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whoWeAre">
        <div className="container">
          <div className="startWeAre">
            <div dangerouslySetInnerHTML={{ __html: data?.startWeAre }}></div>
            {/* <span className="yellowColor">who we are</span>
            <h2 className="text-white fw-bold secondary-title mb-3">
             welcome to our world
            </h2>
            <p className="text-white w-75">
              Working with some of the largest companies in the world to
              startups, our people have helped our clients reimagine their
              business, stay agile, build stronger brands and engage their
              customers like never before. We work at the cross-section of
              technology, design, and business to deliver engaging digital
              experiences and bring ideas to life.
            </p> */}
          </div>
          <div className="row align-items-center g-lg-5 py-5">
          {data?.aboutSecondData?.map((item,i)=><div className="col-lg-4" key={i}>
              <div className="AboutExplan py-5">
                <h3 className="text-white mb-3">
                {item.aboutSecondTitle}
                <br></br>
                <span className="yellowColor">{item.aboutSecondTitleRed}</span>
                </h3>
                <p className="text-white lh-base">
                {item.aboutSecondPharagraph}
                </p>
              </div>
            </div>
            )}

            {/* <div className="col-lg-4">
              <div className="AboutExplan py-5">
                <h3 className="text-white mb-3">
                  Driven by <br></br>
                  <span className="yellowColor">values</span>
                </h3>
                <p className="text-white lh-base">
                  Our culture values ethics and integrity above all else. In
                  every engagement, we work with transparency, candidness, and
                  responsibility. It???s a promise and it matters.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="AboutExplan py-5">
                <h3 className="text-white mb-3">
                  Focused on <br></br>
                  <span className="yellowColor">outcomes</span>
                </h3>
                <p className="text-white lh-base">
                  Our clients??? success is how we measure our success. We believe
                  in, and are committed to, the outcomes we promise. And we
                  stand with our clients every step of the way.
                </p>
              </div>
            </div> */}
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
                    <div dangerouslySetInnerHTML={{ __html: data?.aboutCompany }}></div>
                    {/* <h2 className="text-white display-6 fw-bold mb-3">
                      Facts About
                      <span className="yellowColor"> Our Company</span>
                    </h2>
                    <p className="text-white text-opacity-50 lh-lg">
                      We have been developing research and development for more
                      than a decade to provide innovation to many sectors. Here
                      are some facts and numbers from 2010 year that demonstrate
                      our commitment to providing innovative solutions to our
                      valued clients, partners, and communities.
                    </p> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="PhotoCompany text-center">
                    <img src={data?.aboutCompanyRightPhoto.mediaItemUrl} alt="vd2" className="w-75" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div dangerouslySetInnerHTML={{ __html: data?.aboutTimelineSection}}></div>
            
              {/* <div className="col-lg-12">
                <div className="timeline-container">
                  <div className="timeline-end">
                    <p>
                      <i className="fas fa-key"></i>
                    </p>
                  </div>
                  <div className="timeline-continue">
                    <div className="row timeline-right">
                      <div className="col-md-6">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Jun 2020
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fas fa-user-friends"></i>
                          </div>
                          <div className="timeline-text">
                            <h3 className="fs-3">100+ Experienced Team</h3>
                            <p>
                              Lorem ipsum dolor sit amet elit ornare velit non
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row timeline-left">
                      <div className="col-md-6 d-md-none d-block">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Jan 2020
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="timeline-box">
                          <div className="timeline-icon d-md-none d-block">
                            <i className="fa fa-business-time"></i>
                          </div>
                          <div className="timeline-text">
                            <h3 className="fs-3">530+ Happy Clients.</h3>
                            <p>
                              Lorem ipsum dolor sit amet elit ornare velit non
                            </p>
                          </div>
                          <div className="timeline-icon d-md-block d-none">
                            <i className="fas fa-smile"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-block d-none">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Jan 2020
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="timeline-year">
                          <p>
                            <i className="fas fa-key"></i>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row timeline-right">
                      <div className="col-md-6">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Dec 2019
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fab fa-internet-explorer"></i>
                          </div>
                          <div className="timeline-text">
                            <h3 className="fs-3">10+ Years of Experience.</h3>
                            <p>
                              Lorem ipsum dolor sit amet elit ornare velit non
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row timeline-left">
                      <div className="col-md-6 d-md-none d-block">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Sep 2019
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="timeline-box">
                          <div className="timeline-icon d-md-none d-block">
                            <i className="fa fa-cogs"></i>
                          </div>
                          <div className="timeline-text">
                            <h3 className="fs-3">100% Quality Satisfaction.</h3>
                            <p>
                              Lorem ipsum dolor sit amet elit ornare velit non
                            </p>
                          </div>
                          <div className="timeline-icon d-md-block d-none">
                            <i className="fas fa-check-circle"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 d-md-block d-none">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Sep 2019
                        </p>
                      </div>
                    </div>

                    <div className="row timeline-right">
                      <div className="col-md-6">
                        <p className="timeline-date text-white text-opacity-50">
                          01 Jun 2019
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="timeline-box">
                          <div className="timeline-icon">
                            <i className="fas fa-industry"></i>
                          </div>
                          <div className="timeline-text">
                            <h3 className="fs-3">50+ Industries serve.</h3>
                            <p>
                              Lorem ipsum dolor sit amet elit ornare velit non
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-start">
                    <p>
                      <i className="fas fa-key"></i>
                    </p>
                  </div>
                  <div className="timeline-launch">
                    <div className="timeline-box">
                      <div className="timeline-text">
                        <h3 className="fs-3">
                          Launched our company on 01 Jan 2019
                        </h3>
                        <p>Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

    <section>
        <div className="backend">
          <div className="testimonialBg">
          <div className="container">
            <div className="row align-items-center space">
              <div className="col-md-12 mt-0">
              <h2 className="text-center text-white my-4 secondary-title fw-bold">
              {data?.aboutTestimonials}
              </h2>
              </div>
              <Testimonial 
              settings={Data.testimonialsSettings}
              data={data?.aboutTestimonialsData}
              containerClass="testimonials-wrapper text-white text-opacity-75 lh-lg text-center"
              usernameWrapper="testimonialUser yellowColor fs-6 text-center"
              />
            </div>
          </div>
        </div>
        </div>
    </section>
    </div>
      <Footer />
    </React.Fragment>
  );
};

export async function getStaticProps() {
const res = await fetch("http://localhost/pixel-mutation/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        page(id: "cG9zdDoxMg==") {
          id
          title
          aboutUs {
            aboutInnerText
          aboutInnerButton {
            url
          }
          aboutInnerRightImage {
            mediaItemUrl
          }
          startWeAre
          aboutSecondData {
            aboutSecondTitle
            aboutSecondTitleRed
            aboutSecondPharagraph
          }
          aboutCompany
          aboutCompanyRightPhoto {
            mediaItemUrl
          }
          aboutTimelineSection
          aboutTestimonials
          aboutTestimonialsData {
            description
            name
          }
        }
        }
      }
      `,
    }),
  });



      const json = await res.json();
      return {
        props: {
          data: json.data.page.aboutUs,
        },
      };
    }
    
    export default About;