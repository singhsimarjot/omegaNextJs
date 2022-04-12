import React from 'react'
import Head from 'next/dist/shared/lib/head'
import ProgressBar from "react-scroll-progress-bar"; 
import { useRouter } from "next/router";
import Link from 'next/link'

const Header = () => {
    
    const router = useRouter();
    
    return <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
        <header>
            <div className="container">
                <div id="nav" className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <Link href="/">
                        <a

                            className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-decoration-none text-white pixel-logo"
                        >
                            Omega
                        </a>
                    </Link>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 hoverText">
                    <li><a href="#" className="cross-responsive" aria-label="Close Navigation"><i class="fa fa-times"></i></a></li>
                        <li className="nav-item">
                            <Link href="/">
                                <a

                                    className={`nav-link px-2 link-secondary text-white-secondary  fs-6 ${router.asPath == "/" ? "text-primary" : ""}`}
                                >
                                    Hire An Expert
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/casestudies">
                                <a
                                    className={`nav-link px-4 fs-6 text-white-secondary ${router.asPath == "/casestudies" ? "text-primary" : ""}`}
                                >    
                                  Case Study
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a
                                    href="#"
                                    className={`nav-link px-4 fs-6 text-white-secondary ${router.asPath == "/about" ? "text-primary" : ""}`}
                                >
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/inquiry">
                                <a
                                    href="#"
                                    className={`nav-link px-4 fs-6 text-white-secondary ${router.asPath == "/inquiry" ? "text-primary" : ""}`}
                                >
                                   Inquiry
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <a href="#nav" class="nav-btn" aria-label="Open Navigation"><i class="fa fa-bars"></i></a>
                    <div className="col-md-3 text-end colResp">
                        <button type="button" className="btn btn-primary me-2 rounded-2" href="tel:800-600-5822">
                        <i className="fa fa-phone" aria-hidden="true"></i> 800-600-5822
                        </button>
                    </div>
                    </div>
                </div>
                <div className="progress-bar">
            <ProgressBar 
          duration="10"
      />
      </div>
        </header>
    </>
}

export default Header
