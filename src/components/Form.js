import React from 'react';

const  Form = (props) => { 
        return (
            <form onSubmit={props.addtodo}>
               <input type="text" name ="todo" placeholder="enter here ..." onChange={props.updatetodo}/>
               <button>Add To List</button>
            </form>
        )
    }
export default Form;