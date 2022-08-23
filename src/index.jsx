// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// importing reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUsernameReducer from './reducers/current_username_reducer';

// Initial state
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// Reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

// Middlewares
const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers), {initialState}, middlewares}>
    <App />
  </Provider>,
  document.getElementById('root')
);
