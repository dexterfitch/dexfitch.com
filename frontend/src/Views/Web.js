import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Ratio } from "react-bootstrap";
import { colors } from "../Utilities/textBgColors";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Web() {
    const [projects, setProjects] = useState([]);
    const [descriptionBGColor, setDescriptionBGColor] = useState("");
    const [mediaFrameColor, setMediaFrameColor] = useState("");

    const getRandomColor = (excludedColor = null) => {
        const colorValues = Object.values(colors);
        const availableColors = excludedColor ? colorValues.filter(color => color !== excludedColor) : colorValues;
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    };

    useEffect(() => {
        axios.get(`${backendUrl}/api/category/Web/`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the Web projects!", error);
            });

            const descriptionColor = getRandomColor();
            setDescriptionBGColor(descriptionColor);
    
            const mediaColor = getRandomColor(descriptionColor);
            setMediaFrameColor(mediaColor);
    }, []);

    const renderProjects = () => {
        return projects.map(project => (
            <Row key={project.id} className="mb-5 project-row">
                <Col md={12} className="title-col p-0">
                    <div className="title-container pb-3 pt-5" style={{ backgroundColor: descriptionBGColor }}>
                        <h2 className="text-white m-0 ms-5">{project.title}</h2>
                    </div>
                </Col>
                <Col md={4} className="description-col p-0">
                    <div className="description-container py-3 px-5" style={{ backgroundColor: descriptionBGColor }}>
                        <p className="text-white text-justified">{project.description}</p>
                    </div>
                </Col>
                <Col md={8} className="media-col p-0">
                    {project.media.map(media => (
                        <div key={media.id} className="media-container media-border pt-2 ps-2">
                            {media.media_type === 'image' ? (
                                <img src={`${backendUrl}${media.file}`} alt={media.caption} className="img-fluid full-width-image" />
                            ) : (
                                <Ratio aspectRatio="16x9">
                                    <video src={`${backendUrl}${media.file}`} controls className="w-100"></video>
                                </Ratio>
                            )}
                        </div>
                    ))}
                </Col>
            </Row>
        ));
    };

    return (
        <Container>
            <style>
                {`
                    .media-border {
                        border-top: 4rem solid ${mediaFrameColor};
                        border-left: 3rem solid ${mediaFrameColor};
                        outline: 0.5rem solid white;
                    }

                    .sticky-description {
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                    }

                `}
            </style>
            <Row>
                <Col md={12} className="p-0">
                    <h1 className="mb-4 text-end">Web Projects</h1>
                </Col>
            </Row>
            {renderProjects()}
        </Container>
    );
}

export default Web;