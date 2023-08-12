import React from 'react'

const Main = () => {
    return (
        <div>
            <div className="container my-5 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-lg-12 card">
                        <div className="m-5">
                            <h1 className="text-center m-3 text-white">Check Your
                                BMI</h1>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control"
                                    id="bodyWeight"
                                    placeholder="Enter Your Weight in KGs"
                                    aria-label="Weight" />
                            </div>
                            <div className="input-group mb-3">

                                <input type="text" className="form-control"
                                    id="bodyHeight"
                                    placeholder="Enter Your Height in Meters"
                                    aria-label="Height" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button"
                                    className="btn submitButton btn-color fw-bold text-black-50">Submit
                                    Info</button>
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            <i className="answer fw-bold fs-3 text-black-50"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;