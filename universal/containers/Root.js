import React, { Component, PropTypes } from 'react'

export default class Root extends Component {
    render() {
        return (
            <div>
                {this.props.routes}
            </div>
        )
    }
}
