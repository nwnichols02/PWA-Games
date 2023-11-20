/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTodos = async () => {
    const response = await todosApi.get("/todos")
    return response.data
}


// todosApi.ts
export async function addTodo(todo: { userId: number; title: string; completed: boolean }): Promise<void> {
    // Your implementation here
    // setTimeout(async () => {
        console.log(todo)
        const response =  await todosApi.post("/todos", todo)
        return response.data
    // }, 1000)
}

export const updateTodo = async (todo: any) => {
    setTimeout(async () => {
        return await todosApi.patch(`/todos/${todo.id}`, todo)
    }, 1000)
}

export const deleteTodo = async ({ id }: any) => {
    setTimeout(async () => {
        return await todosApi.delete(`/todos/${id}`, id)
    }, 1000)
}

export default todosApi 