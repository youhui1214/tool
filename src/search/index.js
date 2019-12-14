'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/test.png';

class Index extends React.Component {

    render() {
        return <div className='search-text'>
            search text fdgdgrty
            <img src={logo} alt="logo"/>
        </div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

