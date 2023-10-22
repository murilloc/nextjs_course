export default function SomentePar(props) {

    // if (props.numero % 2 === 0) {
    //     return (
    //         <h3>{props.numero}</h3>
    //     )
    // } else {
    //     return null
    // }

    return (props.numero % 2 === 0 && <h3>{props.numero}</h3>)
}