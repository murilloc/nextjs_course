import {useState} from "react";

export default function Contador() {
    const [contador, setContador] = useState(0)

    function handleClick(operation) {
        console.log(operation.target.name)
        operation.target.name === '+' ? setContador(contador + 1) : setContador(contador - 1)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
        }}>
            <label>Contador</label>:<input type="text" value={contador} readOnly/>
            <button onClick={handleClick} name={'+'}>Incrementar (+)</button>
            <button onClick={handleClick} name={'-'}>Decrementar (-)</button>
        </div>
    )
}