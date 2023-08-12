import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mt-5 fw-bold text-black-50">
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <a className="navbar-brand fw-bold fs-3"
                            href="#">Body Mass Index</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h3>Feel Free to Contact Me via These Links</h3>
                        </div>
                        <div className="text-center">
                            <a href="mailto:shoukat.hasan@gmail.com"><i
                                className="fa-solid fa-envelope fa-beat-fade mx-2"
                                style={{ color: '#415240' }}></i></a>
                            <a
                                href="https://www.linkedin.com/in/shoukat-hasan/"><i
                                    className="fa-brands fa-linkedin-in fa-beat-fade mx-2"
                                    style={{ color: '#415240' }}></i></a>
                            <a href="https://www.instagram.com/mshasan1992/"><i
                                className="fa-brands fa-instagram fa-beat-fade mx-2"
                                style={{ color: '#415240' }}></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p>Copyright M. Shoukat Hasan All Rights Reserved</p>
                </div>

            </div>
        </>
    )
}

export default Footer