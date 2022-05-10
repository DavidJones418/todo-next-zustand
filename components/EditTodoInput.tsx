import { Todo, useStore } from '~/lib/store'

interface ShowTodoFormProps {
  todo: Todo
}

export default function EditTodoInput(props: ShowTodoFormProps) {
  const updateTodo = useStore((state) => state.updateTodo)
  const deleteTodo = useStore((state) => state.deleteTodo)
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="title"
        value={props.todo.title}
        onChange={(e) => {
          const title = e.currentTarget.value
          if (title) {
            updateTodo(props.todo.id, { title: e.currentTarget.value })
          } else {
            deleteTodo(props.todo.id)
          }
        }}
        className={`w-full rounded border p-1 ${
          props.todo.completed ? 'text-gray-300 line-through' : ''
        }`}
      />
    </form>
  )
}
