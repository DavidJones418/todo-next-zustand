import Head from 'next/head'
import Image from 'next/image'
import ClearCompletedTodosButton from '~/components/ClearCompletedTodosButton'
import NewTodoForm from '~/components/NewTodoForm'
import TodosList from '~/components/TodosList'

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <Head>
        <title>To-Do App</title>
        <meta
          name="description"
          content="Another generic To-Do list example app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto flex-1">
        <div className="grid max-w-max gap-3 p-3">
          <h1 className="text-2xl font-bold">To-Dos</h1>
          <TodosList />
          <NewTodoForm />
          <ClearCompletedTodosButton />
        </div>
      </main>

      <footer className="p-6 text-center">
        Made with{' '}
        <a href="https://nextjs.org/" className="underline">
          Next.js
        </a>
      </footer>
    </div>
  )
}
