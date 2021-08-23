//import logo from './logo.svg';
import './App.css';
//import Navbar from './App.js';
import Header from "./Header";
//import Footer  from "./Footer";
import Footer from "./Footer";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
//import TodoItem from "./TodoItem";
import image from './image/pic1.jpg';
import React, { useState, useEffect } from 'react';

import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete fo todo", todo);
    //deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo; //call set todo
    }))
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this list", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  // let initTodo;
  // const [todos, setTodos] = useState(initTodo);
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      dsc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      dsc: "you need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the college",
      dsc: "you need to go to the College to get this job done" 
    },
  ])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Router>
        <Header title="My Todos list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
              <div className="image">
              <img src={image} className="image"></img>
              </div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>



    //   {/* <h3> My App</h3>
    // <p>My app works</p> */}   
    // </>

    // <div className="App">//jsx
    //   <header className="App-header">
    //     <div></div>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
