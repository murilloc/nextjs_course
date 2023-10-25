import Padrao, {
    Comp1 as Componente1,
    Comp2 as Componente2,
    Comp3,
    Comp5,
    Comp6,
    Comp7
} from "../../components/modulo/funcionais"

export default function test() {
    const msg = "Seja bem-vindo(a)!"
    return <>
        <Componente1/>
        <Componente2/>
        <Comp3/>
        <Padrao/>
        <Comp5/>
        <Comp6/>
        <Comp7 msg={msg}/>
    </>

}