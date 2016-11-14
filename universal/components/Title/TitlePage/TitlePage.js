import React, { Component } from 'react';

import Title from '../Title/Title';
import Projects from '../Projects/Projects';
// import About from '../About/About';

class TitlePage extends Component {
    render() {
        return (
            <div>
                <Title />
                <Projects />
            </div>
        );
    }
}


export default TitlePage;
