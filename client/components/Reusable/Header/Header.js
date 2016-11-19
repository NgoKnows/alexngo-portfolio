import React, { PropTypes } from 'react';
import styles from './header.css';

const Header = ({ text, handleClick }) => (
    <h2 onClick={handleClick} className={styles.header}>
        {text}
    </h2>
);

Header.propTypes = {
    text : PropTypes.string.isRequired,
    handleClick: PropTypes.func
};

Header.defaultProps = {
    handleClick: () => {}
};

export default Header;
