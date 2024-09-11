import { Container, Row, Col } from "react-bootstrap";
import '../../../../public/styling/sass/home_benefit.scss';
import home2 from '../../../../public/images/home2.png';
import benefit1 from '../../../../public/images/benefit1.png';
import benefit2 from '../../../../public/images/benefit2.png';
import benefit3 from '../../../../public/images/benefit3.png';
import benefit4 from '../../../../public/images/benefit4.png';

import Image from "next/image";

const benefit = () => {
    return (
        <section className="home_benefit_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="home_benefit_area">
                            <Row>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={6} xs={12} className="d-block d-sm-flex align-items-center d-xs-flex align-items-center">
                                <div className="left">
                                    <div className="content">
                                        <h3>
                                            The new way to find your new home
                                        </h3>
                                        <p>
                                            Find your dream place to live in with more
                                            than 10k+ properties listed.
                                        </p>
                                        <div className="search_property_btn">
                                            Browse Properties
                                        </div>
                                    </div>
                                    <div className="bottom_Image">

                                        <div className="homeImage">
                                            <Image src={home2} fetchPriority="low" title="" alt="home-Image" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={7} xl={7} lg={7} md={7} sm={6} xs={12}>
                                <div className="right">
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <div className="inner_left">
                                                <div className="inner_content">
                                                    <div className="benfit_image">
                                                        <Image src={benefit1} alt="" title="" fetchPriority="low" />
                                                    </div>
                                                    <h4>Property Insurance</h4>
                                                    <p>We offer our customer property protection of
                                                        liability coverage and insurance for their better life.</p>
                                                </div>
                                                <div className="inner_content">
                                                    <div className="benfit_image">
                                                        <Image src={benefit4} alt="" title="" fetchPriority="low" />
                                                    </div>
                                                    <h4>Lowest Commission</h4>
                                                    <p>You no longer have to negotiate commissions
                                                        and haggle with other agents it only cost 2%!</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                            <div className="inner_right">
                                                <div className="inner_content">
                                                    <div className="benfit_image">
                                                        <Image src={benefit3} alt="" title="" fetchPriority="low" />
                                                    </div>
                                                    <h4>Best Price</h4>
                                                    <p>Not sure what  you should be charging for your property?
                                                        No need to worry, let us do the numbers for you.</p>
                                                </div>
                                                <div className="inner_content">
                                                    <div className="benfit_image">
                                                        <Image src={benefit2} alt="" title="" fetchPriority="low" />
                                                    </div>
                                                    <h4>Overall Control</h4>
                                                    <p>Get a virtual tour, and schedule visits before
                                                        you rent or buy any properties. You get overall control.</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

        </section>
        
    )
}
export default benefit; 
