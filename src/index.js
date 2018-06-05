import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CSVDataParserApp from './CSVDataParserApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CSVDataParserApp />, document.getElementById('root'));
registerServiceWorker();
