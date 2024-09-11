'use client';
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../../../public/styling/sass/header.scss';
import logo from "../../../../public/images/estateLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('')

    const handleActive = (linkName) => {
        setActiveLink(linkName)
        setIsOpen(false)
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

    }, [isOpen]);
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
                                            <li><Link href="/" className={activeLink === 'Homepage' ? 'linkactive' : ''} onClick={() => handleActive('Homepage')}>Homepage</Link></li>
                                            <li><Link href="" className={activeLink === 'Buy' ? 'linkactive' : ''} onClick={() => handleActive('Buy')}>Buy</Link></li>
                                            <li><Link href="" className={activeLink === 'About_us' ? 'linkactive' : ''} onClick={() => handleActive('About_us')}>About us</Link></li>
                                            <li><Link href="" className={activeLink === 'Sell' ? 'linkactive' : ''} onClick={() => handleActive('Sell')}>Sell</Link></li>
                                            <li><Link href="/listing/blog" className={activeLink === 'Blogs' ? 'linkactive' : ''} onClick={() => handleActive('Blogs')}>Blogs</Link></li>
                                            <li><Link href="" className={activeLink === 'Contact_us' ? 'linkactive' : ''} onClick={() => handleActive('Contact_us')}>Contact us</Link></li>
                                            <li><Link href="" className={activeLink === 'Liked_Properties' ? 'linkactive' : ''} onClick={() => handleActive('Liked_Properties')}>Liked Properties</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="inner-right">
                                    <Link href='' className="login_btn">
                                        Login
                                    </Link>
                                </div>

                            </div>
                            <div className="bars" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                            </div>
                            <div className={`mobile_menus ${!isOpen ? 'active' : ''}`}>
                                <ul>
                                    <li><Link href="/" className={activeLink === 'Homepage' ? 'linkactive' : ''} onClick={() => handleActive('Homepage')}>Homepage</Link></li>
                                    <li><Link href="" className={activeLink === 'Buy' ? 'linkactive' : ''} onClick={() => handleActive('Buy')}>Buy</Link></li>
                                    <li><Link href="" className={activeLink === 'About_us' ? 'linkactive' : ''} onClick={() => handleActive('About_us')}>About us</Link></li>
                                    <li><Link href="" className={activeLink === 'Sell' ? 'linkactive' : ''} onClick={() => handleActive('Sell')}>Sell</Link></li>
                                    <li><Link href="/listing/blog" className={activeLink === 'Blogs' ? 'linkactive' : ''} onClick={() => handleActive('Blogs')}>Blogs</Link></li>
                                    <li><Link href="" className={activeLink === 'Contact_us' ? 'linkactive' : ''} onClick={() => handleActive('Contact_us')}>Contact us</Link></li>
                                    <li><Link href="" className={activeLink === 'Liked_Properties' ? 'linkactive' : ''} onClick={() => handleActive('Liked_Properties')}>Liked Properties</Link></li>
                                    <li><Link href="">Login</Link></li>
                                </ul>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </header>
    );
};

export default Header;
