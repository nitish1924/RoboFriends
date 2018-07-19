import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'; //createLogger is a middleware // console log the action.
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {searchRobots,requestRobots} from './reducers'

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
			//wrapping around provider to pass down the store to each and every component of app
		<Provider store={store}> 
			<App/>
		</Provider>, document.getElementById('root')
);
registerServiceWorker();
