import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import '../../../../public/styling/sass/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import footerlogo from "../../../../public/images/footerlogo.png";
import Image from "next/image";
const footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="footer-area">
                                <Row>
                                    <Col xxl={4} xl={4} lg={3} md={6} sm={6} xs={12}>
                                        <div className="aboutarea">
                                            <h6>About</h6>
                                            <div className="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam
                                            </div>
                                            <div className="address"><span>Email:</span> info@estate.com</div>
                                            <div className="address"><span>Phone:</span> +62 888-888-888</div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={5} md={12} sm={12} xs={12}>
                                        <div className="footer_social">
                                            <div className="left">
                                                <h6>Qucik Links</h6>
                                                <ul>
                                                    <li><Link href="">Home</Link></li>
                                                    <li><Link href="">About</Link></li>
                                                    <li><Link href="">Blog</Link></li>
                                                    <li><Link href="">Archived</Link></li>
                                                    <li><Link href="">Author</Link></li>
                                                    <li><Link href="">Contact</Link></li>
                                                </ul>
                                            </div>
                                            <div className="right">
                                                <h6>Category</h6>
                                                <ul>
                                                    <li><Link href="">Lifestyle</Link></li>
                                                    <li><Link href="">Technology</Link></li>
                                                    <li><Link href="">Travel</Link></li>
                                                    <li><Link href="">Business</Link></li>
                                                    <li><Link href="">Economy</Link></li>
                                                    <li><Link href="">Sports</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                        <div className="form_area">
                                            <h4>Weekly Newsletter</h4>
                                            <p>Get blog articles and offers via email</p>
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter your email" />
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                            <div className="btn_subscribe">Subscribe</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="footer-bootom-area">
                                <Row>
                                    <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12}>
                                        <div className="left">
                                            <div className="logo">
                                                <Link href="">
                                                    <Image src={footerlogo} alt="logo" fetchPriority="low" title="logo" />
                                                </Link>
                                            </div>
                                            <div className="address">
                                                @ 2024 All Rights Reserved  | Powered By Globiz Technology.
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={5} xl={5} lg={5} md={6} sm={12} xs={12}>
                                        <div className="right">
                                            <ul>
                                                <li>
                                                    <Link href="">Terms of Use</Link>
                                                </li>
                                                <li>
                                                    |
                                                </li>
                                                <li>
                                                    <Link href="">Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    |
                                                </li>
                                                <li>
                                                    <Link href="">Cookie Policy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
export default footer;