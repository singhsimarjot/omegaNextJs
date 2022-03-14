import Link from "next/link"
const Footer = () => {
    return (
        <footer>
            <div className="backend2">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">

                        <Link href="/">
                            <a className="d-flex align-items-center text-decoration-none text-white omega">
                                Omega
                            </a>
                        </Link>
                        <ul className="nav footerNavs justify-content-center mb-md-0 offwhite">
                            <li className="me-4 "><Link href="/support"><a className="nav-link px-2 link-secondary fs-6 offwhite">Support</a></Link></li>
                            <li className="me-4 "><Link href="/policy"><a className="nav-link px-2 link-dark fs-6 text-white-secondary">Privacy Policy
                            </a></Link></li>
                            <li className="me-4 "><Link href="/conditions"><a className="nav-link px-2 link-dark fs-6 text-white-secondary">Terms and
                                Conditions</a></Link></li>
                            <li><p className="nav-link px-2 link-dark fs-6 text-white">© 2020 UXTheme, All Rights
                                Reserved</p></li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
    
}



export default Footer
