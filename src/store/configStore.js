import { createStore } from 'redux'
import rooterReducer from '../reducers/index.js'

export default function configStore(initialState) {
	const store = createStore(rooterReducer, initialState, 
		//触发redux-devtools
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}