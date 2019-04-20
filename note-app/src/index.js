import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store'
import { Provider } from 'react-redux'


const initialState = (localStorage["redux-store"]) ?
JSON.parse(localStorage["redux-store"]) : {
  notes: [
    {
      date: new Date().toString(),
      title: "Sample Note",
      content: " This is the note paragraph",
      mode: "view"
    }
  ],
  count :1
};

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())
const store = storeFactory(initialState)
store.subscribe(saveState)


ReactDOM.render(<Provider store={store}>
    <App/>
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
