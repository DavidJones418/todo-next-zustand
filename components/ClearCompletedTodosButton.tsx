import { useDidHydrate } from '~/lib/hooks'
import { useStore } from '~/lib/store'

export default function ClearCompletedTodosButton() {
  const didHydrate = useDidHydrate()
  const todos = useStore((state) => state.todos)
  const clearCompletedTodos = useStore((state) => state.clearCompletedTodos)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        clearCompletedTodos()
      }}
    >
      <button
        type="submit"
        disabled={didHydrate && todos.every((todo) => !todo.completed)}
        className="text-blue-700 disabled:text-blue-300"
      >
        Clear completed
      </button>
    </form>
  )
}
