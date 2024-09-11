'use client';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../../../../public/styling/sass/heropage.scss";
import Link from "next/link";
import Image from "next/image";
import home from '../../../../public/images/home.png';
import { useState } from "react";

const heropage = () => {
    const [selectedTab, setSelectedTab] = useState('Sell')

    const tab = (option) => {
        setSelectedTab(option)
    }

    return (
        <section className="hero-page">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="hero_area">
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <div className="hero-left-area">
                                        <div className="content">
                                            <p><FontAwesomeIcon icon={faHouse} /> Best Real Estate </p>
                                            <h4>
                                                Make Yourself At Home
                                            </h4>

                                            <div className="hero-content-text">
                                                Luxury Homes from Lusaka to Livingstone.
                                                Experience Zambia's Most Desired Real Estate.
                                            </div>
                                            <div className="search-group">
                                                <div className="search-tabs">
                                                    <div className={selectedTab === 'Sell' ? 'tab-item1' : "tab-item2"} onClick={() => tab('Sell')}>Sell</div>
                                                    <div className={selectedTab === 'Rent' ? 'tab-item1' : "tab-item2"} onClick={() => tab('Rent')}>Rent</div>
                                                </div>
                                                <div className="search-form">
                                                    <div className="left">
                                                        <div className="inner_left">
                                                            <div className="home_icon"><FontAwesomeIcon icon={faHouseUser} /></div>
                                                            <DropdownButton id="dropdown" title={selectedTab == 'Sell' ? 'Property type' : 'Rent type'}>
                                                                <DropdownItem href="#">Apartment</DropdownItem>
                                                                <DropdownItem href="#">Office</DropdownItem>
                                                                <DropdownItem href="#">Villa</DropdownItem>
                                                                <DropdownItem href="#">Restrurent</DropdownItem>
                                                                <DropdownItem href="#">Farmhouse Land</DropdownItem>
                                                            </DropdownButton>
                                                        </div>
                                                        <div className="form_gruop">
                                                            <input type="text" placeholder="Search by location or Property ID..." />

                                                            <div className="right">
                                                                <div className='mobile_search_btn'>
                                                                    <Link href='#'>
                                                                        Search
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className='search_btn'>
                                                            <Link href='#'>
                                                                Search
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <div className="hero_right_area">
                                        <div className="circle"></div>
                                        <div className="circle2"></div>
                                        <div className="home">
                                            <Image src={home} fetchPriority='low' title='home' alt='home' />
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
export default heropage;
// import { useState } from "react";  

// const HeroPage = () => {  
//     const [selectedTab, setSelectedTab] = useState('sell');  

//     const tab = (option) => {  
//         setSelectedTab(option.toLowerCase());  
//     }  

//     return (  
//         <div className="search-tabs">  
//             <div   
//                 className={`tab-item1 ${selectedTab === 'sell' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}   
//                 onClick={() => tab('Sell')}  
//             >  
//                 Sell  
//             </div>  
//             <div   
//                 className={`tab-item2 ${selectedTab === 'rent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}   
//                 onClick={() => tab('Rent')}  
//             >  
//                 Rent  
//             </div>  
//         </div>  
//     );  
// }  

// export default HeroPage;