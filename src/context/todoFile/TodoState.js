import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
    const stateInitial = [{
        name:"Mehnoor",
        class:"BSSE"
}];

const[state,setState]= useState(stateInitial);

const update=()=>{
    setTimeout(() => {
        setState(
            {
                name:"Mehnoor Fayyaz",
                class:"BSSE-VII"
            }
        );
    }, 3000);  
}


return(
    <TodoContext.Provider value={{state,update}}>
        {props.children}
    </TodoContext.Provider>    
)
}

export default TodoState;
