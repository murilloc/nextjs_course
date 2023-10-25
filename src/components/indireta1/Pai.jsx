import Filho from "@/components/indireta1/Filfo";


export default function Pai(props) {

    function faleComigo(param1) {
        console.log('Alguém falou comigo.')
        console.log(param1)
    }

    return (
        <>
        <Filho funcao={faleComigo}/>
        </>
    )
}