import {useState} from "react";

export default function Mouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "white",
        height: "100vh"
    };

    function quandoMoverOMouse(e) {
        console.log('Eixo X: ' + e.clientX + ' Eixo Y: ' + e.clientY)
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMoverOMouse}>
            <div>Eixo x: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}