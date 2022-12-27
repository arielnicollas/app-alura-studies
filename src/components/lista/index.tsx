import style from"./Lista.module.scss"
import Item from "./item";

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