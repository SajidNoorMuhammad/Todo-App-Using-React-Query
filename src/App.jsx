import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchTodos } from './Utils/todos'
import { data } from 'autoprefixer'

function App() {

  const {
    data: todo = [],
    isLoading,
    isError } = useQuery({
      queryKey: ["todos"],
      queryFn: fetchTodos,
    });

  if (isError)
    return (
      <h1>
        Sorry We Can't Fetch Todos
      </h1>
    )

  return (
    <>
      <h1>
        Todo App In React Query
      </h1>
      {isLoading && <h1>Loading...</h1>}
      
      {
        todo.map((data, ind) => (
          <div key={ind}>
            <h1>{data}</h1>
          </div>
        )
        )
      }
    </>
  )
}

export default App
