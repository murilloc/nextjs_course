import {Component} from "react";
import {ClasseContador} from "@/components/ClasseContador";

export default class Contador extends Component {

    render() {
        return (
            <>
                <ClasseContador valorInicial={100}></ClasseContador>
                <ClasseContador/>
            </>
        )
    }
}