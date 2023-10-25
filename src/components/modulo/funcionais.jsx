export function Comp1() {
    return <h1>Primeiro Componente!</h1>
}

export const Comp2 = function () {
    return <h1>Segundo Componente!</h1>
}

export const Comp3 = () => {
    return <h1>Terceiro Componente!</h1>
}

export default function Comp4() {
    return <h1>Quarto Componente!</h1>
}

export const Comp5 = props => <h1>Quinto Componente!</h1>


const Comp6 = () => <h2>Sexto Componente!</h2>

const Comp7 = props => {
    const msg = "Seja bem-vindo(a)!"
    return <h2>Sétimo Componente! {props.msg}</h2>
}

export {
    Comp6, Comp7
}