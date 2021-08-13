import React, { useReducer } from 'react'
import Todo from '../model/todo'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

interface TodoListState {
  todos: Todo[]
}

interface TodoListAction {
  type: string,
  addTodo?: Todo,
  todoIndex?: number
  todoDone?: boolean
}


function todoReducer(state: TodoListState, action: TodoListAction): TodoListState {
  switch(action.type) {
    case 'ADD-TODO':
      let newTodoList = action.addTodo ? [...state.todos, action.addTodo] : state.todos
      return {todos: newTodoList}
    case 'SET-DONE':
      let toggleList = [...state.todos]
      if (action.todoIndex !== undefined && action.todoDone !== undefined && action.todoIndex >= 0 && action.todoIndex < toggleList.length)
        toggleList[action.todoIndex].done = action.todoDone
      return {todos: toggleList}
    default:
      throw new Error(`TodoReducer could not handle action ${action.type}`)
  }
}

export default function TodoList() {

  const [todoState, dispatch] = useReducer(todoReducer, {todos: [{description: 'Hello world', done: false}]})

  return (
    <div>
      <ul>
        {
          todoState.todos.map((todo, index) => <TodoItem 
              key={index} 
              item={todo} 
              setDone={(done: boolean) => dispatch({type:"SET-DONE", todoIndex: index, todoDone: done})}
            />
          )
        }
      </ul>
      <TodoInput onSave={(value: string) => dispatch({type: "ADD-TODO", addTodo: {description: value, done: false}})} />
    </div>
  )
}
