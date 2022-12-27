import style from "./Lista.module.scss"
import Item from "./item";
import { useState } from "react";

function Lista() {

    const [tarefas, setTarefas] = useState([{
        tarefa: 'Javascript',
        tempo: '02:00:00'
    },
    {
        tarefa: 'React',
        tempo: '03:00:00'
    },

    {
        tarefa: 'Typescript',
        tempo: '04:00:00'
    }])


    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => setTarefas([...tarefas, {tarefa: 'Swift',
        tempo: '06:00:00'}])}> Estudos do dia </h2>
            <ul>
                {
                    tarefas.map((item, index) => (
                        <Item
                            key={index}
                            tarefa={item.tarefa}
                            tempo={item.tempo}
                        />
                    ))
                }
            </ul>
        </aside >
    )
}

export default Lista