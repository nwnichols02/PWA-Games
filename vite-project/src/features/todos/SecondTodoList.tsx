/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getTodos, addTodo } from '../../api/todosApi';
import TodoCard from "../TodoCard"

export default function Demo() {
  const queryClient = useQueryClient();

//   const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos2"],
    queryFn: () => getTodos(),
    staleTime: Infinity,
    // cacheTime: 0,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos2"] });
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ userId: 1, title: title, completed: false });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo: any) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}