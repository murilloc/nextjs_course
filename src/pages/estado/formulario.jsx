import {useState} from "react";

export default function Formulario() {

    const [valor, setValor] = useState('Inicial')

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <input type="text" value={valor}/>
        </div>
    )
}