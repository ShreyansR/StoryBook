import React, { Component } from 'react';
import Ax from '../Ax/Ax';
import classes from './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Login from '../../containers/Auth/frontPage/Login';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        } );
    }

    render() {
        return (
            <Ax>
                <Navbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Login></Login>
            </Ax>
        )
    }
}

export default Layout;