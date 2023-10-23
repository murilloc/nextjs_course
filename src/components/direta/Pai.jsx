import Filho from "@/components/direta/Filho";

export default function Pai(props) {
    return (
        <>
            <h2>Família {props.familia}</h2>
            <Filho {...props} nome={'Murillo'} familia={props.familia} />
            <Filho {...props} nome={'Maria'} familia={props.familia} />
            <Filho {...props} nome={'Veronica'} />
        </>
    )
}