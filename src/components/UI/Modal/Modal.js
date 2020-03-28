import React, {Component} from 'react';
import './Modal.css';
import Ax from '../../../hoc/Ax/Ax';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        return (
            <Ax>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={"Modal"}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Ax>
        )
    }
}

export default Modal;