import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface Todo {
  readonly id: string
  readonly title: string
  readonly completed: boolean
}

interface State {
  readonly todos: readonly Todo[]
  readonly createTodo: ({ title }: { title: string }) => void
  readonly toggleTodo: (id: string) => void
  readonly updateTodo: (id: string, { title }: { title: string }) => void
  readonly deleteTodo: (id: string) => void
  readonly clearCompletedTodos: () => void
}

export const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        todos: [],
        createTodo: ({ title }) => {
          set((state) => {
            state.todos.push({
              id: Date.now().toString(36),
              title,
              completed: false,
            })
          })
        },
        toggleTodo: (id) => {
          set((state) => {
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
              todo.completed = !todo.completed
            }
          })
        },
        updateTodo: (id, { title }) => {
          set((state) => {
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
              todo.title = title
            }
          })
        },
        deleteTodo: (id) => {
          set((state) => {
            const index = state.todos.findIndex((todo) => todo.id === id)
            if (index > -1) {
              state.todos.splice(index, 1)
            }
          })
        },
        clearCompletedTodos: () => {
          set((state) => {
            state.todos = state.todos.filter((todo) => !todo.completed)
          })
        },
      }))
    )
  )
)
