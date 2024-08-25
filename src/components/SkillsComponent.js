import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import htmlLogo from '../assets/img/html-logo.svg';
import cssLogo from '../assets/img/css-logo.svg';
import cppLogo from '../assets/img/cpp-logo.svg';
import jsLogo from '../assets/img/javascript-logo.svg';
import reactLogo from '../assets/img/react-logo.svg';
import solidityLogo from '../assets/img/solidity-logo.svg';
import mysqlLogo from '../assets/img/mysql-logo.svg';
import sqliteLogo from '../assets/img/sqlite-logo.svg';
import javaLogo from '../assets/img/java-logo.svg';
import springLogo from '../assets/img/spring-logo.svg';
import pythonLogo from '../assets/img/python-logo.svg';
import postgresqlLogo from '../assets/img/postgresql-logo.svg';

function SkillsComponent() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <h2>Skills</h2>
                        <div className="skills-bx wow zoomIn">
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={7000}
                                className="skills-slider"
                            >
                                <div className="item">
                                    <h4>Beginner Level</h4>
                                    <div className="skills-logos">
                                        <Row className="justify-content-center">
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={htmlLogo} alt="HTML Logo" className="skill-logo" />
                                                <p>HTML</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={cssLogo} alt="CSS Logo" className="skill-logo" />
                                                <p>CSS</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={cppLogo} alt="C++ Logo" className="skill-logo" />
                                                <p>C++</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={jsLogo} alt="JavaScript Logo" className="skill-logo" />
                                                <p>JavaScript</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={reactLogo} alt="React Logo" className="skill-logo" />
                                                <p>React</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={solidityLogo} alt="Solidity Logo" className="skill-logo" />
                                                <p>Solidity</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={mysqlLogo} alt="MySQL Logo" className="skill-logo" />
                                                <p>MySQL</p>
                                            </Col>
                                            <Col xs={6} md={4} lg={3} className="skill-item">
                                                <img src={sqliteLogo} alt="SQLite Logo" className="skill-logo" />
                                                <p>SQLite</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className="item">
                                    <h4>Intermediate Level</h4>
                                    <div className="skills-logos">
                                        <Col xs={6} md={4} lg={3} className="skill-item">
                                            <img src={javaLogo} alt="Java Logo" className="skill-logo" />
                                            <p>Java</p>
                                        </Col>
                                        <Col xs={6} md={4} lg={3} className="skill-item">
                                            <img src={springLogo} alt="Spring Logo" className="skill-logo" />
                                            <p>Spring</p>
                                        </Col>
                                        <Col xs={6} md={4} lg={3} className="skill-item">
                                            <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
                                            <p>Python</p>
                                        </Col>
                                        <Col xs={6} md={4} lg={3} className="skill-item">
                                            <img src={postgresqlLogo} alt="PostgreSQL Logo" className="skill-logo" />
                                            <p>PostgreSQL</p>
                                        </Col>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default SkillsComponent;