import React, { useState } from 'react'

export default function AddTodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.AddTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }


  return (
    <>
    <div className="container">
        <h3 className='todo_heading'><b>Add a Todo</b></h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
    </form>
    </div>
    </>
  )
}
