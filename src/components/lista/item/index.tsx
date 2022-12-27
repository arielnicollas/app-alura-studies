import style from "../Lista.module.scss"


export default function Item(props: {tempo: string, tarefa: string}) {
    return (
        <li  className={style.item}>
            <h3>{props.tarefa}</h3>
            <p>{props.tempo}</p>
        </li>
    )
}