import React from 'react'
import Todo from '../model/todo'

interface TodoItemProps {
  item: Todo,
  setDone(done: boolean): void
}

export default function TodoItem(props: TodoItemProps) {

  let {item, setDone} = props

  return (
    <li>
      <span><input type="checkbox" checked={item.done} onChange={() => setDone(!item.done)}/></span>
      <span>{item.description}</span>
    </li>
  )
}
