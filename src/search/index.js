'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/test.png';
import '../../common';
import { a } from './tree-shaking';

class Index extends React.Component {
    
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    
    loadComponent() {
        import('./text.js').then((Text)=>{
            this.setState({
                Text: Text.default
            })
        })
    }

    render() {
        const funa = a();
        
        const { Text } = this.state;
        
        return <div className='search-text'>
            {
                Text ? <Text /> : null
            }
            { funa }search text fdgdgrty
            <img src={logo} onClick={ this.loadComponent.bind(this) } alt="logo"/>
        </div>
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

