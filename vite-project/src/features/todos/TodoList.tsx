/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, updateTodo, deleteTodo, addTodo } from '../../api/todosApi';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const queryClient = useQueryClient()
    // const {
    //     isLoading,
    //     error,
    //     data: todos,
    //     isError,
    // } = useQuery('todos', getTodos);

    // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

    const {
        isPending: isLoading,
        isError,
        error,
        data: todos
    } = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
        select: (data) => data.sort((a: any, b: any) => b.id - a.id),
    });


    const { mutateAsync: addTodoMutation } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
    const { mutateAsync: updateTodoMutation } = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
    const { mutateAsync: deleteTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTodoMutation({ userId: 1, title: newTodo, completed: false })
        setNewTodo('')
    }

    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                {/* <FontAwesomeIcon icon={faUpload} /> */}
            </button>
        </form>
    )

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = todos.map((todo: any) => {
            return (
                <article key={todo.id}>
                    <div className="todo">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.id}
                            onChange={() =>
                                updateTodoMutation({ ...todo, completed: !todo.completed })
                            }
                        />
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    <button className="trash" onClick={() => deleteTodoMutation({ id: todo.id })}>
                        {/* <FontAwesomeIcon icon={faTrash} /> */}
                    </button>
                </article>
            )
        })
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}

export default TodoList;
