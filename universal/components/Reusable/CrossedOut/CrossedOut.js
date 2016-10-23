import React, { PropTypes } from 'react';
import styles from './crossed-out.css';

const CrossedOut = ({ children }) => (
    <span className={styles.lineWrap}>
        <span className={styles.line} />
        {children}
    </span>
);

CrossedOut.propTypes = {
    children: PropTypes.node.isRequired
};

export default CrossedOut;
