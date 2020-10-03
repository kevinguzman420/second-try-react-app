import React, { Fragment } from 'react';

import './styles/Menu.css'
import SubMenu from './subcomponents/SubMenu';

class Menu extends React.Component {
    constructor (props) {
        super();
    }
    render () {
        return (
            <div className="menu">
                <SubMenu />
                <SubMenu />
                <SubMenu />
                <SubMenu />
            </div>
        )
    }
}

export default Menu;