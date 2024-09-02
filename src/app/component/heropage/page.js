import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../../../../public/styling/sass/heropage.scss";

const heropage = () => {
    return (
        <section className="hero-page">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="hero-area">
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                    <div className="hero-content">
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
                                                <div className="tab-item1">Sell</div>
                                                <div className="tab-item2">Rent</div>
                                            </div>
                                            <div className="search-form">
                                                <div>
                                                    <DropdownButton id="dropdown-basic-button" title="">
                                                        <DropdownItem href="#/action-1">Action</DropdownItem>
                                                        <DropdownItem href="#/action-2">Another action</DropdownItem>
                                                        <DropdownItem href="#/action-3">Something else</DropdownItem>
                                                    </DropdownButton>
                                                </div>
                                            </div>
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