import React, { PropTypes } from 'react';
import styles from './tag.css';

const Tag = ({ text }) => (
    <div className={styles.container}>
        <div className={styles.text}>{text}</div>
    </div>
);

Tag.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Tag;
