import * as React from "react";
import {Store} from '../common/Store';
import  {IProvider, Dispatch} from './../common/Interfaces';
import { addProvider } from "../common/Actions";
import getWeb3 from "./../utils/getWeb3";

export interface IProps {
  dispatch:Dispatch;
}

interface IState {
  name: string
}




export default function RegisterProvider(props: any): Array<JSX.Element> | any{
  const { state, dispatch } = React.useContext(Store);
  const [currentProvider, setProvider] = React.useState({name:""});
  const [name, setName] = React.useState("");
  const [initialized, setInitialized] = React.useState(false);
  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts]  = React.useState(null);
  const [contract, setContract] = React.useState(null);

  
  React.useEffect(() => {
   
      
    setInitialized(true);
  }, [initialized]);


  return (
    <div className="container-fluid">
      <div className="card-body col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Provider name"
          value={currentProvider.name}
          onChange={(e:React.FormEvent<HTMLInputElement>) => {
              const{name, value}:any = e.target;
              setName(value);
              currentProvider.name = value;
              setProvider(currentProvider);
            }
          }
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {addProvider(currentProvider, dispatch);}}
        >
          Add
        </button>
      </div>
    </div>
  );
}


/*
import React, { useState, useEffect } from "react";
import axios from "axios";

export const TodoListFunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  const [todos, setTodos] = useState();
  const [nextTodoId, setNextTodoId] = useState(0);
  const [newTodoLabel, setNewTodoLabel] = useState("");

  useEffect(() => {
    if (!initialized) {
      axios
        .get(
          "https://gist.githubusercontent.com/witalewski/fc8f043d53a0d505f84c5ddb04ae76ea/raw/7c505bbc1675a0bc8a067f8b633b531c769bb64c/data.json"
        )
        .then(({ data }) => {
          setTodos(data);
          setNextTodoId(data.length);
        });
      setInitialized(true);
    }
  });

  const markTodoAsDone = (id, done) =>
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, done } : todo)));

  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  const addNewTodo = () => {
    setTodos([
      ...todos,
      {
        id: nextTodoId,
        label: newTodoLabel,
        done: false
      }
    ]);
    setNextTodoId(nextTodoId + 1);
    setNewTodoLabel("");
  };

  return todos ? (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={({ target }) => markTodoAsDone(todo.id, target.checked)}
              label={todo.label}
            />
            <span className={todo.done ? "done" : ""}>{todo.label}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="new-todo">
        <input
          type="text"
          value={newTodoLabel}
          onChange={({ target }) => setNewTodoLabel(target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
*/

/*
export default class RegisterProvider extends React.Component<{}, IState> {
  
  state:IState= {
    name: ""
  }

  addToProviders = (e: any) => {
   
    console.log("adding...", this.state.name);
    const provider:IProvider = {name: this.state.name};
    //dispatch(addProvider(provider, dispatch));
  };

  nameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const{name, value}:any = e.target;
    this.setState({
      name:value
    });
  };

  public render() {
    // const { submitSuccess, errors } = this.state;
    return (
      <div className="container-fluid">
        <div className="card-body col-md-6">
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.nameChangeHandler}
            placeholder="Provider name"
          />
          <button
            type="button"
            onClick={this.addToProviders}
            className="btn btn-outline-secondary"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
*/