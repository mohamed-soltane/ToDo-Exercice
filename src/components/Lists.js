  
import React, { Component,Fragment } from 'react';

class Lists extends Component {
    
    //Render Course Item
    renderList = (props) => {
        return (
            <li className="li-class">
                <span>{this.props.todos}</span> 
                <button onClick={() => {this.props.deleteList(this.props.index)}}>Delete List</button>
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