import React, { Component, PropTypes } from 'react';

// Returns a random number between min (inclusive) and max (exclusive)
const getRandom = (min, max) => Math.random() * (max - min) + min;

export default class Particles extends Component {
    static propTypes = {
        drawingCtx: PropTypes.object.isRequired
    };

    particles = [{ x: 100, y: 100 }];

    constructor(props) {
        super(props);
        this.updateCanvas();
    }

    updateCanvas() {
        const { drawingCtx } =  this.props;
        drawingCtx.clearRect(0, 0, 2000, 2000);

        const newParticle = { x: getRandom(0, 2000), y: getRandom(0, 1000) };

        this.particles = [...this.particles, newParticle];

        this.particles = this.particles.map(({ x, y }) => {
            drawingCtx.beginPath();
            drawingCtx.arc(x, y, 1, 0, 2 * Math.PI);
            drawingCtx.stroke();
            drawingCtx.fill();
            return { x, y: y + 0.5 };
        });

        window.requestAnimationFrame(() => this.updateCanvas());
    }

    render() {
        const { drawingCtx } = this.props;
        return null;
    }
}
