import React, { Component } from 'react';
import Ax from '../Ax/Ax';
import './DashLayout.css';
import DashNav from '../../components/Navigation/DashNav/DashNav';

class Layout extends Component {

    render() {
        return (
            <Ax>
                <DashNav />
                <section className={"DashLayoutContent"}>
                    {this.props.children}
                </section>
            </Ax>
        )
    }
}

export default Layout;