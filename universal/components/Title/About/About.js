import React from 'react';
import Header from 'components/Reusable/Header/Header';
import styles from './about.css';

import resume from 'client/files/resume.pdf';

const About = () => (
    <div className={styles.container}>
        <Header text="about" />
        <div className={styles.about}>
            Hi, I'm Alex Ngo and I'm currently an Informatics student
            at the University of Washington. I am currently looking
            for a full time software engineering position.
        </div>
        <div className={styles.linkContainer}>
            <a
                className={styles.link}
                href="https://github.com/NgoKnows"
            >
                Github
            </a>
            <a
                className={styles.link}
                href="https://www.linkedin.com/in/alexhngo"
            >
                LinkedIn
            </a>
            <a
                className={styles.link}
                href={resume}
            >
                Resume
            </a>
        </div>
    </div>
);

export default About;
