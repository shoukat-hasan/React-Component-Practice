import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-bg">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold fs-3 text-white" href="#">Body
                            Mass
                            Index</a>
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active fw-bold text-white"
                                        aria-current="page"
                                        href="#">BMI Calculator</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold text-white"
                                        aria-current="page"
                                        href="#">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
        </>
    )
}

export default Header