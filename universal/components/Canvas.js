import React, { Component, cloneElement } from 'react';

export default class Canvas extends Component {
    state: void;
    state = { drawingCtx: null };

    static props : {
        children: Array | Object,
        height: number,
        width: number,
        style: ?Object
    };

    static defaultProps : {
        style: {}
    };

    constructor(props) {
        super(props);

        this.giveDrawingContext = this.giveDrawingContext.bind(this);
        this.setCanvasRef = this.setCanvasRef.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.children !== nextProps.children) || (this.state.drawingCtx !== nextState.drawingCtx);
    }

    giveDrawingContext(element) {
        return cloneElement(element, { drawingCtx: this.state.drawingCtx });
    }

    setCanvasRef(ele) {
        if (!this.state.drawingCtx) {
            this.setState({ drawingCtx: ele.getContext('2d') });
        }
    }

    renderChildren() {
        if (this.state.drawingCtx) {
            if (Array.isArray(this.props.children)) {
                return this.props.children.map(this.giveDrawingContext);
            } else if (this.props.children) {
                return this.giveDrawingContext(this.props.children);
            }
        }

        return null;
    }

    render() {
        const { height, width, style } = this.props;

        return (
            <div>
                <canvas
                    id="map"
                    height={height}
                    width={width}
                    style={style}
                    ref={this.setCanvasRef}
                />
                {this.renderChildren()}
            </div>
        );
    }
}
