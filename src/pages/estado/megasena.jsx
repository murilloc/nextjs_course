import styles from '../../styles/Megasena.module.css'
import Aposta from "@/components/Aposta";
import {useEffect, useState} from "react";
import mega from "@/functions/mega";

export default function Megasena() {

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega(qtde))
    }, [])

    function handleOnChange(value) {
        setQtde(+value)
    }


    return (


        <div className={styles.container}>
            <div className={styles.tituloPrincipal}>Megasena</div>
            <input type="number" value={qtde} min={6} max={15} onChange={(e) => handleOnChange(e.target.value)}/>
            <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
            <Aposta qtde={qtde} numeros={numeros}/>
        </div>

    )
}