import React from "react";
import Button from "../button/button";
import style from "./Formulario.module.scss"

class Formulario extends React.Component {

    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent){
        event.preventDefault()
        console.log('state', this.state)
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text"
                           name="tarefa"
                           value={this.state.tarefa}
                           onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                           id="tarefa"
                           placeholder="O que você quer estudar"
                           required 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo"></label>
                    <input type="time"
                           step={1}
                           name="tempo"
                           value={this.state.tempo}
                           onChange={event => this.setState({...this.state, tempo: event.target.value})}
                           id="tempo"
                           min={"00:00:00"}
                           max={"01:30:00"}
                           required 
                    />
                </div>
                <Button >
                    Adicionar
                </Button >
            </form>
        )
    }
}

export default Formulario