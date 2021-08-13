import React, { useState } from 'react'

interface TodoInputProps {
  onSave(value: string): void
}

export default function TodoInput(props: TodoInputProps) {

  const [todoDescription, setTodoDescription] = useState("")

  function saveTodo(event: React.MouseEvent<HTMLButtonElement>) {
    props.onSave(todoDescription.trim())
    setTodoDescription('')
  }

  return (
    <>
      <input type="text" name="TodoDescription" value={todoDescription} onChange={event => setTodoDescription(event.target.value)} />
      <button onClick={saveTodo} disabled={todoDescription.trim() === ''}>Save</button>
    </>
  )
}
