  
import React, { Component,Fragment } from 'react';

class Lists extends Component {
    
    //Render Course Item
    renderList = () => {
        return (
            <li>
                <span>{this.props.todos}</span> 
                <button>Delete List</button>
            </li>
        )
    }

    render() {
        
        return(
            <Fragment>
               {this.renderList()}
            </Fragment>
        );
    }
}


    export default Lists;