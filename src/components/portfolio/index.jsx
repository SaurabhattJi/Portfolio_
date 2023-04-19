import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filter";
import Showcase from "./showcase";

const projectsData = [
    {
        id: 1,
        name: "E-commerce",
        tags: ["web-app", "mobile-app", "product"],
        media: {
            thumbnail: require("../../images/portfolio/Ecom.png"),
        },
    },
    {
        id: 2,
        name: "News-App",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/News.png"),
        },
    },
    {
        id: 3,
        name: "Calculator",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/Calc.jpg"),
        },
    },
    {
        id: 4,
        name: "Notes-App",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/Notes.jpeg"),
        },
    },
    {
        id: 5,
        name: "TextUtils",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/TextUtils.png"),
        },
    },
    {
        id: 6,
        name: "ex-Portfolio ",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/Portfolio.jpg"),
        },
    },
    {
        id: 7,
        name: "YouTube ",
        tags: ["web-page", "web-app", "mobile-app", "product"],
        media: {
            thumbnail: require("../../images/portfolio/youtube1.jpeg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((item) =>
                    item.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
