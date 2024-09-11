import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import detailimg from '../../../../public/images/detailimg.png'
import '../../../../public/styling/sass/detail_page.scss';

const detail = () => {
    return (
        <section className="detailpage_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="detail_page_area">
                            <div className="heading">
                                What is apartment? Understand the
                                Difference Between a Flat and an Apartment
                            </div>
                            <div className="sub_heading">
                                <div className="left"> <FontAwesomeIcon icon={faCircleUser} className="usericon" /><span >Olivia Rhye</span> </div>
                                <div className="right">1 Jan 2023</div>
                            </div>
                            <div className="image_box">
                                <Image src={detailimg} alt="" fetchPriority="low" title="" />
                            </div>

                            <div className="paragraph_detail">
                                <p>Traveling is an enriching experience that opens up new horizons,
                                    exposes us to different cultures, and creates memories that
                                    last a lifetime. However, traveling can also be stressful
                                    and overwhelming, especially if you don't plan and prepare
                                    adequately. In this blog article, we'll explore tips and
                                    tricks for a memorable journey and how to make the most of your travels.
                                    One of the most rewarding aspects of traveling is immersing
                                    yourself in the local culture and customs. This includes trying
                                    local cuisine, attending cultural events and festivals,
                                    and interacting with locals. Learning a few phrases in the
                                    local language can also go a long way
                                    in making connections and showing respect.
                                </p>
                                <p>
                                    Traveling is an enriching experience that opens up new horizons,
                                    exposes us to different cultures, and creates memories that last a lifetime.
                                    However, traveling can also be stressful and overwhelming, especially
                                    if you don't plan and prepare adequately. In this blog article, we'll
                                    explore tips and tricks for a memorable journey and how to make the most of your travels.
                                    One of the most rewarding aspects of traveling is immersing yourself
                                    in the local culture and customs. This includes trying local cuisine,
                                    attending cultural events and festivals, and interacting with locals.
                                    Learning a few phrases in the local language can also go a long way
                                    in making connections and showing respect.
                                </p>
                                <h3>Research Your Destination</h3>
                                <p>Before embarking on your journey, take the time to research
                                    your destination. This includes understanding the local culture,
                                    customs, and laws, as well as identifying top attractions, restaurants,
                                    and accommodations. Doing so will help you navigate your destination
                                    with confidence and avoid any cultural faux pas.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. In hendrerit gravida rutrum quisque non tellus orci
                                    ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
                                    sit amet. Aenean euismod elementum nisi quis eleifend quam
                                    adipiscing vitae. Viverra adipiscing at in tellus.
                                </p>
                                <p>
                                    Before embarking on your journey, take the time to research
                                    your destination. This includes understanding the local culture,
                                    customs, and laws, as well as identifying top attractions,
                                    restaurants, and accommodations. Doing so will help you navigate
                                    your destination with confidence and avoid any cultural faux pas.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    In hendrerit gravida rutrum quisque non tellus orci ac auctor.
                                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
                                    Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
                                    Viverra adipiscing at in tellus.
                                </p>
                                <h3>Plan Your Itinerary</h3>
                                <p>
                                    While it's essential to leave room for spontaneity and
                                    unexpected adventures, having a rough itinerary can help
                                    you make the most of your time and budget. Identify the
                                    must-see sights and experiences and prioritize them according
                                    to your interests and preferences. This will help you avoid
                                    overscheduling and ensure that you have time to relax and
                                    enjoy your journey.
                                    While it's essential to leave room for spontaneity and
                                    unexpected adventures, having a rough itinerary can
                                    help you make the most of your time and budget.
                                    Identify the must-see sights and experiences and prioritize
                                    them according to your interests and preferences.
                                    This will help you avoid overscheduling and ensure
                                    that you have time to relax and enjoy your journey.
                                </p>
                                <p>
                                    While it's essential to leave room for spontaneity and
                                    unexpected adventures, having a rough itinerary can help
                                    you make the most of your time and budget. Identify the
                                    must-see sights and experiences and prioritize them according
                                    to your interests and preferences. This will help you avoid
                                    overscheduling and ensure that you have time to relax and
                                    enjoy your journey.
                                    While it's essential to leave room for spontaneity and
                                    unexpected adventures, having a rough itinerary can
                                    help you make the most of your time and budget.
                                    Identify the must-see sights and experiences and prioritize
                                    them according to your interests and preferences.
                                    This will help you avoid overscheduling and ensure
                                    that you have time to relax and enjoy your journey.
                                </p>
                                {/* <ul>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ul>
                                <ol>
                                    <li>h</li>
                                    <li>e</li>
                                    <li>l</li>
                                    <li>l</li>
                                </ol>
                                <h6>hello</h6>
                                <h5>hello</h5>
                                <h4>hello</h4>
                                <h4>hello</h4>
                                <h2>hello</h2>
                                <h1>hello</h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td>30</td>
                                            <td>USA</td>
                                        </tr>
                                        <tr>
                                            <td>Anna Smith</td>
                                            <td>24</td>
                                            <td>UK</td>
                                        </tr>
                                        <tr>
                                            <td>Peter Jones</td>
                                            <td>45</td>
                                            <td>Canada</td>
                                        </tr>
                                    </tbody>
                                </table> */}

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default detail;
