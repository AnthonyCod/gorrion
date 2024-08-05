import { useState } from "react"

export default function Todo({item}){

    const[isEdit,setIsEdit] = useState(false);

    return (
    <div className="todo">
        {isEdit ? <div>Modo Editar</div> : <div>Modo Editar</div> }
    </div>
    
    // <div>
    //     {item.title} 
    //     <button onClick={() => setIsEdit(true)}>Editar</button>
    //     <button>Eliminar</button>
    //  </div>
    );
}