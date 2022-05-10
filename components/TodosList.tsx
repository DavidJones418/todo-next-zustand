import { Fragment } from 'react'
import { useDidHydrate } from '~/lib/hooks'
import { useStore } from '~/lib/store'
import EditTodoInput from './EditTodoInput'

export default function TodosList() {
  const didHydrate = useDidHydrate()
  const todos = useStore((state) => state.todos)
  const toggleTodo = useStore((state) => state.toggleTodo)
  return (
    <ul className="grid gap-1 empty:hidden">
      {didHydrate &&
        todos.map((todo) => (
          <li key={todo.id} className="flex">
            <label className="flex p-3">
              <input
                type="checkbox"
                name="completed"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="sr-only">Toggle completed</span>
            </label>
            <EditTodoInput todo={todo} />
          </li>
        ))}
    </ul>
  )
}
