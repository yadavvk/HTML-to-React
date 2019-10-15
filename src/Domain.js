import React, { Component } from 'react'

export default class Domain extends Component {
    render() {
        return (
            <div>
                <section className="bg-gray domain-search">
                    <div className="container">
                        <div className="row no-gutters">
                        <div className="col-md-3 col-lg-2 text-center text-md-left mb-3 mb-md-0">
                            <h3>Search Your Domain Now!</h3>
                        </div>
                        <div className="col-md-9 col-lg-10 pl-2 pl-xl-5">
                            <form className="form-inline flex-nowrap form-domainSearch">
                            <div className="form-group">
                                <label for="staticDomainSearch" className="sr-only">Domain Search</label>
                                <input type="text" className="form-control" id="staticDomainSearch" placeholder="Enter Your Domain name" />
                            </div>
                            <button type="submit" className="button rounded-0">Search</button>
                            </form>
                            <ul className="domain-check" style={{float:"left"}}>
                            <li className="checkbox_style">
                                <input type="checkbox" id="check1" />
                                <label for="check1">.com <span className="dollar-hint">($5.99)</span></label>
                            </li>
                            <li className="checkbox_style">
                                <input type="checkbox" id="check2" />
                                <label for="check2">.net <span className="dollar-hint">($5.99)</span></label>
                            </li>
                            <li className="checkbox_style">
                                <input type="checkbox" id="check3" />
                                <label for="check3">.org <span className="dollar-hint">($5.99)</span></label>
                            </li>
                            <li className="checkbox_style">
                                <input type="checkbox" id="check4" />
                                <label for="check4">.in <span className="dollar-hint">($5.99)</span></label>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
