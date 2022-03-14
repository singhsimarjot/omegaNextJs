import React from "react";
import Header from "../../components/Header";
import Head from "next/head";
import Footer from "../../components/Footer";
import SliderCarousel from "../../components/Slider";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Data from '../about/data.json'
import OurServices from "../../components/OurServices";
const HireExpert = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Hire Expert</title>
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
      <section>
        <div className="container px-4 py-2 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-6  text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3 text-white titlepart">
                Programming With No Delays
              </h1>
              <p className="mb-3 text-white guranteeText">
                We guarantee you&apos;ll be happy after 30 days or we won&apos;t invoice
                you
              </p>
              <ul className="text-white list-inline p-0 mb-5">
                <li className="lh-lg">
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>
                  Customer Focused Development
                </li>
                <li className="lh-lg">
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>
                  Industry Unique Performance Guarantee
                </li>
                <li className="lh-lg">
                  <i className="fa fa-check-square-o" aria-hidden="true"></i>{" "}
                  Hundreds of developers, designers and project managers at your
                  service
                </li>
              </ul>
              <a href="#" className="btn-primary p-3 text-decoration-none px-5">
                Get Started
              </a>
            </div>
            <div className="mx-auto col-md-6  position-relative">
              <div className="bg-secondimg">
                <img src="/images/Group 1.svg" alt="Group Image" />
              </div>
              <form className="border rounded-3 bg-light mw-380 mx-auto pt-5 pb-5 adjust">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3 adust">
                  <input
                    type="Company name"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Company name"
                  />
                  <label htmlFor="floatingPassword">Company name</label>
                </div>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  defaultValue=""
                >
                  <option value={0}>Company size</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  defaultValue=""
                >
                  <option value={0}>Yearly budget</option>
                  <option value={1}>20 lakh</option>
                  <option value={2}>50 lakh</option>
                  <option value={3}>1 Crore</option>
                </select>
                <button
                  className="w-100 btn btn-lg btn-primary py-3"
                  type="submit"
                >
                  Get Beta Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative">
        <div className="bg-imagehalf">
          <img src="/images/half circle.svg" alt="cicrle-image" />
        </div>
        <div className="container px-4 py-5 text-center position-relative">
          <div className="row align-items-center g-lg-5 py-5 padd">
            <div className="col-md-12 text-center text-lg-start ">
              <h1 className="display-4 fw-bold lh-1 mb-3 text-center text-white titlesection">
                Why Omega would <br />
                be your best fit?
              </h1>
              <p className="text-center text-white-secondary custom">
                Watch this 1 min video to learn about Omega.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4">
          <div className="col-md-12">
            <div className="bg-imageretange">
            <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 4, 750: 4, 900: 4}}
            >
                <Masonry columnsCount={4} gutter="10px">
                {Data.cardGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "100%", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="servicesBusiness">
          <div className="container-fluid p-0">
            <h2 className="display-4 fw-bold lh-1 mb-3 text-center text-white titlesection">All That Your Business Needs</h2>
            <p className="text-center text-white pb-5">We add development capacity to tech teams. Our value isn’t limited to building teams
             but is equally distributed across the project lifecycle.</p>
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="icon-text text-center py-5">
                <img src="/images/icon-1.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">WEB APPLICATION <br></br>DEVELOPMENT</h2>
                <p className="text-white lead lh-base">Create mission-critical workflows with <br></br>enterprise-grade web applications.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-text text-center bg-black py-5 h-100">
                <img src="/images/icon2.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">MOBILE APPLICATION <br></br>DEVELOPMENT</h2>
                <p className="text-white lead lh-base">Mobile applications B2B and B2C for businesses <br></br>are eager to move to a mobile-first future.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-text text-center py-5">
                <img src="/images/icon3.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">DIGITAL EXPERIENCE <br></br>DESIGN</h2>
                <p className="text-white lead lh-base">Extend your development with top <br></br>programmers on your terms and with assured <br></br>outcomes.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-text text-center bg-black py-5 h-100">
                <img src="/images/icon4.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">CUSTOM SOFTWARE <br></br>DEVELOPMENT</h2>
                <p className="text-white lead lh-base">Build custom applications to solve your specific <br></br>business difficulties. </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-text text-center py-5">
                <img src="/images/icon5.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">ENTERPRISE SOFTWARE <br></br>SOLUTIONS</h2>
                <p className="text-white lead lh-base">Working with our product specialists and <br></br>utilising the best testing services, you can shape <br></br>and confirm your vision.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="icon-text text-center bg-black py-5 h-100">
                <img src="/images/icon6.webp" alt="icon-image" />
                <h2 className="text-white fs-3 lh-base py-4 mb-0 fw-bold">SOFTWARE TESTING <br></br>SERVICES</h2>
                <p className="text-white lead lh-base">With our rigorous QA procedures, you can <br></br>confidently release software faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="BgBlue py-5">
          <div className="container px-4">
          <h2 className="display-4 fw-bold mb-3 text-white secondary text-center pt-5 titlesection">
          Everything web
              </h2>
              <p className="text-white text-center">Our company also offers complete range of web services especially designed to help clients re-imagine and then capture newest digital 
                opportunities and to also strengthen performance of existing capabilities and digital assets.</p>
                <div>
                <div className="tabs pt-5">
  <input type="radio" name="tabs" id="tabone" checked="checked" />
  <label htmlFor="tabone">Frontend </label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.frontendGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>
  
  <input type="radio" name="tabs" id="tabtwo" />
  <label htmlFor="tabtwo">Backend</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.backendGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>
  
  <input type="radio" name="tabs" id="tabthree" />
  <label htmlFor="tabthree">Database</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.databaseGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div> 
  
  <input type="radio" name="tabs" id="tabfour" />
  <label htmlFor="tabfour">CMS</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.cmsGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>

  <input type="radio" name="tabs" id="tabfive" />
  <label htmlFor="tabfive">Cloud</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.cloudGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>

  <input type="radio" name="tabs" id="tabsix" />
  <label htmlFor="tabsix">Testing</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.testingGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>

  <input type="radio" name="tabs" id="tabseven" />
  <label htmlFor="tabseven">DevOps</label>
  <div className="tab">
  <div className="g-4 py-5">
            <ResponsiveMasonry
                columnsCountBreakPoints={{550: 6, 750: 4, 900: 6}}
            >
                <Masonry columnsCount={6} gutter="10px">
                {Data.devopsGallery.map((item,i)=>
                <div key={i}>
                  <img
                    src={item.image}
                    key={i}
                    alt="Icon"
                    style={{width: "190px", display: "block"}}
                  />
                  </div>
               )}
                </Masonry>
            </ResponsiveMasonry>
            </div>
  </div>

</div>
                </div>   
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-7 text-lg-start">
              <h2 className="display-4 fw-bold lh-1 mb-3 text-white secondary titlesection">
                Who Are We?
              </h2>
              <p className="mb-4 text-white-secondary custom">
                We are programmers who are experts in both legacy and modern
                platforms. We extend your existing team so you can accomplish
                your goals faster. We offer an industry unique “Don’t pay us if
                you are not satisfied” guarantee on our work.
              </p>
              <button
                type="button"
                className="btn btn-primary me-2 rounded-2 py-2"
              >
                Dedicated Team
              </button>
            </div>
            <div className="mx-auto col-md-5 ">
              <ul className="Coexperience list-inline">
                <li>
                  350+
                  <div>Qualified Experts</div>
                </li>
                <li>
                  1,000+
                  <div>Projects Delivered</div>
                </li>
                <li>
                  150+
                  <div>Satisfied Customers</div>
                </li>
                <li>
                  42%
                  <div>YOY Growth</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="companyCards py-5">
          <div className="container">
            <h2 className="display-4 fw-bold text-center text-white pb-5">
              Why Choose Us To Build Your Future
            </h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="cardText bg-white">
                  <h2 className="titleCard text-center border-bottom fs-3 pb-3 py-4">
                    Legacy & Modern Platform Support
                  </h2>
                  <div className="pt-2 px-4">
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Experts who understand both legacy and modern platforms
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Certified programmers with SME and large enterprise
                      experience
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Onsite or Remote Support
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cardText bg-white">
                  <h2 className="titleCard text-center border-bottom fs-3 pb-3 py-4">
                    Performance
                    <br />
                    Guarantee
                  </h2>
                  <div className="pt-2 px-4">
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Try us for thirty days
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      If you are not happy, you will not be invoiced
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      No Upfront Fee
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cardText bg-white">
                  <h2 className="titleCard text-center border-bottom fs-3 pb-3 py-4">
                    Transparent
                    <br />
                    Billing
                  </h2>
                  <div className="pt-2 px-4">
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      Fixed monthly pricing
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      No overtime charges
                    </p>
                    <p className="d-flex align-items-baseline lh-base">
                      <i
                        className="fa fa-check-square-o me-1"
                        aria-hidden="true"
                      ></i>{" "}
                      No long term agreements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-white py-5 mb-0">
              *Our programmers were featured in IBM Fresh Faces.{" "}
              <a href="#" className="text-white">
                Learn more
              </a>
            </p>
            <div className="happyclients">
              <h3 className="text-white text-center border py-3 mb-5">
                <b>Happy Customers</b>{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i> 100%
                of our customers would recommend us to a friend
              </h3>
              <button
                className=" btn btn-lg btn-primary py-2 px-4 btncenter"
                type="submit"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="backend">
          <div className="container px-4 py-5 text-center position-relative">
            <div className="row align-items-center g-lg-5 py-5 padd">
              <div className="col-md-12 text-lg-start">
              <h2 className="text-center text-white pb-2">
              Certifications and Partnerships
            </h2>
              </div>
              <SliderCarousel 
              settings={Data.settings}
              data={Data.imageGallery}
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
          <div className="videoTestimonials py-5">
              <div className="container">
              <h2 className="text-center text-white py-5">
              Video Testimonials
                </h2>
                  <div className="row">
                      <div className="col-lg-4">
                          <div className="VideoImage">
                          <iframe width="420" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4">
                          <div className="VideoImage">
                          <iframe width="420" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4">
                          <div className="VideoImage">
                          <iframe width="420" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                      </div>
                  </div>
              </div>
      </section> */}

      <section>
          <div className="ClientsExperiences pb-5">
              <div className="container">
                  <div className="py-5">
              <h2 className="display-4 fw-bold text-center text-white">
              Clients’ Experiences
                </h2>
                <p className="text-center text-white">Our clients return to us, saying we’re high performing, reliable, helpful, quick and productive.</p>
                </div>
                  <div className="row">
                      <div className="col-lg-4">
                          <div className="clientsCard bg-white text-center p-4 btn draw-border">
                          <img
                    src="./images/granicus-logo.png"
                    alt="Icon-5"
                    className="img-fluid pb-2"
                  />
                  <p>Programmers.io has been so helpful. We have been using them for over 18 months and I am constantly looking for more projects to send them.</p>
                  <p>‐ Director, Implementation and Support, Land & Vitals</p>
                  <p className="text-primary">Granicus</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                          <div className="clientsCard bg-white text-center p-4 btn draw-border">
                          <img
                    src="./images/wn-logo.png"
                    alt="Icon-5"
                    className="img-fluid pb-2"
                  />
                  <p>The team is performing really well. They are learning fast and work with our team and culture well.</p>
                  <p className="pt-5">‐ Applications Director</p>
                  <p className="text-primary">Western National Insurance</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                          <div className="clientsCard bg-white text-center p-4 btn draw-border">
                          <img
                    src="./images/saia-logo.png"
                    alt="Icon-5"
                    className="img-fluid pb-2"
                  />
                  <p>The team at Programmers.io has been fantastic. I was surprised at how fast they learned our system and were producing code…</p>
                  <p className="pt-4">‐ EDI Manager</p>
                  <p className="text-primary">Saia</p>
                        </div>
                    </div>
                      </div>
                  </div>
              </div>
      </section>
 
      <Footer />
    </React.Fragment>
  );
};

export default HireExpert;
