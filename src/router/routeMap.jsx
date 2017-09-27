import React from 'react'
import { Router, Redirect,Route, IndexRoute,browserHistory,hashHistory } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import Phone from '../containers/phone/phone'
import Ditu from '../containers/Ditu/Ditu'
import Anli from '../containers/Anli/Anli'
import HomeIndex from '../containers/homeIndex/HomeIndex'
import List from '../containers/List'
import Detail from '../containers/Detail'
import About from '../containers/about/About'
import News from '../containers/news/News'
import Team from '../containers/Team/Team'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    render() {
        return (
             <Router history={hashHistory}>
                <Redirect from="/" to="/HomeIndex" />
                <Route path='/' component={App}>
                    <Route path='/HomeIndex' component={Home}>
                        <IndexRoute component={HomeIndex}/>
                        <Route path='/Home/About' component={About}/>
                        <Route path='/Home/News' component={News}/>
                        <Route path='/Home/Team' component={Team}/>
                    </Route>
                    <Route path='/list' component={List}/>
                    <Route path='/Phone' component={Phone}>
                    </Route>
                    <Route path='/Ditu' component={Ditu}/>
                    <Route path='/Anli' component={Anli}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap