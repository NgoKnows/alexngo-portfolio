import React, { Component } from 'react';
import Radium from 'radium';

import Title from './Title';
import Projects from './Projects';
import About from './About';

class TitlePage extends Component {
    render() {
        return (
            <div>
                <Title />
                <Projects />
                <About />
            </div>
        );
    }
}

export default Radium(TitlePage);
