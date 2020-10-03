import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class SubMenu extends React.Component {
    render() {
        return (
            <Fragment>
               {/* <h3>{this.props.titleMenu}</h3> */}
                <ul className="subMenu">
                    <li><Link>OPTION ONE</Link></li>
                    <li><Link>OPTION TWO</Link></li>
                    <li><Link>OPTION THREE</Link></li>
                    <li><Link>OPTION FOUR</Link></li>
                    <li><Link>OPTION FIVE</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default SubMenu;