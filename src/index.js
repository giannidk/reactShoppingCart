import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/vendor/bootstrap.min.css';
import './css/vendor/bootstrap-theme.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
