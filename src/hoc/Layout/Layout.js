import React, { Component } from 'react';
import Ax from '../Ax/Ax';
import './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
        console.log("dscvdsv: " + this.props.isSignedIn);
        return (
            <Ax>
                <Navbar auth={this.props.isSignedIn} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={"LayoutContent"}>
                    {this.props.children}
                </main>
            </Ax>
        )
    }
}

export default Layout;