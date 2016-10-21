import React, { Component } from 'react';
import Radium from 'radium';

import Title from '../Title/Title';
import Projects from '../Projects/Projects';
import About from '../About/About';

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
