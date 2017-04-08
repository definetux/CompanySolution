import { createStore, applyMiddleware, compose } from 'redux';
//import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import todoApp from '../reducers/index';
// import DevTools from '../../shared/devtools/DevTools';
//import { Router, Route, hashHistory } from 'react-router';
// import { syncHistory, routeReducer } from 'redux-simple-router';

// const reduxRouterMiddleware = syncHistory(hashHistory);

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk/*, reduxRouterMiddleware*/),
	// DevTools.instrument()
)(createStore);


export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(todoApp, initialState);
	//reduxRouterMiddleware.listenForReplays(store);


	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers'))
		);
	}

	return store;
}