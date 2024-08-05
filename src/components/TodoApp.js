import {useState} from "react";
import Todo from "./Todo";

export default function TodoApp(){
    const [title,setTitle] = useState("Hola");
    const [todos,setTodos] = useState([]);

    // function handleClick(e){
    //     e.preventDefault();
    //     setTitle("Adios");
    // }

    function handleChange(event){
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }



    return (
        <div className="toDoContainer">
        <form className="toDoCreateForm"
        onSubmit={handleSubmit}>

            <input 
            onChange={handleChange}
            className="toDoInput" 
            value={title}/>
                
            <input className="buttonCreate" 
            type="submit" 
            value="create to-do"
            onClick={handleSubmit}/>

        </form>

        <div className="todosContainer">
            {
                todos.map((item) => (
                    <Todo key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    );
}