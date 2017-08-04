import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './src/router/routeMap'

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('App')
)
