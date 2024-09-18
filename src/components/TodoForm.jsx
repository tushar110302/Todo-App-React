import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [value, setValue] = useState("")
    const {addTodo} = useTodo()

    function submitHandler(e){
        e.preventDefault();

        if(!value) return;
        addTodo({id: Date.now(), title:value, completed: false})
        setValue("")
    }


    return (
        <form onSubmit={submitHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

