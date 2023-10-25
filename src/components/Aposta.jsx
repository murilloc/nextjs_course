import styles from '../styles/Aposta.module.css'
import Numero from "@/components/Numero";
import mega from "@/functions/mega.mjs";
import {useState} from "react";

export default function Aposta(props) {


    function renderizarNumeros() {
        return props.numeros.map((numero) => <Numero key={numero} numero={numero}/>)
    }

    return <div>
        {renderizarNumeros()})
    </div>


}
