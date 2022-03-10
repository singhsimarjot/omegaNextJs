import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/link'
const Header = () => {
    return <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
        <header>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <Link href="/">
                        <a

                            className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-decoration-none text-white"
                        >
                            Omega
                        </a>
                    </Link>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 hoverText">
                        <li>
                            <Link href="/hire-expert">
                                <a

                                    className="nav-link px-2 link-secondary text-primary fs-6"
                                >
                                    Hire An Expert
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/industries">
                                <a
                                    className="nav-link px-2 link-dark fs-6 text-white-secondary"
                                >
                                    
                                  Industries
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a
                                    href="#"
                                    className="nav-link px-2 link-dark fs-6 text-white-secondary"
                                >
                                    About Us
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-primary me-2 rounded-2" href="tel:800-600-5822">
                        <i className="fa fa-phone" aria-hidden="true"></i> 800-600-5822
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header
