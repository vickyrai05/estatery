import { Container, Row, Col } from "react-bootstrap";
import '../../../../public/styling/sass/properties.scss';
import city1 from '../../../../public/images/city1.png';
import city2 from '../../../../public/images/city2.png';
import city3 from '../../../../public/images/city3.png';
import city4 from '../../../../public/images/city4.png';
import city5 from '../../../../public/images/city5.png';
import city6 from '../../../../public/images/city6.png';
import Image from "next/image";
const properties = () => {
    return (
        <section className="properties_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="content">
                            <div className="heading">
                                Find Properties in These Cities
                            </div>
                            <div className="sub_heading">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>

                        <div className="cities_area">
                            <Row>
                                <Col xxl={6} xl={6} lg={5} md={5} sm={12} xs={12}>
                                    <div className="inner-content">
                                        <div className="img_box">
                                            <Image src={city1} fetchPriority="low" title="" alt="home-Image" />
                                        </div>
                                        <div className="image_heading">
                                            <p>8 Properties</p>
                                            <h3>New York</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={6} xl={6} lg={7} md={7} sm={12} xs={12}>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <div className="inner-content">
                                                <div className="img_box">
                                                    <Image src={city2} fetchPriority="low" title="" alt="home-Image" />
                                                </div>
                                                <div className="image_heading">
                                                    <p>2 Properties</p>
                                                    <h3>Chicago</h3>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <div className="inner-content">
                                                <div className="img_box">
                                                    <Image src={city3} fetchPriority="low" title="" alt="home-Image" />
                                                </div>
                                                <div className="image_heading">
                                                    <p>1 Properties</p>
                                                    <h3>Los Angelse</h3>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col xxl={6} xl={6} lg={7} md={7} sm={12} xs={12}>
                                    <Row>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <div className="inner-content">
                                                <div className="img_box">
                                                    <Image src={city4} fetchPriority="low" title="" alt="home-Image" />
                                                </div>
                                                <div className="image_heading">
                                                    <p>0 Properties</p>
                                                    <h3>San Diego</h3>

                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                            <div className="inner-content">
                                                <div className="img_box">
                                                    <Image src={city5} fetchPriority="low" title="" alt="home-Image" />
                                                </div>
                                                <div className="image_heading">
                                                    <p>4 Properties</p>
                                                    <h3>Florida</h3>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col xxl={6} xl={6} lg={5} md={5} sm={12} xs={12}>
                                    <div className="inner-content">
                                        <div className="img_box">
                                            <Image src={city6} fetchPriority="low" title="" alt="home-Image" />
                                        </div>
                                        <div className="image_heading">
                                            <p>2 Properties</p>
                                            <h3>Miami</h3>
                                        </div>
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

export default properties;