import React from 'react';
import ReactDOM from 'react-dom';
import FlipPage from "react-flip-page";

class ViewBook extends React.Component{

    constructor()
    {
        super();
    }
    
    render()
    { 
        return (
            <div>
                <FlipPage showSwipeHint orientation="horizontal" height='800' width='600'>
                    <img src="http://unsplash.it/320/480" />
                    <img src="http://unsplash.it/320/480" />
                </FlipPage>
            </div>
        );
         
    }
    
}

export default ViewBook;