import {Component} from "react";

export class ClasseContador extends Component {

    state = {
        numero: this.props.valorInicial ?? 0
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <>
                <h1>Classe Contador</h1>
                <h2>Valor Inicial: {this.props.valorInicial}</h2>
                <h2>{this.state.numero}</h2>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
            </>

        )
    }
}