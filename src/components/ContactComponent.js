import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic (e.g., send formData to a server)
        console.log(formData);
        alert('Form submitted!');
        // Clear the form after submission if necessary
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="contact-header">
                    <Col size={12}>
                        <h1 className="display-2 background-text">LET'S CONNECT</h1>
                        <h1 className="contact-heading">Contact</h1>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col size={12} md={8} lg={6}>
                        <Row className="mb-4 justify-content-center">
                            <Col size={12} className="text-center">
                                <a href="https://wa.me/+6583420687" target="_blank" rel="noopener noreferrer" className="icon-circle mx-2">
                                    <FaWhatsapp size={30} />
                                </a>
                                <a href="https://t.me/MichelleChan" target="_blank" rel="noopener noreferrer" className="icon-circle mx-2">
                                    <FaTelegramPlane size={30} />
                                </a>
                                <a href="https://www.linkedin.com/in/mchellechan" target="_blank" rel="noopener noreferrer" className="icon-circle mx-2">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://github.com/Chelle007" target="_blank" rel="noopener noreferrer" className="icon-circle mx-2">
                                    <FaGithub size={30} />
                                </a>
                            </Col>
                        </Row>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Name"
                                        required
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        required
                                    />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ContactComponent;
