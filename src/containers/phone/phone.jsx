import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userinfoActions from '../../actions/userinfo'

class Phone extends React.Component {
    render() {
        return (
            <div className="content">
            	<p>{this.props.userinfo.userid}</p>
            	<p>{this.props.userinfo.city}</p>
                <p onClick={this.changeUserInfo.bind(this)}>修改城市</p>
            </div>
        )
    }

    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }

    changeUserInfo() {
    	const actions = this.props.userinfoActions
        actions.login({
            userid: '123',
            city: 'nanjing'
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Phone)
