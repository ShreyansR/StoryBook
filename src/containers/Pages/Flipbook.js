import React, {Component} from 'react'
import FlippingPages from 'flipping-pages'
/* IMPORTANT */
import 'flipping-pages/FlippingPages.css'

import './Flipbook.css'

class Flipbook extends Component {

    constructor(props) {
        super(props)
        this.totalPages = 4
        this.state = {
            selected: 0,
        }
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }

    handleSelectedChange(selected) {
        this.setState({selected})
    }

    previous() {
        this.setState(state => ({
            selected: state.selected - 1
        }))
    }

    next() {
        this.setState(state => ({
            selected: state.selected + 1
        }))
    }

    render() {
        return (
            <div className={"App"}>
                <FlippingPages
                    className="App-pages"
                    direction="horizontal"
                    selected={this.state.selected}
                    onSelectedChange={this.handleSelectedChange}
                    /* touch-action attribute is required by pointer events
                    polyfill */
                    touch-action="none"
                >
                    {this.props.location.state.urls.map(image => (
                        <div key={image.dataId}>
                            <img className={"Page"} src={image.dataUrl}/>
                        </div>
                    ))}
                </FlippingPages>
                <br></br>
                {/* Buttons are required for keyboard navigation */}
                <button className={'flippingBtn'}
                    onClick={this.previous}
                    disabled={!this.state.selected}
                >Previous</button>
                <button
                    className={'flippingBtn'}
                    onClick={this.next}
                    disabled={this.state.selected + 1 === this.totalPages}
                >Next</button>
            </div>
        )
    }

}

export default Flipbook