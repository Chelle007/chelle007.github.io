import { Col, Container, Tab, Nav, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";

function ProjectComponent() {
    const feProjects = [
        {
            title: "Company Profile",
            description: "Freelance project for Duta Plafon Batam Company.",
            imgUrl: projImg1,
        },
        {
            title: "Portfolio Web",
            description: "Personal project done in React.js.",
            imgUrl: projImg2,
        },
    ];

    const fsProjects = [
        {
            title: "Flower Shop App",
            description: "School group project with GUI and database as additional feature.",
            imgUrl: projImg3,
        },
        {
            title: "Salon Admin Web",
            description: "Freelance project for a salon, where I contributed to half of the code.",
            imgUrl: projImg4,
        },
    ]

    const beProjects = [
        {
            title: "Mobile Banking App API",
            description: "Final project for Back End Java bootcamp course.",
            imgUrl: projImg5,
        },
        {
            title: "Food E-Commerce API",
            description: "Bootcamp course project with CRUD, ordering, and generating receipt pdf features.",
            imgUrl: projImg6,
        },
        {
            title: "Art Commission Smart Contract",
            description: "Hackathon project for Art Commission Web3.",
            imgUrl: projImg7,
        },
        {
            title: "Simple Cinema Ticketing Smart Contract",
            description: "Hackathon project, submission for elimination phase.",
            imgUrl: projImg8,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Front End</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Full Stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Back End</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            feProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            fsProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            beProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectComponent;