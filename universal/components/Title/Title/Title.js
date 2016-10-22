import React from 'react';
import styles from './title.css';

import CrossedOut from 'components/Reusable/CrossedOut/CrossedOut';
import downArrow from 'images/down-arrow.svg';

const Title = () => (
    <div>
        <div className={styles.container}>
            <h1 className={styles.text}>
                <CrossedOut>
                    Alex Ngo // Full Stack Engineer
                </CrossedOut>
            </h1>
        </div>
        <img className={styles.arrow} src={downArrow} />
    </div>
);

export default Title;
