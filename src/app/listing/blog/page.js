'use client';
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import '../../../../public/styling/sass/blog.scss';
import blog1 from '../../../../public/images/blogimage1.png';
import blog2 from '../../../../public/images/blogimage2.png';
import blog3 from '../../../../public/images/blogimage3.png';
import blog4 from '../../../../public/images/blogimage4.png';
import blog5 from '../../../../public/images/blogimage5.png';
import blog6 from '../../../../public/images/blogimage6.png';
import { faArrowUpRightFromSquare, faArrowLeftLong, faArrowRightLong, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { faHeart as heartfill } from "@fortawesome/free-regular-svg-icons";

const allblogs = [
    {
        id: 1,
        name: "home-1",
        listed: "Alec Whitten",
        date: " 1 Jan 2023",
        title: "What Is UDS In Apartment & How To Calculate It",
        description: `Like to know the secrets of transforming a  
         2-14 team into a 3x Super Bowl winning Dynasty?`,
        img: blog2,
        favourite: false
    },
    {
        id: 2,
        name: "home-2",
        listed: "Demi WIlkinson",
        date: " 1 Jan 2023",
        title: "How To Buy An Apartment Complex",
        description: `Mental models are simple expressions
         of complex processes or relationships.`,
        img: blog3,
        favourite: false
    },
    {
        id: 3,
        name: "home-3",
        listed: "Candice Wu",
        date: " 1 Jan 2023",
        title: "Apartment with Adequate Storage Space?",
        description: `Introduction to Wireframing and its Principles.
         Learn from the best in the industry.`,
        img: blog4,
        favourite: false
    },
    {
        id: 4,
        name: "home-4",
        listed: "Natali Craig",
        date: " 1 Jan 2023",
        title: "What Makes Apartments an Ideal Choice?",
        description: `Collaboration can make our teams stronger,
         and our individual designs better.`,
        img: blog4,
        favourite: false
    },
    {
        id: 5,
        name: "home-4",
        listed: "Drew Cano",
        date: " 1 Jan 2023",
        title: "What are the advantages of apartments with gyms?",
        description: `JavaScript frameworks make development easy 
        with extensive features and functionalities.`,
        img: blog5,
        favourite: false
    },
    {
        id: 6,
        name: "home-6",
        listed: "Orlando Diggs",
        date: " 1 Jan 2023",
        title: "Apartment Construction: How To Do The Quality Check",
        description: `Starting a community doesn’t need to 
        be complicated, but how do you get started?.`,
        img: blog6,
        favourite: false
    },
    {
        id: 7,
        name: "home-6",
        listed: "Orlando Diggs",
        date: " 1 Jan 2023",
        title: "Apartment Construction: How To Do The Quality Check",
        description: `Starting a community doesn’t need to 
        be complicated, but how do you get started?.`,
        img: blog6,
        favourite: false
    },
    {
        id: 8,
        name: "home-1",
        listed: "Alec Whitten",
        date: " 1 Jan 2023",
        title: "What Is UDS In Apartment & How To Calculate It",
        description: `Like to know the secrets of transforming a
         2-14 team into a 3x Super Bowl winning Dynasty?`,
        img: blog2,
        favourite: false
    },
    {
        id: 9,
        name: "home-4",
        listed: "Natali Craig",
        date: " 1 Jan 2023",
        title: "What Makes Apartments an Ideal Choice?",
        description: `Collaboration can make our teams stronger,
         and our individual designs better.`,
        img: blog4,
        favourite: false
    },
    {
        id: 10,
        name: "home-3",
        listed: "Candice Wu",
        date: " 1 Jan 2023",
        title: "Apartment with Adequate Storage Space?",
        description: `Introduction to Wireframing and its Principles.
         Learn from the best in the industry.`,
        img: blog4,
        favourite: false
    },
    {
        id: 11,
        name: "home-4",
        listed: "Drew Cano",
        date: " 1 Jan 2023",
        title: "What are the advantages of apartments with gyms?",
        description: `JavaScript frameworks make development easy 
        with extensive features and functionalities.`,
        img: blog5,
        favourite: false
    },
    {
        id: 12,
        name: "home-4",
        listed: "Natali Craig",
        date: " 1 Jan 2023",
        title: "What Makes Apartments an Ideal Choice?",
        description: `Collaboration can make our teams stronger,
         and our individual designs better.`,
        img: blog4,
        favourite: false
    },
    {
        id: 13,
        name: "home-3",
        listed: "Candice Wu",
        date: " 1 Jan 2023",
        title: "Apartment with Adequate Storage Space?",
        description: `Introduction to Wireframing and its Principles.
         Learn from the best in the industry.`,
        img: blog4,
        favourite: false
    },
    {
        id: 14,
        name: "home-4",
        listed: "Drew Cano",
        date: " 1 Jan 2023",
        title: "What are the advantages of apartments with gyms?",
        description: `JavaScript frameworks make development easy 
        with extensive features and functionalities.`,
        img: blog5,
        favourite: false
    },
    {
        id: 15,
        name: "home-1",
        listed: "Alec Whitten",
        date: " 1 Jan 2023",
        title: "What Is UDS In Apartment & How To Calculate It",
        description: `Like to know the secrets of transforming a
         2-14 team into a 3x Super Bowl winning Dynasty?`,
        img: blog2,
        favourite: false
    },
    {
        id: 16,
        name: "home-2",
        date: " 1 Jan 2023",
        listed: "Demi WIlkinson",
        title: "How To Buy An Apartment Complex How To Buy An Apartment Complex How To Buy An Apartment Complex",
        description: `Mental models are simple expressions
         of complex processes or relationships.`,
        img: blog3,
        favourite: false
    }

];

const pageSize = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentBlogs, setCurrentBlogs] = useState([]);


    useEffect(() => {
        const storedBlogs = localStorage.getItem('blogs');
        if (storedBlogs) {
            setCurrentBlogs(JSON.parse(storedBlogs));
        } else {
            setCurrentBlogs(allblogs);
        }
    }, []);


    const handlelike = (likeid) => {
        const updatedBlogs = [...currentBlogs]
        updatedBlogs.forEach((items, i) => {
            if (items.id == likeid) {
                updatedBlogs[i].favourite = updatedBlogs[i].favourite ? false : true;
            }
        });
        setCurrentBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    }

    const totalPages = Math.ceil(currentBlogs.length / pageSize);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedBlogs = currentBlogs.slice(currentPage * pageSize, (currentPage + 1) * pageSize);



    const string = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + '...';
        }
        return str;
    };

 
    return (
        <section className="blog_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="blog_area">
                            <div className="top_blog_area">
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="left-side">
                                            <div className="image_box">
                                                <Image src={blog1} title="" alt="" fetchPriority="low" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className="right-side">
                                            <div className="content">
                                                <div className="sub_heading">
                                                    Olivia Rhye <span className="top-date"> 1 Jan 2023</span>
                                                </div>
                                                <div className="heading">
                                                    <div className="inner-left">
                                                        Ready To Move In Apartments vs Ongoing Construction
                                                    </div>
                                                    <div className="inner-right">
                                                        <Link href='deatail_page'>
                                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="paragraph-heading">
                                                    A grid system is a design tool used to arrange content
                                                    on a webpage. It is a series of vertical and horizontal
                                                    lines that create a matrix of intersecting points, which
                                                    can be used to align and organize page elements.
                                                    Grid systems are used to create a consistent look and
                                                    feel across a website, and can help to make the layout
                                                    more visually appealing and easier to navigate.A grid
                                                    system is a design tool used to arrange content on a
                                                    webpage. It is a series of vertical and horizontal
                                                    lines that create a matrix of intersecting points,
                                                    which can be used to align and organize page elements.
                                                    Grid systems are used to create a consistent look and
                                                    feel across a website, and can help to make the layout
                                                    more visually appealing and easier to navigate.
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="bottom_blog_area">
                                <div className="blog_heading">
                                    <h3 className="heading-main">All Blog Posts</h3>
                                </div>
                                <div className="blogs-card-area">
                                    <Row>
                                        {displayedBlogs.length > 0 ? (
                                            displayedBlogs.map((item) => (
                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={item.id}>
                                                    <div className="blog-card">
                                                        <div className="image_box">
                                                            <Image src={item.img} alt={item.title} fetchPriority="low" />
                                                            <div className="heart_icon" onClick={() => handlelike(item.id)}>
                                                                {item.favourite ? <FontAwesomeIcon icon={faHeart} className="unfill-heart" /> : <FontAwesomeIcon icon={heartfill} className="fillheart" />}
                                                            </div>
                                                        </div>
                                                        <div className="listed">
                                                            {item.listed} <span className="card_date">{item.date}</span>
                                                        </div>
                                                        <div className="title">
                                                            <div className="title-left">{string(item.title, 40)}</div>
                                                            <div className="title-right">
                                                                <Link href='deatail_page'>
                                                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="description">
                                                            {string(item.description, 80)}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))
                                        ) : (
                                            <div>No blogs available</div>
                                        )}
                                    </Row>
                                </div>
                                <div className="pagination">
                                    <div onClick={prevPage} className="prev-btn">
                                        <FontAwesomeIcon icon={faArrowLeftLong} /> Previous
                                    </div>
                                    <div className="page_number">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <div
                                                key={index}
                                                onClick={() => goToPage(index)}
                                                className={currentPage === index ? 'active' : 'non-active'}
                                            >
                                                {index + 1}
                                            </div>
                                        ))}
                                    </div>
                                    <div onClick={nextPage} className="next-btn">Next <FontAwesomeIcon icon={faArrowRightLong} /></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blog;