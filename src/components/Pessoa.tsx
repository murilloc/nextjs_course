import {Component} from "react";


interface PessoaProps {
    nome: string;
    idade?: number;
}

export default function Pessoa(props: PessoaProps) {

    return (
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Idade: {props.idade ?? 'Não informada'}</h1>
        </div>
    )

}