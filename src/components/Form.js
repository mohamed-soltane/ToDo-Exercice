import React from 'react';

const  Form = (props) => { 
        return (
            <form  className="form1" onSubmit={props.addtodo}>
               <input type="text" name ="todo" value={props.current} placeholder="enter here ..." onChange={props.updatetodo}/>
               <button> Add To List</button>
            </form>
        )
    }
export default Form;