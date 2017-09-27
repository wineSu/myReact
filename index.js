import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory,browserHistory } from 'react-router'

import configureStore from './src/store/configStore'
import RouteMap from './src/router/routeMap'
import maincss from './src/style/main.less'
import 'antd/dist/antd.css'

const store = configureStore()

render(
	<Provider store={store}>
    	<RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('App')
)
