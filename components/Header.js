import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                    <a
                        href="/"
                        className="d-flex align-items-center col-md-3 mb-2 mb-md-0  text-decoration-none text-white"
                    >
                        Omega
                    </a>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a
                                href="#"
                                className="nav-link px-2 link-secondary text-primary fs-6"
                            >
                                Demos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="nav-link px-2 link-dark fs-6 text-white-secondary"
                            >
                                Pages
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="nav-link px-2 link-dark fs-6 text-white-secondary"
                            >
                                Support
                            </a>
                        </li>
                    </ul>
                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-primary me-2 rounded-2">
                            Get Beta access
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
