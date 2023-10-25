export default function Filho(props) {

    console.log(props.funcao)
    return (
        <>
            <h3>Filho</h3>
            <div>
                <button onClick={e => props.funcao(e)}>Falar com o Pai # Evento</button>
            </div>
            <div>
                <button onClick={props.funcao}>Falar com o Pai # Evento por padrão</button>
            </div>
            <div>
                <button onClick={() => props.funcao('Passei no ENEM!')}>Falar com o Pai sobre o ENEM # Outro Parâmetro</button>
            </div>
        </>
    )
}