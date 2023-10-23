import {log} from "next/dist/server/typescript/utils";

export default function botao() {

    function acao1() {
        console.log('Ação 1')
    }

    function acao3(e) {
        console.log(e)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => console.log(e.target.value)}/>
            </div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={() => console.log('Ação 2')}>
                Click #02
            </button>
            <button onClick={acao3}>
                Click #03
            </button>
            <button onClick={e => acao3(e.altKey)}>
                Click #04
            </button>
        </div>
    )

}