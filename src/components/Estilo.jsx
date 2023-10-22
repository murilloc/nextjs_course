import style from '../styles/Estilo.module.css'
export default function Estilo(props) {
    return (
        <>
            <h1 style={
                {
                    color: props.numero > 5 ? "green" : "red"
                }
            }>Text</h1>
        </>
    )
}