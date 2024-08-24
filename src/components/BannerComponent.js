import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function BannerComponent() {
    const toRotate = ["Web Developer.", "Java Backend Developer."];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random() * 50);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200 - Math.random() * 50);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <div class="canvas">
                    <canvas class="connecting-dots"></canvas>
                </div>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <h1>
                            {'Hello! I\'m '}
                            <span style={{ color: '#72e0c2' }}>Michelle Chan</span>
                            {', a '}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>Eager to explore and learn about a wide range of technologies and fields.</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/mchellechan" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Chelle007" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerComponent;