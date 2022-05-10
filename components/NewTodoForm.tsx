import { useState } from 'react'
import { useStore } from '~/lib/store'

export default function NewTodoForm() {
  const [title, setTitle] = useState('')
  const createTodo = useStore((state) => state.createTodo)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (title) createTodo({ title })
        setTitle('')
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        className="w-full rounded border p-1"
      />
    </form>
  )
}
