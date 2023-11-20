/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import { Todo } from "../entities/Todo";

// interface TodoProps {
//   todo: any;
// }

export default function TodoCard({ todo }: any) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <div>
      {todo.title}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}