import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App/App';
import 'antd/dist/antd.css'; // ANTD Styles

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
