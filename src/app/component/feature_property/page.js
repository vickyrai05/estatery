'use client';
import { Container, Row, Col } from "react-bootstrap";
import '../../../../public/styling/sass/feature_property.scss';
import Link from "next/link";
import Image from "next/image";
import feature1 from '../../../../public/images/feature1.png'
import feature2 from '../../../../public/images/feature2.png'
import feature3 from '../../../../public/images/feature3.png'
import feature4 from '../../../../public/images/feature4.png'
import feature5 from '../../../../public/images/feature5.png'
import feature6 from '../../../../public/images/feature6.png'
import f_icon1 from '../../../../public/images/f_icon1.png';
import f_icon2 from '../../../../public/images/f_icon2.png';
import f_icon3 from '../../../../public/images/f_icon3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const feature = () => {
    const [key, setKey] = useState('allproperties');
    return (
        <section className="feature_property">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="feature_area">
                            <div className="content">
                                <h3>Featured Properties</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="category_area">
                                <div className="listing">
                                    <Link href='#'>See All listing <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>

                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3"
                                >
                                    <Tab eventKey="allproperties" title="All Properties">
                                        <div className="property_categries">
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature1} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Luxury Family Home</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />1800-1818 79th St</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>5</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />180,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature2} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>

                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4> Skyper Pool Apartment</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />1020 Bloomingdale Ave</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>450</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />280,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature3} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Rent</div>

                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>North Dillard Street</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />4330 Bell Shoals Rd</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />250<span>/month</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature4} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Eaton Garth Penthouse</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />7722 18th Ave, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>450</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />180,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature5} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>New Apartment Nice Wiew</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />42 Avenue O, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>1</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>460</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />850<span>
                                                                        /month</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature6} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Diamond Manor Apartment</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />7802 20th Ave, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>500</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />259,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="villa" title="Villa">
                                        <div className="property_categries">
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature1} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Luxury Family Home</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />1800-1818 79th St</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>5</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />180,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature3} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Rent</div>

                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>North Dillard Street</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />4330 Bell Shoals Rd</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />250<span>/month</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="apartments" title="Apartments">
                                        <div className="property_categries">
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature4} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Eaton Garth Penthouse</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />7722 18th Ave, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>450</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />180,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature5} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>New Apartment Nice Wiew</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />42 Avenue O, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>1</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>460</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />850<span>
                                                                        /month</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature6} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Diamond Manor Apartment</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />7802 20th Ave, Brooklyn</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>500</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />259,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="office" title="Office">
                                        <div className="property_categries">
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature1} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Sale</div>
                                                            <div className="title_2">FEATURED</div>
                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>Luxury Family Home</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />1800-1818 79th St</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>5</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />180,000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="content">
                                                        <div className='imageBox'>
                                                            <Image src={feature3} alt="" title="" fetchPriority="low" />
                                                        </div>
                                                        <div className="topInnerContent">
                                                            <div className="title_1">For Rent</div>

                                                        </div>
                                                        <div className="bottomInnerContent">
                                                            <h4>North Dillard Street</h4>
                                                            <p><FontAwesomeIcon icon={faLocationDot} />4330 Bell Shoals Rd</p>
                                                            <div className="pricingBox">
                                                                <div className="inner_left">
                                                                    <ul>
                                                                        <li><div className="icons"><Image src={f_icon1} alt="" title="" fetchPriority="low" /></div> <span>4</span></li>

                                                                        <li><div className="icons"><Image src={f_icon2} alt="" title="" fetchPriority="low" /></div> <span>2</span></li>

                                                                        <li><div className="icons"><Image src={f_icon3} alt="" title="" fetchPriority="low" /></div> <span>400</span></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="inner_right">
                                                                    <FontAwesomeIcon icon={faDollarSign} />250<span>/month</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab>
                                </Tabs>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default feature;