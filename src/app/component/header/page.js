import { Col, Container, Row } from "react-bootstrap";
import '../../../../public/styling/sass/header.scss';
import logo from "../../../../public/images/estateLogo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="header-area">
                            <div className="left-area">
                                <div className="logo">
                                    <Link href="/">
                                        <Image src={logo} alt="logo" fetchPriority="low" title="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="right">
                                <div className="inner-left">
                                    <nav>
                                        <ul>
                                            <li><Link href="">Homepage</Link></li>
                                            <li><Link href="">Buy</Link></li>
                                            <li><Link href="">About us</Link></li>
                                            <li><Link href="">Sell</Link></li>
                                            <li><Link href="">Blogs</Link></li>
                                            <li><Link href="">Contact us</Link></li>
                                            <li><Link href="">Liked Properties</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="inner-right">
                                    <Link href="">
                                        <div className="login_btn">Login</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </header>
    );
};

export default Header;