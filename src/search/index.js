'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/test.png';
import '../../common';
import { a } from './tree-shaking';

class Index extends React.Component {

    render() {
        const funa = a();
        return <div className='search-text'>
            { funa }search text fdgdgrty
            <img src={logo} alt="logo"/>
        </div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

