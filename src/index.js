import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import CardList from './CardList';
import { robots } from './robots';

ReactDOM.render(<CardList robots={robots} id={robots[0].id} name={robots[0].name} email={robots[0].email}/>, document.getElementById('root'));
registerServiceWorker();
