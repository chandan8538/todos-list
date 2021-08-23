//import React from 'react'

import React, { useState } from 'react';

// export default function AddTodo(props) {
export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        console.log(title,desc);
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description cannot be blank")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className="container my-3">
            <h3>Add a list</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">list title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">list Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="desc" />
                    {/* <input type="password" className"form-control" id="exampleInputPassword1"/> */}
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add List</button>
            </form>
        </div>
    )
}
