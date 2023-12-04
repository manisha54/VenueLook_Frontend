import { Link } from "react-router-dom"


function ContactUs() {
    return (
    
        <div className='master-wrapper-content'data-testid="contact-us">
            <div className='master-column-wrapper'>
                <div className="centre-1">
                    <div className='page-head'>
                        <div className='container2'>
                            <h3>
                                Keep in Touch
                            </h3>
                            <div className='service-breadcrum'>
                                <div className='agile_inner_breadcrumb'>
                                    <ul className='w3_short'>
                                    <li><Link href="/">Home</Link></li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='banner_bottom'>
                        <div className='container3'>
                            <div className='contact-grid'>
                                <div className='col-md-4 contact-grid1'>
                                    <div className='contact-grid2'>
                                        {/* <FaLocationDot/> */}
                                        <h4>Address</h4>
                                        <p>
                                            Anamnagar
                                            <span>kathmandu</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4 contact-grid1'>
                                    <div className='contact-grid2'>
                                        {/* <FaLocationDot/> */}
                                        <h4>call us</h4>
                                        <p>
                                            +977 9800562062
                                            <span>kathmandu</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-4 contact-grid1'>
                                    <div className='contact-grid2'>
                                        {/* <FaLocationDot/> */}
                                        <h4>Email</h4>
                                        <p>
                                            <span>
                                                <a href="mailto:venuelook@gmail.com">
                                                    venuelook@gmail.com </a>
                                            </span>

                                        </p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact_container mb-3 py-0'>
                <h1 className="text-centre">Enjoy</h1>         
            </div>
        </div>


    )
}

export default ContactUs
