import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styles from './title.css';

import CrossedOut from 'components/Reusable/CrossedOut/CrossedOut';
import downArrow from 'images/down-arrow.svg';

const SQUARE_HEIGHT = 40;
const SQUARE_WIDTH = 55;

class Title extends Component {
    state = { hovering: false };

    initialStyles(index) {
        return {
            translateY: 0,
            opacity: 0,
            scale: 0.5
        };
    }

    finalStyles(index) {
        return {
            translateY: -100,
            opacity: 1,
            scale: 1
        };
    }

    initialStylesAnimate(index) {
        const springSetting = { stiffness: 400 + index * 75, damping: 40 };

        return {
            translateY: spring(0, springSetting),
            opacity: spring(0, springSetting),
            scale: spring(0.5, springSetting),
        };
    }

    finalStylesAnimate(index) {
        const springSetting = { stiffness: 400, damping: 15 };

        return {
            translateY: spring(-100, springSetting),
            opacity: spring(1, springSetting),
            scale: spring(1, springSetting),
        };
    }

    renderSquares() {
        const { hovering } = this.state;

        const defaultStyles = [0, 1, 2].map((i) => {
            return hovering ?
                this.finalStyles(i) :
                this.initialStyles();
        });

        const targetStyles = [0, 1, 2].map((i) => {
            return hovering ?
                this.finalStylesAnimate(i) :
                this.initialStylesAnimate(i);
        });

        const scaleMin = 0.5;
        const scaleMax = 1;

        const calculateStylesForNextFrame = (prevFrameStyles) => {
            const prevFrameStylesCopy = hovering ?
                prevFrameStyles : prevFrameStyles.slice(0).reverse();

            const nextFrameTargetStyles = prevFrameStylesCopy.map((styleInPreviousFrame, i) => {
                if (i === 0) {
                    return targetStyles[i];
                }

                const prevButtonScale = prevFrameStylesCopy[i - 1].scale;
                const shouldApplyTargetStyle = () => {
                    if (hovering) {
                        return prevButtonScale >= scaleMin + 0.4;
                    }

                    return prevButtonScale <= scaleMax - 0.4;
                };

                return shouldApplyTargetStyle() ?
                    targetStyles[i] :
                    styleInPreviousFrame;
            });

            return hovering ? nextFrameTargetStyles : nextFrameTargetStyles.reverse();
        };

        return (
            <StaggeredMotion
                defaultStyles={defaultStyles}
                styles={calculateStylesForNextFrame}
            >
                {interpolatedStyles =>
                    <div style={STYLES}>
                        {interpolatedStyles.map(({ translateY, opacity, scale }, index) => (
                            <Square
                                key={index}
                                style={{
                                    transform: `translate(0px, ${translateY}px) scale(${scale})`,
                                    opacity
                                }}
                            >
                                {index}
                            </Square>
                        ))}
                    </div>
                }
            </StaggeredMotion>
        );
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <h1
                        className={styles.text}
                        onMouseOver={() => this.setState({ hovering: true })}
                        onMouseOut={() => this.setState({ hovering: false })}
                    >
                        {/* {this.renderSquares()} */}
                        <CrossedOut>
                            Alex Ngo // Full Stack Engineer
                        </CrossedOut>
                    </h1>
                </div>
                <img className={styles.arrow} src={downArrow} style={{ height: '3.5rem' }} />
            </div>
        );
    }
}


const Square = ({ style, children }) => (
    <div style={{ ...style, ...SQUARE_STYLES }}>
        <span>
            {children}
        </span>
    </div>
);

const STYLES = {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-around'
};

const SQUARE_STYLES = {
    width: SQUARE_WIDTH,
    height: SQUARE_HEIGHT,
    backgroundColor: 'black',
    fontSize: 24,
    color: 'white',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default Title;
