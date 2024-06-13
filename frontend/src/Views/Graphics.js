import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Ratio } from "react-bootstrap";

function Graphics() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("/api/category/Graphic/")
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the Graphic projects!", error);
            });
    }, []);

    const renderProjects = () => {
        return projects.map(project => (
            <Col md={6} key={project.id} className="mb-4">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.media.map(media => (
                    <div key={media.id}>
                        {media.media_type === 'image' ? (
                            <img src={media.file} alt={media.caption} className="img-fluid" />
                        ) : (
                            <Ratio aspectRatio="16x9">
                                <video src={media.file} controls className="w-100"></video>
                            </Ratio>
                        )}
                        <p>{media.caption}</p>
                    </div>
                ))}
            </Col>
        ));
    };

    return (
        <Container>
            <h1>Graphic Projects</h1>
            <Row>
                {renderProjects()}
            </Row>
        </Container>
    );
}

export default Graphics;