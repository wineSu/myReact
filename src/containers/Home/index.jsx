import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Home