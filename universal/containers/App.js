import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import EasyTransition from 'react-easy-transition';

class App extends Component {
    constructor(props) {
        super(props);
        this.pathname = props.location.pathname;
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.location.pathname.includes('projects') || !this.props.location.pathname.includes('projects')) {
            this.pathname = nextProps.location.pathname;
        }
    }

    render() {
        const { location, children } = this.props;

        return (
            <div style={STYLES}>
                <EasyTransition
                    path={this.pathname}
                    initialStyle={{opacity: 0}}
                    transition="opacity 0.25s ease-in"
                    finalStyle={{opacity: 1}}
                >
                    {this.props.children}
                </EasyTransition>
            </div>
        );
    }
}

const STYLES = {
    fontFamily : "'Simplifica', 'sans-serif'",
}

export default Radium(App);
