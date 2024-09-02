import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

const images = importAll(require.context('../assets/img', false, /\.svg$/));

export const ProjectCard = ({ title, description, imgUrl, githubUrl, deployUrl, techStack }) => {
    return (
        <Col sm={6} md={4} className="proj-item">
            <div className="proj-imgbx">
                <img className="proj-img" src={imgUrl} />
                <div className="proj-txtx">
                    <div className="proj-links">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </a>
                        )}
                        {deployUrl && (
                            <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                            </a>
                        )}
                    </div>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="tech-stack">
                        {techStack && techStack.map((tech, index) => (
                            <img
                                key={index}
                                src={images[`${tech}-logo.svg`]}
                                alt={`${tech} logo`}
                                className="tech-icon"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Col>
    )
}