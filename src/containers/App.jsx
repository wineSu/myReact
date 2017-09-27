import React from 'react'
import { Link,IndexLink, browserHistory} from 'react-router'
class App extends React.Component {
	goBack() {
        // browserHistory.push('/')
        // history.back();
        // browserHistory.push(browserHistory)
    }
    render() {
        return (
            <div>
            	<div onClick={this.goBack.bind(this)} className="header clearx">
            		<span>支付宝</span>
            		<em className="right showNav"></em>
            	</div>
            	{this.props.children}
            	<div className="footer borderTop">
	            	<Link to="/HomeIndex" activeClassName="routerActive" className="footerRouter">
	            		<span className="bar1"></span>
	            		首页
	            	</Link>
	            	<Link to="/Phone"  activeClassName="routerActive" className="footerRouter">
	            		<span className="bar2"></span>
	            		电话
	            	</Link>
	            	<Link to="/Ditu"  activeClassName="routerActive" className="footerRouter">
	            		<span className="bar3"></span>
	            		地图
	            	</Link>
	            	<Link to="/Anli"  activeClassName="routerActive" className="footerRouter">
	            		<span className="bar4"></span>
	            		案例
	            	</Link>
	            </div>
	        </div>
        )
    }
}

export default App