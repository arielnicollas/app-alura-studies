import React from "react";
import style from"./Lista.module.scss"

function Lista() {

    const tarefas = [{
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
    }]


    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {
                    tarefas.map((item, index) => (
                        <li key={index} className={style.item}>
                            <h3>{item.tarefa}</h3>
                            <p>{item.tempo}</p>
                        </li>
                    ))
                }
            </ul>
        </aside >
    )
}

export default Lista